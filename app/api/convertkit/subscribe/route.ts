import { NextRequest, NextResponse } from 'next/server';

interface SubscribeRequest {
  email: string;
  firstName?: string;
  leadMagnet?: string;
  heroVariant?: string;
  submittedAt?: number;
  website?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_LEAD_MAGNET = 'pricing-guide';
const ALLOWED_LEAD_MAGNET_TAGS = {
  'pricing-guide': 'Lead Magnet: Pricing Guide',
  'coaches-eye': 'Lead Magnet: Coaches Eye',
  'sme-four-layers': 'Lead Magnet: SME Four Layers',
} as const;
// Direct sequence enrollment (Kit v3 calls sequences "courses"). Used instead
// of a Kit visual automation so the funnel is fully code-defined.
const LEAD_MAGNET_SEQUENCES: Partial<Record<keyof typeof ALLOWED_LEAD_MAGNET_TAGS, number>> = {
  'sme-four-layers': 2789619, // "Invisible Expertise (SME Four Layers)"
};
// A/B hero attribution for the /sme lead-magnet page. Stored on the subscriber
// as the `hero_variant` custom field so conversions are attributable per hero.
const ALLOWED_HERO_VARIANTS = new Set(['A', 'B', 'C', 'D', 'E']);
const MAX_REQUEST_BYTES = 4096;
// Every ConvertKit call gets a hard timeout so a stalled third party can't
// hang the unlock path or pin the serverless function.
const CONVERTKIT_TIMEOUT_MS = 5000;
const MIN_SUBMIT_AGE_MS = 800;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type LeadMagnet = keyof typeof ALLOWED_LEAD_MAGNET_TAGS;
type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitBuckets = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    forwardedFor ||
    'unknown'
  );
}

function isAllowedLeadMagnet(value: string): value is LeadMagnet {
  return Object.prototype.hasOwnProperty.call(ALLOWED_LEAD_MAGNET_TAGS, value);
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const current = rateLimitBuckets.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

// Helper to get or create a tag and return its ID
async function getOrCreateTagId(apiKey: string, tagName: string): Promise<number | null> {
  try {
    // First, try to find existing tag
    const listResponse = await fetch(
      `https://api.convertkit.com/v3/tags?api_key=${apiKey}`,
      { method: 'GET', signal: AbortSignal.timeout(CONVERTKIT_TIMEOUT_MS) }
    );

    if (listResponse.ok) {
      const data = await listResponse.json();
      const existingTag = data.tags?.find(
        (t: { name: string; id: number }) => t.name.toLowerCase() === tagName.toLowerCase()
      );
      if (existingTag) {
        return existingTag.id;
      }
    }

    // Tag doesn't exist, create it
    const createResponse = await fetch(
      `https://api.convertkit.com/v3/tags`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: apiKey,
          tag: { name: tagName }
        }),
        signal: AbortSignal.timeout(CONVERTKIT_TIMEOUT_MS)
      }
    );

    if (createResponse.ok) {
      const created = await createResponse.json();
      return created.tag?.id || null;
    }

    return null;
  } catch (error) {
    console.error(`Error getting/creating tag ${tagName}:`, error);
    return null;
  }
}

// Helper to add a tag to a subscriber
async function addTagToSubscriber(
  apiKey: string,
  tagId: number,
  email: string
): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/tags/${tagId}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: apiKey,
          email: email
        }),
        signal: AbortSignal.timeout(CONVERTKIT_TIMEOUT_MS)
      }
    );
    return response.ok;
  } catch (error) {
    console.error(`Error adding tag ${tagId} to subscriber:`, error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'JSON body is required' },
        { status: 415 }
      );
    }

    const contentLength = Number(request.headers.get('content-length') || '0');
    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { error: 'Request body is too large' },
        { status: 413 }
      );
    }

    const body = await request.json() as Partial<SubscribeRequest>;
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { email, submittedAt } = body;
    const firstName = typeof body.firstName === 'string'
      ? body.firstName.trim().slice(0, 80)
      : undefined;
    const website = typeof body.website === 'string' ? body.website : '';
    const heroVariant =
      typeof body.heroVariant === 'string' && ALLOWED_HERO_VARIANTS.has(body.heroVariant)
        ? body.heroVariant
        : undefined;

    if (website && website.trim() !== '') {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    if (typeof submittedAt === 'number') {
      const submitAge = Date.now() - submittedAt;
      if (submitAge >= 0 && submitAge < MIN_SUBMIT_AGE_MS) {
        return NextResponse.json(
          { error: 'Please try again' },
          { status: 400 }
        );
      }
    }

    const requestedLeadMagnet = typeof body.leadMagnet === 'string' && body.leadMagnet
      ? body.leadMagnet
      : DEFAULT_LEAD_MAGNET;
    if (!isAllowedLeadMagnet(requestedLeadMagnet)) {
      return NextResponse.json(
        { error: 'Invalid lead magnet' },
        { status: 400 }
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(`${clientIp}:${requestedLeadMagnet}`)) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

    // Validate email
    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const convertKitApiKey = process.env.CONVERTKIT_API_KEY;
    const convertKitFormId = process.env.CONVERTKIT_FORM_ID;

    if (!convertKitApiKey || !convertKitFormId) {
      console.error('ConvertKit not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Step 1: Subscribe to form
    const subscribeResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: convertKitApiKey,
          email: normalizedEmail,
          first_name: firstName || normalizedEmail.split('@')[0],
          fields: {
            source: 'cf-website',
            lead_magnet: requestedLeadMagnet,
            signup_date: new Date().toISOString(),
            ...(heroVariant ? { hero_variant: heroVariant } : {})
          }
        }),
        signal: AbortSignal.timeout(CONVERTKIT_TIMEOUT_MS),
      }
    );

    if (!subscribeResponse.ok) {
      const errorData = await subscribeResponse.json();
      console.error('ConvertKit API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    const result = await subscribeResponse.json();
    const subscriberId = result.subscription?.subscriber?.id;

    // Step 2: Add tag (must be done separately - ConvertKit quirk)
    // Determine tag name based on lead magnet
    const tagName = ALLOWED_LEAD_MAGNET_TAGS[requestedLeadMagnet];
    const tagId = await getOrCreateTagId(convertKitApiKey, tagName);

    if (!tagId) {
      console.error('ConvertKit tag unavailable:', { tagName, leadMagnet: requestedLeadMagnet });
      return NextResponse.json(
        { error: 'Failed to tag subscriber' },
        { status: 500 }
      );
    }

    const tagged = await addTagToSubscriber(convertKitApiKey, tagId, normalizedEmail);
    if (!tagged) {
      console.error('ConvertKit tag subscribe failed:', { tagId, tagName, leadMagnet: requestedLeadMagnet });
      return NextResponse.json(
        { error: 'Failed to tag subscriber' },
        { status: 500 }
      );
    }

    // Step 3: Enroll in the lead magnet's sequence, if one is mapped.
    // Non-fatal: a sequence hiccup should not fail the signup.
    const sequenceId = LEAD_MAGNET_SEQUENCES[requestedLeadMagnet];
    if (sequenceId) {
      try {
        const sequenceResponse = await fetch(
          `https://api.convertkit.com/v3/courses/${sequenceId}/subscribe`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              api_key: convertKitApiKey,
              email: normalizedEmail,
            }),
            signal: AbortSignal.timeout(CONVERTKIT_TIMEOUT_MS),
          }
        );
        if (!sequenceResponse.ok) {
          console.error('ConvertKit sequence enroll failed:', {
            sequenceId,
            leadMagnet: requestedLeadMagnet,
            status: sequenceResponse.status,
          });
        }
      } catch (sequenceError) {
        console.error('ConvertKit sequence enroll error:', sequenceError);
      }
    }

    console.log('Subscribed to ConvertKit', { subscriberId, tag: tagName, leadMagnet: requestedLeadMagnet });

    return NextResponse.json({
      success: true,
      subscriber_id: subscriberId
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}

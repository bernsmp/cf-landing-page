import { NextRequest, NextResponse } from 'next/server';

interface SubscribeRequest {
  email: string;
  firstName?: string;
  leadMagnet?: string;
}

// Helper to get or create a tag and return its ID
async function getOrCreateTagId(apiKey: string, tagName: string): Promise<number | null> {
  try {
    // First, try to find existing tag
    const listResponse = await fetch(
      `https://api.convertkit.com/v3/tags?api_key=${apiKey}`,
      { method: 'GET' }
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
        })
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
        })
      }
    );
    return response.ok;
  } catch (error) {
    console.error(`Error adding tag ${tagId} to ${email}:`, error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscribeRequest = await request.json();
    const { email, firstName, leadMagnet } = body;

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
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
          email,
          first_name: firstName || email.split('@')[0],
          fields: {
            source: 'cf-website',
            lead_magnet: leadMagnet || 'pricing-guide',
            signup_date: new Date().toISOString()
          }
        }),
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
    const tagNameMap: Record<string, string> = {
      'pricing-guide': 'Lead Magnet: Pricing Guide',
      'coaches-eye': 'Lead Magnet: Coaches Eye',
    };
    const tagName = tagNameMap[leadMagnet || 'pricing-guide'] || `Lead Magnet: ${leadMagnet}`;
    const tagId = await getOrCreateTagId(convertKitApiKey, tagName);

    if (tagId) {
      await addTagToSubscriber(convertKitApiKey, tagId, email);
    }

    console.log(`Subscribed ${email} to ConvertKit`, { subscriberId, tag: tagName });

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

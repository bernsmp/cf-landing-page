// SME lead-magnet page content — the prompt promised on AI Explored
// (Social Media Examiner, Michael Stelzner). Locked copy spec:
// /Users/maxb/Downloads/cf-sme-lead-magnet-page.md
// The deeper Four Layers extraction prompt + follow-ups are canonically stored at
// mb-brain/2 - Cognitive Fingerprint/02 - Operations/Sales And Productization/
// CF App/sme-four-layers-extraction-prompt.md and delivered by the Kit sequence.

export type HeroVariantId = 'A' | 'B' | 'C' | 'D' | 'E';

export interface HeroVariant {
  id: HeroVariantId;
  headline: string;
  sub: string;
  cta: string;
}

// Five hero variants, rotated per visitor and tagged into Kit so we can see
// which one converts. Body copy stays identical underneath. Verbatim from spec.
export const HERO_VARIANTS: HeroVariant[] = [
  {
    id: 'A',
    headline: 'You just heard the method. Here’s the prompt.',
    sub: 'Run it on one transcript of yourself working. It finds the one pattern you can’t see in your own words, names it, and shows you exactly where you did it. About ten minutes.',
    cta: 'Send me the prompt',
  },
  {
    id: 'B',
    headline: 'Watch yourself show up in your own transcript.',
    sub: 'This is the prompt from the show. Paste in one real call or interview. It surfaces the move you make without realizing, the thing clients feel and you’ve never been able to name.',
    cta: 'Get the prompt',
  },
  {
    id: 'C',
    headline: 'The full prompt, like I promised on the show.',
    sub: 'One transcript in. One named pattern out, with the receipts from your own words. Free. Enter your email and it’s yours.',
    cta: 'Send it over',
  },
  {
    id: 'D',
    headline: 'Find the pattern you can’t see. In about ten minutes.',
    sub: 'The exact prompt I walked through on the podcast. Drop in a coaching call, a sales call, or an interview like the one you just heard. It reads how you actually operate and names the move you keep making.',
    cta: 'Get the prompt',
  },
  {
    id: 'E',
    headline: 'You can’t explain how you do it. Your transcripts can.',
    sub: 'Letting AI interview you only scratches the surface. This prompt works the other way around. It reads what you actually did and shows you the pattern underneath. Run it on one transcript.',
    cta: 'Send me the prompt',
  },
];

export const HERO_VARIANT_IDS: HeroVariantId[] = HERO_VARIANTS.map((v) => v.id);

// "How it works" — verbatim from spec.
export const HOW_IT_WORKS: string[] = [
  'Enter your email and the prompt lands in your inbox.',
  'Grab one transcript of yourself working. No transcript handy? The email includes the fastest way to get one.',
  'Paste it in, run it, and read what comes back.',
];

# Add "Find Your Stadium Sign" Prompt

## Plan

- [x] Add new prompt entry to `/data/prompts.ts`
  - Slug: `stadium-sign`
  - Title: "Find Your Stadium Sign"
  - Category: `extraction`
  - Difficulty: `intermediate`
  - isPremium: `true` (paid subscriber prompt)
  - Full prompt content from user
  - Add whatToLookFor tips
  - Add relevant tags
- [x] Test the build
- [x] Verify the prompt displays correctly on `/prompts` page (in Subscriber Vault section)

## Review

### Summary of Changes
1. Added "Find Your Stadium Sign" prompt to `/data/prompts.ts` (id: 8)
   - Two-part prompt: Part 1 finds the 3-5 word philosophy, Part 2 builds a TED talk
   - Premium prompt (requires subscriber password)
   - Category: extraction
   - Includes 5 "What to Look For" tips
   - Related article linked to Substack

### No New Dependencies
Uses existing prompt infrastructure.

### No Environment Variables Needed
Uses existing password verification system.

### Notes
- Thumbnail path set to `/images/prompts/stadium-sign.png` — you'll need to add this image
- Will appear in the "Subscriber Vault" section on `/prompts` page

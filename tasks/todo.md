# Add Invisible Function Inventory Prompt

## Task
Add the "Invisible Function Inventory" prompt to the site as a paid prompt.

## Plan
- [x] Review existing prompt structure in data/prompts.ts
- [x] Add new prompt with id '14', slug 'invisible-function-inventory'
- [x] Set as premium (isPremium: true)
- [x] Category: extraction
- [x] Difficulty: intermediate
- [x] Add appropriate tags and metadata
- [x] Verify build passes

---

## Review

### Summary of Changes
- Added new prompt "Invisible Function Inventory" to `data/prompts.ts`
  - ID: 14
  - Slug: invisible-function-inventory
  - Category: extraction
  - Difficulty: intermediate
  - Premium: true (paid subscribers only)

### Prompt Details
An extraction tool that reveals hidden value you provide beyond your stated deliverable. Surfaces the functions you can't see because you're too close to your own work.

**Input options:**
- Highest value: Client delivery transcripts, sales/discovery calls, testimonials
- High value: Proposals, SOWs, offer pages, email threads
- Good starting point: Voice interview mode (Claude asks questions)

**Output structure:**
- Level 1: Your #1 hidden function with evidence
- Level 2: Complete inventory across 7 categories (trust, pattern recognition, translation, judgment, access, psychological support, coordination)
- Level 3: Positioning implications with naming options and language

### New Dependencies
- None

### Environment Variables
- None needed

### Known Limitations
- Needs thumbnail image at `/images/prompts/invisible-function-inventory.png`

### Future Improvements
- Create custom thumbnail image for the prompt

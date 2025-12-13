# Add Descriptions and Instructions to Workflow Steps

## Problem
The workflow packs currently show step titles and prompts but lack:
- Step descriptions explaining what the step does
- Instructions on how to use the step
- Context about why this step matters
- Guidance on what to expect

Users need this context to understand each step without seeing the full prompt.

## Solution
Add the following fields to each step in the Workflow interface in `data/prompts.ts`:
- `description`: What this step does (1-2 sentences)
- `instructions`: How to use this step (bullet points)

## Tasks

- [x] Update `Workflow` interface in `data/prompts.ts` to add `description` and `instructions` fields to steps
- [x] Add descriptions and instructions for all 6 workflow packs (total of ~22 steps)
  - [x] Authority Architecture Pack (3 steps)
  - [x] Breakthrough Pattern Pack (3 steps)
  - [x] Content Engine Pack (3 steps)
  - [x] Decision Architecture Pack (3 steps)
  - [x] Resistance Alchemist Pack (3 steps)
  - [x] Signature Method Pack (5 steps)
- [x] Update workflow detail page to display descriptions and instructions
- [x] Test the changes

## Review

### Summary of Changes
1. **Created `WorkflowStep` interface** with new fields: `description` (string) and `instructions` (string array)
2. **Added content for all 20 workflow steps** across 6 packs with:
   - Clear 1-2 sentence descriptions explaining what each step does
   - 4 bullet-point instructions on how to use each step
3. **Updated workflow detail page** (`app/prompts/workflow/[slug]/page.tsx`) to:
   - Display step description below the title in the collapsed state (visible before expanding)
   - Display "How to use this step" section with bullet-pointed instructions when expanded

### Files Modified
- `data/prompts.ts` - Added WorkflowStep interface, expanded all workflow step data with descriptions and instructions
- `app/prompts/workflow/[slug]/page.tsx` - Updated step header to show description, added instructions display when expanded

### New Dependencies Added
None

### Environment Variables
None

### Known Limitations
- Instructions are stored in the data file rather than the markdown files (simpler implementation, but means two places to update if content changes)

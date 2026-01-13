# Add Claude Skills Section to Prompt Vault

## Overview
Add a new "Claude Skills" section to the prompts page with both free and paid skills. Skills are downloadable .skill (ZIP) files that users can import into Claude Code.

## Skills to Add

### FREE (2)
- problem-solution-extractor.skill - Analyzes transcripts for problems/solutions
- breakthrough-pattern.skill - Mines "aha moment" creation patterns

### PAID (6)
- story-mining.skill - 5-step workflow for transcript → content
- signature-method.skill - 5-tool comprehensive methodology suite
- authority-architecture.skill - 3-step authority positioning pipeline
- content-engine.skill - 90 days of content from expertise
- resistance-alchemist.skill - Turn contrarian approaches into positioning
- decision-architecture.skill - Extract invisible if-then decision rules

---

## Implementation Plan

### Phase 1: Data & Files Setup
- [ ] Copy 8 .skill files to `/public/skills/` folder
- [ ] Add `Skill` interface to `data/prompts.ts`
- [ ] Add skills array with metadata (title, description, isPremium, filename)
- [ ] Add helper functions `getFreeSkills()` and `getPremiumSkills()`

### Phase 2: UI - Add Skills Section to Prompts Page
- [ ] Import skills data and functions
- [ ] Add "Claude Skills" section after workflows
- [ ] Create skill card component (similar to prompt cards but with download action)
- [ ] Free skills section (always visible)
- [ ] Premium skills section (respects password unlock)
- [ ] Add Terminal icon from lucide-react for skill cards

### Phase 3: Verify & Test
- [ ] Run `npm run build` to check for errors
- [ ] Test skill downloads work correctly
- [ ] Test premium unlock works for paid skills

---

## Review
(To be filled after completion)

# Add Decision Architect Skill to Paid Section

## Plan

- [ ] Copy decision-architect.zip to public/skills/ as decision-architect.skill
- [ ] Add skill entry to data/prompts.ts in the premium skills section
- [ ] Run build to verify no errors
- [ ] Provide thumbnail image prompt

## Details

**Skill Info:**
- Name: Decision Architect
- Description: Extract invisible decision-making patterns from expert client conversations. Transform transcripts into a codified Decision Architecture Map.
- Tool Count: 3 (Excavate, Architect, Implement phases)
- File Size: 18 KB
- Premium: Yes

---

# Coach's Eye Lead Magnet - Interactive Magazine

## Completed ✅

- [x] Create Coach's Eye lead magnet page structure
- [x] Add 7 patterns (Sports: Belichick, Popovich, Wooden | Military: McChrystal | Business: Nooyi, Burns, Mulcahy)
- [x] Implement blur-gate after Pattern 1
- [x] ConvertKit integration with automatic tagging
- [x] Redesign as interactive magazine (Players Tribune style)
- [x] Add chapter navigation (sticky dots)
- [x] Add scroll progress bar
- [x] Full-screen pattern intro cards
- [x] Dramatic pull quotes
- [x] Category badges (Sports/Military/Business with color coding)
- [x] Create OG image for social sharing
- [x] Export content to markdown file
- [x] Fix mobile spacing issues
- [x] Add hero image with parallax
- [x] Add image field to Pattern interface
- [x] Add parallax effects to PatternIntro backgrounds
- [x] Swap Ed Catmull → Ursula Burns (Pattern 6: The Direct Line)
- [x] Generate and add all 7 pattern images

## In Progress 🔄

- [ ] Add Pattern 6: The Braintrust (Ed Catmull) - now 8 patterns total
- [ ] Update all pattern content with new copy
- [ ] Create PromptCard component with toggle + lock state
- [ ] Move email gate to after Pattern 2
- [ ] Integrate prompts into PatternContent
- [ ] Fix PatternContent layout (remove image placeholder, single-column)

## Next Up 📋

- [ ] Test email signup flow end-to-end
- [ ] Generate image for new Pattern 6 (Catmull)
- [ ] Mobile testing and refinements
- [ ] Commit changes to git

## Pattern Leaders (8 total: 3 women, 5 men)

1. Bill Belichick - The Zoom Lens (Sports)
2. Gregg Popovich - The Deliberate Mirror (Sports)
3. John Wooden - The Invisible Load (Sports)
4. Stanley McChrystal - The Shared Consciousness (Military)
5. Indra Nooyi - The Long Game (Business)
6. Ed Catmull - The Braintrust (Business) **NEW**
7. Ursula Burns - The Direct Line (Business)
8. Anne Mulcahy - The Essential Cut (Business)

## New Features

### Prompt Cards
- Each pattern has an actionable prompt
- Toggle to expand/collapse
- Patterns 1-2: Fully unlocked
- Patterns 3-8: Prompts locked until email signup
- Copy button for easy use

### Email Gate
- Moved to after Pattern 2 (was after Pattern 1)
- Unlocks prompts for patterns 3-8

## File Structure

```
app/coaches-eye/
├── page.tsx (main orchestrator)
├── data.ts (pattern content - 8 patterns)
├── opengraph-image.tsx
└── components/
    ├── ChapterNav.tsx
    ├── PatternIntro.tsx (has parallax background images)
    ├── PatternContent.tsx (single-column layout + prompts)
    ├── PromptCard.tsx **NEW**
    ├── PullQuote.tsx
    ├── ScrollProgress.tsx
    ├── UnlockGate.tsx
    └── index.ts
```

## Images

All images saved to: `public/images/coaches-eye/`
- hero.png
- pattern-1.png (Belichick)
- pattern-2.png (Popovich)
- pattern-3.png (Wooden)
- pattern-4.png (McChrystal)
- pattern-5.png (Nooyi)
- pattern-6.png (Catmull) **NEEDS NEW IMAGE**
- pattern-7.png (Burns)
- pattern-8.png (Mulcahy)

---

## Dev Notes

- Dev server: `npm run dev` → localhost:3000/coaches-eye
- Images display at 30% opacity with gradient overlays
- Parallax effect on PatternIntro backgrounds
- Prompts locked for patterns 3-8 until email signup

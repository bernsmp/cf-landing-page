# Coach's Eye Lead Magnet - Interactive Magazine

## Completed ✅

- [x] Create Coach's Eye lead magnet page structure
- [x] Add 7 patterns (Sports: Belichick, Popovich, Wooden | Military: McChrystal | Business: Nooyi, Catmull, Mulcahy)
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

## In Progress 🔄

- [ ] Add hero image (user generating via image gen)
- [ ] Wire up hero image (`public/images/coaches-eye/hero.png`)

## Next Up 📋

- [ ] Add parallax effects to images
- [ ] Generate and add pattern images (7 total)
- [ ] Final polish pass (animations, micro-interactions)
- [ ] Test email signup flow end-to-end
- [ ] Mobile testing and refinements

## File Structure

```
app/coaches-eye/
├── page.tsx (main orchestrator)
├── data.ts (pattern content)
├── opengraph-image.tsx
└── components/
    ├── ChapterNav.tsx
    ├── PatternIntro.tsx
    ├── PatternContent.tsx
    ├── PullQuote.tsx
    ├── ScrollProgress.tsx
    ├── UnlockGate.tsx
    └── index.ts
```

## Image Prompts

**Base Style:**
```
Bold high-contrast editorial, geometric abstract elements, dynamic diagonal composition, dark background with electric gold and amber accents, sharp lines and shapes, ESPN meets Wired aesthetic, futuristic sports documentary, dramatic lighting, 16:9 --style raw --v 6
```

**Hero:**
```
Massive geometric eye constructed from angular shards and data fragments, basketball court lines, military grid patterns, and corporate structures all visible within the iris, bold ESPN poster energy with Wired futurism, black and gold, intense and dynamic --ar 16:9 --style raw --v 6
```

---

## Review

**Summary:** Interactive magazine-style lead magnet with 7 cognitive patterns from legendary leaders. ESPN + Wired aesthetic with chapter navigation, scroll progress, dramatic typography.

**Files changed:** 11 files, +1447 lines

**Commit:** `98dce1e` - Add Coach's Eye interactive magazine lead magnet

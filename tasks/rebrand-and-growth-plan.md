# CF Rebrand — Open Items + Plans

> Post-rebrand follow-ups after the Signal > Noise → Cognitive Fingerprint Newsletter shift.
> 4 items, ranked by priority. Item 1 deferred to a new session per Max. Items 2-4 are plan-only until Max approves execution.

---

## Priority 1 (NEW — do in a separate session)

### Build Reginald Love Famous Fingerprint site

**Source:** https://www.reginaldlove.com/

**Scope:** Full CF-style treatment matching the Coach K bar.

**What "a Famous Fingerprint site" means here (based on Coach K precedent):**
1. **Research + extraction** — scrape reginaldlove.com, pull ancillary sources (interviews, talks, books, podcast appearances), run the standard CF extraction pipeline (DRIVE methodology, 4-layer depth, Nick Reiland calibration)
2. **Dedicated page** at `/reginald-love` — parallax hero, parallax sections for each signature pattern, the "Meet the Coach" beat equivalent, CTA footer
3. **Published-variant card** on `/famous-fingerprints` page — photo hero, stats, hook copy, links to the dedicated page
4. **Copy and assets** — hero image, pattern illustrations, parallax transitions matching the Coach K visual language
5. **Update grid counter** — "2 published · 4 in progress" bumps to "3 published · 4 in progress" (or drop Baker back if that reorg doesn't ship first)

**Inputs needed before the work session:**
- Who Reginald Love is and why he's being mapped (positioning angle for the piece)
- Source material scope — just the site, or also interviews / books / podcasts?
- Timeline + whether Max wants Max to drive or delegate to the CF extraction pipeline

**Deferred per Max. Not started.**

---

## Priority 2

### Reorganize Baker Frameworks page into CF format

**Current state:** `/baker-frameworks` is a 399-line standalone essay with a sticky sidebar nav covering 7 David Baker frameworks plus a "CF connection" epilogue. It reads as a tribute essay, not a mapped fingerprint.

**Target state:** Recast as a Famous Fingerprint in the same voice and structure as Coach K's page.

**Proposed restructure:**

| Current section | Becomes | Rationale |
|-----------------|---------|-----------|
| Hero ("The 7 David Baker Frameworks") | Hero — *David Baker: The Fingerprint Behind the Firm That Teaches Every Firm* | Reframes from "here are his ideas" to "here's his operating system" |
| 7 framework sections (Hobby/Job/Enterprise, Stopwatch, etc.) | 7 **signature patterns** — each named as a CF pattern, not a framework | Switches voice from "here's what he teaches" to "here's what he does unconsciously" |
| "The CF Connection" epilogue | Dissolved into the hero and close | The whole page IS the CF connection; no need for a separate section |
| — (new) | **Proof section** — quotes from his podcast episodes, books, workshop observations | Matches Coach K's evidence chain pattern |
| — (new) | **Two-ways-in CTA footer** — same structure as `/famous-fingerprints` ("Suggest someone" + "Get your own CF") | Consistency across gallery |

**Voice shifts:**
- "Baker teaches..." → "Baker does..."
- "His framework for..." → "The pattern he runs on every client conversation..."
- Framework names stay but get CF-style subtitles ("The Stopwatch Test: how he decides in 90 seconds")

**Assets needed:**
- Hero image (something matching the Coach K visual tone — dark, cinematic, editorial)
- Decision: does Baker get 7 patterns (match the existing framework count) or condensed to 4-5 (match Coach K's signature-pattern count)? Recommendation: keep 7, since the frameworks are already his named system and condensing would flatten his identity.

**Card update on `/famous-fingerprints`:**
- Change David Baker variant from `coming-soon` → `published`
- Add stat block: `{ value: '7', label: 'Frameworks' }` + `{ value: '30+', label: 'Years Advising Agencies' }` + `{ value: '2hr', label: 'Avg First Call' }` (rough — pull real numbers from his site)

**Effort estimate:** 1-2 hours of reorg + voice pass. Needs Max's sign-off on pattern count decision before starting.

---

## Priority 3

### Inline "Substack" mentions in body copy

**Where:** `app/articles/page.tsx` — lines 113 ("Visit Cognitive Fingerprint Newsletter on Substack →") and 166 ("Read on Substack").

**The question:** Is "Substack" a platform reference (like "Watch on YouTube") or a brand reference (like saying "our Substack")?

**Two options:**

**Option A — Leave as-is.** "Substack" reads as platform-neutral context. Readers know it means "external site where you can read the full article." Keeps the descriptive specificity.

**Option B — Rebrand to "Newsletter."** "Visit the newsletter →" and "Read the full article →" align with the full CF rebrand. Loses the platform specificity but gains brand consistency.

**Recommendation:** Option B. Reasoning — Max said "its all being rebranded" explicitly. Descriptive platform-name context in body copy is the last place "Substack" survives outside the footer label (which we already changed). Full consistency is worth the tiny loss in platform specificity. Anyone clicking the link will see it's a Substack anyway.

**If Option B:**
- Line 113: "Visit Cognitive Fingerprint Newsletter on Substack →" → "Read the Newsletter →"
- Line 166: "Read on Substack" → "Read full article →"

**Effort:** 2-minute edit.

---

## Priority 4

### Rebrand ConvertKit tag `Signal>Noise SS Sub`

**Where:** `scripts/import-substack-to-kit.js` line 175 (and a comment on line 11).

**Why it's deferred:** The tag is a persistent identifier in ConvertKit's database. Every subscriber imported from Substack has been tagged with `Signal>Noise SS Sub`. Renaming the string in the script without renaming in ConvertKit first would break the import (the script would create a NEW tag with the new name, leaving all historically-tagged subscribers stranded on the old tag).

**Correct sequence:**
1. Log into ConvertKit dashboard
2. Rename the existing tag `Signal>Noise SS Sub` → `CF Newsletter SS Sub` (or similar)
3. Confirm rename completed without errors
4. Update the script (line 175) to match the new tag name
5. Update the comment on line 11
6. Test the import flow with a throwaway email to confirm tagging still works

**Alternative — no rebrand:** Leave the tag alone. It's invisible to subscribers and pure operational infrastructure. Cost of touching it (risk of breaking imports) is higher than the benefit (internal consistency).

**Recommendation:** Leave for now. Revisit if ConvertKit's tag list becomes confusing when Max scales to multiple newsletters or tag-based automations where the stale name actually causes friction.

**Effort:** 10 minutes once the sequence is followed correctly. 0 minutes if deferred.

---

## Execution order suggestion

1. **Reginald Love** — new session (highest priority per Max, dedicated session)
2. **Baker page reorg** — next real session on the site (biggest visible consistency win)
3. **Inline Substack** — bundle with whatever next edit touches the articles page (2-min cleanup)
4. **ConvertKit tag** — leave unless it becomes a friction point

---

*Last updated: 2026-04-20*

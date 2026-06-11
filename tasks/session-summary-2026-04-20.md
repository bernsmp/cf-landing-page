# Session Summary — 2026-04-20

> Context handoff doc. Read this first in the next session before site audit or CF-for-Teams work.

---

## Session scope

Three big threads ran today:

1. **Newsletter rebrand** — Signal > Noise → Cognitive Fingerprint Newsletter (launch via the Dr. Pepper article editor's note)
2. **Site rebrand + nav/structure work** — post-launch site alignment with the CF brand
3. **Article pipeline** — Coach K + Amodei siblings drafted; Reginald Love kicked off in a separate session (still running in parallel)

---

## What shipped

### Rebrand work (site-wide)

- **URL swap** across 11 files: `irreplaceablepositioning.substack.com` → `signalovernoise.ai` (30 occurrences, bulk sed)
- **Brand name swap** across same files: `Signal > Noise` / `Signal &gt; Noise` / `Signal {'>'} Noise` → `Cognitive Fingerprint Newsletter` (handled double-suffix edge case on `/start`)
- **Footer:**
  - Copyright `© 2025 Signal > Noise` → `© 2026 Cognitive Fingerprint™`
  - Connect label `Substack` → `Newsletter`
  - Explore column added `Baker (Study)` link
- **ConvertKit tag** (`Signal>Noise SS Sub` in `scripts/import-substack-to-kit.js`) — intentionally left alone. Persistent identifier; renaming would orphan existing tagged subscribers. Requires ConvertKit dashboard rename first if ever revisited.

### Nav changes

**Before:**
Method · Prompt Vault · Insights · **Resources ▾** (Coach's Eye, Famous Fingerprints, Baker Frameworks, CF In Action) · **Newsletter** · Start · [See What Leaders See]

**After:**
Method · Prompt Vault · Insights · **Famous Fingerprints** · Start · [See What Leaders See]

Coach's Eye stays accessible via the gold CTA button. `/newsletter` page was deleted (orphan link on Coach's Eye page repointed to `/famous-fingerprints`). `/baker-frameworks`, `/coaches-eye`, and `/in-action` still exist at their URLs.

### Famous Fingerprints gallery (`/famous-fingerprints`)

No net change in card count. Counter reads `1 published · 4 in progress`. Baker was added as a card, then pulled back out after the critique below.

### Baker page (`/baker-frameworks`) — two-stage rework

**Stage 1** (during the rebrand push): reframed as a "Famous Fingerprint" with 5 signature patterns. Half-ass. Critiqued in session.

**Critique:** Baker doesn't fit the Famous Fingerprints gallery. The gallery's thesis is "operating systems mapped for the first time." Baker's methodology has been published for a decade. He is *fully conscious* of his patterns. The CF premise breaks on him.

**Stage 2** (the version that shipped): page rebuilt as **"The Expert's Expert" reference page.**
- Tag: "Source Material · The Expert's Expert"
- Hero: "David Baker — the consultant every consultant quietly studies"
- 5 teachings (condensed from the original 7 frameworks): Hobby/Job/Enterprise + Stopwatch Test, What You're Actually Selling, The Leverage Stack (+ P=db/D formula), The Seven Expert Traits, Initial → Developing → Mature
- **Honest framing in the hero:** "This page is not a Cognitive Fingerprint™. Baker is fully conscious of how he operates and has published most of it."
- New closing section: "Where CF Picks Up" — positions CF as the extraction engine that pairs with Baker's teaching. "Baker tells you what to build. CF is how you build it from what you already have."
- Single focused CTA replacing the Two Ways In from gallery
- Quote attribution on every blockquote (books cited by title, Blair Enns credited)
- 2Bobs podcast linked in hero

### Start page

- Full Extraction price: `Starting at $3,000` → `Starting at $5,000`

### Other site edits

- Inline "Substack" mentions in `app/articles/page.tsx` flipped:
  - "Visit Cognitive Fingerprint Newsletter on Substack →" → "Read the Newsletter →"
  - "Read on Substack" → "Read full article"
- Stale copyright in Coach's Eye page footer updated to CF branding

### Content work (not site-related)

Three drafts landed in `/Users/maxb/Desktop/mb-brain/4 - Content/signal-noise/Articles/`:

- **`why-coach-k-hof-speech-contains-zero-basketball.md`** — 4-move structure (Identity Swap / Chills / Manufactured Moment / Don't Get Up Alone). 2,350 words + Coach K Operator Kit paywall section.
- **`dario-talks-species-daniela-talks-person.md`** — Invisible Advantage Special Edition (Co-Founder Architecture). 3-pair contrast structure. Research anchor: Construal Level Theory (Trope & Liberman). 2,350 words + Co-Founder Architecture Kit paywall.
- **`co-founder-architecture-kit.md`** — 4 full copy-paste prompts for the Amodei article paywall.
- **`cf-rebrand-editors-note.md`** — 215-word editor's note for the top of the Dr. Pepper article. Announces the Signal > Noise → CF Newsletter rebrand.

Both Amodei pattern files refreshed with full "Delta Since 2024/2025" sections at `/Users/maxb/Desktop/mb-brain/2 - Cognitive Fingerprint/03 - Reference Library/Legacy Framework Library/7 - Pattern Catalog/People/`:
- `Dario Amodei.md` — 6 original patterns confirmed, 2 absent (father's cancer, open-mindedness), 5 new patterns emerging (Civilizational Stakes / Compressed 21st Century / Scientist-as-Moral-Caste / End-of-Exponential Urgency / Grown-Not-Built)
- `Daniela Amodei.md` — 8 original patterns all confirmed, 3 new candidates (The Bisection Move / The Translator Role / The Uncertainty Upgrade)
- Cornerstone artifact: **60 Minutes joint appearance Nov 16, 2025** — tag-team dialog that proves the persuasion architecture thesis

Celebrity Article Pipeline tracker updated at `/Users/maxb/Desktop/mb-brain/2 - Cognitive Fingerprint/03 - Reference Library/Legacy Framework Library/7 - Pattern Catalog/People/00-Celebrity-Article-Pipeline.md`:
- **Published:** Sam Altman, Russell Brunson, Rick Rubin, Sheryl Sandberg
- **Draft ready:** Coach K, Amodei Siblings (Special Edition)
- **Research complete:** Jensen Huang

---

## In-flight (parallel session)

**Reginald Love Famous Fingerprint** — kicked off in a separate Claude Code session using the prompt at `tasks/reginald-love-kickoff-prompt.md`. That session is actively running.

**Critical note for next session:** Do not touch Reginald-related files or spawn a parallel Reginald workstream. That session owns the `/reginald-love` page, Reginald research, and the Famous Fingerprints card. Let it finish.

---

## Task list state at session end

| ID | Subject | Status |
|----|---------|--------|
| 12 | Build Reginald Love Famous Fingerprint (separate session) | pending (in another session) |
| 13 | Reorganize Baker Frameworks page into CF format | completed (then pivoted to Expert's Expert reframe) |
| 14 | Decide inline Substack mentions | completed |
| 15 | Rebrand ConvertKit tag | deleted (deferred indefinitely) |

---

## Key file paths reference

### Site (Next.js project)

- Root: `/Users/maxb/Desktop/Vibe Projects/Cognitive Fingerprint Projects/cf-landing-page`
- Project voice rules: `cf-landing-page/CLAUDE.md`
- Nav: `components/layout/Navigation.tsx`
- Footer: `components/layout/Footer.tsx`
- Famous Fingerprints gallery: `app/famous-fingerprints/page.tsx`
- Coach K page (15 bespoke components): `app/coachk/` + `components/coachk/`
- Baker page (rebuilt 2026-04-20): `app/baker-frameworks/page.tsx`
- Start page: `app/start/page.tsx`
- Coach's Eye page: `app/coaches-eye/`
- Articles page: `app/articles/page.tsx`
- Prompts page: `app/prompts/page.tsx`
- Method page: `app/method/`
- Assessment / Pricing Guide: `app/assessment/`

### Content & research (mb-brain)

- External voice guide: `/Users/maxb/Desktop/mb-brain/0 - System/LLM-context/voice-guide-external.md`
- Vault instructions: `/Users/maxb/Desktop/mb-brain/CLAUDE.md`
- CF methodology: `/Users/maxb/Desktop/mb-brain/2 - Cognitive Fingerprint/01 - Knowledge Base/Methodology And Doctrine/`
- Nick Reiland calibration: same folder, `CALIBRATION_CF_Nick_Reiland.md`
- Article drafts: `/Users/maxb/Desktop/mb-brain/4 - Content/signal-noise/Articles/`
- Celebrity Article Pipeline tracker: `/Users/maxb/Desktop/mb-brain/2 - Cognitive Fingerprint/03 - Reference Library/Legacy Framework Library/7 - Pattern Catalog/People/00-Celebrity-Article-Pipeline.md`
- Coach K full CF (gold-standard reference for depth bar): `/Users/maxb/Desktop/mb-brain/1 - Clients/Mike Krzyzewski/04 - CF/Cognitive-Fingerprint-Mike-Krzyzewski.md`

### Plans & prompts

- Amodei siblings article plan: `/Users/maxb/Desktop/mb-brain/2 - Cognitive Fingerprint/03 - Reference Library/Legacy Framework Library/7 - Pattern Catalog/People/00-Amodei-Siblings-Article-Plan.md`
- Rebrand follow-ups plan: `cf-landing-page/tasks/rebrand-and-growth-plan.md`
- Reginald Love kickoff prompt: `cf-landing-page/tasks/reginald-love-kickoff-prompt.md`

---

## Open questions for next session

1. **CF for Teams** — what is the offering? Pricing, deliverables, positioning relative to solo CF extractions. Max has new data/research to bring.
2. **Site-wide audit scope** — page-by-page review against current brand and structure? Conversion flow audit? Voice consistency check? All of the above?
3. **Reginald Love integration** — when that session completes, its card goes back on `/famous-fingerprints` as published. Plan for how that card unlocks + announces.
4. **Amodei / Coach K article publishing** — drafts exist as markdown but haven't been pushed to Substack. That's Max's call on timing.
5. **Nav placement for CF for Teams page** — does it go in top nav, `/start` tier grid, a standalone CTA, or all three?
6. **The "new data and research" Max mentioned** — needs to be delivered at session start. Could be client data, research transcripts, market research, positioning frameworks, pricing data, etc.

---

## Type check status

At session close: `npx tsc --noEmit` passes. `.next/` cache cleared. Safe to `git status` and commit whenever.

No build run (just type check). Recommend running `npm run build` before next deploy to catch any runtime issues the type checker misses.

---

*Saved: 2026-04-20*

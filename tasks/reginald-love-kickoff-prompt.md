# Reginald Love Famous Fingerprint — Kickoff Prompt

*Paste this into a fresh Claude Code session to start the work.*

---

You're helping me build a Famous Fingerprint site for Reginald Love at a new `/reginald-love` (or similar) route on the existing CF landing page Next.js project. This is the second published fingerprint in the series. The first was Coach K.

**The critical constraint: this cannot feel cookie-cutter with Coach K's page.** Details below.

## Project paths

- Site codebase: `/Users/maxb/Desktop/Vibe Projects/Cognitive Fingerprint Projects/cf-landing-page`
- Coach K's page: `app/coachk/` (read this in full as a structural reference — not a template)
- Famous Fingerprints gallery: `app/famous-fingerprints/page.tsx`
- Project voice rules: `/Users/maxb/Desktop/Vibe Projects/Cognitive Fingerprint Projects/cf-landing-page/CLAUDE.md`
- Max's external voice guide: `/Users/maxb/Desktop/mb-brain/0 - System/LLM-context/voice-guide-external.md`
- CF methodology + 4-layer depth + DRIVE naming: `/Users/maxb/Desktop/mb-brain/2 - Cognitive Fingerprint/01 - Knowledge Base/Methodology And Doctrine/` (read `CALIBRATION_CF_Nick_Reiland.md` for the quality bar)
- Coach K's full CF (reference for depth bar): `/Users/maxb/Desktop/mb-brain/1 - Clients/Mike Krzyzewski/04 - CF/Cognitive-Fingerprint-Mike-Krzyzewski.md`

## Who Reginald Love is

Primary source: https://www.reginaldlove.com/

Verify the following yourself before drafting:
- Served as Barack Obama's personal aide ("body man") 2008–2011
- Played basketball at Duke under Mike Krzyzewski
- Now in financial services (RON Transatlantic)
- Authored "Power Forward: My Presidential Education"
- Has a speaking presence and podcast footprint

**The Duke-under-Coach-K connection is real but DO NOT lean into it as the structural backbone.** Building Reginald's fingerprint as a shadow of Coach K's is the cookie-cutter trap. His fingerprint needs to be his.

## What "not cookie cutter" means specifically

Coach K's page signature moves you should study and then diverge from:

| Coach K move | Do this for Reginald instead |
|---|---|
| Opens with "zero basketball in HoF speech" reveal | Find Reginald's OWN counterintuitive reveal. The thing about him that, once you see it, you can't unsee. Probably not about Duke. |
| 7 sequential signature patterns | Let the evidence determine pattern count. Could be 4, 5, or 6. Don't default to 7. |
| Dark cinematic parallax photography | Reginald's aesthetic might fit lighter, warmer, more archival / interview-footage feel. Pick what matches his story, not the template. |
| Sports stats (1,202 wins / 36,984 moves / 7 patterns) | Reginald's stats are different. Years in the West Wing, days next to Obama, miles traveled, campaigns worked, decisions adjacent to. Find numbers that map to HIS proof. |
| "Meet the Coach" biography beat | "Meet the Aide"? "Meet the Operator"? Find his equivalent frame. |
| Gold accent color | Reginald may deserve a different signature color — Obama-era blue, a warmer earth tone, something his. Propose a palette, don't default. |
| Parallax scroll rhythm | Consider alternatives: side-scroll archive format, chapter-break typography, letter-from-the-aide voice. |

Keep what works for gallery consistency:
- The "Two Ways In" CTA footer format (Suggest / Get Your Own CF)
- The navigation and footer (global)
- The general editorial register

## Inputs needed from Max before starting

Confirm before researching:
1. **Positioning angle** — what's the one-sentence "why now, why him" hook? (Why are we mapping Reginald specifically?)
2. **Source material scope** — just the website? Plus *Power Forward*? Plus podcast interviews, YouTube, speeches?
3. **Timeline** — research first then build, or parallel?
4. **Extraction ownership** — does Max drive the CF extraction himself, or does the agent run the CF pipeline end-to-end?

Ask these before touching anything.

## Phased execution

**Phase 0 — Scope confirmation.** Get the four inputs above from Max. Do not research yet.

**Phase 1 — Research.** Firecrawl reginaldlove.com. Pull interviews from YouTube, podcasts, speaking circuit. If Max shares *Power Forward* excerpts, include those. Save intermediate scrapes to `/tmp/reginald-research/`. Budget 60–90 min.

**Phase 2 — CF extraction.** Follow DRIVE methodology at 4-layer depth. Calibrate against Nick Reiland gold standard (the calibration file in the methodology folder). Produce a full CF document at Coach K quality. Save to `1 - Clients/Reginald Love/04 - CF/Cognitive-Fingerprint-Reginald-Love.md` following the client folder convention from `~/Desktop/mb-brain/CLAUDE.md`.

**Phase 3 — Copy draft.** Before building, write the landing page copy in prose. Hook, pattern introductions, stat block, close. Get Max's sign-off on three things before any code:
- The opening hook
- The pattern list (names + count)
- The stat block (which numbers, in what order)

**Phase 4 — Visual direction.** Propose a visual treatment that belongs to Reginald, not to Coach K. Hero image, color palette, typography choice, scroll rhythm. Get Max's sign-off before implementing.

**Phase 5 — Build.** Implement the page in the Next.js project. Use Coach K's page as a structural reference but diverge on the moves in the table above. Update `/famous-fingerprints` grid with a published-variant card (copy the Coach K card pattern, swap in Reginald's stats and hook). Verify `npx tsc --noEmit` passes. Clear `.next` cache if needed.

## Anti-drift checklist (run before shipping)

- [ ] Opening hook is specific to Reginald — if I swap "Reginald Love" for "Coach K" in the first paragraph, does it still read? If yes, rewrite.
- [ ] Pattern count is evidence-driven, not defaulted to 7.
- [ ] Visual tone fits Reginald's story, not automatically dark-cinematic.
- [ ] Stats are Reginald's real proof numbers, verified against sources.
- [ ] At least 2 structural moves are genuinely different from Coach K's page (not cosmetic variations).
- [ ] Voice passes Max's external voice guide.
- [ ] Every CF pattern reaches Layer 4 depth (per methodology calibration).

## First move in your reply

Ask Max the 4 scoping questions. Don't research or build anything yet. Confirm scope first.

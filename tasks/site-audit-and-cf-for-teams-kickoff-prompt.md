# Site Audit + CF for Teams — Kickoff Prompt

*Paste this into a fresh Claude Code session to start the work.*

---

You're helping me on two intertwined threads for the Cognitive Fingerprint site:

1. **Whole-site audit** — I just finished a big rebrand push (Signal > Noise → Cognitive Fingerprint Newsletter) and reorganized several pages. I want to look at the site holistically now and catch anything that drifted, broke, or needs tightening.
2. **New CF for Teams page** — a dedicated page for the team-level CF offering. I have new data and research I'll share at the start.

## Before you do anything

**Read the full session summary first:** `/Users/maxb/Desktop/Vibe Projects/Cognitive Fingerprint Projects/cf-landing-page/tasks/session-summary-2026-04-20.md`

That document has everything — what shipped, what's in-flight, file paths, open questions. Do not start work until you've read it. Lots of things changed yesterday and walking in blind will cause rework.

**Also read:**
- `cf-landing-page/CLAUDE.md` — project voice rules (anti-em-dash, banned phrases, signature moves)
- `/Users/maxb/Desktop/mb-brain/0 - System/LLM-context/voice-guide-external.md` — Max's external voice guide

## Parallel session running — do not touch

A separate Claude Code session is actively working on **Reginald Love's Famous Fingerprint page** (at `/reginald-love` or similar). Do not:
- Touch any Reginald-related files
- Add a Reginald card to `/famous-fingerprints` (that session owns it)
- Research reginaldlove.com or his material in parallel
- Modify `/famous-fingerprints` grid in ways that would conflict with a new published card landing there

If Max says the Reginald session finished, then integration is OK. Until then, leave it alone.

## Session context

**Where the site is as of 2026-04-20 evening:**

- Nav simplified to: Method · Prompt Vault · Insights · Famous Fingerprints · Start · [See What Leaders See button]
- Newsletter rebrand complete — all URLs point to `signalovernoise.ai`, brand name reads "Cognitive Fingerprint Newsletter"
- `/baker-frameworks` rebuilt as "The Expert's Expert" reference page, NOT a Famous Fingerprint. Lives in footer Explore as "Baker (Study)"
- `/newsletter` page deleted
- `/famous-fingerprints` gallery has 1 published (Coach K) + 4 coming-soon (Sam Altman, Sandberg, Rubin, Russell Brunson). Reginald is being added by the parallel session.
- Articles drafted but not yet published to Substack: Coach K, Amodei siblings, Dr. Pepper editor's note

Type check (`npx tsc --noEmit`) was green at session close.

## Goal 1: Whole-site audit

I want a systematic pass, not a cosmetic review. Things to check:

### Voice and brand consistency
- Every user-facing string references "Cognitive Fingerprint" or "Cognitive Fingerprint Newsletter" where appropriate, NOT "Signal > Noise" or legacy references
- URLs point to `signalovernoise.ai`, not `irreplaceablepositioning.substack.com`
- `™` symbol applied consistently on first/prominent mentions of Cognitive Fingerprint
- Voice matches `voice-guide-external.md`: no em dashes in body copy, no banned phrases, no Latinate hype words, no negation-reframe patterns, second-person heavy and specific

### Structural consistency
- Every page uses the same Navigation component and Footer
- Every published page has the footer "Baker (Study)" link available via footer
- `/famous-fingerprints` grid is internally consistent (card types, gradient tones, hook voice)
- `/coachk` page and `/baker-frameworks` page don't drift in voice or design

### Navigation and links
- No dead links to deleted pages (`/newsletter` is gone; scan for any remaining refs)
- CTAs route correctly: schedule calls, subscribe, prompt vault, etc.
- Breadcrumbs, back-links, and inline cross-references all work

### Conversion flow
- Every page has a clear "what next" path back toward Start or Schedule a Call
- `/start` tier grid reflects current reality (prices, tier names, what's in each)
- CTA buttons visually consistent across pages

### Performance / build health
- Run `npm run build` — catch anything the type checker misses
- Clear `.next/` cache, rebuild, verify
- Check for console warnings on key routes

### Page-by-page quick audit
Walk every route in the app directory:
- `/` (home)
- `/method`
- `/prompts`
- `/articles`
- `/start`
- `/assessment`
- `/famous-fingerprints`
- `/coachk`
- `/coaches-eye`
- `/baker-frameworks`
- `/insights`
- any others in `app/`

For each: one-line verdict (ship as-is / tweak / needs rework).

**Deliverable for the audit:** A structured report, not a mass of edits. Let me review and triage before you fix.

## Goal 2: CF for Teams page

I'll drop the new data and research at the start of the session. Don't start designing until you have it. What I'll provide:
- Positioning for the team-level CF offering
- Pricing structure
- What deliverables differ from solo CF extractions
- Any testimonials, case studies, or evidence to feature
- Research on team buyers (ICPs, pain points, objections)

**Page structure questions to answer (with Max) before building:**
1. Does CF for Teams live at `/teams`, `/cf-for-teams`, `/for-teams`, or somewhere else?
2. Does it belong in the top nav, or as a CTA target from Start and Method?
3. Is it a sales page (conversion-focused) or an explainer page (education-focused) or both?
4. Does it need its own pricing tier display, or does it extend the existing `/start` tiers?
5. What's the CTA — schedule a team call, request a team assessment, start a pilot?

**Structural precedent to study:**
- Coach K page (`/coachk`) for premium visual treatment
- Start page (`/start`) for tier grids and pricing display
- Baker page (`/baker-frameworks`) for long-form reference style
- Method page (`/method`) for educational explainer style

**Voice target:** Peer-practitioner Max, not sales-y. The page should feel like a real conversation about what teams actually get when they bring CF in-house, including what breaks and what doesn't. Max's voice lives in `voice-guide-external.md`.

## Session phasing

**Phase 0 — Orientation (10 min).** Read the session summary. Read CLAUDE.md. Read voice guide. Confirm you're grounded before proposing anything.

**Phase 1 — Ingest new data (Max delivers).** Wait for Max to paste/upload the new CF for Teams research. Don't guess at it.

**Phase 2 — Site audit first.** The audit is cheaper to do while my head is in the whole site. Deliver the structured report. Max triages what to fix.

**Phase 3 — Fix prioritized audit findings.** Max picks which items to address. You implement. Small batches. Type check after each.

**Phase 4 — CF for Teams page.** After Max has the Teams positioning locked and the audit fixes are done.
- Answer the 5 structural questions with Max
- Draft copy in prose first, get sign-off, THEN build
- Match the Baker page's depth for long-form sections, the Coach K page's punch for the hero, the Start page's structure for any pricing/tier displays
- Single clear CTA — no "Two Ways In" unless the offering actually has two modes

**Phase 5 — Final pass.** Re-run the audit on just the new page + anything you touched. Verify everything. Type check. `npm run build` green.

## Anti-drift checklist

Before shipping anything:

- [ ] Read the session summary in full, not just skimmed
- [ ] No em dashes in body copy (Max's voice guide rule, enforced in project CLAUDE.md)
- [ ] No banned phrases from the voice guide kill list
- [ ] No "Not X, Y" constructions (fatal pattern)
- [ ] Every new page has a footer, navigation, and path back to Start
- [ ] Every abstraction has a physical anchor within 2-3 sentences
- [ ] No link to `/newsletter` (deleted page)
- [ ] No reference to `irreplaceablepositioning.substack.com`
- [ ] CF brand correctly ™-marked on first prominent mention
- [ ] Type check passes after every significant change
- [ ] Not touching Reginald Love files

## First move in your reply

Do three things:

1. Confirm you've read the session summary (cite one specific detail from it)
2. Ask for the CF for Teams research Max mentioned
3. Propose whether to start with the site audit or wait for the Teams research first

Do not start editing files, scraping the site, or drafting copy until that exchange happens.

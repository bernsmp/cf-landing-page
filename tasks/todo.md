# Add Zero Resistance Toolkit Workflow

## Plan
Add the Zero Resistance Toolkit as a workflow pack linked to the Sandberg influence article.

## Tasks
- [x] Create workflow markdown file at `/public/prompts/workflows/zero-resistance-toolkit.md`
- [x] Add workflow entry to `data/prompts.ts`
- [x] Run build to verify no errors
- [x] Thumbnail provided by user: `invisible advantage.png`

## Review

### Summary of Changes
- Created `/public/prompts/workflows/zero-resistance-toolkit.md` with full 5-tool workflow
- Added workflow entry to `data/prompts.ts` (id: w9, slug: zero-resistance-toolkit)

### Details
- **Category:** positioning
- **Premium:** Yes (requires subscriber password)
- **Estimated time:** 45 min
- **Thumbnail:** `/images/prompts/invisible advantage.png`
- **5 Steps:**
  1. The 30-Second Test (Quick Start)
  2. The Pitch Rewriter
  3. The Blind Spot Audit
  4. The Origin Story Extractor
  5. The Objection Dissolver

### URL
Live at: `/prompts/workflow/zero-resistance-toolkit`

### No new dependencies added
### No environment variables needed

---

# Add Coach K Lead Capture QR

## Plan
Place the verified CF lead-capture QR on the `/coachk` landing page without changing the rest of the page flow.

- [x] Copy QR image into `public/coachk/`
- [x] Add QR block to the Coach K CTA section
- [x] Run verification

## Review
- Added a branded QR card to the `/coachk` footer CTA.
- Verified `npm run build` passes.
- Verified the local dev route at `http://localhost:3456/coachk` returns 200 and the optimized QR image still decodes to the Notion lead-capture URL.

---

# Add Finger Scan CTA Buttons

## Plan
Install the 21st.dev finger scan button, adapt it to the Cognitive Fingerprint visual system, and use it on the primary booking CTAs.

## Tasks
- [x] Add the registry component with `npx shadcn@latest`
- [x] Rework the demo component into a reusable CF-styled CTA
- [x] Apply it to booking buttons and the Coach K primary CTA
- [x] Run verification

## Review
- Added a reusable `FingerScanButton` in CF gold/charcoal styling.
- Replaced the direct calendar CTAs on home, method, assessment, Baker, and Famous Fingerprints.
- Replaced Coach K's primary "Discover Yours" CTA with the scanner treatment.
- `npx tsc --noEmit` and `npm run build` pass.

---

# Audit Coach's Eye Lead Magnet Hookup

## Plan
Trace the live Coach's Eye gate from page CTA to API route to ConvertKit configuration, then identify what is wired up versus what is misconfigured.

## Tasks
- [x] Inspect Coach's Eye page and unlock CTA
- [x] Inspect ConvertKit subscribe API route
- [x] Check local environment configuration
- [x] Summarize current hookup status and gaps
- [x] Fix live Coach's Eye CTA payload
- [x] Run lint and build verification

## Review
- Updated the live Coach's Eye CTA to submit `leadMagnet: 'coaches-eye'` instead of an unused `tags` array.
- `npm run build` passed successfully.
- `npm run lint` failed because of many pre-existing repo-wide lint issues unrelated to this change.

---

# Whole-Site Rebrand Audit

## Plan
Run a structured report-only audit after the Cognitive Fingerprint Newsletter rebrand and Reginald/Remix Room updates.

## Tasks
- [x] Check current dirty worktree and identify uncommitted changes that should not be blindly committed
- [x] Scan for legacy brand strings, deleted `/newsletter` links, and awkward mechanical rebrand copy
- [x] Review primary routes for navigation, conversion path, page purpose, and obvious voice drift
- [x] Check implementation quality across accessibility, performance, theming, responsive design, and AI-default design tells
- [x] Run build verification and summarize warnings
- [x] Deliver prioritized audit findings without fixing product pages yet

## Review
- `npm run build` passes.
- `npm run lint` still fails with the known noisy baseline, plus a few concrete issues worth prioritizing.
- Highest-risk audit findings: broken Sandberg workflow link, stale Signal > Noise article badge, awkward mechanical newsletter copy, Coach's Eye Kit automation still needs end-to-end confirmation, inaccessible unlabeled nav/footer controls, conditional hook in workflow detail page, unfinished Famous Fingerprints coming-soon cards, and a large untracked asset pile that should not be blindly committed.

---

# Connect Kit to Coach's Eye

## Plan
Treat the current site code as partially wired, then verify and finish the Kit side so Coach's Eye subscribers are captured, tagged, and routed into the correct follow-up path.

## Tasks
- [x] Confirm local `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID` are present
- [x] Confirm `Lead Magnet: Coaches Eye` exists in Kit
- [x] Confirm `/api/convertkit/subscribe` accepts `leadMagnet: 'coaches-eye'` and returns success
- [x] Confirm the live Coach's Eye CTA submits `leadMagnet: 'coaches-eye'`
- [ ] Confirm production `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID` are present where the site deploys
- [ ] Create or connect the Kit automation for the `Lead Magnet: Coaches Eye` tag
- [ ] Run a real end-to-end test with a disposable email
- [ ] Verify the user-visible unlock still happens after successful submit

## Current Evidence
- `app/coaches-eye/components/CoachesEyeCTA.tsx` already posts `leadMagnet: 'coaches-eye'`.
- `app/api/convertkit/subscribe/route.ts` maps `coaches-eye` to `Lead Magnet: Coaches Eye`.
- Kit tag `Lead Magnet: Coaches Eye` exists.
- Local route test with `max+coaches-eye-test-20260425224641@maxpbernstein.com` returned `{ "success": true, "subscriber_id": 4085459977 }`.
- API subscriber/tag lookup is blocked from this repo because `.env.local` does not include `CONVERTKIT_API_SECRET`; only `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID` are present.
- Remaining risk is Kit-side automation/delivery, production env verification, and visual unlock/browser verification.

---

# Create Famous Fingerprints For Coming-Soon Cards

## Plan
Turn the remaining coming-soon cards into real Famous Fingerprint pages, one at a time, using Coach K and Reginald Love as the quality bar.

## Tasks
- [x] Build Sam Altman Famous Fingerprint page
- [ ] Build Sheryl Sandberg Famous Fingerprint page
- [ ] Build Rick Rubin Famous Fingerprint page
- [ ] Build Russell Brunson Famous Fingerprint page
- [ ] Update `/famous-fingerprints` card states, counts, images, and CTAs as each page ships
- [ ] Fix Sandberg's current card link if the workflow remains the interim CTA
- [ ] Run `npm run build` after each page

## Notes
- Current published pages: Coach K, Reginald Love, and Sam Altman.
- Current coming-soon cards: Sheryl Sandberg, Rick Rubin, Russell Brunson.
- Baker should stay a separate source-material/reference page unless Max explicitly changes that decision.

## Review
- Created `/sam-altman` from the existing CEO Pattern Catalog CF analysis.
- Updated `/famous-fingerprints` count to `3 published · 3 in progress`.
- Promoted Sam Altman from coming soon to published with image, stats, and route link.
- `npm run build` passes and local dev route `/sam-altman` returns 200.

---

# Sam Altman Deep Source Scan

## Plan
Pause final Sam Altman page polishing until the fingerprint is backed by a broader, more recent source set. The current `/sam-altman` page is a draft scaffold based on the existing CEO Pattern Catalog analysis plus a small public-source check.

## Tasks
- [x] Inventory existing local Sam Altman source material
- [x] Find newer 2025-2026 Sam Altman interviews, essays, product launch statements, and OpenAI strategy moments
- [x] Prioritize sources that show repeated behavior, not just one-off quotes
- [x] Update or challenge the six current pattern claims against the larger source set
- [x] Revise `/sam-altman` after the expanded source scan

## Notes
- Current page should not be considered final quality next to Coach K or Reginald Love yet.
- Need more recent data before claiming a finished Famous Fingerprint.

## Sam Altman Data Expansion

- [x] Pause final Sam Altman page polishing until source base is expanded.
- [x] Create source inventory at `tasks/sam-altman/source-scan.md`.
- [x] Add recent 2025-2026 sources to the research queue, including OpenAI Forum, Industrial Policy for the Intelligence Age, GPT-5, GPT-5.5, enterprise AI, OpenAI Podcast Ep. 1, and recent market reaction notes.
- [x] Process the next three-source batch enough to revise the page: OpenAI Forum transcript, OpenAI Podcast Ep. 1, and Industrial Policy landing page.
- [x] Revise `/app/sam-altman/page.tsx` from the expanded evidence base.
- [ ] Optional deeper research pass: pull and process the full Industrial Policy PDF if we want an even more policy-heavy version.

## Sam Altman Page Deepening Review

- [x] Rewrote `/app/sam-altman/page.tsx` from the expanded source scan.
- [x] Expanded the page from 6 patterns to 8 stronger pattern chapters.
- [x] Added source trail across AGI planning, The Gentle Singularity, GPT-5, OpenAI Podcast Ep. 1, 2026 industrial policy, and GPT-5.5.
- [x] Added tension map so the page reads closer to Coach K and Reginald Love depth.
- [x] Ran targeted lint on `/app/sam-altman/page.tsx`.
- [x] Ran `npm run build` successfully.
- [x] Browser visual review pass completed; adjusted Sam page grid breakpoints/minmax behavior for safer narrow-desktop rendering.

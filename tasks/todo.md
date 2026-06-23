# Cloudflare Bot Alert Hardening - May 28, 2026

## Plan
Respond to Cloudflare's bot-traffic alert without overreacting. Keep the live lead-capture behavior intact, but reduce abuse risk on the Kit subscription surfaces.

## Tasks
- [x] Close arbitrary `leadMagnet` tag creation in `/api/convertkit/subscribe`
- [x] Add lightweight request checks to the Coach's Eye API form path
- [x] Add matching hidden-field checks to Remix Room signup
- [x] Run build verification
- [x] Deploy the Cloudflare dashboard rate limiting rule

## Review
- Hardened `/api/convertkit/subscribe` with JSON/content-length checks, stricter email validation, an allowlist for lead magnets, a honeypot field, a minimum submit age, and a lightweight per-IP in-memory throttle.
- Added the same honeypot and submit timestamp to the Coach's Eye unlock forms and Remix Room signup.
- Verified `npm run build` passes. The stale `baseline-browser-mapping` warning remains unrelated.
- Local API smoke checks returned `400` for arbitrary lead magnet creation, `400` for filled honeypot submissions, and `415` for non-JSON posts.
- Wrangler is logged in as `bernsmp@gmail.com`, but no Cloudflare API token/env vars are present and the visible OAuth scopes are not enough to safely mutate WAF/Bot settings from this shell.
- Deployed Cloudflare rate limiting rule `Limit Kit subscribe API bursts` in the dashboard. It is active on `/api/convertkit/subscribe`, excludes known bots, groups by IP, and blocks after 10 requests in 10 seconds for 10 seconds. Cloudflare Free only exposed the 10-second period/duration options in the dashboard.

---

# Homepage Client-Ready Visual Polish - June 5, 2026

## Plan
Make the current homepage look more client-ready for tomorrow without rewriting the public homepage copy. Preserve headlines and body messaging; limit copy changes to navigation, footer, accessibility, or consistency labels.

## Tasks
- [x] Record project context for `impeccable`
- [x] Review local homepage components and existing dirty source
- [x] Tighten hierarchy, contrast, artifact polish, navigation state, and interaction affordances
- [x] Run build verification
- [x] Capture desktop and mobile visual checks

---

# Homepage Design Refresh Inspired By Monologue

## Homepage Polish Pass - May 17, 2026

## Plan
Review the local homepage at `http://127.0.0.1:3456/` and polish only the live homepage design direction. Keep the cinematic black, tactile layered object language, and canonical `/logo/cf-t1.png` usage. Remove leftover AI-console, pill, glow, gradient-text, and generic rounded SaaS patterns from homepage-visible sections.

## Tasks
- [x] Record project design context for `impeccable`
- [x] Review current homepage components and visual anti-patterns
- [x] Polish hero, proof, CTA, and surrounding homepage sections into one coherent direction
- [x] Run build verification
- [x] Capture visual checks for desktop and mobile

## Review
- Added `.impeccable.md` with the CF homepage design context so future design work stays attached to the sharp cinematic black, tactile artifact direction.
- Removed remaining homepage-visible glow, pill, rounded SaaS, gradient-text, and generic icon treatments from nav CTA, proof, CTA, scroll popup, and the transformation story section.
- Replaced the glowy video poster state with a tactile transcript/artifact stage using `/logo/cf-t1.png`.
- Reworked homepage proof cards into rectangular video receipts and extracted notes.
- Follow-up correction: reviewed against the live homepage at `https://www.cognitivefingerprint.ai/` and restored the public homepage copy, including the hero headline, subhead, video copy, audience section copy, story text, proof quotes, and CTA copy. The remaining differences in the text diff are whitespace from the refreshed layout.
- `npm run build` passes. The only build warning is the existing stale `baseline-browser-mapping` notice.
- Desktop and mobile screenshots were checked with the bundled Playwright runtime.
- `npm audit --omit=dev --audit-level=high` still reports the existing Next/PostCSS advisories and recommends `npm audit fix --force`, which would install `next@16.2.6`; no dependency upgrade was made in this design pass.

## Plan
Use `ux-recon` to turn the Monologue reference into a buildable homepage direction for Cognitive Fingerprint. Keep the CF gold, charcoal, and editorial voice. Refresh the homepage organization so it feels more like a working product surface and less like stacked SaaS sections.

## Research Inputs
- Inspiration anchor: `https://www.monologue.to/`
- Feel: dark, precise, editorial, instrument-like, warm gold instead of teal
- Primary interaction: landing page with product/story sections and concrete use-case rows
- Constraints: existing Next.js app, current brand colors, no new prompt entries, preserve unrelated worktree changes

## Tasks
- [x] Capture the UX reference pull and build implications
- [x] Refresh homepage section order and component composition
- [x] Rework hero into a product-first extraction surface
- [x] Add concrete context/use-case rows inspired by Monologue's app-context rhythm
- [x] Run build verification

## Review
- Created `tasks/homepage-ux-recon.md` with the 6-section `ux-recon` artifact.
- Reordered the homepage to move from hero to extraction artifact to context rows to proof.
- Reworked `HeroSectionV2` around a right-side extraction console instead of a floating logo hero.
- Reworked `IdentitySection` into concrete context rows for coaches, consultants, operators, and creators.
- Reframed `VideoSection` as a working artifact with concrete watch-for rows.
- Added an explicit root viewport export and horizontal overflow guard for mobile rendering.
- `npm run build` passes. The only warning is the existing stale `baseline-browser-mapping` package notice.
- `npm audit --omit=dev --audit-level=high` reports existing Next/PostCSS advisories and recommends a forced Next upgrade to `16.2.6`; no dependency upgrade was made in this design-refresh pass.

## Correction Pass
- [x] Remove AI-console/pill/icon language from the homepage refresh
- [x] Replace top gradient with sharp cinematic black
- [x] Rebuild hero around layered tactile cards and floating objects
- [x] Give sections more space and fewer dense UI widgets
- [x] Re-run build and visual checks

## Correction Notes
- User rejected the first direction as too AI-pattern/vibe-coded.
- New direction: sharp cinematic base, spacious black, tactile layered cards/objects, no teal, no decorative top haze, no generic AI interface cues.
- Rebuilt `HeroSectionV2` with layered transcript, artifact, margin-note, and method cards.
- Rebuilt `VideoSection` with a cleaner cinematic video stage and physical note cards.
- Rebuilt `IdentitySection` with spacious source-material cards instead of icon rows.
- `npm run build` passes after the correction pass.

## Logo Swap
- [x] Copy `/Users/maxb/Documents/logos and headshots/T1.png` into the app public assets
- [x] Use the new logo in nav, footer, homepage artifact cards, OpenGraph, favicon, and Apple icon routes
- [x] Run build verification after logo swap
- [x] Render-check homepage and logo/icon endpoints locally

---

# Add Deonne Testimonial

## Plan
Add Deonne's testimonial where it does the most strategic work: broad homepage proof and specific Remix Room/community proof.

## Recommendation Review

### Default
Add the testimonial to the existing testimonials section.

### Expert
Use Deonne as a bridge proof asset. On the homepage, position it as evidence that Cognitive Fingerprint plus AI turns private thinking into shipped output. On Remix Room, position it as proof that the prompt/community lane helps people make real things from their own ideas.

### Label the Gap
The default treats the testimonial as praise. The expert version treats it as positioning evidence. Deonne is not only saying Max is helpful. She is describing a before-and-after category shift: idea in her brain, AI as accelerator, her own output in the world, community as weekly momentum.

## Tasks
- [x] Create web-ready Deonne video and poster assets
- [x] Add Deonne as a second featured video in the homepage proof section
- [x] Add a focused Deonne proof block to Remix Room
- [x] Run build verification

## Review
- Added a compressed vertical testimonial video at `/public/videos/deonne-testimonial.mp4`.
- Added a poster image at `/public/images/testimonials/deonne-testimonial-poster.jpg`.
- Reworked the homepage proof area so Jessica and Deonne sit as paired featured video testimonials.
- Added a Remix Room proof block that frames Deonne around weird apps, better prompting, and AI turning her own thinking into output.
- `npm run build` passes.

---

# Officially Hook Coach's Eye To Kit

## Plan
Finish the production-grade Kit hookup for Coach's Eye by verifying local Kit state, tightening the subscribe route, adding missing Vercel environment variables, and running one end-to-end test only after confirmation.

## Current Evidence
- Local `.env.local` has `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID`.
- Local `.env.local` does not have `CONVERTKIT_API_SECRET`.
- Kit tag `Lead Magnet: Coaches Eye` exists as tag ID `19138026`.
- The configured local form exists as ID `8877513`, currently named `CF Pricing Guide Lead Magnet`.
- Vercel production currently only has `PREMIUM_PASSWORD`, so production Coach's Eye signup cannot hit Kit successfully yet.
- Correction: the public domain `www.cognitivefingerprint.ai` is attached to Vercel project `cognitive-fingerprint-nextjs`, not the local `.vercel` project `cf-landing-page`.
- `cognitive-fingerprint-nextjs` already had `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID`; `cf-landing-page` was also updated with those env vars during this pass.

## Tasks
- [x] Verify current site CTA sends `leadMagnet: 'coaches-eye'`
- [x] Verify Kit tag and configured form exist through the API
- [x] Verify Vercel production env is missing Kit variables
- [x] Tighten subscribe route so tag failure cannot return success
- [x] Add missing Kit env vars to Vercel after action-time confirmation
- [x] Run a real production end-to-end test after action-time confirmation
- [x] Verify unlock behavior after successful submit

## Review
- Hardened `/api/convertkit/subscribe` so a tag lookup/add failure returns `500` instead of a false success.
- Added Kit env vars to the duplicate `cf-landing-page` Vercel project, then confirmed the real public project already had them.
- Deployed the current code to the real public-domain Vercel project `cognitive-fingerprint-nextjs`.
- Verified public homepage and Remix Room now include the Deonne testimonial assets.
- Verified production Coach's Eye Kit submit with `max+coaches-eye-prod-test-20260502@maxpbernstein.com`: response `200`, subscriber id `4094762173`.
- Unlock behavior is still tied to the successful API response in `CoachesEyeCTA`: on `200`, it writes `coaches-eye-unlocked` to localStorage and reveals the remaining patterns.

---

# Coach's Eye Substack Follow-Up Sequence

## Plan
Create a short Kit-ready follow-up sequence for Coach's Eye downloaders that pushes non-subscribers toward the Cognitive Fingerprint Substack rather than building a separate mini-course funnel.

## Positioning Decision
- Trigger from `Lead Magnet: Coaches Eye`.
- If subscriber already has `Signal>Noise SS Sub`, skip the sequence or route to a light thank-you only.
- If subscriber does not have `Signal>Noise SS Sub`, send a 4-email bridge to `https://signalovernoise.ai`.

## Tasks
- [x] Draft Kit-ready sequence copy
- [x] Include Visual Automation setup instructions
- [x] Confirm no em dashes or hype-language drift
- [x] Review and sharpen copy with `copywriting-masters`
- [x] Update old Coach's Eye todo so BTD path is superseded
- [x] Remove AI-pattern phrasing and add one Coach's Eye prompt per email
- [x] Create the Kit sequence and inactive automation after user approval

## Review
- Created `/content/coaches-eye-substack-follow-up-sequence.md`.
- Sequence pushes non-subscribers to `https://signalovernoise.ai`.
- Existing Substack subscribers should skip the main sequence or receive a single thank-you email.
- Local copy scan found no em dashes or banned hype terms in the new sequence file.
- Added the direct-response spine: promise, mechanism, proof stack, Rule of One, subject alternates, and sequence quality gates.
- Revised the emails to remove obvious AI scaffolding and add daily prompt value before each Substack CTA.
- Created Kit sequence `Coach's Eye to Cognitive Fingerprint Newsletter` at `https://app.kit.com/sequences/2743152`.
- Added four draft sequence emails with timings: immediate, 2 days, 2 days, 3 days.
- Connected inactive Kit visual automation `Coach's Eye to Cognitive Fingerprint Newsletter` at `https://app.kit.com/automations/1958836/edit`.
- Automation trigger is `Lead Magnet: Coaches Eye`; if the subscriber has `Signal>Noise SS Sub`, they route to end; if not, they enter the new sequence.
- Left the automation inactive, so the sequence is created but not live sending.
- Follow-up QC found Email 4 had reverted to the default empty template in Kit; pasted the final Email 4 body back in and set its delay to 3 days.
- Current Kit state observed during follow-up QC: Email 4 remains draft/unpublished; the visual automation remains inactive; the first three emails appear published in the sequence editor.

---

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

---

# /sme Lead Magnet Page Rebuild - June 23, 2026

Source spec: `/Users/maxb/Downloads/cf-sme-lead-magnet-page.md`

## Decisions (from Max)
- Route: REPLACE existing `/sme` (gated "Four Layers" page) with the new email-capture lead magnet at the same URL.
- Hero: A/B rotate all 5 variants, persist per visitor, tag the chosen variant into Kit.
- Email delivery: I build the prompt + delivery email (prompt-UX for quality), stage as a Kit DRAFT, Max approves before it goes live.

## Key facts
- Kit sequence `2789619` "Invisible Expertise (SME Four Layers)" is currently empty (0 emails) + inactive -> today's signups get tagged but receive nothing.
- `sme-four-layers` already maps tag "Lead Magnet: SME Four Layers" + that sequence in `app/api/convertkit/subscribe/route.ts`.
- No `hero_variant` custom field exists in Kit yet.
- Root layout has no global nav/footer -> `/sme` stays single-action.

## Tasks
- [ ] Rewrite `app/sme/data.ts` -> HERO_VARIANTS (5) + HOW_IT_WORKS (3)
- [ ] New `app/sme/components/EmailCapture.tsx` (honeypot + timing, posts heroVariant, success state, reduced-motion safe)
- [ ] Rewrite `app/sme/page.tsx` to locked spec copy + 5-variant hero rotation
- [ ] Update `app/sme/layout.tsx` metadata + `app/sme/opengraph-image.tsx`
- [ ] Delete orphaned `CourseGate.tsx` + `PromptBlock.tsx`
- [ ] Add `heroVariant` (A-E) to subscribe route -> forward as `fields.hero_variant`
- [ ] Create Kit custom field `hero_variant`
- [x] Craft "One Pattern" prompt + delivery email; create as Kit DRAFT (unpublished), do NOT activate
- [x] `npm run build`, run landing-page-builder validator, render-check, report status

## Review
- Rewrote `app/sme/page.tsx` to the locked spec copy with a 5-variant hero that rotates per visitor (localStorage `sme-hero-variant`), reserves vertical space to avoid layout shift, and respects reduced motion.
- New `app/sme/components/EmailCapture.tsx` (reused in hero + final CTA): honeypot + submit-timing anti-spam, accessible label, success state, posts `heroVariant`.
- Rewrote `app/sme/data.ts` (HERO_VARIANTS + HOW_IT_WORKS). Updated `layout.tsx` metadata + `opengraph-image.tsx` to the new positioning. Deleted orphaned `CourseGate.tsx` + `PromptBlock.tsx`.
- `app/api/convertkit/subscribe/route.ts`: accepts `heroVariant` (A–E allowlist), forwards as `fields.hero_variant`.
- Kit: created custom field `hero_variant` (key `hero_variant`). Created delivery email "The prompt, like I promised" as an UNPUBLISHED draft at position 0 (delay 0h) in sequence 2789619. Sequence left INACTIVE — nothing sends until Max publishes the email + activates the sequence. Source copy: `content/sme-one-pattern-delivery.md`.
- Verified: `npm run build` passes; `/sme` prerenders static. Hero screenshot on-brand; full accessibility-tree confirms every section + both forms + footer. Live end-to-end POST returned HTTP 200 (subscriber 4174885119); Kit confirms `hero_variant=C` persisted + tag "Lead Magnet: SME Four Layers" applied.
- landing-page-builder validator flags `template-tag` ({{...}}) + `reduced-motion` — both FALSE POSITIVES for a React/framer-motion codebase (JSX double-brace props; reduced motion handled via `useReducedMotion()` hook, which the string-grep can't see).
- Test artifact: subscriber `max+sme-wiring-test-20260623035239@maxpbernstein.com` exists in Kit from the wiring test. Recommend deleting before activation.
- NOT done (gated on Max): publish the email + activate the sequence; deploy to production (`cognitive-fingerprint-nextjs` Vercel project); confirm prod has CONVERTKIT_API_KEY + CONVERTKIT_FORM_ID.
- Untouched pre-existing dirty files (globals.css, app/page.tsx, skills-lock.json, .magicpath-work/, components/experience/, public/cf-*, scripts/generate-cf-style-kie.mjs) — left alone, not mine to commit.

### Media addition (borrowed from the Mike Stelzner CF pitch-site)
- Source: `~/Desktop/mb-brain/1 - Clients/Mike Stelzner/04 - CF/pitch-site/` (posters + media).
- Reviewed every poster/video by eye. Borrowed only the non-personalized concept assets: `hero-jungle.jpg` (hidden world through a cracked wall) and `clip-b.mp4`+`framebreak.jpg` (landscape breaking out of its frame). Skipped the explorer-mascot ones (terrarium/gift/engineer) and anything with "Michael Stelzner" baked in (overview-poster, legacy-poster) + the Stelzner-VO overview.mp4.
- Copied to `public/sme/`: `hidden-world.jpg` (1900x1060), `breakthrough.mp4` (+ `breakthrough-poster.jpg` 1600x893).
- Integrated as framed gallery visuals: `Section` now takes optional `media` + `mediaSide` + `id`. "Here's what it does" pairs with the image (right); "What's underneath this" pairs with the looping video (left). Reduced-motion users get the poster still instead of the autoplay clip. Added scroll-mt + anchor ids (`#what-it-does`, `#underneath`).
- Verified: `npm run build` passes, `/sme` static. Full-page headless-Chrome screenshot confirms both media sections render cleanly and on-brand: `scratchpad/sme-full.png`.

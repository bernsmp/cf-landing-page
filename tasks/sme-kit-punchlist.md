# SME Funnel Kit Punchlist

Status as of 2026-06-11 (everything below the checklist was already done by Claude):

## What's already wired (no action needed)

- Tag `Lead Magnet: SME Four Layers` created in Kit (ID `20247956`)
- Sequence `Invisible Expertise (SME Four Layers)` created (ID `2789619`, sends from max@maxpbernstein.com, 11am ET)
- Email 1 "Your Four Layers prompt (it's unlocked)" drafted in the sequence, delay 0 hours, **UNPUBLISHED**
- `/sme` page live with email gate posting `leadMagnet: 'sme-four-layers'`
- The subscribe API enrolls SME signups into the sequence directly (code, not a Kit automation), tags them, and adds them to the main form

## Max's checklist (15 minutes total)

- [ ] **Review + publish Email 1.** Open https://app.kit.com/sequences/2789619 and read the draft. Edit anything that doesn't sound like you, then publish it. Until it's published, signups get tagged + enrolled but receive nothing.
- [ ] **Decide double opt-in.** Check the form settings for the main form (CONVERTKIT_FORM_ID, the one all site signups go through). If double opt-in is ON, a podcast listener on a phone has to find a confirmation email before anything arrives. Decide deliberately; for this funnel single opt-in is recommended.
- [ ] **Send yourself a test.** Use a fresh email (a +alias works) on https://cognitivefingerprint.ai/sme and confirm: prompt unlocks on page, Email 1 arrives, lands in Primary not Promotions/Spam.

## Before air date (June 24 - July 4)

- [ ] Write the 5-day Invisible Expertise course (emails 2-6 of the sequence). Day 1 = run the prompt (already live as Email 1). Days 2-5 = the four costs of invisible expertise (lost sales / bottleneck / generic AI / unteachable). Final email bridges to the newsletter, pattern in `content/coaches-eye-substack-follow-up-sequence.md`.
- [ ] Re-run the end-to-end test with a fresh email on two providers (Gmail + one other).
- [ ] Lock the on-air offer sentence and confirm `/sme` copy matches it word for word. Candidates (pick/edit one, say it the same way every time Mike cues you):
  1. "The full prompt is free at cognitivefingerprint dot ai slash S-M-E. Run it on one of your own transcripts tonight and it'll show you patterns you didn't know you had."
  2. "Go to cognitivefingerprint dot ai slash S-M-E. The whole prompt is there free, plus a five-day course on invisible expertise."
  3. "Everything we talked about today, the full prompt and the follow-ups that build your fingerprint file, is at cognitivefingerprint dot ai slash S-M-E."

## Reference

- Sequence editor: https://app.kit.com/sequences/2789619
- Tag ID: 20247956 (`Lead Magnet: SME Four Layers`)
- Lead magnet key in code: `sme-four-layers` (`app/api/convertkit/subscribe/route.ts`)
- Canonical prompt + test protocol: `mb-brain/2 - Cognitive Fingerprint/02 - Operations/Sales And Productization/CF App/sme-four-layers-extraction-prompt.md`

# Kit (ConvertKit) Setup — Morning Punch-List

Wires the Remix Room nurture sequence to Kit. Estimated time: 15 minutes.

Tag trigger is `remix-room-subscriber` (already fires from the live form on cognitivefingerprint.ai/remixroom).

Email bodies are in `NURTURE_SEQUENCE.md` (sibling file) — open it in a second tab to copy/paste each body as you go.

---

## Step 0 — Log into Kit
- Go to https://app.kit.com/
- Use your normal account

## Step 1 — Confirm the tag exists
- Left nav → **Subscribers** → **Tags**
- Scroll or search for `remix-room-subscriber`
- If missing, click **New Tag**, name it exactly `remix-room-subscriber` (lowercase, hyphens)
- Also create these tags if they don't exist:
  - `source-dan-koe-2026-04-23`
  - `nurture-active`
  - `nurture-complete`
  - `btd-subscriber`
  - `cf-newsletter-subscriber`

## Step 2 — Create the Sequence
- Left nav → **Send** → **Sequences** → **New Sequence**
- Name: `Remix Room Welcome`
- Description: `5-email nurture triggered by remix-room-subscriber tag`
- Click **Save**

## Step 3 — Load the 5 Emails
For each email below, click **Add Email** in the sequence, then:
1. Paste the subject line into **Subject**
2. Paste the preview text into **Preview text**
3. Paste the body into the email composer (plain text is fine)
4. Set the **Delay** as listed
5. Leave **Status** as `Draft` for now

### Email 1
- **Subject:** `The Remix Room opens.`
- **Preview:** `Plus one tip most people skip before their first prompt.`
- **Delay:** `Send immediately` (0 days after previous)
- **Body:** see NURTURE_SEQUENCE.md → Email 1

### Email 2
- **Subject:** `It's not the model doing the work`
- **Preview:** `The interview step is. Here's why.`
- **Delay:** `2 days after previous email`
- **Body:** see NURTURE_SEQUENCE.md → Email 2

### Email 3
- **Subject:** `I didn't build this for creators`
- **Preview:** `A short story about why it exists anyway.`
- **Delay:** `2 days after previous`
- **Body:** see NURTURE_SEQUENCE.md → Email 3

### Email 4 (Beware the Default community plug)
- **Subject:** `Where creators actually use these`
- **Preview:** `The community where we run them together.`
- **Delay:** `3 days after previous`
- **Body:** see NURTURE_SEQUENCE.md → Email 4
- **Before saving:** replace `[BEWARE THE DEFAULT LINK — insert actual Skool URL]` with your Skool community URL.

### Email 5 (CF Newsletter plug)
- **Subject:** `Last one. Then you pick.`
- **Preview:** `Keep the tool, and optionally, keep the thread.`
- **Delay:** `3 days after previous`
- **Body:** see NURTURE_SEQUENCE.md → Email 5
- **Before saving:** replace `[SUBSCRIBE TO THE CF NEWSLETTER — insert actual Kit form/link]` with your CF Newsletter signup URL.

## Step 4 — Enable the Sequence
- Once all 5 emails are saved as Draft, click the **Published/Draft toggle** on each to **Published**
- The sequence itself also needs to be set to active

## Step 5 — Wire the Trigger (Automation)
- Left nav → **Automate** → **Visual Automations** → **New Automation**
- Trigger: **Tag added** → select `remix-room-subscriber`
- Action: **Subscribe to sequence** → select `Remix Room Welcome`
- Name the automation: `Remix Room — tag → sequence`
- Click **Save**, then toggle **Live**

## Step 6 — Test End-to-End
1. Open an incognito browser window
2. Visit https://www.cognitivefingerprint.ai/remixroom
3. Enter a test email you control (use a `+remixtest@` alias if possible)
4. Submit
5. Confirm:
   - Page unblurs and shows all 9 prompt spreads with images
   - Within ~60 seconds, Email 1 arrives in the test inbox
   - In Kit, the subscriber shows with all 3 tags: `remix-room-subscriber`, `source-dan-koe-2026-04-23`, `nurture-active`

## Step 7 — Exit Conditions (optional but recommended)
In the Visual Automation, add these exit paths so subscribers don't get double-pitched:
- If `btd-subscriber` tag is added → exit sequence (they joined BTD from Email 4)
- If `cf-newsletter-subscriber` tag is added → exit sequence (they subscribed from Email 5)

## Step 8 — Double opt-in
- Kit defaults to double opt-in on new forms. Confirm the form connected to `CONVERTKIT_FORM_ID` in production has the confirmation email configured (or turn off double opt-in for this form if you want instant access — recommended for lead magnets since we're not trying to confirm consent twice).

---

## Status at hand-off (morning Max)

- [x] Page live at cognitivefingerprint.ai/remixroom
- [x] All 10 images loading on prod
- [x] Form submit working (`K0GjScPzOrD2bxY9L5zRRA` API key tag trigger verified)
- [x] Nurture copy written (NURTURE_SEQUENCE.md)
- [ ] Sequence created in Kit — DO MORNING
- [ ] 5 emails loaded into sequence — DO MORNING
- [ ] Visual Automation trigger wired — DO MORNING
- [ ] End-to-end test with real email — DO MORNING

Total morning time: ~15 min if Kit UI is responsive.

## If you want me to do it via API instead

I didn't run the API overnight because:
1. Kit v3 requires `api_secret` in URL query string (credential-leak in logs)
2. Kit v3 doesn't support creating sequences via API anyway — sequence creation is UI-only
3. Arming a trigger without your supervision = risk of emails blasting Max's existing list if misconfigured

If you want to hand me the job again in the morning while you're awake, say the word and I can script the Step 6 end-to-end test + do a real paid-key call to verify Kit is tagging correctly.

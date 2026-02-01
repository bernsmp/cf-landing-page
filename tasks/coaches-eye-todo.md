# Coach's Eye Lead Magnet - TODO

## Overview
Complete the Coach's Eye lead magnet funnel: Kit integration, subscriber segmentation, and nurture sequences.

---

## Phase 1: Kit Subscriber Segmentation ✅

### 1.1 Import Existing Substack Subscribers
- [x] Run initial import from CSV (2,235 subscribers)
- [x] Tags created in Kit:
  - `Signal>Noise SS Sub` (ID: 15278756)
  - `SS Paid` (ID: 15278757)
  - `SS Free` (ID: 15278758)

**Status:** Import running (817/2235 as of last check)

### 1.2 Set Up Ongoing Sync (StackContacts)
- [ ] Confirm StackContacts is syncing Signal>Noise data
- [ ] Add Kit API key to StackContacts `.env`
- [ ] Test sync script with `--dry-run`
- [ ] Run first real sync
- [ ] Set up cron job for daily sync

**Location:** `/Users/maxb/Desktop/Vibe Projects/stackcontacts/`

---

## Phase 2: Nurture Sequences ✅

### 2.1 Newsletter Path (non-subscribers → S>N)
- [x] Email 1: "The reason Pattern #1 haunts you"
- [x] Email 2: "The pattern none of the 9 coaches could name"
- [x] Email 3: "What Phil Jackson understood about Michael Jordan"
- [x] Email 4: "The newsletter where patterns introduce themselves"

### 2.2 BTD Upsell Path (S>N subscribers → BTD)
- [x] Email 1: "You just studied 9 patterns. Now what?"
- [x] Email 2: "Your expertise is invisible to you"
- [x] Email 3: "What happens when experts watch each other work"
- [x] Email 4: "Join us in Beware the Defaults"

**Saved to:** `/content/coaches-eye-nurture-sequences.md`

---

## Phase 3: Kit Automation Setup ⏳

### 3.1 Create Visual Automation
- [ ] Create automation triggered by tag: `Lead Magnet: Coaches Eye`
- [ ] Add If/Else branch: Has tag `Signal>Noise SS Sub`?
  - **YES** → BTD Sequence (4 emails)
  - **NO** → Newsletter Sequence (4 emails)

### 3.2 Add Emails to Kit
- [ ] Create "Coach's Eye - Newsletter Path" sequence in Kit
- [ ] Add 4 emails with Day 1, 3, 5, 7 timing
- [ ] Create "Coach's Eye - BTD Upsell" sequence in Kit
- [ ] Add 4 emails with Day 1, 3, 5, 7 timing

---

## Phase 4: Test & Launch 🔜

- [ ] Test unlock flow end-to-end
- [ ] Verify correct sequence triggers based on subscriber status
- [ ] Monitor first week of signups
- [ ] Check email open/click rates

---

## Technical Reference

### Files
- Coach's Eye page: `/app/coaches-eye/page.tsx`
- Unlock component: `/app/coaches-eye/components/UnlockGate.tsx`
- Kit API route: `/app/api/convertkit/subscribe/route.ts`
- Import script: `/scripts/import-substack-to-kit.js`
- Sync script: `/Users/maxb/Desktop/Vibe Projects/stackcontacts/sync_to_kit.py`
- Nurture emails: `/content/coaches-eye-nurture-sequences.md`

### Kit Tags
- `Signal>Noise SS Sub` (ID: 15278756) - all Substack subscribers
- `SS Paid` (ID: 15278757) - paid subscribers
- `SS Free` (ID: 15278758) - free subscribers
- `Lead Magnet: Coaches Eye` - Coach's Eye downloaders

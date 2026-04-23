# The Remix Room — Nurture Sequence

**Trigger:** Tag `remix-room-subscriber` added (fires on email capture)
**Total emails:** 5
**Span:** 10 days
**Exit ramps:** CF Newsletter subscribe (auto-tag + end sequence), BTD community join (auto-tag + end sequence), unsubscribe

**Voice:** Max Bernstein voice guide. Anthropomorphism. Burstiness. Concrete grounding. No em dashes. No hype language. No "not X, it's Y." No throat-clearing openers.

**Brand framing:** Archival ("First Edition"), CF™ methodology, Dan Koe talk as attribution moment. Do not overclaim. Reader is in the "small flash of possibility" stage, not the "ready to buy" stage.

---

## Email 1 — IMMEDIATE (on capture)

**Subject:** The Remix Room opens.
**Preview:** Plus one tip most people skip before their first prompt.

```
You're in. Full volume below.

cognitivefingerprint.ai/remixroom

One note before you go.

These prompts behave like a good tailor. They need your measurements.
Vague answers in, vague writing out. Specific moments, actual phrases
your friend used at the bar last Tuesday, the sentence your client said
on the call that still bothers you. Those are what make the output
sound like you instead of like everyone else.

If you try one and the output reads flat, that's almost never the
prompt. That's the tailor asking for your shirt size and you handing
over "medium."

Start with Naval × Bourdain. The combo is the most unusual in the
library. Answer the three questions slow.

— Max

P.S. I'll send a short email in two days about the real mechanic behind
the Collide pack. Why the interview step is doing more work than the
model. If that's not useful, one click unsubscribes, no hard feelings.
```

**Tags on send:** none changed
**Click tracking:** link to cognitivefingerprint.ai/remixroom → tag `clicked-library-email-1`

---

## Email 2 — DAY 2

**Subject:** It's not the model doing the work
**Preview:** The interview step is. Here's why.

```
Most AI tools do this:

prompt → output

The Remix Room does this:

interview → extraction → render

The interview is the move. When a prompt asks you three specific
questions before rendering anything, your answers carry pattern
material the model couldn't invent on its own. The scene you
remember. The exact words someone said. The small detail you'd never
put in a summary.

The model doesn't make your writing sound like you. Your answers do.
The model just gets out of the way.

This is also why thin answers produce thin output. The tool isn't a
magician. It's a tailor, and you're still the one wearing the shirt.

If your first run felt generic, try it again with:
— one concrete scene instead of a summary
— an actual phrase someone said, in quotes
— a specific moment, dated if possible

Run a different combo:
cognitivefingerprint.ai/remixroom

— Max

P.S. The interview-first move isn't a prompt trick. It's the core of how
I do Cognitive Fingerprint™ work for clients. A whole methodology built
around asking better questions before touching output. More on that in
a few days.
```

**Tags on send:** none changed
**Click tracking:** link to remixroom → tag `clicked-library-email-2`

---

## Email 3 — DAY 4

**Subject:** I didn't build this for creators
**Preview:** A short story about why it exists anyway.

```
The Remix Room started as an internal tool.

For the last year I've been doing Cognitive Fingerprint™ work.
Long version: I analyze transcripts of how someone thinks and surface
the unconscious patterns that make their work theirs. Coaches,
founders, writers. The output is a 25-page document most people read
and say "I didn't know I did that."

The problem was scale. The full analysis takes weeks. Most creators
don't need weeks. They need one good output tomorrow.

The Remix Room is the five-percent version. It uses the same
interview-first mechanic on a tiny surface. You don't get your full
fingerprint. You get one piece of writing that couldn't have come
from anyone else.

Enough for most people. For the rest, there's the full version.
I'll show you a real one next email.

One more prompt while you're here:
cognitivefingerprint.ai/remixroom

— Max
```

**Tags on send:** none changed
**Click tracking:** link to remixroom → tag `clicked-library-email-3`

---

## Email 4 — DAY 7 (Beware the Default community)

**Subject:** Where creators actually use these
**Preview:** The community where we run them together.

```
Something happens with these prompts when you run them alone and
something different happens when you run them with a room of other
creators running them on their own material at the same time.

Alone: you get a draft. Sometimes a good one.

Together: you see what you're missing. Someone else runs Naval ×
Bourdain on a topic you'd never have thought to try it on. Someone
runs the Cold Open Machine on your thing and surfaces a move you
didn't see was there. You start to catch your own defaults in
the act, which is the whole point.

That's Beware the Default. It's a community I run for people using
AI to sharpen their thinking instead of dilute it. Weekly field
reports, live sessions, shared prompt experiments. Creators,
writers, solo operators.

If the Remix Room has been useful and you want the part where
someone else can see what you can't, the community is here:

[BEWARE THE DEFAULT LINK — insert actual Skool URL]

Twenty seven dollars a month. Cancel anytime. No upsell. No funnel.

If that's not for you, there's one more email coming in a few days
with something else you might like instead.

— Max
```

**Tags on send:** none changed
**Click tracking:**
- Link to BTD → tag `clicked-btd-email-4`
- If subscribed to BTD (Skool webhook or manual): tag `btd-subscriber`, remove from sequence

---

## Email 5 — DAY 10 (CF Newsletter, final email)

**Subject:** Last one. Then you pick.
**Preview:** Keep the tool, and optionally, keep the thread.

```
This is the last email in the Remix Room welcome sequence.

Either I stop here and you keep the tool, or you stay on for the
Cognitive Fingerprint™ Newsletter and I send you one thing a week.

What the newsletter covers:
— Pattern extractions from real people, anonymized when it matters
— Voice and positioning breakdowns
— The occasional case study from CF work with clients
— Tools and prompts I'm testing internally before they ship

What it doesn't cover:
— AI news
— Productivity tips
— Lifestyle content
— Threads about threads

If any of that sounds useful, the subscribe link is below. If not,
no drama. The Remix Room stays open either way.

[SUBSCRIBE TO THE CF NEWSLETTER — insert actual Kit form/link]

Two recent pieces if you want a sample before deciding:
— Reginald Love's Cognitive Fingerprint: cognitivefingerprint.ai/reginald-love
— Coach K's: cognitivefingerprint.ai/coachk

— Max

P.S. The Remix Room is the first edition. More volumes coming. The
newsletter is where I announce them first.
```

**Tags on send:** `nurture-complete` (add)
**Click tracking:**
- Link to newsletter subscribe → tag `clicked-newsletter-email-5`
- Link to Reggie CF → tag `clicked-reggie-cf`
- Link to Coach K CF → tag `clicked-coachk-cf`
- If CF Newsletter subscription confirmed: tag `cf-newsletter-subscriber`

---

## Automation logic (Kit setup)

### Sequence entry
- Trigger: tag `remix-room-subscriber` added
- Action: send Email 1 immediately

### Sequence exit conditions (before completion)
- Tag `btd-subscriber` added (they joined BTD from Email 4) → pause sequence, skip to Email 5 modified with BTD acknowledgment removed, OR end sequence entirely
- Tag `cf-newsletter-subscriber` added (they subscribed from any link) → end sequence, let newsletter automation take over
- Tag `unsubscribed` → standard Kit unsubscribe flow

### After Email 5
- Add tag `nurture-complete`
- Do not send further automated emails from this sequence
- Subscriber remains on list for newsletter broadcasts if they opted in

### Delays
| Email | Delay from previous |
|-------|---------------------|
| 1 | Immediate on tag add |
| 2 | 2 days after Email 1 |
| 3 | 2 days after Email 2 (day 4 total) |
| 4 | 3 days after Email 3 (day 7 total) |
| 5 | 3 days after Email 4 (day 10 total) |

## Pre-launch checklist

- [ ] BTD community link inserted in Email 4
- [ ] CF Newsletter subscribe link inserted in Email 5
- [ ] All five emails loaded into Kit as automation steps
- [ ] Trigger tag `remix-room-subscriber` wired to sequence start
- [ ] Click-tracking tags configured on each link
- [ ] Exit conditions wired (btd-subscriber, cf-newsletter-subscriber)
- [ ] Email 1 tested with a dummy signup, arrives within 60 seconds
- [ ] Mobile rendering verified on all five emails
- [ ] Plain-text versions generated and reviewed

---
name: The Remix Room
version: 0.1.0-alpha
status: draft
authors:
  - Max Bernstein
  - Claude (Opus 4.7)
created: 2026-04-23
route: cognitivefingerprint.ai/remixroom
launch: 2026-04-23 (Dan Koe talk)

tokens:
  colors:
    canvas: "#0a0a0b"
    primary-text: "#F0EDE6"
    secondary-text: "#8a8a96"
    tertiary-text: "#4a4a54"
    divider: "rgba(240, 237, 230, 0.08)"
    divider-strong: "rgba(240, 237, 230, 0.18)"
    gold: "#ffb829"
    gold-soft: "rgba(255, 184, 41, 0.12)"

  typography:
    display:
      family: "Instrument Serif"
      variable: "--font-display"
      weights: [400]
      italic: banned
    body:
      family: "Inter"
      variable: "--font-body"
      weights: [400, 500, 600]
    mono:
      family: "JetBrains Mono"
      variable: "--font-mono"
      weights: [400, 500]

  scale:
    display-hero: "clamp(56px, 9vw, 112px)"
    display-large: "clamp(32px, 5vw, 56px)"
    display-medium: "clamp(22px, 2.5vw, 32px)"
    body-large: "20px"
    body: "17px"
    body-small: "14px"
    micro: "11px"

  spacing:
    section-gap: "clamp(96px, 12vh, 160px)"
    prose-max-width: "640px"
    page-max-width: "1120px"
    prose-gap: "28px"

  motion:
    ease: "cubic-bezier(0.16, 1, 0.3, 1)"
    transition-quick: "200ms"
    transition-standard: "400ms"
    transition-slow: "800ms"

components:
  index-row:
    shape: "[number mono] ── [title serif] · · · [pack micro caps]"
    tokens: [mono, display, divider]
    states:
      rest: "hairline bottom, ivory at 100%"
      hover: "hairline bottom 18%, number flickers gold 200ms, title shifts 4px right"

  inline-gate:
    shape: "Your email [input]  [submit verb]"
    behavior: "Rendered as a sentence in prose. No modal. No card. On submit, input replaced with ivory checkmark and user's email. No page transition. Rest of page scrolls into view."

  prompt-spread:
    shape: "[number mono gold] [pack micro] / [title serif large] / [prompt body mono selectable] / [copy · chatgpt · claude]"
    tokens: [mono, display, canvas]
    chrome: "None. No border, no shadow, no background. Hairline separator above and below."
---

# The Remix Room — Design Document

## Overview

A nine-prompt library packaged as a Cognitive Fingerprint™ release. Ships during Dan Koe's presentation on 2026-04-23. Email-gated in the sense that the full volume reveals after the user submits. Prompts are artifacts the user copies or deep-links into their AI of choice. The page does not execute prompts.

One page. No routes below `/remixroom`. Scroll-driven.

## Design Stance

Three traps named, all rejected.

**Trap 1 — The Prompt Vault Drop** (2023-2024 AI default). Gradient hero, glass cards, "unlock the vault" copy. Gumroad product page masquerading as a brand experience.

**Trap 2 — The Motionsites Card** (2025-2026 premium AI default). Dark canvas with Instrument Serif italic em-accents inside Inter display, liquid glass pills, video loop backgrounds, tight tracking, small-caps labels. Half of Awwwards right now.

**Trap 3 — The Ivory Paper Treatise** (Claude's current default). Cream canvas, black serif, wide margins, feels like every recent Claude-generated landing page.

**Anti-target committed** (borrowed from the Dan Koe Skill Store brief): "The AI Creator Toolkit Bundle." Symptoms: generic product hero, feature-card sections, marketplace bundle energy.

**Aesthetic committed:** Dan Koe Skill Store design universe, rendered in CF's palette. Archive. Index. Atlas. Premium from typography, numbering, section hierarchy, spacing, restraint, taxonomy. Never from cards, glows, pills, video, or icons.

## Colors

Canvas `#0a0a0b`. Near-black. Not pure black. Not Deep Charcoal's `#1C1C1E` either. The `grey-950` token already in `globals.css`.

Text `#F0EDE6`. Warm Ivory. Never pure white. Never raw `#fff`.

Insight Gold `#ffb829` appears in exactly four places per CF's Gold Rule of Four:
1. The `CF™` monogram, top-left, 11px
2. The "First Edition" label in the hero
3. The submit verb on the inline gate
4. The prompt number (01, 02, ..., 09) flickers gold on hover for 200ms

Nowhere else. Not on borders, not on icons (there are no icons), not as text highlight.

## Typography

Instrument Serif at weight 400 only. Never italic. Italic Instrument Serif inside otherwise-sans display is the Motionsites Card tell; we escape by refusing the move entirely. Roman serif only.

Inter at 400, 500, 600. Body prose and micro-labels.

JetBrains Mono at 400, 500. Prompt numbers, pack labels, and the prompt bodies themselves. Mono on the prompt bodies is the signal: this is executable text. Not copy. Code.

Hierarchy by weight and size, never by color. Headings are weight 400. The size does the work.

## Layout

Full canvas to edge on mobile. Centered `1120px` container on desktop with generous side margins (minimum `40px` on tablet, `80px` on desktop).

Prose capped at `640px` for readable line length.

No grid system for the index. Vertical list, one row per prompt, hairline top separator. No columns below `md:` breakpoint.

### Page structure

One scroll, nine beats:

1. **Hero** (100dvh). `CF™` monogram top-left. "First Edition" micro-label top-right. Title and sub stack left-aligned, anchored to the bottom third of the viewport. Everything else: canvas.

2. **Framing** (one viewport). Single-column prose. Anthropomorphism, burstiness, concrete grounding. No images.

3. **What this is / What this is not**. Two-column editorial contrast on desktop, stacked on mobile. Only type. No boxes.

4. **The Index**. Nine rows, numbered `01 ── 09`. Hairline separators. Hover reveals meaning (see `components.index-row`). Click does nothing yet.

5. **How to use it**. Four sentences, full stop.

6. **Inline gate**. A sentence in the prose with an input and a submit verb. Pre-submit: prompts below are blurred at `filter: blur(8px)` with `pointer-events: none`. Post-submit: blur removed, input becomes ivory checkmark + email.

7. **Featured** (optional, 2-3 prompts). Chapter-spread treatment. Saved for later iteration if time permits.

8. **The Volume**. All nine prompts in full order. Each is a chapter spread with prompt body in JetBrains Mono, copy button, two deep-link verbs ("Run in ChatGPT", "Run in Claude").

9. **Colophon**. Closing note, CF Newsletter link, Beware the Default community link. Footer line: "A Cognitive Fingerprint™ release by Cadence Intelligence."

## Motion

Minimal. The page is a document, not a show.

- No scroll-reveal animations on sections. Content is there when you arrive.
- Index rows: hover raises hairline opacity to 18%, number flickers gold for 200ms, title shifts 4px right. That is all.
- Inline gate submit: input transitions to checkmark + rendered email over 400ms. Prompts below de-blur over 800ms. No confetti. No modal.
- Copy button: prompt body gets a 1px ivory outline for 300ms, verb changes to "Copied." and back after 1500ms.

No framer-motion `layoutId`. No stagger. No spring physics.

## Voice

Max Bernstein voice guide applied throughout:
- Anthropomorphism. Abstract ideas get feelings.
- Burstiness. A long winding sentence. Then a fragment.
- Concrete grounding. Every abstraction earns a physical object within 2-4 sentences.
- Curious observer energy, not weary explainer.

Banned: em dashes, hype words (unlock, leverage, transform, game-changer, revolutionize, 10x), throat-clearing ("Here's the thing," "Let's dive in"), the "not X, but Y" construction, vague round numbers.

Archival framing borrowed from the Dan Koe Skill Store brief: "First Edition." Not "Volume I" or "Founding Index." First Edition is the locked term.

## Locked copy samples

**Hero title:** `The Remix Room`

**Hero sub:** `Nine prompts. Two moves. For finding your unique angle faster than the blank page can stop you.`

**Micro-label top-right:** `FIRST EDITION · 04.2026`

**What this is:**
- Prompts you can run anywhere
- A process for finding your unique angle
- Yours to keep, with no account anywhere

**What this is not:**
- A course
- A chatbot
- Another subscription

**How to use it (four sentences):** `Read the prompt. Paste it into the AI you already use. Answer the questions like a real person who has a real topic. Keep what works, discard what doesn't, come back when your question changes.`

**Gate sentence:** `Your email, and the full volume opens below.` Submit verb: `Open`. Never `Unlock`, `Access`, `Submit`, or `Get`.

**Colophon footer:** `A Cognitive Fingerprint™ release by Cadence Intelligence. First Edition, April 2026.`

## Build Notes

- Framework: Next.js 16 App Router, React 19, Tailwind v4
- Route: `app/remixroom/page.tsx`. Client component for gate state.
- Data: `app/remixroom/data.ts`. Exports `PROMPTS: Prompt[]` with id, number, pack, title, promise, prompt body, inputs.
- Server action: `app/remixroom/actions.ts`. Submits to ConvertKit.
- Env vars already set: `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID`.
- No new dependencies. Everything in `package.json` is sufficient.
- Mobile: `min-h-[100dvh]` for full-viewport sections. Never `h-screen`.

## Pre-flight checklist

Run before commit. If any fail, fix before shipping.

- [ ] No cards anywhere (box + shadow + border-radius > 4px + padding)
- [ ] No pills (`backdrop-blur` + `rounded-full`)
- [ ] No gradients on surfaces
- [ ] No icons. `lucide-react` banned on this page.
- [ ] No `<video>` elements
- [ ] No italic Instrument Serif
- [ ] No hype language in any copy
- [ ] Gold appears in exactly four places
- [ ] Section headings render at weight 400
- [ ] Prompt bodies render in JetBrains Mono
- [ ] Gate is inline in prose, not in a modal
- [ ] Prompts are blurred pre-submit, sharp post-submit
- [ ] Page works with keyboard nav
- [ ] Page works with JS disabled (prompts still readable, gate degrades to a mailto: or form POST)

## Parallel-build note

Any Claude session or Codex run can build from this DESIGN.md. The YAML front matter is machine-readable; the rationale below is human-readable. If two builds happen in parallel, compare against the Pre-flight checklist first, then compare by feel. Pick the one that reads more like an archive and less like a product.

## Revision log

- `0.1.0-alpha` 2026-04-23 — initial draft. Traps named, tokens locked, structure committed.

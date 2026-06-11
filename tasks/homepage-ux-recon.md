# Homepage UX Recon

## 1. Reference Pull

| App | Lift this | Skip this |
|---|---|---|
| Monologue | Announcement strip, large headline, oversized product media | Teal palette and repeated duplicate headings |
| Raycast | Command-surface rows with shortcut-like metadata | Purple app-store glow treatment |
| Linear | Dense issue-style proof panels and tiny status labels | Full product-dashboard complexity |
| Readwise Reader | Use-case breadth shown as context tiles | Long feature catalog sprawl |
| Superhuman | Premium speed cues and keyboard-first framing | Over-claiming productivity numerics |
| Granola | Notes/transcript-to-summary mental model | Soft pastel meeting-app warmth |
| Notion | Block-like examples with familiar work contexts | Generic template gallery feeling |
| Every | Editorial trust and creator-led product framing | Newsletter-first brand dominance |
| Arc | Confident chrome and product-window staging | Browser-specific metaphor overload |
| Chronicle | Big cinematic product panels with tight text | Presentation-software visual tropes |

## 2. Mechanical Patterns

| Pattern | Implementation | Source app(s) |
|---|---|---|
| Quiet launch strip | 12px mono, 1px amber hairline, 28px height | Monologue, Linear |
| Product media first | Hero right column 520px min, 4:3 panel, no decorative card stack | Monologue, Chronicle |
| Context rows | 56px rows, left icon cell 36px, right micro-label | Monologue, Raycast |
| Status tags | 10px mono uppercase, 1px border, 999px radius | Linear, Raycast |
| Fast hover | 160ms ease-out, translateY(-1px), border alpha +0.08 | Raycast, Superhuman |
| Section rhythm | Alternate full-width bands: #0A0A0B, #111113, #0E0E10 | Monologue, Readwise |
| Proof as artifact | Quote next to concrete extraction object | Linear, Granola |
| CTA restraint | One primary amber button, one text-link secondary | Monologue, Superhuman |

## 3. Visual Patterns

| Pattern | Spec |
|---|---|
| Background | `#0A0A0B` base, `#111113` bands, `#161618` panels |
| Accent | CF gold `#FFB829`, hover `#FFD875`, muted line `rgba(255,184,41,.22)` |
| Text hierarchy | H1 64 to 88px desktop, 44px mobile, `Instrument Serif` |
| Body | 17 to 20px, `Inter`, line-height 1.6, color `#D4D4DA` |
| Mono labels | 10 to 12px, `JetBrains Mono`, letter-spacing `.12em` |
| Borders | `rgba(255,255,255,.08)` default, gold only for selected states |
| Radius | 8px rows, 12px panels, 999px pills |
| Motion | `cubic-bezier(0.16, 1, 0.3, 1)`, 180 to 320ms |

## 4. Three Concrete Calls

> **Steal Monologue's product-first hero. Here's why: Cognitive Fingerprint needs to show the extraction surface before asking people to believe the method.**

> **Steal Raycast's row density. Here's why: expert buyers trust crisp working surfaces more than another grid of soft cards.**

> **Steal Linear's proof-as-work style. Here's why: the output should feel like an artifact that came from real analysis.**

## 5. Anti-Pattern

> **Don't ship a giant glowing fingerprint as the main hero object in v1. Reason: it signals mystique, which contradicts the anchor of visible, evidence-based extraction.**

## 6. Build Implications

If we lock these patterns, the component tree should look like a product story: announcement strip, hero with extraction console, video as artifact, context rows, proof, final CTA. The first sprint should ship: refreshed hero, concrete use-case section, tighter video/proof organization. Precision survives if we resist big abstract glows and generic three-card benefit grids.

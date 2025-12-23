# Cognitive Fingerprint Project Instructions

## Voice Guide (CRITICAL)

**When writing ANY external-facing content (landing pages, copy, emails, CTAs), follow the Max Bernstein Voice Guide.**

Reference: `/Users/maxb/Downloads/max voice guide.md`

### Quick Reference

**Core vibe:** Curious and collaborative. Systematic with genuine enthusiasm.

**Default stance:** "This is the part I find fascinating."

**Key techniques:**
1. **Anthropomorphism** - Give abstract concepts feelings. "Your methodology doesn't want to be found. It sits in the corner of every client call, arms crossed."
2. **Burstiness** - Long winding sentence. Then a fragment. Like this.
3. **Concrete grounding** - Every abstraction gets a physical object within 2-4 sentences. Folder names. Refrigerator hums. Left shoes.
4. **Curious observer energy** - Show enthusiasm through what you notice, not through adjectives.

### Hard Bans
- No em dashes
- No "It is not X, it is Y" constructions
- No hype words: unlock, leverage, game-changer, transform, revolutionize
- No throat clearing: "In today's world," "At the end of the day," "Let's dive in"
- No vague numbers: 10x, hundreds, millions

### Tone Sliders
- Warmth: 7/10 (genuinely interested)
- Directness: 7/10 (say the thing, but not harsh)
- Formality: 4/10 (conversational, peer-level)
- Curiosity: 8/10 (core energy)
- Jargon: 3/10 (plain language)

### Signature Phrases
- "Extract, don't create."
- "Make the invisible visible."
- "This is the part I find fascinating."
- "Here is the move."
- "The pattern has a structure."
- "They do not. This is the moment I live for."

### The Two Tests
1. **Weary vs. Curious Test** - Does the writer sound tired of explaining this? Rewrite with curiosity.
2. **Anthropomorphism Test** - Is there at least one moment where an abstract concept has feelings? If not, add one.

---

## Adding New Prompts (MANDATORY CHECKLIST)

**When adding a new prompt to `data/prompts.ts`, you MUST complete ALL of these steps:**

1. Add the prompt to the `prompts` array with all required fields
2. Run `npm run build` to verify no errors
3. **IMMEDIATELY provide an image generation prompt** for the thumbnail

### Image Prompt Template

After adding any prompt, provide this to the user:

```
**Thumbnail for: [PROMPT TITLE]**

Create a dark, moody illustration with gold/amber accents. The concept: [VISUAL METAPHOR THAT CAPTURES THE PROMPT'S CORE IDEA]. Style: minimal, editorial, sophisticated. Dark navy/black background. Aspect ratio 16:9, premium consulting aesthetic, no text.
```

**DO NOT mark the task as complete until you have provided the image prompt.**

This is not optional. Every prompt needs a thumbnail. The user will generate it themselves, but you must provide the prompt.

---

## Standard Project Rules

1. Before starting any task, ensure the project has proper structure: create a tasks/ folder with a todo.md file inside if they don't already exist.

2. Think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.

3. Make every task and code change as simple as possible. Everything is about simplicity.

4. After completing each feature or significant change:
   - Run the code to ensure it works
   - Check for any security issues
   - Tell me to commit to Git if everything works correctly

5. If you encounter an error:
   - Stop immediately and explain the error
   - Don't try multiple fixes without asking

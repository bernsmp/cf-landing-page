// SME funnel content — the Four Layers Extraction Prompt promised on
// AI Explored ep 114 (Social Media Examiner). Canonical draft + test protocol:
// mb-brain/2 - Cognitive Fingerprint/02 - Operations/Sales And Productization/
// CF App/sme-four-layers-extraction-prompt.md

export const FOUR_LAYERS_PROMPT = `ROLE: You are a cognitive pattern analyst. Your specialty is detecting the tacit
knowledge experts use every day but cannot consciously access or articulate. You
work from evidence: every claim you make must quote the transcript verbatim.

CONTEXT: Cognitive science shows that real expertise runs on unconscious
competence. The more expert someone becomes, the more their knowledge compresses
into automatic patterns, and the harder it gets for them to explain what they
actually do. This transcript contains patterns, frameworks, and judgment calls
the expert performs but cannot see. Your job is to make them visible.

THE FOUR LAYERS YOU ARE ANALYZING:

1. DECLARATIVE (what they know): facts, concepts, frameworks, vocabulary.
   Explicit signals: "what I've seen work is...", "the pattern here is...",
   "most people miss...". Implicit signals: specialized vocabulary used without
   definition, frameworks referenced but never named, assumptions about what
   "everyone knows," connections treated as obvious.

2. PROCEDURAL (how they do it): sequences, techniques, automated behaviors.
   Explicit signals: "my process is...", "first I..., then I...". Implicit
   signals: actions taken without explanation, micro-steps between major steps,
   timing patterns, verbal habits, shortcuts so automatic they would forget to
   teach them.

3. CONDITIONAL (when and why they choose): situational judgment, the
   "it depends" knowledge. Explicit signals: "it depends on...", "when I see X,
   I know to...", "the exception would be...". Implicit signals: choices made
   without stated criteria, instant categorization of a situation, alternatives
   silently rejected, subtle cues that shifted their direction, moments they
   broke their own rules.

4. METACOGNITIVE (how they think about thinking): mental models, beliefs,
   problem-framing. The operating system under everything else. Explicit
   signals: "the way I see it...", "my philosophy is...". Implicit signals:
   recurring themes across unrelated topics, consistent problem-framing, what
   they attend to versus ignore, how they know they are done, beliefs stated
   as facts.

Layers 1 and 2 are what experts say when you ask what they do. Layers 3 and 4
are what clients actually pay for, and they are almost always invisible to the
expert. Weight your analysis accordingly.

INPUT QUALITY GATE (run this check first):
If the transcript is under roughly 1,500 words of the expert talking, is
scripted content, or shows the expert presenting rather than working, STOP.
Say plainly: "There isn't enough unscripted signal here for honest pattern
detection. A pattern needs to appear multiple times before it counts. Bring me
a fuller conversation where you're solving a real problem." Do not produce
findings from thin evidence. A flattering guess helps nobody.

---

INPUT: [PASTE YOUR FULL TRANSCRIPT HERE. Mark which speaker is you if the
labels don't make it obvious.]

---

YOUR ANALYSIS:

## LAYER 1 FINDINGS: What You Know (Declarative)
3-5 knowledge structures used but never named. For each: what it is, the
verbatim quote where it appears, and why it reads as invisible to you.

## LAYER 2 FINDINGS: How You Do It (Procedural)
5-7 unconscious moves: sequences, micro-steps, timing patterns. For each:
the verbatim quote or exchange, and the step you performed without describing.

## LAYER 3 FINDINGS: When and Why You Choose (Conditional)
3-5 strategic decisions made without explanation. For each: the moment (quote
it), the alternatives you silently rejected, and the context cue that appears
to have triggered the choice.

## LAYER 4 FINDINGS: How You Think (Metacognitive)
The deepest layer. Identify:
- Your underlying framework (give it a descriptive working name)
- The core belief shaping your approach, stated as a belief
- Your default problem-framing move
- How you appear to know when you are done
Each with verbatim evidence.

## THE AWARENESS GAP
"In this transcript you explicitly described roughly [X]% of the expertise you
actually demonstrated." Then show the gap: 3-5 specific moments where the
transcript shows unconscious expertise in action, quoted verbatim.

## YOUR PATTERN PREVIEW
- Most distinctive pattern found: [name it, one sentence on why]
- Which layer it lives in: [1-4]
- Differentiation potential: [low / medium / high / exceptional, one sentence
  of justification grounded in the evidence]

## FIVE QUESTIONS THAT WILL REVEAL MORE
Write five questions back to the expert, each anchored to a specific quoted
moment, designed to surface the criteria, sequence, or belief behind a pattern
you detected but could not fully resolve. Format: the moment (quoted), then
the question.

RULES:
- Verbatim quotes for every finding. No quote, no claim.
- Second person throughout ("you do X"), warm but precise. No flattery.
- Plain language. If a finding would survive in a fortune cookie, cut it.
- Never invent timestamps or quotes. If evidence is thin for a finding, say so
  or drop it.`;

export const FOLLOW_UP_PROMPTS = [
  {
    title: 'Follow-up 1: The Pattern Codifier',
    content: `You identified that I use [pattern] unconsciously. Now:
1. Give it a memorable name that captures how it works
2. Break it into teachable steps with clear criteria
3. Find 3-5 other moments in the transcript where I applied it
4. Explain what makes it different from the conventional approach
5. Describe how you would diagram it`,
  },
  {
    title: 'Follow-up 2: The Differentiation Analyzer',
    content: `Based on everything you found:
1. Which patterns are genuinely unique to my approach?
2. Which are industry-standard with my personal modifications?
3. What combination of patterns creates my distinctive method?
4. Which elements would be hardest for someone else to replicate?
5. What should I emphasize to stand out in my field?`,
  },
  {
    title: 'Follow-up 3: The Fingerprint File Starter',
    content: `Turn everything you found into a single markdown file I can give to any AI
assistant so it thinks with my patterns. Structure it as:
- WHO I AM (one paragraph, factual)
- WHAT I KNOW (Layer 1 findings as bullet points)
- HOW I WORK (Layer 2 sequences, step by step)
- HOW I DECIDE (Layer 3 rules as "when X, I do Y because Z")
- HOW I THINK (Layer 4 mental models and beliefs)
- EVIDENCE (the key verbatim quotes behind each section)
Write it in second person addressed to the AI ("the person you are assisting
believes..."). This is v1 of my fingerprint file. I will refine it as I run
more transcripts.`,
  },
];

export const FOUR_LAYERS = [
  {
    name: 'Declarative',
    plain: 'What you know',
    description:
      'Facts, frameworks, vocabulary. The surface layer, and the only one most experts can talk about on demand.',
  },
  {
    name: 'Procedural',
    plain: 'How you do it',
    description:
      'Sequences and moves so practiced they became automatic. You skip them when you try to teach.',
  },
  {
    name: 'Conditional',
    plain: 'When and why you choose',
    description:
      'The "it depends" judgment. Why you picked approach A over B without ever stating the criteria.',
  },
  {
    name: 'Metacognitive',
    plain: 'How you think',
    description:
      'Your mental models and beliefs. The operating system under everything, and the layer clients actually pay for.',
  },
];

export const GOOD_TRANSCRIPT_RULES = [
  {
    title: 'Unscripted',
    detail: 'Not a presentation, not content you wrote. You, thinking on your feet.',
  },
  {
    title: 'You in problem-solving mode',
    detail:
      'The richest patterns show up when you are working, not when you are describing your work.',
  },
  {
    title: 'The whole conversation',
    detail:
      'Do not trim it to the highlights. The throwaway moments are where the gold hides.',
  },
  {
    title: '20+ minutes of you talking',
    detail:
      'Less than that and the prompt will tell you it does not have enough signal. A pattern has to show up more than once before it counts.',
  },
];

export const HOW_TO_RUN_STEPS = [
  'Get a transcript of you working: a client call, coaching session, or podcast interview. Granola, Zoom, Google Meet, or Fathom transcripts all work.',
  'Open Claude or ChatGPT. Paste the full prompt, then replace the INPUT section with your transcript.',
  'Run it. Read the Layer 3 and Layer 4 findings first. That is where the things you did not know about yourself live.',
  'Use the follow-up prompts on the pattern that surprised you most.',
];

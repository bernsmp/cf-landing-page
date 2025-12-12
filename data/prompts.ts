export interface Prompt {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'extraction' | 'positioning' | 'content' | 'analysis' | 'workflow';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isPremium: boolean;
  prompt: string;
  thumbnail?: string; // Path to thumbnail image, e.g., '/images/prompts/framework-namer.png'
  whatToLookFor?: string[];
  relatedArticle?: {
    title: string;
    url: string;
  };
  tags: string[];
}

export interface Workflow {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'extraction' | 'positioning' | 'content' | 'analysis';
  isPremium: boolean;
  thumbnail?: string;
  file: string; // Path to markdown file with full content
  steps: {
    stepNumber: number;
    title: string;
  }[];
  estimatedTime: string;
  tags: string[];
}

// Sample prompts - you'll replace these with your actual prompts
export const prompts: Prompt[] = [
  {
    id: '1',
    slug: 'value-archaeology',
    title: 'Value Archaeology',
    description: 'Extract the hidden value patterns from your client conversations using the EXTRACT Method™. Discover the 90% of expertise that operates below conscious awareness.',
    category: 'extraction',
    difficulty: 'intermediate',
    isPremium: false,
    thumbnail: '/images/prompts/value-archaeology.png',
    prompt: `# ROLE
You are an expertise archaeologist trained in the EXTRACT Method™. Your specialty is identifying unconscious competence patterns that experts demonstrate but cannot articulate. You look for the 90% of expertise that operates below conscious awareness.

# CONTEXT
Most experts vastly underestimate what makes them valuable. They focus on WHAT they know (Declarative - low value) while their real expertise lives in HOW they decide (Conditional) and HOW they think about thinking (Metacognitive - highest value).

Your job is to surface patterns the expert literally cannot see themselves because mastery creates blindness. The better someone gets, the more automatic their expertise becomes, and the less accessible it is to conscious awareness.

# INPUT
<<<TRANSCRIPT STARTS>>>
[PASTE YOUR TRANSCRIPT HERE]
<<<TRANSCRIPT ENDS>>>

# EXTRACTION PROTOCOL

## LAYER 1: Invisible Moves
Things the expert did automatically without realizing.

**Look for:**
- Moments they skipped steps (what felt "obvious" to them isn't)
- Questions they asked that changed the conversation direction
- Topics they instinctively avoided or pursued
- Pacing decisions (when they slowed down or sped up)
- Information they gathered before taking action

## LAYER 2: Reframes
Where they shifted how the other person saw the problem.

**Look for:**
- Moments the client's language changed after the expert spoke
- Category shifts ("It's not X, it's actually Y")
- Permission structures ("What if you were allowed to...")
- Belief challenges delivered as observations
- Scale changes (zooming in or out on the problem)

## LAYER 3: Pattern Interrupts
Where they broke expected thinking flows.

**Look for:**
- Counterintuitive questions
- Redirections from where the conversation "should" go
- Strategic silence or pauses
- Refusal to solve what the client asked to solve
- Introduction of constraints that freed thinking

## LAYER 4: Decision Architecture (HIGHEST VALUE)
Their unconscious conditional logic.

**Look for:**
- "If [signal], then [response]" patterns they never stated
- What they consistently ignored vs. consistently noticed
- Their implicit prioritization criteria
- How they knew when to push vs. when to support
- Environmental factors they adapted to without mentioning

## LAYER 5: Signature Language
Phrases, metaphors, or framings unique to them.

**Look for:**
- Repeated phrases across different contexts
- Unique metaphors or analogies
- The way they structure explanations
- Permission-granting language patterns
- Their vocabulary for naming what they see

## LAYER 6: Tacit Knowledge Indicators
Hidden expertise markers.

**Look for:**
- "Obviously" or "of course" statements (what's NOT obvious)
- "Just" or "simply" language (hiding complex processes)
- Throwaway comments that compress years of experience
- Edge case handling that seemed casual
- Micro-adjustments based on subtle signals

# OUTPUT FORMAT

For each pattern discovered:

## [PATTERN NAME]
*Make it memorable and specific to this person*

**Type:** [Invisible Move / Reframe / Pattern Interrupt / Decision Architecture / Signature Language / Tacit Knowledge]

**Exact Moment:**
> "[Quote the transcript precisely]"

**What Actually Happened:**
[Describe the invisible expertise being deployed]

**Why They Can't See It:**
[Explain why this has become automatic/invisible to them]

**What It Unlocked:**
[The outcome or shift this pattern created]

**Frequency:** [One-time / Recurring pattern - cite other instances if found]

**Monetization Potential:** [How this pattern could become a teachable framework]

---

# FINAL SYNTHESIS

After extracting individual patterns, provide:

## Cognitive Fingerprint Summary
What makes this expert's approach genuinely unique? What combination of patterns creates their signature?

## The Expert's Hidden Decision Tree
Map the unconscious IF-THEN logic that governs their approach.

## Highest-Value Pattern
Which single pattern, if made conscious and scalable, would create the most value?

## Blind Spots
What might this expert be OVER-using without realizing? Where might their strengths become limitations?

## Framework Seeds
Which patterns are robust enough (appearing 3+ times, creating consistent outcomes) to develop into named methodologies?`,
    whatToLookFor: [
      'Patterns that repeat across multiple conversations',
      'Moments where the other person had an "aha" reaction',
      'Things you do automatically that others struggle with',
      'Language patterns that feel natural to you but specific',
      'Decision Architecture patterns - the highest value extraction',
    ],
    relatedArticle: {
      title: 'The Expertise Paradox: Why Being Good Makes You Blind',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['extraction', 'patterns', 'transcripts', 'EXTRACT Method'],
  },
  {
    id: '2',
    slug: 'framework-namer',
    title: 'Framework Naming Workshop',
    description: 'Name your methodology using the DRIVE formula. Get 10 names scored on Descriptive, Recognizable, Imaginable, Viral, and Emotional criteria.',
    category: 'positioning',
    difficulty: 'beginner',
    isPremium: false,
    thumbnail: '/images/prompts/framework-namer.png',
    prompt: `## Framework Naming Workshop

I need help naming my framework using the DRIVE formula.

FRAMEWORK DETAILS:
- What it does: [Primary outcome/purpose]
- How it works: [Unique method or approach]
- Who it's for: [Target audience]
- Core components: [List main elements]
- Unique insight: [What makes it different]

NAMING REQUIREMENTS:
Create 10 potential names that score high on:
- Descriptive: Hints at what it does
- Recognizable: Uses familiar words
- Imaginable: Creates mental pictures
- Viral: Fun to say and share
- Emotional: Connects to desires

For each name, provide:
1. The name
2. Which DRIVE elements it nails (and why)
3. Potential concerns
4. Similar successful framework names it echoes

Avoid acronyms, jargon, and generic terms. Make them memorable and shareable.

After all 10, recommend your top 3 with detailed reasoning.`,
    whatToLookFor: [
      'Names that score high on multiple DRIVE criteria',
      'Options that create mental pictures (Imaginable)',
      'Names that are fun to say out loud (Viral)',
      'Emotional resonance with your target audience',
    ],
    tags: ['naming', 'frameworks', 'positioning', 'DRIVE formula'],
  },
  {
    id: '3',
    slug: 'blind-spot-detector',
    title: 'The Expert Blind Spot Detector',
    description: 'A scientific method for revealing hidden expertise. Analyzes transcripts across four dimensions: Declarative, Procedural, Conditional, and Metacognitive knowledge.',
    category: 'analysis',
    difficulty: 'advanced',
    isPremium: true,
    thumbnail: '/images/prompts/blind-spot-detector.png',
    prompt: `ROLE: You are a Cognitive Pattern Analyst specializing in detecting the tacit knowledge that experts cannot consciously access. You reveal unconscious expertise across four validated dimensions of knowledge.

CONTEXT: Cognitive science research shows that experts operate primarily on unconscious competence - using complex knowledge they cannot articulate. This transcript contains hidden patterns, frameworks, and capabilities the expert uses but cannot see.

TASK: Analyze this expert-client transcript to reveal blind spots through detailed pattern analysis and targeted discovery questions.

---

INPUT: [Paste transcript of expert-client conversation here]

---

YOUR ANALYSIS FRAMEWORK:

## 🧠 BLIND SPOT #1: Your Hidden Knowledge (Declarative)
What unnamed patterns or categories you used but didn't mention:
- [List 3-5 invisible knowledge structures]
- The specialized vocabulary you used unconsciously
- Connections you made that seem "obvious" to you
- Domain-specific patterns you recognized instantly
- Assumptions about what "everyone knows"

## 🤸 BLIND SPOT #2: Your Invisible Skills (Procedural)
The micro-actions you performed but didn't describe:
- [List 5-7 unconscious steps]
- The sequence you followed without stating
- Physical or mental habits you've automated
- Timing patterns in your responses
- Process shortcuts you've developed

## 🎯 BLIND SPOT #3: Your Unspoken Rules (Conditional)
The strategic decisions you made without explaining why:
- [List 3-5 "it depends" moments]
- Context clues you responded to instantly
- Why you chose approach A over B, C, or D
- Environmental factors that shifted your strategy
- Subtle signals that changed your direction

## 💭 BLIND SPOT #4: Your Unknown Thinking (Metacognitive)
The mental models and beliefs driving everything:
- Your underlying framework: [Name it descriptively]
- Core belief shaping your approach: [State it clearly]
- The thinking pattern you used: [Describe the structure]
- How you knew you were "done": [Explain the criteria]
- Problem-framing approach you default to

## 🔍 YOUR COGNITIVE FINGERPRINT™ PREVIEW:
Pattern Uniqueness Score: [1-10, where 10 is highly distinctive]
Most Sophisticated Pattern: [Identify which dimension and why]
Complexity Level: [Novice/Advanced/Expert/Master]
Differentiation Potential: [Low/Medium/High/Exceptional]

## ⚡ THE AWARENESS GAP:
"Based on this transcript, you explicitly described approximately [X]% of your actual expertise. Here's what remained invisible..."

[Provide 3-5 specific examples from the transcript showing unconscious expertise in action]

---

## 🎯 PATTERN REVEALING QUESTIONS

### Question 1: The Instant Assessment
"At [timestamp], you categorized this client's situation in under 30 seconds, choosing pathway [X] over several alternatives. You based this on [specific subtle cues].

**What criteria do you use for this rapid categorization? How would you teach someone to see these patterns as quickly as you do?**

### Question 2: The Choreographed Sequence
"Between [timestamp] and [timestamp], you executed a precise sequence of [number] micro-actions. The order appears critical to success.

**Why this specific sequence? What breaks if the order changes? How did you develop this precise approach?**

### Question 3: The Strategic Pivot
"At [timestamp], you detected something unspoken and completely shifted your approach. The client didn't explicitly mention [issue], yet you responded to it.

**What invisible signals triggered this pivot? How do you read between the lines so accurately?**

### Question 4: The Hidden Framework
"Throughout this conversation, you consistently applied an unnamed framework that could be called '[Descriptive Name]'. It surfaced at [timestamp], [timestamp], and [timestamp].

**If you had to diagram this framework, what would be its core components? What principles guide its application?**

### Question 5: The Early Prediction
"By [timestamp] - very early in the conversation - you had already determined the likely outcome and adjusted your approach accordingly.

**What early indicators revealed the trajectory? How does your 'pattern recognition system' actually work?**

## 💡 YOUR HIDDEN SYSTEM
The most valuable discovery: You have a complete [type] system operating in [X] distinct phases:
1. [Hidden phase one]
2. [Hidden phase two]
3. [Hidden phase three]
[Additional phases as detected]

This represents a sophisticated methodology you've developed through experience but never formally documented.

---

## FOLLOW-UP PROMPTS FOR DEEPER EXTRACTION

After receiving your initial analysis, use these targeted prompts:

**Prompt 1: The Pattern Codifier**
"You identified that I use [specific pattern/framework] unconsciously. Please:
1. Create a memorable name that captures how it works
2. Break it down into teachable steps with clear criteria
3. Identify 3-5 other moments in the transcript where I applied it
4. Explain what makes this approach unique compared to conventional methods
5. Suggest how to diagram or visualize this pattern"

**Prompt 2: The Differentiation Analyzer**
"Based on the patterns you found, please analyze:
1. Which patterns are genuinely unique to my approach
2. Which are industry-standard but with my personal modifications
3. What combination of patterns creates my distinctive method
4. Which elements would be hardest for others to replicate
5. What I should emphasize to stand out in my field"

**Prompt 3: The Framework Builder**
"Take the [specific pattern] you discovered and develop:
1. A complete step-by-step methodology
2. Decision criteria for each step
3. Common variations and when to use them
4. Warning signs of incorrect application
5. A training outline for teaching others"`,
    whatToLookFor: [
      'Four-dimensional analysis: Declarative, Procedural, Conditional, Metacognitive',
      'Pattern Uniqueness Score and Cognitive Fingerprint preview',
      'Specific timestamp-based questions that reveal hidden expertise',
      'The Awareness Gap percentage showing how much remained invisible',
      'Follow-up prompts for deeper extraction of specific patterns',
    ],
    relatedArticle: {
      title: 'Why You Can\'t See Your Own Expertise',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['blind spots', 'tacit knowledge', 'four dimensions', 'cognitive fingerprint', 'pattern analysis'],
  },
  {
    id: '4',
    slug: 'pricing-justification',
    title: 'Pricing Justification Builder',
    description: 'Build an airtight case for your premium pricing using your actual patterns and frameworks.',
    category: 'positioning',
    difficulty: 'intermediate',
    isPremium: true,
    thumbnail: '/images/prompts/pricing-justification.png',
    prompt: `I need to justify my pricing to prospects (and myself). Help me build an airtight case based on my actual expertise.

Here's what I know about my work:
- My frameworks/methodologies: [LIST THEM]
- Results I've gotten for clients: [EXAMPLES]
- What makes my approach different: [YOUR DIFFERENTIATORS]
- My current pricing: [PRICE]
- What I want to charge: [NEW PRICE]

Create a pricing justification that:
1. Connects my specific frameworks to specific outcomes
2. Quantifies the value where possible
3. Addresses the "why you vs. cheaper alternatives" objection
4. Gives me language I can actually use with prospects

Make it sound like me, not like a sales script.`,
    whatToLookFor: [
      'Justifications that feel authentic, not salesy',
      'Connections between your process and outcomes you hadn\'t made',
      'Language that addresses objections before they arise',
    ],
    tags: ['pricing', 'positioning', 'sales'],
  },
  {
    id: '5',
    slug: 'content-from-conversation',
    title: 'Transcript-to-Content Extractor',
    description: 'Turn a single conversation into multiple content pieces that sound like you, not like "content." Three phases: voice analysis, strategy, then creation.',
    category: 'content',
    difficulty: 'beginner',
    isPremium: false,
    thumbnail: '/images/prompts/content-from-conversation.png',
    prompt: `# Transcript-to-Content Extractor

Turn a single conversation transcript into multiple pieces of content that sound like you, not like "content."

## How This Works

**Phase 1:** I analyze your transcript for voice patterns and standout insights
**Phase 2:** You pick which insights to develop
**Phase 3:** I create content pieces that preserve how you actually talk

Each phase delivers something useful. You can stop anywhere.

---

## To Start

Paste your transcript and tell me:

1. **What was the context?** (client call, podcast, workshop, casual conversation)
2. **Who were you talking to?** (their expertise level helps me understand what you emphasized)
3. **Any insights you already know hit well?** (optional, but useful)

---

## Phase 1: Voice + Insight Analysis

### Your Voice Signature

Before I write anything, I'll identify your patterns:

**Language markers:**
- Your actual phrasing (not cleaned-up versions)
- Sentence rhythm (do you build long and then punch short?)
- Words you reach for repeatedly
- How you transition between ideas

**Energy patterns:**
- Where you got excited or emphatic
- Where you slowed down for emphasis
- Your natural analogies and metaphors
- How you explain complex things simply

### Insight Inventory

I'll surface what's actually in the transcript:

| Insight | Type | Content Potential |
|---------|------|-------------------|
| [Quote/paraphrase] | Framework / Story / Observation / Contrarian take | High / Medium / Needs development |

**Framework candidates:** Repeatable processes or mental models you described
**Story candidates:** Specific moments with tension and resolution
**Observation candidates:** Pattern-recognition moments ("Here's what I notice...")
**Contrarian candidates:** Where you pushed back on conventional wisdom

---

**After Phase 1, I'll ask:**

Which insights do you want to develop? You might:
- Pick 2-3 strong ones
- Ask me to dig deeper on a specific insight
- Tell me one felt bigger than I captured

---

## Phase 2: Content Strategy

For each insight you select, I'll recommend:

**Best format:** Why this insight works as [LinkedIn post / newsletter hook / tweet thread / standalone idea]

**Angle options:**
- Direct teaching: "Here's how to..."
- Story-first: Start with the moment, extract the lesson
- Observation: "I've noticed that..."
- Challenge: "The common advice says X. But..."

**Voice-preservation notes:** Specific phrases or rhythms from your transcript I'll carry through

---

**Your decision point:**

- Approve the strategy and I'll draft
- Adjust formats or angles
- Add context I should weave in

---

## Phase 3: Content Creation

### What I'll Deliver

**LinkedIn Posts** (only as many as the transcript supports)
- Hook that sounds like you, not like "content marketing"
- Your actual examples, not genericized versions
- Ending that matches your natural close (question? statement? invitation?)

**Newsletter Hook** (if there's a bigger idea worth 800+ words)
- Opening 150 words that could stand alone or lead somewhere
- Clear promise of what the full piece would deliver

**Tweet-Sized Insights** (only genuine standalone thoughts)
- Ideas that work in isolation, not artificially compressed
- Your voice, not Twitter-optimized voice

**Framework Summary** (only if a framework actually exists)
- Named only if the name adds clarity
- Structure that matches how you actually explained it
- Evidence from the transcript, not invented examples

---

## Quality Filters I'll Apply

**Voice authenticity:**
- [ ] Uses your actual phrasing, not polished versions
- [ ] Rhythm matches your natural speech patterns
- [ ] Analogies and examples are yours, not substitutes

**Insight integrity:**
- [ ] Claims nothing beyond what you said
- [ ] Preserves nuance and caveats you included
- [ ] Doesn't artificially inflate the insight

**Platform appropriateness:**
- [ ] Formatted for how people actually read on each platform
- [ ] Length matches the depth of the insight (not padded, not compressed)

---

## What I Won't Do

- Add insights you didn't express
- Clean up your language into "professional" generic
- Create frameworks where you just shared an observation
- Manufacture urgency or artificial stakes
- Use phrases like "Here's the thing" or "Let me be clear" unless you actually said them
- Add em-dashes, "It's not X, it's Y" constructions, or other AI tells

---

## Ready?

Paste your transcript and the context, and I'll start with Phase 1: your voice patterns and what's actually in there.`,
    whatToLookFor: [
      'Voice signature analysis that captures YOUR patterns, not generic "voice"',
      'Insight inventory that surfaces things you didn\'t consciously notice',
      'Content that sounds like you said it, not "wrote content"',
      'Frameworks only where they actually exist in your thinking',
    ],
    tags: ['content', 'repurposing', 'transcripts', 'voice', 'LinkedIn'],
  },
  {
    id: '6',
    slug: 'story-mining',
    title: 'Story Mining System',
    description: 'Turn raw transcripts, interviews, or voice notes into engaging emails and newsletter articles. Find the "throwaway gold" buried in conversations.',
    category: 'content',
    difficulty: 'intermediate',
    isPremium: true,
    thumbnail: '/images/prompts/story-mining.png',
    prompt: `You are a Story Archaeologist. Your job: find powerful stories buried in transcripts and transform them into emails or articles that teach through narrative.

<workflow>
STEP 1: SETUP
Ask me:
1. EMAIL or NEWSLETTER? (Email = personal, direct CTA. Newsletter = educational, softer CTA)
2. What do you sell and who's it for?
3. What's their main struggle?

Then I'll paste my transcript.

STEP 2: STORY EXCAVATION
Find ALL stories in the transcript. Pay special attention to:

STORY SIGNALS:
- Specific moments: "Last Tuesday..." "When I was 26..."
- Transformations: "That's when I realized..."
- Failures: "I completely screwed up..."
- Throwaway gold: "Oh, that reminds me..." or "Funny thing happened..."

For each story, identify:
- 2-sentence summary
- The emotional arc (struggle→success, failure→lesson, confusion→clarity)
- What lesson this could teach
- What's specific/unique about it (not generic)

PRIORITIZE stories that are:
- Specific (named people, exact places, real numbers)
- Surprising (unexpected turn)
- Vulnerable (something at stake, not just a win)

SKIP stories that are:
- Generic (could be anyone's story)
- Pure brags (no struggle or learning)
- Incomplete (missing the payoff)

Present top 5 stories like this:

STORY #1: [Catchy title]
Summary: [2 sentences]
Arc: [Type]
Unique element: [What makes this NOT generic]
Could teach: [2-3 lesson angles]
</workflow>

<calibration>
EXCELLENT story extraction:
"The $2.3M Accidental Discovery" — Client was about to fire their marketing agency when Jay noticed they'd never asked customers WHY they bought. One afternoon of phone calls revealed a positioning opportunity. Agency kept their job, client found $2.3M in hidden revenue.
→ Specific ($2.3M, "one afternoon"), surprising (almost fired), vulnerable (client was failing), clear turn (the phone calls)

WEAK story extraction:
"The Importance of Customer Research" — A client learned that talking to customers helps you understand them better and make more money.
→ Generic (could be anyone), no specifics, no vulnerability, lesson stated not shown
</calibration>

STEP 3: SELECTION & ENHANCEMENT
After I pick a story, ask me:
1. Which lesson angle? (Give me options based on the story)
2. What's the CTA? (Book call, buy product, download resource, etc.)
3. Quick sensory details (2-3 questions specific to THIS story):
   - "What did you see/hear in that moment?"
   - "What were the exact words said?"
   - "What would have happened if [alternative]?"

STEP 4: GENERATE CONTENT

<email_structure>
If EMAIL:
- Subject line (3 options, curiosity-driven)
- Open mid-scene or with confession (never "I hope this finds you well")
- Three beats: Setup → Unexpected turn → Insight
- Lesson woven into story (not added after)
- Natural bridge to CTA
- P.S. with callback or secondary hook

Formula:
Hook (mid-action) → Story with sensory details → The turn → Resolution → Universal truth → Permission/empowerment → Natural CTA → P.S.
</email_structure>

<article_structure>
If NEWSLETTER:
- Headline (3 options)
- Hook (surprising statement or question)
- Expanded story with more context
- 2-3 insight sections with subheads
- Practical application
- Soft CTA woven in
- Conclusion callbacks to opening
</article_structure>

<voice_rules>
- Match the speaker's actual phrases from transcript
- Vary paragraph length (1 line, then 3, then 2)
- Use fragments for emphasis
- Add "bridge" phrases: "Here's the thing..." "Turns out..."
- Include at least one physical/sensory detail
- Use specific over generic (lime green vs green)
</voice_rules>

<quality_check>
Before delivering, verify:
[ ] Opens mid-scene or with intrigue
[ ] Has 3+ specific details (names, numbers, places)
[ ] Clear three-beat structure
[ ] Shows vulnerability (not just success)
[ ] Lesson emerges from story naturally
[ ] CTA flows from insight
[ ] Sounds like the actual speaker
</quality_check>

Begin by asking the setup questions.`,
    whatToLookFor: [
      'Story opens mid-scene — not "I want to tell you about..."',
      'Specific details — names, places, numbers, not vague generalities',
      'Clear emotional turn — the moment something shifted',
      'Lesson emerges from story naturally — not tacked on after',
      'CTA feels natural — connects to the insight, not forced',
    ],
    tags: ['content', 'storytelling', 'emails', 'newsletters', 'transcripts'],
  },
  {
    id: '7',
    slug: 'problem-solution-extractor',
    title: 'The Problem-Solution Extractor',
    description: 'Surface the hidden problems you solve that create exponential client value. Every conversation contains 5-10 problems, but most consultants only notice 2-3.',
    category: 'extraction',
    difficulty: 'beginner',
    isPremium: false,
    thumbnail: '/images/prompts/problem-solution-extractor.png',
    prompt: `## ROLE

You are a pattern recognition specialist who extracts valuable problem-solution pairs from client conversations. Your job is to surface ALL problems discussed (both obvious and hidden) and map them to the consultant's solutions.

## CONTEXT

Every client conversation contains 5-10 problems, but most consultants only consciously notice 2-3. The real expertise lies in catching subtle problems and understanding how you uniquely solve them. This creates the foundation for frameworks worth thousands.

## INPUT REQUIRED

A transcript or detailed notes from a client conversation where you helped solve problems. The more natural and unedited, the better.

## EXTRACTION PROCESS

### Step 1: Surface-Level Problem Scan

Identify every problem explicitly stated:

- Direct complaints ("We're struggling with...")
- Stated challenges ("The issue is...")
- Expressed frustrations ("What's hard is...")
- Questions that reveal problems ("How do we fix...")

### Step 2: Hidden Problem Detection

Look deeper for problems beneath the surface:

- Problems hidden in stories or examples
- Issues they mention then quickly move past
- Problems disguised as "normal" situations
- Challenges revealed through emotional language
- What they're trying to avoid (not just achieve)
- Problems within problems (the real issue behind the stated issue)

### Step 3: Solution Mapping

For each problem found:

- What solution did you provide (if any)?
- How did you diagnose or approach it?
- What made you choose THAT solution?
- Which problems did you prioritize and why?

### Step 4: Language Extraction

Capture the EXACT words used:

- How the client described each problem
- Specific phrases that revealed pain points
- Emotional words connected to problems
- Your words when presenting solutions

### Step 5: Diagnostic Pattern (Optional but Valuable)

Notice HOW you identified each problem:

- What tipped you off?
- What questions revealed it?
- How did you know it was important?
- What patterns do you see in your diagnostic approach?

## OUTPUT FORMAT

### Problem-Solution Map

**Surface Problem #1**: [Exact client words]

- **Hidden Layer**: [What's really going on]
- **Your Solution**: [What you recommended]
- **Why This Solution**: [Your reasoning - 1 sentence]
- **Client Language**: "[Exact quote showing pain]"

[Continue for all problems found...]

### Diagnostic Patterns Noticed

- How you consistently identify problems: [Pattern]
- Questions that reveal hidden issues: [Your go-to questions]
- What you notice that others might miss: [Unique observation]

### High-Value Discoveries

1. **Most Surprising Problem Found**: [The one they didn't know they had]
2. **Your Unique Solution Approach**: [What you do differently]
3. **Framework Seed**: [One pattern worth developing further]

### Exponential Value Combinations

Look for problems that compound when solved together:

**Power Combination**: If you solved [Problem A] + [Problem B] + [Problem C] together...

- **Exponential Result**: [What breakthrough this creates]
- **Why These Work Together**: [The connection between them]
- **Potential Package**: This could become your "[Name] Method" for [specific outcome]

## IMPORTANT RULES

- **No Made-Up Money Claims**: Only mention monetary results if explicitly discussed in the conversation
- **Stay Factual**: Extract what actually happened, not what could have happened
- **Use Their Words**: When noting value or results, use the client's exact language

## REMEMBER

The goal is simple: Find ALL the problems (obvious and hidden) and map them to solutions. Your unique value isn't in the solutions themselves - it's in:

- Which problems you notice
- How you diagnose them
- The order you address them
- Your specific approach to solving them

---

*Input your conversation and let's discover the hidden problems you're naturally solving.*`,
    whatToLookFor: [
      'Finds 2-3x more problems than initially obvious',
      'Reveals problems the client didn\'t consciously know they had',
      'Shows clear pattern in how you diagnose',
      'Captures emotional/painful language',
      'Identifies your unique solution approach',
    ],
    tags: ['extraction', 'problems', 'solutions', 'value', 'frameworks'],
  },
];

export const workflows: Workflow[] = [
  {
    id: 'w1',
    slug: 'authority-architecture-pack',
    title: 'The Authority Architecture Pack™',
    description: 'Transform your invisible expertise into magnetic authority positioning. A 3-step pipeline that creates complete authority positioning from a single client conversation.',
    category: 'positioning',
    isPremium: true,
    thumbnail: '/images/prompts/authority-architecture-pack.png',
    file: '/prompts/workflows/authority-architecture-pack.md',
    steps: [
      { stepNumber: 1, title: 'The Signature Pattern Extractor' },
      { stepNumber: 2, title: 'The Authority Story Architect' },
      { stepNumber: 3, title: 'The Magnetic Authority Positioner' },
    ],
    estimatedTime: '90 min',
    tags: ['authority', 'positioning', 'storytelling', 'cognitive fingerprint'],
  },
  {
    id: 'w2',
    slug: 'breakthrough-pattern-pack',
    title: 'The Breakthrough Pattern Pack',
    description: 'Mine your most transformative client moments for repeatable innovation frameworks. Extract the hidden choreography behind your "aha moments."',
    category: 'extraction',
    isPremium: true,
    thumbnail: '/images/prompts/breakthrough-pattern-pack.png',
    file: '/prompts/workflows/breakthrough-pattern-pack.md',
    steps: [
      { stepNumber: 1, title: 'The Breakthrough Excavator' },
      { stepNumber: 2, title: 'The Pattern Choreographer' },
      { stepNumber: 3, title: 'The Innovation Packager' },
    ],
    estimatedTime: '75 min',
    tags: ['breakthroughs', 'innovation', 'transformation', 'patterns'],
  },
  {
    id: 'w3',
    slug: 'content-engine-pack',
    title: 'The Content Engine Pack',
    description: 'Transform your expertise into an endless stream of thought leadership. Every client conversation contains 10+ pieces of hidden content waiting to be extracted.',
    category: 'content',
    isPremium: true,
    thumbnail: '/images/prompts/content-engine-pack.png',
    file: '/prompts/workflows/content-engine-pack.md',
    steps: [
      { stepNumber: 1, title: 'The Content Excavator' },
      { stepNumber: 2, title: 'The Content Multiplier' },
      { stepNumber: 3, title: 'The Content Calendar Builder' },
    ],
    estimatedTime: '60 min',
    tags: ['content', 'thought leadership', 'marketing', 'repurposing'],
  },
  {
    id: 'w4',
    slug: 'decision-architecture-pack',
    title: 'The Decision Architecture Pack',
    description: 'Extract your invisible if-then rules that guide complex client situations. Transform "it depends" into teachable decision frameworks.',
    category: 'analysis',
    isPremium: true,
    thumbnail: '/images/prompts/decision-architecture-pack.png',
    file: '/prompts/workflows/decision-architecture-pack.md',
    steps: [
      { stepNumber: 1, title: 'The Decision Excavator' },
      { stepNumber: 2, title: 'The Logic Architect' },
      { stepNumber: 3, title: 'The Decision Framework Builder' },
    ],
    estimatedTime: '75 min',
    tags: ['decisions', 'frameworks', 'if-then rules', 'strategic thinking'],
  },
  {
    id: 'w5',
    slug: 'resistance-alchemist-pack',
    title: 'The Resistance Alchemist Pack',
    description: 'Transform what you avoid or resist into your most differentiated frameworks. Your professional shadow becomes your competitive edge.',
    category: 'positioning',
    isPremium: true,
    thumbnail: '/images/prompts/resistance-alchemist-pack.png',
    file: '/prompts/workflows/resistance-alchemist-pack.md',
    steps: [
      { stepNumber: 1, title: 'The Resistance Excavator' },
      { stepNumber: 2, title: 'The Alchemical Transformer' },
      { stepNumber: 3, title: 'The Contrarian Positioner' },
    ],
    estimatedTime: '60 min',
    tags: ['resistance', 'differentiation', 'contrarian', 'shadow work'],
  },
  {
    id: 'w6',
    slug: 'signature-method-pack',
    title: 'The Signature Method Pack™',
    description: 'Make your unconscious methodology visible and ownable. Extract your signature approach from actual client conversations and package it as your proprietary system.',
    category: 'extraction',
    isPremium: true,
    thumbnail: '/images/prompts/signature-method-pack.png',
    file: '/prompts/workflows/signature-method-pack.md',
    steps: [
      { stepNumber: 1, title: 'The Pattern Mining Prompt' },
      { stepNumber: 2, title: 'The Method Architecture Builder' },
      { stepNumber: 3, title: 'The Naming Laboratory' },
      { stepNumber: 4, title: 'The Method Validator' },
      { stepNumber: 5, title: 'The Signature Method Document' },
    ],
    estimatedTime: '90 min',
    tags: ['methodology', 'signature method', 'packaging', 'proprietary system'],
  },
];

export const categories = [
  { id: 'extraction', label: 'Extraction', description: 'Pull patterns from your content' },
  { id: 'positioning', label: 'Positioning', description: 'Clarify and communicate your value' },
  { id: 'content', label: 'Content', description: 'Create from your expertise' },
  { id: 'analysis', label: 'Analysis', description: 'Understand your patterns deeper' },
  { id: 'workflow', label: 'Workflows', description: 'Multi-step processes' },
];

export const getPromptBySlug = (slug: string): Prompt | undefined => {
  return prompts.find(p => p.slug === slug);
};

export const getWorkflowBySlug = (slug: string): Workflow | undefined => {
  return workflows.find(w => w.slug === slug);
};

export const getFreePrompts = (): Prompt[] => {
  return prompts.filter(p => !p.isPremium);
};

export const getPremiumPrompts = (): Prompt[] => {
  return prompts.filter(p => p.isPremium);
};

export const getPromptsByCategory = (category: string): Prompt[] => {
  return prompts.filter(p => p.category === category);
};


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

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string; // What this step does (1-2 sentences)
  instructions: string[]; // How to use this step (bullet points)
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
  steps: WorkflowStep[];
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
  {
    id: '8',
    slug: 'stadium-sign',
    title: 'Find Your Stadium Sign',
    description: 'Extract the 3-5 word philosophy hiding in how you actually work. Not a tagline. Not a brand statement. The thing that\'s true about how you operate, compressed to stadium-sign size.',
    category: 'extraction',
    difficulty: 'intermediate',
    isPremium: true,
    thumbnail: '/images/prompts/stadium-signs.png',
    prompt: `# Find Your Stadium Sign

You help people find the 3-5 word philosophy hiding in how they actually work. Not a tagline. Not a brand statement. The thing that's true about how they operate, compressed to stadium-sign size.

## What You Need

I'm sharing a transcript of me working with a client (or coaching, or consulting, or explaining my approach). This isn't scripted. That's the point. The patterns I can't see are the ones I stopped noticing.

**My name in the transcript is:** [ENTER YOUR NAME]

This matters. You're looking for MY patterns, not my client's. In a coaching or consulting call, there are two people with two different sets of patterns. Focus only on the person named above.

## How This Works

This runs in two parts. You can stop after Part 1.

**Part 1: Find the Sign**
You'll surface patterns I don't see, find the belief underneath, and compress it to 3-5 words.

**Part 2: Build the Talk (Optional)**
If I want to go deeper, you'll expand that sign into a 10-minute TED-style philosophy.

---

## What Good Looks Like

Before analyzing, understand the difference between excellent and weak extraction:

### Pattern Identification

**EXCELLENT Pattern Extraction:**
From a transcript where a coach kept asking variations of "What would make that impossible to ignore?" across different client situations:

*Pattern identified:* "Forces specificity through impossibility framing — uses hypothetical extremes to break clients out of vague thinking"

This is excellent because it captures:
- The MECHANISM (impossibility framing)
- The EFFECT (forces specificity)
- The PURPOSE (breaks vague thinking)
- Not just the surface behavior (asks questions)

**WEAK Pattern Extraction:**
*Pattern identified:* "Asks good follow-up questions"

This is weak because:
- Describes a general skill, not what makes THIS person distinctive
- Could apply to any competent coach
- Misses the specific mechanism that makes their approach unique

### Sign Quality

**EXCELLENT Sign:**
"Specificity creates credibility"
- 3 words
- Captures entire operating philosophy
- Arguable (someone could believe the opposite)
- Buildable (a whole talk could expand from this)
- Distinctive (not generic advice)

**WEAK Sign:**
"Ask better questions"
- Generic advice, not a philosophy
- Not arguable (who would disagree?)
- Could apply to anyone in any field
- No distinctive worldview embedded

### The Compression Test

A sign should feel like a belief that explains behavior, not a description of the behavior itself.

Wrong direction: "Uses strategic questions" (describes what they do)
Right direction: "Clarity precedes strategy" (the belief driving what they do)

---

## Part 1: Find My Sign

### Step 1: Speaker Identification

First, identify who's who in the transcript.

**If clear speaker labels exist:**
- Confirm you've found me (the name I gave above)
- Note who I'm talking to
- Proceed to analysis

**If speaker labels are unclear or missing:**
- Quote 2-3 distinctive lines you believe are mine
- Ask me to confirm before proceeding
- Do not guess and proceed

**If 3+ speakers are present:**
- List all speakers you can identify
- Ask which one to analyze
- Do not analyze multiple people simultaneously

**If transcript is under 1,000 words:**
- Note that patterns will be preliminary
- Suggest adding more material for stronger extraction
- Proceed with appropriate confidence caveats

### Step 2: Four-Lens Analysis

Analyze my transcript through these four lenses:

#### Lens 1: The Patterns
Look for what I do repeatedly without announcing it:
- Questions I keep asking (even when I don't realize I'm asking the same thing)
- What I notice that the other person doesn't
- Where I push back or redirect
- Sequences I follow without naming them
- Metaphors or frames I return to

For each pattern, identify the MECHANISM (how it works) not just the BEHAVIOR (what it looks like).

#### Lens 2: The Belief Underneath
Find the operating assumptions driving my approach:
- What do I seem to believe that most people in my field don't?
- What "default" way of doing things have I clearly abandoned?
- What am I trying to get them to see that they can't see yet?
- What would I bet money on that others wouldn't?

#### Lens 3: The Tension
Identify the gap I'm actually working in:
- What problem am I really solving (not the surface problem)?
- What's the difference between how people think this works and how it actually works?
- What uncomfortable truth does my approach reveal?
- What do I make look easy that's actually hard (or vice versa)?

#### Lens 4: The Compression
Take everything from Lenses 1-3 and compress it.

A great sign passes ALL of these tests:

1. **Distinctive:** Could NOT describe most people in this field
2. **Arguable:** Someone could reasonably disagree with it
3. **Buildable:** A 10-minute talk could expand from it
4. **True:** Accurately captures the pattern evidence from Lenses 1-3
5. **Compressed:** 3-5 words, no filler

Signs that fail the distinctive test get cut. Generic observations aren't signs — they're noise.

Generate 5-7 candidates. Rank by how much they capture what makes my approach MINE, not what makes it good.

---

### Step 3: Confidence Check

Before delivering output, assess:

**Pattern Strength:** [Strong / Moderate / Weak]
- Strong: Clear, repeated patterns with multiple examples
- Moderate: Patterns visible but fewer examples or some ambiguity
- Weak: Patterns unclear, inconsistent, or based on limited evidence

**Transcript Quality:** [Excellent / Sufficient / Marginal]
- Excellent: Multiple contexts, natural conversation, clear speaker distinction
- Sufficient: Enough material for meaningful extraction
- Marginal: Short, single context, or unclear speakers

**Key Uncertainty:** What would make this analysis more confident?

If Pattern Strength is "Weak" OR Transcript Quality is "Marginal," explicitly flag this and explain what limited the analysis. Do not present weak extractions with false confidence.

---

## Output for Part 1

**Speaker Check**
Analyzing: [Your name] (the expert)
Speaking with: [Client/other person name or description]
Transcript length: [approximate word count]

**Extraction Confidence**
Pattern Strength: [Strong/Moderate/Weak]
Transcript Quality: [Excellent/Sufficient/Marginal]
Key Uncertainty: [What would strengthen this analysis]

**What I Found**

**Patterns you're running:**
[List 3-4 patterns with specific evidence from transcript]
[For each: Name the pattern, show the mechanism, cite specific moments]

**The belief underneath:**
[One paragraph on the operating philosophy driving the approach]
[This should feel like something you'd argue for, not just describe]

**The tension you're working in:**
[The gap between how people think it works and how it actually works]
[What uncomfortable truth does your approach reveal?]

**Your Sign Candidates:**

1. [Sign] — [Why this captures your distinctive approach, not just good practice]
2. [Sign] — [Why this one]
3. [Sign] — [Why this one]
4. [Sign] — [Why this one]
5. [Sign] — [Why this one]

**Signs I considered but cut:**
[1-2 signs that failed the distinctive/arguable test, with brief explanation]

**My recommendation:** [Sign]
[2-3 sentences on why this one captures the core of what makes your approach yours]

---

That's Part 1. You have your sign.

If you want to build it into a talk, say "expand it" and I'll run Part 2.

---

## Part 2: Build the Talk

Take the sign and expand it into a 10-minute TED-style talk.

### Structure

**Opening (60 seconds)**
- A question that creates tension
- Make the audience feel the gap between what they assume and what's actually true
- Don't announce what you're going to talk about — make them feel the problem first

**The "Most People Think" Move (90 seconds)**
- Name the default belief
- Show why it feels reasonable
- Reveal the crack in it
- Make the audience recognize themselves in the wrong assumption

**One Story (3 minutes)**
- A single concrete example that proves the sign
- Not a case study. A moment. A conversation. A realization.
- The more specific, the more universal
- Include the detail that makes it feel real, not the details that make it sound impressive

**The Philosophy (3 minutes)**
- Unpack what the sign actually means
- Connect it to how you work
- Show why this matters now
- This is where the sign becomes a lens they can use

**The Call to Consciousness (90 seconds)**
- What should they question?
- What should they notice?
- What default should they examine?
- Give them something to DO with what they've learned

**The Close (60 seconds)**
- Return to the opening question
- Land the sign one more time
- Leave them with something they'll remember
- Don't summarize — resonate

### Output for Part 2

Deliver the full talk as a script I could read or adapt. Keep it conversational. No corporate language. Write it like I'd actually say it.

The talk should sound like a person thinking out loud, not a presentation being delivered.

---

## Start Here

Paste your transcript below. I'll find your sign.`,
    whatToLookFor: [
      'Sign candidates that pass ALL five tests: Distinctive, Arguable, Buildable, True, Compressed',
      'Pattern extraction that shows MECHANISM, not just behavior',
      'The belief underneath — what you\'d argue for, not just describe',
      'Signs that feel obvious in retrospect, like something you\'ve been circling for years',
      'Confidence assessment — strong patterns need multiple examples across contexts',
    ],
    relatedArticle: {
      title: 'What\'s Your Sign? The Philosophy You Already Have',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['extraction', 'philosophy', 'TED talk', 'stadium sign', 'patterns', 'positioning'],
  },
  {
    id: '9',
    slug: 'uncle-test',
    title: 'The Uncle Test',
    description: 'See what people actually see when they look at your LinkedIn profile—and what they\'re missing entirely. Four parts that reveal your invisibility gap in five minutes.',
    category: 'analysis',
    difficulty: 'beginner',
    isPremium: false,
    thumbnail: '/images/prompts/uncle-test.png',
    prompt: `# THE UNCLE TEST
## Make Your Invisible Expertise Visible

You're about to help me see what others see when they look at my professional profile—and more importantly, what they DON'T see.

Here's my professional information:
[PASTE YOUR LINKEDIN PDF, ABOUT SECTION, OR BIO HERE]

---

Run The Uncle Test using this 4-part framework:

## PART 1: THE UNCLE VERSION
**Purpose:** See how a confident non-expert would oversimplify what you do. This reveals what's VISIBLE about your expertise.

Create the version your uncle would confidently explain at Thanksgiving after reading your profile for 2 minutes. Make it:
- Oversimplified
- Missing all nuance
- Confidently stated
- The kind of thing that would make you cringe

Then explain: What's actually WRONG about this version? What critical expertise does it completely miss?

---

## PART 2: WHAT UNCLE MISSED
**Purpose:** Identify the invisible expertise hiding in your work—the 90% that's unconscious and never makes it into your profile.

Analyze my profile for INVISIBLE expertise signals:
- Pattern recognition I probably use but don't mention
- Judgment calls that require years of experience
- Things I "just know" that took thousands of hours to develop
- Edge cases I handle automatically that novices would miss
- The "it depends" knowledge that makes me valuable

Format as: "You probably [do this thing] without realizing most people can't. This comes from [underlying expertise]."

---

## PART 3: THE AUNT TEST
**Purpose:** Translate your expertise into language so clear that someone outside your field could repeat it accurately.

Write 3 sentences about what I do that my aunt (who sells real estate) could:
1. Understand immediately
2. Remember tomorrow
3. Repeat accurately to someone else

Rules:
- No jargon
- No hedging ("it depends," "various factors")
- Specific enough to differentiate me from others in my field

---

## PART 4: THE MEGAPHONE DRAFT
**Purpose:** See what your expertise sounds like with Mount Stupid confidence. You've probably been underselling yourself. This is permission to see what "too confident" looks like—then dial it back to "appropriately confident."

Write a headline/tagline for me that has:
- Zero hedging
- Bold claim energy
- The confidence of someone who read one article about my field

Then write a CALIBRATED version that keeps the confidence but adds credibility. Show me the spectrum from "underselling" (where I probably am) to "overselling" (Mount Stupid) to "right-sized confidence" (the goal).

---

## BEFORE YOU START

If my profile doesn't give you enough to work with, ask me 2-3 quick questions about:
- A recent win or project I'm proud of
- A time a client/colleague said "how did you know that?"
- What frustrates me about how competitors oversimplify my field

Don't guess—ask if you need more.

---

## OUTPUT FORMAT

For each part, give me:
1. The output itself
2. **Why this matters:** One sentence on what this reveals about my visible vs. invisible expertise
3. **What to do with this:** One specific action I can take

End with: "The gap between Part 1 (Uncle Version) and Part 2 (What Uncle Missed) is your INVISIBILITY GAP. That's exactly what's costing you when prospects say 'you all seem pretty similar.'"`,
    whatToLookFor: [
      'The Uncle Version should make you cringe — if it doesn\'t, the AI was too generous',
      'Part 2 should surface expertise you\'ve never articulated before',
      'The Aunt Test sentences should be repeatable by anyone',
      'The Megaphone spectrum shows where you actually sit on the confidence scale',
      'The gap between Part 1 and Part 2 is your invisibility gap — that\'s what\'s costing you',
    ],
    relatedArticle: {
      title: 'The Uncle Test: What People Actually See When They Look At Your Profile',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['LinkedIn', 'positioning', 'profile', 'visibility', 'invisibility gap', 'analysis'],
  },
  {
    id: '10',
    slug: 'three-lenses',
    title: 'The Three Lenses',
    description: 'Turn raw material into uniquely differentiated project ideas. Three lenses surface hidden assumptions, undervalued gems, and context advantages you\'re not leveraging.',
    category: 'extraction',
    difficulty: 'intermediate',
    isPremium: true,
    thumbnail: '/images/prompts/three-lenses.png',
    prompt: `<system_identity>
You are a creative advisor who helps people turn raw material into uniquely differentiated projects. You work in three passes, each applying a distinct lens, then synthesize findings into actionable ideas.

Your approach:
- Direct and specific, never vague or encouraging
- Point to exact moments in the material as evidence
- Surface what's non-obvious, not what's already clear
- Prioritize actionable over interesting
</system_identity>

<input_handling>
## Material Assessment (Do This First)

Before applying any lens, assess what you're working with:

**SUFFICIENT MATERIAL includes:**
- Specific decisions, choices, or actions described
- Context about who/what/why
- At least 200+ words OR clear enough to identify assumptions

**INSUFFICIENT MATERIAL triggers clarification:**
If the material is thin, vague, or context-free, ask 2-3 of these:
- "What were you actually trying to figure out in this conversation?"
- "What's the context I'm missing—who is this for or what prompted it?"
- "What's one thing you thought but didn't say?"

Never force insights from insufficient material. Get what you need first.
</input_handling>

<lens_1_edison>
## LENS 1: EDISON (The Assumption Finder)

Context: Thomas Edison rejected job candidates who salted their soup before tasting it. He didn't want assumption-makers. His whole approach was questioning what everyone else took for granted. When experts said high-resistance filaments were incompatible with parallel circuits, he ignored them and invented practical electric lighting.

**Apply this to the material:**

Ask yourself:
- What is this person assuming without questioning?
- What conventions are baked in that they haven't "tasted" yet?
- What "best practice" are they following by default?
- What would happen if they did the opposite?

**Output:** 2-3 hidden assumptions with specific evidence from the material. For each, briefly note what the opposite approach might look like.

<calibration>
❌ WEAK ASSUMPTION FINDING:
"You're assuming you need to grow your audience first."
(Too general. No evidence from material. Could apply to anyone.)

✅ STRONG ASSUMPTION FINDING:
"In paragraph 3, you mention 'once we hit 10k subscribers, we can monetize.' You're assuming monetization requires scale. Derek Sivers built CD Baby profitable from customer #1. What if you designed for profitability at 100 subscribers instead of waiting for 10k?"
(Points to specific moment. Names the assumption. Provides the opposite with evidence it works.)
</calibration>
</lens_1_edison>

<lens_2_sivers>
## LENS 2: SIVERS (The Obvious-to-You Spotter)

Context: Derek Sivers built CD Baby his own way and was called "quirky" until it succeeded. Then they called it revolutionary. His key insight: "Obvious to you is amazing to others." The things you don't think twice about are often the most fascinating to everyone else. He also identified "the invisible jury"—the imaginary panel we perform for, adding what we think they'd approve of.

**Apply this to the material:**

Ask yourself:
- What's sitting here that the person probably thinks is unremarkable but would fascinate others?
- What throwaway line, tangent, or aside is actually the most interesting part?
- What did they mention casually that deserves to be the main event?
- What did they almost not say because it seemed "too obvious"?

**Output:** 2-3 hidden gems they're undervaluing. Quote or reference specific moments. Explain why each is more interesting than they realize.

<calibration>
❌ WEAK GEM SPOTTING:
"Your unique background could be valuable."
(Vague. No reference to material. Not actionable.)

✅ STRONG GEM SPOTTING:
"You mentioned offhand that you 'just send voice memos to clients instead of formal reports.' You buried this in a tangent about saving time. But think about what that actually is: you've solved the consulting deliverable problem. Most consultants agonize over report formatting. You've made delivery intimate and immediate. That's not a time-saver—that's a positioning statement. 'The consultant who talks to you, not at you.'"
(Quotes the moment. Explains why it's valuable. Reframes it as positioning.)
</calibration>
</lens_2_sivers>

<lens_3_acunzo>
## LENS 3: ACUNZO (The Context Detective)

Context: Jay Acunzo spent years studying people whose work looks crazy from outside but feels logical to them. The difference is always context. Best practices strip out your specific details and replace them with generalized wisdom that worked for someone else, somewhere else. His core message: "Finding best practices isn't the goal. Finding YOUR best practices is."

**Apply this to the material:**

Ask yourself:
- What's unique about THIS person's situation, background, or perspective?
- What would only THEY build given their specific context?
- What combination of experiences, skills, or access do they have that's unusual?
- What "weird" choice would actually be logical if you understood their situation?

**Output:** 2-3 contextual advantages they're not leveraging. Be specific about what makes their situation different and how that changes the right approach.

<calibration>
❌ WEAK CONTEXT DETECTION:
"Your experience in finance gives you credibility."
(Generic. "Experience = credibility" is obvious.)

✅ STRONG CONTEXT DETECTION:
"You spent 8 years at Goldman, then quit to become a yoga teacher, then went back into finance as a coach for burned-out executives. That's not three careers—that's a proprietary pipeline. You're the only person who can speak to Goldman alumni about burnout because you lived it AND got out AND came back. That combination doesn't exist elsewhere. Stop positioning as a 'leadership coach' (commodity) and start positioning as 'the Goldman burnout whisperer' (only you)."
(Names the specific combination. Shows why it's rare. Provides the reframing.)
</calibration>
</lens_3_acunzo>

<synthesis>
## SYNTHESIS: PROJECT IDEAS

After applying all three lenses, generate 2-3 concrete project or asset ideas.

For each idea:

**The Idea:** [Clear, specific description—not vague]

**Jobs to Be Done:**
- Who specifically would use this?
- What job does it do for them?
- What trigger would make them seek it out?

**The Differentiation:**
- Assumption it breaks (Edison)
- "Obvious to you" element it elevates (Sivers)
- Context it leverages (Acunzo)

**The Weird Angle:** [One sentence capturing what makes this memorable]

**First Step:** [Single concrete action to start]

<calibration>
❌ WEAK PROJECT IDEA:
"Create a newsletter about your expertise."
(Generic. No differentiation. Could apply to anyone.)

✅ STRONG PROJECT IDEA:
"**The Idea:** 'Pre-Mortem Reports'—a paid service where you analyze why a client's planned launch will fail BEFORE they launch it.

**Jobs to Be Done:** Marketing directors 2-4 weeks before major launches. Job: get an outside perspective that isn't captured by internal optimism bias. Trigger: the moment they realize their team keeps saying 'this is great' but something feels off.

**Differentiation:**
- Edison: Breaks the assumption that consultants help with execution (you help with prevention)
- Sivers: Elevates your obsessive 'here's what could go wrong' thinking (the trait that annoys your friends becomes your service)
- Acunzo: Leverages that you've seen 40+ failed launches in your career (pattern recognition no generalist has)

**Weird Angle:** 'The consultant who tells you why you'll fail.'

**First Step:** Write one pre-mortem analysis for a friend's upcoming launch as a sample."
</calibration>
</synthesis>

<verification>
## Before Delivering Your Response

Check each lens output against these questions:

✓ Did I point to SPECIFIC moments in the material (quotes, paragraph references)?
✓ Are my insights non-obvious? (Would the person already know this?)
✓ Is each project idea something ONLY this person could build?
✓ Did I avoid generic advice that could apply to anyone?

If any check fails, revise that section before delivering.
</verification>

<opening>
## How to Begin

Ask the user:

"Upload or paste your raw material—a transcript, draft, brainstorm notes, or voice memo. I'll run it through three lenses to surface what's hidden and give you 2-3 project ideas that only you could build.

What have you got?"
</opening>

<tone>
## Communication Style

- Curious, not clinical
- Direct, not hedging
- Specific, not abstract
- Peer-level, not teacher-student

You're a smart collaborator who sees things they can't see. Not a coach. Not a cheerleader. A second set of eyes with a specific way of looking.
</tone>`,
    whatToLookFor: [
      'Edison lens: Hidden assumptions with specific evidence — not vague generalities',
      'Sivers lens: Throwaway lines that deserve to be the main event',
      'Acunzo lens: Context advantages that make "best practices" wrong for YOU',
      'Project ideas that only YOU could build — not generic advice',
      'Each insight should point to specific moments in your material',
    ],
    relatedArticle: {
      title: 'Build First, Then Think: Why Your Weekend Projects Are Mirrors',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['extraction', 'project ideas', 'differentiation', 'Edison', 'Sivers', 'Acunzo', 'raw material'],
  },
  {
    id: '11',
    slug: 'decision-archaeology',
    title: 'The Decision You Didn\'t Know You Made',
    description: 'Find the invisible forks in the road you navigate without realizing. Every business conversation contains 10-20 decision points you made automatically — this prompt reveals them.',
    category: 'extraction',
    difficulty: 'beginner',
    isPremium: false,
    thumbnail: '/images/prompts/decesion-archeology.png',
    prompt: `You are a decision archaeologist. Your expertise: finding the invisible forks in the road that experts navigate without realizing they made a choice.

Most business conversations contain 10-20 invisible decision points — moments where the expert could have gone a different direction but didn't. These choices happen automatically, below conscious awareness. That's what makes them invisible. That's also what makes them valuable.

<transcript>

[PASTE YOUR TRANSCRIPT HERE]

</transcript>

<task>

Analyze this conversation and identify 5 DECISION POINTS where the speaker made an unconscious choice.

For each decision point, provide:

**THE MOMENT**: Quote the exact words where the decision happened

**PATH CHOSEN**: What they actually did

**PATH NOT TAKEN**: What a typical person would have done instead

**WHY IT MATTERS**: What outcome this choice created

**THE INVISIBLE RULE**: What principle or belief drove this choice (they probably can't articulate this themselves)

</task>

<output_format>

After listing all 5 decision points, conclude with:

**YOUR DECISION DNA**: A 2-3 sentence summary of the underlying decision-making pattern that connects all five choices. This is the meta-pattern — the way you think about decisions that you probably don't realize you have.

</output_format>`,
    whatToLookFor: [
      'Decision points that surprise you — moments you didn\'t realize were choices',
      'The "Path Not Taken" should feel like what most people would do',
      'The Invisible Rules should feel true but never consciously stated',
      'Your Decision DNA should connect all five choices into a meta-pattern',
      'Best transcripts: ones where you got great results but can\'t explain why',
    ],
    relatedArticle: {
      title: 'Invisible Expertise Extraction',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['extraction', 'decisions', 'patterns', 'unconscious competence', 'transcripts'],
  },
  {
    id: '12',
    slug: 'pattern-your-team-cant-copy',
    title: 'The Pattern Your Team Can\'t Copy',
    description: 'Extract the if-then rules you run automatically but can never teach. This is why delegation fails, why "just watch me" doesn\'t work, and why you\'re still the bottleneck.',
    category: 'extraction',
    difficulty: 'intermediate',
    isPremium: false,
    thumbnail: '/images/prompts/pattern-team-cant-copy.png',
    prompt: `You are an expertise decoder specializing in "conditional knowledge" — the if-then rules that experts run automatically but can never seem to teach anyone else.

Here's the problem: Experienced professionals have accumulated hundreds of "when I see X, I do Y" rules. These rules are why they get results. But because the rules fire automatically, they can't explain them. When someone asks "how did you know to do that?" they say "I just knew" or "it felt right."

This is why delegation fails. This is why "just watch me and learn" doesn't work. This is why you're still the bottleneck after all these years.

<transcript>

[PASTE YOUR TRANSCRIPT HERE]

</transcript>

<task>

Extract 7-10 IF-THEN RULES that this expert is running unconsciously.

Look for these pattern types:

- DIAGNOSTIC RULES: "When I see [signal], it means [interpretation]"
- RESPONSE RULES: "When [situation], I always [action]"
- PRIORITY RULES: "When [competing demands], I choose [this] over [that]"
- EXCEPTION RULES: "I normally do X, unless [condition], then Y"
- TIMING RULES: "I wait until [signal] before [action]"

For each rule:

**RULE #[X]**: [Write it as a clear IF-THEN statement]

**Evidence**: [Quote from the transcript showing this rule in action]

**Why They Can't See It**: [Why this has become invisible to them]

**Why Others Fail Without It**: [What goes wrong when someone doesn't have this rule]

</task>

<output_format>

After listing all rules, provide:

**THE DELEGATION KILLER**: Identify the 2-3 rules that are most critical to your results AND most difficult to transfer to someone else. These are why you're the bottleneck.

**THE TRAINING CHEAT SHEET**: Rewrite those 2-3 critical rules as explicit instructions that could actually be taught to someone else.

</output_format>`,
    whatToLookFor: [
      'IF-THEN rules that feel obvious to you but would surprise others',
      'The Delegation Killer — rules that explain why you\'re the bottleneck',
      'Exception Rules are often the most valuable (your edge cases)',
      'The Training Cheat Sheet should feel teachable, not abstract',
      'Run on multiple transcripts to find rules that repeat',
    ],
    relatedArticle: {
      title: 'Invisible Expertise Extraction',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['extraction', 'delegation', 'if-then rules', 'bottleneck', 'training', 'transcripts'],
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
      {
        stepNumber: 1,
        title: 'The Signature Pattern Extractor',
        description: 'Mine your transcript for invisible expertise patterns—the behavioral signatures, decision architecture, and unique approaches that make you irreplaceable.',
        instructions: [
          'Attach or paste a transcript from a successful client engagement',
          'Best results come from conversations where you diagnosed problems, guided breakthroughs, or achieved unexpected results',
          'The AI will analyze your behavior, not just your words—looking for patterns you use unconsciously',
          'Save all outputs for Step 2',
        ],
      },
      {
        stepNumber: 2,
        title: 'The Authority Story Architect',
        description: 'Transform your extracted patterns into a magnetic transformation story and visual framework that demonstrates your unique expertise in action.',
        instructions: [
          'Paste all outputs from Step 1 (Signature Patterns, Cognitive Fingerprint Summary, Unique Mechanism, etc.)',
          'You\'ll receive your story in three lengths: 30-second, 2-minute, and 5-minute versions',
          'The visual framework will be detailed enough to sketch or diagram',
          'Save all outputs for Step 3',
        ],
      },
      {
        stepNumber: 3,
        title: 'The Magnetic Authority Positioner',
        description: 'Synthesize everything into irresistible positioning that attracts perfect clients—including your Only Statement and complete authority messaging suite.',
        instructions: [
          'Paste outputs from both Steps 1 and 2',
          'This step creates your complete positioning: Only Statement, authority bio, differentiation messaging',
          'Review each element and refine language that doesn\'t feel like you',
          'Your Only Statement should feel true but bold—not comfortable',
        ],
      },
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
      {
        stepNumber: 1,
        title: 'The Breakthrough Excavator',
        description: 'Identify and analyze the moments where transformative insights emerged—the hidden choreography that creates paradigm shifts in your clients.',
        instructions: [
          'Gather 3-5 transcripts featuring breakthrough moments or "aha" realizations',
          'Focus on conversations where clients said things like "I never thought of it that way"',
          'Include moments of emotional shift: confusion to clarity, stuck to movement',
          'The prompt analyzes what happened before, during, and after each breakthrough',
        ],
      },
      {
        stepNumber: 2,
        title: 'The Pattern Choreographer',
        description: 'Structure your breakthrough patterns into a repeatable transformation system—turning spontaneous magic into systematic methodology.',
        instructions: [
          'Paste all outputs from Step 1 (Breakthrough Inventory, Trigger Techniques, Success Conditions, etc.)',
          'This step organizes your breakthroughs into categories and creates selection criteria',
          'You\'ll receive trigger technique toolkits and timing guidelines',
          'Focus on patterns that appear across multiple transcripts',
        ],
      },
      {
        stepNumber: 3,
        title: 'The Innovation Packager',
        description: 'Package your breakthrough patterns into teachable innovation frameworks that others can learn and apply.',
        instructions: [
          'Paste the complete output from Step 2',
          'This creates your Breakthrough Pattern Playbook with named frameworks',
          'Review the frameworks for accuracy—does this match how you actually work?',
          'Consider which frameworks could become training programs or workshops',
        ],
      },
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
      {
        stepNumber: 1,
        title: 'The Content Excavator',
        description: 'Mine your conversations for hidden content gold—insights, stories, frameworks, questions, and wisdom you\'re generating but not capturing.',
        instructions: [
          'Paste 3-5 client conversation transcripts showcasing different aspects of your expertise',
          'The prompt extracts 6 types: insights, stories, frameworks, questions, wisdom, and quotable language',
          'Expect 100+ pieces of raw content material from a few transcripts',
          'Save all outputs—this becomes your content library for months',
        ],
      },
      {
        stepNumber: 2,
        title: 'The Content Multiplier',
        description: 'Transform each piece of raw material into multiple content formats—one insight becomes a LinkedIn post, Twitter thread, newsletter section, and more.',
        instructions: [
          'Paste all outputs from Step 1 (Insight Library, Story Bank, Framework Collection, etc.)',
          'Each insight gets transformed into 5+ content pieces across formats',
          'You\'ll receive templates and examples for each content type',
          'Focus on formats that match your preferred platforms',
        ],
      },
      {
        stepNumber: 3,
        title: 'The Content Calendar Builder',
        description: 'Structure your multiplied content into a 90-day content calendar with themes, sequences, and engagement strategies.',
        instructions: [
          'Paste the content inventory from Step 2',
          'This creates a structured 90-day plan with weekly themes',
          'Includes hooks, CTAs, and engagement strategies for each piece',
          'Adjust the calendar to match your actual publishing cadence',
        ],
      },
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
      {
        stepNumber: 1,
        title: 'The Decision Excavator',
        description: 'Unearth the hidden choice points and criteria from your client interactions—every moment where you could have gone multiple directions but chose one.',
        instructions: [
          'Paste 3-5 transcripts featuring strategic decisions, direction changes, or complex navigation',
          'Focus on sessions where you made judgment calls or changed approach mid-engagement',
          'The prompt maps choice points, trigger patterns, and your implicit decision rules',
          'Save all outputs including the Exception Log—when you break your own patterns',
        ],
      },
      {
        stepNumber: 2,
        title: 'The Logic Architect',
        description: 'Structure your discovered patterns into a coherent Decision Architecture—grouping related rules into decision clusters and mapping contextual triggers.',
        instructions: [
          'Paste all outputs from Step 1 (Choice Point Inventory, Decision Rules, Priority Matrix, etc.)',
          'This step synthesizes individual rules into a unified decision system',
          'You\'ll receive a Context Navigation Map showing which approaches fit which situations',
          'Pay attention to the Strategic Pivot Playbook—your documented pivot patterns',
        ],
      },
      {
        stepNumber: 3,
        title: 'The Decision Framework Builder',
        description: 'Transform your architecture into practical tools and frameworks others can use—decision trees, diagnostic tools, and implementation guides.',
        instructions: [
          'Paste the complete Decision Architecture from Step 2',
          'This creates teachable frameworks from your intuitive decision-making',
          'Review the Quick Decision Heuristics—simple rules that capture 80% of your decisions',
          'Consider which frameworks could become client-facing tools or training materials',
        ],
      },
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
      {
        stepNumber: 1,
        title: 'The Resistance Excavator',
        description: 'Uncover patterns in what you avoid, resist, or work around—the unconventional approaches you\'ve developed precisely because you reject the "normal" way.',
        instructions: [
          'Paste 3-5 transcripts where you challenged norms, took unconventional paths, or avoided traditional approaches',
          'Focus on moments of professional disagreement or contrarian positions',
          'Include sessions where you offered creative alternatives to standard methods',
          'The prompt looks for avoidance patterns, workarounds, and philosophical divergences',
        ],
      },
      {
        stepNumber: 2,
        title: 'The Alchemical Transformer',
        description: 'Transform your resistance patterns into differentiated frameworks—converting "I don\'t believe in..." into "I specifically do..." methodology.',
        instructions: [
          'Paste all outputs from Step 1 (Resistance Inventory, Shadow Strengths, Innovation Catalog, etc.)',
          'This step flips constraints into design principles and avoidances into signature methods',
          'You\'ll receive frameworks that celebrate your differentiation rather than hide it',
          'Focus on the Contrarian Framework designs—systems built around what others miss',
        ],
      },
      {
        stepNumber: 3,
        title: 'The Contrarian Positioner',
        description: 'Package your transformed resistance into competitive positioning—building premium value from your philosophical differences.',
        instructions: [
          'Paste outputs from Step 2 (Signature Contrarian Methods, Differentiation Architecture, etc.)',
          'This creates positioning that attracts clients who resonate with your unconventional approach',
          'Review the Value Demonstration Framework—proof structures for your contrarian methods',
          'Your positioning should feel bold and slightly uncomfortable—that\'s the edge',
        ],
      },
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
      {
        stepNumber: 1,
        title: 'The Pattern Mining Prompt',
        description: 'Extract repeated approaches from your client transcripts—diagnostic patterns, approach sequences, decision architecture, and unconscious rules you follow.',
        instructions: [
          'Paste 3-5 client conversation transcripts or detailed session notes',
          'Best results come from successful engagements where you got consistent results',
          'The prompt looks for 6 pattern types: diagnostic, sequence, decision, unique, rules, and results',
          'Save the comprehensive analysis for Step 2—this is your methodology\'s raw material',
        ],
      },
      {
        stepNumber: 2,
        title: 'The Method Architecture Builder',
        description: 'Structure your extracted patterns into a coherent methodology—identifying 3-5 major phases, the flow between them, and what makes your approach unique.',
        instructions: [
          'Paste the pattern analysis from Step 1',
          'This creates your methodology blueprint with phases, components, and success indicators',
          'Pay attention to the Flexibility Mapping—where your method adapts to different contexts',
          'The output should feel like "how you actually work" articulated clearly',
        ],
      },
      {
        stepNumber: 3,
        title: 'The Naming Laboratory',
        description: 'Generate powerful, memorable names for your methodology using transformation-based, mechanism-based, and metaphor-based naming formulas.',
        instructions: [
          'Paste your methodology summary and unique elements from Step 2',
          'You\'ll receive 15 potential names across three categories',
          'Each name includes rationale, memorability factors, and positioning implications',
          'Pick 2-3 finalists and test them with trusted colleagues or clients',
        ],
      },
      {
        stepNumber: 4,
        title: 'The Method Validator',
        description: 'Stress-test your methodology against edge cases, client objections, and competitive alternatives to ensure it\'s robust and defensible.',
        instructions: [
          'Paste your methodology architecture and chosen name',
          'This step challenges your framework with difficult scenarios',
          'You\'ll identify gaps, edge cases, and potential objections before clients do',
          'Refine your methodology based on what the validation reveals',
        ],
      },
      {
        stepNumber: 5,
        title: 'The Signature Method Document',
        description: 'Compile everything into your official Signature Method Document—a complete, polished articulation of your proprietary system.',
        instructions: [
          'Paste all refined outputs from Steps 1-4',
          'This creates your complete methodology documentation',
          'Includes visual framework descriptions, implementation guides, and positioning language',
          'Use this document for your website, proposals, and training materials',
        ],
      },
    ],
    estimatedTime: '90 min',
    tags: ['methodology', 'signature method', 'packaging', 'proprietary system'],
  },
  {
    id: 'w7',
    slug: 'language-mining-method',
    title: 'The Language Mining Method™',
    description: 'Extract customer language from adjacent domains when you don\'t have enough reviews, testimonials, or direct buyer access. Find where your buyers ARE talking—just not using your words.',
    category: 'extraction',
    isPremium: true,
    thumbnail: '/images/prompts/language-mining-method.png',
    file: '/prompts/workflows/language-mining-method.md',
    steps: [
      {
        stepNumber: 1,
        title: 'Adjacent Territory Mapping',
        description: 'Identify where your buyer\'s pain appears under different names—in adjacent communities, related books, and tangential forums.',
        instructions: [
          'Prepare your core problem statement (1-2 sentences)',
          'Define your target buyer with specifics (role, income, experience level)',
          'List any adjacent concepts you\'ve already heard buyers mention',
          'Review AI output and select 3-5 priority sources to mine',
        ],
      },
      {
        stepNumber: 2,
        title: 'Raw Language Mining',
        description: 'Extract verbatim quotes, emotional patterns, metaphors, and questions from the identified adjacent territories.',
        instructions: [
          'Paste the prioritized source list from Phase 1',
          'Let AI extract 30+ quotes across pain, emotion, metaphor, question, and objection categories',
          'Quality check: quotes should feel raw, specific, and emotional—not polished',
          'Push back if quotes feel generic: "Find rawer, more emotional expressions"',
        ],
      },
      {
        stepNumber: 3,
        title: 'Pattern Synthesis',
        description: 'Transform raw data into insights by identifying what surprised you, what confirmed your beliefs, and what\'s missing.',
        instructions: [
          'Paste all quotes from Phase 2 plus your initial hypotheses about this audience',
          'Review the three surprises—do they actually surprise YOU?',
          'Validate the misdiagnosis pattern against your real client experience',
          'Add your own observations that AI missed',
        ],
      },
      {
        stepNumber: 4,
        title: 'Knowledge Asset Creation',
        description: 'Determine what reusable documents to build—Customer Language Bible, Translation Dictionary, Objection Encyclopedia, or application-specific guides.',
        instructions: [
          'Paste synthesis results and state your immediate use case',
          'Select 1-2 "Must Have" assets for immediate need',
          'Choose 1-2 "Should Have" assets for ongoing use',
          'Decide build order based on what solves your problem right now',
        ],
      },
      {
        stepNumber: 5,
        title: 'Immediate Application',
        description: 'Apply the research directly to your specific deliverable—presentation, sales page, content calendar, or email sequence.',
        instructions: [
          'Choose the application template matching your need (Presentation/Sales Page/Content/Email)',
          'Paste relevant findings and context about your deliverable',
          'Review AI draft for voice authenticity and insight integrity',
          'Refine language that doesn\'t sound like you',
        ],
      },
    ],
    estimatedTime: '30 min',
    tags: ['customer language', 'research', 'adjacent domains', 'messaging', 'voice of customer'],
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


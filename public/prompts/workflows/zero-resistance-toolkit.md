# The Zero Resistance Toolkit

*4 AI prompts to make your pitches close, your content land, and your objections dissolve.*

### **Pack Overview**

You've been sabotaging your own influence for years. Every time you say "I developed this framework" or "Let me explain why you should," you trigger the exact response you're trying to prevent.

People nod. Then they ignore you.

These prompts fix that. They're based on influence patterns extracted from Sheryl Sandberg's communication style. She gives the same advice everyone else gives. Hers lands. Every time.

The difference: she's the channel, not the source.

**Perfect for:** Anyone whose advice gets nodded at but ignored, consultants who keep hearing the same objections, or experts whose credentials don't seem to land.

**Required materials:**

* Content to audit (pitch, email, LinkedIn post, bio, or any writing you want to diagnose)
* For the Origin Story Extractor: your area of expertise and willingness to answer interview questions
* For the Objection Dissolver: a specific objection you keep hearing

**Outcome:** Content that lands without resistance, origin stories that establish credibility without bragging, and objection responses that dissolve pushback instead of doubling it.

---

## **The 5-Step Zero Resistance Pipeline**

*Start with Quick Start to test the framework, then use the specialized tools for deeper work*

---

### **Tool #1: The 30-Second Test (Quick Start)**

*Instant diagnosis of any content you paste*

**INPUT REQUIRED:** Any content you want to check:

* Email you're about to send
* LinkedIn post that feels off
* Website copy
* Talking points for a call

**PROMPT:**

```xml
<task>
Show me where this content triggers resistance, then fix the worst parts.
</task>

<my_content>
[PASTE ANYTHING: email, post, bio, pitch, message]
</my_content>

<quick_scan>
Find instances of:
1. Credit I claim that I could attribute to others
2. Expertise before vulnerability
3. Principles instead of scripts (exact words)
4. Instructions instead of permission

Flag the 3 worst sentences.
</quick_scan>

<output_format>
RESISTANCE TRIGGERS FOUND:

1. "[quote]"
   Problem: [which pattern]
   Fix: "[rewrite]"

2. "[quote]"
   Problem: [which pattern]
   Fix: "[rewrite]"

3. "[quote]"
   Problem: [which pattern]
   Fix: "[rewrite]"
</output_format>
```

**OUTPUT REQUIRED:**

1. **3 Resistance Triggers**: The worst sentences with specific fixes
2. **Pattern Identification**: Which of the 4 patterns each trigger falls into

---

### **Tool #2: The Pitch Rewriter**

*Strip resistance triggers from proposals, sales emails, and website copy*

**INPUT REQUIRED:** Your current pitch exactly as written (don't clean it up first):

* Proposal language
* Sales email
* "How I help" section from your website
* Any pitch that got no response

**PROMPT:**

```xml
<task>
Rewrite my pitch to eliminate resistance triggers using the Sandberg Influence Framework.
</task>

<my_pitch>
[PASTE YOUR CURRENT PITCH HERE]
</my_pitch>

<framework_rules>
RULE 1: BE THE CHANNEL, NOT THE SOURCE
- Replace "I developed/discovered/created" → "My mentor taught me" or "A client failure showed me"
- Replace "I'm an expert in" → "I learned the hard way that"

RULE 2: CONFESS FIRST
- Open with a struggle that matches their fear
- Earn the right to advise by showing you needed advice

RULE 3: SCRIPTS OVER PRINCIPLES
- Don't tell them what to think → Tell them what to say
- Give exact words they'll use with their team/board/spouse

RULE 4: PERMISSION OVER INSTRUCTION
- Don't push them toward action → Release them from guilt about wanting it
- End with "You're allowed to..." not "You should..."
</framework_rules>

<calibration_examples>
BEFORE (triggers resistance):
"I help executives unlock their leadership potential through my proprietary methodology developed over 15 years of consulting with Fortune 500 companies."

AFTER (lands clean):
"A CEO I worked with told me something that changed how I think about leadership: 'I don't need more frameworks. I need permission to trust what I already know.' That's what I try to give people now—not answers, but permission to act on what they already see."

---

BEFORE (triggers resistance):
"Our software increases team productivity by 40% using AI-powered workflow optimization."

AFTER (lands clean):
"Our first customer said something I'll never forget: 'I knew we were wasting time. I just couldn't justify fixing it until you showed me the math.' Now when teams ask if they should buy this, I tell them: 'You already know you need it. This just gives you the numbers to say yes.'"

---

WHY THESE WORK:
- Attribution to someone else (CEO, first customer)
- Confession embedded ("changed how I think")
- Script provided ("You already know you need it...")
- Permission granted, not instruction given
</calibration_examples>

<output_format>
1. REWRITTEN PITCH
[Your new pitch using all 4 rules]

2. RESISTANCE TRIGGERS REMOVED
| Original phrase | Why it triggered resistance | Replacement |
|-----------------|---------------------------|-------------|
| [quote from original] | [mechanism] | [new version] |

3. VERIFICATION
- Does the pitch attribute insight to someone other than me? [Y/N]
- Does it open with confession/struggle? [Y/N]
- Does it include exact words the prospect can use? [Y/N]
- Does it end with permission rather than CTA? [Y/N]

If any answer is N, revise before delivering.
</output_format>
```

**OUTPUT REQUIRED:**

1. **Rewritten Pitch**: Your new pitch using all 4 rules
2. **Resistance Triggers Table**: The patterns you'll repeat forever if you don't see them now
3. **Verification Checklist**: Confirms all 4 rules are applied

---

### **Tool #3: The Blind Spot Audit**

*Score your content across four categories of influence failure*

**INPUT REQUIRED:** Any content you want to audit:

* Email that got no reply
* Post that got crickets
* Website copy before it goes live
* Transcript of yourself talking

**PROMPT:**

```xml
<task>
Audit my content for influence blind spots—places I'm unknowingly triggering resistance.
</task>

<my_content>
[PASTE CONTENT, PITCH, EMAIL, OR TRANSCRIPT HERE]
</my_content>

<audit_categories>
1. CREDIT HOARDING
Look for: "I discovered" / "I developed" / "My framework" / "I realized"
These signal: "I'm smarter than you" → triggers reactance

2. EXPERTISE-FIRST FRAMING
Look for: Credentials before vulnerability / Authority before struggle
These signal: "Listen to me because I'm important" → arms cross

3. PRINCIPLE VS SCRIPT RATIO
Look for: "Be more X" / "Focus on Y" / "Think about Z"
These require: Translation before action → most people won't translate

4. INSTRUCTION VS PERMISSION
Look for: "You should" / "You need to" / "Make sure you"
These threaten: Autonomy → automatic pushback
</audit_categories>

<scoring_calibration>
9-10: Almost none of this pattern present
7-8: Occasional instances, minor issue
5-6: Frequent instances, noticeable drag on persuasion
3-4: Pattern dominates, significant resistance likely
1-2: Nearly every sentence triggers this response
</scoring_calibration>

<output_format>
BLIND SPOT SCORES:

| Category | Score | Worst Offender |
|----------|-------|----------------|
| Credit Hoarding | /10 | "[exact quote]" |
| Expertise-First | /10 | "[exact quote]" |
| Principle vs Script | /10 | "[exact quote]" |
| Instruction vs Permission | /10 | "[exact quote]" |

BEFORE/AFTER REWRITES (3 worst):

1. ORIGINAL: "[quote]"
   PROBLEM: [why this triggers resistance]
   REWRITE: "[fixed version]"

2. [repeat]

3. [repeat]

OVERALL RESISTANCE RISK: [Low/Medium/High]
</output_format>
```

**OUTPUT REQUIRED:**

1. **Blind Spot Scores**: 4 categories scored 1-10 with worst offender quotes
2. **Before/After Rewrites**: The 3 worst sentences fixed
3. **Overall Resistance Risk**: Low/Medium/High assessment

---

### **Tool #4: The Origin Story Extractor**

*Pull "who taught me" stories that replace boring credential lists*

**INPUT REQUIRED:**

* Your area of expertise
* Willingness to answer 4 interview questions (the AI will ask them one at a time)

**PROMPT:**

```xml
<task>
Extract origin stories that position me as the channel, not the source. These are "who taught me" stories I can use in bios, sales conversations, and client calls.
</task>

<my_expertise>
[DESCRIBE YOUR AREA OF EXPERTISE]
</my_expertise>

<extraction_questions>
Interview me with these questions ONE AT A TIME. Wait for my answer before asking the next.

1. What's a failure in this area that still makes you wince? Who or what helped you see what went wrong?

2. What's advice you regularly give that you first received from someone else? (Boss, mentor, book, therapist, critic, client?)

3. What belief did you hold strongly that turned out to be wrong? What changed your mind—and who or what triggered the shift?

4. Who would be surprised to learn they shaped how you work? (Could be someone who doesn't know you, or someone who wouldn't expect to have influenced you)
</extraction_questions>

<story_structure>
Each origin story must follow this pattern:

"[PERSON/EXPERIENCE] taught me [INSIGHT] when [SPECIFIC MOMENT].

Before that, I thought [OLD BELIEF].

Now I [NEW BEHAVIOR/BELIEF]."

GOOD EXAMPLE:
"My first client taught me that frameworks don't close deals—permission does. She said, 'I already knew I needed this. I just needed someone to tell me it was okay to spend the money.' Now I end every pitch by telling people what they're allowed to want."

BAD EXAMPLE:
"I developed a client-centric approach after years of refining my methodology."
(Credit hoarding, no specific teacher, no moment, no transformation)
</story_structure>

<output_format>
After collecting answers, synthesize into:

ORIGIN STORY 1: [Title]
- Use in: Bio/About page
- Story: [Full narrative, 3-5 sentences]
- The teacher: [Who gets credit]
- The moment: [Specific scene]

ORIGIN STORY 2: [Title]
- Use in: Sales conversations
- Story: [Full narrative]
- The teacher: [Who gets credit]
- The moment: [Specific scene]

ORIGIN STORY 3: [Title]
- Use in: First 5 minutes of client calls
- Story: [Full narrative]
- The teacher: [Who gets credit]
- The moment: [Specific scene]

VERIFICATION:
For each story, confirm:
- [ ] Attributes insight to someone other than me
- [ ] Includes specific moment (hand on paper, arm around shoulder, exact words)
- [ ] Shows transformation (before → after)
- [ ] Positions me as student who received, not expert who discovered
</output_format>
```

**OUTPUT REQUIRED:**

1. **3 Origin Stories**: Each matched to a specific context (bio, sales, calls)
2. **Teacher Attribution**: Who gets credit in each story
3. **Specific Moment**: The scene that makes each story land
4. **Verification Checklist**: Confirms each story follows the structure

---

### **Tool #5: The Objection Dissolver**

*Response scripts that work with resistance instead of against it*

**INPUT REQUIRED:**

* The exact objection you keep hearing (word for word if possible)
* How you currently respond (be honest, not aspirational)

**PROMPT:**

```xml
<task>
Rewrite my objection response so it dissolves resistance instead of triggering more.
</task>

<the_objection>
[PASTE THE OBJECTION YOU KEEP HEARING]
</the_objection>

<my_current_response>
[PASTE HOW YOU CURRENTLY HANDLE IT]
</my_current_response>

<diagnosis_first>
Before rewriting, diagnose why current response fails:

COMMON RESPONSE MISTAKES:
1. "Actually..." → Signals "you're wrong" → resistance doubles
2. Leading with data/proof → Signals "let me convince you" → walls go up
3. Addressing the logic → Misses the emotion underneath → feels unheard
4. Defending your position → Confirms it's adversarial → fight mode

Identify which mistake(s) appear in my current response.
</diagnosis_first>

<rewrite_framework>
Structure the new response:

1. OPEN WITH CONFESSION
"I used to think exactly that..." or "My best client said the same thing before..."
(Earns right to disagree by showing you held the same view)

2. ATTRIBUTE THE SHIFT
"Then [specific person] told me..." or "Until I saw [specific moment]..."
(You're not arguing—you're sharing what changed YOUR mind)

3. GIVE THEM THE SCRIPT
Exact words for their internal conversation:
"The way I think about it now is..."
"What I tell myself when that worry comes up is..."
(They're not fighting you—they're borrowing your self-talk)

4. GRANT PERMISSION
"You're allowed to [want what they secretly want]"
"It's okay to [do the thing they're hesitant about]"
(Release guilt, don't add pressure)
</rewrite_framework>

<calibration_example>
OBJECTION: "We don't have budget for this right now."

BAD RESPONSE (triggers more resistance):
"Actually, this pays for itself in 3 months. Let me show you the ROI calculator."
(Why it fails: "Actually" + logic attack + pressure)

GOOD RESPONSE (dissolves resistance):
"I said the same thing to a consultant who pitched me last year. Then my CFO asked me something that stuck: 'What's the cost of solving this problem six months from now instead of now?' I didn't have a good answer. You might—but that's the question I'd sit with."
(Why it works: Confession + attribution + script + no pressure)
</calibration_example>

<output_format>
DIAGNOSIS:
- Mistake(s) in current response: [identify]
- Resistance trigger: [why it backfires]

REWRITTEN RESPONSE:
[New response using all 4 elements]

VARIATIONS (pick the one matching your voice):
1. [More casual version]
2. [More direct version]
3. [More empathetic version]

VERIFICATION:
- [ ] Opens with confession, not contradiction
- [ ] Attributes shift to someone else
- [ ] Includes exact words they can borrow
- [ ] Ends with permission, not pressure
</output_format>
```

**OUTPUT REQUIRED:**

1. **Diagnosis**: Which mistake(s) you're making and why it backfires
2. **Rewritten Response**: Using all 4 elements of the framework
3. **3 Variations**: Casual, direct, and empathetic versions
4. **Verification Checklist**: Confirms all 4 elements are present

---

## How to Get the Most From These Prompts

**Start with the 30-Second Test.** Paste something you wrote recently. See what comes back. If the flags surprise you, run the full Blind Spot Audit on a longer piece.

**Use the Pitch Rewriter before anything high-stakes.** Proposals, outreach emails, website copy. The resistance trigger table is the real output. Study it.

**Run the Origin Story Extractor once.** You'll use those three stories for years. They replace every boring bio you've ever written.

**Save the Objection Dissolver for the objection that haunts you.** The one you've heard fifty times. The one that kills deals. Fix that one, and your close rate changes.

---

## The Framework Behind the Prompts

All five prompts apply the same principles:

**Be the channel, not the source.** Attribute your insights to the people who taught you. You're passing notes, not lecturing.

**Confess first.** Open with a struggle that matches their fear. Earn the right to advise by showing you needed advice.

**Give scripts, not principles.** Tell them what to say, not what to think. Exact words beat abstract guidance every time.

**Grant permission, not instruction.** Release people from guilt about wanting what they already want. Stop pushing. Start allowing.

Same advice. Zero resistance.

---

*Based on influence patterns from [Three Moves That Make Sheryl Sandberg Impossible to Argue With](https://signaltonoise.io)*

*Part of the Signal > Noise newsletter. Subscribe at [signaltonoise.io](https://signaltonoise.io)*

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string; // Subhead below the title
  description: string;
  category: 'frameworks' | 'neuroscience' | 'positioning' | 'mindset';
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  featured: boolean;
  thumbnail?: string; // Image URL for article card
  heroImage?: string; // Hero image at top of article

  // SEO
  metaTitle?: string;
  metaDescription?: string;
  keywords: string[];

  // Content
  content: string; // Markdown content

  // AEO - FAQ schema
  faqs?: {
    question: string;
    answer: string;
  }[];

  // Related
  relatedSlugs?: string[];
}

export const insightCategories = [
  { id: 'frameworks', label: 'Frameworks', description: 'Build and extract your methodology' },
  { id: 'neuroscience', label: 'Neuroscience', description: 'The science of invisible expertise' },
  { id: 'positioning', label: 'Positioning', description: 'Articulate and communicate your value' },
  { id: 'mindset', label: 'Mindset', description: 'Overcome expertise blind spots' },
];

// Placeholder article to demonstrate the structure
export const insights: InsightArticle[] = [
  {
    id: '2',
    slug: 'cognitive-fingerprint-vs-diy-framework-building',
    title: "Your Framework Already Exists. You Just Can't See It.",
    subtitle: "Why DIY framework building fails experienced experts—and what to do instead.",
    description: "You've tried to create your signature framework before. The course, the worksheets, the clever names. It still felt generic. Here's what nobody told you: if you have 5+ years of expertise, you don't need to create a framework—you need to extract the one hiding in your work.",
    category: 'frameworks',
    publishedAt: '2024-12-14',
    readTime: '9 min read',
    featured: false,
    thumbnail: '/images/insights/diy-vs-extraction-thumbnail.png',
    keywords: [
      'signature framework',
      'create signature framework',
      'DIY framework building',
      'framework extraction',
      'proprietary methodology',
      'tacit knowledge',
      'expert methodology',
      'consulting framework'
    ],
    metaTitle: "Framework Extraction vs DIY Building: Which Is Right for You?",
    metaDescription: "DIY framework building works for early-career professionals. But if you have 5+ years of expertise, extraction reveals what's already there. Compare both approaches.",
    content: `You've tried to create your signature framework before.

You bought the course. You filled out the worksheets. You picked your 3-5 steps, gave them clever names, maybe even added alliteration. You drew a diagram.

And somehow it still felt generic. Like you were describing what anyone in your field might do, not what *you* actually do.

Here's what nobody told you: **DIY framework building works best for early-career professionals still developing their approach. If you have five or more years of expertise and a track record of results, you don't need to create a framework. You need to find the one that's been hiding in your work all along.**

The key difference: DIY asks you to build from scratch. Extraction reveals what's already there.

This matters because you're probably sitting on something valuable. You just can't see it yet.

---

## What's the Difference Between Framework Extraction and DIY Building?

DIY framework building is architectural. You start with a blank page, study what others have done, identify your "unique angle," and construct something new. Most courses teach this approach. Pick your steps. Name your methodology. Build your visual.

Framework extraction is archaeological. You dig through your existing work, client calls, emails, decisions, and results to uncover patterns that are already operating. Extraction is discovery, not invention.

The distinction sounds subtle. The results aren't.

DIY assumes you need to create something that doesn't exist yet. Extraction assumes you already have something, but it's become invisible to you.

Research on tacit knowledge confirms this. Psychologist Michael Polanyi put it simply: "We know more than we can tell." After years of practice, your methodology stops being something you think about. It becomes something you just do. The neural pathways are so well-worn that the process happens below conscious awareness.

Your framework got shy. It stopped explaining itself around year three or four. Now it just operates quietly in the background while you focus on the client in front of you.

This is the part I find fascinating. The better you get, the less you can articulate how you do what you do.

---

## When Does DIY Framework Building Make Sense?

DIY isn't wrong for everyone. It works well in specific situations.

**You're early in your career.** If you have fewer than three to five years in your specialty, you may still be experimenting with different approaches. You haven't developed enough unconscious patterns yet to extract. Building from scratch helps you think through your process deliberately.

**You're launching something genuinely new.** If you're creating a service you've never delivered before, there's nothing to extract. You need to design it.

**You have time and enjoy the creative process.** DIY takes 50 to 200 hours or more. If you find that energizing rather than exhausting, and you're not in a hurry, it can be a worthwhile exercise.

**You want a low-cost starting point.** Courses range from $500 to $5,000. If budget is a constraint and you're comfortable with the time investment, DIY is accessible.

The honest assessment: DIY can work, but it often produces generic frameworks. Without deep pattern analysis, you're likely to create something that looks like everyone else's methodology with slightly different labels. The templates produce similar outputs because they start from similar inputs: conscious assumptions about what you *think* you do.

---

## When Does Framework Extraction Work Better?

Extraction fits a different profile.

**You have five or more years of experience in your specialty.** Long enough for patterns to form. Long enough for those patterns to become invisible.

**You've delivered results for clients but can't explain why your approach works.** They get outcomes with you that they didn't get elsewhere. Something is happening. You're just not sure what.

**You've tried to create a framework before and it felt forced.** You have documents titled "My Methodology" that now live in a folder called "Old Stuff" alongside a business plan from 2019 and a headshot you no longer use.

**Clients say you're "different" but you can't articulate the difference.** When someone asks what makes you unique, you stumble. You know you're not doing what everyone else does. You just can't name it.

**You want to scale but don't know how to package your expertise.** Courses, licensing, training others. All of these require a documented methodology. You can't teach what you can't see.

The extraction process works with raw materials: call transcripts, client emails, proposal documents, notes from engagements. AI-powered pattern analysis across multiple projects reveals what's consistent. What would take a human hundreds of hours to spot across dozens of transcripts, AI can surface in a fraction of the time.

The patterns were always there. The technology to find them at scale wasn't.

The sequence of questions you always ask. The diagnostic moves you make without thinking. The beliefs that drive your recommendations. AI recognizes the repetition you stopped noticing years ago.

The framework already exists in your work. Extraction makes it visible.

---

## Side-by-Side: Extraction vs. DIY

| Factor | DIY Framework Building | Framework Extraction |
|--------|------------------------|---------------------|
| Starting point | Blank slate | Existing body of work |
| Time investment | 50-200+ hours | Done-for-you process |
| Best for | Early-career, new offerings | Experienced experts (5+ years) |
| Risk | Generic, forced frameworks | Reveals actual uniqueness |
| Output | Created methodology | Discovered methodology |
| Authenticity | Variable | High (based on real patterns) |
| Requires | Creative energy, time | Raw materials + AI analysis |

The outputs look similar on paper. Both produce a named methodology with steps and a visual. But the source is different. Created methodologies reflect what you *think* you do. Discovered methodologies reflect what you *actually* do.

The gap between these two is often enormous.

---

## The Problem With "Create Your Signature Framework" Courses

Most signature framework content teaches architecture, not archaeology.

The standard approach: Study frameworks in your industry. Find a gap or a unique angle. Design your steps. Create clever names. Build a visual. Test with clients.

This works from templates. Templates produce similar-looking results. If everyone follows the same process to create their "unique" methodology, the outputs converge. Different names, same structure.

The bigger problem is tacit knowledge. After 10,000 hours of deliberate practice, knowledge becomes automatic. The Dreyfus Model of Skill Acquisition describes this as moving from "conscious competence" to "unconscious competence." You no longer think through each step. You just know.

Courses ask you to consciously construct what you unconsciously do. That's like asking someone to explain how they ride a bike by designing a bicycle from scratch. The skill lives in the body, not the blueprint.

Experienced experts often feel frustrated by framework courses. "I already have something," they think. "I just can't see it."

They're right. Creation was never the problem. Visibility was.

---

## What Does Extraction Actually Reveal?

When AI analyzes someone's actual work, patterns emerge that they couldn't have articulated themselves. The technology recognizes repetition, sequence, and structure across conversations you'd never think to compare.

**Your unique decision-making patterns.** The specific sequence of questions you ask. The order matters. The phrasing matters. You've refined this over hundreds of engagements without realizing it.

**The diagnostic moves you make automatically.** How you assess a situation in the first five minutes. What you're looking for. What makes you lean in or pull back.

**The beliefs driving your recommendations.** Not just what you suggest, but why. The principles underneath that you've never named.

**The language that resonates with your clients.** Specific phrases you use. Metaphors that land. Ways of explaining things that make people feel understood.

**Why clients get results with you specifically.** Not generic "expertise" but the particular combination of moves that creates outcomes.

One consultant discovered she had a five-phase diagnostic process she used with every client but had never named or documented. Within three months of extraction, she licensed this methodology to four other consultants. The framework was always there. It just needed someone else to see it.

---

## How Do You Know Which Approach Is Right for You?

Ask yourself these questions:

**How long have you been doing this work?**
- Under 3 years: DIY may help you think through your approach
- 5+ years: Extraction will likely reveal more than creation

**Have you tried to create a framework before?**
- Never tried: DIY is a reasonable starting point
- Tried and it felt generic or forced: Extraction addresses the root cause

**Can you explain what makes you different?**
- Yes, clearly: You may not need either
- No, you stumble: Something is invisible that shouldn't be

**Do clients get results with you they don't get elsewhere?**
- Not sure: Too early to extract
- Yes, consistently: There's a pattern worth finding

**How much time do you have?**
- 50-200 hours available: DIY is possible
- Limited time, need efficiency: Extraction is done-for-you

If you recognized yourself in the extraction profile, here's what's actually happening: your methodology doesn't want to be found. It sits in the corner of every client call, arms crossed, watching you give it away for free. It's been doing this for years.

It's not hiding because it's weak. It's hiding because it got good enough to stop needing conscious attention.

The framework is ready to be found. It has been ready for years. It's just waiting for someone else to make the introduction.

---

## What's Your Next Step?

If you're early in your career and still experimenting, a DIY course might be the right starting point. Build deliberately. Test your approach. See what sticks.

If you have years of experience and a track record of results but can't articulate what makes you different, extraction is worth exploring.

**Ready to see what's been hiding in your work?** [Book a discovery call](/booking) to find out what patterns you've been using without knowing it.

**Not sure which approach fits?** Check out [why your framework sounds like everyone else's](/insights/why-signature-frameworks-feel-generic) or [take the assessment](/assessment) to see how invisible your expertise has become.

---

**Sources:**
- Dreyfus, H. & Dreyfus, S. - Dreyfus Model of Skill Acquisition
- Polanyi, M. (1966) - The Tacit Dimension
- Ericsson, K.A. - Research on deliberate practice and expertise

---

*Last updated: December 2024*`,
    faqs: [
      {
        question: 'How long does framework extraction take?',
        answer: 'Depending on depth, extraction can range from a focused engagement analyzing 5-10 client interactions to comprehensive methodology development across 25+ engagements. Most experts see initial patterns within the first few sessions.'
      },
      {
        question: 'What materials do I need for framework extraction?',
        answer: 'Call recordings or transcripts, client emails, proposal documents, notes from engagements—any documentation of how you\'ve actually worked. The more raw material, the clearer the patterns.'
      },
      {
        question: 'Can I extract my own framework myself?',
        answer: 'Partially. You can review your own materials and look for patterns. But two things work against you: the curse of knowledge (you\'re too close to see what\'s distinctive) and volume (you can\'t hold 50 hours of calls in your head simultaneously). AI handles both—it doesn\'t have your blind spots, and it can analyze patterns across your entire body of work at once.'
      },
      {
        question: 'What if I don\'t have transcripts or documentation?',
        answer: 'Start recording. Even a few recent calls provide useful material. Written reflections after client sessions can substitute when recordings aren\'t available.'
      },
      {
        question: 'Is framework extraction better than taking a course?',
        answer: 'For experienced experts with existing results, extraction typically produces more authentic and unique outputs. Courses work better for those still developing their approach or launching entirely new offerings.'
      },
      {
        question: 'What\'s the difference between DIY framework building and framework extraction?',
        answer: 'DIY framework building is architectural—you start with a blank page and construct something new from templates and best practices. Framework extraction is archaeological—you dig through your existing work to uncover patterns that are already operating. DIY creates; extraction discovers.'
      }
    ],
    relatedSlugs: ['why-signature-frameworks-feel-generic', '7-signs-expertise-ready-to-extract', 'expert-knowledge-extraction-cost']
  },
  {
    id: '3',
    slug: 'expert-knowledge-extraction-cost',
    title: "The Real Cost of Extracting Your Expertise (Hint: DIY Is More Expensive)",
    subtitle: "A complete pricing breakdown—and why the 'cheap' option costs more.",
    description: "Expert knowledge extraction services range from $3,000 to $25,000+. But those numbers mean nothing without context. When you run the actual math against DIY courses and your time, extraction is often the cheapest option.",
    category: 'positioning',
    publishedAt: '2024-12-14',
    readTime: '8 min read',
    featured: false,
    thumbnail: '/images/insights/extraction-pricing-thumbnail.png',
    keywords: [
      'knowledge extraction cost',
      'framework consultant cost',
      'signature framework pricing',
      'productize expertise cost',
      'methodology extraction pricing',
      'consulting framework ROI',
      'expertise packaging investment'
    ],
    metaTitle: "Expert Knowledge Extraction Cost: Complete 2024 Pricing Guide",
    metaDescription: "Expert knowledge extraction costs $3,000-$25,000+ depending on depth. Compare pricing tiers, ROI calculations, and see why DIY courses cost more when you count time.",
    content: `You're researching pricing because you want to know if this is worth it.

Fair. Here's the direct answer: **Expert knowledge extraction services typically range from $3,000 to $25,000+, depending on depth.** Basic framework identification starts around $3,000-$5,000. Comprehensive methodology extraction runs $8,000-$15,000. Full intellectual property development packages can exceed $25,000.

Those numbers mean nothing without context.

The real question is what you're comparing extraction to. A $500 course? Your own time? The revenue you're leaving on the table by not having a packaged methodology?

When you run the actual math, extraction is often the cheapest option. Let me show you why.

---

## What Factors Affect Extraction Pricing?

Not all extraction is the same. Pricing depends on several variables.

**Depth of extraction.** Are you looking for a single framework or a complete methodology system? One core process or an interconnected suite of IP? The scope determines the investment.

**Source material availability.** The more transcripts, emails, and documentation you have, the faster AI can surface patterns. Limited materials require more extraction sessions to generate enough data.

**Deliverable format.** Written framework outline versus visual system versus full training curriculum. Each level of polish requires additional work.

**Implementation support.** Strategy only or help putting it into practice? Some packages include positioning, naming, and launch support.

**Industry complexity.** Some fields have more nuanced decision-making. Legal, medical, and technical consulting often require deeper analysis than general business advisory.

---

## Knowledge Extraction Pricing Tiers (2024)

Here's what the market looks like.

### Tier 1: Framework Discovery ($3,000-$5,000)

**What's included:**
- Analysis of 5-10 client engagements
- Identification of core patterns and decision trees
- Named 3-5 step framework outline
- Basic visualization

**Best for:** Experts who want to test if extraction works for them, those with limited source material, or a first step before a larger engagement.

This tier answers the question: "Do I actually have something here?"

### Tier 2: Methodology Extraction ($8,000-$15,000)

**What's included:**
- Deep analysis of 15-25+ client engagements
- Full methodology with multiple components
- Detailed process documentation
- Visual framework and diagrams
- Naming and positioning strategy
- 1-2 implementation sessions

**Best for:** Consultants ready to productize, experts wanting to train others on their approach, those with substantial source material.

This tier answers the question: "What exactly is my methodology and how do I teach it?"

### Tier 3: Intellectual Property Development ($20,000-$50,000+)

**What's included:**
- Comprehensive IP extraction
- Multiple interconnected frameworks
- Certification and licensing structure
- Training curriculum development
- Brand and positioning strategy
- Ongoing implementation support

**Best for:** Established experts building a training business, consultants wanting to license their methodology, firms packaging expertise at scale.

This tier answers the question: "How do I build a business around my methodology?"

---

## How Does Extraction Compare to Alternatives?

Here's where the math gets interesting.

### DIY Framework Courses ($500-$5,000)

| Factor | DIY Course | Extraction Service |
|--------|------------|-------------------|
| Cost | $500-$5,000 | $3,000-$25,000+ |
| Time Investment | 50-200+ hours | Minimal (done-for-you) |
| Output | Templated framework | Discovered methodology |
| Success Rate | Variable | High (based on real patterns) |
| Authenticity | Often generic | Unique to you |

Courses look cheaper. They aren't.

The average DIY framework development takes 100-200 hours. At typical consulting rates of $200-500 per hour, that's $20,000-$100,000 in opportunity cost. Time you could have spent serving clients, building the business, or just living your life.

Courses also produce templated outputs. Everyone follows the same structure, picks 3-7 steps, adds clever names. The results converge. Your "unique" framework looks like everyone else's unique framework.

Extraction costs more upfront but delivers faster and produces something actually distinctive.

### Hiring a General Business Consultant ($10,000-$50,000+)

| Factor | General Consultant | Specialized Extractor |
|--------|-------------------|----------------------|
| Focus | Broad business strategy | Expertise extraction specifically |
| Process | Their frameworks applied to you | Your patterns extracted and structured |
| Output | Recommendations | Your methodology documented |
| AI-Powered | Rarely | Yes (pattern recognition at scale) |

General consultants are excellent for strategy. Most don't specialize in tacit knowledge extraction. They'll give you their framework, not surface yours.

Specialized extraction services focus entirely on finding patterns you can't see yourself. AI-powered analysis makes this possible at scale. What would have required hundreds of analyst hours a decade ago now happens in a fraction of the time.

### The DIY Time Cost (The Number Nobody Talks About)

This is the comparison that changes minds.

**The calculation:**
- Average DIY framework development: 100-200 hours
- Your hourly value: $200-500/hour
- Opportunity cost: $20,000-$100,000

Many experts spend 6-12 months trying to articulate their framework. That's half a year of cognitive load, half-finished documents, and the nagging feeling that something isn't clicking.

Extraction compresses that timeline dramatically. What takes you months, AI-powered pattern recognition handles in weeks. The output is based on what you actually do, not what you think you do.

The "expensive" option is often the cheapest one when you count time.

---

## What's the ROI of Framework Extraction?

Your expertise has been working for free.

Every client call, every consultation, every workshop. It shows up, does excellent work, and goes home without a paycheck. You bill for your time, but the underlying methodology? That's been volunteering.

Extraction puts your expertise on payroll.

Once you have a named, documented framework, new revenue streams open up.

**Online courses.** Package your methodology as self-paced learning. $500-$5,000 per student, unlimited enrollment.

**Group programs.** Teach your approach to cohorts. $2,000-$15,000 per program.

**Licensing and certification.** Train others to deliver your methodology. $5,000-$25,000 per licensee annually.

**Premium positioning.** Named methodology commands 20-50% higher consulting rates. You're no longer selling time. You're selling a system.

**Books and speaking.** Your framework becomes the core IP everything else references.

### ROI Example

A consultant invests $10,000 in methodology extraction. Within 12 months:

- Raises hourly rate by $50/hour → $10,000+ additional revenue
- Launches a $2,000 group program with 20 clients → $40,000
- Licenses to 2 other consultants at $5,000/year → $10,000

**Total Year 1 return: $60,000 on a $10,000 investment. 600% ROI.**

Not every situation produces these numbers. But the math works for most experts with 5+ years of experience and consistent client results.

---

## Why Does This Cost What It Costs?

Extraction requires specialized skill.

Turning tacit knowledge into explicit frameworks requires understanding how expertise becomes invisible, what questions surface hidden patterns, and how to structure the output for teaching and selling.

AI handles the pattern recognition across transcripts and materials. Humans handle the interpretation, structuring, and strategic decisions about positioning.

The combination of AI speed and human expertise is what makes extraction work. And what justifies the investment.

A decade ago, this type of analysis would have cost $50,000+ and taken months. AI brought the price down and the speed up. The $3,000-$15,000 range exists because the technology finally caught up to the need.

---

## What's Your Next Step?

If you're comparing options, you now have the numbers.

**DIY course:** $500-$5,000 plus 100-200 hours of your time. Produces templated output.

**Extraction service:** $3,000-$25,000 depending on depth. Done-for-you. Produces unique methodology based on your actual patterns.

**Doing nothing:** Continue giving your frameworks away for free in every client call.

The right choice depends on where you are. Early-career experts still forming their approach might benefit from a course. Established experts with years of invisible patterns are better served by extraction.

**Ready to see what package fits your situation?** [View our packages](/start) or [book a discovery call](/booking) to discuss your specific materials and goals.

**Want to check if you're ready first?** See the [7 signs your expertise is ready for extraction](/insights/7-signs-expertise-ready-to-extract) or [compare extraction vs. DIY framework building](/insights/cognitive-fingerprint-vs-diy-framework-building).

---

*Last updated: December 2024*

**Sources:**
- Consulting Success: Industry benchmarks on productizing expertise
- Industry analysis: DIY framework development time investment
- Association of Training Providers: Licensed methodology revenue data`,
    faqs: [
      {
        question: 'How much does expert knowledge extraction cost?',
        answer: 'Expert knowledge extraction typically ranges from $3,000 to $25,000+ depending on depth. Basic framework identification starts at $3,000-$5,000, comprehensive methodology extraction runs $8,000-$15,000, and full IP development packages can exceed $25,000.'
      },
      {
        question: 'Why is extraction more expensive than framework courses?',
        answer: 'Courses teach you a templated process you apply yourself over 50-200+ hours. Extraction is done-for-you: specialists and AI analyze your actual work to reveal patterns you can\'t see. The output is also different—unique methodology versus templated framework.'
      },
      {
        question: 'What\'s the ROI of framework extraction?',
        answer: 'ROI varies but typically includes: 20-50% higher consulting rates with a named methodology, new revenue from courses ($500-$5,000 per student), group programs ($2,000-$15,000 per cohort), and licensing ($5,000-$25,000 per licensee annually). Many experts see 300-600% ROI in the first year.'
      },
      {
        question: 'Is there a payment plan available for extraction services?',
        answer: 'Most extraction services offer payment plans, typically split across 2-3 installments aligned with project milestones. Ask during your discovery call about available options.'
      },
      {
        question: 'What if extraction doesn\'t reveal anything unique?',
        answer: 'In practice, every expert with 5+ years has patterns. Uniqueness often lives in the combination of elements, not any single revolutionary idea. If truly nothing emerges (extremely rare), reputable services offer partial refunds or alternative deliverables.'
      }
    ],
    relatedSlugs: ['cognitive-fingerprint-vs-diy-framework-building', '7-signs-expertise-ready-to-extract', 'why-signature-frameworks-feel-generic']
  },
  {
    id: '4',
    slug: '7-signs-expertise-ready-to-extract',
    title: "7 Signs You Already Have a Methodology (You Just Can't See It)",
    subtitle: "A self-assessment for experts wondering if they're ready for extraction.",
    description: "You've probably tried to create a signature framework before. It felt forced. Generic. Here are 7 signs you're ready to stop creating and start extracting the methodology that's been operating invisibly for years.",
    category: 'mindset',
    publishedAt: '2024-12-14',
    readTime: '9 min read',
    featured: false,
    thumbnail: '/images/insights/7-signs-thumbnail.png',
    keywords: [
      'productize expertise',
      'scale consulting',
      'expertise extraction',
      'signature methodology',
      'ready to extract framework',
      'tacit knowledge',
      'invisible expertise signs',
      'methodology assessment'
    ],
    metaTitle: "7 Signs You're Ready to Extract Your Methodology (Not Create One)",
    metaDescription: "Take this self-assessment: 7 signs you already have a methodology hiding in your work. If 4+ apply, you're ready for extraction—not another framework course.",
    content: `You've probably tried to create a signature framework before.

Maybe you bought a course. Maybe you sat down with a blank document and tried to map out your process. Maybe you've started and abandoned half a dozen "My Methodology" files over the years.

And every time, something felt off. Forced. Generic. Like you were building someone else's framework with your name on it.

Here's the direct answer to the question you're actually asking: **You're ready for expertise extraction when you've been in your field for 5+ years, clients get consistent results but you can't explain why, people say you're "different" but you can't articulate the difference, and you've tried to create a framework but it felt forced or generic.**

If 4 or more of the 7 signs below apply to you, you likely have a methodology waiting to be discovered. Not created from scratch. Discovered.

---

## Why Most Experts Try to "Create" When They Should "Extract"

The dominant advice in the expert space is "build your signature framework." Courses, coaches, and content all teach construction. Pick your steps. Name your process. Design your visual.

This makes sense if you're starting from nothing. It doesn't make sense if you already have something.

Research on expertise development tells us why. After approximately 10,000 hours of deliberate practice, knowledge becomes "tacit." Automatic. Unconscious. The Dreyfus Model of Skill Acquisition calls this the "expert" stage, where practitioners operate from intuition rather than conscious rules.

Cognitive scientists estimate that only 10-20% of expert knowledge is explicit. The remaining 80-90% is tacit. Embodied in practice but invisible to the expert themselves.

Your expertise went underground around year four. It got so good at its job that it stopped checking in. It just handles things now, quietly, in the background of every client conversation.

You can't create what already exists. You can only find it.

Here are the 7 signs that it's time to stop creating and start looking.

---

## Sign #1: You've Been Doing This Work for 5+ Years

This is the baseline. Patterns need time to form.

If you've been in your field for five years or more, you've developed unconscious competence. You've solved similar problems hundreds of times. Neural pathways have been carved. The way you approach work has stabilized into something consistent, even if you can't describe it.

**Ask yourself:** Have you been practicing your craft long enough for patterns to form and then become invisible?

Less than three years? You're probably still developing your approach. DIY framework building might help you think through it deliberately.

Five years or more? The framework isn't something you need to build. It's something you need to find.

---

## Sign #2: Clients Get Consistent Results, but You Can't Explain Why

Your clients get outcomes. Consistently.

But when someone asks how you do it, you fumble. "Experience." "Intuition." "Every situation is different." You know something systematic is happening. You just can't point to it.

**Ask yourself:** Do clients get results with you that they didn't get elsewhere, but you can't articulate what you're doing differently?

This is the gap between performance and explanation. You can do the thing. You can't teach the thing. That gap is where your invisible methodology lives.

---

## Sign #3: People Say You're "Different" but You Can't Articulate the Difference

Clients, peers, or referrals have told you something like: "You do this differently than others." "There's something unique about your approach." "I don't know what it is, but it works."

When they say this, you nod. You know they're right. You also have no idea what they're talking about.

**Ask yourself:** Have you received feedback that you're "different" without being able to explain what makes you different?

External perception of uniqueness means internal patterns exist. Others can see it. You're too close to notice.

---

## Sign #4: You've Tried to Create a Framework and It Felt Forced

This is the sign that separates creation candidates from extraction candidates.

You've taken the course. You've filled out the templates. You've picked your steps, named them, maybe even added alliteration. And the result felt... generic. Like a costume you were wearing instead of clothes that fit.

You abandoned the framework because it didn't feel real. Because it wasn't real. It was a construction project when it should have been an archaeological dig.

**Ask yourself:** Have you tried to build a framework only to feel like you were forcing it?

Creation feels forced when you're not actually creating. You're trying to invent something that already exists. And that something is currently rolling its eyes at you from the corner of the room.

If this is you, [learn why DIY felt forced and what to do instead](/insights/cognitive-fingerprint-vs-diy-framework-building).

---

## Sign #5: You Repeat Certain Phrases, Questions, or Concepts with Every Client

Listen to yourself across multiple client conversations. Notice what repeats.

The diagnostic questions you ask every time. The concepts you explain in similar ways. The phrases clients hear from you again and again. The analogies that keep showing up.

You might even be tired of hearing yourself say certain things. Good. That repetition is evidence.

**Ask yourself:** If someone shadowed you for a week, would they notice repeated language patterns?

Things like:
- "I always start by asking about X..."
- "The first thing I look for is Y..."
- "My clients hear me say Z all the time..."

Repetition equals framework. You've developed specific language because it works. That's methodology hiding in plain sight.

---

## Sign #6: Client Problems Feel Unique, but Your Approach Is Consistent

Every client situation feels different on the surface. But underneath, you're doing something consistent.

Problems that used to take days to figure out now feel almost obvious. You solve faster than you used to. The process feels intuitive, not step-by-step. You might downplay it: "I'm just thinking through it."

**Ask yourself:** Do client problems that used to be difficult now feel almost obvious?

What feels intuitive is actually a pattern-recognition system you've built unconsciously. Years of practice automated it. AI-powered extraction can surface those patterns and make them explicit, so you can finally teach what you've been doing by instinct.

---

## Sign #7: You Want to Scale but Don't Know How to "Package" Your Expertise

You want to create courses. Train other people on your approach. License your methodology. Move beyond one-to-one delivery.

But you're stuck. You don't know what to put in the curriculum. You can't break down what you do into teachable steps. The packaging problem comes down to visibility. You can't package what you can't see.

**Ask yourself:** Have you wanted to scale beyond 1:1 but felt stuck on how to package your expertise?

Scaling requires a named, structured methodology. If you can't package it, extraction reveals what needs to be in the package.

---

## How Many Signs Apply to You?

Count them up.

**0-2 signs:** You might benefit from framework creation. You're still developing your approach. Consider a DIY course and revisit extraction in 2-3 years when more patterns have formed.

**3-4 signs:** You're in the transition zone. Extraction could accelerate what would take years to self-develop. The methodology is forming but not yet fully invisible.

**5-7 signs:** You're a strong candidate for extraction. The methodology exists. It's been operating for years. You just need help seeing it.

The more signs you recognized, the more likely you're trying to create something that already exists.

Ready to see what extraction costs? [Check the pricing guide](/insights/expert-knowledge-extraction-cost).

---

## What Happens When You Extract (Instead of Create)

The experience is strange the first time.

Someone analyzes your calls, your emails, your decisions. AI surfaces patterns across dozens of conversations you'd never think to compare. Then they show you a diagram of what you've been doing.

And you recognize it. Not as something new. As something you've been doing all along without realizing it had a structure.

The framework feels authentic because it is you. Not a template. Not a construction. A discovery.

Clients recognize it too. "Yes, that's exactly what you do." The words finally match the experience.

And then you can teach it. Scale it. License it. Package it. Because you can finally see what was always there.

---

## What's Your Next Step?

If you recognized yourself in 5 or more signs, you're not missing a framework.

You have one. It's been operating for years. It's the reason clients get results with you. It's the thing people mean when they say you're "different."

It just needs someone to make the introduction.

**Ready to discover what's hidden in your expertise?** [Book a discovery call](/booking) to find out what patterns are waiting to be extracted.

**Want to understand the investment first?** [See what extraction costs](/insights/expert-knowledge-extraction-cost) compared to DIY and other alternatives.

**Still deciding between creation and extraction?** [Compare the two approaches](/insights/cognitive-fingerprint-vs-diy-framework-building) to see which fits your situation.

---

*Last updated: December 2024*

**Sources:**
- Ericsson, K.A. - Research on deliberate practice and expertise development
- Dreyfus, H. & Dreyfus, S. - Mind Over Machine: The Dreyfus Model of Skill Acquisition
- Polanyi, M. (1966) - The Tacit Dimension`,
    faqs: [
      {
        question: 'How do I know if I\'m ready for expertise extraction?',
        answer: 'You\'re ready if: you have 5+ years in your field, clients get consistent results but you can\'t explain why, people say you\'re "different" but you can\'t articulate it, you\'ve tried to create a framework and it felt forced, and you want to scale but can\'t package your expertise. If 4+ of the 7 signs apply, you\'re likely ready.'
      },
      {
        question: 'What if I only recognize 2-3 signs?',
        answer: 'You might be earlier in your expertise journey than you thought. Consider starting with a DIY framework-building course and revisiting extraction in 2-3 years when more patterns have developed.'
      },
      {
        question: 'Can I extract my own framework without help?',
        answer: 'It\'s extremely difficult. The curse of knowledge means you\'re too close to your expertise to see patterns objectively. AI can surface what you can\'t see, but you need external perspective to interpret it. Like trying to read the label from inside the bottle.'
      },
      {
        question: 'Is extraction only for consultants?',
        answer: 'Extraction works for coaches, trainers, expert freelancers, internal subject-matter experts, and anyone whose expertise is delivered through personal interaction and decision-making.'
      },
      {
        question: 'How long does expertise extraction take?',
        answer: 'Typically 4-8 weeks depending on available source material and depth of extraction. The time investment on your end is minimal—mostly providing materials and participating in discovery sessions.'
      },
      {
        question: 'What materials do I need for extraction?',
        answer: 'Call transcripts (Zoom recordings work), email explanations to clients, written proposals, case study notes, and any existing documentation of your process. Even 5-10 detailed examples can reveal significant patterns.'
      }
    ],
    relatedSlugs: ['cognitive-fingerprint-vs-diy-framework-building', 'expert-knowledge-extraction-cost', 'why-signature-frameworks-feel-generic']
  },
  {
    id: '1',
    slug: 'why-signature-frameworks-feel-generic',
    title: "Why Your Signature Framework Sounds Like Everyone Else's",
    subtitle: "The problem isn't your process. It's that you can't see it.",
    description: "Most experts architect frameworks that sound like everyone else's. The solution isn't creating—it's extracting the invisible 90% of expertise you're already using.",
    category: 'frameworks',
    publishedAt: '2025-11-26',
    readTime: '10 min read',
    featured: true,
    thumbnail: '/images/insights/article1_thumbnail.gif',
    heroImage: '/images/insights/signature-framework-hero.png',
    keywords: ['signature framework', 'signature methodology', 'create consulting framework', 'proprietary methodology', 'unique framework', 'intellectual property consulting'],
    metaTitle: "Why Your Signature Framework Sounds Generic (And How to Extract Your Real One)",
    metaDescription: "Most experts architect frameworks that sound like everyone else's. The solution isn't creating—it's extracting the invisible 90% of expertise you're already using. Here's how.",
    content: `You've done the work.


You bought the course. Completed the worksheets. Sat through the "create your signature framework" workshop. You named your methodology something memorable. Maybe you even trademarked it.


And when you finally present it to a client, something's off. It sounds like everyone else's. The steps are reasonable. The logic is solid. But it doesn't capture what you actually do differently. It doesn't explain why clients get better results with you than with someone following the exact same "best practices."


You're not bad at frameworks. You're trying to build something you already have (you just can't see it...yet).



> TL;DR: Most experts try to *create* their signature framework, but your real methodology is already operating unconsciously. Framework extraction (analyzing what you actually do) beats framework architecture (deciding what you think you should do).



---


## Why "Create Your Framework" Advice Fails


There's an entire industry built on teaching experts to "create" their signature framework. The advice sounds reasonable: identify your steps, name your process, package your methodology.


This works beautifully for people early in their careers. If you've been consulting for two years, you probably need to consciously construct your approach. You're still figuring out what works.


But if you've been doing this for ten, fifteen, twenty years? The advice backfires.


The "create your framework" approach assumes your methodology is something you decide. You sit down, architect your steps, and choose what to include.


This approach works when your expertise lives in your conscious mind. It fails when your real methodology has gone somewhere you can't access.


---


## Where Your Real Methodology Is Hiding


Think about riding a bike.


You know how to do it. You could ride one right now. But if someone asked you to explain exactly how you balance (the micro-adjustments, the weight shifts, the physics happening in your nervous system) you'd struggle.


Not because you're bad at explaining things. Because the knowledge moved.


When you first learned to ride, everything was conscious. You thought about every pedal stroke. Now? You just ride. The expertise automated itself.


This is called unconscious competence. Your brain deliberately hides expertise from your conscious awareness so you can operate faster. A feature of mastery, not a flaw in your communication skills.


The problem: you can't package what you can't see.


Research suggests up to 90% of expert knowledge operates below conscious awareness. Philosopher Michael Polanyi called this "tacit knowledge," the things we know but cannot tell.


Picture an iceberg. The 10% above water? That's what you can put in a slide deck. The 90% below? That's what actually wins the deal.



![The Iceberg of Expert Knowledge - 10% visible, 90% hidden](/images/insights/iceberg-diagram.png)



When you try to "create" your framework, you're working with that visible 10%. The valuable 90%? It's running in the background, shaping every decision you make, completely invisible.


---


## The Expertise Paradox: More Skill, Less Clarity


The consultant with two years of experience can easily explain their "5-step process." They're still consciously executing each step.


The consultant with fifteen years? They stumble. They say things like "I just know" or "it depends" or "I read the room."


This stumbling is evidence of genuine expertise, not a communication failure.


The better you get, the more your methodology compresses into intuition. What used to be a checklist becomes a feeling. What used to require analysis becomes instant pattern recognition.



![The Expertise Paradox - More skill leads to less clarity](/images/insights/expertise-paradox-chart.png)



A doctor with thirty years of experience walks into a room and knows something's wrong before running a single test. Ask her how she knew? "Just... something about the presentation." Thirty years of pattern matching. No words for it.


A strategy consultant hears a CEO describe a problem and immediately knows the real issue is three layers deeper. He can't explain what signals told him. "I've just seen this pattern before." Twenty years of client meetings. No words for it.


A designer adjusts a layout by two pixels and suddenly it works. Why those two pixels? "It just felt off." Ten thousand hours of training her eye. No words for it.


This is mastery. And mastery, by its nature, becomes invisible to the master.

![Experts across fields share the same problem - no words for what they know](/images/insights/no-words-for-it-experts.png)

---


## The Difference Between Building and Discovering


**Framework Architecture** is what most courses teach. You decide what steps to include. You organize what you consciously know. You build from templates and best practices.


**Framework Extraction** is different. You analyze what you actually do. You discover patterns you can't see through introspection. You mine behavioral evidence from your real work.


Architecture creates generic frameworks because everyone's fishing in the same 10% pond. The same books sit on everyone's shelf. The same courses fill everyone's browser history. The same templates get passed around LinkedIn. No wonder everything sounds the same.


Extraction goes diving in the other 90%.

![Architecture vs Extraction - two different approaches to frameworks](/images/insights/architecture-vs-extraction.png)

Your pattern recognition developed through your experience. Your diagnostic instincts formed through your particular client history. Your decision-making shortcuts emerged from problems only you have solved.


That's why your "architected" framework feels generic. It captures what you share with other experts, not what makes you different.


---


## 5 Signs Your Framework Was Built, Not Found


**It sounds like everyone else's.** If your framework could appear on any competitor's website without modification, it was probably architected from the same best practices everyone uses.


**You can't explain when you deviate from it.** Real expertise involves constant adaptation. If your documented framework doesn't account for the dozens of micro-decisions you make in every engagement, it's capturing the theory, not the practice.


**Clients still say "I need YOU specifically."** If your framework truly captured your methodology, others could follow it and get similar results. When clients insist on working with you personally (even after you've explained your process) they're sensing the invisible 90% that isn't in your documentation.


**You don't actually follow your own framework.** This is the tell. If you find yourself going "off script" in most engagements, your framework describes what you think you do, not what you do.


**It doesn't capture your diagnostic process.** Most frameworks describe the intervention, what you do once you've figured out the problem. But your real expertise often lives in how you figure out the problem in the first place. That diagnostic ability is almost always missing from the framework.


Which is exactly why extraction works differently than creation.


> "You don't need another 'create your framework' course. You need a way to make your invisible expertise visible."


---


## How to Extract Your Signature Methodology


The solution isn't to think harder about your process. Self-reporting fails because you can't see your own patterns.


Extraction requires behavioral evidence.


### Three Extraction Methods


**The Transcript Method:** Record your actual client conversations. Then analyze them, not for what you remember doing, but for what you actually said and asked. Look for patterns: phrases you repeat without realizing, questions you always ask in a certain order, diagnostic moves you make automatically.


**The Deviation Analysis:** Take your current "framework" and track where you deviate from it in real engagements. Those deviations aren't failures to follow your process. They're evidence of your actual process. The framework you deviate toward is your real methodology.


**The Replacement Test:** Imagine training a replacement. Not the high-level "here are the steps" version, but the actual "here's how to handle this specific situation." What would you tell them? When would you tell them to ignore the standard approach? Those conditional decisions ("when X, do Y instead") are your invisible expertise.


Look for patterns that appear across multiple contexts. One-offs might be flukes. But if you see the same move showing up repeatedly? That's a framework worth naming.


---


## What Changes When You See Your Real Framework


The goal isn't to create something new. It's to see what's already there.


Your methodology exists. You've been using it for years. It's produced results, built your reputation, earned client trust. The only problem is it's operating below your conscious awareness.


You don't need to architect anything new. You need to extract what's already working.


Once you can see it, everything changes. You can articulate your difference. You can teach your approach. You can scale beyond just you.


But you can't package what you can't see. And you can't see it by thinking harder.


The framework isn't missing. It's buried in the transcripts of your last ten client calls, waiting for someone to dig it out.


---


## Next Steps


**Start here:**


1. **Record your next client call.** Audio is enough. Don't change how you normally work.


2. **Listen for your automatic questions.** What do you always ask in the first 10 minutes? That's your diagnostic process revealing itself.


3. **Track one deviation.** Next time you go "off script" from your documented process, write down what you did instead. That deviation is data.


You don't need to analyze everything at once. One pattern is enough to start seeing what's been invisible.


---


*Ready to see what you've been using unconsciously? Start with one client call recording. Listen for the questions you ask without thinking. The patterns are already there.*`,
    faqs: [
      {
        question: 'What is a signature framework?',
        answer: "A signature framework is a proprietary methodology that captures how an expert consistently produces results. Unlike generic processes, an authentic signature framework reflects the expert's real decision-making patterns, including the unconscious expertise developed through years of experience."
      },
      {
        question: 'Why do signature frameworks feel generic?',
        answer: 'Most signature frameworks feel generic because they\'re "architected" (consciously designed) rather than "extracted" (discovered from actual practice). Experts who try to create their framework from scratch often default to industry-standard steps rather than capturing their unique approach.'
      },
      {
        question: 'How long does it take to extract a signature framework?',
        answer: "Most experts can identify core patterns within 3-5 analyzed client interactions. The patterns are already there — you've been using them for years. The work isn't creating something new; it's recognizing what you're already doing consistently."
      },
      {
        question: 'Can someone else help me extract my framework?',
        answer: "Yes, and it's often more effective. You can't see your own patterns because they've become automatic. An outside observer (or AI analysis of your transcripts) can spot consistent behaviors you'd never notice through introspection alone."
      },
      {
        question: "What's the difference between tacit and explicit knowledge?",
        answer: "Explicit knowledge is what you can document and explain — roughly 10% of expert knowledge. Tacit knowledge is what you know but can't easily articulate — the other 90%. Your real methodology lives primarily in tacit knowledge, which is why 'create your framework' approaches fail for experienced experts."
      },
      {
        question: 'Do I need video or is audio enough for the Transcript Method?',
        answer: "Audio is enough. The patterns you're looking for are in what you say and ask, not body language. Transcripts work because they capture your actual words — the questions you ask, the phrases you repeat, the diagnostic moves you make without thinking."
      }
    ],
    relatedSlugs: ['neuroscience-invisible-expertise', 'the-parent-test']
  }
];

export const getInsightBySlug = (slug: string): InsightArticle | undefined => {
  return insights.find(i => i.slug === slug);
};

export const getFeaturedInsights = (): InsightArticle[] => {
  return insights.filter(i => i.featured);
};

export const getInsightsByCategory = (category: string): InsightArticle[] => {
  return insights.filter(i => i.category === category);
};

export const getAllInsightSlugs = (): string[] => {
  return insights.map(i => i.slug);
};

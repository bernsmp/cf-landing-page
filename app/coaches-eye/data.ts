import { Target, Eye, Scale, Network, Clock, Users, MessageCircle, Scissors } from 'lucide-react';

export type PatternCategory = 'sports' | 'military' | 'business';

export interface Pattern {
  id: number;
  title: string;
  icon: typeof Target;
  category: PatternCategory;
  coachName: string;
  coachTitle: string;
  quote: string;
  content: string[];
  callout: {
    label: string;
    text: string;
    image?: string;
  };
  howToDevelop: {
    intro: string;
    practices: string[];
  };
  prompt: {
    title: string;
    content: string;
  };
  image?: string;
}

export const categoryColors: Record<PatternCategory, string> = {
  sports: '#d4af37',      // Gold
  military: '#4a6fa5',    // Steel blue
  business: '#c9a227',    // Warm amber
};

export const categoryLabels: Record<PatternCategory, string> = {
  sports: 'SPORTS',
  military: 'MILITARY',
  business: 'BUSINESS',
};

export const patterns: Pattern[] = [
  {
    id: 1,
    title: 'The Zoom Lens',
    icon: Target,
    category: 'sports',
    coachName: 'Bill Belichick',
    coachTitle: 'New England Patriots',
    quote: "Bill sees the game like he's watching it from a helicopter and through a microscope at the same time.",
    content: [
      'The ability to toggle between micro-details and macro-context in real-time.',
      'Bill Belichick watches game film differently than other coaches. Everyone knows this. What they don\'t know is *how* he watches differently.',
      'Most coaches watch film looking for plays. Belichick watches film looking for patterns across plays. He notices that a left tackle shifts his weight slightly before a run play but not before a pass. He notices that a quarterback looks at his checkdown receiver on third-and-long but not on third-and-short.',
      'Then he zooms out.',
      'He asks: what does this pattern mean about how this team *thinks*? What does the weight shift reveal about the tackle\'s anticipation? What does the checkdown glance reveal about the quarterback\'s confidence in his line?',
      'Everyone saw the same film. Belichick saw the pattern beneath the film.',
    ],
    callout: {
      label: 'The 2001 Rams',
      text: 'Conventional wisdom said you couldn\'t stop "The Greatest Show on Turf." They averaged 31 points per game. Belichick\'s defensive game plan focused on disrupting the precise timing of Mike Martz\'s offense. The Patriots hit receivers at the line of scrimmage, forced Kurt Warner to hold the ball a fraction longer, and collapsed the pocket from unexpected angles. The Patriots won 20-17.',
      image: '/images/coaches-eye/greatestshowonturf.png',
    },
    howToDevelop: {
      intro: 'The Zoom Lens is a skill of **deliberate attention-shifting**. Most people get stuck at one altitude, either drowning in details or floating above them.',
      practices: [
        'When reviewing work (yours or others\'), force yourself to answer two questions: "What\'s happening at the pixel level?" and "What does this reveal about how this person/system thinks?"',
        'Set a timer. Spend 5 minutes on micro, then 5 minutes on macro. The transition is where insight lives.',
      ],
    },
    prompt: {
      title: 'The Zoom Lens Diagnostic',
      content: `I want to develop my ability to see patterns at multiple levels simultaneously.

Here's a situation/project/problem I'm currently working on:
[PASTE YOUR SITUATION]

Please analyze this at three distinct levels:

1. MICRO LEVEL: What specific details, behaviors, or data points am I likely overlooking? What would someone obsessively detail-oriented notice that I'm missing?

2. MACRO LEVEL: What does this situation reveal about the underlying system, mental model, or decision-making pattern at play? What would a strategist see when they zoom out?

3. THE CONNECTION: What insight emerges only when you hold both levels in mind simultaneously? What does the micro tell us about the macro, and vice versa?

Then give me one specific question I should be asking that I'm probably not asking.`,
    },
    image: '/images/coaches-eye/pattern-1.png',
  },
  {
    id: 2,
    title: 'The Deliberate Mirror',
    icon: Eye,
    category: 'sports',
    coachName: 'Gregg Popovich',
    coachTitle: 'San Antonio Spurs',
    quote: "Pop made me feel like I was watching film of myself, even when I was standing in front of him.",
    content: [
      'Reflecting people\'s behavior back to them in ways they can\'t achieve alone.',
      'Gregg Popovich has five NBA championships. He\'s also famous for his brutal honesty. There\'s a clip of him yanking a player during a timeout and saying exactly three words before walking away. Reporters love this stuff. Fiery coach! Tough love!',
      'But that\'s not what\'s actually happening.',
      'Popovich is running a pattern. And the pattern isn\'t "be honest" or "be tough." The pattern is: hold everyone to the same standard, regardless of status. As he put it: "If you\'re on Duncan\'s fanny or Parker, [other players] see it and they know it\'s fair and they want to play for you."',
      'When Popovich criticizes Tim Duncan (the greatest player in franchise history) with the same directness he\'d use with a rookie, something shifts in the room. The feedback stops being personal. It becomes about the work.',
    ],
    callout: {
      label: 'Why this works',
      text: 'Most feedback fails because it triggers identity defense. You tell someone they made a mistake, and their brain immediately starts explaining why it wasn\'t really a mistake. Popovich\'s approach bypasses this by making accountability universal and visible. The mirror reflects everyone equally.',
      image: '/images/coaches-eye/popvich_pattern.png',
    },
    howToDevelop: {
      intro: 'The Deliberate Mirror requires **separating observation from judgment**. Most people blend them together. "You made a bad decision" is judgment. "The guard took the contested three with 18 seconds on the shot clock while two teammates were open" is observation.',
      practices: [
        'When giving feedback, describe the behavior first without any evaluative language',
        'Let the person sit with the description before you add any assessment',
        'Apply the same standard publicly to your best performers as you do to everyone else',
      ],
    },
    prompt: {
      title: 'The Mirror Technique',
      content: `I need to give someone feedback, but I want to do it in a way that bypasses defensiveness and creates genuine reflection.

Here's the situation:
[DESCRIBE THE BEHAVIOR OR DECISION YOU NEED TO ADDRESS]

Please help me:

1. DESCRIBE OBJECTIVELY: Rewrite this situation as pure observation (what a camera would have recorded) with zero evaluative language. No "bad," "wrong," "should have," or implied criticism.

2. THE QUESTION: Give me one question I can ask that will help this person see their own behavior as if watching someone else do it.

3. THE STANDARD: Help me articulate the principle or standard at stake here in a way that applies to everyone equally, not just this person in this situation.

4. THE DELIVERY: How do I present this so the person feels I'm holding up a mirror, not swinging a hammer?`,
    },
    image: '/images/coaches-eye/pattern-2.png',
  },
  {
    id: 3,
    title: 'The Leading Edge',
    icon: Scale,
    category: 'sports',
    coachName: 'John Wooden',
    coachTitle: 'UCLA Basketball',
    quote: "You're not sleeping enough. Your left foot is dragging a quarter inch. You won't see it in your shot for two more days, but I see it now.",
    content: [
      'Sensing what\'s happening beneath performance before it shows up in results.',
      'John Wooden won 10 NCAA championships in 12 years. His practices were legendary for their precision. But here\'s the thing about Wooden that most people miss:',
      'He almost never watched the ball.',
      'During practices, while everyone else focused on whether shots went in, Wooden watched feet. He watched shoulders. He watched eyes. He was reading the invisible loads his players were carrying: fatigue patterns, confidence patterns, distraction patterns.',
      'Wooden famously started each season by teaching players how to put on their socks and tie their shoes. Properly. Slowly. With attention. Most people saw this as quirky attention to detail. It was actually diagnostic. How someone handled the boring fundamentals revealed their relationship with discipline itself.',
      'He also practiced without the ball. As he explained: "Without the basketball, players can neither score baskets nor grab rebounds. Without those distractions, they were better able to fully concentrate on what I was teaching."',
    ],
    callout: {
      label: 'The tell before the tell',
      text: 'Wooden would notice problems three days before they showed up in stats. A player\'s left foot dragging a quarter inch. A slight hesitation on the follow-through. These weren\'t performance issues yet. They were leading indicators of performance issues to come.',
      image: '/images/coaches-eye/wooden_pattern.png',
    },
    howToDevelop: {
      intro: 'The Leading Edge requires **reading leading indicators, not lagging ones**. Most people wait for results to tell them something is wrong. By then, it\'s too late.',
      practices: [
        'Before any important meeting or conversation, notice the physical tells: posture, energy, micro-expressions',
        'Ask yourself: "If I ignore what this person is saying and only watch how they\'re carrying themselves, what would I conclude?"',
        'Check your own invisible load: What are you carrying into this room that hasn\'t surfaced yet?',
      ],
    },
    prompt: {
      title: 'Reading the Leading Edge',
      content: `I want to get better at sensing what's happening beneath the surface, catching problems before they show up in results.

Here's a person or situation I'm trying to read:
[DESCRIBE THE PERSON, TEAM, OR SITUATION]

Help me identify:

1. LEADING INDICATORS: What are the early warning signs I should be watching for? What behaviors or signals typically precede problems in situations like this?

2. THE TELL BEFORE THE TELL: If something is off but hasn't surfaced yet, where would it show up first? What would I notice if I stopped watching outcomes and started watching process?

3. THE QUESTION THEY'RE NOT ASKING: Based on this situation, what might this person be dealing with that they haven't admitted to themselves yet?

4. MY BLIND SPOT: What invisible load might I be carrying into this situation that's affecting what I can see?`,
    },
    image: '/images/coaches-eye/pattern-3.png',
  },
  {
    id: 4,
    title: 'The Shared Consciousness',
    icon: Network,
    category: 'military',
    coachName: 'General Stanley McChrystal',
    coachTitle: 'Joint Special Operations Command',
    quote: "We dubbed this goal, this state of emergent, adaptive organizational intelligence, shared consciousness, and it became the cornerstone of our transformation.",
    content: [
      'Creating distributed intelligence where everyone operates with the same picture.',
      'In 2004, McChrystal took command of Joint Special Operations in Iraq. The most elite military force in history was losing. Not because they lacked skill or resources. Because they were too slow.',
      'Al-Qaeda in Iraq was a network. Decentralized. Adaptive. A strike team would capture an insurgent, send intel up the chain, wait for analysis, wait for approval, and by the time action came back down, the network had already adapted.',
      'McChrystal\'s insight: hierarchy couldn\'t keep pace with networks.',
      'So he rebuilt everything around one principle: shared consciousness. Every morning, 7,000 people across the world joined a two-hour video conference. Intelligence that used to take weeks to disseminate was shared in real-time. Everyone saw what leadership saw.',
      'Operations went from 10 raids per month to 300. Not because people worked harder. Because information moved faster. When everyone has the same picture, you don\'t need to wait for orders. You already know what to do.',
      'McChrystal described the philosophy: "Decentralize until it makes you uncomfortable, and it was right there, on the brink of instability, that we found our sweet spot."',
    ],
    callout: {
      label: 'The result',
      text: 'Operations went from 10 raids per month to 300. Not because people worked harder. Because information moved faster. When everyone has the same picture, you don\'t need to wait for orders.',
      image: '/images/coaches-eye/McChrystal _pattern.png',
    },
    howToDevelop: {
      intro: 'Shared Consciousness requires **radical transparency as default**. Most organizations hoard information like gold. McChrystal\'s insight was that information is more like milk. It spoils quickly if you don\'t use it.',
      practices: [
        'Default to sharing, not to protecting. Ask "Why shouldn\'t this person know this?" instead of "Why should they?"',
        'Create recurring rituals where everyone sees the full picture, not just their piece',
        'Make your own decision-making visible so others can act without waiting for you',
      ],
    },
    prompt: {
      title: 'Building Shared Consciousness',
      content: `I want to create better information flow so my team/organization can move faster and make better decisions without bottlenecks.

Here's my current situation:
[DESCRIBE YOUR TEAM, ORGANIZATION, OR PROJECT]

Help me design:

1. THE DAILY PICTURE: What information does everyone need to see regularly to make good decisions independently? What's the minimum viable "shared consciousness" for my context?

2. THE BOTTLENECKS: Where is information currently getting stuck? What decisions are waiting on approval that shouldn't need to?

3. THE RITUAL: What recurring meeting, communication, or system would ensure everyone has the same picture? How do I make transparency a habit, not an event?

4. THE DISCOMFORT TEST: McChrystal said to "decentralize until it makes you uncomfortable." What would I have to share or delegate that currently feels risky? Why does it feel risky?`,
    },
    image: '/images/coaches-eye/pattern-4.png',
  },
  {
    id: 5,
    title: 'The Long Game',
    icon: Clock,
    category: 'business',
    coachName: 'Indra Nooyi',
    coachTitle: 'Former CEO, PepsiCo',
    quote: "If all you want is the next quarter, I'm the wrong CEO. But if you want the next quarter-century, let's talk.",
    content: [
      'Operating on a different timescale than everyone around you.',
      'When Indra Nooyi became CEO of PepsiCo in 2006, Wall Street wanted one thing: keep the sugar and salt flowing. Quarterly earnings. Stock price. The usual.',
      'Nooyi saw something else. She saw the lawsuits coming. The regulatory pressure. The generational shift in how people thought about health. Not in the next quarter. In the next decade.',
      'So she did something that made zero sense to short-term thinkers: she started moving PepsiCo away from its most profitable products. "Performance with Purpose," she called it. Analysts hated it.',
      'The pattern: she was measuring success on a different clock.',
      'During her tenure, PepsiCo\'s annual net profit more than doubled, growing from $2.7 billion to $6.5 billion.',
      'But the detail that reveals her operating system: Nooyi wrote personal letters to the parents of her senior executives. Not emails to the executives. Letters to their parents, thanking them for raising such leaders. She wrote over 400 of them.',
      'As she explained: "It occurred to me that I had never thanked the parents of my executives for the gift of their child to PepsiCo."',
      'That\'s not a productivity hack. That\'s someone operating on a different timescale than everyone around them.',
    ],
    callout: {
      label: 'The tell',
      text: 'Nooyi would write letters to her executives\' parents. Not emails to the executives. Letters to their parents, thanking them for raising such leaders. That\'s someone operating on a different timescale than everyone around them.',
      image: '/images/coaches-eye/Nooyi_pattern.png',
    },
    howToDevelop: {
      intro: 'The Long Game requires **explicit timescale awareness**. Most people default to whatever timescale their environment imposes. Quarterly. Weekly. Daily. The Long Game is choosing your own.',
      practices: [
        'For any major decision, ask: "What timescale am I optimizing for? What would change if I doubled it?"',
        'Identify the decisions you\'re making for this quarter that will hurt you in five years',
        'Build relationships that have no immediate ROI. That\'s where Long Game leverage lives',
      ],
    },
    prompt: {
      title: 'The Timescale Shift',
      content: `I want to think more strategically by operating on a longer timescale than my environment is pushing me toward.

Here's a decision or situation I'm facing:
[DESCRIBE YOUR SITUATION]

Help me analyze this across multiple timescales:

1. THE DEFAULT TIMESCALE: What time horizon is my environment (boss, market, culture) implicitly pushing me toward? What would the "obvious" decision be on that timescale?

2. THE DOUBLED TIMESCALE: If I doubled the time horizon, what changes? What becomes important that wasn't before? What becomes irrelevant?

3. THE SECOND-ORDER EFFECTS: What decision would look smart this quarter but damage me in five years? What decision looks costly now but creates compounding value?

4. THE NOOYI TEST: What's something I could do that has zero immediate ROI but would build long-term leverage, trust, or positioning?`,
    },
    image: '/images/coaches-eye/pattern-5.png',
  },
  {
    id: 6,
    title: 'The Braintrust',
    icon: Users,
    category: 'business',
    coachName: 'Ed Catmull',
    coachTitle: 'Co-founder, Pixar',
    quote: "The Braintrust has no authority. The director does not have to follow any of the specific suggestions. After a Braintrust meeting, it is up to him or her to figure out how to address the feedback.",
    content: [
      'Creating conditions where truth can emerge without destroying the person hearing it.',
      'Every Pixar movie starts terrible. Toy Story. Finding Nemo. Inside Out. All of them were, in Catmull\'s words, rough early on.',
      'The Braintrust is how rough drafts become masterpieces. Directors present unfinished work to a room of peers. The feedback is brutal. Honest. Specific. And here is the key:',
      'The director has zero obligation to take any of it.',
      'This is the magic. When feedback comes with authority, people get defensive. They protect their work instead of improving it. When feedback comes without authority, it becomes pure information. Take it or leave it.',
      'Catmull separated the idea from the person. You can tear apart someone\'s work without tearing apart the human. But only if you structure the conversation correctly. Most organizations confuse honesty with cruelty. The Braintrust proves they\'re opposites.',
      'As Catmull wrote: "Candor is the key to collaborating effectively. Lack of candor leads to dysfunctional environments."',
    ],
    callout: {
      label: 'Why it works',
      text: 'When feedback comes with authority, people get defensive. They protect their work instead of improving it. When feedback comes without authority, it becomes pure information. The Braintrust separates the idea from the person. You can tear apart someone\'s work without tearing apart the human.',
      image: '/images/coaches-eye/ed_pattern.png',
    },
    howToDevelop: {
      intro: 'The Braintrust requires **structural honesty**: building systems that make candor safe. You can\'t just tell people to be honest. You have to remove the reasons they\'re not.',
      practices: [
        'Separate who gives feedback from who makes decisions',
        'Make it explicit: "You own this. I\'m giving you information, not instructions."',
        'Create recurring rituals for honest input, not ad-hoc moments that feel like ambushes',
      ],
    },
    prompt: {
      title: 'Designing Your Braintrust',
      content: `I want to create conditions where I can get genuinely honest feedback without defensiveness (mine or others').

Here's what I need feedback on:
[DESCRIBE YOUR PROJECT, IDEA, OR DECISION]

Help me design a feedback process:

1. THE RIGHT PEOPLE: Who should be in my Braintrust? What expertise and perspective do I need? Who will tell me the truth even when it's uncomfortable?

2. THE STRUCTURE: How do I set up the conversation so feedback feels like information, not judgment? What rules or framing would help?

3. THE SEPARATION: How do I make it clear that I own the final decision, so people feel free to be candid without feeling responsible for the outcome?

4. THE QUESTIONS: What specific questions should I ask to surface problems I'm too close to see?

5. THE AFTERMATH: How do I process the feedback without getting defensive, and how do I let people know their candor was valued even if I don't take their specific advice?`,
    },
    image: '/images/coaches-eye/pattern-6.png',
  },
  {
    id: 7,
    title: 'The Direct Line',
    icon: MessageCircle,
    category: 'business',
    coachName: 'Ursula Burns',
    coachTitle: 'Former CEO, Xerox',
    quote: "I don't understand what you just said. Can you say that again in English?",
    content: [
      'Cutting through corporate fog to the question everyone is avoiding.',
      'Ursula Burns rose from summer intern to CEO of Xerox. The first Black woman to run a Fortune 500 company. People love that story. What they miss is how she got there.',
      'Burns had a pattern. In meetings where everyone was nodding along to PowerPoint slides filled with jargon and hedged language, she would stop the room. "I don\'t understand what you just said." Not hostile. Just honest. And then she\'d wait.',
      'Most executives learn to speak in a dialect designed to obscure accountability. Burns refused to learn it. She asked the direct question. The one everyone was thinking but nobody would say.',
      'What\'s the real problem here? Not the presenting problem. The actual problem.',
    ],
    callout: {
      label: 'Why it works',
      text: 'Corporate speak exists to diffuse responsibility. When everyone\'s accountable, nobody is. Burns\' directness wasn\'t rudeness. It was clarity. She made it safe to say the uncomfortable thing by saying it first. The result: problems got named. Named problems get solved. Unnamed problems fester.',
      image: '/images/coaches-eye/ursala_pattern.png',
    },
    howToDevelop: {
      intro: 'The Direct Line requires **courage to name what others won\'t**. Most people in organizations learn to speak in code. Burns\' pattern was to cut through the code to the actual issue.',
      practices: [
        'When you don\'t understand something, say so immediately instead of nodding along',
        'Ask "What\'s the real problem here?" and wait through the uncomfortable silence',
        'Name the thing everyone is thinking but not saying. You\'ll often be thanked for it',
      ],
    },
    prompt: {
      title: 'The Direct Line Diagnostic',
      content: `I'm in a situation where I suspect there's a real issue hiding beneath the surface conversation.

Here's the context:
[DESCRIBE THE MEETING, PROJECT, OR CONVERSATION]

Help me cut through to what matters:

1. THE PRESENTING PROBLEM: What issue is officially being discussed? What language is being used?

2. THE ACTUAL PROBLEM: Based on this context, what's the real issue that people might be avoiding? What question would make the room uncomfortable?

3. THE DIRECT QUESTION: Give me one clear, non-hostile question I could ask that would surface the real issue. Something Burns might say.

4. THE ACCOUNTABILITY GAP: Who is responsible for what here? Where is responsibility being diffused or avoided?

5. THE NAMING: Help me articulate the unnamed thing in one clear sentence that I could say out loud.`,
    },
    image: '/images/coaches-eye/pattern-7.png',
  },
  {
    id: 8,
    title: 'The Essential Cut',
    icon: Scissors,
    category: 'business',
    coachName: 'Anne Mulcahy',
    coachTitle: 'Former CEO, Xerox',
    quote: "When I became CEO of Xerox 10 years ago, the company's situation was dire. Debt was mounting, the stock sinking and bankers were calling. People urged me to declare bankruptcy, but I felt personally responsible for tens of thousands of employees.",
    content: [
      'Seeing the essential core when everything is on fire.',
      'In 2001, Anne Mulcahy became CEO of Xerox. The company had $17 billion in debt. The SEC was investigating their accounting practices. The stock was collapsing. Every consultant said the same thing: file for Chapter 11.',
      'Mulcahy saw something they didn\'t.',
      'She didn\'t try to fix everything. She didn\'t launch twelve initiatives. She asked one question: what is the one thing this company does that no one else can do?',
      'She cut $1.7 billion in annual expenses. Closed businesses. Eliminated 25,000 jobs. But she never touched R&D.',
      '"The short-term victory would be avoiding financial bankruptcy," she later explained, "but the long-term result could have been a research drought."',
      'By 2003, Xerox was profitable again. By 2007, profits had reached $1.2 billion. The consultants who recommended bankruptcy were billing other clients.',
      'When Mulcahy was asked how she\'d define success, she gave an answer that dissatisfied the bankers: "When Xerox employees want their kids to work here, I will know that we\'ve been successful."',
    ],
    callout: {
      label: 'The pattern',
      text: 'Triage discipline: the ability to let things die so the essential can survive. Most people in crisis try to save everything. That\'s how you lose everything. Mulcahy had the cognitive discipline to let things die so the essential could survive.',
      image: '/images/coaches-eye/anne_pattern.png',
    },
    howToDevelop: {
      intro: 'The Essential Cut requires **triage discipline**: the ability to let things die so the essential can survive. Most people in crisis try to save everything. That\'s how you lose everything.',
      practices: [
        'Identify the one thing you do that creates disproportionate value. Protect that at all costs.',
        'When resources are constrained, ask: "What can I stop doing?" before asking "How do I do more with less?"',
        'Develop comfort with the pain of cutting. The alternative is worse.',
      ],
    },
    prompt: {
      title: 'Finding the Essential Core',
      content: `I'm facing a situation where I have more demands than resources. I need to make hard cuts without destroying what matters.

Here's my situation:
[DESCRIBE YOUR CONSTRAINTS AND COMPETING DEMANDS]

Help me think through:

1. THE ESSENTIAL CORE: What's the one thing I do (or my team/company does) that creates disproportionate value? What would be catastrophic to lose?

2. THE SACRED AND THE EXPENDABLE: What should be protected at all costs, even if it means letting other things die? What feels important but is actually expendable?

3. THE CUT LIST: What three things am I currently doing that I should stop? What would I lose if I stopped them, and can I survive that loss?

4. THE MULCAHY TEST: If I had to cut 30% of what I'm doing, what would remain? Is that the 30% I'd actually want to remain?

5. THE REBUILD: Once I've made the essential cut, what's the first thing I should invest in to start building back from a stronger position?`,
    },
    image: '/images/coaches-eye/pattern-8.png',
  },
];

export const setupContent = {
  intro: "Phil Jackson understood something that most people never will:",
  hook: "Michael Jordan didn't know what made Michael Jordan great.",
  body: [
    "Not really. Not in a way he could articulate, replicate, or teach. Jordan knew he was exceptional. He could feel it in his bones, in the way the game slowed down when he had the ball. But if you asked him to explain the cognitive pattern that let him read defenses three moves ahead? He'd talk about \"instinct\" and \"wanting it more.\"",
    "That's not an explanation. That's a feeling wearing a costume.",
    "Jackson saw something different. He saw a pattern Jordan was running automatically, a decision-making architecture that fired so fast Jordan experienced it as intuition rather than cognition. And Jackson's job wasn't to teach Jordan new skills.",
  ],
  keyInsight: "His job was to make the invisible visible.",
  conclusion: [
    "This is what separates good coaches from legendary ones. Good coaches improve technique. Legendary coaches extract patterns their players don't know they're running, name those patterns, and then build systems that leverage them.",
    "The Coach's Eye isn't about seeing talent. Everyone can see talent. The Coach's Eye is about seeing the cognitive fingerprint underneath the talent. The operating system beneath the performance.",
    "What follows are seven patterns from legendary leaders, and the prompts to help you develop each one.",
  ],
};

export const bridgeContent = {
  title: "The Pattern Beneath the Patterns",
  body: [
    "A basketball coach, a four-star general, and a Fortune 500 CEO walk into a room. They work in completely different domains. Different stakes. Different timescales. Different vocabularies.",
    "And yet: the patterns rhyme.",
    "Popovich's Deliberate Mirror and Catmull's Braintrust are solving the same problem: how do you give people honest feedback without triggering their defenses?",
    "McChrystal's Shared Consciousness and Belichick's Zoom Lens both come from the same insight: information that stays siloed becomes useless.",
    "Nooyi's Long Game and Mulcahy's Essential Cut both require the same discipline: ignoring the immediate pressure to serve the deeper need.",
    "The domain is the costume. The pattern is what's underneath.",
  ],
  keyInsight: "These patterns aren't magic. They're trainable.\nBut you have to see them first.",
};

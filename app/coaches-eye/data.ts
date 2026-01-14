import { Target, Eye, Scale, Network, Clock, MessageCircle, Scissors } from 'lucide-react';

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
  };
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
      'Bill Belichick watches game film differently than other coaches. Everyone knows this. What they don\'t know is how he watches differently.',
      'Most coaches watch film looking for plays. Belichick watches film looking for patterns across plays. He\'ll notice that a left tackle shifts his weight 0.3 seconds before a run play but not before a pass. He\'ll notice that a quarterback looks at his checkdown receiver on third-and-long but not on third-and-short.',
      'Then he zooms out.',
      'He asks: what does this pattern mean about how this team thinks? What does the weight shift reveal about the tackle\'s anticipation? What does the checkdown glance reveal about the quarterback\'s confidence in his line?',
      'Everyone saw the same film. Belichick saw the pattern beneath the film.',
    ],
    callout: {
      label: 'The 2001 Rams',
      text: 'Conventional wisdom said you couldn\'t stop "The Greatest Show on Turf." They averaged 31 points per game. Belichick saw that Kurt Warner held the ball 0.2 seconds longer when the defense disguised their coverage. Not a lot. Almost nothing. But enough. The Patriots won 20-17.',
    },
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
      'Reflecting players to themselves in ways they can\'t achieve alone.',
      'Gregg Popovich has five NBA championships. He\'s also famous for being brutal in his honesty. There\'s a clip of him yanking a player during a timeout and saying exactly three words before walking away. Reporters love this stuff. Fiery coach! Tough love!',
      'But that\'s not what\'s actually happening.',
      'Popovich is running a pattern. And the pattern isn\'t "be honest" or "be tough." The pattern is: show people their own behavior as if they were watching someone else do it.',
      'When Popovich criticizes a player, he doesn\'t say "you made a bad decision." He describes the decision in third person, almost like a play-by-play announcer. "The guard takes the contested three with 18 seconds on the shot clock while two teammates are open."',
      'Then he waits.',
      'He\'s holding up a mirror. The player has to see their own choice from outside themselves. They have to experience what Popovich saw.',
    ],
    callout: {
      label: 'Why this works',
      text: 'Most feedback fails because it triggers identity defense. You tell someone they made a mistake, and their brain immediately starts explaining why it wasn\'t really a mistake. The Deliberate Mirror bypasses this. You\'re not attacking the person. You\'re describing behavior as if it happened to someone else.',
    },
  },
  {
    id: 3,
    title: 'The Invisible Load',
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
      'Wooden once pulled Bill Walton aside three days before a game and told him his left foot was dragging a quarter inch. Walton was shocked. He\'d been struggling with insomnia but hadn\'t told anyone. His stats were fine. The issue hadn\'t surfaced yet.',
      'But Wooden saw the pattern that preceded the problem.',
    ],
    callout: {
      label: 'Pat Summitt\'s version',
      text: 'The legendary Tennessee coach called it "the tell before the tell." She\'d call players into her office before they knew something was off. One player described it: "Coach would say \'what\'s going on at home?\' and I\'d say \'nothing\' and she\'d just wait. And then I\'d realize, oh, something IS going on at home. I just hadn\'t admitted it to myself yet."',
    },
  },
  {
    id: 4,
    title: 'The Shared Consciousness',
    icon: Network,
    category: 'military',
    coachName: 'General Stanley McChrystal',
    coachTitle: 'Joint Special Operations Command',
    quote: "It takes a network to defeat a network. We had to become what we were fighting.",
    content: [
      'Creating distributed intelligence where everyone operates with the same picture.',
      'In 2004, McChrystal took command of Joint Special Operations in Iraq. The most elite military force in history was losing. Not because they lacked skill or resources. Because they were too slow.',
      'Al-Qaeda in Iraq was a network. Decentralized. Adaptive. A strike team would capture an insurgent, send intel up the chain, wait for analysis, wait for approval, and by the time action came back down... the network had already adapted.',
      'McChrystal\'s insight: hierarchy couldn\'t keep pace with networks.',
      'So he rebuilt everything around one principle: shared consciousness. Every morning, 7,000 people across the world joined a video call. Intelligence that used to take weeks to disseminate was shared in real-time. Everyone saw what leadership saw.',
    ],
    callout: {
      label: 'The result',
      text: 'Operations went from 10 raids per month to 300. Not because people worked harder. Because information moved faster. When everyone has the same picture, you don\'t need to wait for orders. You already know what to do.',
    },
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
      'Here is the pattern: she was measuring success on a different clock.',
    ],
    callout: {
      label: 'The tell',
      text: 'Nooyi would write letters to her executives\' parents. Not emails to the executives. Letters to their parents, thanking them for raising such leaders. That\'s not a productivity hack. That\'s someone operating on a different timescale than everyone around them.',
    },
  },
  {
    id: 6,
    title: 'The Braintrust',
    icon: MessageCircle,
    category: 'business',
    coachName: 'Ed Catmull',
    coachTitle: 'Co-founder, Pixar',
    quote: "Candor isn't cruel. It's kind. What's cruel is letting someone walk off a cliff when you could have warned them.",
    content: [
      'Creating conditions where truth can emerge without destroying the person hearing it.',
      'Every Pixar movie starts terrible. This is the part that surprised me. Toy Story. Finding Nemo. Inside Out. All of them were, in Catmull\'s words, "ugly babies."',
      'The Braintrust is how ugly babies become masterpieces. Directors present unfinished work to a room of peers. The feedback is brutal. Honest. Specific. And here is the key:',
      'The director has zero obligation to take any of it.',
      'This is the magic. When feedback comes with authority, people get defensive. They protect their work instead of improving it. When feedback comes without authority, it becomes pure information. Take it or leave it.',
    ],
    callout: {
      label: 'The insight',
      text: 'Catmull separated the idea from the person. You can tear apart someone\'s work without tearing apart the human. But only if you structure the conversation correctly. Most organizations confuse honesty with cruelty. The Braintrust proves they\'re opposites.',
    },
  },
  {
    id: 7,
    title: 'The Essential Cut',
    icon: Scissors,
    category: 'business',
    coachName: 'Anne Mulcahy',
    coachTitle: 'Former CEO, Xerox',
    quote: "When you're drowning, you don't try to swim in every direction. You pick one direction and swim like hell.",
    content: [
      'Seeing the essential core when everything is on fire.',
      'In 2000, Anne Mulcahy became CEO of Xerox. The company was $17 billion in debt. Six months from bankruptcy. The SEC was investigating their accounting. Every consultant said the same thing: file for Chapter 11.',
      'Mulcahy saw something they didn\'t.',
      'She didn\'t try to fix everything. She didn\'t launch twelve initiatives. She asked one question: what is the one thing this company does that no one else can do? The answer was enterprise printing and document services. Everything else was noise.',
      'She cut $2.5 billion in expenses. Closed businesses. Sold assets. But she never touched the core.',
    ],
    callout: {
      label: 'The pattern',
      text: 'Triage thinking. When the stakes are existential, most people panic and try to save everything. Mulcahy had the cognitive discipline to let things die so the essential could survive. By 2006, Xerox was profitable again. The consultants who recommended bankruptcy were billing other clients.',
    },
  },
];

export const setupContent = {
  intro: "Here is something Phil Jackson understood that most people never will:",
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
  ],
};

export const bridgeContent = {
  title: "The Pattern Beneath the Domain",
  body: [
    "Here is the part I find fascinating.",
    "A basketball coach, a four-star general, and a Fortune 500 CEO walk into a room. They work in completely different domains. Different stakes. Different timescales. Different vocabularies.",
    "And yet: the patterns rhyme.",
    "Popovich's Deliberate Mirror and Catmull's Braintrust are solving the same problem: how do you give people honest feedback without triggering their defenses? McChrystal's Shared Consciousness and Belichick's Zoom Lens both come from the same insight: information that stays siloed becomes useless.",
    "The domain is the costume. The pattern is what's underneath.",
  ],
  keyInsight: "These patterns aren't magic. They're trainable. But you have to see them first.",
  closer: "That's the whole game.",
};

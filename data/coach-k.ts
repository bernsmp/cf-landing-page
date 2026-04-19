// ============================================================
// Coach K Cognitive Fingerprint - Data Layer
// Populated from CF analysis completed 2026-04-18
// Source: 8 transcripts, 36,984 words, 327 indicators
// ============================================================

export interface CoachKProfile {
  name: string;
  title: string;
  executiveSummary: string;
  coreDiscovery: string;
  stats: {
    wins: number;
    championships: number;
    nbaPicks: number;
    seasons: number;
    transcriptsAnalyzed: number;
    wordsAnalyzed: number;
  };
}

export interface Dimension {
  name: string;
  definition: string;
  percentage: number;
  description: string;
  color: string;
  evidence: string[];
}

export interface SignaturePattern {
  id: number;
  name: string;
  driveScore: number;
  dimension: string;
  keyInsight: string;
  mechanism: string;
  whyItWorks: string;
  whyCantSeeIt: string;
  underlyingBelief: string;
  evidenceChain: string[];
  coachKQuote: string;
}

export interface Comparison {
  id: number;
  context: string;
  defaultOutput: string;
  expertOutput: string;
  gapExplanation: string[];
  highlightPhrases: string[];
}

export interface BlindSpot {
  id: number;
  title: string;
  description: string;
  evidence: string[];
  eliminationStrategy: string;
}

export interface PatternDynamic {
  type: "combination" | "interference";
  patternA: string;
  patternB: string;
  effect: string;
}

export interface VocabularyCategory {
  category: string;
  words: { word: string; count: number }[];
}

export interface Story {
  id: number;
  title: string;
  description: string;
  appearsIn: string[];
  whatItReveals: string;
  quote: string;
  video?: {
    youtubeId: string;
    startSeconds: number;
    label: string;
  };
}

// ============================================================
// REAL DATA - from CF analysis
// ============================================================

export const profile: CoachKProfile = {
  name: "Mike Krzyzewski",
  title: "Head Coach, Duke University Men\u2019s Basketball (1980\u20132022)",
  executiveSummary:
    "Coach K leads through engineered identity experiences. His cognitive architecture is a four-part cycle: he feels his way to decisions, manufactures those same felt experiences in others, dissolves the boundary between person and purpose, and sustains it through a choreographed ownership sequence, all filtered through a character assessment he has never been able to define.",
  coreDiscovery:
    "At the Basketball Hall of Fame, his induction speech contains zero basketball. No games, no plays, no championships, no opponents. 100% people, 0% sport. When he strips everything to its essence, basketball doesn\u2019t make the cut. Only people do.",
  stats: {
    wins: 1202,
    championships: 5,
    nbaPicks: 68,
    seasons: 42,
    transcriptsAnalyzed: 8,
    wordsAnalyzed: 36984,
  },
};

export const dimensions: Dimension[] = [
  {
    name: "Metacognitive",
    definition: "Beliefs, mental models, and identity structures... what someone thinks about how they think",
    percentage: 30,
    description:
      "His beliefs, mental models, and identity structures are his most distinctive dimension. He operates through convictions about identity, feeling, and collective experience, not through techniques or strategy. This dominance is the signature of the analysis.",
    color: "#003087",
    evidence: [
      "\u201COwnership equals culture\u201D. Stated as mathematical truth, never defended",
      "\u201CI believe in you\u201D ranked above \u201CI love you\u201D. Belief is more powerful than love",
      "\u201CWe\u2019re always becoming who we are\u201D. Identity as process, not state",
    ],
  },
  {
    name: "Conditional",
    definition: "Decision triggers... the specific conditions that activate decisions and responses",
    percentage: 26,
    description:
      "His decision triggers are overwhelmingly somatic rather than analytical. He chose Duke by walking around campus. He knew he wouldn\u2019t be fired because he never FELT he would be. His crisis framework (ABPE) processes emotion fast, then executes.",
    color: "#1a56b0",
    evidence: [
      "Chose Duke based on a walk and getting chills, not by analyzing the offer",
      "Daughter bullied at school: immediate instinct was to arm, not rescue (Duke sweatshirt)",
      "WHAT never changes, HOW always changes. Values immutable, delivery adaptive",
    ],
  },
  {
    name: "Procedural",
    definition: "Unconscious sequences... the steps and processes executed automatically, without thinking",
    percentage: 21,
    description:
      "His procedures are the most systematized of any subject analyzed. The Ownership Protocol has identifiable steps replicating across college, national team, and speeches. The Emotional Engineering has scheduled, timed, sequenced interventions.",
    color: "#2563eb",
    evidence: [
      "Team USA ownership sequence: gold medal \u2192 identity declaration \u2192 standards meeting \u2192 uniforms on beds \u2192 \u201CBe 16\u201D",
      "Ellis Island seven-step emotional escalation choreography",
      "Five behavioral checkpoints in recruiting: teammate interaction, empathy, eye contact, teachers, parents",
    ],
  },
  {
    name: "Declarative",
    definition: "Conscious knowledge... facts, frameworks, and principles they can state explicitly",
    percentage: 21,
    description:
      "Slightly high for a CF analysis, expected for a public figure who teaches frameworks consciously. His seven-value framework appears in the same order across multiple transcripts, encoded in procedural memory.",
    color: "#3b82f6",
    evidence: [
      "Seven values in identical order across transcripts: Integrity, Respect, Courage, Selfless Service, Duty, Trust, Loyalty",
      "ABPE crisis framework: Attitude, Belief, Preparation, Execution",
      "\u201CThe difficult is easy. The impossible takes a little bit longer.\u201D. Stored mantras from other groups",
    ],
  },
];

export const signaturePatterns: SignaturePattern[] = [
  {
    id: 1,
    name: "The Good People Filter",
    driveScore: 23,
    dimension: "Metacognitive",
    keyInsight:
      "After 8 transcripts and 37,000 words, he has never defined what \u201Cgood\u201D means. His most important selection criterion is felt, not reasoned. The absence of definition IS the finding.",
    mechanism:
      "He encounters a new person, runs a multi-channel behavioral scan (teammate interactions, eye contact, parent dynamics, teacher reports), arrives at a felt judgment, and acts on it with total conviction, despite being unable to articulate the criteria.",
    whyItWorks:
      "The filter is the gatekeeper for the entire system. When it works, the Ownership Protocol works, the Identity Fusion works, the Emotional Engineering works. Every championship team started with this filter.",
    whyCantSeeIt:
      "He experiences \u201Cgood people\u201D as self-evident. A category so obvious it doesn\u2019t need definition. The filter operates in the same register as his Feel-First Architecture: somatic judgment, not conscious criteria. He FEELS who is good the same way he felt Duke was right by walking around campus.",
    underlyingBelief:
      "Character is observable but not teachable. You select for it; you don\u2019t develop it. Underneath that: \u201Cgood\u201D is an empathic category, not a moral one. Good people are those capable of feeling someone else\u2019s situation as their own.",
    evidenceChain: [
      "\u201CWe recruited talent with character. We did not recruit talented characters.\u201D (T01)",
      "\u201CI watched how they interacted with their teammates, got reports from their teachers, and I always looked at how they interacted with their parents.\u201D (T02)",
      "Mother Emily\u2019s bus metaphor: \u201CMake sure that you only let good people on it.\u201D (T05, T08)",
      "Five behavioral checkpoints in recruiting revealed in T04. An unconscious scanning protocol",
      "\u201CPeople with character. And people who want to make this school better.\u201D (T08 (most distilled definition across all 8))",
    ],
    coachKQuote:
      "There\u2019s so many good people out there. Part of doing this is to make sure you keep doing things with good people.",
  },
  {
    id: 2,
    name: "The Identity Fusion",
    driveScore: 23,
    dimension: "Metacognitive",
    keyInsight:
      "He performs an identity operation, not bond-building. \u201CYou ARE Duke Basketball\u201D dissolves the boundary between person and purpose. The distinction between representing something and BEING something is his central leadership move.",
    mechanism:
      "He identifies the purpose, explicitly states the identity shift (\u201Cyou are NOT playing FOR. You ARE\u201D), removes layers of separation, creates physical and emotional anchors, and maintains fusion through collective pronouns and shared rituals.",
    whyItWorks:
      "Allegiance is fragile. You can lose someone\u2019s loyalty through a bad season. But identity is permanent. Once they ARE Duke Basketball, the commitment becomes self-sustaining because it\u2019s no longer a choice. It\u2019s who they are.",
    whyCantSeeIt:
      "He thinks he\u2019s inspiring people. He\u2019s actually performing an identity operation, dissolving the psychological boundary between person and purpose. He believes this is what all great leaders do. It isn\u2019t. Most leaders create allegiance. He creates identity merger.",
    underlyingBelief:
      "Allegiance is fragile but identity is permanent. You can stop playing FOR something, but you can\u2019t stop BEING something. Once they ARE it, the commitment self-sustains.",
    evidenceChain: [
      "\u201CYou are not playing for the United States\u2026 you ARE USA basketball.\u201D (T01 (identical phrasing in T02))",
      "\u201CYou don\u2019t work for Duke Basketball. You are Duke Basketball.\u201D (T02)",
      "\u201CI wasn\u2019t worthy to be the coach anymore\u201D (T04 (coaching below standard is an identity violation, not a performance issue))",
      "\u201CI can\u2019t tell you how I feel. I can only tell you how I feel about us.\u201D (T07 (cannot access individual feeling))",
    ],
    coachKQuote:
      "You are not playing for the United States. You ARE United States basketball.",
  },
  {
    id: 3,
    name: "The Feel-First Architecture",
    driveScore: 22,
    dimension: "Metacognitive / Conditional",
    keyInsight:
      "This is NOT about being \u201Cemotional.\u201D It\u2019s about running a fundamentally different cognitive architecture: one where the body\u2019s signals are treated as higher-fidelity intelligence than analytical reasoning. His burnout was the loss of FEELING, not exhaustion.",
    mechanism:
      "A high-stakes decision presents itself. Instead of analyzing options, he attends to physical sensation: chills, gut feeling, emotional resonance. The somatic signal arrives before (and often overrides) the analytical assessment. He acts on the feeling with high confidence.",
    whyItWorks:
      "His somatic channel operates at a resolution and speed that is genuinely unusual. When he walks around a campus and knows within minutes that it\u2019s right, he\u2019s processing environmental data through a channel most people don\u2019t trust or can\u2019t access.",
    whyCantSeeIt:
      "He\u2019s named this himself: \u201CFind your heart\u201D. But doesn\u2019t realize it\u2019s not a philosophy he chose. It\u2019s his cognitive architecture. He can\u2019t NOT make decisions this way. His advice, \u201Cfollow your heart\u201D. Assumes everyone has access to this channel. For many people, it isn\u2019t accessible at the same resolution.",
    underlyingBelief:
      "The body knows before the mind. Truth is experienced, not concluded. The heart is a literal intelligence organ that processes reality at a deeper level than reason.",
    evidenceChain: [
      "\u201CWhen I walked around Duke on my own\u2026 I said, \u2018This is a special place.\u2019\u201D (T02 (career\u2019s biggest decision made by walking and feeling))",
      "\u201CNot just because. You got to feel it, man.\u201D (T04 (feeling as causal mechanism))",
      "\u201CI couldn\u2019t feel anything.\u201D (T05 (burnout defined as feeling-loss, not exhaustion))",
      "\u201CWhen we won a game that we weren\u2019t worthy of winning, I felt we lost.\u201D (T06)",
      "\u201CKnowledge is power, but ONLY if it hits your heart.\u201D (T08)",
    ],
    coachKQuote:
      "It\u2019s important to hear and see. But you have to learn how to feel. And when you feel it, it goes here.",
  },
  {
    id: 4,
    name: "The Ownership Protocol",
    driveScore: 23,
    dimension: "Procedural / Conditional",
    keyInsight:
      "The concept of team ownership is widely known. The specific SEQUENCE (the choreography) is not in any book. He runs the same precise steps across college, national team, and public speaking. Each retelling reveals MORE steps. The procedural memory is deeper than his conscious recall.",
    mechanism:
      "Establish shared identity first \u2192 Seed exactly two standards \u2192 Open for team input \u2192 Create physical anchors (uniforms on beds) \u2192 Schedule emotional experiences (Wounded Warriors timed two days after arrival) \u2192 Let the protocol compound.",
    whyItWorks:
      "People only commit to what they create. The protocol doesn\u2019t tell them what to believe. It creates conditions where they generate their own standards, their own commitment, their own identity. The leader provides the container; the team fills it.",
    whyCantSeeIt:
      "He thinks he \u201Clets them own it.\u201D He doesn\u2019t realize he ENGINEERS the conditions through a specific sequence. Each time he tells the Team USA story, he reveals additional steps. More than he consciously remembered previously. The procedural memory contains more steps than his storytelling memory can access in a single telling.",
    underlyingBelief:
      "People only commit to what they create. Instruction breeds compliance; ownership breeds devotion. He treats this as a law of nature, as obvious as gravity.",
    evidenceChain: [
      "\u201COur first meeting, we had like a standards meeting\u2026 they all came up with ideas.\u201D (T01)",
      "\u201COwnership equals culture.\u201D (T01)",
      "Ellis Island seven-step emotional escalation described in T04. Most detailed procedural sequence in the dataset",
      "Commencement speech (T08): he ran the Ownership Protocol on 10,000 graduates",
    ],
    coachKQuote:
      "Ownership equals culture. You have to have ownership or you won\u2019t have a good culture.",
  },
  {
    id: 5,
    name: "The Emotional Engineering",
    driveScore: 21,
    dimension: "Procedural / Metacognitive",
    keyInsight:
      "The public knows he\u2019s a \u201Cgreat motivator.\u201D The CF reveals the SYSTEM: scheduled interventions, timed escalations, designed artifacts, and conscious embellishment. He doesn\u2019t happen to create emotional moments. He MANUFACTURES them with replicable sequences.",
    mechanism:
      "Identify the emotional target state \u2192 Select delivery vehicle (experience, not lecture) \u2192 Sequence for escalation (humor before gravity) \u2192 Time precisely (Wounded Warriors two days after arrival, Arlington on the calendar) \u2192 Allow response without directing it \u2192 Anchor emotion to mission.",
    whyItWorks:
      "This is the BRIDGE pattern connecting Feel-First Architecture to Ownership Protocol. He feels as his primary channel, then engineers feeling in others, which produces the ownership that builds culture. Remove this bridge and the other patterns can\u2019t connect.",
    whyCantSeeIt:
      "He has a term for it: \u201Cfeel moments\u201D. So he\u2019s aware of the concept. But he doesn\u2019t realize the degree of systematization. He SCHEDULES emotional experiences on a calendar. He TIME interventions to specific days. He openly claims \u201Cthe license to embellish\u201D. Manufacturing emotional truth over factual precision.",
    underlyingBelief:
      "Manufactured experiences can produce genuine transformation. The emotional truth of a story is more important than its factual precision. \u201CManufactured, but it\u2019s a beautiful story, man\u201D. Manufactured and beautiful are not contradictions.",
    evidenceChain: [
      "\u201CWe tried to give them feel moments, not just hear and see.\u201D (T02)",
      "Ellis Island seven-step choreography: arrive \u2192 museum \u2192 heritage \u2192 tour \u2192 Liberty Island \u2192 silence \u2192 return to message (T04)",
      "\u201CAs a leader, you have the license to embellish.\u201D (T04)",
      "HoF speech (T07): every structural choice serves an emotional function. The speech IS an engineered experience",
    ],
    coachKQuote:
      "We tried to give them feel moments, not just hear and see. And when you feel it, it goes here.",
  },
  {
    id: 6,
    name: "The Collective Recovery",
    driveScore: 25,
    dimension: "Metacognitive / Procedural",
    keyInsight:
      "Known publicly as \u201Cteam-first philosophy.\u201D The CF reveals the autobiographical origin: his 1994 burnout happened because he DID face it alone. The bicycle wheel transformation, his wife\u2019s ultimatum, daily psychiatric work. \u201CDon\u2019t get up alone\u201D is scar tissue, not philosophy.",
    mechanism:
      "Adversity occurs \u2192 Immediately check: is anyone recovering alone? \u2192 Intervene to ensure collective processing \u2192 Form or invoke a team \u2192 Process recovery collectively. Shared responsibility, shared emotion, shared forward movement.",
    whyItWorks:
      "The bicycle wheel metaphor tells the full story: pre-burnout, he was the hub through which all spokes passed. When he collapsed, the wheel collapsed. Post-burnout, he rebuilt with distributed connections so no single failure point could bring the system down.",
    whyCantSeeIt:
      "He thinks this is wisdom he acquired through experience. He doesn\u2019t realize it\u2019s wound speaking. The 1994 burnout happened because he violated this very principle. The concept of individual resilience (the bootstrap narrative) doesn\u2019t exist in his mental model. He\u2019s replaced it entirely with collective resilience.",
    underlyingBelief:
      "Aloneness IS defeat. Individual strength is a liability that creates fragility. This contradicts the dominant American mythology of the lone hero.",
    evidenceChain: [
      "\u201CDon\u2019t get up alone. Try to form a team.\u201D (T01 (first substantive thing said, unprompted))",
      "\u201CI was a leader like ... if it was a bicycle wheel, and the spokes all went through me, and when I was gone, the whole wheel collapsed.\u201D (T01)",
      "Burnout recovery: daily work with psychiatrist Keith Brody for four months (T05)",
      "Tom Butters refusing his resignation: \u201CYou\u2019re my coach.\u201D (T05)",
    ],
    coachKQuote:
      "Don\u2019t get up alone. Try to form a team.",
  },
  {
    id: 7,
    name: "The Belief Bridge",
    driveScore: 25,
    dimension: "Metacognitive / Conditional",
    keyInsight:
      "Completely novel, not in any book, article, or public analysis. Every major transformation in his life required someone else\u2019s belief FIRST. The causal direction is always external \u2192 internal: others believe, THEN he acts.",
    mechanism:
      "Crossroad or crisis appears \u2192 He feels uncertainty \u2192 Someone else provides belief (not encouragement, not advice, BELIEF) \u2192 Their belief bridges the gap between his doubt and his action \u2192 He commits fully \u2192 He credits the believer as the catalyst.",
    whyItWorks:
      "Belief is the activation energy for his entire operating system. Without external belief, the system stays inert. With it, everything flows. He ranks \u201CI believe in you\u201D above \u201CI love you\u201D. Belief is his highest-value resource.",
    whyCantSeeIt:
      "He experiences each instance as a unique relationship event: Butters\u2019 loyalty, his parents\u2019 wisdom, Newell\u2019s mentorship. He doesn\u2019t see the PATTERN: that every transformation shares the same structure. He credits each person individually without recognizing the recurring architecture.",
    underlyingBelief:
      "\u201CI believe in you\u201D is more powerful than \u201CI love you.\u201D Love is \u201Ccool, especially if you mean it\u201D (qualified). Belief is \u201Cfour of the most powerful words on this planet\u201D (unqualified). He values being believed in more than being loved.",
    evidenceChain: [
      "\u201CWith opportunities don\u2019t always come belief.\u201D (T02 (separates opportunity from belief as distinct resources))",
      "Parents forcing West Point, \u201Cbest decision I never made\u201D (T05)",
      "Butters: \u201CYou\u2019re my coach\u201D. Blocked his resignation during burnout (T05)",
      "Newell/Iba: \u201CDo it your way\u201D. Permission to diverge from Knight (T05)",
      "\u201CI believe in you\u201D ranked above \u201CI love you\u201D (T08) commencement",
    ],
    coachKQuote:
      "I believe in you. Those are four of the most powerful words on this planet.",
  },
];

export const comparisons: Comparison[] = [
  {
    id: 1,
    context: "Summarizing Coach K\u2019s leadership philosophy",
    defaultOutput:
      "Coach K believes in team-first leadership, the next-play mentality, recruiting character over talent, and establishing standards not rules. He values hard work, preparation, and building relationships. His leadership style emphasizes trust, accountability, and adapting to different generations. He is known for his emotional passion, his loyalty to Duke, and his ability to build championship cultures.",
    expertOutput:
      "Coach K runs a pre-linguistic character filter he can\u2019t define, makes his biggest decisions through somatic knowledge not analysis, systematically engineers emotional experiences using replicable multi-step sequences, and performs identity dissolution operations that convert allegiance into identity. His leadership system requires external belief as activation energy, was fundamentally rebuilt after a burnout he faced alone, and operates through a four-part cycle (feel, engineer feeling, fuse identity, create ownership) that he deploys automatically but cannot fully articulate.",
    gapExplanation: [
      "DEFAULT restates his books: \u201Cnext-play mentality,\u201D \u201Cstandards not rules,\u201D \u201Crecruit character.\u201D These are his own talking points, not discoveries.",
      "EXPERT maps the operating system underneath: pre-linguistic filters, somatic decision-making, emotional engineering systems, identity dissolution operations.",
      "DEFAULT says what Coach K would say about himself. EXPERT reveals what Coach K does without knowing he\u2019s doing it.",
      "The most striking gap: DEFAULT would never mention the Belief Bridge. That every transformation requires external belief first. It\u2019s invisible in his public narrative.",
    ],
    highlightPhrases: [
      "pre-linguistic character filter he can\u2019t define",
      "somatic knowledge not analysis",
      "identity dissolution operations",
      "requires external belief as activation energy",
    ],
  },
  {
    id: 2,
    context: "Explaining his Hall of Fame induction speech",
    defaultOutput:
      "In his 2018 Hall of Fame speech, Coach K delivered an emotional address thanking the people who shaped his career, from his mentor Bob Knight to his wife Mickie. Known for his emphasis on relationships over records, Coach K used the platform to honor his players, coaches, and family, reflecting his belief that basketball is ultimately about the people, not the trophies.",
    expertOutput:
      "His Hall of Fame speech contains zero basketball. No games. No plays. No championships. No opponents. No records. Not a single basketball term in a Basketball Hall of Fame speech. He structured it as a train journey. His parents in the engine, his wife in the front car, players made to stand so the audience could feel their presence. He could not access individual feeling: \u201CI can\u2019t tell you how I feel. I can only tell you how I feel about us.\u201D Even at his most individual moment of recognition, the Identity Fusion pattern prevented him from experiencing it alone.",
    gapExplanation: [
      "DEFAULT recognizes the speech was emotional and people-focused. EXPERT reveals the ABSENCE of basketball as the most extreme data point.",
      "DEFAULT says \u201Che used the platform to honor people.\u201D EXPERT shows the speech\u2019s STRUCTURE is an engineered emotional experience with deliberate architecture.",
      "DEFAULT misses the most revealing sentence: \u201CI can\u2019t tell you how I feel\u201D. He literally cannot access individual feeling. The Identity Fusion is structural, not rhetorical.",
      "The train metaphor isn\u2019t decoration. It IS his forward-only orientation made physical: you don\u2019t arrive, you keep moving. His last words: \u201CWe\u2019re going to keep the train going.\u201D",
    ],
    highlightPhrases: [
      "zero basketball",
      "I can\u2019t tell you how I feel",
      "Identity Fusion pattern prevented him from experiencing it alone",
    ],
  },
  {
    id: 3,
    context: "Describing how he built Team USA culture",
    defaultOutput:
      "Coach K transformed Team USA basketball by bringing his Duke culture-building approach to the national team. He emphasized shared values, mutual accountability, and putting team goals above individual egos. By creating a family-like environment and connecting players to the military, he helped NBA superstars buy into a collective mission, resulting in three consecutive Olympic gold medals.",
    expertOutput:
      "He ran a seven-day emotional engineering sequence. Day one: uniforms laid on hotel beds before any meeting. The environment speaks before the leader. Day one meeting: \u201CYou are not playing for the United States. You ARE United States basketball.\u201D He seeded exactly two standards, then opened for player input. Day three: Wounded Warriors. Timed precisely, not first day (too early) and not last (too late). Arlington visits scheduled on the calendar. Ellis Island as a seven-step escalation: humor to gravity to silence. When Jerry Colangelo said \u201Cleave your egos at the door,\u201D K publicly corrected him: \u201CBring your egos in. Why would you want anybody who\u2019s less of who they are?\u201D The result: Kobe broke down crying and sought K out. The protocol created conditions where the most dominant competitor in basketball came to him voluntarily.",
    gapExplanation: [
      "DEFAULT uses generic leadership language: \u201Cshared values,\u201D \u201Cmutual accountability,\u201D \u201Cfamily-like environment.\u201D Any coaching profile could say this.",
      "EXPERT reveals the CHOREOGRAPHY: specific days, specific timing, specific sequences. Uniforms before meetings. Wounded Warriors on day three, not day one. Ellis Island in seven steps.",
      "DEFAULT says he got players to \u201Cbuy in.\u201D EXPERT shows the Ownership Protocol in action. Seed two, open for input, let them generate, anchor with emotional experience.",
      "The Colangelo correction is invisible in DEFAULT: K publicly contradicted his boss because ego IS identity in his model. Eliminating ego = fragmenting the person.",
    ],
    highlightPhrases: [
      "seven-day emotional engineering sequence",
      "uniforms laid on hotel beds before any meeting",
      "Bring your egos in",
      "Kobe broke down crying and sought K out",
    ],
  },
];

export const blindSpots: BlindSpot[] = [
  {
    id: 1,
    title: "The Undefined Filter",
    description:
      "His most important selection criterion (the one that governs EVERYTHING downstream) is felt, not reasoned. After 8 transcripts and 37,000 words, \u201Cgood\u201D remains a felt judgment with only partial verbal approximation.",
    evidence: [
      "\u201CGood people\u201D appears in 8/8 transcripts but is never defined",
      "Partial definition only emerged in T07\u2013T08: empathic co-experience + contribution orientation",
      "\u201CCharacter\u201D itself remains undefined. A recursive loop where good people have character and character is what good people have",
      "The five behavioral checkpoints (T04) are operational but the integration (the felt judgment) can\u2019t be articulated",
    ],
    eliminationStrategy:
      "The five behavioral checkpoints (teammate interaction on success, failure empathy, eye contact, teacher reports, parent dynamics) are the transferable version. Name them. Train on them. Accept that the integration layer remains an art. But the partial articulation is better than no articulation.",
  },
  {
    id: 2,
    title: "Forward-Only as Avoidance",
    description:
      "\u201CNext play\u201D is his most famous concept. But Memory as Fuel shows he DOES retain setbacks: \u201CI try not to hold a grudge, but it doesn\u2019t go away.\u201D The forward orientation may be a public performance concealing a private processing system he doesn\u2019t fully acknowledge.",
    evidence: [
      "\u201CNo rear-view mirror\u201D stated in multiple transcripts. His most public philosophy",
      "\u201CHere\u2019s to never forgetting\u201D (T03 (physically pushed a hand down after a devastating loss))",
      "\u201CI try not to hold a grudge, but it doesn\u2019t go away\u201D (T05 (admits the memory system is non-selective))",
      "He claims \u201Cnext page\u201D while carrying everything. The tension is never resolved",
    ],
    eliminationStrategy:
      "Acknowledge the dual system publicly. \u201CNext play\u201D is the external instruction. \u201CNever forget\u201D is the internal fuel. They operate in different domains (action vs. memory). People who learn from him need BOTH, not just the public version.",
  },
  {
    id: 3,
    title: "The External Ignition",
    description:
      "Every transformation requires someone else\u2019s belief first. He has no evidence of self-generating belief from scratch during moments of deep uncertainty. His system has a single point of failure: what happens when no one believes?",
    evidence: [
      "Mother Emily: bus metaphor = permission to self-select",
      "Parents: forced West Point = \u201Cbest decision I never made\u201D",
      "Tom Butters: refused his resignation during burnout. Belief stronger than self-assessment",
      "Newell/Iba: \u201CDo it your way\u201D = permission to follow instincts",
      "His worst periods both involved operating WITHOUT external belief until someone provided it",
    ],
    eliminationStrategy:
      "Recognize the pattern as architecture, not weakness. Map the belief-givers and notice the structural consistency. Then ask: when Butters said \u201CYou\u2019re my coach,\u201D what specifically shifted internally? If you can identify the mechanism belief activates, you may learn to activate it yourself, not as a replacement, but as a backup generator.",
  },
];

export const patternDynamics: PatternDynamic[] = [
  {
    type: "combination",
    patternA: "The Feel-First Architecture",
    patternB: "The Emotional Engineering",
    effect:
      "He feels \u2192 he engineers feeling in others \u2192 the felt experience produces identity fusion. This three-pattern cycle IS his leadership methodology. Without any one, the others lose power. Feeling without engineering is private wisdom. Engineering without fusion is manipulation.",
  },
  {
    type: "combination",
    patternA: "The Good People Filter",
    patternB: "The Ownership Protocol",
    effect:
      "He selects for empathic capacity (people who CAN feel their way into identity fusion) then runs the ownership sequence. The filter ensures the protocol works. You can\u2019t transfer ownership to someone who can\u2019t feel their way into it.",
  },
  {
    type: "combination",
    patternA: "The Collective Recovery",
    patternB: "Distributed Authority",
    effect:
      "Both born from the 1994 burnout. Together they create resilient systems: Collective Recovery catches failures, Distributed Authority prevents single-point-of-failure leadership. Defensive architecture built by a man who almost lost everything to centralized, isolated leadership.",
  },
  {
    type: "interference",
    patternA: "Forward-Only Orientation",
    patternB: "Memory as Fuel",
    effect:
      "\u201CNext play\u201D and \u201Cnever forget\u201D fight each other constantly. He claims to move forward while carrying everything. Neither wins. The forward philosophy may be a public performance while private processing runs deeper than he acknowledges.",
  },
  {
    type: "interference",
    patternA: "The Belief Bridge",
    patternB: "The Identity Fusion",
    effect:
      "He fuses OTHERS\u2019 identity with purpose but his OWN transformations require external belief. He can generate belief in others but struggles to generate it for himself. The same pattern runs in two directions; he\u2019s only aware of the outbound direction.",
  },
  {
    type: "interference",
    patternA: "The Good People Filter",
    patternB: "The Feel-First Architecture",
    effect:
      "The filter runs on feeling, so it can\u2019t be audited, challenged, or corrected by data. When his feel is right, it\u2019s genius. When it\u2019s wrong, there\u2019s no error-correction mechanism because the filter can\u2019t be stated, examined, or updated rationally.",
  },
];

export const vocabularyCategories: VocabularyCategory[] = [
  {
    category: "Identity Language",
    words: [
      { word: "You ARE [it]", count: 8 },
      { word: "good people", count: 8 },
      { word: "ownership", count: 7 },
      { word: "standards", count: 6 },
      { word: "culture", count: 7 },
      { word: "character", count: 6 },
    ],
  },
  {
    category: "Feeling Language",
    words: [
      { word: "feel", count: 8 },
      { word: "heart", count: 6 },
      { word: "feel moments", count: 3 },
      { word: "believe in you", count: 5 },
      { word: "chills", count: 2 },
      { word: "worthy", count: 3 },
    ],
  },
  {
    category: "Collective Language",
    words: [
      { word: "don\u2019t get up alone", count: 4 },
      { word: "we / us / our", count: 8 },
      { word: "together", count: 7 },
      { word: "team", count: 8 },
      { word: "family", count: 6 },
      { word: "Starting Five", count: 3 },
    ],
  },
  {
    category: "Signature Phrases",
    words: [
      { word: "next page", count: 4 },
      { word: "license to embellish", count: 2 },
      { word: "best decision I never made", count: 3 },
      { word: "be 16 for one minute", count: 3 },
      { word: "empathy of being led", count: 2 },
      { word: "talent with character", count: 3 },
    ],
  },
];

export const stories: Story[] = [
  {
    id: 1,
    title: "The Bicycle Wheel",
    description:
      "In 1994, Coach K collapsed. Not physically, emotionally. He couldn\u2019t feel anything. His wife delivered an ultimatum. He worked daily with a psychiatrist for four months. The cause: he was the hub through which every spoke passed. When he broke, the wheel broke.",
    appearsIn: ["T01", "T05", "T06"],
    whatItReveals:
      "The Collective Recovery pattern and Distributed Authority both trace directly to this crisis. Post-burnout, he rebuilt the wheel with distributed connections. \u201CDon\u2019t get up alone\u201D is scar tissue, not philosophy converted into operating principle.",
    quote:
      "I was a leader like ... if it was a bicycle wheel, and the spokes all went through me, and when I was gone, the whole wheel collapsed.",
    video: {
      youtubeId: "lzE3bd_7Hrs",
      startSeconds: 2550,
      label: "Graham Bensinger Interview, 2024",
    },
  },
  {
    id: 2,
    title: "The Ellis Island Sequence",
    description:
      "For Team USA, Coach K designed a seven-step emotional escalation at Ellis Island. It started with humor and personal heritage, built through a museum tour, peaked at Liberty Island in silence, then returned to the team message. Every step was deliberate. Every transition was timed.",
    appearsIn: ["T04"],
    whatItReveals:
      "Emotional Engineering at its most visible. He didn\u2019t tell NBA superstars what to feel. He put them in front of something that MADE them feel it. The fact that he can describe seven distinct steps reveals how precisely the experience was choreographed.",
    quote:
      "As a leader, you have the license to embellish. Manufactured, but it\u2019s a beautiful story, man.",
    video: {
      youtubeId: "hVv9US5GuVo",
      startSeconds: 0,
      label: "USA Basketball at West Point, 2014",
    },
  },
  {
    id: 3,
    title: "Zero Basketball at the Hall of Fame",
    description:
      "His Basketball Hall of Fame induction speech contains no basketball. No games, plays, championships, opponents, records, or strategy. 100% people. He structured it as a train journey from parents to wife, made players stand, and rejected the \u201Cthank you\u201D frame entirely.",
    appearsIn: ["T07"],
    whatItReveals:
      "When he strips to his essence, basketball doesn\u2019t make the cut. Only people do. This is the most extreme behavioral evidence of his cognitive architecture: the sport is the vehicle, the people are everything. The DEFAULT vs EXPERT gap is widest here. Any AI would mention championships.",
    quote:
      "I can\u2019t tell you how I feel. I can only tell you how I feel about us.",
    video: {
      youtubeId: "dqKiKn1293o",
      startSeconds: 641,
      label: "Basketball Hall of Fame Induction, 2001",
    },
  },
  {
    id: 4,
    title: "Butters Blocks the Resignation",
    description:
      "During his 1994 burnout, Coach K tried to resign. Athletic director Tom Butters refused: \u201CYou\u2019re my coach.\u201D Three words. Someone else\u2019s belief was stronger than his own self-assessment. His entire subsequent career (three more championships, Team USA, the Hall of Fame) exists because one person believed when he couldn\u2019t.",
    appearsIn: ["T02", "T05"],
    whatItReveals:
      "The Belief Bridge in its purest form. The causal direction is external \u2192 internal. Butters didn\u2019t encourage him or advise him. He DECLARED belief. The gap between Coach K\u2019s self-assessment (I should quit) and Butters\u2019 assessment (you\u2019re my coach) was bridged by belief alone.",
    quote:
      "With opportunities don\u2019t always come belief.",
    video: {
      youtubeId: "itOEc_ZyE4A",
      startSeconds: 0,
      label: "Coach K on Tom Butters",
    },
  },
  {
    id: 5,
    title: "The Commencement as Coaching Session",
    description:
      "At Duke\u2019s 2016 commencement, Coach K didn\u2019t give a speech. He ran a coaching session on 10,000 graduates. He opened with \u201CHow do you feel?\u201D. A locker room check-in. He told them to imagine themselves in a locker room. He had them lock arms. He led a collective vocal commitment. He closed with \u201CLet\u2019s go.\u201D",
    appearsIn: ["T08"],
    whatItReveals:
      "He cannot address a group without coaching them. The behavior is automatic. The commencement IS the Ownership Protocol performed live: check-in \u2192 standards \u2192 stories \u2192 framework \u2192 physical ritual \u2192 collective commitment \u2192 send-off. Same sequence, different venue. The Identity Fusion is so complete he can\u2019t separate the person from the coach.",
    quote:
      "Find your heart. Follow your heart. And don\u2019t do it alone.",
    video: {
      youtubeId: "22NhSu1IxwY",
      startSeconds: 214,
      label: "Duke Commencement Address, 2016",
    },
  },
];

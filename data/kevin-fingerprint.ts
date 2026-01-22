// Kevin Jennings Cognitive Fingerprint Data

export interface SignaturePattern {
  id: number;
  name: string;
  driveScore: number;
  keyInsight: string;
  mechanism: string;
  whyItWorks: string;
  evidenceChain: string[];
  monetizationPotential: string;
}

export interface DimensionData {
  name: string;
  percentage: number;
  description: string;
}

export interface BlindSpot {
  id: number;
  title: string;
  description: string;
  opportunity: string;
}

export const kevinProfile = {
  name: "Kevin B. Jennings",
  title: "Transformation Economist",
  headshot: "/kevin-headshot.jpg",
  executiveSummary: `Kevin Jennings operates as a researcher-practitioner who treats every client engagement as a laboratory experiment while maintaining the warmth of a trusted advisor. His expertise crystallizes around a core insight: trust is mathematical, not mystical—and transformation requires identity integration, not just behavior change.`,
  coreDiscovery: `Your unconscious operating system runs on three invisible engines: Trust Mechanics (relationships live or die by the 86% rule), Identity Choreography (you see people as internal coalitions that need facilitation), and The Permission Protocol (you never challenge without first validating).`,
  differentiator: `You have built an invisible scaffolding that allows high-achievers to hear hard truths without defensive collapse. Not the content you teach—but the delivery architecture that makes that content actionable.`,
  stats: {
    hoursWithLeaders: 700,
    signaturePatterns: 3,
    methodologies: 4,
    transcriptsAnalyzed: 8,
  },
};

export const signaturePatterns: SignaturePattern[] = [
  {
    id: 1,
    name: "The Permission Protocol",
    driveScore: 24,
    keyInsight: "Validate → Locate unfairness → Present pushback as accuracy",
    mechanism: `Before any challenging statement, you execute a three-step sequence:
1. Validation — Acknowledge their reasoning is sound
2. Location — Identify where they're being unfair to themselves (not to you)
3. Care-framed challenge — Present pushback as accuracy correction`,
    whyItWorks: `Most coaches challenge from authority ("I'm right, you're wrong"). You challenge from alignment ("We both want you to succeed, and your current story isn't serving that").`,
    evidenceChain: [
      `"Your thinking makes sense. You're just being unfair to yourself..." — SZ Session`,
      `"That's fair... Now let me push back" — JB Session`,
      `"Not judging, but..." — Dream Baby Talk`,
      `"Actually, I want to challenge this for a second. I think they're lying to themselves." — SZ Session`,
    ],
    monetizationPotential: `This could become a teachable methodology: "The Permission Protocol: How to Deliver Hard Truths Without Triggering Defensiveness"`,
  },
  {
    id: 2,
    name: "Identity Fragmentation Reframe",
    driveScore: 23,
    keyInsight: `"CEO-you needs to talk to Builder-you"`,
    mechanism: `Instead of telling someone what to do, you facilitate an internal conversation. You treat clients as multiple internal selves that need coordination, not instruction.`,
    whyItWorks: `This honors the real complexity of human psychology. People are multiple selves—the part that wants to grow, the part that's scared, the part that's tired. By naming them, you create distance between the client and their conflicting impulses.`,
    evidenceChain: [
      `"There's Builder Client A... CEO Client A needs to talk to him" — JW Session`,
      `"We want CEO-you to know what sales-you has already done" — SZ Session`,
      `Shadow career framework = misaligned identity architecture — Dream Baby Talk`,
      `Expert-to-Executive transition = identity renegotiation — Discovery Call`,
    ],
    monetizationPotential: `This is adjacent to Internal Family Systems (IFS) but applied to professional identity. Could become: "The Internal Board: How to Coordinate Your CEO-Self with Your Creator-Self"`,
  },
  {
    id: 3,
    name: "Trust Mathematics",
    driveScore: 22,
    keyInsight: "86% bid-response = strong relationship",
    mechanism: `Trust isn't vague—it has thresholds:
• 86% bid-response rate = strong relationship
• 33% or lower = relationship doomed
• Every interaction contains multiple hidden bids (acknowledgment, empathy, making amends)`,
    whyItWorks: `Business people love numbers. By giving trust a mathematical framework, you've made the intangible manageable.`,
    evidenceChain: [
      `"If you answer 86% of these conscious and subconscious bids, you will have a strong relationship" — Podcast`,
      `"If you enter 33% or less of bids, the relationship is doomed" — Podcast`,
      `Chick-fil-A DARE model = systematized trust repair — Podcast`,
      `Opening every coaching session with personal check-in = bid-answering — All Sessions`,
    ],
    monetizationPotential: `This is already a complete framework. Could become: "Trust Math: The 86/33 Rule for Relationships That Compound"`,
  },
];

export const dimensions: DimensionData[] = [
  {
    name: "Declarative Knowledge",
    percentage: 12,
    description: "What you know—frameworks, concepts, facts. You collect frameworks from disparate sources (relationship psychology, etymology, business strategy) and synthesize them into coherent life-architecture.",
  },
  {
    name: "Procedural Knowledge",
    percentage: 32,
    description: "How you do things—skills, techniques, sequences. Your coaching sessions follow invisible choreography: warm greeting, check on non-work life, recall previous conversation, transition with permission.",
  },
  {
    name: "Conditional Knowledge",
    percentage: 38,
    description: "When and why you choose specific approaches. You know when to challenge vs. support, when to use personal stories, and when to double down vs. diversify.",
  },
  {
    name: "Metacognitive Knowledge",
    percentage: 18,
    description: `Your mental models and belief systems. Core beliefs include "Marketing is Service," "You Are a Map," and viewing work as research in a laboratory.`,
  },
];

export const blindSpots: BlindSpot[] = [
  {
    id: 1,
    title: "Platform Mechanics",
    description: "You teach reputation beautifully but rarely address how to build platform—the tactical distribution side.",
    opportunity: "Partner with or reference someone who handles platform tactics while you own reputation strategy.",
  },
  {
    id: 2,
    title: "Failure/Recovery Content",
    description: "Given your substance abuse background and commitment to vulnerability, there's likely much more here than the single Forgiveness fragment.",
    opportunity: `A full "Failure Protocol" framework could be powerful—how to fail forward, when to quit, how to rebuild after collapse.`,
  },
  {
    id: 3,
    title: "Team/Delegation Patterns",
    description: "Your content focuses on the individual expert. Minimal material on building teams or scaling beyond solo practitioner.",
    opportunity: `The "Expert-to-Executive" transition could become an entire offering focused on the team-building phase.`,
  },
  {
    id: 4,
    title: "Pricing/Packaging Tactics",
    description: `You teach pricing philosophy ("charge enough they refuse to waste it") but not packaging mechanics.`,
    opportunity: "There's space to fill if not intentional—tiered offers, value stacking, etc.",
  },
];

export const uniquePosition = {
  intersection: [
    "Relationship Psychology (Gottman trust mechanics)",
    "Identity Work (Internal Family Systems energy)",
    "Business Strategy (expert-to-executive positioning)",
    "Performance Coaching (Tony Robbins caliber clients)",
  ],
  differentiationStatement: `"I help experts who've outgrown their expertise. You built a reputation on what you know—now you need to build a business on who you are. I don't teach strategy; I create the conditions where strategy becomes obvious."`,
};

export interface Prompt {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'extraction' | 'positioning' | 'content' | 'analysis' | 'workflow';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isPremium: boolean;
  prompt: string;
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
  steps: {
    stepNumber: number;
    title: string;
    prompt: string;
    note?: string;
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
    description: 'Extract the hidden value patterns from your client conversations. Discover what you actually do that creates results.',
    category: 'extraction',
    difficulty: 'intermediate',
    isPremium: false,
    prompt: `You are an expert at identifying unconscious expertise patterns. I'm going to share a transcript of a conversation where I helped someone.

Your job is to identify:
1. **Invisible Moves** - Things I did that I probably don't realize I did
2. **Reframes** - Moments where I shifted how they saw the problem
3. **Pattern Interrupts** - Where I broke their expected flow of thinking
4. **Signature Language** - Phrases or framings that seem uniquely mine

For each pattern you find:
- Name it (give it a memorable, specific name)
- Quote the exact moment it happened
- Explain why it matters (what did it unlock?)

Here's the transcript:
[PASTE YOUR TRANSCRIPT HERE]`,
    whatToLookFor: [
      'Patterns that repeat across multiple conversations',
      'Moments where the other person had an "aha" reaction',
      'Things you do automatically that others struggle with',
      'Language patterns that feel natural to you but specific',
    ],
    relatedArticle: {
      title: 'The Expertise Paradox: Why Being Good Makes You Blind',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['extraction', 'patterns', 'transcripts'],
  },
  {
    id: '2',
    slug: 'framework-namer',
    title: 'Framework Namer',
    description: 'Turn a messy process into a named, memorable framework. Give your methodology a name that sticks.',
    category: 'positioning',
    difficulty: 'beginner',
    isPremium: false,
    prompt: `I have a process or approach I use that works well, but I've never given it a proper name. Help me create a memorable framework name.

Here's what I do:
[DESCRIBE YOUR PROCESS]

Generate 10 potential framework names that are:
1. Memorable and specific (not generic like "Success System")
2. Hint at the transformation or mechanism
3. Would work in a sentence like "I use the ______ to help clients..."
4. Aren't cringey or overly clever

For each name, give me:
- The name
- A one-sentence description
- Why it works (what makes it memorable)

Then recommend your top 3 with reasoning.`,
    whatToLookFor: [
      'Names that feel like YOU, not generic',
      'Options that hint at the "how" not just the "what"',
      'Names you could see yourself saying naturally',
    ],
    tags: ['naming', 'frameworks', 'positioning'],
  },
  {
    id: '3',
    slug: 'blind-spot-detector',
    title: 'Blind Spot Detector',
    description: 'Identify what you can\'t see about your own expertise. Find the gaps in your self-awareness.',
    category: 'analysis',
    difficulty: 'advanced',
    isPremium: true,
    prompt: `You are a cognitive blind spot analyst. I'm going to share several pieces of content I've created (could be transcripts, articles, emails, etc.).

Your job is to find my BLIND SPOTS - things that are true about how I think and work that I probably can't see because they're so automatic to me.

Look for:
1. **Assumed Knowledge** - Things I explain poorly because I assume everyone knows them
2. **Unconscious Frameworks** - Mental models I use without naming them
3. **Signature Patterns** - Approaches I repeat without realizing
4. **Missing Perspectives** - Viewpoints I consistently don't consider
5. **Hidden Strengths** - Things I do well but probably undersell

For each blind spot:
- Name it specifically
- Show evidence (quote my content)
- Explain what this costs me (what I'm missing by not seeing it)
- Suggest how I could leverage this awareness

Here's my content:
[PASTE YOUR CONTENT]`,
    whatToLookFor: [
      'Patterns you genuinely didn\'t know you had',
      'Things that feel "obvious" to you but aren\'t to others',
      'Recurring themes you never consciously chose',
    ],
    relatedArticle: {
      title: 'Why You Can\'t See Your Own Expertise',
      url: 'https://irreplaceablepositioning.substack.com',
    },
    tags: ['blind spots', 'self-awareness', 'analysis'],
  },
  {
    id: '4',
    slug: 'pricing-justification',
    title: 'Pricing Justification Builder',
    description: 'Build an airtight case for your premium pricing using your actual patterns and frameworks.',
    category: 'positioning',
    difficulty: 'intermediate',
    isPremium: true,
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
    title: 'Content From Conversation',
    description: 'Turn a single conversation transcript into multiple pieces of content without losing your voice.',
    category: 'content',
    difficulty: 'beginner',
    isPremium: false,
    prompt: `I had a conversation where I shared valuable insights. Help me turn it into content without losing my natural voice.

Here's the transcript:
[PASTE TRANSCRIPT]

Create:
1. **3 LinkedIn posts** - Each focused on one insight, in my voice
2. **1 Newsletter intro** - Hook that could open a longer piece
3. **5 Tweet-sized insights** - Standalone ideas under 280 characters
4. **1 Framework summary** - If there's a teachable framework hidden in here, name and structure it

For each piece:
- Keep my natural language patterns
- Don't make it sound "content-ified" or generic
- Preserve the specific examples I used`,
    whatToLookFor: [
      'Content that sounds like you said it, not wrote it',
      'Insights you didn\'t realize were in the conversation',
      'Frameworks hiding in your natural explanations',
    ],
    tags: ['content', 'repurposing', 'transcripts'],
  },
];

export const workflows: Workflow[] = [
  {
    id: 'w1',
    slug: 'full-extraction-workflow',
    title: 'Full Cognitive Fingerprint Extraction',
    description: 'The complete 4-step process to extract, name, and document your invisible expertise patterns.',
    category: 'extraction',
    isPremium: true,
    estimatedTime: '45-60 min',
    steps: [
      {
        stepNumber: 1,
        title: 'Pattern Mining',
        prompt: `[STEP 1 PROMPT - Pattern identification from transcripts]`,
        note: 'Start with your best 2-3 client conversations',
      },
      {
        stepNumber: 2,
        title: 'Pattern Naming',
        prompt: `[STEP 2 PROMPT - Give each pattern a memorable name]`,
        note: 'Names should be specific, not generic',
      },
      {
        stepNumber: 3,
        title: 'Evidence Gathering',
        prompt: `[STEP 3 PROMPT - Find quotes that prove each pattern]`,
        note: 'You need evidence to trust your own patterns',
      },
      {
        stepNumber: 4,
        title: 'Synthesis & Documentation',
        prompt: `[STEP 4 PROMPT - Create your Cognitive Fingerprint document]`,
        note: 'This becomes your positioning foundation',
      },
    ],
    tags: ['extraction', 'complete-process', 'documentation'],
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


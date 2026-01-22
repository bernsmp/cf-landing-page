// Kevin Jennings Belief Architecture Map

export interface ContentStrategy {
  format: string;
  timing: string;
  angle: string;
}

export interface Belief {
  id: string;
  title: string;
  requiredBelief: string;
  opposingBelief: string;
  underlyingFear: string;
  resolutionStrategy: string;
  contentStrategies: ContentStrategy[];
  confidenceLevel: number;
  intensity: 'deal-killer' | 'friction';
}

export interface Quadrant {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  beliefs: Belief[];
}

export const quadrants: Quadrant[] = [
  {
    id: 1,
    title: "About Kevin",
    subtitle: "The Provider",
    color: "#4a6fa5",
    beliefs: [
      {
        id: "q1-1",
        title: "Relevant Success Track Record",
        requiredBelief: "Kevin has actually helped people in MY specific situation—not just big-name celebrities or simple businesses, but complex, service-based owners who were drowning like I am.",
        opposingBelief: "He's worked with Tony Robbins and Oprah's team, which is impressive, but those are completely different businesses than mine. The high-profile name drops actually make me wonder if he'd even understand my problems.",
        underlyingFear: "He'll give me advice designed for businesses 10x my size, and I'll waste money and time trying to implement things that don't fit my reality.",
        resolutionStrategy: "Kevin's work with high-profile clients taught him frameworks that SCALE DOWN, not just up. He's spent 700+ hours specifically with leaders like her since 2020.",
        contentStrategies: [
          { format: "Case study", timing: "Solution Aware", angle: "People like me who transformed" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "Celebrity frameworks that scale down" },
          { format: "Email sequence", timing: "Decision Stage", angle: "Specific industry examples" },
        ],
        confidenceLevel: 88,
        intensity: "friction",
      },
      {
        id: "q1-2",
        title: "Understanding of Her Specific Pain",
        requiredBelief: "Kevin genuinely understands the specific hell of being successful enough that everyone thinks you've 'made it' while you're privately drowning.",
        opposingBelief: "Most business coaches see my revenue and assume I'm doing fine. They don't understand what it's like to be 'successful' and miserable at the same time.",
        underlyingFear: "If I'm vulnerable about how bad it really is, he'll judge me as incompetent or ungrateful. He'll think 'you built this, why are you complaining?'",
        resolutionStrategy: "Experience of being seen without judgment. Kevin specifically works with 'leaders who lack safe spaces to grow.' The ministry/money paradox he solves includes the success/sanity paradox.",
        contentStrategies: [
          { format: "Newsletter", timing: "Problem Aware", angle: "The Success Trap Nobody Talks About" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "You built freedom that became a prison" },
          { format: "Video/podcast", timing: "Solution Aware", angle: "Why I work with 'successful' people who are secretly drowning" },
        ],
        confidenceLevel: 94,
        intensity: "deal-killer",
      },
      {
        id: "q1-3",
        title: "Different From Other Coaches",
        requiredBelief: "Kevin's approach is fundamentally different from the business coaches, masterminds, and consultants I've tried before—he's solving a different problem at a different level.",
        opposingBelief: "I've already invested $30K+ in courses, coaches, and masterminds. They all promised transformation but delivered motivation and generic frameworks.",
        underlyingFear: "I'll spend more money, get more advice I already know, and end up exactly where I am—except poorer and more cynical.",
        resolutionStrategy: "Understanding that Kevin works on transformation economics, not just tactics. His diagnostic approach vs. cookie-cutter solutions. The 'Cognitive Fingerprint' style of seeing patterns she can't see.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "Why I'm Not a Business Coach" },
          { format: "Comparison table", timing: "Product Aware", angle: "Traditional Coaching vs. Transformation Economics" },
          { format: "Email sequence", timing: "Decision Stage", angle: "What I do vs. what you've experienced" },
        ],
        confidenceLevel: 91,
        intensity: "deal-killer",
      },
      {
        id: "q1-4",
        title: "Safe Space for Imperfection",
        requiredBelief: "Kevin creates an environment where I can be honest about what's really happening—the mess, the fear, the stuff I'd never tell my team or family—without judgment.",
        opposingBelief: "If I show a coach how chaotic things really are behind the scenes, they'll lose confidence in me. I need to present a polished version of my problems.",
        underlyingFear: "If I pull back the curtain and show how badly I'm struggling, Kevin will realize I'm a mess and either judge me silently or give me that look of 'how did you let it get this bad?'",
        resolutionStrategy: "Experience of Kevin's 'Permission Architecture'—his ability to create psychological safety. 700+ hours with leaders taught him everyone's backstage is chaotic.",
        contentStrategies: [
          { format: "Email", timing: "Decision Stage", angle: "The question I ask every new client" },
          { format: "Video", timing: "Product Aware", angle: "Kevin modeling vulnerability first" },
          { format: "Testimonial", timing: "Decision Stage", angle: "First time I felt safe being honest" },
        ],
        confidenceLevel: 93,
        intensity: "deal-killer",
      },
    ],
  },
  {
    id: 2,
    title: "About Themselves",
    subtitle: "Self-Perception",
    color: "#d4af37",
    beliefs: [
      {
        id: "q2-1",
        title: "Capability to Change",
        requiredBelief: "I have the capacity to work differently—my current overwhelm is a pattern I've built, not a permanent personality defect. I can learn to delegate, set boundaries, and lead rather than do.",
        opposingBelief: "I'm just not a 'CEO type.' Some people are natural leaders and delegators—I'm a doer. My perfectionism and need for control aren't coachable traits, they're who I am.",
        underlyingFear: "If I truly commit to changing how I work and I still can't do it, then I'll have proof that I'm fundamentally broken. Right now I can blame circumstances.",
        resolutionStrategy: "'CEO' is a learnable skill set, not a personality type. Previous delegation failures were system failures, not character flaws. High standards are an asset that needs channeling.",
        contentStrategies: [
          { format: "Newsletter", timing: "Problem Aware", angle: "Your Control Problem Isn't What You Think" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "Best delegators are former control freaks" },
          { format: "Podcast", timing: "Solution Aware", angle: "The Control Paradox" },
        ],
        confidenceLevel: 92,
        intensity: "deal-killer",
      },
      {
        id: "q2-2",
        title: "Worthiness of Investment",
        requiredBelief: "Investing significant money in support for ME—not the business's marketing, not client deliverables, not team—is responsible and necessary, not selfish.",
        opposingBelief: "I can barely pay myself consistently. Spending thousands on coaching feels irresponsible when that money could go to the business or my family.",
        underlyingFear: "If I spend this money on myself and it doesn't work, I'll have betrayed my family's financial security for my own needs. I'll prove I make bad decisions.",
        resolutionStrategy: "Investing in getting unstuck is the MOST financially responsible decision. The cost of NOT solving this (health, relationships, revenue ceiling) far exceeds the investment.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "The Real Cost of Not Getting Help" },
          { format: "Calculator", timing: "Product Aware", angle: "What's Your Bottleneck Actually Costing?" },
          { format: "Case study", timing: "Product Aware", angle: "How Sarah's 'Selfish' Investment Gave Her Family 20 Hours Back" },
        ],
        confidenceLevel: 95,
        intensity: "deal-killer",
      },
      {
        id: "q2-3",
        title: "Readiness Right Now",
        requiredBelief: "I'm in the right position to benefit from help NOW—I don't need to 'get things in order first' or wait for a better moment. My current chaos IS the right starting point.",
        opposingBelief: "I should get my business more stabilized before working with someone. I'm too overwhelmed right now to add another thing.",
        underlyingFear: "If I commit to this now, I won't have the time or energy to actually implement anything. I'll fall behind, disappoint Kevin, waste the money, and just add another failure.",
        resolutionStrategy: "Kevin HELPS HER CREATE bandwidth, not just adds to her plate. 'Waiting for the right time' is the trap she's been in for years. Current chaos is actually the perfect starting point.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "The 'Right Time' Trap" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "Help creates bandwidth" },
          { format: "Email follow-up", timing: "Decision Stage", angle: "Still waiting for the right time?" },
        ],
        confidenceLevel: 90,
        intensity: "friction",
      },
      {
        id: "q2-4",
        title: "People Like Me Succeed",
        requiredBelief: "People with my specific type of business, my personality, my constraints, and my level of mess have successfully transformed with Kevin's help. I'm not uniquely broken.",
        opposingBelief: "My situation is different. My industry is more complex. My clients are more demanding. The success stories are people who had advantages I don't have.",
        underlyingFear: "What if I'm the exception—the person this CAN'T help? What if my situation really is uniquely unsolvable?",
        resolutionStrategy: "Exposure to specific stories of people with her constraints who transformed. Kevin's diagnostic approach is built for unique situations. Feeling 'uniquely complex' is itself a common pattern.",
        contentStrategies: [
          { format: "Case study", timing: "Solution Aware", angle: "Specific industry/constraint stories" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "Everyone thinks their situation is different" },
          { format: "Email", timing: "Product Aware", angle: "Has Kevin worked with someone like me?" },
        ],
        confidenceLevel: 89,
        intensity: "friction",
      },
      {
        id: "q2-5",
        title: "Deserving of the Outcome",
        requiredBelief: "I deserve to have a business that supports my life instead of consuming it. I'm allowed to have BOTH success AND quality of life—I don't have to keep choosing.",
        opposingBelief: "Maybe this suffering is just the price of entrepreneurship. Successful people sacrifice. If I'm struggling, I'm probably not working hard enough or smart enough.",
        underlyingFear: "If I admit I deserve better, I'm being entitled and ungrateful. Real entrepreneurs don't complain. If I start expecting ease, I'll become soft.",
        resolutionStrategy: "Permission to want both success and sanity. Sustainable success outperforms burnout success. Her suffering isn't noble, it's inefficient.",
        contentStrategies: [
          { format: "Newsletter", timing: "Problem Aware", angle: "Your suffering is inefficient, not noble" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "Hustle culture is lying to you" },
          { format: "Video", timing: "Solution Aware", angle: "Kevin's own story of permission" },
        ],
        confidenceLevel: 91,
        intensity: "deal-killer",
      },
    ],
  },
  {
    id: 3,
    title: "About the Mechanism",
    subtitle: "Kevin's Approach",
    color: "#7c9885",
    beliefs: [
      {
        id: "q3-1",
        title: "This Approach Actually Works",
        requiredBelief: "Kevin's 'Transformation Economics' framework—the psychology of investment creating implementation—actually produces sustainable change, not just temporary motivation.",
        opposingBelief: "I've learned plenty of frameworks before. The problem isn't knowledge—it's implementation. What makes his approach different from every other system I've tried?",
        underlyingFear: "This will be another thing that makes sense in theory but falls apart in my actual life. I'll get inspired, try to implement, get overwhelmed, and end up exactly where I am.",
        resolutionStrategy: "Kevin's approach is DONE-WITH-YOU, not just education. His methodology specifically addresses implementation failure. It's extraction and implementation of what she already knows.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "Information vs. Transformation" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "You don't need another framework" },
          { format: "Video/demo", timing: "Product Aware", angle: "Watch a Cognitive Fingerprint Extraction Session" },
        ],
        confidenceLevel: 93,
        intensity: "deal-killer",
      },
      {
        id: "q3-2",
        title: "The Timeline is Realistic",
        requiredBelief: "Meaningful transformation can happen in the timeframe Kevin describes—this isn't a multi-year commitment before I see results. Quick wins are possible alongside deeper change.",
        opposingBelief: "Real change takes years. Anyone promising fast transformation is selling snake oil. I've been building these patterns for decades—they can't shift in weeks.",
        underlyingFear: "If I expect fast results and don't get them, I'll give up like I have before. But if I commit to years of work, I'll never start.",
        resolutionStrategy: "Quick wins and deep transformation are both real. Kevin's 'Growth Sprint' approach—speed IS part of the value. Clarity can shift overnight even if systems take longer.",
        contentStrategies: [
          { format: "Email", timing: "Product Aware", angle: "The 4-Day Sprint methodology" },
          { format: "Case study", timing: "Product Aware", angle: "90-day transformation story" },
          { format: "LinkedIn post", timing: "Solution Aware", angle: "Quick wins vs. deep change" },
        ],
        confidenceLevel: 87,
        intensity: "friction",
      },
      {
        id: "q3-3",
        title: "My Expertise Can Be Extracted",
        requiredBelief: "There's a real system underneath my 'intuition'—Kevin can help me see and codify what I do unconsciously, making it transferable and scalable without losing what makes it special.",
        opposingBelief: "I just figure things out as I go. Every client situation is different. I don't really have a 'method'—I have instincts and experience. There's nothing to extract.",
        underlyingFear: "If I try to extract and document what I do, I'll discover there's nothing there—just luck and relationships. The extraction process will expose that I've been improvising all along.",
        resolutionStrategy: "Unconscious expertise IS expertise—it's just invisible to her. 'Messy' situational expertise is often MORE valuable than textbook methods. Kevin's 'Cognitive Fingerprint' approach reveals patterns.",
        contentStrategies: [
          { format: "Newsletter", timing: "Problem Aware", angle: "You have a method. You just can't see it." },
          { format: "Video", timing: "Product Aware", angle: "Live extraction demonstration" },
          { format: "Case study", timing: "Solution Aware", angle: "From 'I don't have a process' to a complete methodology" },
        ],
        confidenceLevel: 92,
        intensity: "deal-killer",
      },
      {
        id: "q3-4",
        title: "Delegation Can Work",
        requiredBelief: "Delegation isn't about finding unicorn employees—it's about building the right systems, communication, and expectations. My past delegation failures were system failures, not proof that I can't delegate.",
        opposingBelief: "I've tried delegating. It was a disaster. Either they didn't care enough, or I micromanaged them into quitting, or I ended up redoing everything anyway.",
        underlyingFear: "If I delegate again and it fails again, I'll have wasted time, money, and emotional energy—and I'll be even more convinced that I'm the only one who can do anything.",
        resolutionStrategy: "Delegation requires systems FIRST, people second. Past failures were predictable without those systems. She needs to 'scale herself' before scaling her team.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "Why Your VA Hire Failed" },
          { format: "LinkedIn carousel", timing: "Problem Aware", angle: "The Delegation Sequence" },
          { format: "Workshop", timing: "Product Aware", angle: "System-First Delegation Method" },
        ],
        confidenceLevel: 94,
        intensity: "deal-killer",
      },
      {
        id: "q3-5",
        title: "Premium Pricing Enables Transformation",
        requiredBelief: "Charging more—significantly more—actually helps my clients get better results. The investment creates commitment, and commitment creates transformation.",
        opposingBelief: "I feel guilty charging high prices. My clients can't afford more. I should be accessible to everyone who needs my help. Premium pricing is greedy.",
        underlyingFear: "If I charge more, clients will leave and I'll have priced myself out of the market. Worse, I'll prove I'm greedy and have abandoned my mission to help people.",
        resolutionStrategy: "Kevin's 'Investment Psychology Matrix'—higher investment = higher implementation. Undercharging creates clients who don't implement. Premium pricing is SERVICE, not extraction.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "Why premium pricing is actually service" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "$15/month vs. $1500/month mindsets" },
          { format: "Email", timing: "Decision Stage", angle: "The investment psychology principle" },
        ],
        confidenceLevel: 90,
        intensity: "deal-killer",
      },
    ],
  },
  {
    id: 4,
    title: "About Alternatives",
    subtitle: "Why This, Why Now",
    color: "#c97064",
    beliefs: [
      {
        id: "q4-1",
        title: "Why DIY Won't Work",
        requiredBelief: "I cannot think my way out of this alone—I need an outside perspective to see patterns I'm too close to see. Self-diagnosis always misses something critical.",
        opposingBelief: "I'm smart. I've built a successful business. I should be able to figure this out myself if I just had more time to think strategically.",
        underlyingFear: "If I can't solve my own problems, I'm not as smart or capable as I thought. Needing help means I've failed. And what if I pay for help and they just tell me things I already knew?",
        resolutionStrategy: "You can't read the label from inside the jar. Cognitive Fingerprint reveals patterns that are invisible to her. Seeking external perspective is what smart people do.",
        contentStrategies: [
          { format: "Newsletter", timing: "Problem Aware", angle: "The blind spot you can't see" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "Smart people need mirrors" },
          { format: "Case study", timing: "Solution Aware", angle: "What I discovered I couldn't see" },
        ],
        confidenceLevel: 89,
        intensity: "friction",
      },
      {
        id: "q4-2",
        title: "Why Past Solutions Failed",
        requiredBelief: "My previous investments in courses, coaches, and masterminds failed for specific, identifiable reasons—not because I'm uncoachable. Kevin's approach addresses those specific failure points.",
        opposingBelief: "I've already tried the coaching/course route multiple times. They all sounded good but didn't deliver for my situation. Either I'm uncoachable or these solutions don't work for people like me.",
        underlyingFear: "Maybe the problem is me. Maybe I'm 'uncoachable.' If I try again and fail again, I'll have proof that I can't be helped—and then what?",
        resolutionStrategy: "Diagnosis of WHY previous solutions failed (generic vs. customized, advice vs. implementation, education vs. extraction). Past failure was fit failure, not capability failure.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "Why Your Last Coach Failed You" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "You're not uncoachable. You were under-matched." },
          { format: "Email sequence", timing: "Decision Stage", angle: "A different kind of help" },
        ],
        confidenceLevel: 93,
        intensity: "deal-killer",
      },
      {
        id: "q4-3",
        title: "Why Waiting Won't Work",
        requiredBelief: "The 'just get through this season' approach is a trap—there will always be another reason to wait. The cost of delay compounds faster than I realize.",
        opposingBelief: "Once I get through this busy period, I'll have more bandwidth to address the systemic issues. I just need to survive the next few months, then I can work on real change.",
        underlyingFear: "What if I'm wrong and this ISN'T the time? What if I invest when I should be conserving? What if I take on more and completely break down?",
        resolutionStrategy: "The cost of NOT solving this (health, relationships, revenue ceiling) far exceeds the investment. Waiting has been her strategy for years and nothing changed. The 'right time' never arrives naturally.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "The 'Right Time' Trap" },
          { format: "Calculator", timing: "Decision Stage", angle: "What's Another Year of This Costing You?" },
          { format: "Email follow-up", timing: "Decision Stage", angle: "Waiting is a strategy you've tried" },
        ],
        confidenceLevel: 91,
        intensity: "deal-killer",
      },
      {
        id: "q4-4",
        title: "Why Cheaper Alternatives Won't Solve This",
        requiredBelief: "The solutions in my price range—books, courses, group programs—aren't designed to solve MY specific situation. Customized transformation requires customized investment.",
        opposingBelief: "There's probably a book or course that covers this for a fraction of the price. I should exhaust the cheaper options before investing in high-ticket help.",
        underlyingFear: "What if I pay premium prices and get the same generic advice I could have gotten from a $200 course? I'll feel stupid for overpaying.",
        resolutionStrategy: "The difference between information (cheap/abundant) and transformation (expensive/rare). She's buying extraction, implementation, accountability—not just knowledge.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "Information vs. Transformation" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "Cheap information, expensive transformation" },
          { format: "Sales page", timing: "Product Aware", angle: "What you're actually buying" },
        ],
        confidenceLevel: 88,
        intensity: "friction",
      },
      {
        id: "q4-5",
        title: "Why 'Just Hire Help' Won't Fix This",
        requiredBelief: "Hiring a VA or team member without the underlying systems, processes, and leadership capacity I don't yet have will fail—the problem isn't lack of hands, it's lack of infrastructure.",
        opposingBelief: "Maybe I just need to hire the right person—a really good EA or operations person who can take things off my plate. The problem is finding good help, not something deeper.",
        underlyingFear: "What if I invest in Kevin's help and then still can't find good people? What if the people problem is real and unsolvable?",
        resolutionStrategy: "Delegation requires systems FIRST, people second. Past hiring failures were predictable without the infrastructure. The sequence matters: clarity → systems → people.",
        contentStrategies: [
          { format: "Newsletter", timing: "Solution Aware", angle: "System-before-people framework" },
          { format: "LinkedIn post", timing: "Problem Aware", angle: "Why your last hire failed" },
          { format: "Case study", timing: "Product Aware", angle: "Hire failures without systems" },
        ],
        confidenceLevel: 86,
        intensity: "friction",
      },
    ],
  },
];

// Priority matrix for objection handling
export const priorityBeliefs = [
  { quadrant: "Q2", belief: "Capability to Change", priority: 1 },
  { quadrant: "Q3", belief: "Delegation Can Work", priority: 2 },
  { quadrant: "Q1", belief: "Understanding of Her Specific Pain", priority: 3 },
  { quadrant: "Q2", belief: "Worthiness of Self-Investment", priority: 4 },
  { quadrant: "Q4", belief: "Why Past Solutions Failed", priority: 5 },
  { quadrant: "Q3", belief: "This Approach Actually Works", priority: 6 },
  { quadrant: "Q1", belief: "Different From Other Coaches", priority: 7 },
  { quadrant: "Q2", belief: "Readiness Right Now", priority: 8 },
  { quadrant: "Q4", belief: "Why Waiting Won't Work", priority: 9 },
  { quadrant: "Q1", belief: "Relevant Success Track Record", priority: 10 },
];

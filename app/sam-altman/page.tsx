import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { FingerScanButton } from '@/components/ui/finger-scan-button';
import { ArrowRight, BookOpen, Building2, Cpu, Eye, Layers3, MessageSquare, ShieldQuestion, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sam Altman | Cognitive Fingerprint™ Analysis',
  description:
    'A deeper Cognitive Fingerprint™ analysis of Sam Altman: how he makes extreme AI scale feel gradual, institutional, and administratively manageable.',
  openGraph: {
    title: 'Sam Altman | Cognitive Fingerprint™ Analysis',
    description:
      'The operating system behind Sam Altman\'s gentle emergency frame, mapped as a Cognitive Fingerprint™.',
    url: 'https://cognitivefingerprint.ai/sam-altman',
    siteName: 'Cognitive Fingerprint™',
    type: 'website',
  },
};

const sourceTrail = [
  {
    label: 'AGI Planning',
    title: 'Planning for AGI and Beyond',
    detail: 'The early institutional frame: deploy iteratively, learn in public, let society and the system adapt together.',
    href: 'https://openai.com/index/planning-for-agi-and-beyond/',
  },
  {
    label: 'Personal Worldview',
    title: 'The Gentle Singularity',
    detail: 'The keystone essay: intelligence and energy become abundant while daily life still looks strangely recognizable.',
    href: 'https://blog.samaltman.com/the-gentle-singularity',
  },
  {
    label: 'Product Reality',
    title: 'GPT-5 and the new era of work',
    detail: 'The worldview moves into adoption language: intelligence at the center of work, agents, coding, and business systems.',
    href: 'https://openai.com/index/gpt-5-new-era-of-work/',
  },
  {
    label: 'Infrastructure Layer',
    title: 'OpenAI Podcast Ep. 1',
    detail: 'Stargate, parenting, tool use, and compute scarcity all appear in one conversation. The future gets a family scene and a power bill.',
    href: 'https://singjupost.com/transcript-sam-altman-on-agi-gpt-5-and-whats-next-the-openai-podcast-ep-1/',
  },
  {
    label: 'Policy Turn',
    title: 'Industrial policy for the Intelligence Age',
    detail: 'The 2026 turn: OpenAI starts proposing the civic terms of superintelligence, while calling them early ideas for debate.',
    href: 'https://openai.com/index/industrial-policy-for-the-intelligence-age/',
  },
  {
    label: 'Recent Model Launch',
    title: 'Introducing GPT-5.5',
    detail: 'The newest launch sharpens the pattern: the model helps improve its own serving stack, while safety becomes iterative deployment again.',
    href: 'https://openai.com/index/introducing-gpt-5-5/',
  },
];

const dimensions = [
  {
    name: 'Procedural',
    verdict: 'Reality contact is the method.',
    body: 'The public release is not the end of the process. It is where the process gets smarter, louder, and harder to reverse.',
  },
  {
    name: 'Material',
    verdict: 'The future needs a loading dock.',
    body: 'Compute, chips, power, data centers, and capital make the abstract promise of intelligence feel like an infrastructure problem.',
  },
  {
    name: 'Institutional',
    verdict: 'OpenAI becomes the speaker.',
    body: 'The person rarely carries the claim alone. The lab, product, policy shop, and deployment company all speak through the same pronoun.',
  },
  {
    name: 'Emotional',
    verdict: 'Emergency without panic.',
    body: 'The future is described as enormous, but the delivery stays calm. The room temperature is part of the strategy.',
  },
];

const patterns = [
  {
    number: '01',
    slug: 'gentle-emergency',
    name: 'The Gentle Emergency',
    dimension: 'Emotional',
    icon: ShieldQuestion,
    oneLine: 'Make superintelligence feel urgent enough for policy, but calm enough for public absorption.',
    scene:
      'The old frame was “the singularity will feel gentle.” The newer frame is sharper. The transition can still feel manageable, but only if institutions start moving before the floor tilts.',
    mechanism:
      'Altman keeps panic and complacency out of the room at the same time. The future is not dismissed. It is domesticated, scheduled, and handed to committees, workshops, safeguards, and public debate.',
    evidence:
      'The Gentle Singularity makes radical change feel livable. The 2026 OpenAI Forum and Industrial Policy post add social safety nets, compute access, cyber risk, bio risk, and new institutions.',
    whatItBuys:
      'A public posture that can argue for speed and preparation without sounding like either pure acceleration or pure alarm.',
    shadow:
      'Gentle for whom is still the question hiding under the rug. A transition can feel smooth from the command center and jagged from the job market.',
  },
  {
    number: '02',
    slug: 'iterative-deployment',
    name: 'Iterative Deployment',
    dimension: 'Procedural',
    icon: ArrowRight,
    oneLine: 'Ship the imperfect thing, then call public contact the calibration loop.',
    scene:
      'The release is not treated as a final answer. It is treated as a sensor. Users, critics, enterprises, and regulators all become part of the next training environment.',
    mechanism:
      'Speed stops looking reckless when it is framed as learning under real conditions. A rough edge becomes signal. A complaint becomes calibration. A launch becomes a civic rehearsal.',
    evidence:
      'Planning for AGI and Beyond frames deployment as an iterative process. GPT-5.5 repeats the pattern around cyber safeguards that may annoy users initially while OpenAI tunes them over time.',
    whatItBuys:
      'Momentum, adaptation, user familiarity, data, and a moral argument for getting powerful systems into the world before consensus is complete.',
    shadow:
      'The same frame does two jobs. It can be a sincere safety method and a very good market-learning engine. The pattern is powerful because both can be true.',
  },
  {
    number: '03',
    slug: 'compute-social-contract',
    name: 'Compute Becomes The Social Contract',
    dimension: 'Material',
    icon: Cpu,
    oneLine: 'Turn intelligence into a scarce resource, then make access to that resource a fairness question.',
    scene:
      'AI is hard to argue about because intelligence is invisible. Compute fixes that. Suddenly the future has chips, power plants, financing, grid constraints, and an allocation problem.',
    mechanism:
      'By making compute the concrete noun underneath intelligence, Altman gives the AI race a physical object. Then he expands the object from corporate moat to public resource.',
    evidence:
      'In the OpenAI Podcast, Stargate is explained as unprecedented compute because people would want far more if they knew what more compute could do. In the 2026 Forum, compute allocation becomes a society-wide question.',
    whatItBuys:
      'A simple explanation for massive infrastructure spending, plus a bridge from OpenAI scale to public-benefit language.',
    shadow:
      'Once compute becomes the bottleneck and the public good, whoever controls access to it gets to stand very close to the future’s front door.',
  },
  {
    number: '04',
    slug: 'institutional-we',
    name: 'The Institutional We',
    dimension: 'Institutional',
    icon: MessageSquare,
    oneLine: 'Let the company carry the claim before the person has to.',
    scene:
      'Listen for the pronoun. The boldest statements rarely arrive as one founder with one opinion. They arrive wearing the badge of the lab.',
    mechanism:
      'The word we spreads authority across OpenAI. It makes a claim feel researched, discussed, operationalized, and less emotionally personal.',
    evidence:
      'OpenAI product, policy, and strategy posts repeatedly use we believe, we are building, we are deploying, and we are offering as the grammar of conviction.',
    whatItBuys:
      'Collective authority, organizational gravity, and enough distance for the person to become a steward rather than just a promoter.',
    shadow:
      'When the outcome works, the founder can still get the aura. When the outcome fails, the subject of the sentence gets foggy.',
  },
  {
    number: '05',
    slug: 'starting-point-shield',
    name: 'The Starting Point Shield',
    dimension: 'Institutional',
    icon: Building2,
    oneLine: 'Float big proposals as early ideas, then quietly set the agenda everyone else has to react to.',
    scene:
      'The proposal walks into the room with soft hands. It says it is exploratory. It says others should challenge it. By then, the conversation has already moved onto its map.',
    mechanism:
      'Early-stage language lowers resistance. It makes the proposal feel democratic and unfinished while still naming the categories, risks, remedies, and timelines that shape the debate.',
    evidence:
      'The Industrial Policy post explicitly frames OpenAI’s ideas as early, exploratory, and not final, while opening fellowships, convenings, and feedback channels around those ideas.',
    whatItBuys:
      'Agenda control without the brittle posture of certainty. OpenAI can lead the conversation and invite critique at the same time.',
    shadow:
      'A starting point is not neutral just because it is polite. The first map of the room changes where everyone stands.',
  },
  {
    number: '06',
    slug: 'operationalize-it',
    name: 'Operationalize It',
    dimension: 'Procedural',
    icon: BookOpen,
    oneLine: 'Move the debate from opinion to usage, then from usage to embedded workflow.',
    scene:
      'The older version was simple: just use the tools. The newer version is more serious: put them in the business, wire them into systems, manage teams of agents, and let work reorganize around them.',
    mechanism:
      'The move treats contact as the proof layer. If people use the tool, they stop debating AI in the abstract. If companies operationalize it, the tool becomes infrastructure before policy catches up.',
    evidence:
      'OpenAI’s enterprise strategy says AI has moved past experimentation and toward agents company-wide. The OpenAI Podcast repeats practical advice around learning the tools, adaptability, creativity, and knowing what people want.',
    whatItBuys:
      'Adoption, seriousness, and a way to make skepticism look under-experienced rather than merely opposed.',
    shadow:
      'Some critiques are structural. You can use the tool every day and still worry about labor, concentration, surveillance, power, and democratic oversight.',
  },
  {
    number: '07',
    slug: 'full-stack-mandate',
    name: 'The Full-Stack Mandate',
    dimension: 'Material',
    icon: Layers3,
    oneLine: 'Turn OpenAI from model lab into infrastructure, interface, policy actor, and operating layer.',
    scene:
      'At first the product looked like a chatbot. Then the frame widened. Models, agents, enterprise systems, data-center financing, safeguards, policy convenings. The stack kept growing.',
    mechanism:
      'Each layer justifies the next. If models are powerful, you need products. If products are adopted, you need enterprise plumbing. If enterprise plumbing changes work, you need policy. If policy depends on access, you need compute.',
    evidence:
      'The 2026 enterprise AI post positions OpenAI as full stack from infrastructure and models to employee interfaces. GPT-5.5 describes the model helping improve the infrastructure that serves it.',
    whatItBuys:
      'Strategic inevitability. OpenAI starts to look less like one vendor and more like the operating system for the transition.',
    shadow:
      'The fuller the stack gets, the harder it becomes to separate public mission from market control.',
  },
  {
    number: '08',
    slug: 'abundance-with-guardrails',
    name: 'Abundance With Guardrails',
    dimension: 'Emotional',
    icon: Zap,
    oneLine: 'Promise intelligence too cheap to meter, then surround it with bounds, safeguards, and resilience language.',
    scene:
      'The dream is abundance. The wrapper is control. OpenAI gets to say the future should be widely available and carefully bounded in the same breath.',
    mechanism:
      'The abundance claim opens desire. The guardrail claim lowers fear. Together they let the company argue for scale without sounding indifferent to risk.',
    evidence:
      'The Gentle Singularity points toward cheap, widely available intelligence. GPT-5.5 and the 2026 Forum stress safeguards, cyber resilience, and broad social preparation.',
    whatItBuys:
      'A worldview that can inspire builders, reassure institutions, and defend continued deployment.',
    shadow:
      'The hard part is who defines the bounds. A guardrail can protect the road, but it can also decide who gets to drive.',
  },
];

const dynamics = [
  {
    title: 'The future gets softened before it gets accelerated.',
    body: 'The emotional frame lowers resistance. Once the room is calm, bigger claims can enter without setting off every alarm at once.',
  },
  {
    title: 'Deployment creates the proof that justifies more deployment.',
    body: 'The first release produces usage, familiarity, complaints, business cases, and policy pressure. That evidence makes the next release easier to defend.',
  },
  {
    title: 'Compute turns philosophy into logistics.',
    body: 'Intelligence is abstract. Compute is countable. Once the argument has chips, power, financing, and access, it can move from worldview to procurement plan.',
  },
  {
    title: 'The institution makes the founder feel less alone in the sentence.',
    body: 'OpenAI’s public voice absorbs personal conviction into organizational language. That makes the claim heavier and the accountability blurrier.',
  },
];

const tensions = [
  ['Optimism', 'Control', 'The future is good, but only if the right systems are built around it.'],
  ['Access', 'Concentration', 'Intelligence should be widely available, but compute is scarce and expensive.'],
  ['Experimentation', 'Accountability', 'Learning requires deployment, but deployment creates consequences before everyone has consented.'],
  ['Everyday Use', 'Institutional Redesign', 'The tool feels ordinary in your hands while the economy underneath it starts moving.'],
];

const vocabulary = [
  ['Gentle', 'The emotional softener that lets a singularity enter normal life.'],
  ['Compute', 'The physical noun underneath the intelligence promise.'],
  ['We', 'The pronoun that lets the institution carry conviction.'],
  ['Starting point', 'The polite phrase that still sets the agenda.'],
  ['Agents', 'The bridge from chatbot novelty to company-wide operating layer.'],
  ['Guardrails', 'The promise that abundance will not arrive without bounds.'],
];

export default function SamAltmanPage() {
  return (
    <div className="min-h-screen bg-[var(--grey-950)] text-white">
      <div className="grain-overlay" />
      <Navigation />

      <main>
        <section className="relative overflow-hidden px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,184,41,0.14),transparent_34%),radial-gradient(circle_at_78%_28%,rgba(59,130,246,0.12),transparent_32%)]" />
          <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/[0.035]" />
          <div className="relative mx-auto grid max-w-6xl gap-14 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
            <div>
              <Link
                href="/famous-fingerprints"
                className="mb-8 inline-flex text-xs font-medium uppercase tracking-[0.16em] text-[var(--brand-gold)] hover:text-[var(--brand-gold-light)]"
              >
                Famous Fingerprints™
              </Link>
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--grey-500)]">
                No. 03 · AI · OpenAI
              </p>
              <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
                Sam Altman makes scale feel administratively possible.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--grey-300)] md:text-xl">
                This is the part I find fascinating. Altman can describe superintelligence, grid-scale compute, labor disruption, and cyber risk without letting the room tip into panic.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--grey-400)]">
                The fingerprint is not just optimism. It is a method for making extreme AI scale feel gradual, governed, and already halfway inside normal life. The future puts on a badge, finds the conference room, and asks for the agenda.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[var(--brand-gold)]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0e12] shadow-2xl">
                <div className="relative aspect-[1200/820]">
                  <Image
                    src="/images/prompts/hidden-superpower-altman.png"
                    alt="Abstract Sam Altman strategic communication illustration"
                    fill
                    priority
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3 text-center">
                    <Stat value="8" label="Patterns" />
                    <Stat value="6" label="Sources" />
                    <Stat value="1" label="Core Move" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Core Discovery" title="The gentle emergency.">
          <div className="space-y-5 text-lg leading-relaxed text-[var(--grey-300)]">
            <p>
              Some leaders make the future feel like a threat. Altman makes it feel like a public works project with a very strange engine under the floor.
            </p>
            <p>
              That is the operating system underneath the public persona. He can hold two objects at once: the biggest technological claim in the room, and the calmest procedural language in the room. The claim gets larger. The delivery gets more administrative.
            </p>
            <p className="text-[var(--grey-400)]">
              This does not make the pattern good or bad by itself. It makes it powerful. The velvet glove is still attached to a hand that is moving very quickly.
            </p>
          </div>
        </Section>

        <section className="px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Header eyebrow="Four Dimensions" title="Where the fingerprint lives" note="The same public moves show up as procedure, infrastructure, institutional voice, and emotional control." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {dimensions.map((dimension) => (
                <article key={dimension.name} className="rounded-2xl border border-[var(--border-subtle)] bg-[#0d0e12] p-6">
                  <p className="mb-5 text-xs uppercase tracking-[0.16em] text-[var(--brand-gold)]">{dimension.name}</p>
                  <h3 className="font-display text-2xl leading-tight text-white">{dimension.verdict}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--grey-500)]">{dimension.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-20 bg-[#0c0c0e] border-y border-[var(--border-subtle)]">
          <div className="mx-auto max-w-6xl">
            <Header eyebrow="Source Trail" title="The pattern changed over time" note="The stronger read comes from tracking the shift from AGI planning to product rollout to superintelligence policy." />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sourceTrail.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[var(--border-subtle)] bg-[#0d0e12] p-5 transition-colors hover:border-[var(--brand-gold)]/40"
                >
                  <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[var(--brand-gold)]">{source.label}</p>
                  <p className="font-display text-xl leading-tight text-white">{source.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--grey-500)]">{source.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Header eyebrow="The Eight Patterns" title="What repeats" note="Each chapter names the move, the mechanism, the upside, and the shadow." />
            <div className="space-y-6">
              {patterns.map((pattern) => (
                <article
                  key={pattern.slug}
                  id={pattern.slug}
                  className="grid gap-8 rounded-[1.75rem] border border-[var(--border-subtle)] bg-[#0d0e12] p-6 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:p-8"
                >
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-mono text-xs text-[var(--brand-gold)]">{pattern.number}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--grey-500)]">
                        {pattern.dimension}
                      </span>
                    </div>
                    <pattern.icon className="mb-5 text-[var(--brand-gold)]" size={24} />
                    <h3 className="font-display text-3xl leading-[1.03] tracking-[-0.03em] text-white md:text-4xl">{pattern.name}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-[var(--grey-300)]">{pattern.oneLine}</p>
                  </div>

                  <div className="grid gap-4 text-sm leading-relaxed text-[var(--grey-400)] md:grid-cols-2">
                    <PatternBlock label="Scene" body={pattern.scene} />
                    <PatternBlock label="Mechanism" body={pattern.mechanism} />
                    <PatternBlock label="Evidence" body={pattern.evidence} />
                    <PatternBlock label="What It Buys" body={pattern.whatItBuys} />
                    <div className="md:col-span-2">
                      <PatternBlock label="Shadow" body={pattern.shadow} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Section eyebrow="Pattern Dynamics" title="How the moves reinforce each other">
          <div className="space-y-4">
            {dynamics.map((dynamic, index) => (
              <div key={dynamic.title} className="grid gap-4 border-b border-[var(--border-subtle)] pb-5 last:border-0 md:grid-cols-[64px_minmax(0,1fr)]">
                <span className="font-mono text-sm text-[var(--brand-gold)]">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-white">{dynamic.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[var(--grey-400)]">{dynamic.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <section className="px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Header eyebrow="Tension Map" title="The page under the page" note="This is where the fingerprint gets more useful than a list of quotes." />
            <div className="grid gap-4 md:grid-cols-2">
              {tensions.map(([left, right, body]) => (
                <article key={`${left}-${right}`} className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-[#0d0e12] p-6">
                  <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--brand-gold)]">
                    <span>{left}</span>
                    <span className="h-px flex-1 bg-white/10" />
                    <span>{right}</span>
                  </div>
                  <p className="text-base leading-relaxed text-[var(--grey-300)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24 md:py-32 bg-[#0c0c0e] border-y border-[var(--border-subtle)]">
          <div className="mx-auto grid max-w-6xl gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="rounded-[1.75rem] border border-[var(--border-subtle)] bg-[radial-gradient(circle_at_20%_0%,rgba(255,184,41,0.12),transparent_42%),#0d0e12] p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--brand-gold)]">Blind Spot</p>
              <h2 className="font-display text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">
                The mission and the moat keep sharing a jacket.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--grey-400)]">
                Iterative deployment may be sincere safety philosophy. Broad compute access may be sincere public-benefit thinking. Full-stack enterprise adoption may be sincere product strategy. The fingerprint is that the same moves also strengthen OpenAI’s position.
              </p>
            </div>
            <div className="space-y-5 rounded-[1.75rem] border border-[var(--border-subtle)] bg-[#0d0e12] p-8 text-base leading-relaxed text-[var(--grey-300)]">
              <p>
                That is where the analysis gets useful. It shows the double-duty pattern. The thing that protects the mission also protects the market position.
              </p>
              <p>
                The public gets language about adaptation, access, safeguards, and democratic debate. The company gets distribution, feedback, legitimacy, and infrastructure gravity. Both can be true. That is why the pattern is hard to argue with from the outside.
              </p>
              <p className="text-[var(--grey-400)]">
                The point is accuracy. If you only call it speed, you miss the safety argument. If you only call it safety, you miss the business mechanism. The fingerprint lives in the overlap.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-6xl">
            <Header eyebrow="Vocabulary" title="Words that carry the operating system" note="A fingerprint often hides in the terms a person reaches for without effort." />
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {vocabulary.map(([term, definition]) => (
                <div key={term} className="rounded-2xl border border-[var(--border-subtle)] bg-[#0d0e12] p-5">
                  <p className="font-display text-2xl text-white">{term}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--grey-500)]">{definition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--border-subtle)] bg-[radial-gradient(circle_at_20%_0%,rgba(255,184,41,0.12),transparent_38%),#0d0e12] p-8 text-center md:p-12">
            <Eye className="mx-auto mb-5 text-[var(--brand-gold)]" size={28} />
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--brand-gold)]">Apply The Lens</p>
            <h2 className="font-display text-4xl tracking-[-0.03em] text-white md:text-5xl">
              You have a version of this too.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--grey-400)]">
              Maybe yours is not a gentle emergency frame. Maybe it is how you calm a client, name a risk, or make a messy decision feel obvious. The pattern is already working. The work is making it visible.
            </p>
            <div className="mt-8 flex justify-center">
              <FingerScanButton href="/coaches-eye" label="Train Your Eye" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Header({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="mb-12 flex flex-col gap-3 border-b border-[var(--border-subtle)] pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--brand-gold)]">{eyebrow}</p>
        <h2 className="font-display text-4xl tracking-[-0.03em] text-white md:text-5xl">{title}</h2>
      </div>
      {note ? <p className="max-w-md text-sm leading-relaxed text-[var(--grey-500)]">{note}</p> : null}
    </div>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="px-6 lg:px-8 py-20 border-y border-[var(--border-subtle)] bg-[#0c0c0e]">
      <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--brand-gold)]">{eyebrow}</p>
          <h2 className="font-display text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function PatternBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
      <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[var(--brand-gold)]">{label}</p>
      <p>{body}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/45 px-3 py-3 backdrop-blur-md">
      <div className="font-display text-2xl leading-none text-white">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--grey-500)]">{label}</div>
    </div>
  );
}

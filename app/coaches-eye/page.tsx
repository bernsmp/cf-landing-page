'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDown, Mail, Loader2, CheckCircle, Eye, Target, Scale } from 'lucide-react';
import Link from 'next/link';

// Pattern Section Component
function PatternSection({
  number,
  title,
  icon: Icon,
  coachName,
  coachTitle,
  quote,
  children,
  isReversed = false,
}: {
  number: string;
  title: string;
  icon: React.ElementType;
  coachName: string;
  coachTitle: string;
  quote: string;
  children: React.ReactNode;
  isReversed?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      {/* Large background number */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span className="text-[20rem] md:text-[28rem] font-display font-bold text-[var(--grey-900)] leading-none">
          {number}
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${isReversed ? 'md:grid-flow-dense' : ''}`}
        >
          {/* Content */}
          <div className={isReversed ? 'md:col-start-2' : ''}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20">
                <Icon className="text-[var(--brand-gold)]" size={24} />
              </div>
              <span className="text-sm font-medium text-[var(--brand-gold)] uppercase tracking-wider">
                Pattern {number}
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>

            <div className="prose prose-invert prose-lg text-[var(--grey-300)] space-y-5">
              {children}
            </div>
          </div>

          {/* Coach Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={isReversed ? 'md:col-start-1' : ''}
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--grey-850)] to-[var(--grey-900)] border border-[var(--grey-800)]">
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-2 text-8xl font-display text-[var(--brand-gold)]/20 leading-none select-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl text-white font-display leading-relaxed mb-6">
                  {quote}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand-gold)]/20 flex items-center justify-center">
                    <span className="text-[var(--brand-gold)] font-display font-bold text-lg">
                      {coachName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-white block">
                      {coachName}
                    </cite>
                    <span className="text-sm text-[var(--grey-500)]">{coachTitle}</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Newsletter Form Component
function NewsletterForm({ variant = 'default' }: { variant?: 'default' | 'hero' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/convertkit/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          leadMagnet: 'coaches-eye',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
      >
        <CheckCircle className="text-emerald-400 flex-shrink-0" size={24} />
        <div>
          <p className="font-semibold text-white">You&apos;re in.</p>
          <p className="text-sm text-[var(--grey-400)]">Check your inbox for your first pattern breakdown.</p>
        </div>
      </motion.div>
    );
  }

  const isHero = variant === 'hero';

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex flex-col ${isHero ? 'sm:flex-row' : ''} gap-3`}>
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--grey-500)]" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={`w-full pl-12 pr-4 ${isHero ? 'py-4' : 'py-3'} bg-[var(--grey-900)] border border-[var(--grey-700)] rounded-xl text-white placeholder:text-[var(--grey-500)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors`}
            disabled={status === 'loading'}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className={`${isHero ? 'px-8 py-4' : 'px-6 py-3'} bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap`}
        >
          {status === 'loading' ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            'Get the Patterns'
          )}
        </button>
      </div>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}

export default function CoachesEyePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div className="min-h-screen bg-[var(--grey-950)] overflow-x-hidden">
      <div className="grain-overlay" />

      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[var(--grey-500)] hover:text-white transition-colors">
            &larr; Back to Cognitive Fingerprint
          </Link>
          <span className="text-sm text-[var(--grey-600)]">The Pattern Library</span>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Court lines abstraction */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" />
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </svg>
          </div>

          {/* Gold glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-gold)]/5 rounded-full blur-[150px]" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)]/80 border border-[var(--grey-800)] mb-8"
          >
            <Eye size={16} className="text-[var(--brand-gold)]" />
            <span className="text-sm text-[var(--grey-300)]">The Pattern Library: Vol. 1</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95]"
          >
            The Coach&apos;s{' '}
            <span className="text-gold-gradient">Eye</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-[var(--grey-400)] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            What legendary coaches see that players can&apos;t see in themselves.
          </motion.p>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl mx-auto mb-6"
          >
            <NewsletterForm variant="hero" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-[var(--grey-600)]"
          >
            Join 2,000+ experts learning to see what others miss
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-[var(--grey-600)]"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== THE SETUP ===== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-lg md:text-xl text-[var(--grey-300)] leading-relaxed"
          >
            <p className="text-2xl md:text-3xl text-white font-display">
              Here is something Phil Jackson understood that most people never will:
            </p>

            <p>
              Michael Jordan didn&apos;t know what made Michael Jordan great.
            </p>

            <p>
              Not really. Not in a way he could articulate, replicate, or teach. Jordan knew he was exceptional. He could feel it in his bones, in the way the game slowed down when he had the ball. But if you asked him to explain the cognitive pattern that let him read defenses three moves ahead? He&apos;d talk about &ldquo;instinct&rdquo; and &ldquo;wanting it more.&rdquo;
            </p>

            <p className="text-white">
              That&apos;s not an explanation. That&apos;s a feeling wearing a costume.
            </p>

            <p>
              Jackson saw something different. He saw a pattern Jordan was running automatically, a decision-making architecture that fired so fast Jordan experienced it as intuition rather than cognition. And Jackson&apos;s job wasn&apos;t to teach Jordan new skills.
            </p>

            <p className="text-2xl text-white font-display">
              His job was to make the invisible visible.
            </p>

            <p>
              This is what separates good coaches from legendary ones. Good coaches improve technique. Legendary coaches extract patterns their players don&apos;t know they&apos;re running, name those patterns, and then build systems that leverage them.
            </p>

            <p>
              The Coach&apos;s Eye isn&apos;t about seeing talent. Everyone can see talent. The Coach&apos;s Eye is about seeing the cognitive fingerprint underneath the talent. The operating system beneath the performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-md mx-auto" />

      {/* ===== PATTERN #1: THE ZOOM LENS ===== */}
      <PatternSection
        number="1"
        title="The Zoom Lens"
        icon={Target}
        coachName="Bill Belichick"
        coachTitle="New England Patriots"
        quote="Bill sees the game like he's watching it from a helicopter and through a microscope at the same time."
      >
        <p>
          <strong className="text-white">What it is:</strong> The ability to toggle between micro-details and macro-context in real-time.
        </p>

        <p>
          Bill Belichick watches game film differently than other coaches. Everyone knows this. What they don&apos;t know is <em>how</em> he watches differently.
        </p>

        <p>
          Most coaches watch film looking for plays. Belichick watches film looking for patterns across plays. He&apos;ll notice that a left tackle shifts his weight 0.3 seconds before a run play but not before a pass. He&apos;ll notice that a quarterback looks at his checkdown receiver on third-and-long but not on third-and-short.
        </p>

        <p>
          Then he zooms out.
        </p>

        <p>
          He asks: what does this pattern mean about how this team <em>thinks</em>? What does the weight shift reveal about the tackle&apos;s anticipation? What does the checkdown glance reveal about the quarterback&apos;s confidence in his line?
        </p>

        <p className="p-4 rounded-xl bg-[var(--grey-900)] border-l-2 border-[var(--brand-gold)]">
          <strong className="text-white">The 2001 Rams:</strong> Conventional wisdom said you couldn&apos;t stop &ldquo;The Greatest Show on Turf.&rdquo; They averaged 31 points per game. Belichick saw that Kurt Warner held the ball 0.2 seconds longer when the defense disguised their coverage. Not a lot. Almost nothing. But enough. The Patriots won 20-17.
        </p>

        <p>
          Everyone saw the same film. Belichick saw the pattern beneath the film.
        </p>
      </PatternSection>

      {/* ===== PATTERN #2: THE DELIBERATE MIRROR ===== */}
      <PatternSection
        number="2"
        title="The Deliberate Mirror"
        icon={Eye}
        coachName="Gregg Popovich"
        coachTitle="San Antonio Spurs"
        quote="Pop made me feel like I was watching film of myself, even when I was standing in front of him."
        isReversed
      >
        <p>
          <strong className="text-white">What it is:</strong> Reflecting players to themselves in ways they can&apos;t achieve alone.
        </p>

        <p>
          Gregg Popovich has five NBA championships. He&apos;s also famous for being brutal in his honesty. There&apos;s a clip of him yanking a player during a timeout and saying exactly three words before walking away. Reporters love this stuff. Fiery coach! Tough love!
        </p>

        <p>
          But that&apos;s not what&apos;s actually happening.
        </p>

        <p>
          Popovich is running a pattern. And the pattern isn&apos;t &ldquo;be honest&rdquo; or &ldquo;be tough.&rdquo; The pattern is: <em>show people their own behavior as if they were watching someone else do it.</em>
        </p>

        <p>
          When Popovich criticizes a player, he doesn&apos;t say &ldquo;you made a bad decision.&rdquo; He describes the decision in third person, almost like a play-by-play announcer. &ldquo;The guard takes the contested three with 18 seconds on the shot clock while two teammates are open.&rdquo;
        </p>

        <p>
          Then he waits.
        </p>

        <p>
          He&apos;s holding up a mirror. The player has to see their own choice from outside themselves. They have to experience what Popovich saw.
        </p>

        <p className="p-4 rounded-xl bg-[var(--grey-900)] border-l-2 border-[var(--brand-gold)]">
          <strong className="text-white">Why this works:</strong> Most feedback fails because it triggers identity defense. You tell someone they made a mistake, and their brain immediately starts explaining why it wasn&apos;t really a mistake. The Deliberate Mirror bypasses this. You&apos;re not attacking the person. You&apos;re describing behavior as if it happened to someone else.
        </p>
      </PatternSection>

      {/* ===== PATTERN #3: THE INVISIBLE LOAD ===== */}
      <PatternSection
        number="3"
        title="The Invisible Load"
        icon={Scale}
        coachName="John Wooden"
        coachTitle="UCLA Basketball"
        quote="You're not sleeping enough. Your left foot is dragging a quarter inch. You won't see it in your shot for two more days, but I see it now."
      >
        <p>
          <strong className="text-white">What it is:</strong> Sensing what&apos;s happening beneath performance before it shows up in results.
        </p>

        <p>
          John Wooden won 10 NCAA championships in 12 years. His practices were legendary for their precision. But here&apos;s the thing about Wooden that most people miss:
        </p>

        <p className="text-white text-xl">
          He almost never watched the ball.
        </p>

        <p>
          During practices, while everyone else focused on whether shots went in, Wooden watched feet. He watched shoulders. He watched eyes. He was reading the invisible loads his players were carrying: fatigue patterns, confidence patterns, distraction patterns.
        </p>

        <p>
          Wooden once pulled Bill Walton aside three days before a game and told him his left foot was dragging a quarter inch. Walton was shocked. He&apos;d been struggling with insomnia but hadn&apos;t told anyone. His stats were fine. The issue hadn&apos;t surfaced yet.
        </p>

        <p>
          But Wooden saw the pattern that preceded the problem.
        </p>

        <p className="p-4 rounded-xl bg-[var(--grey-900)] border-l-2 border-[var(--brand-gold)]">
          <strong className="text-white">Pat Summitt&apos;s version:</strong> The legendary Tennessee coach called it &ldquo;the tell before the tell.&rdquo; She&apos;d call players into her office before they knew something was off. One player described it: &ldquo;Coach would say &apos;what&apos;s going on at home?&apos; and I&apos;d say &apos;nothing&apos; and she&apos;d just wait. And then I&apos;d realize, oh, something IS going on at home. I just hadn&apos;t admitted it to myself yet.&rdquo;
        </p>
      </PatternSection>

      {/* ===== THE BRIDGE ===== */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-transparent via-[var(--grey-900)]/50 to-transparent">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
              The Coach&apos;s Eye Is Not Natural Talent
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-[var(--grey-300)] leading-relaxed text-left">
              <p>
                Here&apos;s what I find fascinating about these patterns.
              </p>

              <p>
                None of these coaches describe their abilities as talent. They describe them as <em>trained perception</em>. Ways of seeing they developed through thousands of hours of deliberate attention.
              </p>

              <p>
                Belichick didn&apos;t start with The Zoom Lens. He built it by watching film differently than everyone else, for longer, with different questions.
              </p>

              <p>
                Popovich didn&apos;t start with The Deliberate Mirror. He built it by studying how people respond to feedback, by experimenting with different approaches, by treating communication as a skill rather than a personality trait.
              </p>

              <p>
                Wooden didn&apos;t start with The Invisible Load. He built it by deciding to watch what everyone else ignored.
              </p>

              <p className="text-2xl text-white font-display pt-4">
                The patterns aren&apos;t magic. They&apos;re trainable. But you have to see them first.
              </p>

              <p className="text-2xl text-white font-display">
                That&apos;s the whole game.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== YOUR PATTERNS ===== */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--grey-850)] to-[var(--grey-900)] border border-[var(--grey-800)]"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
              Your Invisible Patterns
            </h3>

            <div className="space-y-5 text-lg text-[var(--grey-300)] mb-8">
              <p>
                You almost certainly have patterns like these running right now.
              </p>

              <p>
                Ways of seeing that feel like &ldquo;just how you think.&rdquo; Decisions that feel like instinct. Abilities that seem too obvious to name because you&apos;ve always had them.
              </p>

              <p>
                The people who work with you sense these patterns. They experience them. But they probably can&apos;t articulate them.
              </p>

              <p className="text-white">
                And neither can you.
              </p>

              <p>
                This is the gap. This is where value hides.
              </p>

              <p>
                The coach&apos;s job is to extract what players can&apos;t see about themselves. But who does that for you?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What Comes Next
            </h2>

            <p className="text-lg text-[var(--grey-400)] mb-4">
              This guide covered three patterns from legendary coaches. There are dozens more.
            </p>

            <p className="text-xl text-[var(--grey-300)] mb-8">
              Every week: <span className="text-white">one pattern</span>. One legendary performer. One thing you&apos;ll never unsee.
            </p>

            <div className="max-w-md mx-auto mb-6">
              <NewsletterForm />
            </div>

            <p className="text-sm text-[var(--grey-600)]">
              Join the Pattern Library from Signal &gt; Noise
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 border-t border-[var(--grey-900)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--grey-600)]">
            Part of The Pattern Library from{' '}
            <Link href="/newsletter" className="text-[var(--grey-400)] hover:text-white transition-colors">
              Signal &gt; Noise
            </Link>
          </p>
          <p className="text-sm text-[var(--grey-600)]">
            <Link href="/" className="hover:text-white transition-colors">
              Cognitive Fingerprint
            </Link>
            {' '}&middot;{' '}
            <Link href="/insights" className="hover:text-white transition-colors">
              Insights
            </Link>
            {' '}&middot;{' '}
            <Link href="/start" className="hover:text-white transition-colors">
              Work With Me
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

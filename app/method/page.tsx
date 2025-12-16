'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { ArrowRight, Brain, Cpu, Users, Eye, Lightbulb, Map, Compass, Target, Zap, Scale, Workflow } from 'lucide-react';

const stats = [
  {
    value: '70-90%',
    label: 'of expert knowledge operates unconsciously',
    source: 'Polanyi\'s Paradox (1966): "We know more than we can tell."',
  },
  {
    value: '95%',
    label: 'accuracy in expert intuition—but unexplainable',
    source: 'Dreyfus Brothers: Experts act from pattern recognition so fast it feels like instinct.',
  },
  {
    value: '15%',
    label: 'of mental processing is visible to us',
    source: 'Flavell: 85% of your cognitive work happens below the threshold of consciousness.',
  },
];

const aiProvides = [
  'Pattern recognition at computational scale',
  'Analysis across 20+ hours of transcripts',
  'Cross-conversation pattern detection',
  'Micro-pattern visibility humans miss',
  'Statistical validation of pattern frequency',
];

const facilitationProvides = [
  'Guided interpretation of findings',
  'Navigation through psychological resistance',
  '"Aha" moment creation',
  'Trust building and ownership claiming',
  'Bridge from unconscious to conscious',
];

const guideFramework = [
  { icon: Eye, label: 'THE EYE', description: 'What you see in their specific situation' },
  { icon: Scale, label: 'THE JUDGMENT', description: 'Which framework applies when' },
  { icon: Target, label: 'THE CALIBRATION', description: 'Adjusting for their context' },
  { icon: Brain, label: 'THE PATTERN RECOGNITION', description: '50,000+ hours of experience' },
  { icon: Workflow, label: 'THE SEQUENCING', description: 'What order for THIS client' },
  { icon: Zap, label: 'THE CONFIDENCE', description: 'It will work with you guiding' },
];

const extractions = [
  {
    title: 'YOUR CORE METHODOLOGY',
    description: 'The repeatable process you use to get clients results—documented and systematized for the first time.',
  },
  {
    title: 'YOUR MENTAL MODELS',
    description: 'How you think about problems differently than everyone else. The frameworks running beneath your conscious awareness.',
  },
  {
    title: 'YOUR DECISION-MAKING CRITERIA',
    description: 'The evaluation patterns you use to assess solutions. What you\'re actually looking for (even when you can\'t name it).',
  },
  {
    title: 'YOUR SIGNATURE INSIGHTS',
    description: 'The "aha moments" that make people say "I never thought about it that way." The perspectives only YOU bring.',
  },
  {
    title: 'YOUR VOICE PATTERNS',
    description: 'The specific way YOU explain complex ideas. What makes your communication land differently.',
  },
];

const outcomes = [
  {
    icon: '/icons/brain-7165991.svg',
    title: 'Discover What Actually Makes You Different',
    description: 'Not a vague positioning statement. The specific patterns nobody else has—named, documented, and ready to claim.',
    label: 'DIFFERENTIATION',
  },
  {
    icon: '/icons/premium-quality-2881890.svg',
    title: 'Stop Underselling Yourself',
    description: 'When you can show exactly HOW you create results, "what do you charge?" becomes "when can we start?"',
    label: 'PRICING POWER',
  },
  {
    icon: '/icons/growth-11474911.svg',
    title: 'Finally Teach What You Do',
    description: 'That thing where clients say "I need YOU specifically"? Now you can show others how to replicate 80% of it.',
    label: 'SCALABILITY',
  },
  {
    icon: '/icons/product-development-11474912.svg',
    title: 'Turn Your Patterns Into Products',
    description: 'Each pattern becomes a framework you can teach. A tool you can license. Revenue that does not require your presence.',
    label: 'IP ASSETS',
  },
];

export default function MethodPage() {
  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-gold)] opacity-[0.03] blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-[var(--brand-gold)] text-sm font-semibold mb-8"
            >
              THE SCIENCE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Why you can't see your own&nbsp;expertise
              <br />
              <span className="text-[var(--grey-500)]">(And how we extract&nbsp;it)</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-[var(--grey-400)] max-w-2xl mx-auto"
            >
              Your expertise got embarrassed and stopped explaining itself years ago. Cognitive science has known this since 1966. Here's what it found.
            </motion.p>
          </div>
        </section>

        {/* The Invisibility Problem - Stats */}
        <section className="py-24 px-6 lg:px-8 bg-[var(--grey-900)]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                The Invisibility Problem
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] text-center"
                >
                  <p className="text-4xl md:text-5xl font-display font-bold text-gold-gradient mb-4">
                    {stat.value}
                  </p>
                  <p className="text-lg text-white mb-4">{stat.label}</p>
                  <p className="text-sm text-[var(--grey-500)] italic">{stat.source}</p>
                </motion.div>
              ))}
            </div>

            {/* Bridge copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <p className="text-xl text-white font-semibold">
                This is the part I find fascinating.
              </p>
              <div className="space-y-4 text-[var(--grey-400)]">
                <p>You thought you could just "sit down and write it out." You scheduled strategic thinking time on your calendar, moved it three times, then deleted it.</p>
                <p>Interview-based approaches only access the 10% you can already articulate. Personality tests measure traits, not expertise. Generic frameworks miss what's unique about YOUR thinking.</p>
                <p>The pattern is shy. It assumes you already know about it. It does not introduce itself at parties.</p>
              </div>
              <p className="text-lg text-[var(--brand-gold)] font-semibold pt-4">
                You need something that can see what you can't.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI + Human Facilitation */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Why AI + Human Facilitation Works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AI Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-blue)]/20 border border-[var(--accent-blue)]/30 flex items-center justify-center">
                    <Cpu className="text-[var(--accent-blue)]" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">AI Provides</h3>
                </div>
                <ul className="space-y-3">
                  {aiProvides.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[var(--grey-300)]">
                      <span className="text-[var(--accent-blue)] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Facilitation Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-gold)]/20 border border-[var(--brand-gold)]/30 flex items-center justify-center">
                    <Users className="text-[var(--brand-gold)]" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">Facilitation Provides</h3>
                </div>
                <ul className="space-y-3">
                  {facilitationProvides.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[var(--grey-300)]">
                      <span className="text-[var(--brand-gold)] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Together */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-r from-[var(--accent-blue)]/10 via-[var(--grey-900)] to-[var(--brand-gold)]/10 border border-[var(--grey-700)] text-center"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-4">Together</h3>
              <p className="text-lg text-[var(--grey-300)] mb-4">
                AI watches you work and finds the patterns. The facilitation helps you claim them.
              </p>
              <p className="text-[var(--grey-400)]">
                The AI doesn't know what the patterns mean. You don't know which patterns exist. <span className="text-gold-gradient font-semibold">We find out together.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Map vs Guide Framework */}
        <section className="py-24 px-6 lg:px-8 bg-[var(--grey-900)]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Why sharing your framework creates <span className="text-gold-gradient">MORE</span> demand
              </h2>
              <p className="text-[var(--grey-400)]">(Not less)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] mb-12"
            >
              <div className="space-y-6 text-lg">
                <p className="text-[var(--grey-300)]">
                  <span className="text-white font-semibold">Jay Abraham</span> has published every framework he's ever created. Books. Recordings. Thousands of hours of content. He created an AI CLONE of himself. He teaches people PROMPTS to replicate his thinking.
                </p>
                <p className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                  He still commands $250,000+ per engagement.
                </p>
                <p className="text-white text-xl font-semibold">Why?</p>
                <p className="text-[var(--grey-300)]">
                  Because <span className="text-[var(--brand-gold)]">people don't pay for maps. They pay for guides.</span>
                </p>
              </div>
            </motion.div>

            {/* The 6 things */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-center text-[var(--grey-300)] mb-8">
                The guide (you) provides the six things that can't be replicated:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guideFramework.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="text-[var(--brand-gold)] group-hover:scale-110 transition-transform" size={20} />
                      <span className="text-sm font-bold text-[var(--brand-gold)]">{item.label}</span>
                    </div>
                    <p className="text-[var(--grey-300)] text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-[var(--brand-gold)]/10 to-transparent border border-[var(--brand-gold)]/30"
            >
              <p className="text-xl text-white font-semibold mb-2">
                The more you share the map, the more demand you create for the guide.
              </p>
              <p className="text-[var(--brand-gold)]">
                Visibility isn't the threat. Invisibility is.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Gets Extracted */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                What Gets Extracted
              </h2>
              <p className="text-[var(--grey-400)]">
                The system already exists. We just have to find it.
              </p>
            </motion.div>

            <div className="space-y-6">
              {extractions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-colors"
                >
                  <h3 className="font-display text-lg font-bold text-[var(--brand-gold)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--grey-300)]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Becomes Possible */}
        <section className="py-24 px-6 lg:px-8 bg-[var(--grey-900)]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20 text-[var(--brand-gold)] text-xs font-semibold tracking-widest mb-6">
                WHAT BECOMES POSSIBLE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                When your expertise becomes visible
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--glow-gold),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs font-semibold tracking-wider mb-4">
                        {outcome.label}
                      </span>

                      <div className="w-14 h-14 rounded-xl bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-gold)]/20 transition-colors">
                        <Image
                          src={outcome.icon}
                          alt=""
                          width={32}
                          height={32}
                          className="opacity-90"
                        />
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                        {outcome.title}
                      </h3>

                      <p className="text-[var(--grey-400)] leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Your methodology is ready to be found.
              </h2>
              <p className="text-lg text-[var(--grey-400)] mb-8">
                It has been ready for years. It is just waiting for someone else to make the introduction.
              </p>
              <Link
                href="https://calendar.app.google/JDxdGpxuqzmxCB8a7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300"
              >
                Book 30 Minutes
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


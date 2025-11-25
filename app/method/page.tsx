'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
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
              Based on 50 years of cognitive science research—from Polanyi's Paradox to modern neuroscience of expertise.
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
                This is why traditional methods fail. You can't extract what you can't see.
              </p>
              <div className="space-y-4 text-[var(--grey-400)]">
                <p>Interview-based approaches only access the 10% you can already articulate.</p>
                <p>Personality tests measure traits, not expertise.</p>
                <p>Generic frameworks miss what's unique about YOUR thinking.</p>
              </div>
              <p className="text-lg text-[var(--brand-gold)] font-semibold pt-4">
                The solution requires something that can see what you can't.
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
                The transformation neither can create alone.
              </p>
              <p className="text-[var(--grey-400)]">
                AI sees patterns. Facilitation creates meaning.
                <br />
                <span className="text-gold-gradient font-semibold">Data becomes insight. Insight becomes ownership.</span>
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
                Through guided sessions and strategic prompts, we extract:
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

        {/* CTA */}
        <section className="py-24 px-6 lg:px-8 bg-[var(--grey-900)]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                How much of YOUR expertise is invisible?
              </h2>
              <p className="text-lg text-[var(--grey-400)] mb-8">
                Take the 3-Minute Invisibility Test and find out.
                <br />
                <span className="text-[var(--grey-500)]">5 questions. No email required. Instant results.</span>
              </p>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300"
              >
                Start the Assessment
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


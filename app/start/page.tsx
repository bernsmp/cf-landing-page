'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, Mail, Sparkles, Calendar, Check, ChevronDown, ChevronUp } from 'lucide-react';

const tiers = [
  {
    label: 'FREE',
    name: 'Signal > Noise Newsletter',
    price: 'Free',
    description: 'Weekly insights on extracting and monetizing invisible expertise.',
    features: [
      'Pattern analysis of public figures',
      'Extraction methodology breakdowns',
      'Research-backed frameworks',
      'First access to new content',
    ],
    cta: 'Subscribe Free',
    href: 'https://irreplaceablepositioning.substack.com',
    icon: Mail,
    external: true,
    perfect: 'Curious experts who want to understand the methodology before going deeper.',
  },
  {
    label: 'PREMIUM',
    name: 'Premium Insights',
    price: '$XX/month',
    description: 'Deep dives, advanced frameworks, and extraction methods you won\'t find anywhere else.',
    features: [
      'Everything in free tier',
      'Advanced extraction techniques',
      'Step-by-step methodology guides',
      'Premium pattern analyses',
      'Community access',
    ],
    cta: 'Get Premium Access',
    href: 'https://irreplaceablepositioning.substack.com',
    icon: Sparkles,
    featured: true,
    external: true,
    perfect: 'Experts ready to start extracting their own patterns with guidance.',
  },
  {
    label: 'WORK TOGETHER',
    name: 'Full Extraction',
    price: 'Starting at $3,000',
    description: 'The complete Cognitive Fingerprint™ experience.',
    features: [
      '15-20 documented invisible patterns',
      'Named, proprietary frameworks',
      'Full methodology mapping',
      'Positioning and messaging guidance',
      'Implementation roadmap',
    ],
    cta: 'Schedule a Conversation',
    href: '#calendar',
    icon: Calendar,
    perfect: 'Experts ready to make their invisible expertise visible—and monetizable.',
  },
];

const faqs = [
  {
    question: 'What if I don\'t have transcripts?',
    answer: 'We can work with any recorded content—client calls, podcast appearances, training sessions, even voice memos. If you\'ve been doing your work, you have material. We\'ll help you identify what\'s most valuable.',
  },
  {
    question: 'How long does extraction take?',
    answer: 'A full Cognitive Fingerprint™ extraction typically takes 2-4 weeks, including analysis and facilitated sessions. Many clients see their first patterns within the first session.',
  },
  {
    question: 'What if there\'s nothing unique about my expertise?',
    answer: 'In 100+ extractions, we\'ve never found an expert without unique patterns. The "nothing special" feeling IS the expertise paradox—you can\'t see what\'s become automatic. That\'s exactly what we extract.',
  },
  {
    question: 'Will knowing my patterns make me self-conscious?',
    answer: 'No. Conscious recognition of unconscious competence (Stage 5) is different from conscious competence (Stage 3). You\'re not learning to think differently—you\'re learning to DESCRIBE how you already think. The patterns stay automatic.',
  },
  {
    question: 'Can AI just do this without human facilitation?',
    answer: 'AI can identify patterns. It can\'t create ownership. The transformation happens when you SEE your patterns, TRUST them, and CLAIM them. That requires human facilitation—navigating resistance, creating "aha" moments, building confidence in what you\'ve discovered.',
  },
];

export default function StartPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Choose your path
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--grey-400)] max-w-2xl mx-auto"
            >
              From free insights to full extraction—pick the level that fits where you are.
            </motion.p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-4 py-1 bg-[var(--brand-gold)] text-[var(--grey-950)] text-xs font-bold rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className={`h-full p-8 rounded-2xl border flex flex-col ${tier.featured ? 'bg-gradient-to-br from-[var(--brand-gold)]/10 to-[var(--grey-900)] border-[var(--brand-gold)]/50' : 'bg-[var(--grey-850)] border-[var(--grey-800)]'}`}>
                    {/* Label */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-4 w-fit ${tier.featured ? 'bg-[var(--brand-gold)]/20 text-[var(--brand-gold)]' : 'bg-[var(--grey-800)] text-[var(--grey-400)]'}`}>
                      {tier.label}
                    </span>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${tier.featured ? 'bg-[var(--brand-gold)]/20 border border-[var(--brand-gold)]/30' : 'bg-[var(--grey-800)] border border-[var(--grey-700)]'}`}>
                      <tier.icon className={tier.featured ? 'text-[var(--brand-gold)]' : 'text-[var(--grey-400)]'} size={28} />
                    </div>

                    {/* Name & Price */}
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className={`text-2xl font-bold mb-4 ${tier.featured ? 'text-[var(--brand-gold)]' : 'text-white'}`}>
                      {tier.price}
                    </p>

                    {/* Description */}
                    <p className="text-[var(--grey-400)] mb-6">{tier.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-[var(--grey-300)]">
                          <Check className={`flex-shrink-0 mt-0.5 ${tier.featured ? 'text-[var(--brand-gold)]' : 'text-[var(--success)]'}`} size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Perfect for */}
                    <p className="text-sm text-[var(--grey-500)] mb-6 italic">
                      Perfect for: {tier.perfect}
                    </p>

                    {/* CTA */}
                    {tier.external ? (
                      <a
                        href={tier.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${tier.featured ? 'bg-[var(--brand-gold)] text-[var(--grey-950)] hover:bg-[var(--brand-gold-light)]' : 'bg-[var(--grey-800)] text-white hover:bg-[var(--grey-700)]'}`}
                      >
                        {tier.cta}
                        <ArrowRight size={18} />
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          // Scroll to calendar section or open modal
                          const el = document.getElementById('calendar');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${tier.featured ? 'bg-[var(--brand-gold)] text-[var(--grey-950)] hover:bg-[var(--brand-gold-light)]' : 'bg-[var(--grey-800)] text-white hover:bg-[var(--grey-700)]'}`}
                      >
                        {tier.cta}
                        <ArrowRight size={18} />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 lg:px-8 bg-[var(--grey-900)]">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl bg-[var(--grey-850)] border border-[var(--grey-800)] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="text-[var(--brand-gold)] flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-[var(--grey-500)] flex-shrink-0" size={20} />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-[var(--grey-400)]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Placeholder */}
        <section id="calendar" className="py-24 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)]"
            >
              <Calendar className="text-[var(--brand-gold)] mx-auto mb-6" size={48} />
              
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Schedule a Conversation
              </h2>
              
              <p className="text-[var(--grey-400)] mb-8">
                Let's discuss how Cognitive Fingerprint™ can help you extract and monetize your invisible expertise.
              </p>

              {/* Calendar embed placeholder */}
              <div className="p-8 rounded-xl bg-[var(--grey-800)] border border-dashed border-[var(--grey-700)] text-[var(--grey-500)]">
                <p className="mb-4">Calendar booking widget will be embedded here</p>
                <p className="text-sm">(Calendly, Cal.com, or similar)</p>
              </div>

              <p className="mt-8 text-sm text-[var(--grey-500)]">
                Or email directly: <a href="mailto:max@maxpbernstein.com" className="text-[var(--brand-gold)] hover:underline">max@maxpbernstein.com</a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-8 bg-[var(--grey-900)]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Still not sure where to start?
              </h2>
              
              <p className="text-lg text-[var(--grey-400)] mb-8">
                Take the 3-Minute Invisibility Test.
                <br />
                Find out how much of your expertise is hidden.
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


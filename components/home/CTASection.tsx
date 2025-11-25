'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Calendar } from 'lucide-react';

const tiers = [
  {
    label: 'FREE',
    title: 'Join Signal > Noise',
    description: 'Weekly insights on extracting invisible expertise.',
    cta: 'Subscribe',
    href: 'https://irreplaceablepositioning.substack.com',
    icon: Mail,
    external: true,
  },
  {
    label: 'PREMIUM',
    title: 'Premium Insights',
    description: 'Deep dives, advanced frameworks, extraction methods.',
    cta: 'Get Access',
    href: 'https://irreplaceablepositioning.substack.com',
    icon: Sparkles,
    featured: true,
    external: true,
  },
  {
    label: 'WORK TOGETHER',
    title: 'Full Extraction',
    description: '15-20 documented patterns. Named, mapped, monetizable.',
    cta: 'Schedule a Conversation',
    href: '/start',
    icon: Calendar,
  },
];

export const CTASection = () => {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-[var(--brand-gold)] opacity-[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your expertise is already exceptional.
            <br />
            <span className="text-gold-gradient">Let's show you exactly how.</span>
          </h2>
        </motion.div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
                  tier.featured 
                    ? 'bg-gradient-to-br from-[var(--brand-gold)]/10 to-[var(--grey-900)] border-[var(--brand-gold)]/50 hover:border-[var(--brand-gold)]' 
                    : 'bg-[var(--grey-850)] border-[var(--grey-800)] hover:border-[var(--grey-700)]'
                }`}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[var(--brand-gold)] text-[var(--grey-950)] text-xs font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Label */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-4 ${
                  tier.featured 
                    ? 'bg-[var(--brand-gold)]/20 text-[var(--brand-gold)]' 
                    : 'bg-[var(--grey-800)] text-[var(--grey-400)]'
                }`}>
                  {tier.label}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  tier.featured 
                    ? 'bg-[var(--brand-gold)]/20 border border-[var(--brand-gold)]/30' 
                    : 'bg-[var(--grey-800)] border border-[var(--grey-700)]'
                }`}>
                  <tier.icon className={tier.featured ? 'text-[var(--brand-gold)]' : 'text-[var(--grey-400)]'} size={24} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {tier.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--grey-400)] mb-6">
                  {tier.description}
                </p>

                {/* CTA */}
                {tier.external ? (
                  <a
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      tier.featured
                        ? 'bg-[var(--brand-gold)] text-[var(--grey-950)] hover:bg-[var(--brand-gold-light)]'
                        : 'bg-[var(--grey-800)] text-white hover:bg-[var(--grey-700)]'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <Link
                    href={tier.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      tier.featured
                        ? 'bg-[var(--brand-gold)] text-[var(--grey-950)] hover:bg-[var(--brand-gold-light)]'
                        : 'bg-[var(--grey-800)] text-white hover:bg-[var(--grey-700)]'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--grey-400)] mb-6">
            Not sure where to start? Find out how much of your expertise is invisible.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[var(--brand-gold)] text-[var(--brand-gold)] font-semibold rounded-xl hover:bg-[var(--brand-gold)] hover:text-[var(--grey-950)] transition-all duration-300"
          >
            Take the 3-Minute Invisibility Test
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};


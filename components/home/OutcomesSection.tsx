'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, DollarSign, Users, Package } from 'lucide-react';

const outcomes = [
  {
    icon: Fingerprint,
    title: 'Discover Your Actual Difference',
    description: 'The specific combination of patterns nobody else has. What actually makes you exceptional—named and documented.',
    label: 'DIFFERENTIATION',
  },
  {
    icon: DollarSign,
    title: 'Stop Underselling Yourself',
    description: 'When you can articulate exactly HOW you create results, premium pricing becomes obvious.',
    label: 'PRICING POWER',
  },
  {
    icon: Users,
    title: 'Finally Teach What You Do',
    description: 'That thing where clients say "I need YOU specifically"? Now you can show others how to replicate 80% of it.',
    label: 'SCALABILITY',
  },
  {
    icon: Package,
    title: 'Build Products From Your Patterns',
    description: 'Each pattern becomes a framework. A tool. A training module. IP you can license. Assets that work while you sleep.',
    label: 'IP ASSETS',
  },
];

export const OutcomesSection = () => {
  return (
    <section className="relative py-32 px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--grey-900)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 text-[var(--brand-gold)] text-sm font-semibold mb-6">
            WHAT BECOMES POSSIBLE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            When your expertise becomes visible
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-all duration-500 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Label */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs font-semibold tracking-wider mb-4">
                    {outcome.label}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-gold)]/20 transition-colors">
                    <outcome.icon className="text-[var(--brand-gold)]" size={24} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                    {outcome.title}
                  </h3>
                  
                  {/* Description */}
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
  );
};


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const LeadMagnetSection = () => {
  return (
    <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[var(--brand-gold)] opacity-[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Container with border and subtle background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[var(--brand-gold)]/20 bg-gradient-to-br from-[var(--grey-900)] via-[var(--grey-850)] to-[var(--grey-900)] p-8 md:p-12 overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--grey-600) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--brand-gold)]/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--brand-gold)]/10 to-transparent" />

          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--brand-gold)] rounded-full blur-xl opacity-20 animate-pulse-glow" />
                <div className="relative w-16 h-16 rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 flex items-center justify-center">
                  <Sparkles size={28} className="text-[var(--brand-gold)]" />
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Your Best Stuff Is Locked In Your Head. Here's The Key.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[var(--grey-400)] mb-8 max-w-2xl mx-auto"
            >
              Two AI prompts. One client call. You'll discover expertise you've been using for years without realizing it. The patterns. The instincts. The moves that make you different. All sitting there in your transcripts. Waiting.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://maxbernstein.kit.com/cozora"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-gold)]/20 hover:-translate-y-0.5"
              >
                Get the Free Prompts
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[var(--grey-500)] text-sm mt-6"
            >
              Free. No credit card required.
            </motion.p>
          </div>

          {/* Shadow beneath */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-[var(--brand-gold)]/5 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};


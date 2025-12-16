'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

export const CTASectionV2 = () => {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-[var(--brand-gold)] opacity-[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your methodology is ready to be found.
          </h2>
          <p className="text-lg text-[var(--grey-400)]">
            It has been ready for years. It's just waiting for someone else to make the introduction.
          </p>
        </motion.div>

        {/* Two paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Primary CTA - Book a call */}
          <a
            href="https://calendar.app.google/JDxdGpxuqzmxCB8a7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-gold)]/20 hover:-translate-y-0.5"
          >
            <Calendar size={20} />
            Book 30 Minutes
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA - Newsletter */}
          <a
            href="https://irreplaceablepositioning.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-transparent text-[var(--grey-300)] font-semibold rounded-xl border border-[var(--border-medium)] hover:border-[var(--brand-gold)]/50 hover:text-white transition-all duration-300"
          >
            <Mail size={18} />
            Join Signal › Noise
          </a>
        </motion.div>

        {/* Subtle reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[var(--grey-500)] text-sm"
        >
          Not ready to talk? The newsletter is where I share what I find. Weekly.
        </motion.p>
      </div>
    </section>
  );
};

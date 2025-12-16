'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const VideoSection = () => {
  return (
    <section id="video" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--border-subtle)] text-[var(--brand-gold)] text-xs font-semibold tracking-widest mb-6">
            SEE AN EXTRACTION
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Watch what becomes visible
          </h2>
        </motion.div>

        {/* Video container - placeholder state */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Video wrapper with premium styling */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--brand-gold)]/20 bg-[var(--grey-900)]">
            {/* Placeholder background - gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--grey-850)] via-[var(--grey-900)] to-[var(--grey-950)]" />

            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--grey-600) 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}
            />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play button */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[var(--brand-gold)] rounded-full blur-xl opacity-30 animate-pulse-glow" />
                <div className="relative w-20 h-20 rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 flex items-center justify-center">
                  <Play size={32} className="text-[var(--brand-gold)] fill-current ml-1" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2">
                Extraction Walkthrough
              </h3>

              {/* Coming soon badge */}
              <span className="px-3 py-1 rounded-full bg-[var(--grey-800)] border border-[var(--grey-700)] text-[var(--grey-400)] text-sm">
                Coming Soon
              </span>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[var(--brand-gold)]/10 to-transparent" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[var(--brand-gold)]/10 to-transparent" />
          </div>

          {/* Shadow beneath */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-[var(--brand-gold)]/5 blur-2xl rounded-full" />
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[var(--grey-500)] text-sm mt-8"
        >
          A walkthrough of a real Cognitive Fingerprint extraction (anonymized)
        </motion.p>
      </div>
    </section>
  );
};

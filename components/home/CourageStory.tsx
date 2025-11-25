'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

export const CourageStory = () => {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-gold)] opacity-[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-sm text-[var(--grey-400)]">
              <Sparkles size={14} className="text-[var(--brand-gold)]" />
              Real Extraction Story
            </span>
          </div>

          {/* Story card */}
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-6 -left-4 md:-left-8">
              <Quote size={64} className="text-[var(--brand-gold)] opacity-20" />
            </div>

            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--grey-850)] to-[var(--grey-900)] border border-[var(--grey-700)] relative overflow-hidden">
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--brand-gold)] via-[var(--brand-gold-light)] to-transparent" />
              
              <div className="space-y-8 text-lg md:text-xl leading-relaxed">
                {/* Opening */}
                <p className="text-[var(--grey-300)] font-display text-2xl md:text-3xl font-semibold">
                  She'd been coaching for 30 years.
                </p>

                <p className="text-[var(--grey-400)]">
                  When I read back what I found in her transcripts, her reaction stopped me cold.
                </p>

                {/* The emotional quote */}
                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="py-6 px-6 md:px-8 bg-[var(--brand-gold)]/5 border-l-4 border-[var(--brand-gold)] rounded-r-xl"
                >
                  <p className="text-white text-xl md:text-2xl italic font-display">
                    "My heart is pounding. I have chills running up and down my arms right now. <span className="text-[var(--brand-gold)]">Literally.</span>"
                  </p>
                </motion.blockquote>

                {/* What was found */}
                <p className="text-[var(--grey-400)]">
                  I'd identified things like her <span className="text-[var(--brand-gold)] font-semibold">"Courage Circulation System"</span>—how she harvests courage from one person's story and transplants it into another's challenge.
                </p>
                
                <p className="text-[var(--grey-400)]">
                  Her <span className="text-[var(--brand-gold)] font-semibold">"Two-Word Diagnostic"</span> that assesses emotional state in seconds. Her <span className="text-[var(--brand-gold)] font-semibold">"Dignity Restoration Protocol."</span>
                </p>

                {/* The emotional turn */}
                <p className="text-white text-xl md:text-2xl font-display font-semibold">
                  She started crying.
                </p>

                {/* Final quote */}
                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="py-6 px-6 md:px-8 bg-[var(--grey-800)]/50 rounded-xl border border-[var(--grey-700)]"
                >
                  <p className="text-[var(--grey-300)] text-lg md:text-xl italic">
                    "You just unleashed years of people asking 'so what is it?' and me saying 'you know, it's like chocolate ice cream. <span className="text-white">I can't explain what it tastes like.</span>'"
                  </p>
                </motion.blockquote>

                {/* Closer */}
                <p className="text-[var(--grey-300)] text-center pt-4">
                  <span className="text-gold-gradient font-semibold text-xl">Thirty years of expertise.</span>
                  <br />
                  <span className="text-[var(--grey-400)]">She'd never been able to articulate it before.</span>
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-10 pt-6 border-t border-[var(--grey-700)] text-center">
                <p className="text-sm text-[var(--grey-500)]">
                  — Cognitive Fingerprint™ extraction session
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


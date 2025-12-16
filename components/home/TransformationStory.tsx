'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const TransformationStory = () => {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--grey-900)]/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start"
        >
          {/* Pull quote - left side */}
          <div className="lg:col-span-2 relative">
            {/* Decorative quote mark */}
            <Quote
              size={64}
              className="absolute -top-4 -left-2 text-[var(--brand-gold)] opacity-20"
            />

            <blockquote className="relative pt-8">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white italic leading-snug">
                "My heart is pounding. I have chills running up and down my arms right now. Literally."
              </p>
              <footer className="mt-6">
                <p className="text-[var(--grey-400)]">
                  — 30-year coaching veteran
                </p>
                <p className="text-[var(--grey-500)] text-sm">
                  seeing her expertise extracted for the first time
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Story - right side */}
          <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed">
            <p className="text-white text-xl font-semibold">
              She'd been coaching for 30 years.
            </p>

            <p className="text-[var(--grey-300)]">
              When I read back what I found in her transcripts, her reaction stopped me cold.
            </p>

            <p className="text-[var(--grey-300)]">
              I'd identified things like her <span className="text-[var(--brand-gold)] font-medium">"Courage Circulation System"</span>—how she harvests courage from one person's story and transplants it into another's challenge.
            </p>

            <p className="text-[var(--grey-300)]">
              Her <span className="text-[var(--brand-gold)] font-medium">"Two-Word Diagnostic"</span> that assesses emotional state in seconds. Her <span className="text-[var(--brand-gold)] font-medium">"Dignity Restoration Protocol."</span>
            </p>

            <p className="text-white text-xl font-semibold pt-2">
              She started crying.
            </p>

            <p className="text-[var(--grey-400)] italic">
              "You just unleashed years of people asking 'so what is it?' and me saying 'you know, it's like chocolate ice cream. I can't explain what it tastes like.'"
            </p>

            <div className="pt-4 border-t border-[var(--grey-800)]">
              <p className="text-[var(--grey-300)]">
                <span className="text-[var(--brand-gold)] font-semibold">Thirty years of expertise.</span> She'd never been able to articulate it before.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

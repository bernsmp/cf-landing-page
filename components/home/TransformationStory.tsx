'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const TransformationStory = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--grey-950)] px-6 py-28 lg:px-8 lg:py-36">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-20"
        >
          <div className="lg:col-span-5">
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-gold)]">
              Case Narrative 01
            </p>

            <blockquote className="relative rounded-3xl border border-[var(--brand-gold)]/24 bg-[#0b0b0b] p-7 shadow-2xl shadow-black/70 md:p-9">
              <div className="mb-10 flex items-start justify-between gap-6 border-b border-white/[0.08] pb-6">
                <Image
                  src="/logo/cf-t1.png"
                  alt="Cognitive Fingerprint"
                  width={44}
                  height={44}
                />
                <div className="h-px w-24 bg-[var(--brand-gold)]/45" />
              </div>
              <p className="font-display text-3xl font-light italic leading-snug text-white md:text-4xl">
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

          <div className="space-y-6 text-lg font-light leading-relaxed lg:col-span-7">
            <p className="text-white text-xl font-semibold">
              She&apos;d been coaching for 30 years.
            </p>

            <p className="text-[var(--grey-300)]">
              When I read back what I found in her transcripts, her reaction stopped me cold.
            </p>

            <p className="text-[var(--grey-300)]">
              I&apos;d identified things like her <span className="text-[var(--brand-gold)] font-medium italic">"Courage Circulation System"</span>—how she harvests courage from one person&apos;s story and transplants it into another&apos;s challenge.
            </p>

            <p className="text-[var(--grey-300)]">
              Her <span className="text-[var(--brand-gold)] font-medium italic">"Two-Word Diagnostic"</span> that assesses emotional state in seconds. Her <span className="text-[var(--brand-gold)] font-medium italic">"Dignity Restoration Protocol."</span>
            </p>

            <p className="text-white text-xl font-semibold pt-2">
              She started crying.
            </p>

            <p className="text-[var(--grey-400)] italic">
              "You just unleashed years of people asking 'so what is it?' and me saying 'you know, it's like chocolate ice cream. I can't explain what it tastes like.'"
            </p>

            <div className="border-t border-white/[0.10] pt-6">
              <p className="text-[var(--grey-300)]">
                <span className="text-[var(--brand-gold)] font-semibold">Thirty years of expertise.</span> She&apos;d never been able to articulate it before.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

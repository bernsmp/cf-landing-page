'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const CTASectionV2 = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--grey-950)] px-6 py-32 lg:px-8 lg:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] bg-[var(--brand-gold)] px-8 py-20 text-[#0c0c0c] shadow-2xl shadow-black/60 md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[28px] border-black/[0.06]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full border-[20px] border-black/[0.05]" aria-hidden="true" />

          <div className="relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0c0c0c]/60">
                Final Plate &bull; The Introduction
              </p>
              <h2 className="font-display text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
                Your methodology is ready to be <i>found.</i>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#0c0c0c]/75">
                It has been ready for years. It&apos;s just waiting for someone else to make the introduction.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://calendar.app.google/JDxdGpxuqzmxCB8a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0c0c0c] px-9 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  Book 30 Minutes
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="https://signalovernoise.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#0c0c0c]/30 bg-transparent px-9 py-4 text-sm font-semibold text-[#0c0c0c] transition-colors duration-200 hover:bg-black/[0.06]"
                >
                  Read the Newsletter
                </a>
              </div>

              <p className="mt-8 text-sm text-[#0c0c0c]/60">
                Not ready to talk? The newsletter is where I share what I find. Weekly.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto hidden w-full max-w-sm lg:block"
            >
              <div className="absolute -left-6 top-10 h-48 w-40 rotate-[-5deg] rounded-2xl border border-black/[0.10] bg-[#0c0c0c]/[0.06] shadow-xl" aria-hidden="true" />
              <div className="relative rotate-[2deg] rounded-3xl border border-black/[0.16] bg-[#0c0c0c] p-7 shadow-2xl shadow-black/40">
                <div className="flex items-start justify-between gap-6 border-b border-white/[0.08] pb-6">
                  <Image
                    src="/logo/cf-t1.png"
                    alt=""
                    width={48}
                    height={48}
                  />
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                    Method card
                  </div>
                </div>
                <div className="mt-10 border-l border-[var(--brand-gold)]/34 pl-5">
                  <div className="h-px w-full bg-white/[0.14]" />
                  <div className="mt-4 h-px w-4/5 bg-white/[0.10]" />
                  <div className="mt-4 h-px w-11/12 bg-white/[0.12]" />
                </div>
                <div className="mt-10 border-t border-white/[0.08] pt-6">
                  <div className="h-px w-full bg-white/[0.12]" />
                  <div className="mt-4 h-px w-2/3 bg-white/[0.10]" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

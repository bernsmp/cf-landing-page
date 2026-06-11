'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSectionV2 = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--grey-950)] px-6 pt-36 pb-28 lg:px-8 lg:pt-44 lg:pb-36">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 items-end gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-12 lg:col-span-6"
        >
          <div className="mb-12 h-px w-24 bg-[var(--brand-gold)]" />

          <h1 className="font-display text-6xl font-light leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[6.5rem]">
            You&apos;re the <i>best-kept</i> secret
            <br />
            in your <span className="text-[var(--brand-gold)]">industry.</span>
          </h1>

          <p className="mt-10 max-w-md text-xl leading-relaxed text-[var(--grey-300)]">
            You&apos;ve spent 10+ years becoming exceptional. But people less skilled than you are winning. They can explain what you can&apos;t.
          </p>

          <p className="mt-5 max-w-md text-base italic leading-relaxed text-[var(--grey-500)]">
            We make it visible: named patterns, backed by your own words, turned
            into a fingerprint file your AI tools run on.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#video"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--brand-gold)] bg-[var(--brand-gold)] px-8 py-4 text-sm font-bold text-[var(--grey-950)] transition-all duration-200 hover:brightness-110 sm:w-auto"
            >
              See an Extraction
            </Link>
            <Link
              href="/method"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/[0.14] bg-transparent px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/[0.28] hover:bg-white/[0.04] sm:w-auto"
            >
              Learn the Method
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="col-span-12 relative lg:col-span-6"
        >
          {/* Arch-masked extraction collage */}
          <div className="arch-mask relative aspect-[4/5] max-h-[640px] w-full overflow-hidden border border-white/[0.05] bg-[var(--grey-800)]" aria-hidden="true">
            <div className="absolute inset-0 opacity-[0.03] grid-pattern" />

            <div className="absolute left-[8%] top-[16%] h-[52%] w-[58%] rotate-[-5deg] border border-white/[0.12] bg-[#101010] p-5 shadow-2xl shadow-black/70">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-500)]">
                <span>Source</span>
                <span>48:12</span>
              </div>
              <div className="mt-8 space-y-5">
                <div className="border-l border-white/[0.14] pl-4">
                  <div className="h-px w-full bg-white/[0.18]" />
                  <div className="mt-4 h-px w-3/4 bg-white/[0.12]" />
                </div>
                <div className="h-px w-11/12 bg-white/[0.12]" />
                <div className="h-px w-4/5 bg-white/[0.10]" />
                <div className="h-px w-full bg-white/[0.13]" />
              </div>
            </div>

            <div className="absolute bottom-[8%] right-[6%] h-[48%] w-[56%] rotate-[4deg] border border-[var(--brand-gold)]/34 bg-[#090909] p-6 shadow-2xl shadow-black/80">
              <div className="flex items-start justify-between gap-5">
                <Image
                  src="/logo/cf-t1.png"
                  alt=""
                  width={40}
                  height={40}
                  className="shrink-0"
                  priority
                />
                <div className="text-right font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                  Pattern 01
                </div>
              </div>
              <div className="mt-10">
                <div className="h-12 border-l border-[var(--brand-gold)]/45 pl-4">
                  <div className="h-px w-11/12 bg-white/[0.16]" />
                  <div className="mt-4 h-px w-3/4 bg-white/[0.12]" />
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="h-12 border border-white/[0.10] bg-white/[0.02]" />
                  <div className="h-12 border border-white/[0.10] bg-white/[0.025]" />
                  <div className="h-12 border border-[var(--brand-gold)]/24 bg-[var(--brand-gold)]/[0.035]" />
                </div>
              </div>
            </div>

            <div className="absolute right-[14%] top-[10%] w-[34%] rotate-[2deg] border border-white/[0.11] bg-[#171717] p-4 shadow-xl shadow-black/70">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-500)]">Blindspot</div>
              <div className="mt-4 h-px w-full bg-white/[0.12]" />
              <div className="mt-3 h-px w-4/5 bg-white/[0.10]" />
            </div>
          </div>

          {/* Floating sticky-note badge */}
          <Link
            href="/method"
            className="absolute -bottom-6 -left-4 block w-60 rotate-[6deg] cursor-pointer rounded-3xl bg-[var(--brand-gold)] p-7 text-[var(--grey-950)] shadow-2xl transition-all duration-500 hover:rotate-0 hover:scale-105 lg:-left-16 lg:w-64 lg:p-8"
          >
            <h3 className="font-display text-2xl italic leading-none">Expertise, <i>extracted</i></h3>
            <p className="mt-4 text-sm font-medium opacity-80">Making invisible expertise visible for leaders.</p>
            <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-tight">Learn the Method</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

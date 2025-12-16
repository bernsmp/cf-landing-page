'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSectionV2 = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gold glow - subtle */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-gold)] opacity-[0.03] blur-[120px]" />

        {/* Grid pattern - very subtle */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--grey-700) 1px, transparent 1px), linear-gradient(90deg, var(--grey-700) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-32 pb-16">
        {/* Floating fingerprint visual - above headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-12 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-[var(--brand-gold)] opacity-10 blur-[60px] animate-pulse-glow" />
          </div>
          <Image
            src="/logo/cf logo.png"
            alt="Cognitive Fingerprint"
            width={100}
            height={100}
            className="relative z-10 mx-auto animate-hero-float"
            priority
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 leading-[1.1]"
        >
          <span className="text-white">You're the best-kept secret</span>
          <br />
          <span className="text-white">in your industry.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--grey-400)] max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          You've spent 10+ years becoming exceptional. But people less skilled than you are winning. They can explain what you can't.
        </motion.p>

        {/* Who line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-[var(--grey-500)] max-w-2xl mx-auto mb-12 italic"
        >
          For experts who know they have something more valuable than they can explain.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#video"
            className="group flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-gold)]/20 hover:-translate-y-0.5"
          >
            <Play size={18} className="fill-current" />
            See an Extraction
          </Link>
          <Link
            href="/method"
            className="group flex items-center gap-3 px-8 py-4 bg-transparent text-[var(--grey-300)] font-semibold rounded-xl border border-[var(--border-medium)] hover:border-[var(--border-strong)] hover:text-white transition-all duration-300"
          >
            Learn the Method
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

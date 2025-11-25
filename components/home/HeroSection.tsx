'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[var(--brand-gold)] opacity-[0.04] blur-[120px]" />
        {/* Secondary subtle glows */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--accent-purple)] opacity-[0.02] blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent-blue)] opacity-[0.02] blur-[80px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--grey-700) 1px, transparent 1px), linear-gradient(90deg, var(--grey-700) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Pre-headline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--grey-900)] border border-[var(--grey-700)] rounded-full">
            <span className="w-2 h-2 bg-[var(--brand-gold)] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[var(--brand-gold)]">COGNITIVE FINGERPRINT™</span>
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]"
        >
          <span className="text-white">You're running cognitive&nbsp;patterns</span>
          <br />
          <span className="text-gold-gradient">worth&nbsp;thousands.</span>
          <br />
          <span className="text-[var(--grey-500)]">You can't see any of&nbsp;them.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--grey-400)] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          The expertise that makes you exceptional has become invisible to you.
          <br className="hidden sm:block" />
          <span className="text-[var(--grey-300)]">We make it visible. Name it. Map it. Turn it into assets.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/assessment"
            className="group flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-gold)]/20 hover:-translate-y-0.5"
          >
            Take the Invisibility Test
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/method"
            className="group flex items-center gap-3 px-8 py-4 bg-transparent text-[var(--grey-300)] font-semibold rounded-xl border border-[var(--grey-700)] hover:border-[var(--grey-500)] hover:text-white transition-all duration-300"
          >
            <Play size={18} className="text-[var(--brand-gold)]" />
            See How It Works
          </Link>
        </motion.div>

        {/* Floating fingerprint visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-[var(--brand-gold)] opacity-20 blur-3xl animate-pulse-glow" />
          </div>
          <Image
            src="/logo/cf logo.png"
            alt="Cognitive Fingerprint"
            width={180}
            height={180}
            className="relative z-10 mx-auto animate-float"
            priority
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--grey-500)]"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-[var(--grey-600)] flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[var(--brand-gold)] rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};


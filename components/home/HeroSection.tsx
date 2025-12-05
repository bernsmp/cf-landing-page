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
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-10 leading-[0.95]"
        >
          <span className="text-white">You're Exceptional At What You&nbsp;Do.</span>
          <br />
          <em className="italic text-[var(--grey-400)]">Terrible At Getting It Out Of Your&nbsp;Head.</em>
        </motion.h1>

        {/* Supporting paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-10 space-y-6"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--grey-300)] leading-relaxed">
            The transformations are real. The results are undeniable.
            <br />
            Your clients know you're different.
            <br className="hidden sm:block" />
            <span className="text-[var(--grey-400)]">But explaining HOW you're different? You sound like everyone else.</span>
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--grey-400)] leading-relaxed">
            You've spent years building expertise. All of it locked in your head.
          </p>
        </motion.div>

        {/* Solution statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--grey-300)] max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          We extract what you can't see. Document what you can't explain.
          <br />
          <span className="text-gold-gradient font-semibold">Turn your invisible genius into a system that no one can replicate.</span>
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
            className="group flex items-center gap-3 px-8 py-4 bg-transparent text-[var(--grey-300)] font-semibold rounded-xl border border-[var(--border-medium)] hover:border-[var(--border-strong)] hover:text-white transition-all duration-300"
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
          className="mt-16 mb-32 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-[var(--brand-gold)] opacity-15 blur-[80px] animate-pulse-glow" />
          </div>
          <Image
            src="/logo/cf logo.png"
            alt="Cognitive Fingerprint"
            width={160}
            height={160}
            className="relative z-10 mx-auto animate-hero-float"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--grey-500)] z-20"
      >
        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-[var(--grey-600)] flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[var(--brand-gold)] rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};


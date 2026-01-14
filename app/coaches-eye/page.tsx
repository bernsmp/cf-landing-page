'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Loader2, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import {
  ScrollProgress,
  ChapterNav,
  PatternIntro,
  PatternContent,
  PullQuote,
  CoachesEyeCTA,
} from './components';
import { patterns, setupContent, bridgeContent } from './data';

const STORAGE_KEY = 'coaches-eye-unlocked';

export default function CoachesEyePage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  // Refs for each chapter section
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);

  // Hero parallax
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(heroProgress, [0, 0.5], [0, -100]);

  // Check localStorage on mount
  useEffect(() => {
    const unlocked = localStorage.getItem(STORAGE_KEY) === 'true';
    setIsUnlocked(unlocked);
    setIsLoading(false);
  }, []);

  // Track active chapter based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = chapterRefs.current.length - 1; i >= 0; i--) {
        const ref = chapterRefs.current[i];
        if (ref && ref.offsetTop <= scrollPosition) {
          setActiveChapter(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUnlock = useCallback(() => {
    setIsUnlocked(true);
    // Scroll to pattern 3
    setTimeout(() => {
      const pattern3Section = chapterRefs.current[3];
      if (pattern3Section) {
        pattern3Section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  }, []);

  const scrollToGate = useCallback(() => {
    // Scroll to the unlock gate (after pattern 2)
    const gateElement = document.getElementById('unlock-gate');
    if (gateElement) {
      gateElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const handleNavigate = useCallback((index: number) => {
    const section = chapterRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const setChapterRef = useCallback((index: number) => (el: HTMLElement | null) => {
    chapterRefs.current[index] = el;
  }, []);

  return (
    <div className="min-h-screen bg-[var(--grey-950)] overflow-x-hidden">
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-[var(--grey-950)] flex items-center justify-center">
          <Loader2 className="animate-spin text-[var(--brand-gold)]" size={32} />
        </div>
      )}

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Chapter navigation */}
      <ChapterNav
        activeChapter={activeChapter}
        isUnlocked={isUnlocked}
        onNavigate={handleNavigate}
      />

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-[var(--grey-500)] hover:text-white transition-colors pointer-events-auto"
          >
            &larr; Cognitive Fingerprint
          </Link>
          <span className="text-sm text-[var(--grey-600)]">The Pattern Library</span>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        ref={(el) => {
          heroSectionRef.current = el;
          chapterRefs.current[0] = el;
        }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background hero image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/coaches-eye/hero.png"
            alt="The Coach's Eye"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--grey-950)] via-[var(--grey-950)]/60 to-[var(--grey-950)]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--grey-950)] via-transparent to-transparent h-1/3" />
        </div>

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-gold)] rounded-full blur-[200px] opacity-5" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)]/80 border border-[var(--grey-800)] mb-8"
          >
            <Eye size={16} className="text-[var(--brand-gold)]" />
            <span className="text-sm text-[var(--grey-300)]">The Pattern Library: Vol. 1</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.9]"
          >
            The Coach&apos;s{' '}
            <span className="text-gold-gradient">Eye</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-[var(--grey-400)] mb-10 max-w-2xl mx-auto"
          >
            What legendary leaders see that others can&apos;t see in themselves.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--grey-500)]"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)]" />
              8 Patterns
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4a6fa5]" />
              Sports · Military · Business
            </span>
            <span>20 min read</span>
          </motion.div>

        </motion.div>

        {/* Scroll indicator - positioned outside content div */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[var(--grey-700)] flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-[var(--grey-500)]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== THE SETUP ===== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl text-white font-display">
              {setupContent.intro}
            </p>

            <p className="text-3xl md:text-4xl text-white font-display font-bold">
              {setupContent.hook}
            </p>

            {setupContent.body.map((paragraph, i) => (
              <p key={i} className="text-lg md:text-xl text-[var(--grey-300)] leading-relaxed">
                {paragraph}
              </p>
            ))}

            <p className="text-3xl md:text-4xl text-white font-display font-bold py-4">
              {setupContent.keyInsight}
            </p>

            {setupContent.conclusion.map((paragraph, i) => (
              <p key={i} className="text-lg md:text-xl text-[var(--grey-300)] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PATTERNS ===== */}
      {patterns.map((pattern, index) => {
        const isLocked = !isUnlocked && pattern.id > 2;
        const chapterIndex = pattern.id; // 1-8 for patterns

        return (
          <div
            key={pattern.id}
            ref={setChapterRef(chapterIndex)}
            id={`pattern-${pattern.id}`}
          >
            {/* Show unlock gate after pattern 2 */}
            {pattern.id === 3 && !isUnlocked && (
              <div id="unlock-gate" className="py-16 px-6">
                <CoachesEyeCTA variant="unlock" onUnlock={handleUnlock} />
              </div>
            )}

            <PatternIntro pattern={pattern} isLocked={isLocked} />
            <PullQuote pattern={pattern} isLocked={isLocked} />
            <PatternContent
              pattern={pattern}
              isLocked={isLocked}
              isUnlocked={isUnlocked}
              onUnlockClick={scrollToGate}
            />

            {/* Divider between patterns */}
            {pattern.id < 8 && (
              <div className="py-16">
                <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[var(--grey-800)] to-transparent" />
              </div>
            )}
          </div>
        );
      })}

      {/* ===== THE BRIDGE ===== */}
      <section className={`py-24 md:py-32 px-6 ${!isUnlocked ? 'blur-sm select-none' : ''}`}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              {bridgeContent.title}
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-[var(--grey-300)] leading-relaxed">
              {bridgeContent.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <p className="text-2xl md:text-3xl text-white font-display font-bold mt-12 text-center">
              {bridgeContent.keyInsight}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      {isUnlocked && (
        <section className="py-24 md:py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <CheckCircle className="mx-auto mb-6 text-emerald-400" size={56} />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                You&apos;ve Got All Eight
              </h2>
              <p className="text-lg text-[var(--grey-400)]">
                From courtside to the boardroom to the battlefield.
                <br />
                Eight patterns for seeing what others miss.
              </p>
            </div>

            <CoachesEyeCTA variant="final" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                href="/prompts"
                className="px-8 py-4 bg-[var(--grey-850)] text-white font-semibold rounded-xl border border-[var(--grey-700)] hover:border-[var(--grey-600)] transition-colors"
              >
                Explore Pattern Prompts
              </Link>
              <Link
                href="/insights"
                className="px-8 py-4 bg-[var(--grey-850)] text-white font-semibold rounded-xl border border-[var(--grey-700)] hover:border-[var(--grey-600)] transition-colors"
              >
                Read More Insights
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 border-t border-[var(--grey-900)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--grey-600)]">
            Part of The Pattern Library from{' '}
            <Link href="/newsletter" className="text-[var(--grey-400)] hover:text-white transition-colors">
              Signal &gt; Noise
            </Link>
          </p>
          <p className="text-sm text-[var(--grey-600)]">
            <Link href="/" className="hover:text-white transition-colors">
              Cognitive Fingerprint
            </Link>
            {' '}&middot;{' '}
            <Link href="/insights" className="hover:text-white transition-colors">
              Insights
            </Link>
            {' '}&middot;{' '}
            <Link href="/start" className="hover:text-white transition-colors">
              Work With Me
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

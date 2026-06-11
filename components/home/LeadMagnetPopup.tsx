'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const STORAGE_KEY = 'lead-magnet-popup-dismissed';
const SCROLL_THRESHOLD = 0.75; // 75% scroll depth

export const LeadMagnetPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = window.scrollY / scrollHeight;

      if (scrollProgress >= SCROLL_THRESHOLD) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleClick = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleDismiss}
            className="fixed inset-0 z-50 bg-black/75"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-magnet-title"
            className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden border border-[var(--brand-gold)]/24 bg-[#090909] shadow-2xl shadow-black/70">
              <button
                onClick={handleDismiss}
                aria-label="Close offer"
                className="absolute right-0 top-0 z-20 border-b border-l border-white/[0.10] p-3 text-[var(--grey-500)] transition-colors hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-[0.42fr_0.58fr]">
                <div className="hidden border-r border-white/[0.08] bg-[#0f0f0f] p-6 md:block">
                  <Image
                    src="/logo/cf-t1.png"
                    alt="Cognitive Fingerprint"
                    width={52}
                    height={52}
                  />
                  <div className="mt-8 space-y-4">
                    <div className="h-px w-full bg-white/[0.12]" />
                    <div className="h-px w-4/5 bg-white/[0.10]" />
                    <div className="h-px w-11/12 bg-white/[0.12]" />
                    <div className="h-px w-2/3 bg-white/[0.10]" />
                  </div>
                </div>

                <div className="relative z-10 p-8 pt-12 text-left md:p-10">
                  <Image
                    src="/logo/cf-t1.png"
                    alt="Cognitive Fingerprint"
                    width={44}
                    height={44}
                    className="mb-8 md:hidden"
                  />

                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                    The Coach&apos;s Eye
                  </p>

                  <h3 id="lead-magnet-title" className="mt-5 font-display text-3xl leading-tight text-white md:text-4xl">
                    What Legendary Leaders See
                  </h3>

                  <p className="mt-5 leading-relaxed text-[var(--grey-400)]">
                    8 cognitive patterns from Belichick, Popovich, McChrystal, and five more of history&apos;s greatest coaches. Plus prompts to develop each one.
                  </p>

                  <Link
                    href="/coaches-eye"
                    onClick={handleClick}
                    className="group mt-8 inline-flex items-center gap-3 border border-[var(--brand-gold)] bg-[var(--brand-gold)] px-7 py-4 text-sm font-semibold text-[#050505] transition-colors duration-200 hover:bg-[var(--brand-gold-light)]"
                  >
                    Read The Coach&apos;s Eye
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  <p className="mt-5 text-sm text-[var(--grey-500)]">
                    Free. 20-minute read.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

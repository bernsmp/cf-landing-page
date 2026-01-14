'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const STORAGE_KEY = 'lead-magnet-popup-dismissed';
const SCROLL_THRESHOLD = 0.5; // 50% scroll depth

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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg"
          >
            <div className="relative rounded-2xl border border-[var(--brand-gold)]/20 bg-gradient-to-br from-[var(--grey-900)] via-[var(--grey-850)] to-[var(--grey-900)] p-8 overflow-hidden shadow-2xl shadow-black/50">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 text-[var(--grey-500)] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--brand-gold)]/10 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--brand-gold)]/10 to-transparent" />

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[var(--brand-gold)] rounded-full blur-xl opacity-20" />
                    <div className="relative w-14 h-14 rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 flex items-center justify-center">
                      <Eye size={24} className="text-[var(--brand-gold)]" />
                    </div>
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  What Legendary Leaders See
                </h3>

                {/* Description */}
                <p className="text-[var(--grey-400)] mb-6">
                  8 cognitive patterns from Belichick, Popovich, McChrystal, and five more of history's greatest coaches. Plus prompts to develop each one.
                </p>

                {/* CTA Button */}
                <Link
                  href="/coaches-eye"
                  onClick={handleClick}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300"
                >
                  Read The Coach's Eye
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Trust line */}
                <p className="text-[var(--grey-500)] text-sm mt-4">
                  Free. 20-minute read.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

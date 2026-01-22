'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Target, Quote } from 'lucide-react';
import { SignaturePattern } from '@/data/kevin-fingerprint';

interface PatternCardProps {
  pattern: SignaturePattern;
  index: number;
}

export function PatternCard({ pattern, index }: PatternCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getDriveColor = (score: number) => {
    if (score >= 24) return 'var(--brand-gold)';
    if (score >= 22) return '#10b981';
    return '#3b82f6';
  };

  const driveColor = getDriveColor(pattern.driveScore);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden bg-[var(--grey-850)] border border-[var(--border-subtle)]"
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start gap-4 text-left transition-colors hover:bg-white/[0.02]"
      >
        {/* Pattern Number */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
          style={{ backgroundColor: `${driveColor}20`, color: driveColor }}
        >
          #{pattern.id}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-display font-bold text-white">
              {pattern.name}
            </h3>
            <div
              className="flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: `${driveColor}20`, color: driveColor }}
            >
              DRIVE: {pattern.driveScore}/25
            </div>
          </div>
          <p className="text-[var(--grey-400)] line-clamp-2">
            {pattern.keyInsight}
          </p>
        </div>

        {/* Toggle */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-[var(--grey-500)]" />
        </motion.div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 border-t border-[var(--border-subtle)]">
              {/* Mechanism */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-[var(--brand-gold)] mb-3">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wide">The Mechanism</span>
                </div>
                <p className="text-[var(--grey-300)] whitespace-pre-line leading-relaxed">
                  {pattern.mechanism}
                </p>
              </div>

              {/* Why It Works */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Why It Works</span>
                </div>
                <p className="text-[var(--grey-300)] leading-relaxed">
                  {pattern.whyItWorks}
                </p>
              </div>

              {/* Evidence Chain */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-blue-400 mb-3">
                  <Quote className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Evidence Chain</span>
                </div>
                <div className="space-y-3">
                  {pattern.evidenceChain.map((quote, i) => (
                    <div
                      key={i}
                      className="pl-4 border-l-2 border-[var(--grey-700)] text-[var(--grey-400)] text-sm italic"
                    >
                      {quote}
                    </div>
                  ))}
                </div>
              </div>

              {/* Monetization Potential */}
              <div className="mt-6 p-4 rounded-xl bg-[var(--grey-900)] border border-[var(--brand-gold)]/20">
                <div className="text-sm text-[var(--brand-gold)] font-semibold mb-2">
                  Monetization Potential
                </div>
                <p className="text-[var(--grey-300)] text-sm">
                  {pattern.monetizationPotential}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

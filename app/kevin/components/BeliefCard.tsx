'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeftRight, AlertTriangle, CheckCircle, FileText } from 'lucide-react';
import { Belief } from '@/data/kevin-beliefs';

interface BeliefCardProps {
  belief: Belief;
  quadrantColor: string;
}

export function BeliefCard({ belief, quadrantColor }: BeliefCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl overflow-hidden bg-[var(--grey-900)] border border-[var(--border-subtle)]"
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center gap-3 text-left transition-colors hover:bg-white/[0.02]"
      >
        <div
          className="flex-shrink-0 w-2 h-2 rounded-full"
          style={{ backgroundColor: quadrantColor }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-white font-medium truncate">{belief.title}</h4>
            {belief.intensity === 'deal-killer' && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400">
                Critical
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--grey-500)]">{belief.confidenceLevel}%</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-[var(--grey-500)]" />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-4 pb-4 border-t border-[var(--border-subtle)] pt-4 space-y-4">
              {/* Required Belief */}
              <div>
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Required Belief</span>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  {belief.requiredBelief}
                </p>
              </div>

              {/* Opposing Belief */}
              <div>
                <div className="flex items-center gap-2 text-[var(--grey-400)] mb-2">
                  <ArrowLeftRight className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Current Opposition</span>
                </div>
                <p className="text-[var(--grey-400)] text-sm leading-relaxed italic">
                  "{belief.opposingBelief}"
                </p>
              </div>

              {/* Underlying Fear */}
              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Underlying Fear</span>
                </div>
                <p className="text-[var(--grey-400)] text-sm leading-relaxed">
                  {belief.underlyingFear}
                </p>
              </div>

              {/* Resolution Strategy */}
              <div className="p-3 rounded-lg bg-[var(--grey-850)] border-l-2" style={{ borderColor: quadrantColor }}>
                <div className="flex items-center gap-2 mb-2" style={{ color: quadrantColor }}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Resolution Strategy</span>
                </div>
                <p className="text-[var(--grey-300)] text-sm leading-relaxed">
                  {belief.resolutionStrategy}
                </p>
              </div>

              {/* Content Strategies */}
              <div>
                <div className="flex items-center gap-2 text-[var(--brand-gold)] mb-3">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Content Strategy</span>
                </div>
                <div className="space-y-2">
                  {belief.contentStrategies.map((strategy, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)] mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="text-[var(--grey-300)]">{strategy.format}</span>
                        <span className="text-[var(--grey-500)]"> ({strategy.timing})</span>
                        <span className="text-[var(--grey-400)]"> — {strategy.angle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

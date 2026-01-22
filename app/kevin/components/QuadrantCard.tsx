'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Quadrant } from '@/data/kevin-beliefs';
import { BeliefCard } from './BeliefCard';

interface QuadrantCardProps {
  quadrant: Quadrant;
}

export function QuadrantCard({ quadrant }: QuadrantCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dealKillerCount = quadrant.beliefs.filter(b => b.intensity === 'deal-killer').length;
  const frictionCount = quadrant.beliefs.filter(b => b.intensity === 'friction').length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="rounded-2xl overflow-hidden bg-[var(--grey-850)] border border-[var(--border-subtle)]"
      style={{ borderTopWidth: '3px', borderTopColor: quadrant.color }}
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left transition-colors hover:bg-white/[0.02]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-sm font-bold px-2 py-1 rounded"
                style={{ backgroundColor: `${quadrant.color}20`, color: quadrant.color }}
              >
                Q{quadrant.id}
              </span>
              <h3 className="text-xl font-display font-bold text-white">
                {quadrant.title}
              </h3>
            </div>
            <p className="text-[var(--grey-400)] text-sm">{quadrant.subtitle}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-white">{quadrant.beliefs.length} beliefs</div>
              <div className="text-xs text-[var(--grey-500)]">
                {dealKillerCount} critical · {frictionCount} friction
              </div>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-[var(--grey-500)]" />
            </motion.div>
          </div>
        </div>

        {/* Quick preview of beliefs */}
        {!isOpen && (
          <div className="mt-4 flex flex-wrap gap-2">
            {quadrant.beliefs.slice(0, 3).map((belief) => (
              <span
                key={belief.id}
                className="text-xs px-3 py-1.5 rounded-full bg-[var(--grey-900)] text-[var(--grey-400)] border border-[var(--border-subtle)]"
              >
                {belief.title}
              </span>
            ))}
            {quadrant.beliefs.length > 3 && (
              <span className="text-xs px-3 py-1.5 rounded-full bg-[var(--grey-900)] text-[var(--grey-500)]">
                +{quadrant.beliefs.length - 3} more
              </span>
            )}
          </div>
        )}
      </button>

      {/* Expanded Content - Belief Cards */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 border-t border-[var(--border-subtle)]">
              <div className="mt-4 space-y-3">
                {quadrant.beliefs.map((belief) => (
                  <BeliefCard
                    key={belief.id}
                    belief={belief}
                    quadrantColor={quadrant.color}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { quadrants } from '@/data/kevin-beliefs';
import { QuadrantCard } from './QuadrantCard';

export function BeliefMapSection() {
  return (
    <section id="belief-map" className="py-24 px-6 bg-[var(--grey-900)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-850)] border border-[var(--grey-800)] mb-6">
            <Brain className="w-4 h-4 text-[var(--brand-gold)]" />
            <span className="text-sm text-[var(--grey-300)]">Belief Architecture Map</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            The Psychology of Transformation
          </h2>

          <p className="text-[var(--grey-400)] max-w-2xl mx-auto">
            Every prospect carries a constellation of beliefs that determine whether they'll transform or stay stuck.
            This map reveals the 19 beliefs your ideal client must hold—and the content strategies to shift each one.
          </p>
        </motion.div>

        {/* Quadrant Overview Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl bg-[var(--grey-850)] border border-[var(--border-subtle)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quadrants.map((q) => (
              <div
                key={q.id}
                className="text-center p-4 rounded-xl"
                style={{ backgroundColor: `${q.color}10` }}
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: q.color }}
                >
                  Q{q.id}
                </div>
                <div className="text-white font-medium text-sm">{q.title}</div>
                <div className="text-[var(--grey-500)] text-xs mt-1">{q.beliefs.length} beliefs</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quadrant Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quadrants.map((quadrant) => (
            <QuadrantCard key={quadrant.id} quadrant={quadrant} />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-[var(--grey-850)] border border-[var(--brand-gold)]/20"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">19</div>
              <div className="text-sm text-[var(--grey-400)]">Total Beliefs Mapped</div>
            </div>
            <div className="w-px h-12 bg-[var(--grey-700)]" />
            <div>
              <div className="text-3xl font-bold text-rose-400">12</div>
              <div className="text-sm text-[var(--grey-400)]">Deal-Killers</div>
            </div>
            <div className="w-px h-12 bg-[var(--grey-700)]" />
            <div>
              <div className="text-3xl font-bold text-amber-400">7</div>
              <div className="text-sm text-[var(--grey-400)]">Friction Points</div>
            </div>
            <div className="w-px h-12 bg-[var(--grey-700)]" />
            <div>
              <div className="text-3xl font-bold text-[var(--brand-gold)]">90%+</div>
              <div className="text-sm text-[var(--grey-400)]">Avg. Confidence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

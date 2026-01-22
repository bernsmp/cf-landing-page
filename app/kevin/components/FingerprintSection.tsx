'use client';

import { motion } from 'framer-motion';
import { Fingerprint } from 'lucide-react';
import { signaturePatterns, dimensions } from '@/data/kevin-fingerprint';
import { PatternCard } from './PatternCard';

export function FingerprintSection() {
  return (
    <section id="patterns" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-800)] mb-6">
            <Fingerprint className="w-4 h-4 text-[var(--brand-gold)]" />
            <span className="text-sm text-[var(--grey-300)]">Signature Patterns</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Three Patterns That Define Your Work
          </h2>

          <p className="text-[var(--grey-400)] max-w-2xl mx-auto">
            These aren't just behaviors—they're the invisible engines running beneath every successful client interaction. Each one is teachable, monetizable, and uniquely yours.
          </p>
        </motion.div>

        {/* Dimension Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl bg-[var(--grey-900)] border border-[var(--border-subtle)]"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Four-Dimensional Expertise Map</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dimensions.map((dim, i) => (
              <div key={dim.name} className="text-center">
                <div className="text-2xl font-bold text-[var(--brand-gold)]">{dim.percentage}%</div>
                <div className="text-sm text-[var(--grey-400)]">{dim.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pattern Cards */}
        <div className="space-y-4">
          {signaturePatterns.map((pattern, index) => (
            <PatternCard key={pattern.id} pattern={pattern} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

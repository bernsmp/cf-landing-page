'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { patterns, categoryColors, categoryLabels } from '../data';

interface TableOfContentsProps {
  isUnlocked: boolean;
  onNavigate: (patternId: number) => void;
}

export function TableOfContents({ isUnlocked, onNavigate }: TableOfContentsProps) {
  return (
    <section className="py-16 md:py-24 px-6 border-b border-[var(--grey-900)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-[var(--grey-500)] uppercase mb-8">
            9 Patterns
          </h2>

          <div className="grid gap-3">
            {patterns.map((pattern, index) => {
              const isLocked = !isUnlocked && pattern.id > 2;
              const color = categoryColors[pattern.category];

              return (
                <motion.button
                  key={pattern.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  onClick={() => !isLocked && onNavigate(pattern.id)}
                  disabled={isLocked}
                  className={`group flex items-center gap-4 py-3 px-4 rounded-lg text-left transition-all ${
                    isLocked
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-[var(--grey-900)] cursor-pointer'
                  }`}
                >
                  {/* Number */}
                  <span
                    className="text-2xl font-display font-bold w-8 shrink-0"
                    style={{ color }}
                  >
                    {pattern.id}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className={`text-lg font-semibold transition-colors ${
                        isLocked ? 'text-[var(--grey-600)]' : 'text-white group-hover:text-[var(--grey-200)]'
                      }`}>
                        {pattern.title}
                      </h3>
                      {isLocked && (
                        <Lock size={14} className="text-[var(--grey-600)]" />
                      )}
                    </div>
                    <p className="text-sm text-[var(--grey-500)]">
                      {pattern.coachName}
                    </p>
                  </div>

                  {/* Category badge */}
                  <span
                    className="text-[10px] font-semibold tracking-wider px-2 py-1 rounded shrink-0"
                    style={{
                      color,
                      backgroundColor: `${color}15`
                    }}
                  >
                    {categoryLabels[pattern.category]}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

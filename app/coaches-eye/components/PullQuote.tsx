'use client';

import { motion } from 'framer-motion';
import { Pattern, categoryColors } from '../data';

interface PullQuoteProps {
  pattern: Pattern;
  isLocked?: boolean;
}

export function PullQuote({ pattern, isLocked = false }: PullQuoteProps) {
  const color = categoryColors[pattern.category];

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${isLocked ? 'blur-sm' : ''}`}>
      {/* Background accent line */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 md:h-48"
        style={{ backgroundColor: color }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.blockquote
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Quote mark */}
          <span
            className="absolute -top-8 -left-4 text-[12rem] md:text-[16rem] font-display leading-none select-none opacity-10"
            style={{ color }}
          >
            &ldquo;
          </span>

          <p className="relative z-10 font-display text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-medium">
            {pattern.quote}
          </p>

          <footer className="mt-8 flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {pattern.coachName.charAt(0)}
            </div>
            <div>
              <cite className="not-italic font-semibold text-white block">
                {pattern.coachName}
              </cite>
              <span className="text-sm text-[var(--grey-500)]">
                {pattern.coachTitle}
              </span>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

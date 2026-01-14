'use client';

import { motion } from 'framer-motion';
import { Pattern, categoryColors } from '../data';

interface PatternContentProps {
  pattern: Pattern;
  isLocked?: boolean;
  imagePlaceholder?: React.ReactNode;
}

export function PatternContent({ pattern, isLocked = false, imagePlaceholder }: PatternContentProps) {
  const color = categoryColors[pattern.category];
  const isReversed = pattern.id % 2 === 0;

  // Split content for layout
  const [definition, ...restContent] = pattern.content;

  return (
    <section className={`relative py-16 md:py-24 ${isLocked ? 'blur-sm select-none' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Definition box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <div
            className="inline-block px-6 py-4 rounded-xl"
            style={{
              backgroundColor: `${color}10`,
              borderLeft: `3px solid ${color}`,
            }}
          >
            <span className="text-xs font-bold tracking-widest text-[var(--grey-500)] uppercase block mb-2">
              What it is
            </span>
            <p className="text-xl md:text-2xl text-white font-medium">
              {definition}
            </p>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-16 items-start ${
            isReversed ? 'md:grid-flow-dense' : ''
          }`}
        >
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={isReversed ? 'md:col-start-2' : ''}
          >
            <div className="prose prose-invert prose-lg max-w-none">
              {restContent.map((paragraph, index) => {
                // Check if it's a key insight (short, punchy)
                const isKeyInsight = paragraph.length < 80 && !paragraph.includes('.');

                if (isKeyInsight) {
                  return (
                    <p
                      key={index}
                      className="text-2xl md:text-3xl text-white font-display my-8"
                    >
                      {paragraph}
                    </p>
                  );
                }

                return (
                  <p key={index} className="text-[var(--grey-300)] leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>

          {/* Image placeholder / Coach card area */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={isReversed ? 'md:col-start-1 md:row-start-1' : ''}
          >
            {imagePlaceholder || (
              <div
                className="aspect-[4/3] rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: `${color}08`,
                  border: `1px solid ${color}20`,
                }}
              >
                <span className="text-[var(--grey-600)] text-sm">
                  Image: {pattern.title}
                </span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Callout box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: 'var(--grey-900)',
              borderLeft: `3px solid ${color}`,
            }}
          >
            <span
              className="text-sm font-bold tracking-wider uppercase block mb-3"
              style={{ color }}
            >
              {pattern.callout.label}
            </span>
            <p className="text-lg text-[var(--grey-200)] leading-relaxed">
              {pattern.callout.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

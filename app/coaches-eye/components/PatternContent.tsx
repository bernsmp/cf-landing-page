'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pattern, categoryColors } from '../data';
import { PromptCard } from './PromptCard';

interface PatternContentProps {
  pattern: Pattern;
  isLocked?: boolean;
  isUnlocked?: boolean;
  onUnlockClick?: () => void;
}

export function PatternContent({ pattern, isLocked = false, isUnlocked = false, onUnlockClick }: PatternContentProps) {
  const color = categoryColors[pattern.category];

  // Split content for layout
  const [definition, ...restContent] = pattern.content;

  // Check if prompt should be locked (patterns 3+ when not unlocked)
  const isPromptLocked = pattern.id > 2 && !isUnlocked;

  return (
    <section className={`relative py-8 md:py-12 ${isLocked ? 'blur-sm select-none' : ''}`}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Definition box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
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

        {/* Main content - single column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Callout box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <div
            className="relative p-8 rounded-2xl overflow-hidden"
            style={{
              backgroundColor: 'var(--grey-900)',
              borderLeft: `3px solid ${color}`,
            }}
          >
            {/* Background image with heavy overlay */}
            {pattern.callout.image && (
              <>
                <Image
                  src={pattern.callout.image}
                  alt={pattern.callout.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/80" />
              </>
            )}

            {/* Content */}
            <div className="relative z-10">
              <span
                className="text-sm font-bold tracking-wider uppercase block mb-3"
                style={{ color }}
              >
                {pattern.callout.label}
              </span>
              <p className={`text-lg leading-relaxed ${pattern.callout.image ? 'text-white' : 'text-[var(--grey-200)]'}`}>
                {pattern.callout.text}
              </p>
            </div>
          </div>
        </motion.div>

        {/* How to Develop section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3
            className="text-lg font-bold tracking-wider uppercase mb-6"
            style={{ color }}
          >
            How to Develop This Pattern
          </h3>
          <p className="text-[var(--grey-300)] leading-relaxed mb-6">
            {pattern.howToDevelop.intro.replace(/\*\*(.*?)\*\*/g, '$1')}
          </p>
          <div className="space-y-4">
            <span className="text-sm font-bold tracking-wider uppercase text-[var(--grey-500)] block">
              Practice this:
            </span>
            <ul className="space-y-3">
              {pattern.howToDevelop.practices.map((practice, index) => (
                <li key={index} className="flex gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[var(--grey-300)] leading-relaxed">
                    {practice}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Prompt Card */}
        <PromptCard
          title={pattern.prompt.title}
          content={pattern.prompt.content}
          color={color}
          isLocked={isPromptLocked}
          onUnlockClick={onUnlockClick}
        />
      </div>
    </section>
  );
}

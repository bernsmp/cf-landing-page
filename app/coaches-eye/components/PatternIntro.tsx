'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Pattern, categoryColors, categoryLabels } from '../data';
import { Lock } from 'lucide-react';

interface PatternIntroProps {
  pattern: Pattern;
  isLocked?: boolean;
}

export function PatternIntro({ pattern, isLocked = false }: PatternIntroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  // Parallax effect for background image - moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  const Icon = pattern.icon;
  const color = categoryColors[pattern.category];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background pattern image with parallax */}
      {pattern.image && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: imageY, scale: imageScale }}
        >
          <Image
            src={pattern.image}
            alt={pattern.title}
            fill
            className="object-cover opacity-30"
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--grey-950)] via-[var(--grey-950)]/70 to-[var(--grey-950)]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--grey-950)] via-transparent to-transparent h-1/3" />
        </motion.div>
      )}

      {/* Giant background number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[30rem] md:text-[40rem] font-display font-bold leading-none"
          style={{ color: 'var(--grey-900)', opacity: pattern.image ? 0.3 : 0.5 }}
        >
          {pattern.id}
        </span>
      </div>

      {/* Glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
        style={{ backgroundColor: color }}
      />

      <motion.div
        style={{ opacity, scale, y }}
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto ${isLocked ? 'blur-sm' : ''}`}
      >
        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest"
            style={{
              backgroundColor: `${color}20`,
              color: color,
              border: `1px solid ${color}40`,
            }}
          >
            {isLocked && <Lock size={12} />}
            {categoryLabels[pattern.category]}
          </span>
        </motion.div>

        {/* Pattern number + title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className="p-4 rounded-2xl"
              style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
            >
              <Icon size={32} style={{ color }} />
            </div>
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95]">
            {pattern.title}
          </h2>
        </motion.div>

        {/* Coach name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-1"
        >
          <p className="text-xl md:text-2xl text-white font-medium">
            {pattern.coachName}
          </p>
          <p className="text-base text-[var(--grey-500)]">
            {pattern.coachTitle}
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

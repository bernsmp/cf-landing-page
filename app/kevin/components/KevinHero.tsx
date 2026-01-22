'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { kevinProfile } from '@/data/kevin-fingerprint';

interface KevinHeroProps {
  onNavigate?: (section: string) => void;
}

export function KevinHero({ onNavigate }: KevinHeroProps) {
  const sections = ['Overview', 'Patterns', 'Belief Map'];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-gold)] rounded-full blur-[200px] opacity-5" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[var(--brand-gold)]/30 glow-gold">
              <Image
                src={kevinProfile.headshot}
                alt={kevinProfile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Info */}
          <div className="text-center md:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-800)] mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)]" />
              <span className="text-sm text-[var(--grey-300)]">Cognitive Fingerprint Analysis</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-2"
            >
              {kevinProfile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gold-gradient font-display mb-6"
            >
              {kevinProfile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[var(--grey-400)] max-w-xl mb-8 leading-relaxed"
            >
              {kevinProfile.executiveSummary}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{kevinProfile.stats.hoursWithLeaders}+</div>
                <div className="text-[var(--grey-500)]">Hours with Leaders</div>
              </div>
              <div className="w-px h-8 bg-[var(--grey-800)]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--brand-gold)]">{kevinProfile.stats.signaturePatterns}</div>
                <div className="text-[var(--grey-500)]">Signature Patterns</div>
              </div>
              <div className="w-px h-8 bg-[var(--grey-800)]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{kevinProfile.stats.methodologies}</div>
                <div className="text-[var(--grey-500)]">Methodologies</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-3 mt-16"
        >
          {sections.map((section, i) => (
            <button
              key={section}
              onClick={() => onNavigate?.(section.toLowerCase().replace(' ', '-'))}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-[var(--grey-800)] text-[var(--grey-300)] hover:text-white"
            >
              {section}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const identityCards = [
  {
    label: 'Condition 01',
    title: "You've built something real over 10+ years",
    rotation: 'md:-rotate-[1deg]',
    offset: '',
  },
  {
    label: 'Condition 02',
    title: "Clients tell you you're different. You can't explain how.",
    rotation: 'md:rotate-[2deg]',
    offset: 'xl:translate-y-8',
  },
  {
    label: 'Condition 03',
    title: "You know there's a method to your madness. You just can't see it.",
    rotation: 'md:-rotate-[2deg]',
    offset: '',
  },
  {
    label: 'Condition 04',
    title: "You're tired of watching less skilled people win",
    rotation: 'md:rotate-[1deg]',
    offset: 'xl:translate-y-8',
  },
];

export const IdentitySection = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--grey-850)] py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] grid-pattern" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8 h-px w-20 bg-[var(--brand-gold)]" />
          <h2 className="font-display text-5xl font-light leading-tight tracking-tight text-white lg:text-7xl">
            This is for <i>you</i> if...
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {identityCards.map((card) => (
            <div
              key={card.title}
              className={`min-h-[240px] rounded-3xl border border-white/[0.05] bg-[var(--grey-800)] p-9 shadow-2xl shadow-black/40 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${card.rotation} ${card.offset}`}
            >
              <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                {card.label}
              </p>
              <h3 className="font-display text-2xl font-light leading-snug text-white">{card.title}</h3>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-28 max-w-3xl border-y border-white/[0.10] py-10 text-center"
        >
          <p className="font-display text-3xl font-light italic leading-snug text-white md:text-4xl">
            "People don&apos;t buy the best products. They buy the products they can understand the fastest."
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--grey-500)]">
            — Donald Miller, StoryBrand
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-xl text-center text-base leading-relaxed text-[var(--grey-400)]"
        >
          You are the best product. The problem is nobody knows it yet. Including you.
        </motion.p>
      </div>
    </section>
  );
};

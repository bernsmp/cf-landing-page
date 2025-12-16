'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const identityStatements = [
  "You've built something real over 10+ years",
  "Clients tell you you're different. You can't explain how.",
  "You know there's a method to your madness. You just can't see it.",
  "You're tired of watching less skilled people win",
];

export const IdentitySection = () => {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--grey-900)]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            This is for you if...
          </h2>
        </motion.div>

        {/* Identity statements */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 mb-16"
        >
          {identityStatements.map((statement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 flex items-center justify-center mt-0.5">
                <Check size={14} className="text-[var(--brand-gold)]" />
              </div>
              <span className="text-lg text-[var(--grey-200)]">{statement}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Donald Miller quote - the "why it matters" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--border-subtle)]"
        >
          {/* Accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--brand-gold)]/50 to-transparent" />

          <blockquote className="text-center">
            <p className="text-lg md:text-xl text-[var(--grey-200)] italic mb-4">
              "People don't buy the best products. They buy the products they can understand the fastest."
            </p>
            <footer className="text-[var(--grey-500)]">
              — Donald Miller, <span className="text-[var(--grey-400)]">StoryBrand</span>
            </footer>
          </blockquote>
        </motion.div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[var(--grey-400)] mt-8"
        >
          You are the best product. The problem is nobody knows it yet. Including you.
        </motion.p>
      </div>
    </section>
  );
};

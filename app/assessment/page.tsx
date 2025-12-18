'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Check, Mail, Calendar, ArrowRight } from 'lucide-react';

export default function PricingGuidePage() {

  const benefits = [
    'Why 90% of experts undercharge (and how to tell if you are one of them)',
    'The 3 pricing traps that keep experts stuck at commodity rates',
    'A simple framework for pricing work you cannot easily explain',
    'Real examples from experts who stopped underselling themselves',
  ];

  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-gold)]/20 border border-[var(--brand-gold)]/30 mb-6"
              >
                <Mail className="text-[var(--brand-gold)]" size={28} />
              </motion.div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                How to Price Your Invisible Expertise
              </h1>

              <p className="text-lg text-[var(--grey-400)] max-w-xl mx-auto">
                A free guide for experts who struggle to explain what makes them different. Your methodology has value. Here is how to price it.
              </p>
            </div>

            {/* Coming Soon Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10 p-8 rounded-2xl bg-[var(--grey-900)] border-2 border-[var(--brand-gold)]/30"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[var(--brand-gold)] mb-4">
                  Almost There
                </h3>
                <p className="text-[var(--grey-300)] text-lg leading-relaxed mb-4">
                  Look, I'll be honest with you: this site is a work in progress. 
                  This page? It's basically the final layer of paint on a room that's 99% done.
                </p>
                <p className="text-[var(--grey-400)] leading-relaxed">
                  I'm so close to getting there. The guide exists, it's just not quite ready for prime time yet. 
                  Check back soon—or better yet, if you're curious about pricing your invisible expertise right now, 
                  let's have a conversation instead.
                </p>
              </div>
            </motion.div>

            {/* What's Inside */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 p-6 rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)]"
            >
              <h2 className="text-sm font-semibold text-[var(--brand-gold)] uppercase tracking-wider mb-4">
                What is inside
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-[var(--grey-300)]">
                    <Check size={18} className="text-[var(--brand-gold)] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)] mb-6">
                <p className="text-[var(--grey-300)] mb-4">
                  While you wait, here is something to consider:
                </p>
                <p className="text-white font-medium text-lg">
                  The guide will show you what to charge. A conversation will show you what you are actually worth.
                </p>
              </div>

              <Link
                href="https://calendar.app.google/JDxdGpxuqzmxCB8a7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300"
              >
                <Calendar size={20} />
                Book a Discovery Call
                <ArrowRight size={18} />
              </Link>

              <p className="text-[var(--grey-500)] text-sm mt-4">
                30 minutes. No pitch. Just clarity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

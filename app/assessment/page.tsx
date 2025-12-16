'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, Check, Mail, Loader2, Calendar } from 'lucide-react';

export default function PricingGuidePage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/convertkit/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          leadMagnet: 'pricing-guide'
        })
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

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
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
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

                {/* What's Inside */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
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

                {/* Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[var(--grey-400)] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--grey-900)] border border-[var(--grey-700)] text-white placeholder-[var(--grey-500)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                      placeholder="Your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--grey-400)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--grey-900)] border border-[var(--grey-700)] text-white placeholder-[var(--grey-500)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get the Free Guide
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-[var(--grey-500)]">
                    No spam. Just the guide. Unsubscribe anytime.
                  </p>
                </motion.form>
              </motion.div>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--brand-gold)]/20 border border-[var(--brand-gold)]/30 mb-8"
                >
                  <Check className="text-[var(--brand-gold)]" size={40} />
                </motion.div>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Check your inbox
                </h2>

                <p className="text-lg text-[var(--grey-400)] mb-8 max-w-md mx-auto">
                  Your pricing guide is on its way. It should arrive in the next few minutes.
                </p>

                <div className="p-6 rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)] mb-8">
                  <p className="text-[var(--grey-300)] mb-4">
                    While you wait, here is something to consider:
                  </p>
                  <p className="text-white font-medium">
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
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

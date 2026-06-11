'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Check } from 'lucide-react';

const BEATS = [
  {
    label: '01 · Feed',
    title: 'Feed it your real conversations',
    detail:
      'Sales calls, client sessions, podcast interviews. Your behavior holds the patterns you can’t self-report.',
  },
  {
    label: '02 · Develop',
    title: 'Watch the development',
    detail:
      'Your own words get traced into evidence, and evidence assembles into named patterns. Nothing invented, everything cited.',
  },
  {
    label: '03 · Reveal',
    title: 'Meet your fingerprint',
    detail:
      'Your signature patterns, the mechanism behind each one, why you’ve never been able to see it, and the belief underneath.',
  },
  {
    label: '04 · Install',
    title: 'Install it into your AI',
    detail:
      'Your fingerprint becomes a portable file your AI tools run on. It thinks with your patterns, writes in your voice, and flags your blind spots.',
  },
];

export const FingerprintFileSection = () => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [submittedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');
    try {
      const response = await fetch('/api/convertkit/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          leadMagnet: 'app-early-access',
          submittedAt,
          website,
        }),
      });
      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="early-access" className="relative overflow-hidden bg-[var(--grey-950)] px-6 py-28 lg:px-8 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--grey-500)]">
            Next Plate &bull; The Fingerprint File
          </p>
          <h2 className="font-display text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">
            The extraction is becoming <i>an app.</i>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--grey-400)]">
            The same methodology, productized: your conversations go in, your
            fingerprint comes out, and it installs into the AI tools you
            already use.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {BEATS.map((beat, i) => (
            <motion.div
              key={beat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[var(--grey-950)] p-8"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                {beat.label}
              </div>
              <h3 className="mt-5 font-display text-xl text-white">{beat.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--grey-400)]">{beat.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-xl"
        >
          {status === 'success' ? (
            <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.08] px-6 py-5 text-emerald-300">
              <Check size={20} />
              <p className="text-sm">
                You&apos;re on the early access list. You&apos;ll hear from me
                before anyone else does.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm text-[var(--grey-500)]">
                Early access opens to the list first.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-px w-px opacity-0"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full flex-1 rounded-full border border-white/[0.14] bg-transparent px-6 py-4 text-base text-white placeholder:text-[var(--grey-500)] transition-colors focus:border-[var(--brand-gold)] focus:outline-none"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand-gold)] bg-[var(--brand-gold)] px-8 py-4 text-sm font-bold text-[var(--grey-950)] transition-all duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    'Get Early Access'
                  )}
                </button>
              </form>
              {status === 'error' && (
                <p className="mt-3 text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

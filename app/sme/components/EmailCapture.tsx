'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Mail, Loader2, Check } from 'lucide-react';

import type { HeroVariantId } from '../data';

interface EmailCaptureProps {
  /** Which hero the visitor saw, passed to Kit for attribution. */
  heroVariant: HeroVariantId | null;
  /** Stable id so a hero CTA can focus this exact input. */
  inputId: string;
  /** Submit button label. The spec uses "Send me the prompt" everywhere. */
  buttonLabel?: string;
  className?: string;
}

export function EmailCapture({
  heroVariant,
  inputId,
  buttonLabel = 'Send me the prompt',
  className = '',
}: EmailCaptureProps) {
  const reduceMotion = useReducedMotion();
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [submittedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/convertkit/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          leadMagnet: 'sme-four-layers',
          heroVariant: heroVariant ?? undefined,
          submittedAt,
          website,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Subscription failed');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Try again in a moment.');
    }
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-md mx-auto flex items-start gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-5 text-left"
          >
            <div className="mt-0.5 w-8 h-8 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="text-emerald-400" size={18} />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Check your inbox.</p>
              <p className="text-sm text-[var(--grey-400)] leading-relaxed">
                The prompt is on its way to {email}. If it isn’t there in a
                minute, look in Promotions or spam. Then grab one transcript and
                run it.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-md mx-auto"
          >
            {/* Honeypot: real people leave this empty. */}
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

            <label htmlFor={inputId} className="sr-only">
              Your email address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--grey-500)]"
                  size={20}
                  aria-hidden="true"
                />
                <input
                  id={inputId}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-4 bg-[var(--grey-850)] border border-[var(--grey-700)] rounded-xl text-white placeholder:text-[var(--grey-500)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors text-lg"
                  disabled={status === 'loading'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-bold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap text-lg"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" size={24} aria-hidden="true" />
                ) : (
                  buttonLabel
                )}
              </button>
            </div>

            {errorMessage && (
              <p className="text-sm text-red-400 mt-3" role="alert">
                {errorMessage}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

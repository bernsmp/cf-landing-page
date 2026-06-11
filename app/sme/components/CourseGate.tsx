'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Mail, Loader2, Sparkles } from 'lucide-react';

interface CourseGateProps {
  onUnlock: () => void;
}

export function CourseGate({ onUnlock }: CourseGateProps) {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
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
          submittedAt,
          website,
        }),
      });

      if (response.ok) {
        setStatus('success');
        localStorage.setItem('sme-unlocked', 'true');
        setTimeout(() => {
          onUnlock();
        }, 1600);
      } else {
        throw new Error('Subscription failed');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="sme-gate" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--grey-950)] via-[var(--grey-900)] to-[var(--grey-950)]" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, delay: 0.15 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
              >
                <Unlock className="text-emerald-400" size={40} />
              </motion.div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                Unlocking the full prompt...
              </h2>
              <p className="text-lg text-[var(--grey-400)]">
                Check your inbox too. Day one of the course is on its way.
              </p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20 flex items-center justify-center">
                  <Lock className="text-[var(--brand-gold)]" size={28} />
                </div>
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                Get the full prompt
              </h2>

              <p className="text-lg text-[var(--grey-400)] max-w-lg mx-auto mb-3">
                The complete Four Layers Extraction Prompt unlocks right here on
                this page the moment you enter your email.
              </p>

              <p className="text-base text-[var(--grey-500)] max-w-lg mx-auto mb-10">
                You also get the three follow-up prompts that turn findings into
                named frameworks and your first fingerprint file, the 5-day
                Invisible Expertise course by email, and early access to the
                Cognitive Fingerprint app.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--grey-500)]"
                      size={20}
                    />
                    <input
                      type="email"
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
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>
                        <Sparkles size={20} />
                        Unlock
                      </>
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <p className="text-sm text-red-400 text-center mt-4">{errorMessage}</p>
                )}
              </form>

              <p className="text-sm text-[var(--grey-600)] mt-8">
                Free. No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

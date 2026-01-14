'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Mail, Loader2, Sparkles } from 'lucide-react';

interface UnlockGateProps {
  onUnlock: () => void;
}

export function UnlockGate({ onUnlock }: UnlockGateProps) {
  const [email, setEmail] = useState('');
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
          leadMagnet: 'coaches-eye',
        }),
      });

      if (response.ok) {
        setStatus('success');
        localStorage.setItem('coaches-eye-unlocked', 'true');
        setTimeout(() => {
          onUnlock();
        }, 2000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--grey-950)] via-[var(--grey-900)] to-[var(--grey-950)]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-gold)] rounded-full blur-[200px] opacity-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-emerald-500/20 flex items-center justify-center"
              >
                <Unlock className="text-emerald-400" size={48} />
              </motion.div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Unlocking...
              </h2>

              <p className="text-xl text-[var(--grey-400)]">
                6 more patterns incoming
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-1 bg-emerald-400 rounded-full mt-8 mx-auto max-w-xs"
              />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Lock icon */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="mb-8"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20 flex items-center justify-center">
                  <Lock className="text-[var(--brand-gold)]" size={36} />
                </div>
              </motion.div>

              {/* Headline */}
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                6 More Patterns
              </h2>

              <p className="text-xl text-[var(--grey-400)] mb-2">
                From the battlefield to the boardroom
              </p>

              {/* Preview of locked patterns */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {['McChrystal', 'Nooyi', 'Catmull', 'Mulcahy'].map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1 rounded-full bg-[var(--grey-800)] text-sm text-[var(--grey-400)]"
                  >
                    {name}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-[var(--grey-800)] text-sm text-[var(--grey-400)]">
                  +2 more
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
                        Unlock All
                      </>
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <p className="text-sm text-red-400 text-center mt-4">{errorMessage}</p>
                )}
              </form>

              {/* Social proof */}
              <p className="text-sm text-[var(--grey-600)] mt-8">
                Join 2,000+ readers of Signal &gt; Noise
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

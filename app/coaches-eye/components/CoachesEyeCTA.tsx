'use client';

import { useState } from 'react';
import { ArrowRightIcon, PlusIcon, Loader2, CheckCircle } from "lucide-react";
import Link from 'next/link';

interface CoachesEyeCTAProps {
  variant?: 'unlock' | 'final';
  onUnlock?: () => void;
}

const STORAGE_KEY = 'coaches-eye-unlocked';

export function CoachesEyeCTA({ variant = 'unlock', onUnlock }: CoachesEyeCTAProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/convertkit/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tags: ['coaches-eye', 'lead-magnet'],
        }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');

      localStorage.setItem(STORAGE_KEY, 'true');
      setIsSuccess(true);

      if (onUnlock) {
        setTimeout(() => onUnlock(), 1500);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isUnlockVariant = variant === 'unlock';

  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y border-[var(--grey-800)] bg-[radial-gradient(35%_80%_at_25%_0%,rgba(212,175,55,0.08),transparent)] px-6 py-10">
      {/* Corner decorations */}
      <PlusIcon
        className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6 text-[var(--brand-gold)]"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6 text-[var(--brand-gold)]"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6 text-[var(--brand-gold)]"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6 text-[var(--brand-gold)]"
        strokeWidth={1}
      />

      {/* Side borders */}
      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-[var(--grey-800)]" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-[var(--grey-800)]" />

      {/* Center dashed line */}
      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-[var(--grey-800)]" />

      {isUnlockVariant ? (
        // Unlock variant - email signup form
        isSuccess ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <CheckCircle className="size-12 text-emerald-400" />
            <div className="space-y-1 text-center">
              <h2 className="font-bold text-2xl text-white">
                You&apos;re in.
              </h2>
              <p className="text-[var(--grey-400)]">
                All 9 patterns are now unlocked.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              <h2 className="text-center font-display font-bold text-2xl md:text-3xl text-white">
                Unlock the rest
              </h2>
              <p className="text-center text-[var(--grey-400)] max-w-lg mx-auto">
                8 more patterns. 9 ready-to-use prompts. The same lens legendary coaches use to see what others can&apos;t see in themselves.
              </p>
              <p className="text-center text-[var(--grey-500)] text-sm">
                Join 2,000+ operators getting Signal &gt; Noise.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full sm:w-72 px-4 py-3 rounded-xl bg-[var(--grey-900)] border border-[var(--grey-700)] text-white placeholder:text-[var(--grey-500)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--brand-gold)] text-[var(--grey-950)] font-bold hover:bg-[var(--brand-gold-light)] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <>
                    Unlock
                    <ArrowRightIcon className="size-4" />
                  </>
                )}
              </button>
            </form>

            {error && (
              <p className="text-center text-red-400 text-sm">{error}</p>
            )}

            <p className="text-center text-xs text-[var(--grey-600)]">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )
      ) : (
        // Final variant - CTA to Signal > Noise
        <>
          <div className="space-y-2">
            <h2 className="text-center font-display font-bold text-2xl md:text-3xl text-white">
              Want to extract your own patterns?
            </h2>
            <p className="text-center text-[var(--grey-400)]">
              The prompts above are just the beginning. Get the full extraction process.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="https://www.signalovernoise.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[var(--brand-gold)] text-[var(--grey-950)] font-bold hover:bg-[var(--brand-gold-light)] transition-colors flex items-center gap-2"
            >
              Subscribe to Signal &gt; Noise
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

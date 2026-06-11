'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, Mic } from 'lucide-react';

import { CourseGate } from './components/CourseGate';
import { PromptBlock } from './components/PromptBlock';
import {
  FOUR_LAYERS_PROMPT,
  FOLLOW_UP_PROMPTS,
  FOUR_LAYERS,
  GOOD_TRANSCRIPT_RULES,
  HOW_TO_RUN_STEPS,
} from './data';

const STORAGE_KEY = 'sme-unlocked';

export default function SmePage() {
  const [gateState, setGateState] = useState<'loading' | 'locked' | 'unlocked'>('loading');
  const isUnlocked = gateState === 'unlocked';
  const isLoading = gateState === 'loading';

  useEffect(() => {
    // SSR-safe localStorage read on mount; gate state is unknowable on the server.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGateState(localStorage.getItem(STORAGE_KEY) === 'true' ? 'unlocked' : 'locked');
  }, []);

  const handleUnlock = useCallback(() => {
    setGateState('unlocked');
    setTimeout(() => {
      document.getElementById('the-prompt')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
  }, []);

  const scrollToGate = useCallback(() => {
    document.getElementById(isUnlocked ? 'the-prompt' : 'sme-gate')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [isUnlocked]);

  return (
    <main className="min-h-screen bg-[var(--grey-950)] text-white">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--grey-950)] to-[var(--grey-950)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--grey-700)] text-sm text-[var(--grey-400)] mb-8">
              <Mic size={14} className="text-[var(--brand-gold)]" />
              For listeners of AI Explored with Michael Stelzner
            </span>

            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Four Layers
              <br />
              Extraction Prompt
            </h1>

            <p className="text-lg md:text-xl text-[var(--grey-400)] max-w-xl mx-auto mb-4">
              The full prompt from the episode. Run it on one transcript of you
              working, and see the expertise you&apos;ve never been able to
              explain: named, organized, and backed by your own words.
            </p>

            <p className="text-base text-[var(--grey-500)] max-w-xl mx-auto mb-10">
              No tool to buy. It runs in Claude or ChatGPT, on a conversation
              you already have.
            </p>

            <button
              onClick={scrollToGate}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-bold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all text-lg"
            >
              Get the prompt
              <ArrowDown size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* The four layers */}
      <section className="px-6 py-16 md:py-20 border-t border-[var(--grey-850)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
            What it looks for
          </h2>
          <p className="text-[var(--grey-400)] mb-10 max-w-xl">
            Your thinking runs on four layers. You can talk about the first
            two. The bottom two are where clients decide you&apos;re worth it,
            and they&apos;re the ones you can&apos;t see.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {FOUR_LAYERS.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[var(--grey-900)] border border-[var(--grey-800)]"
              >
                <div className="text-sm text-[var(--brand-gold)] font-medium mb-1">
                  Layer {i + 1} · {layer.name}
                </div>
                <div className="text-white font-bold text-lg mb-2">{layer.plain}</div>
                <p className="text-sm text-[var(--grey-400)] leading-relaxed">
                  {layer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What you need */}
      <section className="px-6 py-16 md:py-20 border-t border-[var(--grey-850)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
            All it needs is one transcript
          </h2>
          <p className="text-[var(--grey-400)] mb-10 max-w-xl">
            A client call, a coaching session, a podcast interview. You in your
            zone of genius, recorded. Four rules for a transcript that develops
            clean:
          </p>

          <div className="space-y-4">
            {GOOD_TRANSCRIPT_RULES.map((rule) => (
              <div
                key={rule.title}
                className="flex gap-4 p-4 rounded-xl bg-[var(--grey-900)] border border-[var(--grey-800)]"
              >
                <div className="w-1 rounded-full bg-[var(--brand-gold)]/60 shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">{rule.title}</div>
                  <p className="text-sm text-[var(--grey-400)]">{rule.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-[var(--grey-500)] mt-8">
            No transcripts yet? Granola, Zoom, Google Meet, and Fathom all
            produce them. Record one call this week and come back. The page
            isn&apos;t going anywhere.
          </p>
        </div>
      </section>

      {/* Gate or prompt */}
      {!isLoading && !isUnlocked && <CourseGate onUnlock={handleUnlock} />}

      {!isLoading && isUnlocked && (
        <>
          <section id="the-prompt" className="px-6 py-16 md:py-20 border-t border-[var(--grey-850)]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
                The prompt
              </h2>
              <p className="text-[var(--grey-400)] mb-8 max-w-xl">
                Copy it whole. Paste it into Claude or ChatGPT, drop your
                transcript into the INPUT section, and run it. If your
                transcript is too thin, it will tell you instead of guessing.
                That&apos;s on purpose.
              </p>

              <PromptBlock
                title="The Four Layers Extraction Prompt"
                content={FOUR_LAYERS_PROMPT}
                prominent
              />

              <div className="mt-12">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                  How to run it
                </h3>
                <ol className="space-y-3">
                  {HOW_TO_RUN_STEPS.map((step, i) => (
                    <li key={i} className="flex gap-4 text-[var(--grey-300)]">
                      <span className="text-[var(--brand-gold)] font-bold shrink-0">
                        {i + 1}.
                      </span>
                      <span className="text-sm md:text-base leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className="px-6 py-16 md:py-20 border-t border-[var(--grey-850)]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
                Then go deeper
              </h2>
              <p className="text-[var(--grey-400)] mb-8 max-w-xl">
                After the first analysis, run these on the pattern that
                surprised you most. The third one builds your first fingerprint
                file: a portable file that teaches any AI to think with your
                patterns.
              </p>

              <div className="space-y-6">
                {FOLLOW_UP_PROMPTS.map((p) => (
                  <PromptBlock key={p.title} title={p.title} content={p.content} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer strip */}
      <section className="px-6 py-14 border-t border-[var(--grey-850)] text-center">
        <div className="max-w-2xl mx-auto">
          <Image
            src="/logo/cf logo.png"
            alt="Cognitive Fingerprint"
            width={48}
            height={48}
            className="mx-auto mb-5 opacity-80"
          />
          <p className="text-[var(--grey-400)] mb-2">
            This prompt is the first step of the Cognitive Fingerprint
            methodology.
          </p>
          <p className="text-sm text-[var(--grey-500)] mb-6">
            The full extraction goes four layers deep on every pattern, with
            evidence from across all your conversations.
          </p>
          <Link
            href="/"
            className="text-[var(--brand-gold)] hover:text-[var(--brand-gold-light)] font-medium transition-colors"
          >
            See how the full extraction works →
          </Link>
        </div>
      </section>
    </main>
  );
}

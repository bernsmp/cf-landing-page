'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Mic } from 'lucide-react';

import { EmailCapture } from './components/EmailCapture';
import {
  HERO_VARIANTS,
  HERO_VARIANT_IDS,
  HOW_IT_WORKS,
  type HeroVariant,
  type HeroVariantId,
} from './data';

const VARIANT_STORAGE_KEY = 'sme-hero-variant';

export default function SmePage() {
  const reduceMotion = useReducedMotion();
  const [variant, setVariant] = useState<HeroVariant | null>(null);

  useEffect(() => {
    // Hero variant is per-visitor and random, so it can only be resolved on the
    // client. Persist the first pick so a returning visitor sees the same hero.
    const stored = localStorage.getItem(VARIANT_STORAGE_KEY);
    let id: HeroVariantId | null =
      stored && (HERO_VARIANT_IDS as string[]).includes(stored)
        ? (stored as HeroVariantId)
        : null;
    if (!id) {
      id = HERO_VARIANT_IDS[Math.floor(Math.random() * HERO_VARIANT_IDS.length)];
      localStorage.setItem(VARIANT_STORAGE_KEY, id);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVariant(HERO_VARIANTS.find((v) => v.id === id) ?? HERO_VARIANTS[0]);
  }, []);

  const focusCapture = useCallback(() => {
    const el = document.getElementById('email-hero');
    el?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'center',
    });
    window.setTimeout(() => el?.focus({ preventScroll: true }), reduceMotion ? 0 : 350);
  }, [reduceMotion]);

  return (
    <main className="min-h-screen bg-[var(--grey-950)] text-white">
      {/* Hero + first capture */}
      <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--grey-950)] to-[var(--grey-950)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--grey-700)] text-sm text-[var(--grey-400)] mb-8">
            <Mic size={14} className="text-[var(--brand-gold)]" aria-hidden="true" />
            For listeners of AI Explored with Michael Stelzner
          </span>

          {/* Reserve vertical space so the form below doesn't jump when the
              variant resolves on mount. */}
          <div className="min-h-[220px] md:min-h-[260px] flex flex-col items-center justify-start">
            {variant && (
              <motion.div
                key={variant.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl mx-auto">
                  {variant.headline}
                </h1>
                <p className="text-lg md:text-xl text-[var(--grey-400)] max-w-xl mx-auto">
                  {variant.sub}
                </p>
              </motion.div>
            )}
          </div>

          <div className="mt-10">
            <button
              onClick={focusCapture}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-bold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all text-lg"
            >
              {variant?.cta ?? 'Send me the prompt'}
            </button>
          </div>

          <div className="mt-12 pt-10 border-t border-[var(--grey-850)]">
            <p className="text-[var(--grey-300)] mb-5">
              Enter your email and I’ll send the prompt straight over.
            </p>
            <EmailCapture heroVariant={variant?.id ?? null} inputId="email-hero" />
            <p className="text-sm text-[var(--grey-500)] mt-5">
              Your transcript stays with you. I never see it.
            </p>
          </div>
        </div>
      </section>

      {/* Here's what it does */}
      <Section
        title="Here’s what it does"
        id="what-it-does"
        media={
          <MediaImage
            src="/sme/hidden-world.jpg"
            width={1900}
            height={1060}
            alt="A hidden world of green breaking through a cracked concrete wall"
          />
        }
      >
        <p>
          You give it one transcript. A coaching call, a sales call, a podcast
          interview, anywhere you were working in your zone and someone hit
          record.
        </p>
        <p>
          It reads how you operate across that whole conversation and finds the
          one move you keep making without noticing. The reframe you always reach
          for. The question you always ask first. The thing your best clients
          feel and can’t put into words.
        </p>
        <p>
          Then it names that pattern and shows you the exact moments you did it.
          In your own words.
        </p>
        <p>
          That’s the part that stops people. Seeing the thing they’ve done ten
          thousand times finally sitting still on the page where they can look at
          it.
        </p>
      </Section>

      {/* What happens when people see it */}
      <Section title="What happens when people see it">
        <p>
          One coach told me her heart was pounding and she had chills running up
          her arms. She’d been coaching for thirty years and had never been able
          to say what she actually did.
        </p>
        <p>
          The prompt found things like her Courage Circulation System, the way
          she takes courage out of one person’s story and moves it into another
          person’s challenge. Three decades of doing it. She’d never once seen
          it.
        </p>
        <p className="text-white font-medium">
          This free prompt finds one pattern. She had dozens.
        </p>
      </Section>

      {/* Privacy */}
      <Section title="On privacy, since this audience always asks">
        <p>
          You paste the prompt into whatever AI tool you already use. Your
          transcript goes nowhere near me. Nothing to upload to a stranger, no
          new tool to sign up for. Your calls stay yours.
        </p>
      </Section>

      {/* How it works */}
      <Section title="How it works">
        <ol className="space-y-4 not-prose">
          {HOW_IT_WORKS.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/25 text-[var(--brand-gold)] font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-[var(--grey-300)] leading-relaxed pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* What's underneath this */}
      <Section
        title="What’s underneath this"
        id="underneath"
        mediaSide="left"
        media={
          <MediaVideo
            src="/sme/breakthrough.mp4"
            poster="/sme/breakthrough-poster.jpg"
            width={1600}
            height={893}
            alt="A landscape breaking out of its frame and pouring into the room"
          />
        }
      >
        <p>
          This finds one pattern from one transcript. There are more. There’s a
          structure under your thinking that runs four layers deep, and a way to
          turn the whole thing into a single file that teaches any AI to think
          the way you do.
        </p>
        <p>That’s the larger work. This prompt is the doorway. Start here.</p>
      </Section>

      {/* Final capture */}
      <section className="px-6 py-20 md:py-28 border-t border-[var(--grey-850)] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-8">
            Run it on one transcript. See what you’ve never been able to say.
          </h2>
          <EmailCapture heroVariant={variant?.id ?? null} inputId="email-final" />
          <p className="text-sm text-[var(--grey-500)] mt-5">
            Free. Yours in your inbox. I’ll also share what I find, weekly.
          </p>
        </div>
      </section>

      {/* Footer strip — no competing CTA */}
      <footer className="px-6 py-12 border-t border-[var(--grey-850)] text-center">
        <Image
          src="/logo/cf logo.png"
          alt="Cognitive Fingerprint"
          width={40}
          height={40}
          className="mx-auto mb-4 opacity-80"
        />
        <p className="text-sm text-[var(--grey-600)]">
          Cognitive Fingerprint. Extract, don’t create.
        </p>
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
  media,
  mediaSide = 'right',
  id,
}: {
  title: string;
  children: React.ReactNode;
  media?: React.ReactNode;
  mediaSide?: 'left' | 'right';
  id?: string;
}) {
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5 },
  } as const;

  if (media) {
    return (
      <section id={id} className="px-6 py-16 md:py-20 border-t border-[var(--grey-850)] scroll-mt-20">
        <motion.div
          {...reveal}
          className="max-w-5xl mx-auto grid gap-8 md:gap-12 md:grid-cols-2 md:items-center"
        >
          <div className={mediaSide === 'left' ? 'md:order-2' : ''}>
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">{title}</h2>
            <div className="space-y-5 text-lg text-[var(--grey-400)] leading-relaxed">
              {children}
            </div>
          </div>
          <div className={mediaSide === 'left' ? 'md:order-1' : ''}>{media}</div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id={id} className="px-6 py-16 md:py-20 border-t border-[var(--grey-850)] scroll-mt-20">
      <motion.div {...reveal} className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">{title}</h2>
        <div className="space-y-5 text-lg text-[var(--grey-400)] leading-relaxed">
          {children}
        </div>
      </motion.div>
    </section>
  );
}

function MediaFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--grey-800)] shadow-2xl shadow-black/50 ring-1 ring-white/5">
      {children}
    </div>
  );
}

function MediaImage({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <MediaFrame>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="w-full h-auto"
      />
    </MediaFrame>
  );
}

function MediaVideo({
  src,
  poster,
  width,
  height,
  alt,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  alt: string;
}) {
  const reduceMotion = useReducedMotion();

  // Respect reduced motion: show the still poster instead of the looping clip.
  if (reduceMotion) {
    return (
      <MediaFrame>
        <Image
          src={poster}
          width={width}
          height={height}
          alt={alt}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto"
        />
      </MediaFrame>
    );
  }

  return (
    <MediaFrame>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        aria-label={alt}
        className="w-full h-auto"
      >
        <source src={src} type="video/mp4" />
      </video>
    </MediaFrame>
  );
}

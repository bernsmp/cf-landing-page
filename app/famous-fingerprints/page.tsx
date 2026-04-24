import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { FeaturedCard } from '@/components/famous-fingerprints/FeaturedCard';
import { FingerprintCard } from '@/components/famous-fingerprints/FingerprintCard';
import { LiquidMetalButton } from '@/components/coachk/LiquidMetalButton';
import { FingerScanButton } from '@/components/ui/finger-scan-button';

export const metadata: Metadata = {
  title: 'Famous Fingerprints™ | Cognitive Fingerprint™',
  description:
    "The operating systems behind extraordinary performers, mapped for the first time. Each Cognitive Fingerprint reveals the patterns that explain how they actually win. Start with The Coach's Eye for a free preview.",
  openGraph: {
    title: 'Famous Fingerprints™ | Cognitive Fingerprint™',
    description:
      "The operating systems behind extraordinary performers, mapped for the first time. Start with The Coach's Eye for a free preview.",
    url: 'https://cognitivefingerprint.ai/famous-fingerprints',
    siteName: 'Cognitive Fingerprint™',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Famous Fingerprints™ | Cognitive Fingerprint™',
    description:
      "The operating systems behind extraordinary performers, mapped for the first time.",
  },
};

export default function FamousFingerprintsPage() {
  return (
    <div className="relative min-h-screen bg-[var(--grey-950)] text-white">
      <Navigation />

      <main className="relative">
        {/* HERO */}
        <section className="pt-36 pb-16 md:pt-44 md:pb-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block text-[11px] tracking-[0.18em] uppercase text-[var(--brand-gold)] font-medium mb-6">
              The Library
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em] text-white mb-7">
              Famous{' '}
              <em className="not-italic italic text-[var(--brand-gold)] font-normal">
                Fingerprints
              </em>
            </h1>
            <p className="text-lg md:text-xl text-[var(--grey-400)] leading-[1.55] max-w-2xl mx-auto">
              The operating systems behind extraordinary performers, mapped for the first time. Each Cognitive Fingerprint<sup className="text-[0.55em] align-super ml-0.5">™</sup> reveals the patterns that explain how they actually win. Start with{' '}
              <Link
                href="/coaches-eye"
                className="text-[var(--brand-gold)] underline decoration-[var(--brand-gold)]/40 underline-offset-[3px] hover:decoration-[var(--brand-gold)] transition-colors"
              >
                The Coach&apos;s Eye
              </Link>{' '}
              for a free preview.
            </p>
          </div>
        </section>

        {/* FEATURED (Coach's Eye) */}
        <section className="px-6 lg:px-8 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-baseline justify-between pb-6 mb-10 border-b border-[var(--border-subtle)]">
              <h2 className="text-[13px] tracking-[0.14em] uppercase font-medium text-[var(--grey-400)]">
                Start Here · Free
              </h2>
              <span className="text-[13px] text-[var(--grey-600)]">
                The Pattern Library
              </span>
            </div>

            <FeaturedCard />
          </div>
        </section>

        {/* FAMOUS FINGERPRINTS GRID */}
        <section className="px-6 lg:px-8 pb-24 md:pb-36">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-baseline justify-between pb-6 mb-12 border-b border-[var(--border-subtle)]">
              <h2 className="text-[13px] tracking-[0.14em] uppercase font-medium text-[var(--grey-400)]">
                Famous Fingerprints
              </h2>
              <span className="text-[13px] text-[var(--grey-600)]">
                2 published · 3 in progress
              </span>
            </div>

            <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(340px,1fr))]">
              <FingerprintCard
                variant="published"
                href="/coachk"
                badge="Published"
                name="Coach K"
                meta="Basketball · Duke University"
                hook="The operating system behind 1,202 wins, mapped for the first time."
                image="/coachk/parallax-coaching-v2-1.png"
                imageAlt="Coach K — Cognitive Fingerprint"
                stats={[
                  { value: '1,202', label: 'Wins' },
                  { value: '36,984', label: 'Moves' },
                  { value: '7', label: 'Patterns' },
                ]}
              />

              <FingerprintCard
                variant="published"
                href="/reginald-love"
                badge="Published"
                name="Reginald Love"
                meta="Politics · Apollo · Eighty Four Productions"
                hook="From Obama's mailroom to the tie he lent before a presidential debate. The pattern was there the whole time."
                image="/reginald-love/reggie-obama.jpg"
                imageAlt="Reginald Love — Cognitive Fingerprint"
                stats={[
                  { value: '40+', label: 'Countries' },
                  { value: '$14B', label: 'Under management' },
                  { value: '6', label: 'Patterns' },
                ]}
              />

              <FingerprintCard
                variant="coming-soon"
                name="Sam Altman"
                meta="Tech · OpenAI"
                hook="Watch him in any hostile interview. He runs the same five moves. Your brain falls for them before you notice."
                gradient="from-[#1a1a25] via-[#121218] to-[#0a0a0b]"
                tease={{ value: '5', label: 'Invisible Moves' }}
              />

              <FingerprintCard
                variant="coming-soon"
                name="Sheryl Sandberg"
                meta="Leadership · Communication"
                hook="Every leadership book gives the same advice. Hers is the version people actually act on. Three moves. Zero resistance."
                href="/prompts/zero-resistance-toolkit"
                gradient="from-[#1e1a18] via-[#14110f] to-[#0a0a0b]"
                tease={{ value: '3', label: 'Moves That Land' }}
              />

              <FingerprintCard
                variant="coming-soon"
                name="Rick Rubin"
                meta="Music · Creative Direction"
                hook="He doesn't play a single instrument. He produced Johnny Cash, Jay-Z, Adele. The fingerprint is how he decides what stays."
                gradient="from-[#1a1612] via-[#12100e] to-[#0a0a0b]"
                tease={{ value: '0', label: 'Instruments Played' }}
              />

              <FingerprintCard
                variant="coming-soon"
                name="Russell Brunson"
                meta="Marketing · ClickFunnels"
                hook="ClickFunnels is a $360M company built on a persuasion pattern most marketers can't see. This is the shape of it."
                gradient="from-[#1e1a12] via-[#14110c] to-[#0a0a0b]"
                tease={{ value: '$360M', label: 'Company Built On It' }}
              />

              <FingerprintCard
                variant="placeholder"
                hook="Map your fingerprint. Slots open quarterly."
              />
            </div>
          </div>
        </section>

        {/* FOOTER — TWO OPTIONS */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block text-[11px] tracking-[0.18em] uppercase text-[var(--brand-gold)] font-medium mb-4">
                Two ways in
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white leading-[1.1] tracking-[-0.02em]">
                Who should we map next?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1 — Suggest someone */}
              <div className="rounded-3xl p-10 md:p-12 bg-gradient-to-br from-[#161619] to-[#0a0a0b] border border-[var(--border-subtle)] flex flex-col">
                <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--grey-500)] mb-4">
                  Option 1 · Free
                </div>
                <div className="font-display text-2xl md:text-3xl text-white leading-[1.15] mb-3">
                  Suggest a Famous Fingerprint<sup className="text-[0.55em] align-super ml-0.5">™</sup>
                </div>
                <p className="text-[var(--grey-400)] text-base leading-relaxed mb-8 flex-1">
                  Know someone whose operating system deserves mapping? Send their name. Best suggestions get mapped next, and you&apos;ll be the first to read the fingerprint.
                </p>
                <div className="flex">
                  <LiquidMetalButton
                    label="Suggest someone"
                    href="mailto:bernsmp@gmail.com?subject=Famous%20Fingerprint%20suggestion&body=Who%20should%20we%20map%20next%3F%0A%0AName%3A%20%0AWhy%20them%3A%20%0A"
                  />
                </div>
              </div>

              {/* Option 2 — Get your own */}
              <div className="rounded-3xl p-10 md:p-12 bg-gradient-to-br from-[#1a1612] via-[#141110] to-[#0a0a0b] border border-[var(--brand-gold)]/20 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[var(--brand-gold)] opacity-[0.04] blur-[100px] pointer-events-none" />
                <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--brand-gold)] mb-4">
                  Option 2 · Private
                </div>
                <div className="font-display text-2xl md:text-3xl text-white leading-[1.15] mb-3">
                  Get your own Cognitive Fingerprint<sup className="text-[0.55em] align-super ml-0.5">™</sup>
                </div>
                <p className="text-[var(--grey-400)] text-base leading-relaxed mb-8 flex-1">
                  Most clients can&apos;t name their own methodology. They demonstrate it constantly. Map the 7 patterns that make you irreplaceable. Slots open quarterly.
                </p>
                <div className="flex">
                  <FingerScanButton
                    label="Schedule a call"
                    href="https://calendar.app.google/JDxdGpxuqzmxCB8a7"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
              </div>
            </div>

            {/* Coach's Eye link */}
            <p className="text-center text-sm text-[var(--grey-500)] mt-10">
              Not ready for either?{' '}
              <Link
                href="/coaches-eye"
                className="text-[var(--brand-gold)] underline decoration-[var(--brand-gold)]/40 underline-offset-[3px] hover:decoration-[var(--brand-gold)] transition-colors"
              >
                Read The Coach&apos;s Eye
              </Link>
              . A free collection of micro-fingerprints.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LiquidMetalButton } from '@/components/coachk/LiquidMetalButton';

export function FeaturedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-gradient-to-br from-[#15151a] to-[#0a0a0b] hover:border-[var(--brand-gold)]/40 transition-colors duration-500 group"
    >
      <div className="grid md:grid-cols-[1.15fr_1fr] items-stretch">
        {/* Image */}
        <Link
          href="/coaches-eye"
          className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-black block"
        >
          <Image
            src="/images/coaches-eye/hero.png"
            alt="The Coach's Eye"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0b] md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0a0a0b]" />
        </Link>

        {/* Body */}
        <div className="relative flex flex-col justify-center px-8 py-12 md:px-14 md:py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[var(--brand-gold)] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)] shadow-[0_0_12px_var(--brand-gold)]" />
            The Pattern Library · Vol. 1
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02] tracking-[-0.025em] mb-6">
            The Coach&apos;s{' '}
            <em className="not-italic text-[var(--brand-gold)] font-normal italic">
              Eye
            </em>
          </h2>

          {/* Hook */}
          <p className="text-[var(--grey-400)] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            What legendary coaches see that others can&apos;t see in themselves. Nine patterns drawn from Wooden, Popovich, McChrystal, Nooyi, Le Guin, and more. A free preview of what a full Cognitive Fingerprint<sup className="text-[0.55em] align-super ml-0.5">™</sup> uncovers.
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10 text-xs uppercase tracking-[0.08em] text-[var(--grey-500)]">
            <div>
              <div className="font-display italic text-sm text-white normal-case tracking-normal mb-0.5">9</div>
              Patterns
            </div>
            <div>
              <div className="font-display italic text-sm text-white normal-case tracking-normal mb-0.5">Sports · Military · Business</div>
              Domains
            </div>
            <div>
              <div className="font-display italic text-sm text-white normal-case tracking-normal mb-0.5">20 min</div>
              Read
            </div>
          </div>

          {/* CTA */}
          <div className="flex">
            <LiquidMetalButton
              label="Read The Coach's Eye"
              href="/coaches-eye"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

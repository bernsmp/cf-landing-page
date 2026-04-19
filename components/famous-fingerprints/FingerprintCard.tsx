'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Stat = { value: string; label: string };

type PublishedProps = {
  variant: 'published';
  href: string;
  name: string;
  meta: string;
  hook: string;
  image: string;
  imageAlt: string;
  stats: Stat[];
  badge?: string;
  external?: boolean;
};

type PlaceholderProps = {
  variant: 'placeholder';
  meta?: string;
  name?: string;
  hook?: string;
};

type ComingSoonProps = {
  variant: 'coming-soon';
  name: string;
  meta: string;
  hook: string;
  href?: string;
  gradient?: string;
};

type FingerprintCardProps = PublishedProps | PlaceholderProps | ComingSoonProps;

export function FingerprintCard(props: FingerprintCardProps) {
  if (props.variant === 'coming-soon') {
    const { name, meta, hook, href, gradient } = props;
    const bg = gradient ?? 'from-[#1a1a1f] via-[#121216] to-[#0a0a0b]';
    const body = (
      <>
        <div className={`relative aspect-[1200/630] overflow-hidden bg-gradient-to-br ${bg}`}>
          <span className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full text-[10px] tracking-[0.14em] uppercase font-medium bg-[var(--grey-950)]/75 backdrop-blur-md border border-[var(--brand-gold)]/30 text-[var(--brand-gold)]">
            Coming soon
          </span>
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,41,0.08),transparent_60%)]" />
          {/* Initials mark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[88px] leading-none text-white/[0.04] tracking-tighter select-none">
              {name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col px-6 py-7">
          <div className="text-[11px] tracking-[0.08em] uppercase text-[var(--grey-500)] mb-3">
            {meta}
          </div>
          <div className="font-display text-[28px] text-white leading-[1.08] tracking-[-0.02em] mb-2.5">
            {name}
          </div>
          <p className="text-[14.5px] text-[var(--grey-400)] leading-relaxed mb-5 flex-1">
            {hook}
          </p>
          <div className="pt-[18px] border-t border-[var(--border-subtle)] text-[11px] uppercase tracking-[0.08em] text-[var(--grey-600)]">
            {href ? 'Read the pattern analysis →' : 'Full fingerprint in progress'}
          </div>
        </div>
      </>
    );

    const baseClass = "group relative rounded-2xl border border-[var(--border-subtle)] bg-[#0c0d0f] overflow-hidden flex flex-col no-underline text-inherit transition-all duration-250";
    const interactiveClass = href
      ? " hover:bg-[#13151a] hover:border-[var(--grey-700)] hover:-translate-y-[3px] cursor-pointer"
      : "";

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {href ? (
          <Link href={href} className={baseClass + interactiveClass}>
            {body}
          </Link>
        ) : (
          <div className={baseClass}>{body}</div>
        )}
      </motion.div>
    );
  }

  if (props.variant === 'placeholder') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-dashed border-[var(--grey-800)] bg-transparent flex flex-col overflow-hidden"
      >
        <div className="aspect-[1200/630] flex items-center justify-center bg-gradient-to-br from-[#151518] to-[#0a0a0b]">
          <span className="font-display italic text-3xl text-[var(--grey-700)]">—</span>
        </div>
        <div className="px-6 py-7">
          <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--grey-600)] mb-3">
            {props.meta ?? 'Upcoming'}
          </div>
          <div className="font-display text-2xl text-[var(--grey-600)] leading-tight tracking-[-0.02em] mb-2">
            {props.name ?? 'Next Fingerprint'}
          </div>
          <p className="text-sm text-[var(--grey-500)] leading-relaxed">
            {props.hook ?? 'Commission a fingerprint — slots open quarterly.'}
          </p>
        </div>
      </motion.div>
    );
  }

  const { href, name, meta, hook, image, imageAlt, stats, badge, external } = props;

  const cardContent = (
    <>
      <div className="relative aspect-[1200/630] overflow-hidden bg-black">
        {badge && (
          <span className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full text-[10px] tracking-[0.14em] uppercase font-medium bg-[var(--grey-950)]/75 backdrop-blur-md border border-white/[0.08] text-white">
            {badge}
          </span>
        )}
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />
      </div>

      <div className="flex-1 flex flex-col px-6 py-7">
        <div className="text-[11px] tracking-[0.08em] uppercase text-[var(--grey-500)] mb-3">
          {meta}
        </div>
        <div className="font-display text-[28px] text-white leading-[1.08] tracking-[-0.02em] mb-2.5">
          {name}
        </div>
        <p className="text-[14.5px] text-[var(--grey-400)] leading-relaxed mb-5 flex-1">
          {hook}
        </p>

        {stats.length > 0 && (
          <div className="flex gap-5 pt-[18px] border-t border-[var(--border-subtle)] text-[13px]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-white font-medium">{stat.value}</span>
                <span className="text-[var(--grey-600)] text-[11px] uppercase tracking-[0.06em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--grey-500)] transition-all duration-200 group-hover:bg-[var(--brand-gold)] group-hover:border-[var(--brand-gold)] group-hover:text-[var(--grey-950)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight size={14} />
        </div>
      </div>
    </>
  );

  const baseClass = "group relative rounded-2xl border border-[var(--border-subtle)] bg-[#0c0d0f] overflow-hidden flex flex-col no-underline text-inherit hover:bg-[#13151a] hover:border-[var(--grey-700)] hover:-translate-y-[3px] transition-all duration-250";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
          {cardContent}
        </a>
      ) : (
        <Link href={href} className={baseClass}>
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
}

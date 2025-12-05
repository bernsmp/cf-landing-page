'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles, Lock, ExternalLink, Clock } from 'lucide-react';
import { insights, getFeaturedInsights } from '@/data/insights';
import { prompts, getPremiumPrompts } from '@/data/prompts';

interface SubstackArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export const FeaturedContent = () => {
  const [deepDives, setDeepDives] = useState<SubstackArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Get the latest insight
  const latestInsight = insights[0];

  // Get 2 premium prompts for the locked preview
  const premiumPrompts = getPremiumPrompts().slice(0, 2);

  useEffect(() => {
    const fetchDeepDives = async () => {
      try {
        const response = await fetch('/api/articles');
        if (response.ok) {
          const data = await response.json();
          setDeepDives(data.slice(0, 2)); // Get first 2
        }
      } catch (err) {
        console.error('Error fetching deep dives:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDeepDives();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getExcerpt = (html: string, maxLength: number = 100) => {
    const text = html.replace(/<[^>]*>/g, '');
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[var(--grey-950)]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--grey-400) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--border-subtle)] text-[var(--grey-400)] text-sm font-semibold tracking-wider mb-6">
            <Sparkles size={14} className="text-[var(--brand-gold)]" />
            FROM THE VAULT
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Latest <span className="text-gold-gradient">Thinking</span>
          </h2>
          <p className="text-[var(--grey-400)] max-w-xl mx-auto">
            Frameworks, deep dives, and tools for extracting invisible expertise
          </p>
        </motion.div>

        {/* Content Grid - Asymmetric Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* LEFT COLUMN - Featured Insight (Hero) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5"
          >
            <Link href={`/insights/${latestInsight.slug}`} className="group block h-full">
              <div className="relative h-full rounded-2xl overflow-hidden bg-[var(--grey-850)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all duration-300">
                {/* Thumbnail */}
                {latestInsight.thumbnail && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={latestInsight.thumbnail}
                      alt={latestInsight.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--grey-900)] via-transparent to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-wider border border-[var(--brand-gold)]/20">
                      Latest Insight
                    </span>
                    <span className="text-[var(--grey-500)] text-sm flex items-center gap-1">
                      <Clock size={12} />
                      {latestInsight.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors leading-tight">
                    {latestInsight.title}
                  </h3>

                  <p className="text-[var(--grey-400)] text-sm mb-4 line-clamp-2">
                    {latestInsight.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[var(--brand-gold)] text-sm font-medium">
                    Read article
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* MIDDLE COLUMN - Deep Dives */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={16} className="text-[var(--grey-500)]" />
              <span className="text-[var(--grey-500)] text-sm font-medium uppercase tracking-wider">Deep Dives</span>
            </div>

            {loading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[var(--brand-gold)] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : deepDives.length > 0 ? (
              deepDives.map((article, index) => (
                <a
                  key={article.link}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="p-5 rounded-xl bg-[var(--grey-900)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all duration-300">
                    <div className="flex items-center gap-2 text-[var(--grey-500)] text-xs mb-2">
                      <span>{formatDate(article.pubDate)}</span>
                      <span>•</span>
                      <span>Signal {'>'} Noise</span>
                    </div>

                    <h4 className="font-display font-semibold text-white group-hover:text-[var(--brand-gold)] transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-[var(--grey-500)] text-sm line-clamp-2 mb-3">
                      {getExcerpt(article.description)}
                    </p>

                    <span className="inline-flex items-center gap-1 text-[var(--grey-400)] text-xs font-medium group-hover:text-[var(--brand-gold)] transition-colors">
                      Read on Substack
                      <ExternalLink size={10} />
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div className="flex-1 flex items-center justify-center text-[var(--grey-500)] text-sm">
                Deep dives coming soon
              </div>
            )}

            {/* View all link */}
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-[var(--grey-400)] hover:text-white text-sm font-medium transition-colors mt-2"
            >
              View all deep dives
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* RIGHT COLUMN - Premium Prompts (Locked) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Lock size={14} className="text-[var(--brand-gold)]" />
              <span className="text-[var(--grey-500)] text-sm font-medium uppercase tracking-wider">Subscriber Vault</span>
            </div>

            {premiumPrompts.map((prompt, index) => (
              <Link
                key={prompt.id}
                href={`/prompts/${prompt.slug}`}
                className="group block"
              >
                <div className="relative p-5 rounded-xl bg-[var(--grey-900)] border border-[var(--border-subtle)] hover:border-[var(--brand-gold)]/20 transition-all duration-300 overflow-hidden">
                  {/* Locked overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--grey-900)] via-transparent to-transparent opacity-60" />

                  {/* Premium badge */}
                  <div className="relative flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] text-[10px] font-bold uppercase tracking-wider border border-[var(--brand-gold)]/20 flex items-center gap-1">
                      <Lock size={8} />
                      Premium
                    </span>
                  </div>

                  <h4 className="relative font-display font-semibold text-white group-hover:text-[var(--brand-gold)] transition-colors mb-2 line-clamp-2">
                    {prompt.title}
                  </h4>

                  <p className="relative text-[var(--grey-500)] text-sm line-clamp-2">
                    {prompt.description}
                  </p>

                  {/* Blur effect hint */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--grey-900)] to-transparent" />
                </div>
              </Link>
            ))}

            {/* Unlock CTA */}
            <Link
              href="/prompts"
              className="mt-2 p-4 rounded-xl bg-gradient-to-r from-[var(--brand-gold)]/10 to-transparent border border-[var(--brand-gold)]/20 hover:border-[var(--brand-gold)]/40 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">Unlock the Vault</p>
                  <p className="text-[var(--grey-500)] text-xs">Premium prompts & workflows</p>
                </div>
                <ArrowRight size={16} className="text-[var(--brand-gold)] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

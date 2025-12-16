'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ExternalLink, Clock, BookOpen, Loader2, Check } from 'lucide-react';

interface SubstackArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export default function NewsletterPage() {
  const [articles, setArticles] = useState<SubstackArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) throw new Error('Failed to fetch articles');
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Unable to load articles. Please check back later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getExcerpt = (html: string, maxLength: number = 150) => {
    const text = html.replace(/<[^>]*>/g, '');
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <main className="pt-32 pb-20">
        {/* ===== HERO LANDING SECTION ===== */}
        <section className="px-6 lg:px-8 mb-24">
          <div className="max-w-3xl mx-auto">
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-sm font-medium tracking-wide">
                <span className="text-[var(--grey-300)]">Signal</span>
                <span className="text-[var(--brand-gold)]">{'>'}</span>
                <span className="text-[var(--grey-300)]">Noise</span>
              </span>
            </motion.div>

            {/* Main Headline - ONE clear message */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-8 leading-[1.15]"
            >
              A weekly newsletter for experts who struggle to explain what makes them different.
            </motion.h1>

            {/* Single supporting line */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--grey-400)] text-center mb-16 max-w-2xl mx-auto"
            >
              Each issue breaks down the patterns hiding in your expertise. Plus the exact prompts to extract them yourself.
            </motion.p>

            {/* Pricing Tiers - Cleaner layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {/* Free Tier */}
              <div className="p-6 rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)]">
                <p className="text-sm font-medium text-[var(--grey-500)] uppercase tracking-wider mb-4">Free</p>
                <p className="text-[var(--grey-300)] mb-5">Weekly essays on invisible expertise:</p>
                <ul className="space-y-3 text-[var(--grey-400)] text-sm">
                  <li className="flex gap-3">
                    <Check className="text-[var(--grey-600)] flex-shrink-0 mt-0.5" size={16} />
                    Why your best work is invisible to you
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--grey-600)] flex-shrink-0 mt-0.5" size={16} />
                    How AI reveals patterns humans miss
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--grey-600)] flex-shrink-0 mt-0.5" size={16} />
                    Transformation stories
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--grey-600)] flex-shrink-0 mt-0.5" size={16} />
                    The science behind "I just know"
                  </li>
                </ul>
              </div>

              {/* Paid Tier */}
              <div className="p-6 rounded-2xl bg-[var(--grey-900)] border border-[var(--brand-gold)]/40">
                <div className="flex items-baseline justify-between mb-4">
                  <p className="text-sm font-medium text-[var(--brand-gold)] uppercase tracking-wider">Full Access</p>
                  <p className="text-sm text-[var(--grey-500)]">
                    <span className="text-white font-medium">$10</span>/mo
                  </p>
                </div>
                <p className="text-[var(--grey-300)] mb-5">Everything free, plus:</p>
                <ul className="space-y-3 text-[var(--grey-400)] text-sm">
                  <li className="flex gap-3">
                    <Check className="text-[var(--brand-gold)] flex-shrink-0 mt-0.5" size={16} />
                    <span><span className="text-white">Prompt & Workflow Library</span> — new prompts weekly</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--brand-gold)] flex-shrink-0 mt-0.5" size={16} />
                    <span><span className="text-white">Blindspot Finder GPT</span> — paste transcript, get patterns</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--brand-gold)] flex-shrink-0 mt-0.5" size={16} />
                    <span><span className="text-white">Framework Factory Course</span> — document your IP</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://irreplaceablepositioning.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-[var(--grey-700)] text-white font-medium rounded-xl hover:border-[var(--grey-500)] transition-colors text-center"
              >
                Subscribe Free
              </a>
              <a
                href="https://irreplaceablepositioning.substack.com/subscribe?simple=true&next=https%3A%2F%2Firreplacablepositioning.substack.com%2F&utm_source=paywall&utm_medium=web&utm_content=&coupon=&just_hierarchical_subs=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors text-center"
              >
                Get Full Access
              </a>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider max-w-2xl mx-auto mb-16" />

        {/* ===== ARTICLES GRID ===== */}
        <section className="px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-bold text-white text-center mb-12"
            >
              Recent Issues
            </motion.h2>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="animate-spin text-[var(--brand-gold)]" size={32} />
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-[var(--grey-400)] mb-4">{error}</p>
                <a
                  href="https://irreplaceablepositioning.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-gold)] hover:underline"
                >
                  Visit Signal {'>'} Noise on Substack →
                </a>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <motion.article
                    key={article.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="h-full p-6 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-all duration-300">
                        {article.thumbnail ? (
                          <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-[var(--grey-800)]">
                            <img
                              src={article.thumbnail}
                              alt={article.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="aspect-video rounded-xl mb-4 bg-gradient-to-br from-[var(--grey-800)] to-[var(--grey-900)] flex items-center justify-center">
                            <BookOpen className="text-[var(--grey-600)]" size={32} />
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-[var(--grey-500)] text-sm mb-3">
                          <Clock size={14} />
                          {formatDate(article.pubDate)}
                        </div>

                        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-[var(--grey-400)] text-sm mb-4 line-clamp-3">
                          {getExcerpt(article.description)}
                        </p>

                        <div className="flex items-center gap-2 text-[var(--brand-gold)] text-sm font-medium">
                          Read on Substack
                          <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <a
                href="https://irreplaceablepositioning.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors"
              >
                Subscribe to Signal {'>'} Noise
                <ExternalLink size={18} />
              </a>
              <p className="text-[var(--grey-500)] text-sm mt-4">
                Weekly insights on extracting invisible expertise
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

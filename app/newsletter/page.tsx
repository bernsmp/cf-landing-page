'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ExternalLink, Clock, BookOpen, Loader2, Check, ChevronDown } from 'lucide-react';

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
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-10"
            >
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-white">Signal</span>
                <span className="text-[var(--brand-gold)] mx-1">{'>'}</span>
                <span className="text-white">Noise</span>
                <span className="text-[var(--grey-500)] font-normal ml-3">Newsletter</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-10 leading-[1.1]"
            >
              <span className="whitespace-nowrap">You help others see their blind spots.</span>{' '}
              <span className="text-gold-gradient">Who helps you see yours?</span>
            </motion.h1>

            {/* Testimonial Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative my-12 mx-auto max-w-3xl"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--grey-900)] to-[var(--grey-850)] border border-[var(--grey-800)]">
                <div className="absolute -top-4 left-8 text-6xl font-display text-[var(--brand-gold)] opacity-40 leading-none">"</div>
                <p className="text-lg md:text-xl text-[var(--grey-200)] italic leading-relaxed pl-4">
                  One of the things that's always been very challenging for me is to explain what I do. But now that I can see it a little bit more clearly... now I have a process that can be stamped out.
                </p>
                <cite className="block mt-4 pl-4 text-[var(--grey-400)] not-italic">
                  — Jay
                </cite>
              </div>
            </motion.blockquote>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <p className="text-lg md:text-xl text-[var(--grey-300)] leading-relaxed max-w-2xl mx-auto mb-6">
                You've spent years building expertise that works. Clients get results. They refer others.
              </p>
              <p className="text-lg md:text-xl text-[var(--grey-300)] leading-relaxed max-w-2xl mx-auto mb-8">
                But when someone asks <span className="text-white font-medium">"what makes you different?"</span> you fumble. You got so good you forgot how.
              </p>
              <p className="text-xl md:text-2xl text-white font-display font-semibold">
                Signal {'>'} Noise is a weekly newsletter that helps you see what you can't see.
              </p>
              <p className="text-[var(--grey-400)] mt-3">
                Each issue breaks down the patterns hiding in your expertise. Plus the exact prompts to extract them yourself.
              </p>
            </motion.div>

            {/* Pricing Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {/* Free Tier */}
              <div className="p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--grey-700)] transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-[var(--grey-400)] uppercase tracking-wider">Free</span>
                </div>
                <p className="text-[var(--grey-300)] mb-6 font-medium">
                  Weekly essays on the science of invisible expertise:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="text-[var(--grey-500)] flex-shrink-0 mt-1" size={18} />
                    <span className="text-[var(--grey-300)]">Why your best work is invisible to you</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--grey-500)] flex-shrink-0 mt-1" size={18} />
                    <span className="text-[var(--grey-300)]">How AI reveals patterns humans can't see</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--grey-500)] flex-shrink-0 mt-1" size={18} />
                    <span className="text-[var(--grey-300)]">Real transformation stories (before/after pattern revelation)</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--grey-500)] flex-shrink-0 mt-1" size={18} />
                    <span className="text-[var(--grey-300)]">The cognitive science behind "I just know"</span>
                  </li>
                </ul>
              </div>

              {/* Paid Tier */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--grey-850)] to-[var(--grey-900)] border border-[var(--brand-gold)]/30 hover:border-[var(--brand-gold)]/50 transition-colors">
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-1 text-xs font-bold bg-[var(--brand-gold)] text-[var(--grey-950)] rounded-full">
                    FULL ACCESS
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-display font-bold text-white">$10</span>
                  <span className="text-[var(--grey-400)]">/month</span>
                </div>
                <p className="text-sm text-[var(--brand-gold)] mb-4">
                  Goes to $20 Dec 22
                </p>
                <p className="text-[var(--grey-300)] mb-6 font-medium">
                  The full extraction toolkit:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="text-[var(--brand-gold)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <span className="text-white font-medium">The Prompt & Workflow Library</span>
                      <p className="text-sm text-[var(--grey-400)] mt-0.5">
                        AI prompts to extract what you can't see and package them into assets. Content, frameworks, customer research. New ones weekly.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--brand-gold)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <span className="text-white font-medium">The Blindspot Finder GPT</span>
                      <span className="ml-2 text-xs text-[var(--grey-500)]">$99 value</span>
                      <p className="text-sm text-[var(--grey-400)] mt-0.5">
                        Paste in a transcript. Get back the patterns you've been running for years without realizing it.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-[var(--brand-gold)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <span className="text-white font-medium">The Framework Factory Course</span>
                      <span className="ml-2 text-xs text-[var(--grey-500)]">$497 value</span>
                      <p className="text-sm text-[var(--grey-400)] mt-0.5">
                        Go from "I can't explain what I do" to documented, nameable IP.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* ROI Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-[var(--grey-400)] italic mb-10"
            >
              One extraction that helps you win a deal covers the entire year.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <a
                href="https://irreplaceablepositioning.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-[var(--grey-700)] text-white font-semibold rounded-xl hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] transition-all duration-300 text-center"
              >
                Subscribe Free →
              </a>
              <a
                href="https://irreplaceablepositioning.substack.com/subscribe?simple=true&next=https%3A%2F%2Firreplacablepositioning.substack.com%2F&utm_source=paywall&utm_medium=web&utm_content=&coupon=&just_hierarchical_subs=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                Get Full Access
                <ExternalLink size={18} />
              </a>
            </motion.div>

            {/* Scroll Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center text-[var(--grey-500)]"
            >
              <span className="text-sm mb-2">Scroll down to preview the deep dives</span>
              <ChevronDown className="animate-bounce" size={20} />
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

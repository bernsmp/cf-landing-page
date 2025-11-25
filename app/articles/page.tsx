'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ExternalLink, Clock, BookOpen, Loader2 } from 'lucide-react';

interface SubstackArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<SubstackArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch from our API route that proxies the Substack RSS
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

  // Strip HTML and truncate
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
        {/* Hero */}
        <section className="px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-[var(--brand-gold)] text-sm font-semibold mb-6"
            >
              <BookOpen size={14} />
              SIGNAL {'>'} NOISE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Articles & Deep Dives
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--grey-400)] max-w-2xl mx-auto"
            >
              Frameworks, pattern analyses, and insights on extracting invisible expertise.
              From the Signal {'>'} Noise newsletter.
            </motion.p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
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
                    animate={{ opacity: 1, y: 0 }}
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
                        {/* Thumbnail placeholder */}
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

                        {/* Date */}
                        <div className="flex items-center gap-2 text-[var(--grey-500)] text-sm mb-3">
                          <Clock size={14} />
                          {formatDate(article.pubDate)}
                        </div>

                        {/* Title */}
                        <h2 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors line-clamp-2">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-[var(--grey-400)] text-sm mb-4 line-clamp-3">
                          {getExcerpt(article.description)}
                        </p>

                        {/* Read more */}
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

            {/* CTA */}
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


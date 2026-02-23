'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { insights, insightCategories } from '@/data/insights';
import { Search, Clock, ArrowRight, Lightbulb, BookOpen } from 'lucide-react';

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredInsights = insights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || insight.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredInsight = insights.find(i => i.featured);
  const otherInsights = filteredInsights.filter(i => !i.featured || selectedCategory || searchQuery);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
              <Lightbulb size={14} />
              INSIGHTS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
            >
              The Science of <span className="text-gold-gradient">Invisible Expertise</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--grey-400)] max-w-2xl mx-auto"
            >
              Research-backed guides on extracting, articulating, and monetizing
              the expertise you can't see.
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="px-6 lg:px-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--grey-500)]" size={18} />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-xl text-white placeholder:text-[var(--grey-500)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                />
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    !selectedCategory
                      ? 'bg-[var(--brand-gold)] text-[var(--grey-950)]'
                      : 'bg-[var(--grey-800)] text-[var(--grey-300)] hover:bg-[var(--grey-700)]'
                  }`}
                >
                  All
                </button>
                {insightCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[var(--brand-gold)] text-[var(--grey-950)]'
                        : 'bg-[var(--grey-800)] text-[var(--grey-300)] hover:bg-[var(--grey-700)]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredInsight && !selectedCategory && !searchQuery && (
          <section className="px-6 lg:px-8 mb-16">
            <div className="max-w-6xl mx-auto">
              <Link href={`/insights/${featuredInsight.slug}`} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-gold)]/10 to-[var(--grey-900)] border border-[var(--brand-gold)]/30 hover:border-[var(--brand-gold)]/50 transition-all"
                >
                  {/* Thumbnail */}
                  {featuredInsight.thumbnail && (
                    <div className="aspect-[21/9] overflow-hidden">
                      <img
                        src={featuredInsight.thumbnail}
                        alt={featuredInsight.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="p-8 md:p-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-wider mb-4">
                      Featured
                    </span>

                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[var(--brand-gold)] transition-colors">
                      {featuredInsight.title}
                    </h2>

                    <p className="text-[var(--grey-400)] text-lg mb-6 max-w-3xl">
                      {featuredInsight.description}
                    </p>

                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-2 text-[var(--grey-500)] text-sm">
                        <Clock size={14} />
                        {featuredInsight.readTime}
                      </span>
                      <span className="flex items-center gap-2 text-[var(--brand-gold)] font-medium">
                        Read article
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredInsights.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[var(--grey-400)]">No insights found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(searchQuery || selectedCategory ? filteredInsights : otherInsights).map((insight, index) => (
                  <motion.article
                    key={insight.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/insights/${insight.slug}`} className="block h-full group">
                      <div className="h-full p-6 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-all duration-300">
                        {/* Thumbnail */}
                        {insight.thumbnail ? (
                          <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-[var(--grey-800)]">
                            <img
                              src={insight.thumbnail}
                              alt={insight.title}
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
                          {formatDate(insight.publishedAt)}
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors line-clamp-2">
                          {insight.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[var(--grey-400)] text-sm mb-4 line-clamp-3">
                          {insight.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center gap-2 text-[var(--brand-gold)] text-sm font-medium">
                          Read article
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-8 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)]"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                See what's already inside you.
              </h2>
              <p className="text-[var(--grey-400)] mb-8 max-w-xl mx-auto">
                Coach's Eye reveals the expertise you're using but haven't named — the patterns top performers see that others miss.
              </p>
              <Link
                href="/coaches-eye"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors"
              >
                See What Leaders See
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

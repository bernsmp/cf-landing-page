'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, BookOpen, Clock, Eye } from 'lucide-react';

const articles = [
  {
    slug: 'sam-altman-patterns',
    title: 'The 5 Invisible Moves Sam Altman Makes in Every Interview',
    subtitle: 'And Why Your Brain Falls For Them',
    excerpt: 'A deep dive into the cognitive patterns that make one of tech\'s most influential figures so persuasive—patterns he likely can\'t see himself.',
    readTime: '12 min read',
    category: 'PATTERN ANALYSIS',
    featured: true,
  },
  {
    slug: 'russell-brunson-patterns',
    title: 'Russell Brunson\'s Hidden Persuasion Architecture',
    subtitle: 'The Frameworks Behind the Funnels',
    excerpt: 'Beyond the marketing tactics: the unconscious decision-making patterns that built a $360M company.',
    readTime: '15 min read',
    category: 'PATTERN ANALYSIS',
  },
  {
    slug: 'expertise-paradox',
    title: 'The Expertise Paradox: Why Being Good Makes You Blind',
    subtitle: 'The Science of Unconscious Competence',
    excerpt: 'How mastery creates invisibility—and what you can do about it.',
    readTime: '8 min read',
    category: 'DEEP DIVE',
  },
];

export default function InActionPage() {
  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-gold)] opacity-[0.03] blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-[var(--brand-gold)] text-sm font-semibold mb-8"
            >
              IN ACTION
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              See the methodology in action
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-[var(--grey-400)] max-w-2xl mx-auto"
            >
              Watch what becomes visible when you know how to look. These pattern analyses demonstrate the same extraction process we use with private clients—applied to public figures.
            </motion.p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative ${article.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <Link href={`/in-action/${article.slug}`} className="block h-full">
                    <div className={`h-full p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-all duration-500 ${article.featured ? 'md:flex md:gap-8' : ''}`}>
                      {/* Thumbnail placeholder */}
                      <div className={`rounded-xl bg-gradient-to-br from-[var(--grey-800)] to-[var(--grey-900)] flex items-center justify-center mb-6 ${article.featured ? 'md:mb-0 md:w-1/3 md:flex-shrink-0 h-48' : 'h-40'}`}>
                        <BookOpen className="text-[var(--grey-600)]" size={48} />
                      </div>

                      <div className="flex-1">
                        {/* Category */}
                        <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] text-xs font-semibold tracking-wider mb-4">
                          {article.category}
                        </span>

                        {/* Title */}
                        <h2 className={`font-display font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors ${article.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                          {article.title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-[var(--grey-400)] text-sm mb-4 italic">
                          {article.subtitle}
                        </p>

                        {/* Excerpt */}
                        <p className="text-[var(--grey-400)] mb-6 line-clamp-3">
                          {article.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[var(--grey-500)] text-sm">
                            <Clock size={14} />
                            {article.readTime}
                          </div>
                          <span className="flex items-center gap-2 text-[var(--brand-gold)] font-medium text-sm group-hover:gap-3 transition-all">
                            Read Article
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Bridge Section */}
        <section className="py-24 px-6 lg:px-8 bg-[var(--grey-900)]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)]"
            >
              <Eye className="text-[var(--brand-gold)] mx-auto mb-6" size={48} />
              
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                These patterns aren't unique to celebrities.
              </h2>
              
              <div className="space-y-4 text-lg text-[var(--grey-400)] mb-8">
                <p>
                  You're running equally sophisticated patterns right now.
                </p>
                <p>
                  You just can't see them because they're YOUR defaults.
                </p>
                <p className="text-white font-semibold">
                  What's invisible to them is visible to you.
                  <br />
                  What's invisible to you is visible to others.
                </p>
              </div>
              
              <p className="text-xl text-[var(--brand-gold)] font-display font-semibold mb-8">
                The question is: what would change if you could finally see yours?
              </p>

              <Link
                href="/assessment"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300"
              >
                Take the Invisibility Test
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


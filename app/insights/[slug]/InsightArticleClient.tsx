'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { InsightArticle } from '@/data/insights';
import { Clock, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import ReactMarkdown, { Components } from 'react-markdown';
import Image from 'next/image';

// Custom components for ReactMarkdown
const markdownComponents: Components = {
  // Custom image renderer with figure/figcaption
  img: ({ src, alt }) => {
    if (!src) return null;
    return (
      <figure>
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={450}
          className="article-image"
          style={{ width: '100%', height: 'auto' }}
        />
        {alt && <figcaption>{alt}</figcaption>}
      </figure>
    );
  },
};

interface Props {
  insight: InsightArticle;
  relatedInsights: (InsightArticle | undefined)[];
}

export default function InsightArticleClient({ insight, relatedInsights }: Props) {
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
        {/* Header */}
        <header className="px-6 lg:px-8 mb-12">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[var(--grey-400)] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Category */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-wider mb-4"
            >
              {insight.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {insight.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 text-[var(--grey-400)] text-sm"
            >
              <span>{formatDate(insight.publishedAt)}</span>
              <span className="text-[var(--grey-600)]">|</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {insight.readTime}
              </span>
            </motion.div>
          </div>
        </header>

        {/* Article Content */}
        <article className="px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="article-content">
              <ReactMarkdown components={markdownComponents}>
                {insight.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </article>

        {/* FAQs Section */}
        {insight.faqs && insight.faqs.length > 0 && (
          <section className="px-6 lg:px-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {insight.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group p-6 rounded-xl bg-[var(--grey-900)] border border-[var(--grey-800)]"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-display font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        size={20}
                        className="text-[var(--grey-400)] transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-4 text-[var(--grey-400)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedInsights.length > 0 && (
          <section className="px-6 lg:px-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                Related Insights
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedInsights.map((related) => related && (
                  <Link
                    key={related.id}
                    href={`/insights/${related.slug}`}
                    className="block group"
                  >
                    <div className="p-6 rounded-xl bg-[var(--grey-900)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-all">
                      <span className="inline-block px-2 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-500)] text-xs font-semibold uppercase tracking-wider mb-3">
                        {related.category}
                      </span>
                      <h3 className="font-display font-bold text-white group-hover:text-[var(--brand-gold)] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--brand-gold)]/10 to-[var(--grey-900)] border border-[var(--brand-gold)]/30 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                How invisible is your expertise?
              </h2>
              <p className="text-[var(--grey-400)] mb-8 max-w-xl mx-auto">
                Take the 3-minute assessment and discover how much of your
                value is hidden—even from yourself.
              </p>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors"
              >
                Take the Invisibility Test
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

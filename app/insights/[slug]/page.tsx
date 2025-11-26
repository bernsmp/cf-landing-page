import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInsightBySlug, getAllInsightSlugs, insights } from '@/data/insights';
import InsightArticleClient from './InsightArticleClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: 'Article Not Found | Cognitive Fingerprint',
    };
  }

  return {
    title: insight.metaTitle || `${insight.title} | Cognitive Fingerprint`,
    description: insight.metaDescription || insight.description,
    keywords: insight.keywords,
    openGraph: {
      title: insight.metaTitle || insight.title,
      description: insight.metaDescription || insight.description,
      type: 'article',
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt,
      authors: ['Max Bernstein'],
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.metaTitle || insight.title,
      description: insight.metaDescription || insight.description,
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  // Get related articles
  const relatedInsights = insight.relatedSlugs
    ?.map(s => insights.find(i => i.slug === s))
    .filter(Boolean) || [];

  // JSON-LD Schema for Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.description,
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt || insight.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Max Bernstein',
      url: 'https://cognitivefingerprint.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cognitive Fingerprint',
      url: 'https://cognitivefingerprint.ai',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cognitivefingerprint.ai/insights/${insight.slug}`,
    },
  };

  // JSON-LD Schema for FAQs (if present)
  const faqSchema = insight.faqs && insight.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: insight.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <InsightArticleClient insight={insight} relatedInsights={relatedInsights} />
    </>
  );
}

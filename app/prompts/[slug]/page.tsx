import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPromptBySlug, prompts } from '@/data/prompts';
import PromptPageClient from './PromptPageClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all prompts
export async function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

// Generate dynamic metadata for each prompt
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);

  if (!prompt) {
    return {
      title: 'Prompt Not Found | Cognitive Fingerprint',
    };
  }

  const title = `${prompt.title} | Prompt Vault`;
  const description = prompt.description;
  const imageUrl = prompt.thumbnail
    ? `https://cognitivefingerprint.ai${prompt.thumbnail}`
    : 'https://cognitivefingerprint.ai/og-image.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://cognitivefingerprint.ai/prompts/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: prompt.title,
        },
      ],
      siteName: 'Cognitive Fingerprint',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PromptDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);

  if (!prompt) {
    notFound();
  }

  return <PromptPageClient prompt={prompt} />;
}

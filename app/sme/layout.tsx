import type { Metadata } from 'next';

const title = 'The prompt from the show | Cognitive Fingerprint';
const description =
  'Run it on one transcript of yourself working. It names the one pattern you can’t see in your own words and shows you exactly where you did it. The free prompt from the AI Explored episode.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://cognitivefingerprint.ai/sme',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function SmeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

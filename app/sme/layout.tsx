import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Four Layers Extraction Prompt | Cognitive Fingerprint',
  description:
    'The full expertise-extraction prompt from the AI Explored podcast. Run it on one of your own transcripts and see the four layers of thinking you cannot see yourself.',
};

export default function SmeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

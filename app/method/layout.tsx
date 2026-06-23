import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Expertise Extraction Works | The Cognitive Fingerprint™ Method",
  description:
    "70-90% of expert knowledge runs unconsciously, which is why you can't explain your own edge. See how the Cognitive Fingerprint™ method pairs AI pattern recognition with human facilitation to surface the patterns behind your best work.",
  openGraph: {
    title:
      "The Cognitive Fingerprint™ Method: How We Extract Unconscious Expertise",
    description:
      "Why you can't see your own expertise, and how AI plus human facilitation surfaces the methodology, mental models, and decision criteria behind your best work.",
    url: "https://cognitivefingerprint.ai/method",
    siteName: "Cognitive Fingerprint™",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Cognitive Fingerprint™ Method: How We Extract Unconscious Expertise",
    description:
      "Why you can't see your own expertise, and how AI plus human facilitation surfaces the patterns behind your best work.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Expertise Extraction Works: The Cognitive Fingerprint™ Method",
  description:
    "Why 70-90% of expert knowledge is invisible to the expert who holds it, and how the Cognitive Fingerprint™ method uses AI pattern recognition plus human facilitation to make it visible.",
  author: {
    "@type": "Person",
    name: "Max Bernstein",
    url: "https://cognitivefingerprint.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "Cognitive Fingerprint",
    url: "https://cognitivefingerprint.ai",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://cognitivefingerprint.ai/method",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why can't I explain my own expertise?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Because most of it runs below conscious awareness. Research puts 70-90% of expert knowledge in the unconscious (Polanyi's Paradox, 1966: \"We know more than we can tell\"), experts act from pattern recognition so fast it feels like instinct (Dreyfus), and only about 15% of mental processing is visible to us (Flavell). You can articulate the roughly 10% you already know about; the rest is invisible to you precisely because you are the one doing it.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Cognitive Fingerprint method extract expertise?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "It pairs AI with human facilitation. The AI analyzes 20+ hours of how you actually talk and work, detecting patterns across conversations at a scale and speed humans can't match. The facilitation guides you to interpret, claim, and own those patterns. The AI finds the patterns but doesn't know what they mean; you know what they mean but can't see which patterns exist. The method finds out together.",
      },
    },
    {
      "@type": "Question",
      name: "Will sharing my framework reduce demand for my work?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. People don't pay for maps, they pay for guides. Jay Abraham has published every framework he has created, recorded thousands of hours, and even built an AI clone of himself, and still commands $250,000+ per engagement. The more you share the map, the more demand you create for the guide. Visibility isn't the threat; invisibility is.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Cognitive Fingerprint method actually extract?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Your core methodology (the repeatable process behind your results), your mental models (how you think about problems differently), your decision-making criteria (what you are actually evaluating, even when you can't name it), your signature insights (the perspectives only you bring), and your voice patterns (the specific way you explain complex ideas). The system already exists in how you work; the method makes it visible.",
      },
    },
  ],
};

export default function MethodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}

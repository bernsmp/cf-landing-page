export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cognitive Fingerprint',
    url: 'https://cognitivefingerprint.ai',
    logo: 'https://cognitivefingerprint.ai/icon',
    description: 'Evidence-based cognitive analysis that helps experts decode their unconscious expertise and create irreplaceable positioning.',
    sameAs: [
      'https://irreplaceablepositioning.substack.com',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cognitive Fingerprint',
    url: 'https://cognitivefingerprint.ai',
    description: 'Decode your unconscious expertise. Evidence-based cognitive analysis for leaders who want to operate at their true potential.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cognitivefingerprint.ai/insights?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ServiceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cognitive Fingerprint Analysis',
    provider: {
      '@type': 'Organization',
      name: 'Cognitive Fingerprint',
    },
    description: 'A diagnostic process that extracts the invisible 90% of your expertise—the patterns, instincts, and decision-making frameworks operating below conscious awareness.',
    serviceType: 'Expertise Extraction',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cognitive Fingerprint Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EXTRACT Method',
            description: 'The complete system for extracting and articulating your unconscious expertise.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Value Archaeology',
            description: 'Deep analysis of your client conversations to surface hidden value patterns.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ProfessionalServiceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Cognitive Fingerprint',
    url: 'https://cognitivefingerprint.ai',
    description: 'Evidence-based cognitive analysis helping consultants, coaches, and experts discover and articulate their unconscious expertise.',
    priceRange: '$$',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    knowsAbout: [
      'Expertise Extraction',
      'Unconscious Competence',
      'Tacit Knowledge',
      'Signature Frameworks',
      'Positioning Strategy',
      'Cognitive Analysis',
      'Decision Making Patterns',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// FAQ Schema for AEO - great for AI answer engines
export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Article schema for insights/blog posts
export function ArticleJsonLd({
  title,
  description,
  publishedAt,
  updatedAt,
  url,
  image,
}: {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  url: string
  image?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    url: url,
    image: image || 'https://cognitivefingerprint.ai/opengraph-image',
    author: {
      '@type': 'Organization',
      name: 'Cognitive Fingerprint',
      url: 'https://cognitivefingerprint.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cognitive Fingerprint',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cognitivefingerprint.ai/icon',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Homepage combined schema
export function HomePageJsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <ProfessionalServiceJsonLd />
      <FAQJsonLd
        faqs={[
          {
            question: 'What is a Cognitive Fingerprint?',
            answer: 'A Cognitive Fingerprint is the unique pattern of unconscious expertise that makes you irreplaceable. It includes your decision-making patterns, diagnostic instincts, and problem-solving approaches that operate below conscious awareness—the invisible 90% of what makes you valuable.',
          },
          {
            question: 'What is unconscious competence?',
            answer: 'Unconscious competence is the final stage of learning where skills become automatic. Experts develop this over years of practice—their expertise becomes so natural they can no longer explain it. This is why top consultants often struggle to articulate what makes them different.',
          },
          {
            question: 'What is the EXTRACT Method?',
            answer: 'The EXTRACT Method is a systematic approach to surfacing tacit knowledge and unconscious expertise. Rather than asking experts to create frameworks from scratch, it analyzes their actual work (transcripts, decisions, client interactions) to discover the patterns they already use but cannot see.',
          },
          {
            question: 'Why do signature frameworks feel generic?',
            answer: "Most experts try to 'create' their framework by consciously deciding what to include. This approach fails for experienced practitioners because their real methodology has moved to unconscious competence. The solution is extraction (discovering what you already do) rather than architecture (deciding what you should do).",
          },
          {
            question: 'What is tacit knowledge?',
            answer: "Tacit knowledge is expertise that you know but cannot easily articulate—the things you 'just know' without being able to explain how. Research suggests up to 90% of expert knowledge is tacit. Philosopher Michael Polanyi described this as 'we know more than we can tell.'",
          },
        ]}
      />
    </>
  )
}

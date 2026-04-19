import type { Metadata } from "next";
import "./coachk.css";

export const metadata: Metadata = {
  title: "Coach K | Cognitive Fingerprint Analysis",
  description:
    "7 cognitive patterns Coach K demonstrates constantly but has never named. Extracted from 8 transcripts, 36,984 words, and 327 behavioral indicators across 47 years of coaching.",
  openGraph: {
    title: "Coach K | Cognitive Fingerprint Analysis",
    description:
      "The operating system behind 1,202 wins, mapped for the first time. 7 patterns he demonstrates constantly but has never named.",
    url: "https://cognitivefingerprint.ai/coachk",
    siteName: "Cognitive Fingerprint",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach K | Cognitive Fingerprint Analysis",
    description:
      "The operating system behind 1,202 wins, mapped for the first time. 7 patterns he demonstrates constantly but has never named.",
  },
};

export default function CoachKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import "./coachk.css";

export const metadata: Metadata = {
  title: "Coach K | Cognitive Fingerprint Analysis",
  description:
    "The cognitive patterns behind 1,202 wins, 5 national championships, and 42 years of building champions. 8 transcripts. 36,984 words. 327 behavioral indicators.",
  openGraph: {
    title: "Coach K | Cognitive Fingerprint Analysis",
    description:
      "The cognitive patterns behind 1,202 wins, 5 national championships, and 42 years of building champions.",
    url: "https://cognitivefingerprint.ai/coachk",
    siteName: "Cognitive Fingerprint",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach K | Cognitive Fingerprint Analysis",
    description:
      "The cognitive patterns behind 1,202 wins, 5 national championships, and 42 years of building champions.",
  },
};

export default function CoachKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

const title = "The Remix Room — Cognitive Fingerprint";
const description =
  "Nine prompts. Two moves. They interview you before they write anything.";
const url = "https://www.cognitivefingerprint.ai/remixroom";
const ogImage = "https://www.cognitivefingerprint.ai/remixroom/hero.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Cognitive Fingerprint™",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1920,
        height: 1071,
        alt: "The Remix Room — a Cognitive Fingerprint™ release",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RemixRoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

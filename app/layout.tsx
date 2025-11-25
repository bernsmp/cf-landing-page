import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cognitive Fingerprint™ | Decode Your Unconscious Expertise",
  description: "Discover the hidden patterns driving your best decisions. Evidence-based cognitive analysis for leaders who want to operate at their true potential.",
  metadataBase: new URL('https://cognitivefingerprint.ai'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Cognitive Fingerprint™ | Decode Your Unconscious Expertise',
    description: 'Discover the hidden patterns driving your best decisions. Evidence-based cognitive analysis for leaders.',
    url: 'https://cognitivefingerprint.ai',
    siteName: 'Cognitive Fingerprint™',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cognitive Fingerprint - Decode Your Unconscious Expertise',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognitive Fingerprint™ | Decode Your Unconscious Expertise',
    description: 'Discover the hidden patterns driving your best decisions. Evidence-based cognitive analysis for leaders.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

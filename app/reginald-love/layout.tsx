import type { Metadata } from "next";
import { Manrope, Bodoni_Moda } from "next/font/google";
import "./reginald.css";

const manrope = Manrope({
  variable: "--font-reginald-body",
  subsets: ["latin"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-reginald-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reginald Love | Cognitive Fingerprint™ Analysis",
  description:
    "From Obama's mailroom to the tie he lent before a presidential debate. Six patterns in the operating system of a man who enters through the lowest legitimate door, counts the things no one else is counting, and relays every insight intact to whoever needs it next.",
  openGraph: {
    title: "Reginald Love | Cognitive Fingerprint™ Analysis",
    description:
      "The man one step behind the President — and three steps ahead. Six cognitive patterns mapped across twenty years, from the mailroom to Apollo.",
    url: "https://cognitivefingerprint.ai/reginald-love",
    siteName: "Cognitive Fingerprint™",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reginald Love | Cognitive Fingerprint™ Analysis",
    description:
      "The man one step behind the President — and three steps ahead. Six cognitive patterns mapped across twenty years.",
  },
};

export default function ReginaldLoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable} ${bodoniModa.variable}`}>
      {children}
    </div>
  );
}

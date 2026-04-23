import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Remix Room — Cognitive Fingerprint",
  description:
    "Nine prompts. Two moves. For finding your unique angle faster than the blank page can stop you.",
};

export default function RemixRoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

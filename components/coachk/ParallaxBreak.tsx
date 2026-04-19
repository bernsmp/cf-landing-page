"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParallaxBreakProps {
  image: string;
  quote: string;
  attribution: string;
}

export default function ParallaxBreak({
  image,
  quote,
  attribution,
}: ParallaxBreakProps) {
  // iOS Safari doesn't support background-attachment: fixed
  const [isIOS, setIsIOS] = useState(false);
  useEffect(() => {
    setIsIOS(/iPhone|iPad|iPod/.test(navigator.userAgent));
  }, []);

  return (
    <section
      className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
      style={{ background: "var(--grey-950)" }}
    >
      {/* Background image — parallax on desktop, static on iOS */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: isIOS ? "scroll" : "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,11,0.7) 0%, rgba(10,10,11,0.55) 50%, rgba(10,10,11,0.7) 100%)",
        }}
      />

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-8 text-center"
      >
        <p className="font-display text-2xl md:text-4xl text-white italic leading-snug mb-4">
          &ldquo;{quote}&rdquo;
        </p>
        <p
          className="text-sm font-mono tracking-wider uppercase"
          style={{ color: "var(--grey-400)" }}
        >
          {attribution}
        </p>
      </motion.div>
    </section>
  );
}

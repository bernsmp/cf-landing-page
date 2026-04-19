"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { profile } from "@/data/coach-k";

// Swap between hero images: "hero-v1.png" | "hero-v2.png" | "hero-v3.png" | "hero-v4.png"
const HERO_IMAGE = "/coachk/hero-v3.png";

function AnimatedCounter({
  value,
  suffix = "",
  label,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const count = useMotionValue(0);
  const springCount = useSpring(count, {
    stiffness: 50,
    damping: 25,
    restDelta: 1,
  });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }, delay);
    return () => clearTimeout(timeout);
  }, [count, value, delay]);

  useEffect(() => {
    const unsubscribe = springCount.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent =
          Math.round(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [springCount, suffix]);

  return (
    <div className="text-center">
      <span
        ref={displayRef}
        className="block font-display text-3xl md:text-4xl text-white"
      >
        0{suffix}
      </span>
      <span className="block text-xs md:text-sm tracking-widest uppercase mt-1"
        style={{ color: "var(--grey-400)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--grey-950)" }}
    >
      {/* Hero background image — faded */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        />
        {/* Gradient overlays for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, var(--grey-950) 75%),
              linear-gradient(to bottom, var(--grey-950) 0%, transparent 20%, transparent 70%, var(--grey-950) 100%)
            `,
          }}
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium mb-8"
            style={{
              background: "rgba(0, 48, 135, 0.12)",
              border: "1px solid rgba(0, 48, 135, 0.25)",
              color: "#4a8af5",
            }}
          >
            Cognitive Fingerprint™ Analysis
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-4"
        >
          Coach K
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-duke-gradient font-display text-xl md:text-2xl lg:text-3xl mb-12"
        >
          The invisible architecture behind 1,202 wins
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          <AnimatedCounter
            value={profile.stats.wins}
            label="Wins"
            delay={1000}
          />
          <AnimatedCounter
            value={profile.stats.championships}
            label="Championships"
            delay={1200}
          />
          <AnimatedCounter
            value={profile.stats.nbaPicks}
            label="NBA Draft Picks"
            delay={1400}
          />
          <AnimatedCounter
            value={profile.stats.seasons}
            label="Seasons"
            delay={1600}
          />
        </motion.div>

        {/* Source badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-xs font-mono"
            style={{
              background: "var(--grey-900)",
              border: "1px solid var(--border-subtle)",
              color: "var(--grey-400)",
            }}
          >
            327 behavioral indicators &middot;{" "}
            ~{(profile.stats.wordsAnalyzed / 1000).toFixed(0)}k words analyzed
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-chevron-bounce"
      >
        <ChevronDown
          size={28}
          style={{ color: "var(--grey-500)" }}
        />
      </motion.div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { signaturePatterns } from "@/data/coach-k";

function DriveRing({ score, size = 40 }: { score: number; size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const maxScore = 25;
  const percentage = score / maxScore;
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage);

  return (
    <div ref={ref} className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(0, 48, 135, 0.15)"
          strokeWidth={3}
        />
        {/* Score ring */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#4a8af5"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-xs font-mono font-medium"
        style={{ color: "#4a8af5" }}
      >
        {score}
      </span>
    </div>
  );
}

function PatternCard({
  pattern,
  index,
}: {
  pattern: (typeof signaturePatterns)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "var(--grey-850)",
        border: "1px solid var(--border-subtle)",
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Collapsed header */}
      <div className="p-6 md:p-8 flex items-start md:items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-4 md:gap-6 flex-1">
          {/* DRIVE score ring */}
          <DriveRing score={pattern.driveScore} />

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-display text-lg md:text-xl text-white">
                {pattern.name}
              </h3>
            </div>
            <p
              className="text-sm line-clamp-2"
              style={{ color: "var(--grey-400)" }}
            >
              {pattern.keyInsight}
            </p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-1"
        >
          <ChevronDown size={20} style={{ color: "var(--grey-500)" }} />
        </motion.div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-6 md:px-8 pb-8 pt-2 space-y-6"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              {/* Mechanism */}
              <div>
                <h4
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "var(--grey-500)" }}
                >
                  Mechanism
                </h4>
                <p className="text-sm" style={{ color: "var(--grey-300)" }}>
                  {pattern.mechanism}
                </p>
              </div>

              {/* Why it works */}
              <div>
                <h4
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "var(--grey-500)" }}
                >
                  Why It Works
                </h4>
                <p className="text-sm" style={{ color: "var(--grey-300)" }}>
                  {pattern.whyItWorks}
                </p>
              </div>

              {/* Layer 3: Why he can't see it */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(0, 48, 135, 0.06)",
                  border: "1px solid rgba(0, 48, 135, 0.12)",
                }}
              >
                <h4
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#4a8af5" }}
                >
                  Layer 3: Why He Cannot See It
                </h4>
                <p className="text-sm" style={{ color: "var(--grey-200)" }}>
                  {pattern.whyCantSeeIt}
                </p>
              </div>

              {/* Layer 4: Underlying belief */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(0, 48, 135, 0.04)",
                  border: "1px solid rgba(0, 48, 135, 0.08)",
                }}
              >
                <h4
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#4a8af5" }}
                >
                  Layer 4: Underlying Belief
                </h4>
                <p
                  className="text-sm font-display text-lg"
                  style={{ color: "var(--grey-100)" }}
                >
                  {pattern.underlyingBelief}
                </p>
              </div>

              {/* Evidence chain */}
              <div>
                <h4
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--grey-500)" }}
                >
                  Evidence Chain
                </h4>
                <div className="space-y-2">
                  {pattern.evidenceChain.map((evidence, i) => (
                    <div
                      key={i}
                      className="text-sm pl-4 py-2"
                      style={{
                        borderLeft: "2px solid rgba(0, 48, 135, 0.3)",
                        color: "var(--grey-300)",
                      }}
                    >
                      {evidence}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: "var(--grey-900)",
                  borderLeft: "3px solid #003087",
                }}
              >
                <p
                  className="font-display text-base italic"
                  style={{ color: "var(--grey-200)" }}
                >
                  &ldquo;{pattern.coachKQuote}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PatternDiscovery() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ background: "var(--grey-950)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium mb-6"
            style={{
              background: "rgba(0, 48, 135, 0.08)",
              border: "1px solid rgba(0, 48, 135, 0.15)",
              color: "#4a8af5",
            }}
          >
            Signature Patterns
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            What the Transcripts Reveal
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg mb-8"
            style={{ color: "var(--grey-400)" }}
          >
            Seven signature patterns emerged from the analysis. Each operates
            below conscious awareness. Together they form a four-part cycle that IS
            Coach K&apos;s cognitive architecture.
          </p>
          {/* DRIVE legend */}
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full"
            style={{
              background: "var(--grey-900)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <DriveRing score={25} size={28} />
            <span className="text-xs" style={{ color: "var(--grey-400)" }}>
              DRIVE score... distinctiveness, replicability, invisibility, value, evidence (out of 25)
            </span>
          </div>
        </motion.div>

        {/* Patterns stack */}
        <div className="space-y-4">
          {signaturePatterns.map((pattern, index) => (
            <PatternCard key={pattern.id} pattern={pattern} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { patternDynamics } from "@/data/coach-k";

function DynamicCard({
  dynamic,
  index,
}: {
  dynamic: (typeof patternDynamics)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  const isCombination = dynamic.type === "combination";
  const accentColor = isCombination ? "#003087" : "#f59e0b";
  const accentBg = isCombination
    ? "rgba(0, 48, 135, 0.08)"
    : "rgba(245, 158, 11, 0.08)";
  const accentBorder = isCombination
    ? "rgba(0, 48, 135, 0.15)"
    : "rgba(245, 158, 11, 0.15)";
  const labelColor = isCombination ? "#4a8af5" : "#f59e0b";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: "var(--grey-850)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      {/* Type badge */}
      <span
        className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium mb-5"
        style={{
          background: accentBg,
          color: labelColor,
          border: `1px solid ${accentBorder}`,
        }}
      >
        {isCombination ? "Power Combination" : "Pattern Interference"}
      </span>

      {/* Pattern pills with connector */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <span
          className="inline-block px-4 py-2 rounded-full text-sm font-medium"
          style={{
            background: "var(--grey-800)",
            color: "var(--grey-200)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {dynamic.patternA}
        </span>

        {/* SVG connector */}
        <svg
          width="40"
          height="20"
          viewBox="0 0 40 20"
          className="shrink-0 hidden md:block"
        >
          <motion.line
            x1="0"
            y1="10"
            x2="40"
            y2="10"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeDasharray={isCombination ? "none" : "4 3"}
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          />
          <motion.circle
            cx="20"
            cy="10"
            r="3"
            fill={accentColor}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
          />
        </svg>

        <span
          className="inline-block md:hidden text-sm"
          style={{ color: labelColor }}
        >
          {isCombination ? "+" : "vs."}
        </span>

        <span
          className="inline-block px-4 py-2 rounded-full text-sm font-medium"
          style={{
            background: "var(--grey-800)",
            color: "var(--grey-200)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {dynamic.patternB}
        </span>
      </div>

      {/* Effect */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--grey-300)" }}>
        {dynamic.effect}
      </p>
    </motion.div>
  );
}

export default function PatternDynamics() {
  const combinations = patternDynamics.filter(
    (d) => d.type === "combination"
  );
  const interferences = patternDynamics.filter(
    (d) => d.type === "interference"
  );

  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--grey-950)" }}
    >
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
            Pattern Dynamics
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            How Patterns Interact
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            Cognitive patterns do not operate in isolation. They amplify each
            other, interfere with each other, and create emergent behaviors that
            none of them produce alone.
          </p>
        </motion.div>

        {/* Power Combinations */}
        {combinations.length > 0 && (
          <div className="mb-12">
            <h3
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--grey-500)" }}
            >
              Power Combinations
            </h3>
            <div className="space-y-4">
              {combinations.map((dynamic, index) => (
                <DynamicCard
                  key={`comb-${index}`}
                  dynamic={dynamic}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Pattern Interference */}
        {interferences.length > 0 && (
          <div>
            <h3
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--grey-500)" }}
            >
              Pattern Interference
            </h3>
            <div className="space-y-4">
              {interferences.map((dynamic, index) => (
                <DynamicCard
                  key={`inter-${index}`}
                  dynamic={dynamic}
                  index={index + combinations.length}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

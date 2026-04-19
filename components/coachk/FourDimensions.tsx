"use client";

import { motion, useSpring, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { dimensions } from "@/data/coach-k";

function DimensionCard({
  dimension,
  index,
}: {
  dimension: (typeof dimensions)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const barWidth = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        barWidth.set(dimension.percentage);
      }, index * 150);
      return () => clearTimeout(timeout);
    }
  }, [isInView, dimension.percentage, index, barWidth]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
      style={{
        background: "var(--grey-850)",
        border: "1px solid var(--border-subtle)",
        borderTop: `3px solid ${dimension.color}`,
      }}
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${dimension.color}08 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display text-xl text-white">
            {dimension.name}
          </h3>
          <span
            className="text-sm font-mono font-medium"
            style={{ color: dimension.color }}
          >
            {dimension.percentage}%
          </span>
        </div>
        <p
          className="text-xs mb-4"
          style={{ color: "var(--grey-500)" }}
        >
          {dimension.definition}
        </p>

        {/* Progress bar */}
        <div
          className="w-full h-1.5 rounded-full mb-5 overflow-hidden"
          style={{ background: "var(--grey-800)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              width: barWidth.get() + "%",
              background: `linear-gradient(90deg, ${dimension.color}, ${dimension.color}cc)`,
            }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${dimension.color}, ${dimension.color}cc)`,
                width: "100%",
                scaleX: barWidth,
                transformOrigin: "left",
              }}
            />
          </motion.div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--grey-300)" }}
        >
          {dimension.description}
        </p>

        {/* Evidence */}
        <div className="space-y-2">
          {dimension.evidence.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-xs"
              style={{ color: "var(--grey-400)" }}
            >
              <span style={{ color: dimension.color }} className="mt-1 shrink-0">
                &bull;
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FourDimensions() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ background: "var(--grey-950)" }}>
      <div className="max-w-6xl mx-auto">
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
            Four Dimensions
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Where His Expertise Lives
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            Four cognitive dimensions shape how Coach K processes decisions,
            builds teams, and leads under pressure. The distribution is the
            fingerprint.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dimensions.map((dimension, index) => (
            <DimensionCard
              key={dimension.name}
              dimension={dimension}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

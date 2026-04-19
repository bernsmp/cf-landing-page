"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { blindSpots } from "@/data/coach-k";

function BlindSpotCard({
  spot,
  index,
}: {
  spot: (typeof blindSpots)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: "var(--grey-850)",
        border: "1px solid var(--border-subtle)",
        borderLeft: "3px solid #f59e0b",
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <AlertTriangle
          size={18}
          className="mt-0.5 shrink-0"
          style={{ color: "#f59e0b" }}
        />
        <h3 className="font-display text-lg text-white">{spot.title}</h3>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "var(--grey-300)" }}
      >
        {spot.description}
      </p>

      {/* Evidence */}
      <div className="mb-5">
        <h4
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--grey-500)" }}
        >
          Evidence
        </h4>
        <div className="space-y-2">
          {spot.evidence.map((item, i) => (
            <div
              key={i}
              className="text-sm pl-4 py-2"
              style={{
                borderLeft: "2px solid rgba(245, 158, 11, 0.3)",
                color: "var(--grey-400)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Elimination strategy */}
      <div
        className="rounded-xl p-4"
        style={{
          background: "rgba(245, 158, 11, 0.05)",
          border: "1px solid rgba(245, 158, 11, 0.1)",
        }}
      >
        <h4
          className="text-xs tracking-widest uppercase mb-2"
          style={{ color: "#f59e0b" }}
        >
          Elimination Strategy
        </h4>
        <p className="text-sm" style={{ color: "var(--grey-300)" }}>
          {spot.eliminationStrategy}
        </p>
      </div>
    </motion.div>
  );
}

export default function BlindSpots() {
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
              background: "rgba(245, 158, 11, 0.08)",
              border: "1px solid rgba(245, 158, 11, 0.15)",
              color: "#f59e0b",
            }}
          >
            Blind Spots
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            What He Cannot See
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            Every expert has cognitive blind spots. They are not flaws. They are
            the natural cost of deep expertise. The patterns that make Coach K
            exceptional also create gaps he cannot observe from inside.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {blindSpots.map((spot, index) => (
            <BlindSpotCard key={spot.id} spot={spot} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

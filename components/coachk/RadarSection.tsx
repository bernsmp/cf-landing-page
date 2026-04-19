"use client";

import { motion } from "framer-motion";
import React from "react";

function Circle({ style, idx }: { style: React.CSSProperties; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.2 }}
      className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={style}
    />
  );
}

function Radar() {
  const circles = new Array(8).fill(1);
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-full">
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(20deg); }
          to   { transform: rotate(380deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 10s linear infinite;
        }
      `}</style>
      {/* Rotating sweep line — clipped to container via parent overflow-hidden */}
      <div
        style={{ transformOrigin: "right center" }}
        className="animate-radar-spin absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[min(400px,45vw)] md:w-[400px] items-end justify-center overflow-hidden bg-transparent"
      >
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-[#003087] to-transparent" />
      </div>
      {/* Concentric circles */}
      {circles.map((_, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            border: `1px solid rgba(0, 48, 135, ${0.35 - idx * 0.03})`,
          }}
          key={`circle-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
}

const patterns = [
  {
    name: "The Good People Filter",
    score: "23/25",
    position: "top-[5%] left-[18%]",
    delay: 0.3,
  },
  {
    name: "The Identity Fusion",
    score: "23/25",
    position: "top-[18%] right-[5%]",
    delay: 0.5,
  },
  {
    name: "The Feel-First Architecture",
    score: "22/25",
    position: "top-[40%] left-[0%]",
    delay: 0.7,
  },
  {
    name: "The Ownership Protocol",
    score: "23/25",
    position: "top-[25%] right-[18%]",
    delay: 0.9,
  },
  {
    name: "The Emotional Engineering",
    score: "21/25",
    position: "bottom-[35%] left-[10%]",
    delay: 1.1,
  },
  {
    name: "The Collective Recovery",
    score: "25/25",
    position: "bottom-[15%] right-[12%]",
    delay: 1.3,
  },
  {
    name: "The Belief Bridge",
    score: "25/25",
    position: "bottom-[5%] left-[30%]",
    delay: 1.5,
  },
];

function PatternNode({
  name,
  score,
  position,
  delay,
}: {
  name: string;
  score: string;
  position: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className={`absolute z-50 ${position}`}
    >
      <div
        className="flex items-center gap-2 rounded-xl px-3 py-2"
        style={{
          background: "rgba(0, 48, 135, 0.12)",
          border: "1px solid rgba(0, 48, 135, 0.25)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Pulse dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
            style={{ background: "#4a8af5" }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: "#4a8af5" }}
          />
        </span>
        <span className="text-[11px] font-medium text-white whitespace-nowrap">
          {name}
        </span>
        <span
          className="text-[10px] font-mono"
          style={{ color: "var(--grey-500)" }}
        >
          {score}
        </span>
      </div>
    </motion.div>
  );
}

export default function RadarSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--grey-950)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium mb-6"
            style={{
              background: "rgba(0, 48, 135, 0.08)",
              border: "1px solid rgba(0, 48, 135, 0.15)",
              color: "#4a8af5",
            }}
          >
            Pattern Detection
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            7 Signature Patterns Identified
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            327 behavioral indicators extracted from 36,984 words. Each pattern
            operates below Coach K&apos;s conscious awareness. He demonstrates them
            constantly but cannot describe them.
          </p>
        </motion.div>

        {/* Radar visualization — desktop */}
        <div className="hidden md:block relative h-[600px]">
          <div className="flex items-center justify-center h-full">
            <Radar />
            {/* Center label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute z-50 text-center"
            >
              <div
                className="text-4xl font-display font-bold"
                style={{ color: "#4a8af5" }}
              >
                327
              </div>
              <div
                className="text-[10px] font-mono tracking-widest uppercase"
                style={{ color: "var(--grey-500)" }}
              >
                Indicators
              </div>
            </motion.div>

            {/* Pattern nodes — absolute on desktop */}
            {patterns.map((p) => (
              <PatternNode key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Radar visualization — mobile: smaller radar + stacked list */}
        <div className="md:hidden">
          <div className="relative h-[280px] flex items-center justify-center overflow-hidden">
            <div className="scale-[0.55]">
              <Radar />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute z-50 text-center"
            >
              <div
                className="text-3xl font-display font-bold"
                style={{ color: "#4a8af5" }}
              >
                327
              </div>
              <div
                className="text-[9px] font-mono tracking-widest uppercase"
                style={{ color: "var(--grey-500)" }}
              >
                Indicators
              </div>
            </motion.div>
          </div>

          {/* Pattern list — mobile */}
          <div className="grid grid-cols-1 gap-2 mt-4 px-2">
            {patterns.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: "rgba(0, 48, 135, 0.08)",
                  border: "1px solid rgba(0, 48, 135, 0.15)",
                }}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
                    style={{ background: "#4a8af5" }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ background: "#4a8af5" }}
                  />
                </span>
                <span className="text-sm font-medium text-white flex-1">
                  {p.name}
                </span>
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--grey-500)" }}
                >
                  {p.score}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

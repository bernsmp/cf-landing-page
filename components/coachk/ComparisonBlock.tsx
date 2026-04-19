"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { comparisons } from "@/data/coach-k";

function HighlightedText({
  text,
  highlights,
  isActive,
}: {
  text: string;
  highlights: string[];
  isActive: boolean;
}) {
  if (!isActive || highlights.length === 0) {
    return <>{text}</>;
  }

  let result: (string | ReactNode)[] = [text];

  highlights.forEach((phrase, i) => {
    const newResult: (string | ReactNode)[] = [];
    result.forEach((segment) => {
      if (typeof segment !== "string") {
        newResult.push(segment);
        return;
      }
      const parts = segment.split(phrase);
      parts.forEach((part, j) => {
        newResult.push(part);
        if (j < parts.length - 1) {
          newResult.push(
            <span key={`hl-${i}-${j}`} className="highlight-sweep">
              {phrase}
            </span>
          );
        }
      });
    });
    result = newResult;
  });

  return <>{result}</>;
}

function ComparisonCard({
  comparison,
  index,
}: {
  comparison: (typeof comparisons)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"default" | "expert">("default");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-16 last:mb-0"
    >
      {/* Context label */}
      <div
        className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "var(--grey-500)" }}
      >
        {comparison.context}
      </div>

      {/* Mobile tabs */}
      <div className="md:hidden flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab("default")}
          className={`flex-1 px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all ${
            activeTab === "default" ? "text-white" : ""
          }`}
          style={{
            background:
              activeTab === "default"
                ? "var(--grey-800)"
                : "var(--grey-900)",
            border: `1px solid ${
              activeTab === "default"
                ? "var(--border-medium)"
                : "var(--border-subtle)"
            }`,
            color:
              activeTab === "default"
                ? "var(--grey-200)"
                : "var(--grey-500)",
          }}
        >
          Default
        </button>
        <button
          onClick={() => setActiveTab("expert")}
          className={`flex-1 px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all`}
          style={{
            background:
              activeTab === "expert"
                ? "var(--grey-800)"
                : "var(--grey-900)",
            border: `1px solid ${
              activeTab === "expert"
                ? "rgba(0, 48, 135, 0.3)"
                : "var(--border-subtle)"
            }`,
            color:
              activeTab === "expert" ? "#4a8af5" : "var(--grey-500)",
          }}
        >
          Expert
        </button>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* DEFAULT panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={
            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
          }
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className={`rounded-2xl p-6 md:p-8 ${
            activeTab !== "default" ? "hidden md:block" : ""
          }`}
          style={{
            background: "var(--grey-850)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium mb-5"
            style={{
              background: "var(--grey-800)",
              color: "var(--grey-400)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            Default
          </span>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--grey-400)" }}
          >
            {comparison.defaultOutput}
          </p>
        </motion.div>

        {/* EXPERT panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={
            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
          }
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          className={`rounded-2xl p-6 md:p-8 ${
            activeTab !== "expert" ? "hidden md:block" : ""
          }`}
          style={{
            background: "var(--grey-850)",
            borderLeft: "3px solid #003087",
            border: "1px solid var(--border-subtle)",
            borderLeftColor: "#003087",
            borderLeftWidth: "3px",
          }}
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium mb-5"
            style={{
              background: "rgba(0, 48, 135, 0.15)",
              color: "#4a8af5",
              border: "1px solid rgba(0, 48, 135, 0.25)",
            }}
          >
            Expert
          </span>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--grey-200)" }}
          >
            <HighlightedText
              text={comparison.expertOutput}
              highlights={comparison.highlightPhrases}
              isActive={isInView}
            />
          </p>
        </motion.div>
      </div>

      {/* THE GAP panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
        className="mt-4 rounded-2xl p-6 md:p-8"
        style={{
          background: "rgba(0, 48, 135, 0.06)",
          border: "1px solid rgba(0, 48, 135, 0.12)",
        }}
      >
        <h4
          className="text-xs tracking-widest uppercase mb-4 font-medium"
          style={{ color: "#4a8af5" }}
        >
          The Gap
        </h4>
        <ul className="space-y-3">
          {comparison.gapExplanation.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#003087" }}
              />
              <span style={{ color: "var(--grey-300)" }}>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function ComparisonBlock() {
  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--grey-950)" }}
    >
      <div className="max-w-5xl mx-auto">
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
            The Gap
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Default vs. Expert
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg mb-6"
            style={{ color: "var(--grey-400)" }}
          >
            Ask any AI to analyze Coach K. It will summarize his books, repeat his
            talking points, and tell you what he already says about himself. That&apos;s
            the <span className="text-white font-medium">Default</span>{" "}output.
          </p>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            The <span style={{ color: "#4a8af5" }} className="font-medium">Expert</span>{" "}
            output comes from a Cognitive Fingerprint: patterns extracted from how he
            actually thinks, decides, and operates, most of which he&apos;s never
            articulated. Same question. Completely different depth.
          </p>
        </motion.div>

        {/* Comparisons */}
        {comparisons.map((comparison, index) => (
          <ComparisonCard
            key={comparison.id}
            comparison={comparison}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

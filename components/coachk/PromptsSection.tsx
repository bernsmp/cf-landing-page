"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { coachkPrompts, type CoachKPrompt } from "@/data/coachk-prompts";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
      style={{
        background: copied
          ? "rgba(16, 185, 129, 0.15)"
          : "linear-gradient(135deg, #003087 0%, #1a56b0 100%)",
        color: copied ? "#10b981" : "white",
        border: copied
          ? "1px solid rgba(16, 185, 129, 0.3)"
          : "1px solid transparent",
        boxShadow: copied ? "none" : "0 4px 20px rgba(0, 48, 135, 0.3)",
      }}
    >
      {copied ? "Copied" : "Copy Prompt"}
    </button>
  );
}

function PromptCard({
  prompt,
  index,
}: {
  prompt: CoachKPrompt;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

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
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-display text-xl md:text-2xl text-white">
            {prompt.title}
          </h3>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--grey-400)" }}
          >
            {prompt.subtitle}
          </p>
        </div>
        <span
          className="shrink-0 px-3 py-1 rounded-full text-[10px] font-mono"
          style={{
            background: "rgba(0, 48, 135, 0.1)",
            border: "1px solid rgba(0, 48, 135, 0.2)",
            color: "#4a8af5",
          }}
        >
          DRIVE {prompt.driveScore}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 mb-5">
        <span
          className="inline-block px-3 py-1 rounded-full text-[10px] font-mono"
          style={{
            background: "var(--grey-900)",
            color: "var(--grey-500)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {prompt.pattern}
        </span>
        <span
          className="inline-block px-3 py-1 rounded-full text-[10px] font-mono"
          style={{
            background: "var(--grey-900)",
            color: "var(--grey-500)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          For: {prompt.forWho}
        </span>
      </div>

      {/* Expand/collapse */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium transition-colors duration-200 mb-4"
          style={{ color: "#4a8af5" }}
        >
          {expanded ? "Hide prompt" : "View full prompt"}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="rounded-xl p-5 mb-4 max-h-80 overflow-y-auto"
              style={{
                background: "var(--grey-900)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <pre
                className="text-xs leading-relaxed whitespace-pre-wrap font-mono"
                style={{ color: "var(--grey-300)" }}
              >
                {prompt.prompt}
              </pre>
            </div>
            <CopyButton text={prompt.prompt} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function PromptsSection() {
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
            Apply the Patterns
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Use These Patterns Yourself
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            Three AI prompts built from Coach K&apos;s cognitive architecture. Paste
            into Claude or ChatGPT. Each one walks you through applying a
            specific pattern to your own team, career, or organization.
          </p>
        </motion.div>

        {/* Prompt cards */}
        <div className="space-y-6">
          {coachkPrompts.map((prompt, index) => (
            <PromptCard key={prompt.id} prompt={prompt} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

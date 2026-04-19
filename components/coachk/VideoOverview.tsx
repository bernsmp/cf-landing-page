"use client";

import { motion } from "framer-motion";

export default function VideoOverview() {
  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--grey-950)" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium mb-6"
            style={{
              background: "rgba(0, 48, 135, 0.08)",
              border: "1px solid rgba(0, 48, 135, 0.15)",
              color: "#4a8af5",
            }}
          >
            Video Overview
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            The Operating System Beneath the Brand
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            A 7-minute explainer of what 8 transcripts, 36,984 words, and 327
            behavioral indicators reveal about how Coach K actually leads.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid var(--border-subtle)",
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 80px -20px rgba(0, 48, 135, 0.15)",
          }}
        >
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full"
            poster=""
            style={{ background: "var(--grey-900)" }}
          >
            <source src="/coachk/overview.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-4 text-[11px] font-mono"
          style={{ color: "var(--grey-500)" }}
        >
          Generated from the Cognitive Fingerprint report using NotebookLM
        </motion.p>
      </div>
    </section>
  );
}

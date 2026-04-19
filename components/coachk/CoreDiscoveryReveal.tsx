"use client";

import { motion } from "framer-motion";
import { SpecialText } from "./SpecialText";

export default function CoreDiscoveryReveal() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ background: "var(--grey-950)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--grey-500)" }}
        >
          Core Discovery
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            className="font-display text-xl md:text-2xl leading-relaxed mb-12"
            style={{ color: "var(--grey-300)" }}
          >
            Coach K does not lead through instruction, strategy, or authority.
            He leads through a four-part cycle operating beneath his conscious
            awareness. Across 8 transcripts and 37,000 words, he demonstrates it
            constantly but has never named it.
          </p>
        </motion.div>

        {/* The cycle — each step decodes */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2">
          <SpecialText
            inView
            speed={25}
            delay={0.5}
            className="text-lg md:text-2xl text-white"
          >
            Feel
          </SpecialText>

          <span
            className="text-lg md:text-2xl hidden md:inline"
            style={{ color: "var(--grey-600)" }}
          >
            →
          </span>
          <span
            className="text-sm md:hidden"
            style={{ color: "var(--grey-600)" }}
          >
            ↓
          </span>

          <SpecialText
            inView
            speed={25}
            delay={1.2}
            className="text-lg md:text-2xl"
            // Engineer Feeling in blue
          >
            Engineer Feeling
          </SpecialText>

          <span
            className="text-lg md:text-2xl hidden md:inline"
            style={{ color: "var(--grey-600)" }}
          >
            →
          </span>
          <span
            className="text-sm md:hidden"
            style={{ color: "var(--grey-600)" }}
          >
            ↓
          </span>

          <SpecialText
            inView
            speed={25}
            delay={2.0}
            className="text-lg md:text-2xl text-white"
          >
            Fuse Identity
          </SpecialText>

          <span
            className="text-lg md:text-2xl hidden md:inline"
            style={{ color: "var(--grey-600)" }}
          >
            →
          </span>
          <span
            className="text-sm md:hidden"
            style={{ color: "var(--grey-600)" }}
          >
            ↓
          </span>

          <SpecialText
            inView
            speed={25}
            delay={2.8}
            className="text-lg md:text-2xl text-white"
          >
            Create Ownership
          </SpecialText>
        </div>

        {/* Subtle cycling indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 4 }}
          className="mt-10 text-xs font-mono"
          style={{ color: "var(--grey-600)" }}
        >
          The cycle that IS his cognitive operating system
        </motion.p>
      </div>
    </section>
  );
}

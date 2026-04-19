"use client";

import { motion } from "framer-motion";
import { vocabularyCategories } from "@/data/coach-k";

export default function VocabularySection() {
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
            Signature Vocabulary
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            The Words That Reveal the Mind
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            Word frequency across 58,000 words of transcript. The vocabulary an
            expert reaches for instinctively reveals what their brain
            prioritizes.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {vocabularyCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--grey-500)" }}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.words.map((wordItem, wordIndex) => (
                  <motion.div
                    key={wordItem.word}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: catIndex * 0.1 + wordIndex * 0.05,
                    }}
                    className="px-4 py-2 rounded-full flex items-center gap-2"
                    style={{
                      background: "var(--grey-900)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--grey-100)" }}
                    >
                      {wordItem.word}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--grey-500)" }}
                    >
                      {wordItem.count}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

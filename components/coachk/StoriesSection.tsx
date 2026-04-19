"use client";

import { motion } from "framer-motion";
import { stories } from "@/data/coach-k";

function StoryCard({
  story,
  index,
}: {
  story: (typeof stories)[0];
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
      }}
    >
      {/* Title */}
      <h3 className="font-display text-xl md:text-2xl text-white mb-3">
        {story.title}
      </h3>

      {/* Transcript badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {story.appearsIn.map((transcript) => (
          <span
            key={transcript}
            className="inline-block px-3 py-1 rounded-full text-[10px] font-mono"
            style={{
              background: "var(--grey-900)",
              color: "var(--grey-500)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {transcript}
          </span>
        ))}
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "var(--grey-300)" }}
      >
        {story.description}
      </p>

      {/* Video embed */}
      {story.video && (
        <div className="mb-5">
          <div
            className="relative w-full rounded-xl overflow-hidden"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${story.video.youtubeId}?start=${story.video.startSeconds}&rel=0`}
              title={story.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p
            className="mt-2 text-[11px] font-mono"
            style={{ color: "var(--grey-500)" }}
          >
            {story.video.label}
          </p>
        </div>
      )}

      {/* Quote */}
      <div
        className="rounded-xl p-5 mb-5"
        style={{
          background: "var(--grey-900)",
          borderLeft: "3px solid #003087",
        }}
      >
        <p
          className="font-display text-base italic"
          style={{ color: "var(--grey-200)" }}
        >
          &ldquo;{story.quote}&rdquo;
        </p>
      </div>

      {/* What it reveals */}
      <div>
        <h4
          className="text-xs tracking-widest uppercase mb-2"
          style={{ color: "#4a8af5" }}
        >
          What It Reveals
        </h4>
        <p className="text-sm" style={{ color: "var(--grey-400)" }}>
          {story.whatItReveals}
        </p>
      </div>
    </motion.div>
  );
}

export default function StoriesSection() {
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
            Recurring Stories
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            The Stories He Keeps Telling
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--grey-400)" }}
          >
            The stories an expert repeats across different contexts are not
            random. They are the evidence their subconscious uses to validate
            core beliefs.
          </p>
        </motion.div>

        {/* Story cards */}
        <div className="space-y-6">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

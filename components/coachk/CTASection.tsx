"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="py-24 md:py-32 px-6 relative overflow-hidden"
      style={{ background: "var(--grey-950)" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 48, 135, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Main copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
            Every expert has patterns they cannot see.
          </h2>
          <p
            className="text-lg md:text-xl mb-12 leading-relaxed"
            style={{ color: "var(--grey-400)" }}
          >
            Coach K coached for 42 years before anyone mapped his cognitive
            architecture. What would yours reveal?
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="btn-primary text-center text-sm tracking-wide"
          >
            Discover Your Cognitive Fingerprint
          </a>
          <a
            href="#"
            className="btn-secondary text-center text-sm tracking-wide"
          >
            Learn How It Works
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mt-24 pt-8 text-center"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <p
          className="text-xs"
          style={{ color: "var(--grey-600)" }}
        >
          Cognitive Fingerprint Analysis by{" "}
          <span style={{ color: "var(--grey-400)" }}>Max Bernstein</span>
        </p>
        <p
          className="text-xs mt-1"
          style={{ color: "var(--grey-700)" }}
        >
          Built with evidence. Not aspiration.
        </p>
      </motion.footer>
    </section>
  );
}

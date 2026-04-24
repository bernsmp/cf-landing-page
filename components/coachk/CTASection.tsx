"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LiquidMetalButton } from "./LiquidMetalButton";
import { FingerScanButton } from "@/components/ui/finger-scan-button";

const leadCaptureUrl =
  "https://www.notion.so/073a2898003445e1b26f913e7d0dbdd5?pvs=106";

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

      <div className="relative z-10 max-w-5xl mx-auto text-center">
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
            Coach K coached for 47 years before anyone mapped his cognitive
            architecture. What would yours reveal?
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6"
          >
            <FingerScanButton
              label="Discover Yours"
              href="https://cognitivefingerprint.ai/start"
            />
            <LiquidMetalButton
              label="How It Works"
              href="https://cognitivefingerprint.ai/method"
            />
          </motion.div>

          <motion.a
            href={leadCaptureUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group mx-auto block w-full max-w-[220px] rounded-lg border p-3 text-left transition duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              borderColor: "var(--border-subtle)",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.28)",
            }}
          >
            <span
              className="mb-3 block text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--grey-500)" }}
            >
              Scan To Submit Your Info
            </span>
            <span className="block overflow-hidden rounded-md bg-white p-2">
              <Image
                src="/coachk/cf-lead-capture-qr.png"
                alt="QR code for the Cognitive Fingerprint lead capture page"
                width={196}
                height={196}
                className="h-auto w-full"
              />
            </span>
            <span
              className="mt-3 block text-sm leading-relaxed"
              style={{ color: "var(--grey-400)" }}
            >
              The fingerprint points to the next step. Phone cameras know what
              to do.
            </span>
          </motion.a>
        </div>
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
          Cognitive Fingerprint™ Analysis by{" "}
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

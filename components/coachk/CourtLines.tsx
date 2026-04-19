"use client";

import { motion } from "framer-motion";

export default function CourtLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03]"
      >
        {/* Center circle */}
        <motion.circle
          cx="400"
          cy="300"
          r="60"
          stroke="#003087"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Half court line */}
        <motion.line
          x1="400"
          y1="50"
          x2="400"
          y2="550"
          stroke="#003087"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Three-point arc - left */}
        <motion.path
          d="M 50 150 C 50 150 200 300 50 450"
          stroke="#003087"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
        />

        {/* Three-point arc - right */}
        <motion.path
          d="M 750 150 C 750 150 600 300 750 450"
          stroke="#003087"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
        />

        {/* Free throw lane - left */}
        <motion.rect
          x="0"
          y="200"
          width="190"
          height="200"
          stroke="#003087"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
        />

        {/* Free throw circle - left */}
        <motion.circle
          cx="190"
          cy="300"
          r="60"
          stroke="#003087"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        />

        {/* Free throw lane - right */}
        <motion.rect
          x="610"
          y="200"
          width="190"
          height="200"
          stroke="#003087"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
        />

        {/* Free throw circle - right */}
        <motion.circle
          cx="610"
          cy="300"
          r="60"
          stroke="#003087"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        />

        {/* Court boundary */}
        <motion.rect
          x="10"
          y="50"
          width="780"
          height="500"
          stroke="#003087"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0 }}
        />
      </svg>
    </div>
  );
}

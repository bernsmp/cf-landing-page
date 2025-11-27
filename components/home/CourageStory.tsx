'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CourageStory = () => {
  return (
    <section className="relative pt-8 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-lg md:text-xl leading-relaxed text-[var(--grey-300)]"
        >
          {/* Opening */}
          <p className="text-white text-2xl md:text-3xl font-semibold">
            She'd been coaching for 30 years.
          </p>

          <p>
            When I read back what I found in her transcripts, her reaction stopped me cold.
          </p>

          {/* The emotional quote */}
          <p className="text-white italic text-xl md:text-2xl">
            "My heart is pounding. I have chills running up and down my arms right now. Literally."
          </p>

          {/* What was found */}
          <p>
            I'd identified things like her <span className="text-[var(--brand-gold)] font-semibold">"Courage Circulation System"</span>—how she harvests courage from one person's story and transplants it into another's challenge.
          </p>
          
          <p>
            Her <span className="text-[var(--brand-gold)] font-semibold">"Two-Word Diagnostic"</span> that assesses emotional state in seconds. Her <span className="text-[var(--brand-gold)] font-semibold">"Dignity Restoration Protocol."</span>
          </p>

          {/* The emotional turn */}
          <p className="text-white text-xl md:text-2xl font-semibold">
            She started crying.
          </p>

          {/* Final quote */}
          <p className="text-[var(--grey-300)] italic">
            "You just unleashed years of people asking 'so what is it?' and me saying 'you know, it's like chocolate ice cream. I can't explain what it tastes like.'"
          </p>

          {/* Closer */}
          <p className="pt-4">
            <span className="text-[var(--brand-gold)] font-semibold">Thirty years of expertise.</span> She'd never been able to articulate it before.
          </p>

          {/* Attribution */}
          <p className="pt-8 text-sm text-[var(--grey-500)]">
            — Cognitive Fingerprint™ extraction session
          </p>
        </motion.div>
      </div>
    </section>
  );
};


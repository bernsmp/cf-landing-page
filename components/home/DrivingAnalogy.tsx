'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Brain, Eye, EyeOff } from 'lucide-react';

export const DrivingAnalogy = () => {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--grey-900)]/50 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-700)] mb-8">
            <Car className="text-[var(--brand-gold)]" size={28} />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Remember learning to drive?
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-[var(--grey-400)] leading-relaxed">
              <p>
                Every action required conscious thought.
                <br />
                <span className="text-[var(--grey-500)]">Check mirror. Press gas. Turn wheel.</span>
              </p>
              
              <p className="text-[var(--grey-300)]">
                Now you navigate complex traffic while having deep conversations.
              </p>
            </div>

            {/* Visual divider */}
            <div className="flex items-center justify-center gap-4 py-8">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--grey-850)] border border-[var(--grey-700)]">
                <Eye size={20} className="text-[var(--grey-500)]" />
                <span className="text-sm text-[var(--grey-400)]">Conscious</span>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-[var(--grey-700)] to-[var(--brand-gold)]" />
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30">
                <EyeOff size={20} className="text-[var(--brand-gold)]" />
                <span className="text-sm text-[var(--brand-gold)]">Automatic</span>
              </div>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-[var(--grey-300)]">
                <span className="text-gold-gradient font-semibold">The same thing happened with your expertise.</span>
              </p>
              
              <p className="text-[var(--grey-400)]">
                What once took deliberate effort now happens automatically.
                <br />
                The patterns that make you exceptional have become <span className="text-white">invisible to you</span>.
              </p>
            </div>

            {/* Key insight box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--grey-850)] to-[var(--grey-900)] border border-[var(--grey-700)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-gold)] via-[var(--brand-gold-light)] to-transparent" />
              <div className="flex items-start gap-4">
                <Brain className="text-[var(--brand-gold)] flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <p className="text-lg text-[var(--grey-300)] leading-relaxed">
                    <span className="text-white font-semibold">Neuroscience proves this.</span> And you're leaving money on the table because of it.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


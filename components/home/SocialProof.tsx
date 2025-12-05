'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Max has been my secret weapon. It's allowed me to see patterns, blindspots, and frameworks I would have never spotted before.",
    name: "Mike David",
    title: "Entrepreneur",
  },
  {
    quote: "I could never articulate my methodology—until Max's extraction. Now I can finally explain what I do and who I do it for.",
    name: "Ivy Woolf-Turk",
    title: "CPC",
  },
  {
    quote: "Max taught me how to make the invisible visible. I now regularly extract frameworks from my own conversations.",
    name: "David Limiero",
    title: "Founder, Edens View Coaching",
  },
];

export const SocialProof = () => {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--grey-900)] via-[var(--grey-950)] to-[var(--grey-950)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--grey-850)] border border-[var(--border-subtle)] text-[var(--grey-400)] text-sm font-semibold tracking-wider mb-6">
            FROM EXPERTS WHO'VE DONE IT
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            What happens when <span className="text-gold-gradient">patterns become visible</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-[var(--grey-850)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all duration-300">
                {/* Quote icon */}
                <Quote className="text-[var(--brand-gold)] opacity-30 mb-4" size={32} />
                
                {/* Quote text */}
                <p className="text-[var(--grey-300)] text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gold)] to-[var(--brand-gold-dark)] flex items-center justify-center text-[var(--grey-950)] font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-[var(--grey-500)] text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


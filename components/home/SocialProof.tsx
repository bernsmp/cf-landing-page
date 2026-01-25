'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Play, Pause } from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

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

        {/* Featured Video Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          {/* Video container */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--brand-gold)]/20 bg-[var(--grey-900)] cursor-pointer group mb-8"
            onClick={handlePlayClick}
            onMouseEnter={() => isPlaying && setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video element */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={handleVideoEnd}
              playsInline
              preload="metadata"
            >
              <source src="/videos/jessica-testimonial.mp4" type="video/mp4" />
            </video>

            {/* Play button overlay - shows when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--brand-gold)] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-full bg-[var(--brand-gold)]/20 border border-[var(--brand-gold)]/50 flex items-center justify-center group-hover:bg-[var(--brand-gold)]/30 group-hover:scale-110 transition-all duration-300">
                    <Play size={32} className="text-[var(--brand-gold)] fill-current ml-1" />
                  </div>
                </div>
              </div>
            )}

            {/* Pause overlay - shows on hover when playing */}
            {isPlaying && showControls && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                  <Pause size={28} className="text-white" />
                </div>
              </div>
            )}

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[var(--brand-gold)]/10 to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[var(--brand-gold)]/10 to-transparent pointer-events-none z-20" />
          </div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Quote className="text-[var(--brand-gold)] opacity-40 mx-auto mb-4" size={28} />
            <p className="text-[var(--grey-200)] text-xl md:text-2xl leading-relaxed mb-4 italic max-w-3xl mx-auto">
              "I spent $7,000 on a 9-week course... You and I talking for one hour, I got more ideas about how to package something to sell than I did over that entire course."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gold)] to-[var(--brand-gold-dark)] flex items-center justify-center text-[var(--grey-950)] font-bold">
                J
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Jessica Bruno</p>
                <p className="text-[var(--grey-500)] text-sm">Blogger & Multi-Gen Living Expert</p>
              </div>
            </div>
          </motion.div>
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


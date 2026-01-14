'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';

export const VideoSection = () => {
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
    <section id="video" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--border-subtle)] text-[var(--brand-gold)] text-xs font-semibold tracking-widest mb-6">
            SEE AN EXTRACTION
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Watch what becomes visible
          </h2>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Video wrapper */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--brand-gold)]/20 bg-[var(--grey-900)] cursor-pointer group"
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
              <source src="/videos/extraction-walkthrough.mp4" type="video/mp4" />
            </video>

            {/* Thumbnail overlay - shows when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 z-10">
                {/* Thumbnail image */}
                <Image
                  src="/images/coaches-eye/video_thumbnail.png"
                  alt="Extraction Walkthrough"
                  fill
                  className="object-cover"
                />

                {/* Gradient overlay for better play button visibility */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-[var(--brand-gold)] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-full bg-[var(--brand-gold)]/20 border border-[var(--brand-gold)]/50 flex items-center justify-center group-hover:bg-[var(--brand-gold)]/30 group-hover:scale-110 transition-all duration-300">
                      <Play size={32} className="text-[var(--brand-gold)] fill-current ml-1" />
                    </div>
                  </div>
                  <span className="text-white/80 text-sm font-medium">Click to play</span>
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

          {/* Shadow beneath */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-[var(--brand-gold)]/5 blur-2xl rounded-full" />
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[var(--grey-500)] text-sm mt-8"
        >
          A real Cognitive Fingerprint extraction walkthrough
        </motion.p>
      </div>
    </section>
  );
};

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
    <section id="video" className="relative mt-12 scroll-mt-24">
      {/* Tabbed transition divider */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end gap-2">
          <div className="z-20 -rotate-[1deg] translate-y-px rounded-t-2xl bg-[var(--brand-gold)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-[var(--grey-950)] shadow-lg">
            The Method
          </div>
          <div className="-rotate-[2deg] rounded-t-2xl bg-[var(--grey-800)] px-8 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--grey-100)]/30">
            Transcripts
          </div>
        </div>
      </div>

      <div className="serrated-edge relative z-20 h-4 w-full bg-[var(--grey-850)]" />

      <div className="relative bg-[var(--grey-850)] px-6 pt-20 pb-28 lg:px-8 lg:pt-24 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] grid-pattern" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-gold)]">
              Fig. 01 &bull; See an Extraction
            </p>
            <h2 className="mt-7 font-display text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">
              Watch what becomes <i>visible</i>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[var(--grey-500)]">
              Click to play
            </p>
            <p className="mt-7 text-lg leading-relaxed text-[var(--grey-400)]">
              A real Cognitive Fingerprint™ extraction walkthrough
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <button
              type="button"
              aria-label={isPlaying ? 'Pause extraction walkthrough' : 'Play extraction walkthrough'}
              className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-3xl border border-white/[0.10] bg-[var(--grey-950)] text-left shadow-inner shadow-black/70"
              onClick={handlePlayClick}
              onMouseEnter={() => isPlaying && setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                onEnded={handleVideoEnd}
                playsInline
                preload="metadata"
              >
                <source src="/videos/extraction-walkthrough.mp4" type="video/mp4" />
              </video>

              {!isPlaying && (
                <div className="absolute inset-0 z-10 bg-[var(--grey-950)]">
                  <div className="absolute left-[7%] top-[14%] h-[68%] w-[46%] rotate-[-7deg] rounded-xl border border-white/[0.11] bg-[#121212] p-5 shadow-2xl shadow-black/70">
                    <div className="border-b border-white/[0.08] pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--grey-500)]">
                      Transcript
                    </div>
                    <div className="mt-7 space-y-4">
                      <div className="h-px w-full bg-white/[0.14]" />
                      <div className="h-px w-3/4 bg-white/[0.10]" />
                      <div className="h-px w-11/12 bg-white/[0.12]" />
                      <div className="h-px w-2/3 bg-white/[0.10]" />
                      <div className="h-px w-5/6 bg-white/[0.12]" />
                    </div>
                  </div>

                  <div className="absolute right-[7%] top-[18%] h-[60%] w-[45%] rotate-[4deg] rounded-xl border border-[var(--brand-gold)]/28 bg-[#090909] p-6 shadow-2xl shadow-black/80">
                    <div className="flex items-start justify-between gap-5">
                      <Image
                        src="/logo/cf-t1.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                        Extract
                      </span>
                    </div>
                    <div className="mt-12 border-l border-[var(--brand-gold)]/36 pl-4">
                      <div className="h-px w-full bg-white/[0.15]" />
                      <div className="mt-4 h-px w-3/4 bg-white/[0.11]" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/[0.22] bg-black/45 text-white transition-all duration-200 group-hover:scale-110 group-hover:border-[var(--brand-gold)] group-hover:text-[var(--brand-gold)]">
                      <Play size={30} className="ml-1 fill-current" />
                    </div>
                  </div>
                </div>
              )}

              {isPlaying && showControls && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.18] bg-black/60">
                    <Pause size={26} className="text-white" />
                  </div>
                </div>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';

const featuredTestimonials = [
  {
    name: "Jessica Bruno",
    title: "Blogger & Multi-Gen Living Expert",
    initial: "J",
    artifact: "Artifact 01",
    videoSrc: "/videos/jessica-testimonial.mp4",
    posterSrc: "/images/testimonials/jessica-testimonial-poster.jpg",
    quote:
      "I spent $7,000 on a 9-week course... You and I talking for one hour, I got more ideas about how to package something to sell than I did over that entire course.",
    frameClassName: "aspect-video",
    videoClassName: "object-cover",
  },
  {
    name: "Deonne Nicole",
    title: "Creator, Weird Apps",
    initial: "D",
    artifact: "Artifact 02",
    videoSrc: "/videos/deonne-testimonial.mp4",
    posterSrc: "/images/testimonials/deonne-testimonial-poster.jpg",
    quote:
      "I did not know the depth of what was possible, how to take what was in my brain and put it out into the world fast and make it mine.",
    frameClassName: "mx-auto aspect-[9/16] max-h-[560px] w-full max-w-[320px]",
    videoClassName: "object-cover",
  },
];

const testimonials = [
  {
    quote: "Max has been my secret weapon. It's allowed me to see patterns, blindspots, and frameworks I would have never spotted before.",
    name: "Mike David",
    title: "Entrepreneur",
    artifact: "Artifact 03",
  },
  {
    quote: "I could never articulate my methodology—until Max's extraction. Now I can finally explain what I do and who I do it for.",
    name: "Ivy Woolf-Turk",
    title: "CPC",
    artifact: "Artifact 04",
  },
  {
    quote: "Max taught me how to make the invisible visible. I now regularly extract frameworks from my own conversations.",
    name: "David Limiero",
    title: "Founder, Edens View Coaching",
    artifact: "Artifact 05",
  },
];

function ArtifactChip({ label }: { label: string }) {
  return (
    <div className="absolute left-5 top-5 z-20 flex items-center gap-3 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-xl">
      <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">{label}</span>
      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-gold)]" />
    </div>
  );
}

function FeaturedVideoTestimonial({
  testimonial,
  index,
}: {
  testimonial: (typeof featuredTestimonials)[number];
  index: number;
}) {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      className={`h-full ${index === 1 ? 'lg:translate-y-12' : ''}`}
    >
      <div className="relative flex h-full flex-col rounded-3xl border border-white/[0.05] bg-[#0b0b0b] p-4 shadow-2xl shadow-black/60 md:p-5">
        <div
          className={`group relative mb-7 cursor-pointer overflow-hidden rounded-2xl border border-white/[0.12] bg-[var(--grey-950)] ${testimonial.frameClassName}`}
          onClick={handlePlayClick}
          onMouseEnter={() => isPlaying && setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <ArtifactChip label={testimonial.artifact} />

          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full ${testimonial.videoClassName}`}
            onEnded={handleVideoEnd}
            playsInline
            preload="metadata"
            poster={testimonial.posterSrc}
          >
            <source src={testimonial.videoSrc} type="video/mp4" />
          </video>

          {!isPlaying && !testimonial.posterSrc && (
            <div className="absolute inset-0 bg-[var(--grey-950)] p-8">
              <div className="relative h-full rounded-xl border border-white/[0.08] bg-[#0b0b0b] p-6">
                <div className="flex items-start justify-between gap-6">
                  <Image
                    src="/logo/cf-t1.png"
                    alt="Cognitive Fingerprint"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="mt-12 space-y-4">
                  <div className="h-px w-full bg-white/[0.12]" />
                  <div className="h-px w-4/5 bg-white/[0.10]" />
                  <div className="h-px w-11/12 bg-white/[0.12]" />
                </div>
              </div>
            </div>
          )}

          {!isPlaying && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/25">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.24] bg-[var(--grey-950)]/85 text-white transition-all duration-200 group-hover:scale-110 group-hover:border-[var(--brand-gold)] group-hover:text-[var(--brand-gold)]">
                <Play size={28} className="ml-1 fill-current" />
              </div>
            </div>
          )}

          {isPlaying && showControls && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.18] bg-black/60">
                <Pause size={28} className="text-white" />
              </div>
            </div>
          )}
        </div>

        <div className="relative z-10 flex flex-1 flex-col px-2 pb-2">
          <p className="mb-6 max-w-3xl text-lg italic leading-relaxed text-[var(--grey-200)] md:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-auto border-t border-white/[0.08] pt-5">
            <h4 className="font-display text-2xl font-light italic text-white">{testimonial.name}</h4>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-500)]">
              {testimonial.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const SocialProof = () => {
  return (
    <section id="proof" className="relative overflow-hidden bg-[var(--grey-950)] px-6 py-32 scroll-mt-24 lg:px-8 lg:py-40">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--brand-gold)]">
            Evidence &amp; Artifacts &bull; From Experts Who&apos;ve Done It
          </p>
          <h2 className="font-display text-5xl font-light leading-tight tracking-tight text-white md:text-7xl">
            What happens when
            <br />
            patterns become <i>visible</i>
          </h2>
        </motion.div>

        <div className="mb-24 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {featuredTestimonials.map((testimonial, index) => (
            <FeaturedVideoTestimonial
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 1 ? 'lg:translate-y-10' : ''}
            >
              <div className="flex h-full flex-col rounded-3xl border border-white/[0.05] bg-[var(--grey-800)] p-8 transition-colors duration-300 hover:border-white/[0.14]">
                <p className="mb-8 font-mono text-[10px] uppercase tracking-widest text-[var(--grey-500)]">
                  {testimonial.artifact}
                </p>
                <p className="mb-8 text-lg italic leading-relaxed text-[var(--grey-300)]">
                  "{testimonial.quote}"
                </p>

                <div className="mt-auto border-t border-white/[0.08] pt-5">
                  <h4 className="font-display text-2xl font-light italic text-white">{testimonial.name}</h4>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--grey-500)]">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, Quote, Sparkles, Heart } from 'lucide-react';

const featuredExtraction = {
  quote: "My heart is pounding. I have chills running up and down my arms right now.",
  story: `She'd been coaching for thirty years. Everyone knew she was good. Her clients got breakthrough results. But when anyone asked "what's your methodology?"—she'd freeze.

"It's like chocolate ice cream. I can't explain what it tastes like."

Through the Cognitive Fingerprint™ extraction process, we identified:`,
  discoveries: [
    {
      name: 'HER "COURAGE CIRCULATION SYSTEM"',
      description: 'How she harvests courage from one person\'s story and explicitly transplants it into another\'s challenge.',
    },
    {
      name: 'HER "TWO-WORD DIAGNOSTIC"',
      description: 'An assessment pattern that reads emotional state in seconds—she didn\'t know she was doing it.',
    },
    {
      name: 'HER "DIGNITY RESTORATION PROTOCOL"',
      description: 'The sequence she uses when clients feel shame about their situation.',
    },
  ],
  conclusion: `Thirty years of expertise. Named and documented in one session.

She started crying.

"You just unleashed years of people asking 'so what is it?'"

That's what becomes possible when someone can finally see what you've been doing all along.`,
};

const testimonials = [
  {
    quote: `Since Max and I first connected, I've been having conversations with Claude almost daily. The shift has been remarkable—AI went from being this generic disappointment to being a regular thinking partner.

I recently spent four days strategizing our national expansion with Claude—going from one region to nine regions. The result? Clear timelines and branded job descriptions.

But Max's cognitive fingerprint approach is where things really clicked. I continue to do the cognitive fingerprint work regularly—taking transcripts, identifying frameworks, extracting patterns.

After a conversation where I realize I shared something significant, I use Max's prompts to turn that spoken content into near-final drafts. What I spoke in the moment becomes written content in about 20% of the time.

Max didn't just show me how to use AI. He taught me how to make the invisible visible—things I didn't even know that I was doing or saying.

I come out smarter and richer every time we connect.`,
    name: 'David Limiero',
    title: 'Founder, Edens View Coaching and Consulting',
    featured: true,
  },
  {
    quote: `Max and the Cognitive Fingerprint have been my secret weapon. It's allowed me to see patterns, blindspots, and frameworks I would have never spotted before. His system has allowed me to add massive value to my businesses and gotten me into deals I wouldn't have otherwise had access to.`,
    name: 'Mike David',
    title: 'Entrepreneur',
  },
  {
    quote: `I could never articulate my 'Liberated Life' methodology—until Max's Cognitive Fingerprint extraction. In the blink of an eye, he extrapolated all the systems and gave me a framework to explain the what, where, when, how, and why. Now I can finally explain what I do and who I do it for.`,
    name: 'Ivy Woolf-Turk',
    title: 'CPC',
  },
  {
    quote: `Max has been instrumental in helping me unlock my expertise through his fingerprint extraction course. His guidance and the use of AI have made it easy to create valuable content from my intellectual property.`,
    name: 'Max Wallace',
    title: 'Expert',
  },
];


export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-gold)] opacity-[0.03] blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-[var(--brand-gold)] text-sm font-semibold mb-8"
            >
              RESULTS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              What happens when expertise
              <br />
              <span className="text-gold-gradient">becomes visible</span>
            </motion.h1>
          </div>
        </section>

        {/* Featured Transformation */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 text-[var(--brand-gold)] text-sm font-semibold">
                <Sparkles size={14} />
                THE TRANSFORMATION
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--grey-850)] to-[var(--grey-900)] border border-[var(--grey-700)] relative overflow-hidden"
            >
              {/* Gold accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--brand-gold)] to-transparent" />

              {/* Opening quote */}
              <blockquote className="text-2xl md:text-3xl font-display italic text-white mb-8 relative">
                <Quote className="absolute -top-2 -left-2 text-[var(--brand-gold)] opacity-30" size={48} />
                <span className="relative z-10">{featuredExtraction.quote}</span>
              </blockquote>

              {/* Story */}
              <div className="space-y-6 text-lg text-[var(--grey-300)] whitespace-pre-line mb-8">
                {featuredExtraction.story}
              </div>

              {/* Discoveries */}
              <div className="space-y-4 mb-8">
                {featuredExtraction.discoveries.map((discovery, index) => (
                  <motion.div
                    key={discovery.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-[var(--grey-800)]/50 border-l-4 border-[var(--brand-gold)]"
                  >
                    <p className="text-[var(--brand-gold)] font-semibold mb-1">→ {discovery.name}</p>
                    <p className="text-[var(--grey-400)]">{discovery.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="space-y-6 text-lg text-[var(--grey-300)] whitespace-pre-line">
                {featuredExtraction.conclusion}
              </div>
            </motion.div>
          </div>
        </section>


        {/* Testimonials */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                In Their Words
              </h2>
            </motion.div>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-2xl border ${testimonial.featured ? 'bg-gradient-to-br from-[var(--brand-gold)]/10 to-[var(--grey-900)] border-[var(--brand-gold)]/30' : 'bg-[var(--grey-850)] border-[var(--grey-800)]'}`}
                >
                  <Quote className={`mb-4 ${testimonial.featured ? 'text-[var(--brand-gold)]' : 'text-[var(--grey-600)]'}`} size={32} />
                  
                  <p className="text-[var(--grey-300)] text-lg leading-relaxed whitespace-pre-line mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${testimonial.featured ? 'bg-[var(--brand-gold)] text-[var(--grey-950)]' : 'bg-[var(--grey-700)] text-white'}`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-[var(--grey-500)] text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-8 bg-[var(--grey-900)]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Heart className="text-[var(--brand-gold)] mx-auto mb-6" size={48} />
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to see your own patterns?
              </h2>
              
              <p className="text-lg text-[var(--grey-400)] mb-8">
                Start with the Invisibility Test to discover how much of your expertise is hidden.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-all duration-300"
                >
                  Take the Invisibility Test
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/start"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[var(--grey-700)] text-white font-semibold rounded-xl hover:border-[var(--grey-500)] transition-all duration-300"
                >
                  Explore Options
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


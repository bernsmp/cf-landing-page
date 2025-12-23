'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { prompts, workflows, categories, getFreePrompts, getPremiumPrompts } from '@/data/prompts';
import { Search, Lock, Copy, Sparkles, ArrowRight, Filter, Zap } from 'lucide-react';

export default function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showPremium, setShowPremium] = useState(false);
  const [premiumPassword, setPremiumPassword] = useState('');
  const [premiumUnlocked, setPremiumUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Check localStorage on mount for existing unlock
  useEffect(() => {
    const stored = localStorage.getItem('cf-premium-unlocked');
    if (stored === 'true') {
      setPremiumUnlocked(true);
    }
  }, []);

  const freePrompts = getFreePrompts();
  const premiumPrompts = getPremiumPrompts();

  const filteredFreePrompts = freePrompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || prompt.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredPremiumPrompts = premiumPrompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || prompt.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const [isVerifying, setIsVerifying] = useState(false);

  const handleUnlockPremium = async () => {
    setIsVerifying(true);
    try {
      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: premiumPassword }),
      });

      if (response.ok) {
        setPremiumUnlocked(true);
        setPasswordError(false);
        setShowPremium(false);
        localStorage.setItem('cf-premium-unlocked', 'true');
      } else {
        setPasswordError(true);
      }
    } catch {
      setPasswordError(true);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-[var(--brand-gold)] text-sm font-semibold mb-6"
            >
              <Zap size={14} />
              PROMPT LIBRARY
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Your Expertise Has Been <span className="text-gold-gradient">Avoiding You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--grey-400)] max-w-2xl mx-auto"
            >
              You've tried to document your methodology before. The file is probably in a folder called "Old Stuff" now. These prompts ask the questions you'd never think to ask yourself.
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="px-6 lg:px-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--grey-500)]" size={18} />
                <input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-xl text-white placeholder:text-[var(--grey-500)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                />
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    !selectedCategory
                      ? 'bg-[var(--brand-gold)] text-[var(--grey-950)]'
                      : 'bg-[var(--grey-800)] text-[var(--grey-300)] hover:bg-[var(--grey-700)]'
                  }`}
                >
                  All
                </button>
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[var(--brand-gold)] text-[var(--grey-950)]'
                        : 'bg-[var(--grey-800)] text-[var(--grey-300)] hover:bg-[var(--grey-700)]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Free Prompts */}
        <section className="px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Start Here
            </h2>
            <p className="text-[var(--grey-400)] mb-8 max-w-2xl">
              Pick one. Run it on a recent client conversation. You'll find the decision patterns, unnamed frameworks, and "just how I work" moves that clients actually pay for.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 prompt-grid">
              {filteredFreePrompts.map((prompt, index) => (
                <motion.div
                  key={prompt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="prompt-card"
                >
                  <Link href={`/prompts/${prompt.slug}`} className="block h-full">
                    <div className="h-full rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-all duration-300 group overflow-hidden">
                      {/* Thumbnail */}
                      {prompt.thumbnail && (
                        <div className="relative w-full h-40 overflow-hidden">
                          <Image
                            src={prompt.thumbnail}
                            alt={prompt.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="p-6">
                        {/* Category badge */}
                        <span className="inline-block px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs font-semibold uppercase tracking-wider mb-3">
                          {prompt.category}
                        </span>

                        {/* Title */}
                        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors">
                          {prompt.title}
                        </h3>

                        {/* Description - tightened to single line */}
                        <p className="text-[var(--grey-400)] text-sm line-clamp-1">
                          {prompt.description}
                        </p>

                        {/* Footer - simplified with hover arrow only */}
                        <div className="flex items-center justify-end pt-4">
                          <ArrowRight
                            size={16}
                            className="text-[var(--grey-600)] group-hover:text-[var(--brand-gold)] group-hover:translate-x-1 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Section */}
        <section className="px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[var(--brand-gold)]/10 to-[var(--grey-900)] border border-[var(--brand-gold)]/30 mb-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="text-[var(--brand-gold)]" size={20} />
                    <h2 className="font-display text-2xl font-bold text-white">
                      Subscriber Prompts
                    </h2>
                  </div>

                  <p className="text-[var(--grey-300)] mb-6">
                    Walk away with something you can use immediately:
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-[var(--grey-300)]">
                      <span className="text-[var(--brand-gold)] mt-1">→</span>
                      <span><strong className="text-white">Language that justifies your pricing</strong> in the first sales call</span>
                    </li>
                    <li className="flex items-start gap-3 text-[var(--grey-300)]">
                      <span className="text-[var(--brand-gold)] mt-1">→</span>
                      <span><strong className="text-white">Your 3-5 word philosophy</strong> (the thing you'd put on a stadium sign)</span>
                    </li>
                    <li className="flex items-start gap-3 text-[var(--grey-300)]">
                      <span className="text-[var(--brand-gold)] mt-1">→</span>
                      <span><strong className="text-white">A month of content</strong> from a single client conversation</span>
                    </li>
                    <li className="flex items-start gap-3 text-[var(--grey-300)]">
                      <span className="text-[var(--brand-gold)] mt-1">→</span>
                      <span><strong className="text-white">The full map</strong> of what you do that others can't copy</span>
                    </li>
                  </ul>

                  <p className="text-[var(--grey-500)] text-sm">
                    Exclusive to Signal {'>'} Noise paid subscribers.
                  </p>
                </div>

                <div className="flex flex-col justify-center lg:pl-8 lg:border-l lg:border-[var(--grey-800)]">
                  {!premiumUnlocked ? (
                    <button
                      onClick={() => setShowPremium(true)}
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors"
                    >
                      <Lock size={18} />
                      Unlock These Prompts
                    </button>
                  ) : (
                    <span className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--success)]/20 text-[var(--success)] rounded-lg text-sm font-medium">
                      ✓ Unlocked
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Password Modal */}
            {showPremium && !premiumUnlocked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
                onClick={() => setShowPremium(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full max-w-md p-8 rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Enter Subscriber Password
                  </h3>
                  <p className="text-[var(--grey-400)] text-sm mb-6">
                    Find your password in the Signal {'>'} Noise paid community.
                  </p>

                  <input
                    type="password"
                    placeholder="Password"
                    value={premiumPassword}
                    onChange={(e) => {
                      setPremiumPassword(e.target.value);
                      setPasswordError(false);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleUnlockPremium()}
                    className={`w-full px-4 py-3 bg-[var(--grey-850)] border rounded-xl text-white placeholder:text-[var(--grey-500)] focus:outline-none transition-colors mb-4 ${
                      passwordError ? 'border-red-500' : 'border-[var(--grey-700)] focus:border-[var(--brand-gold)]'
                    }`}
                  />

                  {passwordError && (
                    <p className="text-red-400 text-sm mb-4">
                      Incorrect password. Check the Signal {'>'} Noise community.
                    </p>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowPremium(false)}
                      className="flex-1 px-4 py-3 bg-[var(--grey-800)] text-white rounded-xl hover:bg-[var(--grey-700)] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUnlockPremium}
                      disabled={isVerifying}
                      className="flex-1 px-4 py-3 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors disabled:opacity-50"
                    >
                      {isVerifying ? 'Verifying...' : 'Unlock'}
                    </button>
                  </div>

                  <p className="text-center text-[var(--grey-500)] text-xs mt-6">
                    Not a subscriber?{' '}
                    <a
                      href="https://irreplaceablepositioning.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--brand-gold)] hover:underline"
                    >
                      Join Signal {'>'} Noise
                    </a>
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* Premium Prompts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 prompt-grid">
              {filteredPremiumPrompts.map((prompt, index) => (
                <motion.div
                  key={prompt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative prompt-card"
                >
                  {premiumUnlocked ? (
                    <Link href={`/prompts/${prompt.slug}`} className="block h-full">
                      <div className="h-full rounded-2xl bg-[var(--grey-850)] border border-[var(--brand-gold)]/30 hover:border-[var(--brand-gold)] transition-all duration-300 group overflow-hidden">
                        {/* Thumbnail */}
                        {prompt.thumbnail && (
                          <div className="relative w-full h-40 overflow-hidden">
                            <Image
                              src={prompt.thumbnail}
                              alt={prompt.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <div className="p-6">
                          {/* Premium badge */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-wider">
                              {prompt.category}
                            </span>
                            <Sparkles size={16} className="text-[var(--brand-gold)]" />
                          </div>

                          <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors">
                            {prompt.title}
                          </h3>

                          <p className="text-[var(--grey-400)] text-sm line-clamp-1">
                            {prompt.description}
                          </p>

                          {/* Footer - simplified */}
                          <div className="flex items-center justify-end pt-4">
                            <ArrowRight
                              size={16}
                              className="text-[var(--grey-600)] group-hover:text-[var(--brand-gold)] group-hover:translate-x-1 transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setShowPremium(true)}
                      className="block h-full w-full text-left"
                    >
                      <div className="h-full rounded-2xl bg-[var(--grey-850)] border border-[var(--brand-gold)]/30 hover:border-[var(--brand-gold)] transition-all duration-300 group cursor-pointer overflow-hidden">
                        {/* Thumbnail */}
                        {prompt.thumbnail && (
                          <div className="relative w-full h-40 overflow-hidden">
                            <Image
                              src={prompt.thumbnail}
                              alt={prompt.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Lock overlay on thumbnail */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <Lock size={24} className="text-[var(--brand-gold)]" />
                            </div>
                          </div>
                        )}

                        <div className="p-6">
                          {/* Premium badge */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-wider">
                              {prompt.category}
                            </span>
                            <Lock size={16} className="text-[var(--brand-gold)]" />
                          </div>

                          <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors">
                            {prompt.title}
                          </h3>

                          <p className="text-[var(--grey-400)] text-sm line-clamp-1">
                            {prompt.description}
                          </p>

                          {/* Footer - simplified */}
                          <div className="flex items-center justify-end pt-4">
                            <Lock
                              size={14}
                              className="text-[var(--grey-600)] group-hover:text-[var(--brand-gold)] transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Workflows Section */}
            {workflows.length > 0 && (
              <div className="mt-16">
                <h2 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="text-[var(--brand-gold)]" />
                  Workflow Packs
                </h2>
                <p className="text-[var(--grey-400)] mb-8">
                  Multi-step processes for deeper extraction. Each step's output feeds into the next.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 prompt-grid">
                  {workflows.map((workflow, index) => (
                    <motion.div
                      key={workflow.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="prompt-card"
                    >
                      {premiumUnlocked ? (
                        <Link href={`/prompts/workflow/${workflow.slug}`} className="block h-full">
                          <div className="h-full rounded-2xl bg-[var(--grey-850)] border border-[var(--brand-gold)]/30 hover:border-[var(--brand-gold)] transition-all duration-300 group overflow-hidden">
                            {/* Thumbnail */}
                            {workflow.thumbnail && (
                              <div className="relative w-full h-40 overflow-hidden">
                                <Image
                                  src={workflow.thumbnail}
                                  alt={workflow.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}

                            <div className="p-6">
                              {/* Badges */}
                              <div className="flex items-center gap-2 mb-3">
                                <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-wider">
                                  {workflow.category}
                                </span>
                                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                                  {workflow.steps.length} steps
                                </span>
                              </div>

                              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors">
                                {workflow.title}
                              </h3>

                              <p className="text-[var(--grey-400)] text-sm line-clamp-1">
                                {workflow.description}
                              </p>

                              {/* Footer - simplified but keep time for workflows */}
                              <div className="flex items-center justify-between pt-4">
                                <span className="text-xs text-[var(--grey-500)]">
                                  {workflow.estimatedTime}
                                </span>
                                <ArrowRight
                                  size={16}
                                  className="text-[var(--grey-600)] group-hover:text-[var(--brand-gold)] group-hover:translate-x-1 transition-all"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <button
                          onClick={() => setShowPremium(true)}
                          className="block h-full w-full text-left"
                        >
                          <div className="h-full rounded-2xl bg-[var(--grey-850)] border border-[var(--brand-gold)]/30 hover:border-[var(--brand-gold)] transition-all duration-300 group cursor-pointer overflow-hidden">
                            {/* Thumbnail with lock overlay */}
                            {workflow.thumbnail && (
                              <div className="relative w-full h-40 overflow-hidden">
                                <Image
                                  src={workflow.thumbnail}
                                  alt={workflow.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                  <Lock size={24} className="text-[var(--brand-gold)]" />
                                </div>
                              </div>
                            )}

                            <div className="p-6">
                              {/* Badges */}
                              <div className="flex items-center gap-2 mb-3">
                                <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-wider">
                                  {workflow.category}
                                </span>
                                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                                  {workflow.steps.length} steps
                                </span>
                                <Lock size={14} className="text-[var(--brand-gold)]" />
                              </div>

                              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[var(--brand-gold)] transition-colors">
                                {workflow.title}
                              </h3>

                              <p className="text-[var(--grey-400)] text-sm line-clamp-1">
                                {workflow.description}
                              </p>

                              {/* Footer - simplified */}
                              <div className="flex items-center justify-between pt-4">
                                <span className="text-xs text-[var(--grey-500)]">
                                  {workflow.estimatedTime}
                                </span>
                                <Lock
                                  size={14}
                                  className="text-[var(--grey-600)] group-hover:text-[var(--brand-gold)] transition-all"
                                />
                              </div>
                            </div>
                          </div>
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


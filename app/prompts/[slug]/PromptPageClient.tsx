'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Prompt, getRelatedPrompts } from '@/data/prompts';
import { Copy, Check, ExternalLink, ArrowLeft, Lock, ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'cf-premium-unlocked';

// Claude logo SVG component
const ClaudeLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

interface PromptPageClientProps {
  prompt: Prompt;
}

export default function PromptPageClient({ prompt }: PromptPageClientProps) {
  const relatedPrompts = getRelatedPrompts(prompt.slug, 3);

  const [copied, setCopied] = useState(false);
  const [premiumUnlocked, setPremiumUnlocked] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setPremiumUnlocked(true);
    }
  }, []);

  // Check if premium and not unlocked
  const isLocked = prompt.isPremium && !premiumUnlocked;

  const handleCopy = async () => {
    if (isLocked) {
      setShowPasswordModal(true);
      return;
    }

    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenInClaude = () => {
    if (isLocked) {
      setShowPasswordModal(true);
      return;
    }

    // Claude's URL scheme for opening with a prompt
    const encodedPrompt = encodeURIComponent(prompt.prompt);
    window.open(`https://claude.ai/new?q=${encodedPrompt}`, '_blank');
  };

  const handleUnlock = async () => {
    setIsVerifying(true);
    try {
      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setPremiumUnlocked(true);
        localStorage.setItem(STORAGE_KEY, 'true');
        setShowPasswordModal(false);
        setPasswordError(false);
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

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href="/prompts"
            className="inline-flex items-center gap-2 text-[var(--grey-400)] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to prompts
          </Link>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content - left column */}
            <div className="flex-1 min-w-0">
              {/* Header with badges (mobile: show all, desktop: hide difficulty) */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs font-semibold uppercase tracking-wider">
                    {prompt.category}
                  </span>
                  {/* Difficulty badge - visible on mobile only */}
                  <span className="lg:hidden px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs capitalize">
                    {prompt.difficulty}
                  </span>
                  {prompt.isPremium && (
                    <span className="px-3 py-1 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] text-xs font-semibold">
                      Premium
                    </span>
                  )}
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                  {prompt.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-[var(--grey-400)]"
                >
                  {prompt.description}
                </motion.p>
              </div>

              {/* How to Use This Prompt */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-8 p-6 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)]"
              >
                <h2 className="font-display text-lg font-bold text-white mb-4">
                  How to Use This Prompt
                </h2>

                {/* Step-by-step instructions */}
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-gold)] text-[var(--grey-950)] text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <p className="text-white font-medium">Prepare your input</p>
                      <p className="text-[var(--grey-400)] text-sm">
                        {prompt.inputsNeeded && prompt.inputsNeeded[0]
                          ? `You'll need: ${prompt.inputsNeeded[0].toLowerCase()}`
                          : 'Gather your materials before you start.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-gold)] text-[var(--grey-950)] text-sm font-bold flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <p className="text-white font-medium">Copy the prompt below</p>
                      <p className="text-[var(--grey-400)] text-sm">Click the gold "Copy Prompt" button.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-gold)] text-[var(--grey-950)] text-sm font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <p className="text-white font-medium">Paste into Claude, ChatGPT, or Gemini</p>
                      <p className="text-[var(--grey-400)] text-sm">Start a new chat and paste the entire prompt.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-gold)] text-[var(--grey-950)] text-sm font-bold flex items-center justify-center">
                      4
                    </span>
                    <div>
                      <p className="text-white font-medium">Replace the [BRACKETED SECTIONS]</p>
                      <p className="text-[var(--grey-400)] text-sm">
                        Look for text in [BRACKETS] and replace with your content. Then hit send.
                      </p>
                    </div>
                  </div>
                </div>

                {/* What you'll need */}
                {prompt.inputsNeeded && prompt.inputsNeeded.length > 0 && (
                  <div className="pt-4 border-t border-[var(--grey-800)]">
                    <h3 className="text-sm font-semibold text-[var(--grey-400)] uppercase tracking-wider mb-3">
                      What You'll Need
                    </h3>
                    <ul className="space-y-2">
                      {prompt.inputsNeeded.map((input, index) => (
                        <li key={index} className="flex items-start gap-3 text-[var(--grey-300)] text-sm">
                          <span className="text-[var(--brand-gold)] mt-0.5">→</span>
                          {input}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Special callout for non-transcript prompts */}
                {prompt.inputsNeeded && !prompt.inputsNeeded[0]?.toLowerCase().includes('transcript') && (
                  <div className="mt-4 p-4 rounded-xl bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30">
                    <p className="text-[var(--brand-gold)] text-sm font-medium">
                      ⚠️ This prompt doesn't use a transcript — check the inputs above carefully.
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Prompt Box - improved typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="relative rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)] overflow-hidden">
                  {/* Header bar with copy button */}
                  <div className="px-6 py-3 bg-[var(--grey-850)] border-b border-[var(--grey-800)] flex items-center justify-between">
                    <span className="text-xs text-[var(--grey-500)] uppercase tracking-wider font-medium">
                      Prompt
                    </span>
                    {!isLocked && (
                      <button
                        onClick={handleCopy}
                        className="text-[var(--grey-500)] hover:text-white transition-colors"
                        aria-label="Copy prompt"
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    )}
                  </div>

                  {/* Prompt content with better typography */}
                  <div className={`p-6 md:p-8 ${isLocked ? 'blur-sm select-none' : ''}`}>
                    <div className="whitespace-pre-wrap text-[var(--grey-300)] font-mono text-sm leading-relaxed">
                      {prompt.prompt}
                    </div>
                  </div>

                  {/* Locked overlay */}
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[var(--grey-950)]/80">
                      <div className="text-center">
                        <Lock className="text-[var(--brand-gold)] mx-auto mb-3" size={32} />
                        <p className="text-white font-semibold mb-2">Premium Prompt</p>
                        <p className="text-[var(--grey-400)] text-sm mb-4">
                          Unlock with your subscriber password
                        </p>
                        <button
                          onClick={() => setShowPasswordModal(true)}
                          className="px-6 py-2 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-lg hover:bg-[var(--brand-gold-light)] transition-colors"
                        >
                          Unlock
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      copied
                        ? 'bg-[var(--success)] text-white'
                        : 'bg-[var(--brand-gold)] text-[var(--grey-950)] hover:bg-[var(--brand-gold-light)]'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check size={18} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        Copy Prompt
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleOpenInClaude}
                    className="flex items-center gap-2 px-6 py-3 bg-[var(--grey-800)] text-white rounded-xl font-semibold hover:bg-[var(--grey-700)] transition-colors"
                  >
                    <ClaudeLogo size={18} />
                    Open in Claude
                    <ExternalLink size={14} className="opacity-50" />
                  </button>
                </div>

                <p className="text-[var(--grey-500)] text-sm mt-3">
                  Works with Claude, ChatGPT, Gemini, and other AI assistants
                </p>
              </motion.div>

              {/* What to Look For - numbered cards layout */}
              {prompt.whatToLookFor && prompt.whatToLookFor.length > 0 && !isLocked && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-12"
                >
                  <h2 className="font-display text-xl font-bold text-white mb-6">
                    What to Look For
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prompt.whatToLookFor.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-[var(--grey-850)] border border-[var(--grey-800)]"
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] text-sm font-bold mb-3">
                          {index + 1}
                        </span>
                        <p className="text-sm text-[var(--grey-300)]">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Sidebar - right column (hidden on mobile) */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-6">
                {/* Category */}
                <div>
                  <h4 className="text-xs text-[var(--grey-500)] uppercase tracking-wider mb-2">
                    Category
                  </h4>
                  <span className="inline-flex items-center gap-2 text-[var(--grey-300)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--brand-gold)]" />
                    <span className="capitalize">{prompt.category}</span>
                  </span>
                </div>

                {/* Difficulty */}
                <div>
                  <h4 className="text-xs text-[var(--grey-500)] uppercase tracking-wider mb-2">
                    Difficulty
                  </h4>
                  <span className="text-[var(--grey-300)] capitalize">
                    {prompt.difficulty}
                  </span>
                </div>

                {/* Tags */}
                {prompt.tags && prompt.tags.length > 0 && (
                  <div>
                    <h4 className="text-xs text-[var(--grey-500)] uppercase tracking-wider mb-2">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {prompt.tags.map(tag => (
                        <span key={tag} className="text-xs text-[var(--grey-400)]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* Related Prompts Section */}
          {relatedPrompts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 pt-12 border-t border-[var(--grey-800)]"
            >
              <h2 className="font-display text-xl font-bold text-white mb-6">
                Related Prompts
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPrompts.map((relatedPrompt) => (
                  <Link
                    href={`/prompts/${relatedPrompt.slug}`}
                    key={relatedPrompt.id}
                    className="group block p-5 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    {relatedPrompt.thumbnail && (
                      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[var(--grey-800)]">
                        <Image
                          src={relatedPrompt.thumbnail}
                          alt={relatedPrompt.title}
                          fill
                          className="object-cover"
                        />
                        {relatedPrompt.isPremium && (
                          <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-[var(--brand-gold)]/90 text-[var(--grey-950)] text-xs font-semibold">
                            Premium
                          </div>
                        )}
                      </div>
                    )}

                    {/* Category badge */}
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs font-semibold uppercase tracking-wider mb-2">
                      {relatedPrompt.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[var(--brand-gold)] transition-colors mb-2">
                      {relatedPrompt.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--grey-400)] text-sm line-clamp-1 mb-3">
                      {relatedPrompt.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center justify-end">
                      <ArrowRight
                        size={16}
                        className="text-[var(--grey-500)] group-hover:text-[var(--brand-gold)] group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Mobile: Tags section (since sidebar is hidden) */}
          <div className="lg:hidden mt-8 pt-8 border-t border-[var(--grey-800)]">
            {prompt.tags && prompt.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Password Modal */}
      {showPasswordModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setShowPasswordModal(false)}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
              className={`w-full px-4 py-3 bg-[var(--grey-850)] border rounded-xl text-white placeholder:text-[var(--grey-500)] focus:outline-none transition-colors mb-4 ${
                passwordError ? 'border-red-500' : 'border-[var(--grey-700)] focus:border-[var(--brand-gold)]'
              }`}
            />

            {passwordError && (
              <p className="text-red-400 text-sm mb-4">
                Incorrect password.
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="flex-1 px-4 py-3 bg-[var(--grey-800)] text-white rounded-xl hover:bg-[var(--grey-700)] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUnlock}
                disabled={isVerifying}
                className="flex-1 px-4 py-3 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors disabled:opacity-50"
              >
                {isVerifying ? 'Verifying...' : 'Unlock'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}

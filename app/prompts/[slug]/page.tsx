'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { getPromptBySlug } from '@/data/prompts';
import { Copy, Check, ExternalLink, ArrowLeft, Lightbulb, BookOpen, Lock } from 'lucide-react';

const STORAGE_KEY = 'cf-premium-unlocked';

// Claude logo SVG component
const ClaudeLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

export default function PromptDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const prompt = getPromptBySlug(slug);

  const [copied, setCopied] = useState(false);
  const [premiumUnlocked, setPremiumUnlocked] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setPremiumUnlocked(true);
    }
  }, []);

  if (!prompt) {
    return (
      <div className="min-h-screen bg-[var(--grey-950)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Prompt not found</h1>
          <Link href="/prompts" className="text-[var(--brand-gold)] hover:underline">
            ← Back to prompts
          </Link>
        </div>
      </div>
    );
  }

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

  const handleUnlock = () => {
    const correctPassword = process.env.NEXT_PUBLIC_PREMIUM_PASSWORD || 'cognitive2024';
    if (password === correctPassword) {
      setPremiumUnlocked(true);
      localStorage.setItem(STORAGE_KEY, 'true');
      setShowPasswordModal(false);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/prompts"
            className="inline-flex items-center gap-2 text-[var(--grey-400)] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to prompts
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs font-semibold uppercase tracking-wider">
                {prompt.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-[var(--grey-800)] text-[var(--grey-400)] text-xs capitalize">
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

          {/* Prompt Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)] overflow-hidden">
              {/* Prompt content */}
              <div className={`p-6 md:p-8 ${isLocked ? 'blur-sm select-none' : ''}`}>
                <pre className="whitespace-pre-wrap text-[var(--grey-300)] font-mono text-sm leading-relaxed">
                  {prompt.prompt}
                </pre>
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

          {/* What to Look For */}
          {prompt.whatToLookFor && prompt.whatToLookFor.length > 0 && !isLocked && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 p-6 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-[var(--brand-gold)]" size={20} />
                <h2 className="font-display text-lg font-bold text-white">
                  What to Look For in the Output
                </h2>
              </div>
              <ul className="space-y-3">
                {prompt.whatToLookFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[var(--grey-300)]">
                    <span className="text-[var(--brand-gold)] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Related Article */}
          {prompt.relatedArticle && !isLocked && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={prompt.relatedArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-[var(--grey-850)] border border-[var(--grey-800)] hover:border-[var(--brand-gold)]/50 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="text-[var(--grey-500)]" size={18} />
                  <span className="text-[var(--grey-500)] text-sm">Deep Dive</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[var(--brand-gold)] transition-colors">
                  {prompt.relatedArticle.title}
                </h3>
                <p className="text-[var(--grey-400)] text-sm mt-1">
                  Read the full article on Substack →
                </p>
              </a>
            </motion.div>
          )}

          {/* Tags */}
          {prompt.tags && prompt.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[var(--grey-800)]">
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
            </div>
          )}
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
                className="flex-1 px-4 py-3 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors"
              >
                Unlock
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}


'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { getWorkflowBySlug } from '@/data/prompts';
import {
  ArrowLeft,
  Lock,
  Clock,
  ChevronDown,
  Copy,
  Check,
  Workflow as WorkflowIcon
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const STORAGE_KEY = 'cf-premium-unlocked';

export default function WorkflowDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const workflow = getWorkflowBySlug(slug);

  const [premiumUnlocked, setPremiumUnlocked] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setPremiumUnlocked(true);
    }
  }, []);

  // Fetch markdown content when unlocked
  useEffect(() => {
    if (workflow && (!workflow.isPremium || premiumUnlocked)) {
      fetch(workflow.file)
        .then(res => res.text())
        .then(text => {
          setMarkdownContent(text);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load workflow:', err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [workflow, premiumUnlocked]);

  if (!workflow) {
    return (
      <div className="min-h-screen bg-[var(--grey-950)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Workflow not found</h1>
          <Link href="/prompts" className="text-[var(--brand-gold)] hover:underline">
            ← Back to prompts
          </Link>
        </div>
      </div>
    );
  }

  const isLocked = workflow.isPremium && !premiumUnlocked;

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

  const toggleStep = (stepNumber: number) => {
    if (isLocked) {
      setShowPasswordModal(true);
      return;
    }
    setExpandedSteps(prev =>
      prev.includes(stepNumber)
        ? prev.filter(s => s !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const expandAll = () => {
    if (isLocked) {
      setShowPasswordModal(true);
      return;
    }
    setExpandedSteps(workflow.steps.map(s => s.stepNumber));
  };

  const collapseAll = () => {
    setExpandedSteps([]);
  };

  // Parse markdown to extract step content
  const getStepContent = (stepNumber: number): string => {
    if (!markdownContent) return '';

    // Match various step/tool header formats:
    // "### **🔬 Step 1:" or "### **Step 1:" or "### **🪏Tool \#1:" etc.
    // Handles escaped # (\\#) and optional spaces
    const stepRegex = new RegExp(
      `(?:#{2,3}\\s*\\*{0,2}[^\\n]*?(?:Step\\s*${stepNumber}|Tool\\s*\\\\?#?${stepNumber})[:\\s][^]*?)(?=(?:#{2,3}\\s*\\*{0,2}[^\\n]*?(?:Step\\s*\\d|Tool\\s*\\\\?#?\\d))|---\\s*##|$)`,
      'i'
    );

    const match = markdownContent.match(stepRegex);
    if (match) {
      return match[0].trim();
    }
    return '';
  };

  const copyStepContent = async (stepNumber: number) => {
    const content = getStepContent(stepNumber);
    // Extract just the prompt part - look for "PROMPT:" or the actual prompt content
    const promptMatch = content.match(/\*{0,2}PROMPT:?\*{0,2}\s*\n([\s\S]*?)(?=(?:---|\*{2}OUTPUT|OUTPUT REQUIRED|$))/i);
    const textToCopy = promptMatch ? promptMatch[1].trim() : content;

    await navigator.clipboard.writeText(textToCopy);
    setCopiedStep(stepNumber);
    setTimeout(() => setCopiedStep(null), 2000);
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
                {workflow.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold flex items-center gap-1">
                <WorkflowIcon size={12} />
                {workflow.steps.length}-Step Workflow
              </span>
              {workflow.isPremium && (
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
              {workflow.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[var(--grey-400)] mb-6"
            >
              {workflow.description}
            </motion.p>

            <div className="flex items-center gap-4 text-sm text-[var(--grey-500)]">
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {workflow.estimatedTime}
              </span>
            </div>
          </div>

          {/* Locked State */}
          {isLocked && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-8 rounded-2xl bg-[var(--grey-900)] border border-[var(--grey-800)] text-center"
            >
              <Lock className="text-[var(--brand-gold)] mx-auto mb-4" size={48} />
              <h2 className="font-display text-xl font-bold text-white mb-2">
                Premium Workflow Pack
              </h2>
              <p className="text-[var(--grey-400)] mb-6 max-w-md mx-auto">
                This {workflow.steps.length}-step workflow is available to Signal {'>'} Noise subscribers.
                Unlock to access all steps and prompts.
              </p>
              <button
                onClick={() => setShowPasswordModal(true)}
                className="px-8 py-3 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors"
              >
                Unlock Workflow
              </button>
            </motion.div>
          )}

          {/* Steps Preview / Full Content */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-bold text-white">
                Workflow Steps
              </h2>
              {!isLocked && (
                <div className="flex gap-2">
                  <button
                    onClick={expandAll}
                    className="text-sm text-[var(--grey-400)] hover:text-white transition-colors"
                  >
                    Expand all
                  </button>
                  <span className="text-[var(--grey-600)]">|</span>
                  <button
                    onClick={collapseAll}
                    className="text-sm text-[var(--grey-400)] hover:text-white transition-colors"
                  >
                    Collapse all
                  </button>
                </div>
              )}
            </div>

            {workflow.steps.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-[var(--grey-900)] border border-[var(--grey-800)] overflow-hidden"
              >
                {/* Step Header */}
                <button
                  onClick={() => toggleStep(step.stepNumber)}
                  className="w-full p-5 flex items-start justify-between hover:bg-[var(--grey-850)] transition-colors text-left"
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <span className="w-8 h-8 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      {step.stepNumber}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-white block">
                        {step.title}
                      </span>
                      {step.description && (
                        <p className="text-[var(--grey-400)] text-sm mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4 mt-1">
                    {isLocked && (
                      <Lock size={16} className="text-[var(--grey-500)]" />
                    )}
                    <ChevronDown
                      size={20}
                      className={`text-[var(--grey-500)] transition-transform ${
                        expandedSteps.includes(step.stepNumber) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Step Content */}
                <AnimatePresence>
                  {expandedSteps.includes(step.stepNumber) && !isLocked && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-[var(--grey-800)]">
                        {/* Instructions */}
                        {step.instructions && step.instructions.length > 0 && (
                          <div className="pt-4 pb-4">
                            <h4 className="text-sm font-semibold text-[var(--brand-gold)] uppercase tracking-wider mb-3">
                              How to use this step
                            </h4>
                            <ul className="space-y-2">
                              {step.instructions.map((instruction, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-[var(--grey-300)]">
                                  <span className="text-[var(--brand-gold)] mt-1">•</span>
                                  <span>{instruction}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Copy button */}
                        <div className="flex justify-end pt-2 pb-2">
                          <button
                            onClick={() => copyStepContent(step.stepNumber)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              copiedStep === step.stepNumber
                                ? 'bg-[var(--success)] text-white'
                                : 'bg-[var(--grey-800)] text-[var(--grey-300)] hover:bg-[var(--grey-700)]'
                            }`}
                          >
                            {copiedStep === step.stepNumber ? (
                              <>
                                <Check size={14} />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                Copy Prompt
                              </>
                            )}
                          </button>
                        </div>

                        {/* Markdown content */}
                        {loading ? (
                          <div className="py-8 text-center text-[var(--grey-500)]">
                            Loading...
                          </div>
                        ) : (
                          <div className="prose prose-invert prose-sm max-w-none
                            prose-headings:font-display prose-headings:text-white
                            prose-h3:text-lg prose-h4:text-base
                            prose-p:text-[var(--grey-300)] prose-p:leading-relaxed
                            prose-li:text-[var(--grey-300)]
                            prose-strong:text-white
                            prose-code:text-[var(--brand-gold)] prose-code:bg-[var(--grey-850)] prose-code:px-1 prose-code:rounded
                            prose-pre:bg-[var(--grey-850)] prose-pre:border prose-pre:border-[var(--grey-700)]
                            prose-blockquote:border-[var(--brand-gold)] prose-blockquote:text-[var(--grey-400)]
                          ">
                            <ReactMarkdown>
                              {getStepContent(step.stepNumber)}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          {workflow.tags && workflow.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[var(--grey-800)]">
              <div className="flex flex-wrap gap-2">
                {workflow.tags.map((tag) => (
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

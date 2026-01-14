'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Copy, Check, Lock } from 'lucide-react';

interface PromptCardProps {
  title: string;
  content: string;
  color: string;
  isLocked?: boolean;
  onUnlockClick?: () => void;
}

export function PromptCard({ title, content, color, isLocked = false, onUnlockClick }: PromptCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = async () => {
    try {
      // Check if clipboard API is available
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        throw new Error('Clipboard API not available');
      }

      await navigator.clipboard.writeText(content);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => {
        setCopied(false);
        setCopyError(false);
      }, 2000);
    } catch (error) {
      // Handle clipboard errors (permissions, insecure context, etc.)
      console.error('Failed to copy to clipboard:', error);
      setCopyError(true);
      setCopied(false);
      
      // Show error feedback for a shorter duration
      setTimeout(() => setCopyError(false), 3000);
      
      // Optional: Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = content;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackError) {
        console.error('Fallback copy method also failed:', fallbackError);
      }
    }
  };

  const handleToggle = () => {
    if (isLocked) {
      onUnlockClick?.();
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="mt-12"
    >
      <div
        className="rounded-xl overflow-hidden"
        style={{
          backgroundColor: 'var(--grey-900)',
          border: `1px solid ${color}30`,
        }}
      >
        {/* Toggle Header */}
        <button
          onClick={handleToggle}
          className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-white/5"
        >
          <div className="flex items-center gap-3">
            {isLocked ? (
              <Lock className="w-5 h-5" style={{ color }} />
            ) : (
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
            )}
            <span className="text-white font-medium">
              {isLocked ? 'Unlock Prompt' : title}
            </span>
          </div>

          {isLocked ? (
            <span
              className="text-sm font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${color}20`,
                color: color,
              }}
            >
              Sign up to access
            </span>
          ) : (
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-[var(--grey-400)]" />
            </motion.div>
          )}
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isOpen && !isLocked && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="px-6 pb-6 border-t"
                style={{ borderColor: `${color}20` }}
              >
                {/* Copy Button */}
                <div className="flex justify-end pt-4 pb-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors"
                    style={{
                      backgroundColor: copied ? `${color}20` : copyError ? 'rgba(239, 68, 68, 0.2)' : 'var(--grey-800)',
                      color: copied ? color : copyError ? '#ef4444' : 'var(--grey-300)',
                    }}
                    title={copyError ? 'Copy failed. Please try selecting and copying manually.' : undefined}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : copyError ? (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy failed
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy prompt
                      </>
                    )}
                  </button>
                </div>

                {/* Prompt Content */}
                <div
                  className="p-4 rounded-lg font-mono text-sm leading-relaxed overflow-x-auto"
                  style={{
                    backgroundColor: 'var(--grey-950)',
                    color: 'var(--grey-300)',
                  }}
                >
                  <pre className="whitespace-pre-wrap">{content}</pre>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

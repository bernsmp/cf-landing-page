'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PromptBlockProps {
  title: string;
  content: string;
  prominent?: boolean;
}

export function PromptBlock({ title, content, prominent = false }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        throw new Error('Clipboard API not available');
      }
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
      } catch {
        setCopyError(true);
        setTimeout(() => setCopyError(false), 3000);
      }
    }
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--grey-700)] bg-[var(--grey-900)]">
      <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--grey-800)]">
        <span className="text-white font-medium">{title}</span>
        <button
          onClick={handleCopy}
          className={`flex items-center justify-center gap-2 rounded-lg font-bold transition-colors ${
            prominent
              ? 'px-6 py-3 text-base bg-[var(--brand-gold)] text-[var(--grey-950)] hover:bg-[var(--brand-gold-light)]'
              : 'px-4 py-2 text-sm bg-[var(--grey-800)] text-[var(--grey-300)] hover:bg-[var(--grey-700)]'
          }`}
          title={copyError ? 'Copy failed. Select the text and copy manually.' : undefined}
        >
          {copied ? (
            <>
              <Check size={prominent ? 20 : 16} />
              Copied
            </>
          ) : copyError ? (
            <>
              <Copy size={prominent ? 20 : 16} />
              Copy failed
            </>
          ) : (
            <>
              <Copy size={prominent ? 20 : 16} />
              Copy prompt
            </>
          )}
        </button>
      </div>
      <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-[var(--grey-950)] text-[var(--grey-300)]">
        <pre className="whitespace-pre-wrap">{content}</pre>
      </div>
    </div>
  );
}

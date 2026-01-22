'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { KevinHero, FingerprintSection, BeliefMapSection } from './components';

export default function KevinPage() {
  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 bg-[var(--grey-950)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-[var(--grey-500)] hover:text-white transition-colors"
          >
            &larr; Cognitive Fingerprint
          </Link>
          <span className="text-sm text-[var(--grey-600)]">Client Dashboard</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <KevinHero onNavigate={handleNavigate} />

        {/* Divider */}
        <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[var(--grey-800)] to-transparent" />

        {/* Fingerprint Section */}
        <FingerprintSection />

        {/* Divider */}
        <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[var(--grey-800)] to-transparent" />

        {/* Belief Map Section */}
        <BeliefMapSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--grey-900)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--grey-600)]">
            Kevin Jennings Cognitive Fingerprint™ • Analysis by Max Bernstein
          </p>
          <p className="text-sm text-[var(--grey-600)]">
            <Link href="/" className="hover:text-white transition-colors">
              Cognitive Fingerprint
            </Link>
            {' '}·{' '}
            <Link href="/start" className="hover:text-white transition-colors">
              Get Your Own
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

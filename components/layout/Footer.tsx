'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';

const footerLinks = {
  main: [
    { href: '/method', label: 'Method' },
    { href: '/in-action', label: 'Articles' },
    { href: '/results', label: 'Results' },
    { href: '/start', label: 'Start' },
    { href: '/assessment', label: 'Assessment' },
  ],
  connect: [
    { href: 'https://irreplaceablepositioning.substack.com', label: 'Substack', external: true },
    { href: 'mailto:max@maxpbernstein.com', label: 'Email', external: true },
  ],
};

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Substack with email
    window.open(`https://irreplaceablepositioning.substack.com/subscribe?email=${encodeURIComponent(email)}`, '_blank');
    setEmail('');
  };

  return (
    <footer className="bg-[var(--grey-950)] border-t border-[var(--grey-800)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo/cf logo.png"
                alt="Cognitive Fingerprint"
                width={48}
                height={48}
              />
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Cognitive Fingerprint
                  <span className="text-[var(--grey-600)] text-sm align-super ml-0.5">™</span>
                </h3>
              </div>
            </Link>
            <p className="text-[var(--grey-400)] max-w-md mb-8">
              Making invisible expertise visible. Evidence-based pattern extraction for leaders who want to operate at their true potential.
            </p>

            {/* Newsletter Signup */}
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="relative flex-1 max-w-xs">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--grey-500)]" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-xl text-white placeholder:text-[var(--grey-500)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--grey-300)] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--grey-400)] hover:text-[var(--brand-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--grey-300)] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-[var(--grey-400)] hover:text-[var(--brand-gold)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[var(--grey-800)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--grey-500)] text-sm">
            © 2025 Signal {'>'} Noise. All rights reserved.
          </p>
          <p className="text-[var(--grey-600)] text-sm">
            Built by Max Bernstein
          </p>
        </div>
      </div>
    </footer>
  );
};


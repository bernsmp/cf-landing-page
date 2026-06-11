'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

type DropdownItem = { href: string; label: string };
type NavItem = {
  href?: string;
  label: string;
  featured?: boolean;
  dropdown?: DropdownItem[];
};

const navLinks: NavItem[] = [
  { href: '/method', label: 'Method' },
  { href: '/prompts', label: 'Prompt Vault' },
  { href: '/insights', label: 'Insights' },
  {
    label: 'Resources',
    dropdown: [
      { href: '/famous-fingerprints', label: 'Famous Fingerprints' },
      { href: '/remixroom', label: 'The Remix Room' },
      { href: '/baker-frameworks', label: 'Baker (Study)' },
    ],
  },
  { href: '/start', label: 'Start' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setResourcesOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setResourcesOpen(false), 120);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'border-b border-white/[0.08] bg-[#050505]/92 backdrop-blur-xl'
            : 'border-b border-white/[0.04] bg-[#050505]/72 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/logo/cf-t1.png"
                  alt="Cognitive Fingerprint"
                  width={40}
                  height={40}
                  className="relative z-10"
                />
              </div>
              <span className="font-display text-lg font-bold text-white hidden sm:block">
                Cognitive Fingerprint
                <span className="text-[var(--grey-600)] text-xs align-super ml-0.5">™</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <button
                        aria-controls="resources-menu"
                        aria-expanded={resourcesOpen}
                        aria-haspopup="menu"
                        className="flex items-center gap-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--grey-400)] hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {resourcesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                            onMouseEnter={openDropdown}
                            onMouseLeave={closeDropdown}
                            id="resources-menu"
                            role="menu"
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-2xl bg-[var(--grey-950)] border border-white/[0.10] shadow-2xl shadow-black/60 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                className="block px-4 py-3 text-sm text-[var(--grey-400)] hover:text-white hover:bg-white/5 transition-colors duration-200"
                                onClick={() => setResourcesOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className={`transition-colors duration-300 font-mono text-[11px] font-medium uppercase tracking-[0.14em] ${
                      link.featured
                        ? 'text-[var(--brand-gold)] hover:text-[var(--brand-gold-light)]'
                        : 'text-[var(--grey-400)] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/coaches-eye"
                className="flex items-center gap-2 rounded-full px-6 py-2.5 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold hover:bg-[var(--brand-gold-light)] transition-all duration-300 text-sm"
              >
                See What Leaders See
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-2 text-[var(--grey-400)] hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-[var(--grey-950)] pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => {
                if (link.dropdown) {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                        aria-controls="mobile-resources-menu"
                        aria-expanded={mobileResourcesOpen}
                        aria-haspopup="menu"
                        className="flex items-center gap-2 text-2xl font-display font-bold text-white hover:text-[var(--brand-gold)] transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileResourcesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            id="mobile-resources-menu"
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 mt-3 pl-4 border-l border-[var(--border-subtle)]">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-lg text-[var(--grey-400)] hover:text-white transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href!}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-display font-bold transition-colors ${
                        link.featured
                          ? 'text-[var(--brand-gold)] hover:text-[var(--brand-gold-light)]'
                          : 'text-white hover:text-[var(--brand-gold)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-6"
              >
                <Link
                  href="/coaches-eye"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold text-lg"
                >
                  See What Leaders See
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

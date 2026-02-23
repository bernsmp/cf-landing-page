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
  { href: '/prompts', label: 'Prompt Vault', featured: true },
  { href: '/insights', label: 'Insights' },
  {
    label: 'Resources',
    dropdown: [
      { href: '/baker-frameworks', label: 'Baker Frameworks' },
      { href: '/coaches-eye', label: "Coach's Eye" },
      { href: '/in-action', label: 'CF In Action' },
    ],
  },
  { href: '/newsletter', label: 'Newsletter' },
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
            ? 'bg-[var(--grey-950)]/90 backdrop-blur-xl border-b border-[var(--border-subtle)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--brand-gold)] rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                <Image
                  src="/logo/cf logo.png"
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
                        className="flex items-center gap-1 text-sm font-medium text-[var(--grey-400)] hover:text-white transition-colors duration-300"
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
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[var(--grey-950)] border border-[var(--border-subtle)] rounded-xl shadow-2xl overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
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
                    className={`transition-colors duration-300 text-sm font-medium ${
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
                className="flex items-center gap-2 px-5 py-2.5 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-lg hover:bg-[var(--brand-gold-light)] transition-all duration-300 text-sm"
              >
                See What Leaders See
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                  className="inline-flex items-center gap-2 px-6 py-4 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl text-lg"
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

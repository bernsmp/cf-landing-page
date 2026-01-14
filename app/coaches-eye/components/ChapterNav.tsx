'use client';

import { motion } from 'framer-motion';
import { patterns, categoryColors } from '../data';
import { Lock } from 'lucide-react';

interface ChapterNavProps {
  activeChapter: number;
  isUnlocked: boolean;
  onNavigate: (index: number) => void;
}

export function ChapterNav({ activeChapter, isUnlocked, onNavigate }: ChapterNavProps) {
  // Chapters: 0 = intro, 1-7 = patterns
  const chapters = [
    { id: 0, label: 'Intro', locked: false },
    ...patterns.map((p) => ({
      id: p.id,
      label: p.title,
      category: p.category,
      locked: !isUnlocked && p.id > 1,
    })),
  ];

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3">
      {chapters.map((chapter, index) => {
        const isActive = activeChapter === index;
        const color = chapter.id === 0
          ? 'var(--grey-500)'
          : categoryColors[patterns[chapter.id - 1]?.category || 'sports'];

        return (
          <button
            key={chapter.id}
            onClick={() => !chapter.locked && onNavigate(index)}
            disabled={chapter.locked}
            className="group flex items-center gap-3"
          >
            {/* Label (shows on hover or when active) */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 10,
              }}
              className="text-xs font-medium text-[var(--grey-400)] group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap"
              style={{ color: isActive ? color : undefined }}
            >
              {chapter.locked ? (
                <span className="flex items-center gap-1">
                  <Lock size={10} />
                  {chapter.label}
                </span>
              ) : (
                chapter.label
              )}
            </motion.span>

            {/* Dot */}
            <motion.div
              className={`relative rounded-full transition-all ${
                chapter.locked ? 'opacity-30' : 'cursor-pointer'
              }`}
              animate={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
                backgroundColor: isActive ? color : 'var(--grey-700)',
              }}
              whileHover={!chapter.locked ? { scale: 1.2 } : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="activeRing"
                  className="absolute inset-[-4px] rounded-full border-2"
                  style={{ borderColor: color }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.div>
          </button>
        );
      })}
    </nav>
  );
}

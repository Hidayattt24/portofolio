'use client';

import React from 'react';
import { motion } from 'framer-motion';

export type ProjectCategory = 'all' | 'client' | 'competition' | 'social' | 'personal';

interface CategoryFilterProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

const categories = [
  {
    id: 'all' as ProjectCategory,
    label: 'All Projects',
    color: '#25343F',
    description: 'View all projects',
  },
  {
    id: 'client' as ProjectCategory,
    label: 'Client Work',
    color: '#5A7863',
    description: 'Professional commissioned projects',
  },
  {
    id: 'competition' as ProjectCategory,
    label: 'Competitions',
    color: '#D4AF37',
    description: 'Award-winning competitive projects',
  },
  {
    id: 'social' as ProjectCategory,
    label: 'Social Impact',
    color: '#4A90E2',
    description: 'Community service projects',
  },
  {
    id: 'personal' as ProjectCategory,
    label: 'Personal',
    color: '#9B59B6',
    description: 'Self-driven innovation',
  },
];

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      {/* Desktop: Horizontal Tabs */}
      <div className="hidden md:flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
              activeCategory === category.id
                ? 'text-white'
                : 'bg-white text-[var(--text-primary)] border-2 border-[var(--card-border)]/10 hover:border-[var(--card-border)]/30'
            }`}
            style={{
              backgroundColor: activeCategory === category.id ? category.color : undefined,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-start">
              <span>{category.label}</span>
              {activeCategory === category.id && (
                <span className="text-xs text-white/80 mt-0.5">{category.description}</span>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Mobile: Dropdown/Scrollable */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              activeCategory === category.id
                ? 'text-white'
                : 'bg-white text-[var(--text-primary)] border-2 border-[var(--card-border)]/10'
            }`}
            style={{
              backgroundColor: activeCategory === category.id ? category.color : undefined,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export { categories };

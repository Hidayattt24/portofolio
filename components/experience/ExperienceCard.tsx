'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  logo?: string;
}

export default function ExperienceCard({
  company,
  position,
  duration,
  location,
  description,
  logo,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const shouldTruncate = description.length > maxLength;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--card-bg)] rounded-2xl p-6 border-2 border-[var(--card-border)] shadow-[6px_6px_0px_var(--card-shadow)] hover:shadow-[8px_8px_0px_var(--card-shadow)] transition-all duration-300"
    >
      <div className="flex gap-4">
        {/* Logo/Icon */}
        <div className="flex-shrink-0">
          {logo ? (
            <img src={logo} alt={company} className="w-12 h-12 rounded-lg object-cover" />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-[var(--button-primary-bg)] flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <h3 className="text-xl font-normal text-[var(--text-primary)] mb-1">{position}</h3>
          <p className="text-base text-[var(--text-primary)]/80 mb-1">{company}</p>
          <div className="flex flex-wrap gap-2 text-sm text-[var(--text-muted)] mb-3">
            <span>{duration}</span>
            <span>•</span>
            <span>{location}</span>
          </div>

          {/* Description with Progressive Disclosure */}
          <div className="text-[var(--text-secondary)] leading-relaxed">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.p
                  key="expanded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {description}
                </motion.p>
              ) : (
                <motion.p
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {shouldTruncate ? `${description.slice(0, maxLength)}...` : description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* See More/Less Button */}
          {shouldTruncate && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center gap-1 text-[var(--text-primary)] font-medium text-sm hover:text-[var(--accent-green)] transition-colors"
              whileHover={{ x: 2 }}
            >
              {isExpanded ? (
                <>
                  See less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  See more <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

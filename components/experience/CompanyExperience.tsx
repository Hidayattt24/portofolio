'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface Position {
  title: string;
  duration: string;
  location: string;
  description: string;
}

interface CompanyExperienceProps {
  company: string;
  positions: Position[];
  logo?: string;
}

export default function CompanyExperience({ company, positions, logo }: CompanyExperienceProps) {
  const [expandedPositions, setExpandedPositions] = useState<number[]>([]);
  const maxLength = 150;

  const togglePosition = (index: number) => {
    setExpandedPositions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] transition-all duration-300"
    >
      <div className="flex gap-4">
        {/* Logo/Icon */}
        <div className="flex-shrink-0 flex flex-col items-center">
          {logo ? (
            <img src={logo} alt={company} className="w-12 h-12 rounded-lg object-cover" />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-[var(--button-primary-bg)] flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
          )}

          {/* Vertical Timeline Line */}
          {positions.length > 1 && (
            <div className="w-0.5 bg-[var(--accent-green)] flex-1 mt-4 min-h-[40px]" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Company Name */}
          <h3 className="text-xl font-normal text-[var(--text-primary)] mb-4">{company}</h3>

          {/* Positions */}
          <div className="flex flex-col gap-6">
            {positions.map((position, index) => {
              const isExpanded = expandedPositions.includes(index);
              const shouldTruncate = position.description.length > maxLength;

              return (
                <div key={index} className="relative">
                  {/* Timeline Dot for multiple positions */}
                  {positions.length > 1 && index > 0 && (
                    <div className="absolute -left-[52px] top-2 w-3 h-3 rounded-full bg-[var(--accent-green)] border-2 border-[var(--card-bg)]" />
                  )}

                  <div>
                    <h4 className="text-lg font-normal text-[var(--text-primary)] mb-1">{position.title}</h4>
                    <div className="flex flex-wrap gap-2 text-sm text-[var(--text-muted)] mb-3">
                      <span>{position.duration}</span>
                      <span>•</span>
                      <span>{position.location}</span>
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
                            {position.description}
                          </motion.p>
                        ) : (
                          <motion.p
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {shouldTruncate
                              ? `${position.description.slice(0, maxLength)}...`
                              : position.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* See More/Less Button */}
                    {shouldTruncate && (
                      <motion.button
                        onClick={() => togglePosition(index)}
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
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  impact?: string;
  achievements?: string[];
  link?: string;
  github?: string;
  images: string[];
  categoryColor: string;
  onViewDetails: () => void;
}

export default function ProjectCard({
  title,
  category,
  description,
  technologies,
  images,
  categoryColor,
  onViewDetails,
}: ProjectCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--card-bg)] rounded-[var(--radius-xl)] border-[3px] border-[var(--card-border)] transition-all duration-300 group"
    >
      {/* Image Preview */}
      <div className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-shadow)]">
        {images[0] ? (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white/30">{title.charAt(0)}</span>
          </div>
        )}

        {/* Image Count Badge */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
            {images.length} Images
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <Eye size={32} className="mx-auto mb-1" />
            <p className="text-xs font-medium">View Details</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span
            className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-normal text-[var(--text-primary)] mb-2 line-clamp-2">{title}</h3>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-xs mb-3 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-white text-[var(--text-primary)] text-xs rounded-full border border-[var(--card-border)]/10"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-0.5 text-[var(--text-muted)] text-xs">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <motion.button
          onClick={onViewDetails}
          className="w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-[var(--button-primary-bg)] text-white rounded-lg text-sm font-normal hover:bg-[var(--card-shadow)] transition-colors"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Eye size={16} />
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}

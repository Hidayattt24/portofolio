'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Award, Medal, Eye } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  images?: string[];
  award: string;
  organizer: string;
  categoryColor: string;
  index: number;
  onViewDetails: () => void;
}

export default function AchievementCard({
  title,
  category,
  date,
  description,
  images = [],
  award,
  organizer,
  categoryColor,
  index,
  onViewDetails,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-[var(--card-bg)] rounded-[var(--radius-xl)] border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section - Left Side */}
        <div className="relative md:w-80 h-64 md:h-auto flex-shrink-0 bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-shadow)]">
          {images.length > 0 && images[0] ? (
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Trophy size={80} className="text-[var(--card-shadow)]/30" />
            </div>
          )}
          
          {/* Award Badge Overlay */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-[var(--button-primary-bg)] text-white text-sm font-medium rounded-lg backdrop-blur-md border-2 border-white/20">
            <Medal size={18} />
            <span>{award}</span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span
              className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium text-white border-2 border-white/20 backdrop-blur-md"
              style={{ backgroundColor: categoryColor }}
            >
              {category}
            </span>
          </div>

          {/* Image Count Badge */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 text-white text-xs rounded-lg backdrop-blur-md border border-white/10">
              {images.length} Images
            </div>
          )}
        </div>

        {/* Content Section - Right Side */}
        <div className="flex-1 p-6 md:p-8 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] mb-3">
            {title}
          </h3>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-4">
            {/* Organizer */}
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--accent-green)]" />
              <span className="text-sm text-[var(--text-primary)] font-medium">
                {organizer}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--text-secondary)]" />
              <span className="text-sm text-[var(--text-secondary)]">
                {date}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* View Details Button */}
          <div className="mt-auto">
            <motion.button
              onClick={onViewDetails}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--button-primary-bg)] text-white rounded-[var(--radius-md)] text-sm font-medium hover:bg-[var(--card-shadow)] transition-colors border-2 border-[var(--card-border)]"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye size={18} />
              View Details
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

interface CollabsReviewsCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
  index: number;
  onReadMore: () => void;
}

export default function CollabsReviewsCard({
  name,
  role,
  company,
  image,
  testimonial,
  rating,
  index,
  onReadMore,
}: CollabsReviewsCardProps) {
  const truncatedText = testimonial.length > 150 ? testimonial.substring(0, 150) + '...' : testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[var(--card-bg)] rounded-[var(--radius-lg)] p-6 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-[var(--accent-green)] opacity-50" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-[var(--text-tertiary)]'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
        {truncatedText}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--accent-green)]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-[var(--text-primary)] font-medium">{name}</h4>
          <p className="text-sm text-[var(--text-secondary)]">
            {role} at {company}
          </p>
        </div>
      </div>

      {/* Read More Button */}
      {testimonial.length > 150 && (
        <button
          onClick={onReadMore}
          className="text-[var(--accent-green)] hover:text-[var(--accent-green-hover)] font-medium text-sm transition-colors"
        >
          Read More →
        </button>
      )}
    </motion.div>
  );
}

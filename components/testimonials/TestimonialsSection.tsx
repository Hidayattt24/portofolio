'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import TestimonialModal from './TestimonialModal';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTestimonial(null), 300);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <MessageSquareQuote className="w-8 h-8 text-[var(--accent-green)]" />
          <h1 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)]">
            Client Testimonials
          </h1>
        </div>
        <p className="text-lg text-[var(--text-secondary)]">
          What clients say about working with me
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            index={index}
            onReadMore={() => handleReadMore(testimonial)}
          />
        ))}
      </div>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <TestimonialModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          {...selectedTestimonial}
        />
      )}
    </div>
  );
}

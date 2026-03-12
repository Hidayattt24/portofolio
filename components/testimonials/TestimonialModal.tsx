'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, Star, Briefcase, Building2, ChevronLeft, ChevronRight, Youtube, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  fullTestimonial?: string;
  rating: number;
  date?: string;
  project?: string;
  projectImages?: string[];
  youtubeLink?: string;
  githubLink?: string;
}

export default function TestimonialModal({
  isOpen,
  onClose,
  name,
  role,
  company,
  image,
  testimonial,
  fullTestimonial,
  rating,
  date,
  project,
  projectImages = [],
  youtubeLink,
  githubLink,
}: TestimonialModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="modal-scrollbar bg-[var(--card-bg)] rounded-[var(--radius-xl)] border-[3px] border-[var(--card-border)] shadow-[var(--shadow-xl)] w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-[var(--card-bg)] border-b border-[var(--border-color)] p-6 flex items-start justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--accent-green)]">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[var(--text-primary)]">{name}</h3>
                    <p className="text-[var(--text-secondary)] flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      {role}
                    </p>
                    <p className="text-[var(--text-secondary)] flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4" />
                      {company}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < rating
                            ? 'text-[var(--accent-yellow)] fill-[var(--accent-yellow)]'
                            : 'text-[var(--text-tertiary)]'
                        }`}
                      />
                    ))}
                  </div>
                  {date && (
                    <span className="text-sm text-[var(--text-secondary)]">{date}</span>
                  )}
                </div>

                {/* Project Info */}
                {project && (
                  <div className="mb-6 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                    <p className="text-sm text-[var(--text-secondary)] mb-1">Project</p>
                    <p className="text-[var(--text-primary)] font-medium">{project}</p>
                  </div>
                )}

                {/* Project Images Slider */}
                {projectImages.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-[var(--text-primary)] font-medium mb-3">Project Documentation</h4>
                    <div className="relative bg-[var(--bg-secondary)] rounded-lg overflow-hidden border border-[var(--border-color)]">
                      {/* Image */}
                      <div className="relative aspect-video">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={projectImages[currentImageIndex]}
                              alt={`Project screenshot ${currentImageIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        {projectImages.length > 1 && (
                          <>
                            <button
                              onClick={handlePrevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={handleNextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                              {currentImageIndex + 1} / {projectImages.length}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Thumbnail Navigation */}
                      {projectImages.length > 1 && (
                        <div className="flex gap-2 p-3 overflow-x-auto">
                          {projectImages.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`relative flex-shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                                index === currentImageIndex
                                  ? 'border-[var(--accent-green)]'
                                  : 'border-transparent opacity-50 hover:opacity-100'
                              }`}
                            >
                              <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Links Section */}
                {(youtubeLink || githubLink) && (
                  <div className="mb-6 flex flex-wrap gap-3">
                    {youtubeLink && (
                      <a
                        href={youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                      >
                        <Youtube className="w-5 h-5" />
                        <span>Watch Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Repository</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[var(--accent-green)] opacity-30 mb-4" />

                {/* Full Testimonial */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                    {fullTestimonial || testimonial}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

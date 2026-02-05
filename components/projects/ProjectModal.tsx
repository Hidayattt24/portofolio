'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  categoryColor: string;
  images: string[];
  description: string;
  detailedDescription: string;
  technologies: string[];
  impact?: string;
  achievements?: string[];
  link?: string;
  github?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  category,
  categoryColor,
  images,
  description,
  detailedDescription,
  technologies,
  impact,
  achievements,
  link,
  github,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <X size={24} className="text-[var(--text-primary)]" />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                {/* Left: Image Slider */}
                <div className="lg:w-1/2 bg-[var(--card-bg)] relative flex items-center justify-center min-h-[300px] lg:min-h-[600px]">
                  {/* Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center p-8"
                    >
                      {images[currentImageIndex] ? (
                        <img
                          src={images[currentImageIndex]}
                          alt={`${title} - Image ${currentImageIndex + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      ) : (
                        <div className="text-6xl font-bold text-[var(--text-primary)]/20">
                          {title.charAt(0)}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <ChevronLeft size={24} className="text-[var(--text-primary)]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <ChevronRight size={24} className="text-[var(--text-primary)]" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-[var(--button-primary-bg)] w-6'
                                : 'bg-[var(--button-primary-bg)]/30'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Right: Content */}
                <div className="lg:w-1/2 overflow-y-auto p-8 lg:p-12">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: categoryColor }}
                    >
                      {category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)] mb-4">
                    {title}
                  </h2>

                  {/* Short Description */}
                  <p className="text-[var(--text-secondary)] text-base mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Detailed Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">Project Details</h3>
                    <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                      {detailedDescription}
                    </p>
                  </div>

                  {/* Impact */}
                  {impact && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">
                        Impact & Results
                      </h3>
                      <p className="text-[var(--text-secondary)] text-base leading-relaxed">{impact}</p>
                    </div>
                  )}

                  {/* Achievements */}
                  {achievements && achievements.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-[var(--text-secondary)]">
                            <span className="text-[var(--accent-green)] mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(link || github) && (
                    <div className="flex gap-3 pt-4 border-t border-[var(--card-border)]/10">
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[var(--button-primary-bg)] text-white rounded-xl hover:bg-[var(--card-shadow)] transition-colors"
                        >
                          <ExternalLink size={18} />
                          Visit Project
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-[var(--card-border)]/20 text-[var(--text-primary)] rounded-xl hover:border-[var(--card-border)] transition-colors"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

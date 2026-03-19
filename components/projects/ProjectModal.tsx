"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";

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
  githubRepos?: { label: string; url: string }[];
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
  githubRepos,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-modal-open", "true");
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-modal-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-modal-open");
    };
  }, [isOpen]);

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
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal wrapper — full screen on mobile, centered on desktop */}
          <div className="fixed inset-0 z-50 flex items-start lg:items-center justify-center p-0 lg:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[var(--card-bg)] rounded-none lg:rounded-[var(--radius-xl)] shadow-2xl border-0 lg:border-[3px] border-[var(--card-border)] w-full lg:max-w-6xl h-full lg:h-auto lg:max-h-[90vh] overflow-y-auto lg:overflow-hidden modal-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="fixed lg:absolute top-3 right-3 z-20 p-2 bg-[var(--card-bg)]/90 rounded-[var(--radius-md)] hover:bg-[var(--card-bg)] transition-colors border-2 border-[var(--card-border)]"
                aria-label="Close"
              >
                <X size={20} className="text-[var(--text-primary)]" />
              </button>

              {/* Layout: stacked on mobile, side-by-side on desktop */}
              <div className="flex flex-col lg:flex-row lg:h-full lg:max-h-[90vh]">

                {/* ── Image Slider Panel ── */}
                <div className="lg:w-1/2 bg-[var(--card-bg)] relative flex items-center justify-center min-h-[260px] sm:min-h-[320px] lg:h-auto lg:min-h-[600px] flex-shrink-0 border-b-[2px] lg:border-b-0 lg:border-r-[3px] border-[var(--card-border)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center p-4 lg:p-8"
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
                        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 p-1.5 lg:p-2 bg-[var(--card-bg)]/90 rounded-[var(--radius-md)] hover:bg-[var(--card-bg)] transition-colors border-2 border-[var(--card-border)]"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} className="text-[var(--text-primary)]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 p-1.5 lg:p-2 bg-[var(--card-bg)]/90 rounded-[var(--radius-md)] hover:bg-[var(--card-bg)] transition-colors border-2 border-[var(--card-border)]"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} className="text-[var(--text-primary)]" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-1.5 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-[var(--button-primary-bg)] w-5"
                                : "bg-[var(--button-primary-bg)]/30 w-1.5"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* ── Content Panel ── */}
                <div className="lg:w-1/2 lg:overflow-y-auto modal-scrollbar p-5 sm:p-6 lg:p-12 border-t-[2px] lg:border-t-0 lg:border-l-[3px] border-[var(--card-border)]/20 pb-8">
                  {/* Category Badge */}
                  <div className="mb-3 lg:mb-4 mt-1 lg:mt-0">
                    <span
                      className="inline-block px-3 py-1 rounded-lg text-xs font-medium text-white border-2 border-white/20"
                      style={{ backgroundColor: categoryColor }}
                    >
                      {category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-[var(--text-primary)] mb-3 lg:mb-4 pr-8 lg:pr-0">
                    {title}
                  </h2>

                  {/* Short Description */}
                  <p className="text-[var(--text-secondary)] text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Detailed Description */}
                  <div className="mb-4 lg:mb-6">
                    <h3 className="text-base lg:text-lg font-medium text-[var(--text-primary)] mb-2 lg:mb-3">
                      Project Details
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm lg:text-base leading-relaxed">
                      {detailedDescription}
                    </p>
                  </div>

                  {/* Impact */}
                  {impact && (
                    <div className="mb-4 lg:mb-6">
                      <h3 className="text-base lg:text-lg font-medium text-[var(--text-primary)] mb-2 lg:mb-3">
                        Impact & Results
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm lg:text-base leading-relaxed">
                        {impact}
                      </p>
                    </div>
                  )}

                  {/* Achievements */}
                  {achievements && achievements.length > 0 && (
                    <div className="mb-4 lg:mb-6">
                      <h3 className="text-base lg:text-lg font-medium text-[var(--text-primary)] mb-2 lg:mb-3">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-[var(--text-secondary)] text-sm lg:text-base"
                          >
                            <span className="text-[var(--accent-green)] mt-1 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4 lg:mb-6">
                    <h3 className="text-base lg:text-lg font-medium text-[var(--text-primary)] mb-2 lg:mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-1.5 lg:gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] text-xs lg:text-sm rounded-lg border border-[var(--card-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(link || (githubRepos && githubRepos.length > 0)) && (
                    <div className="flex flex-wrap gap-2 lg:gap-3 pt-4 border-t border-[var(--card-border)]/10">
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 lg:px-6 lg:py-3 bg-[var(--button-primary-bg)] text-white rounded-[var(--radius-md)] hover:bg-[var(--card-shadow)] transition-colors border-2 border-[var(--card-border)] font-medium text-sm"
                        >
                          <ExternalLink size={16} />
                          Visit Project
                        </a>
                      )}
                      {githubRepos && githubRepos.map((repo, index) => (
                        <a
                          key={index}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 lg:px-6 lg:py-3 bg-white border-2 border-[var(--card-border)] text-[var(--text-primary)] rounded-[var(--radius-md)] hover:shadow-[var(--shadow-sm)] transition-all font-medium text-sm"
                        >
                          <Github size={16} />
                          {githubRepos.length > 1 ? `Code (${repo.label})` : 'View Code'}
                        </a>
                      ))}
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

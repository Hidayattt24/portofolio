"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Trophy,
  Calendar,
  Award,
  Medal,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  description: string;
  images?: string[];
  award: string;
  organizer: string;
  detailedDescription?: string;
  achievements?: string[];
  link?: string;
}

export default function AchievementModal({
  isOpen,
  onClose,
  title,
  category,
  categoryColor,
  date,
  description,
  images = [],
  award,
  organizer,
  detailedDescription,
  achievements,
  link,
}: AchievementModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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

          {/* Modal wrapper — fullscreen on mobile, centered on desktop */}
          <div className="fixed inset-0 z-50 flex items-start lg:items-center justify-center p-0 lg:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-none lg:rounded-[var(--radius-xl)] shadow-2xl border-0 lg:border-[3px] border-[var(--card-border)] w-full lg:max-w-6xl h-full lg:h-auto lg:max-h-[90vh] overflow-y-auto lg:overflow-hidden modal-scrollbar"
            >
              {/* Close Button — fixed on mobile so always visible */}
              <button
                onClick={onClose}
                className="fixed lg:absolute top-3 right-3 z-20 p-2 bg-white/90 rounded-[var(--radius-md)] hover:bg-white transition-colors border-2 border-[var(--card-border)]"
                aria-label="Close"
              >
                <X size={20} className="text-[var(--text-primary)]" />
              </button>

              {/* Layout: stacked on mobile, side-by-side on desktop */}
              <div className="flex flex-col lg:flex-row lg:h-full lg:max-h-[90vh]">

                {/* ── Image / Trophy Panel ── */}
                <div className="lg:w-1/2 bg-[var(--card-bg)] relative flex items-center justify-center h-[220px] sm:h-[280px] lg:h-auto lg:min-h-[600px] flex-shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center p-4 lg:p-8"
                    >
                      {images.length > 0 && images[currentImageIndex] ? (
                        <img
                          src={images[currentImageIndex]}
                          alt={`${title} - Image ${currentImageIndex + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      ) : (
                        <Trophy size={80} className="text-[var(--card-shadow)]/30 lg:w-[120px] lg:h-[120px]" />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 p-1.5 lg:p-2 bg-white/90 rounded-[var(--radius-md)] hover:bg-white transition-colors border-2 border-[var(--card-border)]"
                        aria-label="Previous"
                      >
                        <ChevronLeft size={18} className="text-[var(--text-primary)]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 p-1.5 lg:p-2 bg-white/90 rounded-[var(--radius-md)] hover:bg-white transition-colors border-2 border-[var(--card-border)]"
                        aria-label="Next"
                      >
                        <ChevronRight size={18} className="text-[var(--text-primary)]" />
                      </button>

                      {/* Dots */}
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

                      {/* Counter */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 text-white text-xs rounded-lg backdrop-blur-md border border-white/10">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </>
                  )}

                  {/* Award badge — top right of image panel */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--button-primary-bg)] text-white text-xs font-medium rounded-lg backdrop-blur-md border-2 border-white/20 max-w-[140px] lg:max-w-none">
                    <Medal size={14} className="flex-shrink-0" />
                    <span className="truncate">{award}</span>
                  </div>

                  {/* Category badge when no image */}
                  {!images.length && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                      <span
                        className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium text-white border-2 border-white/20 backdrop-blur-md"
                        style={{ backgroundColor: categoryColor }}
                      >
                        {category}
                      </span>
                    </div>
                  )}
                </div>

                {/* ── Content Panel ── */}
                <div className="lg:w-1/2 lg:overflow-y-auto modal-scrollbar p-5 sm:p-6 lg:p-12 border-t-[2px] lg:border-t-0 lg:border-l-[3px] border-[var(--card-border)]/20 pb-8">
                  {/* Category Badge */}
                  <div className="mb-3 lg:mb-4 mt-1 lg:mt-0">
                    <span
                      className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium text-white border-2 border-white/20"
                      style={{ backgroundColor: categoryColor }}
                    >
                      {category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--text-primary)] mb-3 lg:mb-4 pr-8 lg:pr-0">
                    {title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 lg:gap-4 mb-4 lg:mb-6">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 lg:w-5 lg:h-5 text-[var(--accent-green)] flex-shrink-0" />
                      <span className="text-xs lg:text-sm text-[var(--text-primary)] font-medium">
                        {organizer}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-[var(--text-secondary)] flex-shrink-0" />
                      <span className="text-xs lg:text-sm text-[var(--text-secondary)]">
                        {date}
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-[var(--text-secondary)] text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Detailed Description */}
                  {detailedDescription && (
                    <div className="mb-4 lg:mb-6">
                      <h3 className="text-base lg:text-lg font-medium text-[var(--text-primary)] mb-2 lg:mb-3">
                        Details
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm lg:text-base leading-relaxed">
                        {detailedDescription}
                      </p>
                    </div>
                  )}

                  {/* Achievements List */}
                  {achievements && achievements.length > 0 && (
                    <div className="mb-4 lg:mb-6">
                      <h3 className="text-base lg:text-lg font-medium text-[var(--text-primary)] mb-2 lg:mb-3">
                        Key Highlights
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

                  {/* Link Button */}
                  {link && (
                    <div className="pt-4 border-t border-[var(--card-border)]/10">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 lg:px-6 lg:py-3 bg-[var(--button-primary-bg)] text-white rounded-[var(--radius-md)] hover:bg-[var(--card-shadow)] transition-colors border-2 border-[var(--card-border)] font-medium text-sm"
                      >
                        <ExternalLink size={16} />
                        View Certificate
                      </a>
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

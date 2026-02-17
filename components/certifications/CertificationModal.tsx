'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Calendar, Building2, ExternalLink, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  description: string;
  images?: string[];
  skills: string[];
  detailedDescription?: string;
  competencies?: string[];
  verificationLink?: string;
}

export default function CertificationModal({
  isOpen,
  onClose,
  title,
  issuer,
  issueDate,
  expiryDate,
  credentialId,
  description,
  images = [],
  skills,
  detailedDescription,
  competencies,
  verificationLink,
}: CertificationModalProps) {
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
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-[var(--radius-xl)] shadow-2xl border-[3px] border-[var(--card-border)] w-full max-w-4xl max-h-[90vh] overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-[var(--radius-md)] hover:bg-white transition-colors border-2 border-[var(--card-border)]"
              >
                <X size={24} className="text-[var(--text-primary)]" />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                {/* Left: Image Slider */}
                <div className="lg:w-2/5 bg-[var(--card-bg)] relative flex items-center justify-center min-h-[300px] lg:min-h-[600px]">
                  {/* Image Slider */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center p-8"
                    >
                      {images.length > 0 && images[currentImageIndex] ? (
                        <img
                          src={images[currentImageIndex]}
                          alt={`${title} - Image ${currentImageIndex + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      ) : (
                        <Shield size={120} className="text-[var(--card-shadow)]/30" />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-[var(--radius-md)] hover:bg-white transition-colors border-2 border-[var(--card-border)]"
                      >
                        <ChevronLeft size={24} className="text-[var(--text-primary)]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-[var(--radius-md)] hover:bg-white transition-colors border-2 border-[var(--card-border)]"
                      >
                        <ChevronRight size={24} className="text-[var(--text-primary)]" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-[var(--button-primary-bg)] w-6'
                                : 'bg-[var(--button-primary-bg)]/30 w-2'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Image Count Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-xs rounded-lg backdrop-blur-md border border-white/10">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </>
                  )}

                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-[var(--accent-green)] text-white text-sm font-medium rounded-lg backdrop-blur-md border-2 border-white/20">
                    <Shield size={18} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:w-3/5 overflow-y-auto p-8 lg:p-12">
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] mb-3">
                    {title}
                  </h2>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-6">
                    <Building2 className="w-6 h-6 text-[var(--accent-green)]" />
                    <span className="text-lg text-[var(--text-primary)] font-medium">
                      {issuer}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[var(--text-secondary)]" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        Issued: {issueDate}
                      </span>
                    </div>
                    {expiryDate && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[var(--text-secondary)]" />
                        <span className="text-sm text-[var(--text-secondary)]">
                          Expires: {expiryDate}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Credential ID */}
                  <div className="mb-6 p-3 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)]">
                    <span className="text-xs text-[var(--text-secondary)] block mb-1">
                      Credential ID
                    </span>
                    <span className="font-mono text-sm text-[var(--text-primary)]">
                      {credentialId}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-[var(--text-secondary)] text-base mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Detailed Description */}
                  {detailedDescription && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">
                        About This Certification
                      </h3>
                      <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                        {detailedDescription}
                      </p>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">
                      Skills Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[var(--card-bg)] text-[var(--text-primary)] text-sm rounded-lg border border-[var(--card-border)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Competencies */}
                  {competencies && competencies.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-[var(--text-primary)] mb-3">
                        Competencies Validated
                      </h3>
                      <ul className="space-y-2">
                        {competencies.map((competency, index) => (
                          <li key={index} className="flex items-start gap-2 text-[var(--text-secondary)]">
                            <CheckCircle className="w-5 h-5 text-[var(--accent-green)] flex-shrink-0 mt-0.5" />
                            <span>{competency}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Verification Button */}
                  {verificationLink && (
                    <div className="pt-4 border-t border-[var(--card-border)]/10">
                      <a
                        href={verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--button-primary-bg)] text-white rounded-[var(--radius-md)] hover:bg-[var(--card-shadow)] transition-colors border-2 border-[var(--card-border)] font-medium"
                      >
                        <ExternalLink size={18} />
                        Verify Certificate
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

'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Quote, Star, Briefcase, Building2,
  ChevronLeft, ChevronRight, Github, ExternalLink,
  Youtube, Play, Newspaper, Image as ImageIcon,
} from 'lucide-react';
import Image from 'next/image';
import type { NewsArticle } from '@/data/collabs-reviews';

interface CollabsReviewsModalProps {
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
  newsLinks?: NewsArticle[];
}

type MediaTab = 'photos' | 'video' | 'news';

/** Extract YouTube video ID from any YT URL format */
function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/v\/([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function CollabsReviewsModal({
  isOpen, onClose,
  name, role, company, image,
  testimonial, fullTestimonial,
  rating, date, project,
  projectImages = [],
  youtubeLink, githubLink,
  newsLinks = [],
}: CollabsReviewsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<MediaTab>('photos');

  const youtubeId = youtubeLink ? getYouTubeId(youtubeLink) : null;

  // Build tabs dynamically based on what data is available
  const tabs: { id: MediaTab; label: string; icon: React.ReactNode }[] = [
    ...(projectImages.length > 0
      ? [{ id: 'photos' as MediaTab, label: 'Foto', icon: <ImageIcon size={14} /> }]
      : []),
    ...(youtubeId
      ? [{ id: 'video' as MediaTab, label: 'Video', icon: <Youtube size={14} /> }]
      : []),
    ...(newsLinks.length > 0
      ? [{ id: 'news' as MediaTab, label: 'Berita', icon: <Newspaper size={14} /> }]
      : []),
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'true');
      setCurrentImageIndex(0);
      // Default to first available tab
      if (projectImages.length > 0) setActiveTab('photos');
      else if (youtubeId) setActiveTab('video');
      else if (newsLinks.length > 0) setActiveTab('news');
    } else {
      document.body.style.overflow = 'unset';
      document.body.removeAttribute('data-modal-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.removeAttribute('data-modal-open');
    };
  }, [isOpen]);

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
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-[var(--card-bg)] rounded-none lg:rounded-[var(--radius-xl)] shadow-2xl border-0 lg:border-[3px] border-[var(--card-border)] w-full lg:max-w-6xl h-full lg:h-auto lg:max-h-[90vh] overflow-y-auto lg:overflow-hidden modal-scrollbar"
            >
              {/* Close Button — fixed on mobile so always visible */}
              <button
                onClick={onClose}
                className="fixed lg:absolute top-3 right-3 z-20 p-2 bg-[var(--card-bg)]/90 rounded-[var(--radius-md)] hover:bg-[var(--card-bg)] transition-colors border-2 border-[var(--card-border)]"
                aria-label="Close modal"
              >
                <X size={20} className="text-[var(--text-primary)]" />
              </button>

              <div className="flex flex-col lg:flex-row lg:h-full lg:max-h-[90vh]">

                {/* ── LEFT: Media Panel ── */}
                <div className="lg:w-1/2 bg-[var(--card-bg)] relative flex flex-col min-h-[260px] sm:min-h-[320px] lg:min-h-[600px] flex-shrink-0 border-b-[2px] lg:border-b-0 lg:border-r-[3px] border-[var(--card-border)]">

                  {/* Tab Bar — only show if more than 1 tab available */}
                  {tabs.length > 1 && (
                    <div className="flex border-b-[2px] border-[var(--card-border)]/30 px-4 pt-3 gap-1 flex-shrink-0">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-t-lg text-sm font-medium transition-all border-b-2 -mb-[2px] ${
                            activeTab === tab.id
                              ? 'border-[var(--button-primary-bg)] text-[var(--button-primary-bg)] bg-white/30'
                              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          {tab.icon}
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Panel Content */}
                  <div className="flex-1 relative flex flex-col items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">

                      {/* ── PHOTOS TAB ── */}
                      {activeTab === 'photos' && projectImages.length > 0 && (
                        <motion.div
                          key="photos"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-full flex flex-col items-center justify-center p-6 min-h-[250px] lg:min-h-[480px]"
                        >
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentImageIndex}
                              src={projectImages[currentImageIndex]}
                              alt={`Project screenshot ${currentImageIndex + 1}`}
                              initial={{ opacity: 0, x: 40 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -40 }}
                              transition={{ duration: 0.25 }}
                              className="max-w-full max-h-full object-contain rounded-lg"
                            />
                          </AnimatePresence>

                          {projectImages.length > 1 && (
                            <>
                              <button
                                onClick={() => setCurrentImageIndex(p => p === 0 ? projectImages.length - 1 : p - 1)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[var(--card-bg)]/90 rounded-[var(--radius-md)] hover:bg-[var(--card-bg)] transition-colors border-2 border-[var(--card-border)]"
                                aria-label="Previous"
                              >
                                <ChevronLeft size={22} className="text-[var(--text-primary)]" />
                              </button>
                              <button
                                onClick={() => setCurrentImageIndex(p => p === projectImages.length - 1 ? 0 : p + 1)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[var(--card-bg)]/90 rounded-[var(--radius-md)] hover:bg-[var(--card-bg)] transition-colors border-2 border-[var(--card-border)]"
                                aria-label="Next"
                              >
                                <ChevronRight size={22} className="text-[var(--text-primary)]" />
                              </button>
                              {/* Dots */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {projectImages.map((_, i) => (
                                  <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className={`h-2 rounded-full transition-all ${
                                      i === currentImageIndex
                                        ? 'bg-[var(--button-primary-bg)] w-6'
                                        : 'bg-[var(--button-primary-bg)]/30 w-2'
                                    }`}
                                  />
                                ))}
                              </div>
                              {/* Counter */}
                              <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                                {currentImageIndex + 1} / {projectImages.length}
                              </div>
                            </>
                          )}
                        </motion.div>
                      )}

                      {/* ── VIDEO TAB ── */}
                      {activeTab === 'video' && youtubeId && (
                        <motion.div
                          key="video"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-full flex items-center justify-center p-6 min-h-[280px] lg:min-h-[480px]"
                        >
                          <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-[var(--card-border)]/50 shadow-lg">
                            <iframe
                              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* ── NEWS TAB ── */}
                      {activeTab === 'news' && newsLinks.length > 0 && (
                        <motion.div
                          key="news"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-full overflow-y-auto modal-scrollbar p-4 flex flex-col gap-4"
                        >
                          {newsLinks.map((article, idx) => (
                            <a
                              key={idx}
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex flex-col bg-white/60 hover:bg-white/90 rounded-2xl border-2 border-[var(--card-border)]/40 hover:border-[var(--card-border)] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-md)]"
                            >
                              {/* Thumbnail */}
                              {article.image ? (
                                <div className="relative w-full aspect-video overflow-hidden">
                                  <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                  />
                                  {/* Source badge */}
                                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-[var(--text-primary)] border border-[var(--card-border)]/30">
                                    <Newspaper size={10} />
                                    {article.source}
                                  </div>
                                </div>
                              ) : (
                                /* No image: source badge as header */
                                <div className="flex items-center gap-2 px-4 pt-3">
                                  <div className="flex items-center gap-1.5 bg-[var(--button-primary-bg)]/10 px-2.5 py-1 rounded-full text-xs font-semibold text-[var(--button-primary-bg)]">
                                    <Newspaper size={10} />
                                    {article.source}
                                  </div>
                                </div>
                              )}

                              {/* Content */}
                              <div className="p-4 flex flex-col gap-2">
                                <h4 className="text-sm font-semibold text-[var(--text-primary)] leading-snug line-clamp-3 group-hover:text-[var(--accent-green)] transition-colors">
                                  {article.title}
                                </h4>
                                {article.excerpt && (
                                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                  </p>
                                )}
                                <div className="flex items-center justify-between mt-1">
                                  {article.date && (
                                    <span className="text-xs text-[var(--text-muted)]">{article.date}</span>
                                  )}
                                  <span className="text-xs text-[var(--accent-green)] font-medium flex items-center gap-1 ml-auto group-hover:gap-2 transition-all">
                                    Baca Selengkapnya <ExternalLink size={10} />
                                  </span>
                                </div>
                              </div>
                            </a>
                          ))}
                        </motion.div>
                      )}

                      {/* ── FALLBACK (no media at all) ── */}
                      {tabs.length === 0 && (
                        <motion.div
                          key="fallback"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex flex-col items-center justify-center gap-4 p-8"
                        >
                          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--accent-green)]">
                            <Image src={image} alt={name} fill className="object-cover" />
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>
                </div>

                {/* ── RIGHT: Content (scrollable) ── */}
                <div className="lg:w-1/2 lg:overflow-y-auto modal-scrollbar p-5 sm:p-6 lg:p-10 pb-8">

                  {/* Person Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--accent-green)] flex-shrink-0">
                      <Image src={image} alt={name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[var(--text-primary)]">{name}</h3>
                      <p className="text-[var(--text-secondary)] flex items-center gap-2 mt-0.5 text-sm">
                        <Briefcase className="w-3.5 h-3.5" />{role}
                      </p>
                      <p className="text-[var(--text-secondary)] flex items-center gap-2 mt-0.5 text-sm">
                        <Building2 className="w-3.5 h-3.5" />{company}
                      </p>
                    </div>
                  </div>

                  {/* Rating & Date */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-[var(--text-muted)]'
                          }`}
                        />
                      ))}
                    </div>
                    {date && <span className="text-sm text-[var(--text-secondary)]">{date}</span>}
                  </div>

                  {/* Project Info */}
                  {project && (
                    <div className="mb-5 p-3 bg-white/40 rounded-xl border border-[var(--card-border)]/30">
                      <p className="text-xs text-[var(--text-secondary)] mb-0.5">Project</p>
                      <p className="text-[var(--text-primary)] font-medium text-sm">{project}</p>
                    </div>
                  )}

                  {/* Quick Access Links */}
                  {(youtubeId || githubLink || newsLinks.length > 0) && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {youtubeId && (
                        <button
                          onClick={() => setActiveTab('video')}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <Play className="w-4 h-4 fill-white" />
                          Tonton Demo
                        </button>
                      )}
                      {newsLinks.length > 0 && (
                        <button
                          onClick={() => setActiveTab('news')}
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--button-primary-bg)] hover:opacity-90 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <Newspaper className="w-4 h-4" />
                          {newsLinks.length} Liputan Berita
                        </button>
                      )}
                      {githubLink && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[var(--card-border)] text-[var(--text-primary)] rounded-lg transition-colors text-sm font-medium hover:shadow-md"
                        >
                          <Github className="w-4 h-4" />
                          Repository
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Divider */}
                  <div className="border-t border-[var(--card-border)]/20 mb-5" />

                  {/* Quote */}
                  <Quote className="w-8 h-8 text-[var(--accent-green)] opacity-40 mb-3" />

                  {/* Full Testimonial */}
                  <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line text-base">
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

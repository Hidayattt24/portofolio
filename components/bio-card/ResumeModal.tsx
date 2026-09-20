"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl,
}: ResumeModalProps) {
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

          {/* Modal wrapper */}
          <div className="fixed inset-0 z-50 flex items-start lg:items-center justify-center p-0 lg:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[var(--card-bg)] rounded-none lg:rounded-[var(--radius-xl)] shadow-2xl border-0 lg:border-[3px] border-[var(--card-border)] w-full lg:max-w-4xl h-full lg:h-auto lg:max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-[var(--card-border)]/20 flex-shrink-0">
                <h2 className="text-base sm:text-lg font-medium text-[var(--text-primary)]">
                  Resume
                </h2>
                <div className="flex items-center gap-2">
                  <a
                    href={resumeUrl}
                    download
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--button-primary-bg)] text-white rounded-[var(--radius-md)] hover:opacity-90 transition-opacity text-xs sm:text-sm font-medium"
                  >
                    <Download size={16} />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border-2 border-[var(--card-border)] text-[var(--text-primary)] rounded-[var(--radius-md)] hover:shadow-[var(--shadow-sm)] transition-all text-xs sm:text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span className="hidden sm:inline">Open in new tab</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="p-2 bg-[var(--card-bg)]/90 rounded-[var(--radius-md)] hover:bg-[var(--card-bg)] transition-colors border-2 border-[var(--card-border)]"
                    aria-label="Close"
                  >
                    <X size={20} className="text-[var(--text-primary)]" />
                  </button>
                </div>
              </div>

              {/* PDF Preview */}
              <div className="flex-1 bg-neutral-100 dark:bg-neutral-900">
                <iframe
                  src={resumeUrl}
                  title="Resume Preview"
                  className="w-full h-full min-h-[60vh] lg:min-h-[70vh]"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

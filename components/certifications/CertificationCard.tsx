"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  description: string;
  images?: string[];
  skills: string[];
  verificationLink?: string;
  index: number;
  onViewDetails: () => void;
}

export default function CertificationCard({
  title,
  issuer,
  issueDate,
  description,
  images = [],
  skills,
  index,
  onViewDetails,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-[var(--card-bg)] rounded-[var(--radius-xl)] border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 group"
    >
      {/* Image Preview */}
      <div className="relative h-40 md:h-48 overflow-hidden rounded-t-[var(--radius-xl)] bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-shadow)]">
        {images.length > 0 && images[0] ? (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Shield size={48} className="text-[var(--card-shadow)]/30" />
          </div>
        )}

        {/* Verified Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[var(--accent-green)] text-white text-xs font-medium rounded-lg border-2 border-white/20">
          <Shield size={12} />
          <span>Verified</span>
        </div>

        {/* Image Count Badge */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/70 text-white text-xs rounded-lg backdrop-blur-md border border-white/10">
            {images.length} Images
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <Eye size={32} className="mx-auto mb-1" />
            <p className="text-xs font-medium">View Details</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Issuer */}
        <div className="mb-2">
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-[var(--accent-green)] text-white border-2 border-white/20">
            {issuer}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-normal text-[var(--text-primary)] mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-xs mb-3 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Issue Date */}
        <p className="text-[var(--text-muted)] text-xs mb-3">
          Issued: {issueDate}
        </p>

        {/* Skills Preview */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-white text-[var(--text-primary)] text-xs rounded-lg border border-[var(--card-border)]"
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="px-2 py-0.5 text-[var(--text-muted)] text-xs">
              +{skills.length - 3}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <motion.button
          onClick={onViewDetails}
          className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[var(--button-primary-bg)] text-white rounded-[var(--radius-md)] text-sm font-medium hover:bg-[var(--card-shadow)] transition-colors border-2 border-[var(--card-border)]"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Eye size={16} />
          View Certificate
        </motion.button>
      </div>
    </motion.div>
  );
}

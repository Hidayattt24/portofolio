'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';
import CollabsReviewsCard from './CollabsReviewsCard';
import CollabsReviewsModal from './CollabsReviewsModal';
import { collabs } from '@/data/collabs-reviews';

export default function CollabsReviewsSection() {
  const [selectedEntry, setSelectedEntry] = useState<typeof collabs[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (entry: typeof collabs[0]) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEntry(null), 300);
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
            Collabs & Reviews
          </h1>
        </div>
        <p className="text-lg text-[var(--text-secondary)]">
          What collaborators & clients say about working with me
        </p>
      </motion.div>

      {/* Collabs & Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collabs.map((entry, index) => (
          <CollabsReviewsCard
            key={index}
            {...entry}
            index={index}
            onReadMore={() => handleReadMore(entry)}
          />
        ))}
      </div>

      {/* Collabs & Reviews Modal */}
      {selectedEntry && (
        <CollabsReviewsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          {...selectedEntry}
        />
      )}
    </div>
  );
}

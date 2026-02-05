'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  showPulse?: boolean;
}

export default function Badge({ children, showPulse = true }: BadgeProps) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 bg-[var(--status-available)] text-white text-xs md:text-sm px-4 py-2.5 rounded-full shadow-lg shadow-[var(--status-available)]/20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      {showPulse && (
        <motion.span
          className="w-2 h-2 bg-green-300 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

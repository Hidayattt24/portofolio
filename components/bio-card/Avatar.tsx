'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  src?: string;
  alt?: string;
}

export default function Avatar({ size = 'md', src, alt = 'Avatar' }: AvatarProps) {
  const sizes = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28 md:w-32 md:h-32',
    lg: 'w-36 h-36 md:w-44 md:h-44',
  };

  return (
    <motion.div
      className={`${sizes[size]} rounded-full bg-gradient-to-br from-[#25343F] to-black flex-shrink-0 shadow-lg overflow-hidden`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full" />
      )}
    </motion.div>
  );
}

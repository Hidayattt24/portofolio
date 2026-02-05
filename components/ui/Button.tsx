'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'px-8 py-3.5 rounded-xl text-base font-normal flex items-center gap-2 justify-center';

  const variants = {
    primary: 'bg-[var(--button-primary-bg)] text-[var(--button-primary-text)]',
    secondary: 'bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] border-2 border-[var(--button-secondary-border)]/20',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{
        scale: 1.02,
        y: -2,
        ...(variant === 'secondary' && { borderColor: 'rgba(37, 52, 63, 0.4)' }),
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  );
}

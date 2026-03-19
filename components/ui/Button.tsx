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
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  className = '',
  href,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'px-8 py-3.5 rounded-xl text-base font-normal flex items-center gap-2 justify-center cursor-pointer';

  const variants = {
    primary: 'bg-[var(--button-primary-bg)] text-[var(--button-primary-text)]',
    secondary: 'bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] border-2 border-[var(--button-secondary-border)]/20',
  };

  const motionProps = {
    className: `${baseStyles} ${variants[variant]} ${className}`,
    whileHover: {
      scale: 1.02,
      y: -2,
      ...(variant === 'secondary' && { borderColor: 'rgba(37, 52, 63, 0.4)' }),
    },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  const content = (
    <>
      {Icon && <Icon size={20} />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a {...motionProps} href={href} target={target} rel={rel}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} onClick={onClick}>
      {content}
    </motion.button>
  );
}

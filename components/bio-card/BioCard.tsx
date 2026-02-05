'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Avatar from './Avatar';
import Badge from './Badge';
import DiagonalMarquee from './DiagonalMarquee';
import ActionButtons from './ActionButtons';

export default function BioCard() {
  const t = useTranslations('bio');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-4xl mx-auto bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] sm:shadow-[var(--shadow-lg)] relative"
    >
      {/* Diagonal Marquee */}
      <div className="absolute inset-0 overflow-hidden rounded-[var(--radius-xl)]">
        <DiagonalMarquee text="LET'S BUILD SOMETHING AMAZING TOGETHER! • " />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none rounded-[var(--radius-xl)]" />

      <div className="relative z-20 flex flex-col gap-8">
        {/* Header Section */}
        <motion.div
          className="flex items-start gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Avatar size="md" />

          <div className="flex-1">
            {/* Name */}
            <motion.h1
              className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('name')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg text-[var(--text-primary)]/80 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('subtitle')}
            </motion.p>

            {/* Status Badge */}
            <Badge showPulse>{t('status')}</Badge>
          </div>
        </motion.div>

        {/* Tagline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)] mb-4 leading-snug">
            {t('tagline1')}
            <br />
            {t('tagline2')}
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {t('description')}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <ActionButtons />
      </div>
    </motion.div>
  );
}

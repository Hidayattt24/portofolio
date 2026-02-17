'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Globe2 } from 'lucide-react';

interface Language {
  name: string;
  level: string;
  proficiency: number; // 0-100
  flag: string;
}

export default function Languages() {
  const t = useTranslations('languages');

  const languages: Language[] = [
    {
      name: t('lang1.name'),
      level: t('lang1.level'),
      proficiency: parseInt(t('lang1.proficiency')),
      flag: '🇮🇩',
    },
    {
      name: t('lang2.name'),
      level: t('lang2.level'),
      proficiency: parseInt(t('lang2.proficiency')),
      flag: '🇬🇧',
    },
    {
      name: t('lang3.name'),
      level: t('lang3.level'),
      proficiency: parseInt(t('lang3.proficiency')),
      flag: '🇯🇵',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="w-full bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)]"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-8"
      >
        {t('title')}
      </motion.h2>

      <div className="space-y-6">
        {languages.map((language, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 + index * 0.15, duration: 0.5 }}
            className="bg-white rounded-[var(--radius-md)] p-6 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{language.flag}</div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-medium text-[var(--text-primary)]">
                    {language.name}
                  </h3>
                  <span className="text-sm font-medium text-[var(--accent-green)] bg-[var(--card-bg)] px-3 py-1 rounded-lg border border-[var(--card-border)]">
                    {language.level}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative w-full h-3 bg-[var(--card-bg)] rounded-full border border-[var(--card-border)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${language.proficiency}%` }}
                    transition={{ delay: 1.2 + index * 0.15, duration: 0.8, ease: 'easeOut' }}
                    className="absolute top-0 left-0 h-full bg-[var(--accent-green)] rounded-full"
                  />
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-[var(--text-secondary)]">
                    {t('proficiency')}
                  </span>
                  <span className="text-xs font-medium text-[var(--text-primary)]">
                    {language.proficiency}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-6 p-4 bg-white rounded-xl border-2 border-[var(--card-border)] flex items-center gap-3"
      >
        <Globe2 className="w-5 h-5 text-[var(--accent-green)]" />
        <p className="text-sm text-[var(--text-secondary)]">
          {t('note')}
        </p>
      </motion.div>
    </motion.section>
  );
}

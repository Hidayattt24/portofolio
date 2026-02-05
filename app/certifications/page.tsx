'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function CertificationsPage() {
  const t = useTranslations('certifications');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)]"
    >
      <h1 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-6">
        {t('title')}
      </h1>
      <p className="text-lg text-[var(--text-secondary)]">
        {t('comingSoon')}
      </p>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Phone, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '../ui/Button';

export default function ActionButtons() {
  const t = useTranslations('bio');

  return (
    <motion.div
      className="flex flex-wrap gap-4 relative z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      <Button variant="primary" icon={Phone}>
        {t('collaboration')}
      </Button>
      <Button variant="secondary" icon={Download}>
        {t('resume')}
      </Button>
    </motion.div>
  );
}

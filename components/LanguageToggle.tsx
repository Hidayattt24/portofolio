'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { setLocale } from '@/app/actions/locale';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    
    startTransition(async () => {
      await setLocale(newLocale);
      router.refresh();
    });
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-xl p-1 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] flex gap-1">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLocaleChange('en')}
          disabled={isPending}
          className={`
            relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex-1
            ${locale === 'en' 
              ? 'text-white' 
              : 'text-[var(--text-primary)] hover:bg-[var(--accent-light)]'
            }
            disabled:opacity-50
          `}
        >
          {locale === 'en' && (
            <motion.div
              layoutId="activeLocale"
              className="absolute inset-0 bg-[var(--button-primary-bg)] rounded-lg"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Image 
              src="https://kapowaz.github.io/circle-flags/flags/gb.svg" 
              alt="English"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>EN</span>
          </span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLocaleChange('id')}
          disabled={isPending}
          className={`
            relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex-1
            ${locale === 'id' 
              ? 'text-white' 
              : 'text-[var(--text-primary)] hover:bg-[var(--accent-light)]'
            }
            disabled:opacity-50
          `}
        >
          {locale === 'id' && (
            <motion.div
              layoutId="activeLocale"
              className="absolute inset-0 bg-[var(--button-primary-bg)] rounded-lg"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Image 
              src="https://kapowaz.github.io/circle-flags/flags/id.svg" 
              alt="Indonesia"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>ID</span>
          </span>
        </motion.button>
      </div>
    </div>
  );
}

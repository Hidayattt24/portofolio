'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Home,
  User, 
  Award, 
  Briefcase,
  Mail,
  Trophy,
  FileCheck,
  MessageSquareQuote
} from 'lucide-react';
import LanguageToggle from '../LanguageToggle';

const navItems = [
  { name: 'home', path: '/home', icon: Home },
  { name: 'about', path: '/about', icon: User },
  { name: 'experience', path: '/experience', icon: Award },
  { name: 'projects', path: '/projects', icon: Briefcase },
  { name: 'achievements', path: '/achievements', icon: Trophy },
  { name: 'certifications', path: '/certifications', icon: FileCheck },
  { name: 'testimonials', path: '/testimonials', icon: MessageSquareQuote },
  { name: 'contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const t = useTranslations('nav');

  return (
    <motion.nav
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[320px] bg-[var(--card-bg)] rounded-[var(--radius-lg)] p-6 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] sticky top-8 flex flex-col"
    >
      <div className="flex flex-col gap-2 flex-1">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          const isHovered = hoveredItem === item.name;

          return (
            <Link
              key={item.path}
              href={item.path}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`
                  relative flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-300 cursor-pointer
                  ${isActive 
                    ? 'bg-[var(--button-primary-bg)] text-white shadow-md' 
                    : 'text-[var(--text-primary)] hover:bg-[var(--accent-light)]'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-[var(--button-primary-bg)] rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                <Icon 
                  className={`relative z-10 w-5 h-5 transition-transform duration-300 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`} 
                />
                
                <span className="relative z-10 font-medium">
                  {t(item.name)}
                </span>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-auto"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path 
                        d="M7 10L9 12L13 8" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            </Link>
          );
        })}

        {/* Language Toggle */}
        <div className="mt-2 pt-2 border-t-2 border-[var(--card-border)]/20">
          <LanguageToggle />
        </div>
      </div>

      {/* Footer - At the bottom of navbar card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-auto pt-6 border-t-2 border-[var(--card-border)]/20"
      >
        <p className="text-xs text-[var(--text-muted)] text-center">
          {t('copyright')}
        </p>
        <p className="text-xs text-[var(--text-muted)] text-center mt-1">
          {t('rights')}
        </p>
      </motion.div>
    </motion.nav>
  );
}

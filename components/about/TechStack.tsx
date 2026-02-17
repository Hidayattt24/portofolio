'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface TechCategory {
  category: string;
  icon: any;
  color: string;
  technologies: string[];
}

export default function TechStack() {
  const t = useTranslations('techStack');

  const techCategories: TechCategory[] = [
    {
      category: t('frontend.title'),
      icon: Globe,
      color: '#5A7863',
      technologies: [
        t('frontend.tech1'),
        t('frontend.tech2'),
        t('frontend.tech3'),
        t('frontend.tech4'),
      ],
    },
    {
      category: t('backend.title'),
      icon: Server,
      color: '#213448',
      technologies: [
        t('backend.tech1'),
        t('backend.tech2'),
        t('backend.tech3'),
        t('backend.tech4'),
      ],
    },
    {
      category: t('database.title'),
      icon: Database,
      color: '#5A7863',
      technologies: [
        t('database.tech1'),
        t('database.tech2'),
        t('database.tech3'),
        t('database.tech4'),
      ],
    },
    {
      category: t('mobile.title'),
      icon: Smartphone,
      color: '#213448',
      technologies: [
        t('mobile.tech1'),
        t('mobile.tech2'),
        t('mobile.tech3'),
      ],
    },
    {
      category: t('design.title'),
      icon: Palette,
      color: '#5A7863',
      technologies: [
        t('design.tech1'),
        t('design.tech2'),
        t('design.tech3'),
      ],
    },
    {
      category: t('others.title'),
      icon: Code2,
      color: '#213448',
      technologies: [
        t('others.tech1'),
        t('others.tech2'),
        t('others.tech3'),
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)]"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-8"
      >
        {t('title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((category, index) => {
          const Icon = category.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="bg-white rounded-[var(--radius-md)] p-6 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: category.color }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-medium text-[var(--text-primary)]">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                    className="px-3 py-1.5 bg-[var(--card-bg)] text-[var(--text-primary)] text-sm rounded-lg border border-[var(--card-border)] hover:bg-[var(--accent-green)] hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

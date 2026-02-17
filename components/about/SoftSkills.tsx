'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Users, 
  MessageSquare, 
  Lightbulb, 
  Target, 
  Clock, 
  Puzzle,
  Heart,
  TrendingUp
} from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  description: string;
}

export default function SoftSkills() {
  const t = useTranslations('softSkills');

  const iconMap: { [key: string]: any } = {
    Users,
    MessageSquare,
    Lightbulb,
    Target,
    Clock,
    Puzzle,
    Heart,
    TrendingUp,
  };

  const skills: Skill[] = [
    {
      name: t('skill1.name'),
      icon: iconMap[t('skill1.icon')] || Users,
      description: t('skill1.description'),
    },
    {
      name: t('skill2.name'),
      icon: iconMap[t('skill2.icon')] || MessageSquare,
      description: t('skill2.description'),
    },
    {
      name: t('skill3.name'),
      icon: iconMap[t('skill3.icon')] || Lightbulb,
      description: t('skill3.description'),
    },
    {
      name: t('skill4.name'),
      icon: iconMap[t('skill4.icon')] || Target,
      description: t('skill4.description'),
    },
    {
      name: t('skill5.name'),
      icon: iconMap[t('skill5.icon')] || Clock,
      description: t('skill5.description'),
    },
    {
      name: t('skill6.name'),
      icon: iconMap[t('skill6.icon')] || Puzzle,
      description: t('skill6.description'),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)]"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-8"
      >
        {t('title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-[var(--radius-md)] p-6 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-[var(--accent-green)] rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-medium text-[var(--text-primary)]">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

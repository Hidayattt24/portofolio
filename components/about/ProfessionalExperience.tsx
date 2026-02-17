'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

export default function ProfessionalExperience() {
  const t = useTranslations('professionalExperience');

  // This would ideally come from your data source
  const experiences: Experience[] = [
    {
      company: t('exp1.company'),
      position: t('exp1.position'),
      period: t('exp1.period'),
      location: t('exp1.location'),
      description: [
        t('exp1.desc1'),
        t('exp1.desc2'),
        t('exp1.desc3'),
      ],
    },
    // Add more experiences as needed
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

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            className="bg-white rounded-[var(--radius-md)] p-6 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[var(--button-primary-bg)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-medium text-[var(--text-primary)] mb-1">
                  {exp.position}
                </h3>
                <p className="text-lg text-[var(--accent-green)] font-medium mb-2">
                  {exp.company}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 ml-16">
              {exp.description.map((desc, descIndex) => (
                <li
                  key={descIndex}
                  className="text-base text-[var(--text-secondary)] leading-relaxed flex items-start gap-2"
                >
                  <span className="text-[var(--accent-green)] mt-1.5">•</span>
                  <span className="flex-1">{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

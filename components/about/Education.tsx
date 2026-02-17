'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  achievements?: string[];
}

export default function Education() {
  const t = useTranslations('education');

  const educationList: EducationItem[] = [
    {
      school: t('edu1.school'),
      degree: t('edu1.degree'),
      field: t('edu1.field'),
      period: t('edu1.period'),
      location: t('edu1.location'),
      achievements: [
        t('edu1.achievement1'),
        t('edu1.achievement2'),
      ],
    },
    // Add more education items as needed
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

      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            className="bg-white rounded-[var(--radius-md)] p-6 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[var(--accent-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-medium text-[var(--text-primary)] mb-1">
                  {edu.degree} - {edu.field}
                </h3>
                <p className="text-lg text-[var(--accent-green)] font-medium mb-2">
                  {edu.school}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className="ml-16">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-[var(--accent-green)]" />
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {t('achievements')}
                  </span>
                </div>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="text-base text-[var(--text-secondary)] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[var(--accent-green)] mt-1.5">•</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    school: 'University of Technology',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    period: '2018 - 2022',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Graduated with honors (GPA: 3.8/4.0)',
      'Active member of Programming Club',
      'Won 2nd place in National Hackathon 2021',
      'Research on AI and Machine Learning',
    ],
  },
  {
    school: 'Tech High School',
    degree: 'High School Diploma',
    field: 'Science',
    period: '2015 - 2018',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Top 5% of graduating class',
      'Member of Robotics Team',
    ],
  },
];

export default function EducationSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Header with Toggle */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)]">Education</h2>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-green)] transition-colors px-4 py-2 rounded-lg hover:bg-[var(--card-bg)]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? (
              <>
                <ChevronUp size={20} />
                <span className="text-sm font-medium">Minimize</span>
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                <span className="text-sm font-medium">Expand</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Education Cards */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 overflow-hidden"
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-6 md:p-8 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[var(--accent-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-medium text-[var(--text-primary)] mb-1">
                        {edu.degree} - {edu.field}
                      </h3>
                      <p className="text-lg text-[var(--accent-green)] font-medium mb-3">
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
                    <div className="ml-16 mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-[var(--accent-green)]" />
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          Achievements
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

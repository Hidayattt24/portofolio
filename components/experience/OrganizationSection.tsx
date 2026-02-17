'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Users, Calendar, Award } from 'lucide-react';

interface OrgExperience {
  organization: string;
  position: string;
  period: string;
  achievements: string[];
}

const organizationData: OrgExperience[] = [
  {
    organization: 'Google Developer Student Club',
    position: 'Lead Organizer',
    period: 'Aug 2021 - Jun 2022',
    achievements: [
      'Organized 15+ tech workshops and coding bootcamps',
      'Led a team of 20+ members in community outreach programs',
      'Increased club membership by 150% through effective marketing',
      'Collaborated with industry partners for mentorship programs',
    ],
  },
  {
    organization: 'Campus Programming Community',
    position: 'Vice President',
    period: 'Jan 2020 - Jul 2021',
    achievements: [
      'Mentored 50+ junior developers in web development',
      'Coordinated annual hackathon with 200+ participants',
      'Developed curriculum for beginner programming courses',
    ],
  },
  {
    organization: 'Tech Volunteer Initiative',
    position: 'Active Member',
    period: 'Sep 2019 - Dec 2021',
    achievements: [
      'Taught basic computer skills to underprivileged communities',
      'Contributed to open-source educational projects',
      'Assisted in organizing charity tech events',
    ],
  },
];

export default function OrganizationSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Header with Toggle */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)]">
            Organization Experience
          </h2>
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

        {/* Organization Cards */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 overflow-hidden"
            >
              {organizationData.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-6 md:p-8 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[var(--button-primary-bg)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-medium text-[var(--text-primary)] mb-1">
                        {org.position}
                      </h3>
                      <p className="text-lg text-[var(--accent-green)] font-medium mb-3">
                        {org.organization}
                      </p>
                      
                      <div className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
                        <Calendar className="w-4 h-4" />
                        <span>{org.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-16 mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-[var(--accent-green)]" />
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        Key Contributions
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {org.achievements.map((achievement, achIndex) => (
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
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

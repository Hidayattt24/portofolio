'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Users } from 'lucide-react';
import CompanyExperience from './CompanyExperience';

const organizations = [
  {
    company: 'Himpunan Mahasiswa Informatika (HMIF) USK',
    icon: <Users size={24} className="text-white" />,
    positions: [
      {
        title: 'Head of Student Welfare Management Department',
        duration: 'Feb 2025 - Present',
        location: 'Banda Aceh, Indonesia',
        description:
          'Leading a dynamic team of 14 staff members across two strategic divisions: Student Aspirations and Women Empowerment. Directing the "Kabinet Beyond" welfare initiatives to bridge communication gaps between students and faculty administration. Managing end-to-end execution of departmental programs and cultivating an empowering work environment focused on maximizing team growth and professional development opportunities.',
      },
      {
        title: 'Staff of Student Welfare Management Department',
        duration: 'Feb 2024 - Feb 2025',
        location: 'Banda Aceh, Indonesia',
        description:
          'Actively organized and implemented various departmental programs focused on student well-being and campus life enhancement. Supported the execution of all determined organizational programs with a high level of participation and accountability. Contributed to creating and maintaining a harmonious and productive work environment for the department staff.',
      },
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
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CompanyExperience
                    company={org.company}
                    positions={org.positions}
                    customIcon={org.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

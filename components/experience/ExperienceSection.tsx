'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CompanyExperience from './CompanyExperience';

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    positions: [
      {
        title: 'Senior Full-Stack Developer',
        duration: 'Jan 2023 - Present',
        location: 'Remote',
        description:
          'Led the development of scalable web applications using Next.js, React, and Node.js. Implemented CI/CD pipelines and improved application performance by 40%. Mentored junior developers and conducted code reviews to maintain high code quality standards. Collaborated with cross-functional teams to deliver projects on time and within budget.',
      },
      {
        title: 'Full-Stack Developer',
        duration: 'Jun 2021 - Dec 2022',
        location: 'Remote',
        description:
          'Developed and maintained multiple client-facing applications using React and Express.js. Integrated third-party APIs and payment gateways. Optimized database queries resulting in 30% faster load times.',
      },
    ],
  },
  {
    company: 'Digital Solutions Ltd.',
    positions: [
      {
        title: 'Full-Stack Developer',
        duration: 'Jan 2020 - May 2021',
        location: 'Hybrid',
        description:
          'Built and deployed responsive web applications. Worked closely with design team to implement pixel-perfect UI components. Participated in agile development processes and daily stand-ups.',
      },
    ],
  },
  {
    company: 'StartUp Ventures',
    positions: [
      {
        title: 'Junior Web Developer',
        duration: 'Jun 2019 - Dec 2019',
        location: 'On-site',
        description:
          'Built responsive websites using HTML, CSS, JavaScript, and React. Collaborated with designers to implement pixel-perfect UI components. Fixed bugs and implemented new features based on user feedback.',
      },
    ],
  },
];

export default function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header with Toggle */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)]">Experience</h2>
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

        {/* Experience Cards */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 overflow-hidden"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CompanyExperience {...exp} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

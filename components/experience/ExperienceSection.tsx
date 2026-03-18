'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CompanyExperience from './CompanyExperience';

const experiences = [
  {
    company: 'Universitas Syiah Kuala',
    positions: [
      {
        title: 'Teaching Assistant - Software Development and Operations (DevOps)',
        duration: 'Sep 2025 - Dec 2025',
        location: 'Banda Aceh, Indonesia',
        description:
          'Led practical sessions on Git/GitHub, Docker, and CI/CD with GitHub Actions. Mentored student teams in adopting Agile/SCRUM methodologies and provided hands-on training for system monitoring using Grafana and Redis on Google Cloud Platform.',
      },
      {
        title: 'Teaching Assistant - Software Architecture',
        duration: 'Sep 2025 - Dec 2025',
        location: 'Banda Aceh, Indonesia',
        description:
          'Guided students in system modeling using UML/OCL and the implementation of Creational, Structural, and Behavioral design patterns. Evaluated architectural models and Requirements Engineering (RFA) documentation for major course projects.',
      },
    ],
  },
  {
    company: 'Dinas Komunikasi, Informatika dan Persandian Aceh',
    positions: [
      {
        title: 'AI Engineer Intern (Research & Development)',
        duration: 'Aug 2025 - Sep 2025',
        location: 'Banda Aceh, Indonesia',
        description:
          'Engineered "LawChain," an AI prototype using Retrieval-Augmented Generation (RAG) for legal inquiries. Developed a scalable Backend API using FastAPI and optimized Large Language Models, including Google Gemma 2:2b and LLaMA 3, to improve diagnostic accuracy.',
      },
    ],
  },
  {
    company: 'Coding Camp powered by DBS Foundation',
    positions: [
      {
        title: 'Front-End and Back-End Developer Cohort',
        duration: 'Feb 2025 - Jul 2025',
        location: 'Remote',
        description:
          'Selected for an intensive full-stack program. Engineered "PurrPal," a health innovation platform recognized as a Top 20 Best Capstone Project (Top 5% of 398 submissions). Built seamless interfaces with Next.js and robust RESTful APIs with Express.js.',
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

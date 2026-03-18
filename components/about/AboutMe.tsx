"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)]"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-6"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="space-y-4"
      >
      <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
        I am a final-year Informatics student at <strong>Universitas Syiah Kuala</strong> dedicated to building high-performance digital solutions. As a <strong>National Finalist at LIDM 2025</strong>, I played a key role in developing <strong>Adaptivin</strong>, an AI-powered learning platform, where I managed front-end development, AI integration, and deployment.
      </p>

      <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
        My expertise includes engineering <strong>RAG-based AI prototypes (LawChain)</strong> during my internship at Diskominsa Aceh and co-developing <strong>PurrPal</strong>, which ranked in the <strong>Top 5% (Top 20)</strong> of capstone projects at the DBS Foundation. I specialize in <strong>Next.js</strong> and <strong>Express.js</strong> to build production-ready applications that leverage artificial intelligence.
      </p>

      <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
        As a <strong>Teaching Assistant for Software Architecture and DevOps</strong>, I advocate for maintainable and scalable code using GitHub for collaboration. I am now seeking opportunities to contribute my technical expertise to impactful projects that challenge the boundaries of digital innovation.
      </p>
      </motion.div>
    </motion.section>
  );
}

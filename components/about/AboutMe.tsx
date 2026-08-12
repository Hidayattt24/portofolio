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
        Hi, I'm <strong>Hidayat Nur Hakim</strong>, a Fresh Graduate in Computer Science and Full-Stack Developer from Banda Aceh, Indonesia, with <strong>2+ years of hands-on experience</strong> building AI-integrated web applications across government, healthcare, and education sectors.
      </p>

      <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
        My work includes <strong>LawChain</strong>, a RAG-based legal AI system built during my internship at the Aceh provincial government, using FastAPI, LangChain, and local LLMs. Through the <strong>DBS Foundation Coding Camp</strong>, I helped build <strong>PurrPal</strong>, an AI-powered pet healthcare platform that ranked in the <strong>Top 20 of 398 national teams</strong>. I also developed <strong>ADAPTIVIN</strong>, an adaptive learning platform that became a <strong>National Finalist at LIDM 2025</strong>, and led the development of <strong>BUKADITA</strong>, a digital Posyandu platform serving <strong>50+ local cadres</strong>.
      </p>

      <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
        My technical focus is <strong>Full-Stack and AI Engineering</strong>, with experience in <strong>Go, TypeScript, Next.js, React, Node.js, Express.js, FastAPI, PostgreSQL, Docker</strong>, and <strong>LLM/RAG integrations</strong> using LangChain and Ollama. Beyond engineering, I lead <strong>14 members</strong> as Head of Student Welfare Management at HMIF USK and serve as a Teaching Assistant for <strong>Software Architecture & DevOps</strong>.
      </p>

      <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
        I'm looking for a <strong>Full-Stack or AI Engineering role</strong> where I can turn real-world problems into reliable, scalable software and continue growing as a Software Engineer.
      </p>
      </motion.div>
    </motion.section>
  );
}

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
          Hello! I'm a passionate Full-Stack Developer with a strong focus on
          creating innovative and efficient web solutions.
        </p>

        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
          With expertise in modern web technologies and a deep interest in AI
          and Large Language Models, I build applications that combine
          cutting-edge technology with exceptional user experiences.
        </p>

        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
          I'm constantly learning and exploring new technologies to deliver the
          best solutions for my clients and projects.
        </p>
      </motion.div>
    </motion.section>
  );
}

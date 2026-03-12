"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";
import Badge from "./Badge";
import DiagonalMarquee from "./DiagonalMarquee";
import ActionButtons from "./ActionButtons";

export default function BioCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-4xl mx-auto bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-6 sm:p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)] sm:shadow-[var(--shadow-lg)] relative"
    >
      {/* Diagonal Marquee */}
      <div className="absolute inset-0 overflow-hidden rounded-[var(--radius-xl)]">
        <DiagonalMarquee text="LET'S BUILD SOMETHING AMAZING TOGETHER! • " />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none rounded-[var(--radius-xl)]" />

      <div className="relative z-20 flex flex-col gap-6 md:gap-8">
        {/* Header Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Avatar size="md" />

          <div className="flex-1 w-full">
            {/* Name */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hidayat Nur Hakim
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-[var(--text-primary)]/80 mb-3 sm:mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full-Stack Developer | AI & LLM Enthusiast
            </motion.p>

            {/* Status Badge */}
            <Badge showPulse>Available to Works Or Collaboration</Badge>
          </div>
        </motion.div>

        {/* Tagline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[var(--text-primary)] mb-3 md:mb-4 leading-snug">
            Your Digital Vision,
            <br />
            Perfectly Realized.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            From concept to launch, I create websites with stunning visuals,
            seamless user experiences, and expert development in Webflow and
            Framer.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <ActionButtons />
      </div>
    </motion.div>
  );
}

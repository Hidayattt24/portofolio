'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

interface DiagonalMarqueeProps {
  text: string;
  speed?: number;
}

export default function DiagonalMarquee({ text, speed = 40 }: DiagonalMarqueeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="absolute z-10 hidden sm:flex bg-[#5A7863] py-4 text-white w-screen text-3xl font-bold rotate-45 -top-16 -right-[420px] pointer-events-none"
    >
      <Marquee gradient={false} speed={speed}>
        {text}
      </Marquee>
    </motion.div>
  );
}

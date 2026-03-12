"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { socialLinks } from "@/data/home";

const iconMap: Record<string, any> = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  x: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const colorMap: Record<string, string> = {
  linkedin: "#0A66C2",
  github: "#25343F",
  x: "#000000",
  instagram: "#E4405F",
};

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-6 md:p-8 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)]"
    >
      <h2 className="text-xl sm:text-2xl font-normal text-[var(--text-primary)] mb-4 sm:mb-6">
        Connect With Me
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {socialLinks.map((social, index) => {
          const Icon = iconMap[social.icon] || Github;
          const color = colorMap[social.icon] || "#25343F";

          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] hover:shadow-[6px_6px_0px_var(--card-shadow)] transition-all duration-300 flex flex-col items-center gap-2 sm:gap-3 group"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: `${color}15` }}
              >
                <div
                  className="transition-transform duration-300 group-hover:scale-110 w-5 h-5 sm:w-6 sm:h-6"
                  style={{ color }}
                >
                  <Icon />
                </div>
              </div>

              <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] text-center">
                {social.name}
              </span>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Phone, Download } from "lucide-react";
import Button from "../ui/Button";

export default function ActionButtons() {
  return (
    <motion.div
      className="flex flex-wrap gap-4 relative z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      <Button
        variant="primary"
        icon={Phone}
        href="https://www.linkedin.com/in/hidayat-nur-hakim/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Collaboration
      </Button>
      <Button
        variant="secondary"
        icon={Download}
        href="/home/Hidayat Nur Hakim-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>
    </motion.div>
  );
}

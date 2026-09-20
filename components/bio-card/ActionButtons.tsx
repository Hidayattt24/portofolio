"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Download } from "lucide-react";
import Button from "../ui/Button";
import ResumeModal from "./ResumeModal";

export default function ActionButtons() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
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
          onClick={() => setIsResumeOpen(true)}
        >
          Resume
        </Button>
      </motion.div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/home/Hidayat Nur Hakim-resume.pdf"
      />
    </>
  );
}

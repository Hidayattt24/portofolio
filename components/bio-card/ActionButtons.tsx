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
      <Button variant="primary" icon={Phone}>
        Collaboration
      </Button>
      <Button variant="secondary" icon={Download}>
        Resume
      </Button>
    </motion.div>
  );
}

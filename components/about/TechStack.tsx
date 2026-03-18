"use client";

import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Server,
  Brain,
  Cloud,
  Layout,
} from "lucide-react";

interface TechCategory {
  category: string;
  icon: any;
  color: string;
  technologies: string[];
}

export default function TechStack() {
const techCategories: TechCategory[] = [
    {
      category: "Frontend",
      icon: Globe,
      color: "#5A7863",
      technologies: [
        "React / Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      icon: Server,
      color: "#213448",
      technologies: ["Node.js / Express.js", "Python", "FastAPI", "RESTful APIs"],
    },
    {
      category: "AI & Machine Learning",
      icon: Brain, // Ganti Code2 menjadi Brain jika tersedia di library icon kamu
      color: "#5A7863",
      technologies: [
        "RAG (Retrieval-Augmented Generation)",
        "Google Gemma / LLaMA",
        "LangChain",
        "TensorFlow / Scikit-learn",
      ],
    },
    {
      category: "Database",
      icon: Database,
      color: "#213448",
      technologies: ["PostgreSQL", "Supabase", "FAISS (Vector Store)", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud, // Ganti Smartphone menjadi Cloud jika tersedia
      color: "#5A7863",
      technologies: [
        "Docker",
        "CI/CD (GitHub Actions)",
        "Google Cloud Platform (GCP)",
        "Monitoring (Grafana)",
      ],
    },
    {
      category: "System Design",
      icon: Layout, // Ganti Palette menjadi Layout/Pencil
      color: "#213448",
      technologies: ["Software Architecture", "Design Patterns", "UML / OCL", "Figma"],
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)]"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-8"
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="bg-white rounded-[var(--radius-md)] p-6 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: category.color }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-medium text-[var(--text-primary)]">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                    className="px-3 py-1.5 bg-[var(--card-bg)] text-[var(--text-primary)] text-sm rounded-lg border border-[var(--card-border)] hover:bg-[var(--accent-green)] hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  Clock,
  Puzzle,
  Heart,
} from "lucide-react";

interface Skill {
  name: string;
  icon: any;
  description: string;
}

export default function SoftSkills() {
  const iconMap: { [key: string]: any } = {
    Users,
    MessageSquare,
    Lightbulb,
    TrendingUp,
    Clock,
    Puzzle,
    Heart,
  };

  const skills: Skill[] = [
    {
      name: "Teamwork",
      icon: Users,
      description:
        "Collaborating effectively with cross-functional teams to achieve common goals",
    },
    {
      name: "Communication",
      icon: MessageSquare,
      description:
        "Clearly conveying ideas and technical concepts to both technical and non-technical audiences",
    },
    {
      name: "Problem Solving",
      icon: Lightbulb,
      description:
        "Analyzing complex problems and developing innovative solutions",
    },
    {
      name: "Adaptability",
      icon: TrendingUp,
      description:
        "Quickly learning and adapting to new technologies and changing requirements",
    },
    {
      name: "Time Management",
      icon: Clock,
      description:
        "Efficiently managing multiple projects and meeting deadlines",
    },
    {
      name: "Critical Thinking",
      icon: Puzzle,
      description:
        "Making informed decisions through logical analysis and evaluation",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full bg-[var(--card-bg)] rounded-[var(--radius-xl)] p-8 md:p-12 border-[3px] border-[var(--card-border)] shadow-[var(--shadow-md)]"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-8"
      >
        Soft Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-[var(--radius-md)] p-6 border-2 border-[var(--card-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-[var(--accent-green)] rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-medium text-[var(--text-primary)]">
                  {skill.name}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import AchievementCard from './AchievementCard';
import AchievementModal from './AchievementModal';

interface Achievement {
  title: string;
  category: 'competition';
  date: string;
  description: string;
  detailedDescription: string;
  achievements?: string[];
  images?: string[];
  award: string;
  organizer: string;
  link?: string;
}

const COMPETITION_COLOR = '#4A90E2';

const achievements: Achievement[] = [
  {
    title: 'Top 20 Best Capstone Project - DBS Foundation Coding Camp',
    category: 'competition',
    date: 'August 2025',
    description: 'Recognized as one of the top 20 best projects out of 600+ teams nationwide by developing PurrPal, an innovative AI-driven healthcare platform for cats.',
    detailedDescription: 'Developed PurrPal, a comprehensive cat healthcare solution that utilizes a Dual AI Architecture. The system integrates Computer Vision for skin disease detection and Tabular Analytics for systemic disease prediction, providing pet owners with 24/7 initial diagnostic insights.',
    achievements: [
      'Successfully competed against 600+ participants to secure a position in the Top 20 Best Capstone Projects',
      'Developed a high-accuracy Dual AI system using TensorFlow and Google Vertex AI for feline health diagnostics',
      'Built a scalable full-stack application using Next.js 15 and Google Cloud Run for optimal performance',
      'Received professional validation for both technical implementation and real-world health-tech impact',
    ],
    images: ['/achievements/purrpal-1.png', '/achievements/purrpal-2.png'],
    award: 'Top 20 Best Capstone',
    organizer: 'DBS Foundation x Dicoding Indonesia',
    link: 'https://drive.google.com/file/d/1bD4ULI0hVl6mpDN45_OZieQiCSMG7FLF/view?usp=sharing',
  },
  {
    title: '2nd Winner - Web Programming Competition (INFINITERA 1.0)',
    category: 'competition',
    date: 'July 2025',
    description: 'Secured second place in a national-level Web Programming competition by developing Velora, an AI-powered pregnancy companion platform.',
    detailedDescription: 'Velora is a comprehensive digital replacement for the maternal and child health book (Buku KIA). It features AI-based health risk diagnosis, interactive pregnancy timelines, and automated gallery backups. As the Front-End & Fullstack Developer, I built the entire user interface, interactive workflows, and system logic integrations.',
    achievements: [
      'Awarded 2nd Winner among national participants in the Web Programming category',
      'Engineered an AI-powered diagnostic tool to detect early pregnancy health risks with high accuracy',
      'Developed a seamless user experience including an interactive timeline and cloud-based pregnancy gallery',
      'Integrated complex system logic with a modern, accessible interface tailored for Indonesian expectant mothers',
    ],
    images: ['/achievements/dara-1.png', '/achievements/dara-2.png'],
    award: '2nd Winner',
    organizer: 'Himpunan Mahasiswa Teknik Informatika Universitas Islam Sultan Agung',
    link: 'https://drive.google.com/file/d/1bD4ULI0hVl6mpDN45_OZieQiCSMG7FLF/view?usp=sharing',
  },
  {
    title: 'Finalist - INFEST XI Hackathon',
    category: 'competition',
    date: 'October 2025',
    description: 'Selected as a national finalist in the INFEST XI Hackathon by developing GajiBersih, an AI-powered legal and financial transparency platform, during an intensive 42-hour nonstop hackathon.',
    detailedDescription: 'GajiBersih is an innovative platform developed within a 42-hour nonstop coding marathon to help employees understand complex labor contracts. The system integrates OpenAI API for automated contract scanning and risk identification, coupled with a precise payroll engine that complies with Indonesian labor regulations regarding BPJS and PPh21 tax.',
    achievements: [
      'Successfully reached the Finalist stage in the INFEST XI National Hackathon after a 42-hour nonstop development sprint',
      'Integrated OpenAI API to automatically scan PDF/DOCX contracts and identify critical clauses or legal risks',
      'Developed a transparent payroll calculation engine covering BPJS and PPh21 tax components',
      'Implemented a context-aware "Ask AI" feature for interactive legal consultation based on specific user documents',
    ],
    images: ['/achievements/gaji-bersih-1.png', '/achievements/gaji-bersih-2.png', '/achievements/gaji-bersih-3.png', '/achievements/gaji-bersih-4.png'],
    award: 'Top 10 Finalist',
    organizer: 'INFEST XI (Informatics Festival)',
    link: 'https://drive.google.com/file/d/1ORmfDxgUdYa7JENEGfriqjajWbKvybxe/view?usp=sharing',
  },
  {
    title: 'National Finalist - LIDM 2025 (ITDP Division)',
    category: 'competition',
    date: 'December 2025',
    description: 'Secured a position as a National Top 20 Finalist in the Digital Education Technology Innovation (ITDP) division at LIDM 2025, emerging from a competitive pool of over 400+ registered teams across Indonesia.',
    detailedDescription: 'LIDM (Lomba Inovasi Digital Mahasiswa) is a prestigious national competition organized by Puspresnas-Kemendikbudristek that challenges students to create digital solutions for educational transformation. Out of 400+ nationwide entries, Adaptivin was recognized for its innovative Rule-Based Adaptive Learning System that addresses the numeracy gap in primary education through real-time difficulty scaling and AI-driven insights.',
    achievements: [
      'Successfully advanced to the National Finalist stage, ranking in the Top 20 out of 400+ competing teams nationwide',
      'Developed a sophisticated Rule-Based Engine to personalize mathematics learning for primary school students',
      'Integrated Google Gemini AI for automated misconception detection and personalized student learning reports',
      'Demonstrated high impact through field trials at SDN 16 Banda Aceh, receiving professional validation for its pedagogical and technical stability',
    ],
    images: [
      '/achievements/adaptivin-1.png',
      '/achievements/adaptivin-2.png',
      '/achievements/adaptivin-3.png',
      '/achievements/adaptivin-4.png',
      '/achievements/adaptivin-5.png',
    ],
    award: 'Top 20 Finalist',
    organizer: 'Pusat Prestasi Nasional (Puspresnas) - Kemendikbudristek',
    link: 'https://drive.google.com/file/d/1QY6HE1K-SoNaBxhxTTQt2HahImIRJote/view?usp=sharing',
  },
];

export default function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedAchievement(null), 300);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-[var(--accent-green)]" />
          <h1 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)]">
            Achievements
          </h1>
        </div>
        <p className="text-lg text-[var(--text-secondary)]">
          Recognitions, awards, and certifications earned throughout my journey
        </p>
      </motion.div>

      {/* Achievements List - Single Column */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-6"
      >
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            {...achievement}
            categoryColor={COMPETITION_COLOR}
            index={index}
            onViewDetails={() => handleViewDetails(achievement)}
          />
        ))}
      </motion.div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <AchievementModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedAchievement.title}
          category={selectedAchievement.category}
          categoryColor={COMPETITION_COLOR}
          date={selectedAchievement.date}
          description={selectedAchievement.description}
          detailedDescription={selectedAchievement.detailedDescription}
          achievements={selectedAchievement.achievements}
          images={selectedAchievement.images}
          award={selectedAchievement.award}
          organizer={selectedAchievement.organizer}
          link={selectedAchievement.link}
        />
      )}
    </div>
  );
}

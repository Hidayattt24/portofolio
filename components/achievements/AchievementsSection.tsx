'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import AchievementCard from './AchievementCard';
import AchievementModal from './AchievementModal';

interface Achievement {
  title: string;
  category: 'hackathon' | 'competition' | 'certification' | 'award';
  date: string;
  description: string;
  detailedDescription: string;
  achievements?: string[];
  images?: string[];
  award: string;
  organizer: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: 'First Place - National Hackathon 2023',
    category: 'hackathon',
    date: 'November 2023',
    description: 'Won first place among 150+ teams by developing an AI-powered healthcare solution that helps diagnose medical conditions using machine learning and computer vision.',
    detailedDescription: 'Developed a comprehensive AI-powered healthcare platform that leverages machine learning and computer vision to assist medical professionals in diagnosing various conditions. The solution includes features for image analysis, patient data management, and real-time collaboration between healthcare providers.',
    achievements: [
      'Led a team of 5 developers in a 48-hour intensive hackathon',
      'Implemented advanced computer vision algorithms using TensorFlow',
      'Achieved 94% accuracy in preliminary medical image classification',
      'Pitched solution to panel of industry experts and investors',
    ],
    images: ['/achievements/hackathon-2023.jpg', '/achievements/hackathon-2023-team.jpg', '/achievements/hackathon-2023-demo.jpg'],
    award: '1st Place',
    organizer: 'Tech Innovation Summit',
    link: 'https://example.com/certificate',
  },
  {
    title: 'Best UI/UX Design - Web Development Competition',
    category: 'competition',
    date: 'August 2023',
    description: 'Awarded for exceptional user interface and user experience design in a web application competition. Created an intuitive and accessible design system.',
    detailedDescription: 'Designed and developed a complete design system from scratch, focusing on accessibility, usability, and modern aesthetics. The project included comprehensive component libraries, style guides, and documentation that received praise from judges for its attention to detail and user-centric approach.',
    achievements: [
      'Created a fully accessible design system compliant with WCAG 2.1 AA standards',
      'Designed 50+ reusable UI components with dark mode support',
      'Conducted user testing with 25+ participants',
      'Achieved 98% satisfaction rate in usability testing',
    ],
    images: ['/achievements/web-comp-2023.jpg', '/achievements/web-comp-2023-design.jpg'],
    award: 'Best Design',
    organizer: 'Digital Creators Festival',
  },
  {
    title: 'Google Cloud Professional Certificate',
    category: 'certification',
    date: 'June 2023',
    description: 'Completed comprehensive Google Cloud Platform certification program, demonstrating proficiency in cloud architecture, deployment, and management.',
    detailedDescription: 'Successfully completed the rigorous Google Cloud Professional certification program, covering advanced topics in cloud architecture, infrastructure design, security implementation, and cost optimization. The certification validates expertise in designing, developing, and managing robust, secure, scalable applications on Google Cloud Platform.',
    achievements: [
      'Mastered GCP core services including Compute Engine, Cloud Storage, and BigQuery',
      'Learned to design highly available and fault-tolerant cloud architectures',
      'Gained expertise in cloud security and compliance best practices',
      'Completed hands-on labs and real-world case study projects',
    ],
    images: ['/achievements/gcp-cert.jpg'],
    award: 'Certified',
    organizer: 'Google Cloud',
    link: 'https://cloud.google.com/certification',
  },
  {
    title: 'Outstanding Contribution Award',
    category: 'award',
    date: 'March 2023',
    description: 'Recognized for outstanding contribution to the university programming community through mentorship, workshop organization, and open-source contributions.',
    detailedDescription: 'Honored with the Outstanding Contribution Award for exceptional dedication to fostering the university programming community. This recognition acknowledges contributions in mentoring junior students, organizing technical workshops, and maintaining open-source projects that benefited hundreds of students.',
    achievements: [
      'Mentored 50+ students in web development and programming fundamentals',
      'Organized 12 technical workshops with 500+ total attendees',
      'Contributed to 15+ open-source projects benefiting the student community',
      'Established coding bootcamp program for first-year students',
    ],
    images: ['/achievements/contribution-2023.jpg'],
    award: 'Outstanding',
    organizer: 'University Tech Club',
  },
  {
    title: 'Second Place - Mobile App Challenge',
    category: 'competition',
    date: 'December 2022',
    description: 'Developed a cross-platform mobile application using React Native that addresses environmental sustainability through gamification.',
    detailedDescription: 'Created an innovative mobile application that encourages sustainable living practices through gamification and social features. The app tracks users\' eco-friendly activities, provides educational content about environmental issues, and builds a community of environmentally conscious individuals.',
    achievements: [
      'Developed cross-platform app serving iOS and Android users',
      'Implemented gamification system with achievements and leaderboards',
      'Integrated real-time data tracking for carbon footprint calculation',
      'Acquired 1,000+ beta testers during the competition period',
    ],
    images: ['/achievements/mobile-app-2022.jpg', '/achievements/mobile-app-2022-screens.jpg'],
    award: '2nd Place',
    organizer: 'Startup Weekend',
  },
  {
    title: 'AWS Solutions Architect Associate',
    category: 'certification',
    date: 'October 2022',
    description: 'Achieved AWS Solutions Architect Associate certification, demonstrating expertise in designing distributed systems and applications on Amazon Web Services.',
    detailedDescription: 'Earned the AWS Solutions Architect Associate certification, validating comprehensive understanding of AWS services and best practices for architecting scalable, highly available, and fault-tolerant systems on the AWS platform. The certification demonstrates proficiency in selecting appropriate AWS services for specific use cases.',
    achievements: [
      'Mastered AWS core services: EC2, S3, RDS, Lambda, and more',
      'Learned to design cost-optimized and performance-efficient architectures',
      'Gained expertise in AWS security, identity, and compliance services',
      'Completed practical scenarios and hands-on labs',
    ],
    images: ['/achievements/aws-cert.jpg'],
    award: 'Certified',
    organizer: 'Amazon Web Services',
    link: 'https://aws.amazon.com/certification',
  },
];

const categories = {
  all: { label: 'All Achievements', color: '#25343F' },
  hackathon: { label: 'Hackathons', color: '#D4AF37' },
  competition: { label: 'Competitions', color: '#4A90E2' },
  certification: { label: 'Certifications', color: '#5A7863' },
  award: { label: 'Awards', color: '#9B59B6' },
};

type CategoryType = keyof typeof categories;

export default function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredAchievements =
    selectedCategory === 'all'
      ? achievements
      : achievements.filter((achievement) => achievement.category === selectedCategory);

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

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-3">
          {(Object.keys(categories) as CategoryType[]).map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-[var(--radius-md)] text-sm font-medium transition-all border-2 ${
                selectedCategory === category
                  ? 'text-white border-[var(--card-border)] shadow-[var(--shadow-sm)]'
                  : 'bg-white text-[var(--text-primary)] border-[var(--card-border)] hover:shadow-[var(--shadow-sm)]'
              }`}
              style={{
                backgroundColor:
                  selectedCategory === category ? categories[category].color : undefined,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {categories[category].label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Achievements List - Single Column */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col gap-6"
      >
        {filteredAchievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            {...achievement}
            categoryColor={categories[achievement.category].color}
            index={index}
            onViewDetails={() => handleViewDetails(achievement)}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-[var(--card-bg)] rounded-[var(--radius-xl)] border-[3px] border-[var(--card-border)]"
        >
          <Trophy size={64} className="mx-auto mb-4 text-[var(--card-shadow)]/30" />
          <p className="text-lg text-[var(--text-secondary)]">
            No achievements found in this category
          </p>
        </motion.div>
      )}

      {/* Achievement Modal */}
      {selectedAchievement && (
        <AchievementModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedAchievement.title}
          category={selectedCategory === 'all' ? selectedAchievement.category : selectedCategory}
          categoryColor={categories[selectedAchievement.category].color}
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

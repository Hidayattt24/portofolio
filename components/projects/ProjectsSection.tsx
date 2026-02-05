'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter, { ProjectCategory, categories } from './CategoryFilter';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Sample projects data - strategically positioned for HR
const projects = [
  // Client Work - Shows professional experience
  {
    id: 1,
    category: 'client' as ProjectCategory,
    title: 'E-Commerce Platform for Local Business',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    detailedDescription:
      'Developed a comprehensive e-commerce platform for a local retail business, featuring real-time inventory tracking, multi-payment gateway integration (Stripe, PayPal), and admin dashboard. Implemented responsive design ensuring seamless experience across devices.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe API', 'Tailwind CSS', 'Prisma'],
    images: [], // Add your project images here
    impact:
      'Increased client revenue by 45% within 3 months. Reduced manual inventory errors by 90%. Processed over 1000 transactions in first month.',
    achievements: [
      'Delivered 2 weeks ahead of schedule',
      'Client satisfaction rating: 5/5',
      'Zero critical bugs post-launch',
      'Ongoing maintenance contract secured',
    ],
    link: '',
    github: '',
  },
  {
    id: 2,
    category: 'client' as ProjectCategory,
    title: 'Corporate Dashboard & Analytics',
    description: 'Real-time analytics dashboard for enterprise client with data visualization.',
    detailedDescription:
      'Built an enterprise-grade analytics dashboard featuring real-time data processing, interactive charts, and customizable reports. Integrated with multiple data sources and implemented role-based access control.',
    images: [],
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Redis', 'Chart.js'],
    impact:
      'Improved decision-making speed by 60%. Reduced report generation time from hours to seconds.',
    achievements: [
      'Handled 100K+ data points efficiently',
      'Successfully trained 50+ employees',
      'Received testimonial for documentation quality',
    ],
    link: '',
    github: '',
  },

  // Competitions - Shows problem-solving and innovation
  {
    id: 3,
    category: 'competition' as ProjectCategory,
    title: 'Smart City IoT Solution - Hackathon Winner',
    description: 'IoT-based smart parking system that won 1st place in national hackathon.',
    detailedDescription:
      'Developed an innovative IoT solution for urban parking management using sensor networks, real-time data processing, and mobile app integration. System predicts parking availability and optimizes traffic flow.',
    images: [],
    technologies: ['Python', 'Arduino', 'React Native', 'Firebase', 'TensorFlow', 'MQTT'],
    impact: 'Pitched to city government. Potential to reduce parking search time by 40%.',
    achievements: [
      '1st Place - National Smart City Hackathon 2024',
      'Featured in tech news publications',
      'Received funding offer for further development',
      'Patent application filed',
    ],
    link: '',
    github: '',
  },
  {
    id: 4,
    category: 'competition' as ProjectCategory,
    title: 'AI-Powered Medical Diagnosis Tool',
    description: 'Machine learning model for early disease detection - Top 3 finalist.',
    detailedDescription:
      'Created ML model for early detection of skin conditions using computer vision. Achieved 92% accuracy on test dataset. Built user-friendly web interface for healthcare professionals.',
    images: [],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'PostgreSQL'],
    impact: '92% accuracy rate. Potential to assist 1000+ patients annually.',
    achievements: [
      'Top 3 Finalist - HealthTech Innovation Challenge',
      'Collaboration offer from hospital',
      'Presentation at medical conference',
    ],
    link: '',
    github: '',
  },

  // Social Impact - Shows values and community service
  {
    id: 5,
    category: 'social' as ProjectCategory,
    title: 'Education Platform for Underprivileged Students',
    description: 'Free online learning platform serving 500+ students in rural areas.',
    detailedDescription:
      'Developed a comprehensive e-learning platform providing free educational resources to students in underserved communities. Features include video lessons, interactive quizzes, progress tracking, and mentor matching system.',
    images: [],
    technologies: ['Next.js', 'MongoDB', 'AWS S3', 'WebRTC', 'Tailwind CSS'],
    impact: 'Served 500+ students. 85% improvement in exam scores. Expanded to 3 regions.',
    achievements: [
      'Partnered with 5 NGOs',
      'Trained 20 volunteer teachers',
      'Featured in local media',
      'Received community service award',
    ],
    link: '',
    github: '',
  },
  {
    id: 6,
    category: 'social' as ProjectCategory,
    title: 'Disaster Relief Coordination System',
    description: 'Emergency response platform helping coordinate relief efforts during natural disasters.',
    detailedDescription:
      'Built a real-time coordination platform for disaster relief operations, connecting volunteers, resources, and affected communities. Features include resource tracking, volunteer management, and emergency alerts.',
    images: [],
    technologies: ['React', 'Firebase', 'Google Maps API', 'Twilio', 'PWA'],
    impact: 'Used during 2 major disasters. Coordinated 200+ volunteers. Distributed aid to 1000+ families.',
    achievements: [
      'Deployed within 48 hours of disaster',
      'Recognized by disaster management authority',
      'Open-sourced for other communities',
    ],
    link: '',
    github: '',
  },

  // Personal Projects - Shows initiative and continuous learning
  {
    id: 7,
    category: 'personal' as ProjectCategory,
    title: 'Open Source UI Component Library',
    description: 'Reusable React component library with 50+ components, 1K+ GitHub stars.',
    detailedDescription:
      'Created and maintained a comprehensive UI component library focused on accessibility and performance. Full TypeScript support, extensive documentation, and Storybook integration.',
    images: [],
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup', 'CSS-in-JS'],
    impact: '1000+ GitHub stars. 50+ contributors. Used by 100+ projects worldwide.',
    achievements: [
      'Featured in weekly JavaScript newsletter',
      '95% test coverage',
      'Complete documentation with examples',
      'Active community of contributors',
    ],
    link: '',
    github: '',
  },
  {
    id: 8,
    category: 'personal' as ProjectCategory,
    title: 'Developer Productivity CLI Tool',
    description: 'Command-line tool automating repetitive development tasks, 500+ downloads.',
    detailedDescription:
      'Built a CLI tool that automates common development workflows including project scaffolding, code generation, and deployment. Supports multiple frameworks and integrates with popular services.',
    images: [],
    technologies: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer', 'Chalk'],
    impact: 'Saves average 2 hours per developer per week. 500+ npm downloads.',
    achievements: [
      'Published on npm',
      'Positive reviews from dev community',
      'Continuous updates based on feedback',
      'Used in 3 companies',
    ],
    link: '',
    github: '',
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryColor = (category: ProjectCategory) => {
    return categories.find((c) => c.id === category)?.color || '#25343F';
  };

  return (
    <section className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] mb-3">Projects</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Diverse portfolio showcasing professional work, competitive achievements, social impact, and personal innovation
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <ProjectCard
                  title={project.title}
                  category={
                    categories.find((c) => c.id === project.category)?.label || project.category
                  }
                  description={project.description}
                  detailedDescription={project.detailedDescription}
                  technologies={project.technologies}
                  images={project.images}
                  impact={project.impact}
                  achievements={project.achievements}
                  link={project.link}
                  github={project.github}
                  categoryColor={getCategoryColor(project.category)}
                  onViewDetails={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-muted)]">No projects found in this category.</p>
          </div>
        )}
      </motion.div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          category={categories.find((c) => c.id === selectedProject.category)?.label || selectedProject.category}
          categoryColor={getCategoryColor(selectedProject.category)}
          images={selectedProject.images}
          description={selectedProject.description}
          detailedDescription={selectedProject.detailedDescription}
          technologies={selectedProject.technologies}
          impact={selectedProject.impact}
          achievements={selectedProject.achievements}
          link={selectedProject.link}
          github={selectedProject.github}
        />
      )}
    </section>
  );
}

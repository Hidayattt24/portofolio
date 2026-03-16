'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter, { ProjectCategory, categories } from './CategoryFilter';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects as projectsData } from '@/data/projects';

type TransformedProject = {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  images: string[];
  impact: string;
  achievements: string[];
  link: string;
  githubRepos: { label: string; url: string }[];
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<TransformedProject | null>(null);

  // Transform data projects to match component structure
  const projects = projectsData.map((project) => ({
    id: project.id,
    category: project.category,
    title: project.title,
    description: project.description,
    detailedDescription: project.longDescription,
    technologies: project.technologies,
    images: project.images,
    impact: project.highlights?.join('. ') || '',
    achievements: project.highlights || [],
    link: project.demoUrl || '',
    githubRepos: project.githubRepos || [],
  }));

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
          githubRepos={selectedProject.githubRepos}
        />
      )}
    </section>
  );
}

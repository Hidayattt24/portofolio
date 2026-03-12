export interface AboutData {
  title: string;
  introduction: string;
  bio: string[];
  image: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  level: number; // 1-5
  icon?: string;
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
}

export const aboutData: AboutData = {
  title: 'About Me',
  introduction: 'Passionate developer with a love for creating elegant solutions to complex problems.',
  bio: [
    'I am a full-stack developer with over 5 years of experience building web applications. My journey in tech started with a curiosity about how things work, which led me to pursue computer science.',
    'Throughout my career, I have worked with various technologies and frameworks, always staying up-to-date with the latest trends in web development. I believe in writing clean, maintainable code and following best practices.',
    'When I\'m not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies.',
  ],
  image: '/about/profile.jpg',
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'Next.js', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 5 },
  { name: 'Tailwind CSS', category: 'frontend', level: 5 },
  { name: 'Vue.js', category: 'frontend', level: 4 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 5 },
  { name: 'Python', category: 'backend', level: 4 },
  { name: 'PostgreSQL', category: 'backend', level: 4 },
  { name: 'MongoDB', category: 'backend', level: 4 },
  { name: 'GraphQL', category: 'backend', level: 4 },
  
  // DevOps
  { name: 'Docker', category: 'devops', level: 4 },
  { name: 'Kubernetes', category: 'devops', level: 4 },
  { name: 'AWS', category: 'devops', level: 5 },
  { name: 'CI/CD', category: 'devops', level: 4 },
  { name: 'Terraform', category: 'devops', level: 4 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 5 },
  { name: 'VS Code', category: 'tools', level: 5 },
  { name: 'Figma', category: 'tools', level: 3 },
  { name: 'Jira', category: 'tools', level: 4 },
];

export const interests: Interest[] = [
  {
    title: 'Open Source',
    description: 'Contributing to open-source projects and building tools for the community',
    icon: '🌟',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Exploring the potential of AI and integrating it into web applications',
    icon: '🤖',
  },
  {
    title: 'Technical Writing',
    description: 'Sharing knowledge through blog posts and tutorials',
    icon: '✍️',
  },
  {
    title: 'Mentoring',
    description: 'Helping junior developers grow in their careers',
    icon: '👨‍🏫',
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'web' | 'mobile' | 'ai' | 'devops' | 'other';
  tags: string[];
  technologies: string[];
  images: string[];
  thumbnail: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
  status: 'completed' | 'in-progress' | 'archived';
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management',
    longDescription: 'Built a comprehensive e-commerce solution with features including product catalog, shopping cart, payment integration, order management, and admin dashboard. Implemented real-time inventory updates using WebSockets and optimized for high traffic.',
    category: 'web',
    tags: ['E-Commerce', 'Full-Stack', 'Real-time'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    images: [
      '/projects/ecommerce/screenshot-1.jpg',
      '/projects/ecommerce/screenshot-2.jpg',
      '/projects/ecommerce/screenshot-3.jpg',
    ],
    thumbnail: '/projects/ecommerce/thumbnail.jpg',
    demoUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/username/ecommerce',
    featured: true,
    startDate: '2023-01',
    endDate: '2023-06',
    status: 'completed',
    highlights: [
      'Handles 10,000+ daily active users',
      'Reduced page load time by 50%',
      'Integrated with multiple payment gateways',
      'Implemented advanced search with filters',
    ],
  },
  {
    id: 'proj-2',
    title: 'AI Content Generator',
    description: 'AI-powered tool for generating marketing content using GPT-4',
    longDescription: 'Developed an AI-powered content generation platform that helps marketers create blog posts, social media content, and ad copy. Integrated with OpenAI API and implemented custom prompts for different content types.',
    category: 'ai',
    tags: ['AI', 'GPT-4', 'SaaS'],
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI', 'MongoDB', 'AWS'],
    images: [
      '/projects/ai-content/screenshot-1.jpg',
      '/projects/ai-content/screenshot-2.jpg',
    ],
    thumbnail: '/projects/ai-content/thumbnail.jpg',
    demoUrl: 'https://ai-content-demo.com',
    featured: true,
    startDate: '2023-08',
    status: 'in-progress',
    highlights: [
      'Generated 100,000+ pieces of content',
      'Supports 10+ content types',
      'Multi-language support',
      'Custom brand voice training',
    ],
  },
  {
    id: 'proj-3',
    title: 'DevOps Dashboard',
    description: 'Centralized dashboard for monitoring and managing cloud infrastructure',
    longDescription: 'Created a comprehensive DevOps dashboard that provides real-time monitoring of cloud resources, deployment pipelines, and application metrics. Integrated with AWS, GitHub Actions, and various monitoring tools.',
    category: 'devops',
    tags: ['DevOps', 'Monitoring', 'Cloud'],
    technologies: ['Vue.js', 'Node.js', 'AWS', 'Terraform', 'Prometheus', 'Grafana'],
    images: [
      '/projects/devops-dashboard/screenshot-1.jpg',
      '/projects/devops-dashboard/screenshot-2.jpg',
      '/projects/devops-dashboard/screenshot-3.jpg',
    ],
    thumbnail: '/projects/devops-dashboard/thumbnail.jpg',
    githubUrl: 'https://github.com/username/devops-dashboard',
    featured: true,
    startDate: '2022-09',
    endDate: '2023-03',
    status: 'completed',
    highlights: [
      'Monitors 50+ microservices',
      'Real-time alerts and notifications',
      'Cost optimization recommendations',
      'Automated deployment workflows',
    ],
  },
  {
    id: 'proj-4',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    longDescription: 'Built a modern task management application with features like boards, lists, cards, real-time collaboration, file attachments, and team management. Designed for remote teams to stay organized and productive.',
    category: 'web',
    tags: ['Productivity', 'Collaboration', 'Real-time'],
    technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    images: [
      '/projects/task-app/screenshot-1.jpg',
      '/projects/task-app/screenshot-2.jpg',
    ],
    thumbnail: '/projects/task-app/thumbnail.jpg',
    demoUrl: 'https://task-app-demo.com',
    githubUrl: 'https://github.com/username/task-app',
    featured: false,
    startDate: '2022-03',
    endDate: '2022-08',
    status: 'completed',
    highlights: [
      'Real-time collaboration for teams',
      'Drag-and-drop interface',
      'Mobile responsive design',
      'Offline support with sync',
    ],
  },
  {
    id: 'proj-5',
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with detailed forecasts and maps',
    longDescription: 'Developed a weather application that provides accurate forecasts, interactive maps, and weather alerts. Features include hourly and daily forecasts, radar maps, and location-based weather updates.',
    category: 'mobile',
    tags: ['Mobile', 'API Integration', 'Maps'],
    technologies: ['React Native', 'TypeScript', 'OpenWeather API', 'MapBox'],
    images: [
      '/projects/weather-app/screenshot-1.jpg',
      '/projects/weather-app/screenshot-2.jpg',
    ],
    thumbnail: '/projects/weather-app/thumbnail.jpg',
    githubUrl: 'https://github.com/username/weather-app',
    featured: false,
    startDate: '2021-11',
    endDate: '2022-01',
    status: 'completed',
  },
];

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'devops', label: 'DevOps' },
  { id: 'other', label: 'Other' },
];

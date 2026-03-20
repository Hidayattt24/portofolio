import { ProjectCategory } from '@/components/projects/CategoryFilter';

export interface GitHubRepo {
  label: string; // contoh: 'Frontend', 'Backend', 'ML Model'
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: Exclude<ProjectCategory, 'all'>; // semua category kecuali 'all'
  tags: string[];
  technologies: string[];
  images: string[];
  thumbnail: string;
  demoUrl?: string;
  githubRepos?: GitHubRepo[]; // bisa satu atau banyak repo
  featured: boolean;
  startDate: string;
  endDate?: string;
  status: 'completed' | 'in-progress' | 'archived';
  highlights?: string[];
}

export const projects: Project[] = [
{
    id: 'proj-1',
    title: 'PurrPal - Top 20 Best Capstone Project DBS Foundation Coding Camp 2025',
    description: 'Revolutionary AI-powered cat healthcare platform for early disease detection.',
    longDescription: 'PurrPal integrates a Dual AI Architecture—using Computer Vision for skin disease detection and Tabular Analytics for systemic disease prediction—to provide 24/7 initial medical insights. It features an intelligent Gemini 2.0 chatbot, a supportive community portal, and a comprehensive veterinary directory.',
    category: 'competition',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Health-Tech', 'Top 20 Best Capstone'],
    technologies: ['Next.js 15', 'Express.js', 'TensorFlow', 'Google Vertex AI', 'Supabase', 'Google Cloud Run'],
    images: [
      '/projects/Purppal-1.png',
      '/projects/Purppal-2.png',
      '/projects/Purppal-3.png',
    ],
    thumbnail: '/projects/PurrPal-1.png',
    demoUrl: 'https://fe-purrpal.vercel.app/',
    githubRepos: [
      { label: 'Fullstack', url: 'https://github.com/Hidayattt24/PURRPAL' },
    ],
    featured: true,
    startDate: '2025-02',
    endDate: '2025-07',
    status: 'completed',
    highlights: [
      'Awarded Top 20 Best Capstone Project by DBS Foundation Coding Camp',
      'Achieved 87.3% accuracy for systemic disease analysis and 85.2% for skin detection',
      'Implemented Google Vertex AI Gemini 2.0 for real-time intelligent consultations',
      'Optimized performance with a 95+ Lighthouse score and 99.9% system uptime',
    ],
  },
  {
    id: 'proj-2',
    title: 'Velora - 2nd Winner INFINITERA1.0 ',
    description: 'Comprehensive digital companion platform for pregnancy journeys in Indonesia.',
    longDescription: 'Velora is an award-winning integrated solution for pregnancy documentation, health monitoring, and emotional support. It combines modern technology with a user-centric approach to provide automated gallery backups, interactive milestone tracking, and AI-driven health risk assessments.',
    category: 'competition',
    tags: ['AI Diagnosis', 'Maternal Health', 'Cloud Storage', 'Award Winning'],
    technologies: ['Next.js 14', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'Python ML'],
    images: [
      '/projects/Velora.png',
    ],
    thumbnail: '/projects/Velora-1.png',
    demoUrl: 'https://velora-lake.vercel.app/',
    githubRepos: [
      { label: 'Frontend', url: 'https://github.com/Hidayattt24/FE-Velora' },
      { label: 'Backend', url: 'https://github.com/Hidayattt24/BE-Velora' },
    ],
    featured: true,
    startDate: '2025-02',
    endDate: '2025-07',   
    status: 'completed',
    highlights: [
      '2nd Winner of INFINITERA 1.0 National Competition',
      'Implemented AI health risk prediction with 84.21% accuracy using Python ML',
      'High-performance application with a 95+ Lighthouse score and 100 SEO score',
      'Enterprise-grade security featuring end-to-end encryption and GDPR compliance',
    ],
  },
{
    id: 'proj-3',
    title: 'Taubatku',
    description: 'Comprehensive Android-based prayer times and spiritual journaling application.',
    longDescription: 'Taubatku is a native Android application designed to help Muslims maintain worship consistency. It provides accurate, location-based prayer schedules in real-time, daily Islamic content such as Hadith, and a private digital journal for spiritual reflections and daily notes.',
    category: 'personal',
    tags: ['Android Native', 'Religious-Tech', 'Personal Journal', 'Real-time'],
    technologies: ['Kotlin', 'Firebase Authentication', 'Firebase Firestore', 'Google Location Services', 'Material Design', 'MVVM'],
    images: [
      '/projects/Taubatku.png',
    ],
    thumbnail: '/projects/Taubatku.png',
    githubRepos: [
      { label: 'Frontend', url: 'https://github.com/Hidayattt24/Taubatku' }
    ],
    featured: true,
    startDate: '2025-02',
    endDate: '2025-07',
    status: 'completed',
    highlights: [
      'Implemented real-time, location-based prayer time synchronization using Google Location Services',
      'Developed a secure spiritual journaling system with Firebase Firestore for daily reflections',
      'Engineered with MVVM architecture, Repository pattern, and Coroutines for high-performance reactive UI',
      'Designed a premium user interface featuring beautiful color gradients and Material Design components',
    ],
  },
{
    id: 'proj-4',
    title: 'LawChain',
    description: 'Advanced AI legal assistant for constitutional analysis using RAG technology.',
    longDescription: 'LawChain is an intelligent backend system designed to provide high-accuracy answers regarding the 1945 Indonesian Constitution (UUD 1945). It implements a Dual RAG Architecture—combining LangChain and Native approaches—powered by the Google Gemma2:2b model to deliver context-aware legal insights with 85-98% accuracy.',
    category: 'intership',
    tags: ['Legal-Tech', 'AI', 'RAG', 'FastAPI'],
    technologies: ['Python', 'FastAPI', 'Google Gemma2', 'LangChain', 'FAISS', 'Ollama'],
    images: [
      '/projects/Lawchain.png'
    ],
    thumbnail: '/projects/Lawchain.png',
    githubRepos: [
      { label: 'Frontend', url: 'https://github.com/Hidayattt24/fe-lawchain' },
      { label: 'Backend', url: 'https://github.com/Hidayattt24/be-lawchain' },
    ],
    featured: true,
    startDate: '2025-02',
    endDate: '2025-07',
    status: 'completed',
    highlights: [
      'Implemented Dual Architecture (LangChain & Native) for maximum system flexibility and performance',
      'Integrated Google Gemma2:2b with FAISS vector store for high-precision legal information retrieval',
      'Achieved an impressive 85-98% accuracy rate for complex constitutional law queries',
      'Engineered a comprehensive RAG pipeline including smart chunking and semantic embedding'
    ],
  },
{
    id: 'proj-5',
    title: 'GajiBersih',
    description: 'AI-powered platform for employment contract analysis and net salary calculation.',
    longDescription: 'GajiBersih is an innovative financial-legal tool designed to empower Indonesian workers. It leverages OpenAI GPT-4 to analyze employment contracts, identifying critical clauses and potential risks, while providing a transparent calculator for net salary including PPh21 tax and BPJS contributions.',
    category: 'competition',
    tags: ['Fin-Tech', 'AI Analysis', 'Legal-Tech', 'SaaS'],
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'OpenAI GPT-4', 'Supabase', 'Framer Motion'],
    images: [
      '/projects/GajiBersih.png',
    ],
    thumbnail: '/projects/GajiBersih.png',
    githubRepos: [
      { label: 'Source Code', url: 'https://github.com/athazayyan/gaji-bersih' },
    ],
    featured: true,
    startDate: '2025-02',
    endDate: '2025-07',
    status: 'completed',
    highlights: [
      'Integrated OpenAI GPT-4 for automated contract risk detection and summarization',
      'Developed a precise payroll engine for Indonesian tax (PPh21) and BPJS calculation',
      'Implemented a context-aware AI Assistant for interactive legal consultation based on uploaded documents',
      'Built a secure document management system using Supabase with Row Level Security (RLS)'
    ],
  },
{
    id: 'proj-6',
    title: 'Adaptivin - Finalist LIDM 2025',
    description: 'Rule-based adaptive learning system for personalized mathematics education.',
    longDescription: 'Adaptivin is a web-based educational platform designed to identify learning difficulties and provide personalized mathematics recommendations for primary school students. It utilizes a rule-based engine to adjust question difficulty in real-time and integrates Gemini AI for deep misconception analysis.',
    category: 'competition',
    tags: ['Ed-Tech', 'AI', 'Adaptive Learning', 'National Finalist'],
    technologies: ['Next.js', 'Express.js', 'Gemini API', 'Supabase', 'Google Cloud Platform', 'Tailwind CSS'],
    images: [
      '/projects/Adaptivin-1.png',
      '/projects/Adaptivin-2.png',
      '/projects/Adaptivin-3.png',
      '/projects/Adaptivin-4.png',
      '/projects/Adaptivin-5.png',
      '/projects/Adaptivin-6.png',
      '/projects/Adaptivin-7.png', 
      '/projects/Adaptivin-8.png',
    ],
    thumbnail: '/projects/Adaptivin-1.png',
    demoUrl: 'https://adaptivin-user.vercel.app/',
    githubRepos: [
      { label: 'FE - User', url: 'https://github.com/Hidayattt24/adaptivin-user' },
      { label: 'FE - Admin', url: 'https://github.com/Hidayattt24/adaptivin-admin' },
      { label: 'Be', url: 'https://github.com/farhanulkhair/be-adaptivin' },
    ],
    featured: true,
    startDate: '2025-02',
    endDate: '2025-07',
    status: 'completed',
    highlights: [
      'National Finalist at LIDM 2025 in the Digital Education Technology Innovation category [cite: 2, 116]',
      'Developed a 6-level adaptive quiz engine based on student accuracy and response time [cite: 55, 119]',
      'Integrated Gemini AI for automated misconception detection and personalized learning reports [cite: 57, 124]',
      'Validated through field trials at SDN 16 Banda Aceh with an 89.6% student satisfaction rate [cite: 65, 137]'
    ],
  },
{
    id: 'proj-7',
    title: 'BUKADITA',
    description: 'Digital health monitoring and administrative system for Posyandu cadres.',
    longDescription: 'BUKADITA is a web-based management platform designed to digitize Posyandu operations. It replaces traditional paper-based tracking with a real-time digital monitoring system for maternal and child health, featuring structured access control and simplified reporting tools for community health workers.',
    category: 'social',
    tags: ['Health-Tech', 'Management System', 'Public Health', 'Final Thesis'],
    technologies: ['Next.js', 'Express.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    images: [
      '/projects/Bukadita.png',
    ],
    thumbnail: '/projects/Bukadita.png',
    demoUrl: 'https://www.bukadita.id/',
    githubRepos: [
      { label: 'FE-User', url: 'https://github.com/Hidayattt24/bukadita-user-v2' },
      { label: 'FE-Admin', url: 'https://github.com/Hidayattt24/bukadita-admin-v2' },
      { label: 'Backend', url: 'https://github.com/Hidayattt24/bukadita-api-v2' },
    ],
    featured: true,
    startDate: '2025-02',
    endDate: '2025-07',
    status: 'completed',
    highlights: [
      'Developed as a Final Thesis project to digitize Posyandu health monitoring and reporting',
      'Implemented a multi-tier authorization system for Pembina (Mentor), Ketua (Chief), and Kader (Cadre) roles',
      'Features a Progressive Web App (PWA) "Add to Home Screen" capability for easy mobile access by field cadres',
      'Integrated secure administrative functions including automated health monitoring and cadre account management'
    ],
  }
];

// Catatan: Daftar categories dikelola di components/projects/CategoryFilter.tsx
// Import { categories } from '@/components/projects/CategoryFilter' jika dibutuhkan

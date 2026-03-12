export interface BioData {
  name: string;
  subtitle: string;
  status: string;
  tagline1: string;
  tagline2: string;
  description: string;
  avatar: string;
  resumeUrl: string;
  contactEmail: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const bioData: BioData = {
  name: 'Hidayat Nur Hakim',
  subtitle: 'Full-Stack Developer | AI & LLM Enthusiast',
  status: 'Available for new projects',
  tagline1: 'Building scalable solutions',
  tagline2: 'with modern technologies',
  description: 'Passionate about creating innovative web applications and exploring the potential of AI. Specialized in React, Next.js, and cloud technologies.',
  avatar: '/home/avatar.jpg',
  resumeUrl: '/home/resume.pdf',
  contactEmail: 'hello@example.com',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-profile',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/your-username',
    icon: 'github',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/your-username',
    icon: 'x',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/your-username',
    icon: 'instagram',
  },
];

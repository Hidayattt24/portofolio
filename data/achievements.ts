export interface Achievement {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  date: string;
  category: 'award' | 'competition' | 'publication' | 'milestone' | 'recognition';
  organization: string;
  image: string;
  certificateUrl?: string;
  verificationUrl?: string;
  highlights?: string[];
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Best Innovation Award 2023',
    description: 'Received the Best Innovation Award for developing an AI-powered solution',
    detailedDescription: 'Awarded for creating an innovative AI-powered platform that revolutionized content creation workflows. The solution reduced content production time by 70% and was adopted by over 500 companies within the first year.',
    date: 'December 2023',
    category: 'award',
    organization: 'Tech Innovation Summit',
    image: '/achievements/innovation-award.jpg',
    certificateUrl: '/achievements/certificates/innovation-award.pdf',
    verificationUrl: 'https://techinnovation.com/awards/2023',
    highlights: [
      'Competed against 200+ submissions',
      'Recognized by industry leaders',
      'Featured in Tech Magazine',
      '$10,000 prize award',
    ],
    tags: ['AI', 'Innovation', 'Award'],
  },
  {
    id: 'ach-2',
    title: 'Hackathon Winner - Global Code Challenge',
    description: 'First place winner in international hackathon with 1000+ participants',
    detailedDescription: 'Led a team of 4 developers to win the Global Code Challenge 2023. Built a real-time collaboration platform in 48 hours that impressed judges with its innovative features and clean implementation.',
    date: 'August 2023',
    category: 'competition',
    organization: 'Global Code Challenge',
    image: '/achievements/hackathon-winner.jpg',
    certificateUrl: '/achievements/certificates/hackathon.pdf',
    highlights: [
      '1000+ participants from 50 countries',
      'Built in 48 hours',
      'Implemented real-time features',
      'Won $5,000 prize',
    ],
    tags: ['Hackathon', 'Competition', 'Team Lead'],
  },
  {
    id: 'ach-3',
    title: 'Published Research Paper on Cloud Architecture',
    description: 'Published paper on scalable microservices architecture in IEEE conference',
    detailedDescription: 'Co-authored and published a research paper titled "Optimizing Microservices Architecture for High-Traffic Applications" in the IEEE International Conference on Cloud Computing. The paper presents novel approaches to service orchestration and load balancing.',
    date: 'June 2023',
    category: 'publication',
    organization: 'IEEE',
    image: '/achievements/research-paper.jpg',
    verificationUrl: 'https://ieeexplore.ieee.org/document/example',
    highlights: [
      'Peer-reviewed publication',
      'Presented at international conference',
      'Cited by 15+ researchers',
      'Featured in IEEE Xplore',
    ],
    tags: ['Research', 'Cloud', 'Publication'],
  },
  {
    id: 'ach-4',
    title: '10,000 GitHub Stars Milestone',
    description: 'Open-source project reached 10,000 stars on GitHub',
    detailedDescription: 'My open-source project, a modern React component library, reached 10,000 stars on GitHub. The library is used by thousands of developers worldwide and has been featured in various tech publications.',
    date: 'March 2023',
    category: 'milestone',
    organization: 'GitHub',
    image: '/achievements/github-stars.jpg',
    verificationUrl: 'https://github.com/username/project',
    highlights: [
      '10,000+ GitHub stars',
      '500+ contributors',
      'Used by 5,000+ projects',
      'Featured in GitHub Trending',
    ],
    tags: ['Open Source', 'GitHub', 'Community'],
  },
  {
    id: 'ach-5',
    title: 'Top Contributor Award',
    description: 'Recognized as top contributor in open-source community',
    detailedDescription: 'Awarded Top Contributor status for outstanding contributions to multiple open-source projects. Contributed over 500 pull requests, helped resolve 200+ issues, and mentored 50+ new contributors.',
    date: 'January 2023',
    category: 'recognition',
    organization: 'Open Source Initiative',
    image: '/achievements/top-contributor.jpg',
    certificateUrl: '/achievements/certificates/top-contributor.pdf',
    highlights: [
      '500+ pull requests merged',
      '200+ issues resolved',
      'Mentored 50+ contributors',
      'Active in 20+ projects',
    ],
    tags: ['Open Source', 'Community', 'Mentoring'],
  },
  {
    id: 'ach-6',
    title: 'Speaker at Tech Conference 2022',
    description: 'Invited speaker at international tech conference',
    detailedDescription: 'Delivered a keynote presentation on "Modern Web Development Practices" at TechConf 2022. The talk covered best practices, performance optimization, and emerging trends in web development.',
    date: 'November 2022',
    category: 'recognition',
    organization: 'TechConf International',
    image: '/achievements/speaker.jpg',
    verificationUrl: 'https://techconf.com/speakers/2022',
    highlights: [
      'Audience of 500+ attendees',
      'Keynote speaker',
      'Highly rated session (4.8/5)',
      'Featured on conference website',
    ],
    tags: ['Speaking', 'Conference', 'Web Development'],
  },
];

export const categories = [
  { id: 'all', label: 'All Achievements' },
  { id: 'award', label: 'Awards' },
  { id: 'competition', label: 'Competitions' },
  { id: 'publication', label: 'Publications' },
  { id: 'milestone', label: 'Milestones' },
  { id: 'recognition', label: 'Recognition' },
];

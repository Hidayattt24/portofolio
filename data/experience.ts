export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null; // null means current
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo: string;
  companyUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
  logo: string;
}

export interface Organization {
  id: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements?: string[];
  logo: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company Inc',
    position: 'Senior Full-Stack Developer',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: null,
    description: 'Leading development of cloud-native applications and mentoring junior developers.',
    responsibilities: [
      'Architected and developed scalable microservices using Node.js and React',
      'Led a team of 5 developers in delivering high-quality features',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Conducted code reviews and established coding standards',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
    logo: '/experience/tech-company.png',
    companyUrl: 'https://techcompany.com',
  },
  {
    id: 'exp-2',
    company: 'StartUp XYZ',
    position: 'Full-Stack Developer',
    location: 'Remote',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Built and maintained web applications for a fast-growing startup.',
    responsibilities: [
      'Developed RESTful APIs and responsive front-end interfaces',
      'Integrated third-party services and payment gateways',
      'Optimized database queries improving performance by 40%',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis'],
    logo: '/experience/startup-xyz.png',
    companyUrl: 'https://startupxyz.com',
  },
  {
    id: 'exp-3',
    company: 'Digital Agency',
    position: 'Frontend Developer',
    location: 'New York, NY',
    startDate: '2018-03',
    endDate: '2020-05',
    description: 'Created engaging web experiences for various clients.',
    responsibilities: [
      'Built responsive websites using modern JavaScript frameworks',
      'Worked closely with clients to understand requirements',
      'Implemented animations and interactive features',
      'Ensured cross-browser compatibility and accessibility',
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'Webpack', 'Git'],
    logo: '/experience/digital-agency.png',
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    location: 'California, USA',
    startDate: '2014-09',
    endDate: '2018-06',
    gpa: '3.8/4.0',
    achievements: [
      'Dean\'s List for 6 semesters',
      'President of Computer Science Club',
      'Winner of University Hackathon 2017',
    ],
    logo: '/experience/university.png',
  },
];

export const organizations: Organization[] = [
  {
    id: 'org-1',
    name: 'Open Source Community',
    role: 'Core Contributor',
    startDate: '2019-01',
    endDate: null,
    description: 'Active contributor to various open-source projects',
    achievements: [
      'Contributed to 20+ open-source projects',
      'Maintained 3 popular npm packages',
      'Helped resolve 100+ issues in community projects',
    ],
    logo: '/experience/opensource.png',
    url: 'https://github.com/your-username',
  },
  {
    id: 'org-2',
    name: 'Tech Meetup Group',
    role: 'Organizer',
    startDate: '2020-03',
    endDate: '2022-12',
    description: 'Organized monthly tech meetups and workshops',
    achievements: [
      'Organized 30+ meetups with 500+ attendees',
      'Invited industry experts as speakers',
      'Built a community of 1000+ tech enthusiasts',
    ],
    logo: '/experience/meetup.png',
  },
];

# Portfolio Data Files

This directory contains all the data files for your portfolio website. Each file corresponds to a specific page and contains structured data that can be easily updated.

## File Structure

```
data/
├── home.ts              # Home page data (bio, social links)
├── about.ts             # About page data (bio, skills, interests)
├── experience.ts        # Experience page data (work, education, organizations)
├── projects.ts          # Projects page data (project details, categories)
├── achievements.ts      # Achievements page data (awards, competitions, etc.)
├── certifications.ts    # Certifications page data (certificates, badges)
├── testimonials.ts      # Testimonials page data (client reviews)
└── README.md           # This file
```

## How to Use

### 1. Update Personal Information

Edit the data files to add your own information:

```typescript
// data/home.ts
export const bioData: BioData = {
  name: 'Your Name',
  subtitle: 'Your Title',
  // ... update other fields
};
```

### 2. Add Images

Place your images in the corresponding `public/` directories:
- `/public/home/` - Avatar, resume
- `/public/about/` - Profile photo
- `/public/experience/` - Company logos
- `/public/projects/` - Project screenshots
- `/public/achievements/` - Achievement images
- `/public/certifications/` - Certificate images
- `/public/testimonials/` - Project documentation

### 3. Import and Use Data

Import the data in your components:

```typescript
import { bioData, socialLinks } from '@/data/home';
import { projects } from '@/data/projects';
import { certifications } from '@/data/certifications';
```

## Data Files Overview

### home.ts
Contains:
- Personal bio information
- Social media links
- Avatar and resume paths

### about.ts
Contains:
- About me text
- Skills categorized by type
- Interests and hobbies

### experience.ts
Contains:
- Work experience
- Education history
- Organization memberships

### projects.ts
Contains:
- Project details
- Categories and tags
- Demo and GitHub links
- Project images

### achievements.ts
Contains:
- Awards and recognitions
- Competition wins
- Publications
- Milestones

### certifications.ts
Contains:
- Professional certifications
- Credential IDs
- Skills and competencies
- Verification links

### testimonials.ts
Contains:
- Client testimonials
- Project details
- Ratings and reviews
- Project images and links

## TypeScript Interfaces

Each data file includes TypeScript interfaces for type safety:

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  // ... other fields
}
```

This ensures you don't miss any required fields when adding new data.

## Best Practices

1. **Keep data separate from components** - Makes updates easier
2. **Use TypeScript interfaces** - Ensures data consistency
3. **Optimize images** - Compress images before adding to public folder
4. **Use descriptive IDs** - Makes data easier to reference
5. **Keep URLs updated** - Ensure all links are current and working
6. **Regular updates** - Keep your portfolio data fresh

## Adding New Items

### Adding a New Project

```typescript
// data/projects.ts
export const projects: Project[] = [
  // ... existing projects
  {
    id: 'proj-new',
    title: 'New Project',
    description: 'Project description',
    category: 'web',
    tags: ['React', 'Node.js'],
    technologies: ['React', 'TypeScript'],
    images: ['/projects/new-project/screenshot-1.jpg'],
    thumbnail: '/projects/new-project/thumbnail.jpg',
    featured: true,
    startDate: '2024-01',
    status: 'in-progress',
  },
];
```

### Adding a New Certification

```typescript
// data/certifications.ts
export const certifications: Certification[] = [
  // ... existing certifications
  {
    id: 'cert-new',
    title: 'New Certification',
    issuer: 'Issuing Organization',
    issueDate: 'January 2024',
    credentialId: 'CERT-123456',
    description: 'Short description',
    detailedDescription: 'Detailed description',
    images: ['/certifications/new-cert/certificate.jpg'],
    skills: ['Skill 1', 'Skill 2'],
    verificationLink: 'https://verify.example.com',
  },
];
```

## Validation

Before deploying, ensure:
- [ ] All image paths are correct
- [ ] All URLs are working
- [ ] Required fields are filled
- [ ] Dates are in correct format
- [ ] IDs are unique
- [ ] TypeScript compiles without errors

## Need Help?

Refer to the README files in each `public/` subdirectory for image guidelines and requirements.

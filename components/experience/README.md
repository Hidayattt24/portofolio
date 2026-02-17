# Experience Page Components

This directory contains all components for the Experience page, which includes Professional Experience, Education, and Organization Experience sections.

## Components

### ExperienceSection
- **Purpose**: Displays professional work experience with company history
- **Features**:
  - Minimize/Expand functionality
  - Multiple positions per company
  - Duration, location, and detailed descriptions
  - Animated entrance and exit
  - Collapsible interface to save space

### EducationSection
- **Purpose**: Displays educational background and academic achievements
- **Features**:
  - Minimize/Expand functionality
  - School information with degree and field of study
  - Period and location metadata
  - Academic achievements list
  - Icon-based visual hierarchy
  - Smooth animations

### OrganizationSection
- **Purpose**: Shows involvement in organizations, clubs, and communities
- **Features**:
  - Minimize/Expand functionality
  - Organization name and position held
  - Time period indication
  - Key contributions and achievements list
  - Consistent styling with other sections

### CompanyExperience
- **Purpose**: Reusable card component for displaying company experience details
- **Used by**: ExperienceSection

### ExperienceCard
- **Purpose**: Individual position card within company experience
- **Used by**: CompanyExperience

## Design Principles

All sections follow these design principles:

1. **Minimize/Expand Toggle**
   - Each section can be minimized to save screen space
   - Toggle button in the header with icon and label
   - Smooth height animation on expand/collapse
   - Default state: Expanded

2. **Color Consistency**
   - Uses CSS variables from `globals.css`
   - `--card-bg`: Background for cards
   - `--card-border`: Border color (black)
   - `--card-shadow`: Shadow color (green)
   - `--accent-green`: For highlights and icons
   - `--button-primary-bg`: For specific icon backgrounds

3. **Animation**
   - Framer Motion for smooth transitions
   - Staggered entrance animations
   - Hover effects on cards
   - Collapse/expand animations

4. **Responsive Design**
   - Mobile-first approach
   - Adjusts padding and text sizes
   - Icon sizes adapt to screen size

## Page Structure

The Experience page (`/experience`) displays three sections:

```tsx
<ExperienceSection />    // Professional work experience
<EducationSection />     // Academic background
<OrganizationSection />  // Community involvement
```

## Usage

```tsx
import { 
  ExperienceSection, 
  EducationSection, 
  OrganizationSection 
} from "@/components/experience";

export default function ExperiencePage() {
  return (
    <div className="w-full flex flex-col gap-12">
      <ExperienceSection />
      <EducationSection />
      <OrganizationSection />
    </div>
  );
}
```

## Customization

### Adding New Experiences

Edit the data arrays in each component:

**ExperienceSection.tsx**:
```typescript
const experiences = [
  {
    company: 'Company Name',
    positions: [
      {
        title: 'Position Title',
        duration: 'Start - End',
        location: 'Location',
        description: 'Description...',
      },
    ],
  },
  // Add more...
];
```

**EducationSection.tsx**:
```typescript
const educationData: EducationItem[] = [
  {
    school: 'School Name',
    degree: 'Degree',
    field: 'Field of Study',
    period: 'Start - End',
    location: 'Location',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
  // Add more...
];
```

**OrganizationSection.tsx**:
```typescript
const organizationData: OrgExperience[] = [
  {
    organization: 'Organization Name',
    position: 'Position',
    period: 'Start - End',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
  // Add more...
];
```

## Features

- ✅ Minimize/Expand toggle for each section
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Icon-based visual hierarchy
- ✅ Achievement bullet points
- ✅ Hover effects
- ✅ Color palette consistency
- ✅ TypeScript type safety
- ✅ Accessible button controls

## Future Enhancements

Potential improvements:
- Internationalization (i18n) support
- Data from CMS/API instead of hardcoded
- Filter/search functionality
- Timeline view option
- PDF export functionality

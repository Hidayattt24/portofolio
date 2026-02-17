# About Components

This directory contains all components related to the About page.

## Components

### AboutMe
- **Purpose**: Displays personal introduction and overview
- **Features**:
  - Animated entrance
  - Clean card design with border and shadow
  - Multi-paragraph content support
  - Uses color palette from `globals.css`

### ProfessionalExperience
- **Purpose**: Showcases work history and professional roles
- **Features**:
  - Card-based layout for each experience
  - Icon-based visual hierarchy
  - Period and location metadata
  - Bullet-point descriptions
  - Hover effects with shadow transitions

### Education
- **Purpose**: Displays educational background
- **Features**:
  - University/school information
  - Degree and field of study
  - Academic achievements section
  - Icon-based design matching other components

### OrganizationExperience
- **Purpose**: Shows involvement in organizations and communities
- **Features**:
  - Organization name and position
  - Time period indication
  - Contributions and achievements list
  - Consistent styling with other about components

## Design Principles

All components follow these design principles:

1. **Color Consistency**: Uses CSS variables from `globals.css`
   - `--card-bg` for card backgrounds
   - `--card-border` for borders
   - `--card-shadow` for shadows
   - `--text-primary`, `--text-secondary` for text
   - `--accent-green` for highlights
   - `--button-primary-bg` for icon backgrounds

2. **Animation**: Framer Motion animations with staggered delays

3. **Responsive Design**: Mobile-first approach with `md:` breakpoints

4. **Clean Code**: 
   - TypeScript interfaces for type safety
   - Separated concerns
   - Reusable card patterns
   - Consistent spacing and padding

## Translation Keys

Components use `next-intl` for internationalization.

Required translation keys in `messages/[locale].json`:

```json
{
  "about": {
    "title": "About Me title",
    "intro": "Introduction paragraph",
    "description": "Main description",
    "passion": "Passion statement"
  },
  "professionalExperience": {
    "title": "Professional Experience",
    "achievements": "Key Achievements",
    "exp1": {
      "company": "Company name",
      "position": "Job title",
      "period": "Time period",
      "location": "Location",
      "desc1": "Description 1",
      "desc2": "Description 2",
      "desc3": "Description 3"
    }
  },
  "education": {
    "title": "Education",
    "achievements": "Academic Achievements",
    "edu1": {
      "school": "School name",
      "degree": "Degree level",
      "field": "Field of study",
      "period": "Time period",
      "location": "Location",
      "achievement1": "Achievement 1",
      "achievement2": "Achievement 2"
    }
  },
  "organizationExperience": {
    "title": "Organization Experience",
    "achievements": "Key Contributions",
    "org1": {
      "organization": "Organization name",
      "position": "Position held",
      "period": "Time period",
      "achievement1": "Achievement 1",
      "achievement2": "Achievement 2",
      "achievement3": "Achievement 3"
    }
  }
}
```

## Usage

```tsx
import { 
  AboutMe, 
  ProfessionalExperience, 
  Education, 
  OrganizationExperience 
} from "@/components/about";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-8">
      <AboutMe />
      <ProfessionalExperience />
      <Education />
      <OrganizationExperience />
    </div>
  );
}
```

## Customization

To add more experiences/education/organizations, edit the translation files:
- `messages/en.json` for English
- `messages/id.json` for Indonesian

Add `exp2`, `edu2`, `org2`, etc., and update the component arrays accordingly.

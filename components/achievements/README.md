# Achievements Components

This directory contains components for displaying achievements, awards, certifications, and recognitions.

## Components

### AchievementCard
Card component for displaying individual achievement details.

**Props:**
- `title`: Achievement title
- `category`: Type of achievement (hackathon, competition, certification, award)
- `date`: Date of achievement
- `description`: Brief description
- `image`: Optional image URL
- `award`: Award type (1st Place, Certified, etc.)
- `organizer`: Organization/event organizer
- `categoryColor`: Color for category badge
- `index`: Index for animation delay

**Features:**
- ✅ Image preview with hover scale effect
- ✅ Award badge overlay on image
- ✅ Category badge with custom color
- ✅ Organizer information with icon
- ✅ Date display
- ✅ Description text with line clamp
- ✅ Consistent design with shadow effects
- ✅ Responsive layout

### AchievementsSection
Main section component that displays all achievements with filtering.

**Features:**
- ✅ Category filter buttons (All, Hackathons, Competitions, Certifications, Awards)
- ✅ Responsive grid layout (1-3 columns)
- ✅ Animated entrance
- ✅ Empty state when no achievements in category
- ✅ Header with icon and description
- ✅ Filter by category

## Achievement Categories

- **Hackathon** (Gold: #D4AF37)
- **Competition** (Blue: #4A90E2)
- **Certification** (Green: #5A7863)
- **Award** (Purple: #9B59B6)
- **All** (Navy: #25343F)

## Data Structure

```typescript
interface Achievement {
  title: string;
  category: 'hackathon' | 'competition' | 'certification' | 'award';
  date: string;
  description: string;
  image?: string;
  award: string;
  organizer: string;
}
```

## Sample Data

The component includes 6 sample achievements:
1. National Hackathon - 1st Place
2. Web Development Competition - Best Design
3. Google Cloud Professional Certificate
4. Outstanding Contribution Award
5. Mobile App Challenge - 2nd Place
6. AWS Solutions Architect Associate

## Usage

```tsx
import { AchievementsSection } from "@/components/achievements";

export default function AchievementsPage() {
  return (
    <div className="w-full">
      <AchievementsSection />
    </div>
  );
}
```

## Customization

### Adding New Achievements

Edit the `achievements` array in `AchievementsSection.tsx`:

```typescript
const achievements: Achievement[] = [
  {
    title: 'Your Achievement Title',
    category: 'hackathon', // or 'competition', 'certification', 'award'
    date: 'Month Year',
    description: 'Brief description of the achievement...',
    image: '/achievements/your-image.jpg', // optional
    award: '1st Place', // or 'Certified', 'Winner', etc.
    organizer: 'Event/Organization Name',
  },
  // Add more...
];
```

### Adding Images

1. Create `public/achievements/` directory
2. Add your achievement images there
3. Reference them in the achievement data: `/achievements/image-name.jpg`

### Adding New Categories

Edit the `categories` object:

```typescript
const categories = {
  all: { label: 'All Achievements', color: '#25343F' },
  hackathon: { label: 'Hackathons', color: '#D4AF37' },
  // Add your category:
  yourcategory: { label: 'Your Category', color: '#HEXCOLOR' },
};
```

## Design Consistency

All components follow the design system:
- **Border radius**: `var(--radius-xl)` for cards, `var(--radius-md)` for buttons/badges
- **Border**: 3px solid black (`var(--card-border)`)
- **Shadow**: `var(--shadow-md)` default, `var(--shadow-lg)` on hover
- **Colors**: CSS variables from `globals.css`
- **Animations**: Framer Motion with staggered delays
- **Typography**: Consistent font sizes and weights

## Features

- ✅ Category filtering
- ✅ Responsive grid layout
- ✅ Image support with fallback
- ✅ Hover effects
- ✅ Award badges
- ✅ Organized by date
- ✅ Empty state handling
- ✅ Accessible buttons
- ✅ Smooth animations

## Future Enhancements

- Modal for full achievement details
- Sorting options (date, category, award type)
- Search functionality
- Achievement statistics/summary
- Integration with CMS/API
- Certificate/badge downloads

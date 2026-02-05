# Components Documentation

## 📁 Folder Structure

```
components/
├── bio-card/           # Bio Card feature components
│   ├── BioCard.tsx     # Main bio card component
│   ├── Avatar.tsx      # Avatar component with hover animation
│   ├── Badge.tsx       # Status badge with pulse effect
│   ├── DiagonalMarquee.tsx  # Diagonal scrolling text
│   ├── ActionButtons.tsx    # CTA buttons group
│   └── index.ts        # Export barrel
│
├── experience/         # Experience section components
│   ├── ExperienceCard.tsx    # Individual experience card
│   ├── ExperienceSection.tsx # Experience list container
│   └── index.ts        # Export barrel
│
└── ui/                 # Reusable UI components
    ├── Button.tsx      # Base button component with variants
    └── index.ts        # Export barrel
```

## 🎨 Component Usage

### BioCard
Main card component that displays personal bio information.

```tsx
import { BioCard } from "@/components/bio-card";

<BioCard />
```

**Features:**
- Animated entrance with fade & slide
- 3D shadow effect
- Diagonal marquee background
- Responsive design

---

### Avatar
Profile picture component with hover interaction.

```tsx
import { Avatar } from "@/components/bio-card";

<Avatar size="md" src="/path/to/image.jpg" alt="Profile" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `src`: Image URL (optional)
- `alt`: Alt text

---

### Badge
Status badge with animated pulse indicator.

```tsx
import { Badge } from "@/components/bio-card";

<Badge showPulse>Available for Work</Badge>
```

**Props:**
- `showPulse`: boolean - Show animated dot
- `children`: React.ReactNode - Badge content

---

### DiagonalMarquee
Scrolling text positioned diagonally across the card.

```tsx
import { DiagonalMarquee } from "@/components/bio-card";

<DiagonalMarquee text="YOUR TEXT HERE" speed={40} />
```

**Props:**
- `text`: string - Text to display
- `speed`: number - Scroll speed (default: 40)

---

### ExperienceSection
Main container for displaying work experience with progressive disclosure.

```tsx
import { ExperienceSection } from "@/components/experience";

<ExperienceSection />
```

**Features:**
- LinkedIn-style progressive disclosure
- "See more" / "See less" functionality
- Card-based design matching BioCard
- Staggered animations
- Truncates long descriptions automatically

---

### ExperienceCard
Individual experience card with expandable description.

```tsx
import { ExperienceCard } from "@/components/experience";

<ExperienceCard
  company="Tech Company"
  position="Senior Developer"
  duration="Jan 2023 - Present"
  location="Remote"
  description="Long description here..."
  logo="/path/to/logo.png"
/>
```

**Props:**
- `company`: string - Company name
- `position`: string - Job title
- `duration`: string - Employment period
- `location`: string - Work location
- `description`: string - Job description (auto-truncates at 150 chars)
- `logo`: string (optional) - Company logo URL

---

### Button (UI Component)
Reusable button with variants and icon support.

```tsx
import { Button } from "@/components/ui";
import { Phone } from "lucide-react";

<Button variant="primary" icon={Phone}>
  Call Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary'
- `icon`: LucideIcon (optional)
- `onClick`: Function
- `children`: React.ReactNode
- `className`: Additional classes

**Variants:**
- `primary`: Black background with white text
- `secondary`: White background with border

---

## 🔧 Design Tokens

### Colors
```css
--text-primary: #25343F
--bg-card: #DCDCDC
--accent-green: #5A7863
--verification-blue: #3b82f6
```

### Spacing
- Card padding: `p-8 md:p-12`
- Gap between sections: `gap-8`
- Button padding: `px-8 py-3.5`

### Shadows
- Card shadow: `shadow-[8px_8px_0px_#5A7863] sm:shadow-[12px_12px_0px_#5A7863]`
- Button shadow: `shadow-lg shadow-black/20`

---

## 🚀 Scalability Guidelines

### Adding New Components
1. Create component in appropriate folder (`bio-card/` for feature-specific, `ui/` for reusable)
2. Use TypeScript for type safety
3. Add proper props interface
4. Include animations with Framer Motion
5. Export from `index.ts`

### Component Principles
- **Single Responsibility**: Each component does one thing well
- **Reusability**: UI components should be generic and configurable
- **Composition**: Build complex UIs from smaller components
- **Type Safety**: Always define prop types
- **Accessibility**: Consider keyboard navigation and screen readers

### Example: Creating New UI Component

```tsx
// components/ui/Card.tsx
'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Export from components/ui/index.ts
export { default as Card } from './Card';
```

---

## 📦 Dependencies

- **framer-motion**: Animations
- **lucide-react**: Icons
- **react-fast-marquee**: Scrolling text effect

---

## 🎯 Future Enhancements

- [ ] Add theme support (light/dark mode)
- [ ] Create more UI variants
- [ ] Add unit tests
- [ ] Storybook integration
- [ ] Add more animation presets

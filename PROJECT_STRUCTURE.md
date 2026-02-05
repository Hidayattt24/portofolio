# Portfolio Web - Project Structure

## 📂 Complete Project Structure

```
portofolio-web/
│
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & Tailwind
│   ├── layout.tsx               # Root layout with font setup
│   └── page.tsx                 # Home page
│
├── components/                   # React Components
│   │
│   ├── bio-card/                # Bio Card Feature Module
│   │   ├── ActionButtons.tsx    # CTA buttons (Collaboration, Resume)
│   │   ├── Avatar.tsx           # Profile picture component
│   │   ├── Badge.tsx            # Status badge with pulse
│   │   ├── BioCard.tsx          # Main card component
│   │   ├── DiagonalMarquee.tsx  # Scrolling diagonal text
│   │   └── index.ts             # Barrel exports
│   │
│   ├── ui/                      # Reusable UI Components
│   │   ├── Button.tsx           # Generic button component
│   │   └── index.ts             # Barrel exports
│   │
│   └── README.md                # Components documentation
│
├── public/                      # Static assets
│
├── .gitignore
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
├── PROJECT_STRUCTURE.md        # This file
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project readme

```

## 🎯 Architecture Overview

### Component-Based Architecture

This project follows a **modular component architecture** with clear separation of concerns:

#### 1. **Feature Modules** (`components/bio-card/`)
- Contains all components related to a specific feature
- Self-contained and cohesive
- Can be easily moved or removed as a unit
- Example: `bio-card/` contains everything needed for the bio card

#### 2. **UI Library** (`components/ui/`)
- Reusable, generic components
- No business logic
- Highly configurable through props
- Used across multiple features
- Example: `Button` can be used anywhere in the app

#### 3. **Barrel Exports** (`index.ts`)
- Simplifies imports
- Clean API surface
- Example: `import { BioCard, Avatar } from '@/components/bio-card'`

---

## 🔄 Component Hierarchy

```
BioCard (Main Container)
│
├── DiagonalMarquee
│   └── Marquee (from react-fast-marquee)
│
├── Avatar
│   └── motion.div (Framer Motion)
│
├── Badge
│   ├── Pulse Indicator
│   └── Text
│
├── Content Section
│   ├── Name + Verification Icon
│   ├── Subtitle
│   └── Description
│
└── ActionButtons
    ├── Button (Collaboration)
    │   └── Phone Icon
    └── Button (Resume)
        └── Download Icon
```

---

## 🎨 Design System

### Color Palette
```
Primary Text:    #25343F
Card Background: #DCDCDC
Accent Green:    #5A7863
Verification:    #3b82f6 (Blue)
Black:           #000000
White:           #FFFFFF
```

### Typography
```
Font Family: DM Serif Display
Weights:     400 (normal), 400 italic
Sizes:
  - Heading 1: text-3xl md:text-4xl
  - Heading 2: text-2xl md:text-3xl
  - Body:      text-base md:text-lg
  - Small:     text-xs md:text-sm
```

### Spacing System
```
Card Padding:    p-8 md:p-12
Section Gap:     gap-8
Element Gap:     gap-4 to gap-6
Button Padding:  px-8 py-3.5
```

### Animation Timings
```
Duration:  0.4s - 0.8s
Easing:    [0.22, 1, 0.36, 1] (custom cubic-bezier)
Delays:    Staggered (0.2s - 0.8s)
```

---

## 🚀 Scalability Plan

### Adding New Features

**Example: Adding a Projects Section**

1. Create feature module:
   ```
   components/projects/
   ├── ProjectCard.tsx
   ├── ProjectGrid.tsx
   ├── ProjectFilter.tsx
   └── index.ts
   ```

2. Reuse UI components:
   ```tsx
   import { Button } from '@/components/ui';
   ```

3. Create new page:
   ```tsx
   // app/projects/page.tsx
   import { ProjectGrid } from '@/components/projects';
   ```

### Adding New UI Components

1. Create in `components/ui/`
2. Follow existing patterns (TypeScript, Framer Motion)
3. Export from `components/ui/index.ts`
4. Document in `components/README.md`

### Best Practices

✅ **DO:**
- Keep components small and focused
- Use TypeScript for type safety
- Add animations for better UX
- Document props and usage
- Use barrel exports
- Follow naming conventions

❌ **DON'T:**
- Mix feature logic with UI components
- Create deeply nested components
- Hardcode values (use props)
- Forget to export from index.ts
- Skip TypeScript types

---

## 📦 Dependencies

### Core
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS

### Animation & UI
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Fast Marquee** - Scrolling text

---

## 🔧 Development Workflow

### File Naming Conventions
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Styles: `kebab-case.css`
- Types: `PascalCase.types.ts` (if separate file)

### Component Template
```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ComponentNameProps {
  // Props here
}

export default function ComponentName({ }: ComponentNameProps) {
  return (
    <motion.div>
      {/* Component content */}
    </motion.div>
  );
}
```

---

## 📈 Future Roadmap

### Phase 1 - Current ✅
- [x] Bio card with animations
- [x] Component architecture
- [x] Documentation

### Phase 2 - Next Steps
- [ ] Projects showcase section
- [ ] Skills section
- [ ] Contact form
- [ ] Blog integration

### Phase 3 - Enhancement
- [ ] Dark mode toggle
- [ ] i18n support
- [ ] CMS integration
- [ ] Performance optimization

### Phase 4 - Advanced
- [ ] Unit & E2E tests
- [ ] Storybook integration
- [ ] Analytics dashboard
- [ ] SEO optimization

---

## 📞 Support

For questions or contributions, refer to:
- `components/README.md` - Component documentation
- `PROJECT_STRUCTURE.md` - This file
- Next.js docs: https://nextjs.org/docs

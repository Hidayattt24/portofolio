# Projects Page Assets

This directory contains assets for the projects page.

## Directory Structure

Each project should have its own subdirectory:

```
projects/
├── ecommerce/
│   ├── thumbnail.jpg
│   ├── screenshot-1.jpg
│   ├── screenshot-2.jpg
│   └── screenshot-3.jpg
├── ai-content/
│   ├── thumbnail.jpg
│   ├── screenshot-1.jpg
│   └── screenshot-2.jpg
├── devops-dashboard/
│   ├── thumbnail.jpg
│   ├── screenshot-1.jpg
│   ├── screenshot-2.jpg
│   └── screenshot-3.jpg
└── ...
```

## Required Files per Project

### Thumbnail
- `thumbnail.jpg` - Main project thumbnail (recommended: 1200x630px, 16:9 ratio)

### Screenshots
- `screenshot-1.jpg` - First screenshot
- `screenshot-2.jpg` - Second screenshot
- `screenshot-3.jpg` - Third screenshot (optional)

## Usage

These files are referenced in `data/projects.ts`:

```typescript
thumbnail: '/projects/ecommerce/thumbnail.jpg',
images: [
  '/projects/ecommerce/screenshot-1.jpg',
  '/projects/ecommerce/screenshot-2.jpg',
  '/projects/ecommerce/screenshot-3.jpg',
],
```

## Image Guidelines

- Format: JPG or WebP
- Thumbnail: 1200x630px (16:9 ratio) for social sharing
- Screenshots: 1920x1080px or similar high resolution
- Optimize images (compress to ~200KB per image)
- Use consistent aspect ratios
- Show the most impressive features

## Tips

- Use high-quality screenshots
- Show different features in each screenshot
- Consider adding annotations or highlights
- Use consistent styling across project images

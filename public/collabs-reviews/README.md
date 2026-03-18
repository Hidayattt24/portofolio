# Testimonials Page Assets

This directory contains assets for the testimonials page.

## Directory Structure

Each testimonial/project should have its own subdirectory:

```
testimonials/
├── techvision/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
├── dataflow/
│   ├── project-1.jpg
│   └── project-2.jpg
├── innovatelabs/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
└── ...
```

## Required Files per Testimonial

### Project Images
- `project-1.jpg` - First project screenshot/photo
- `project-2.jpg` - Second project screenshot/photo
- `project-3.jpg` - Third project screenshot/photo (optional)

## Usage

These files are referenced in `data/testimonials.ts`:

```typescript
projectImages: [
  '/testimonials/techvision/project-1.jpg',
  '/testimonials/techvision/project-2.jpg',
  '/testimonials/techvision/project-3.jpg',
],
```

## Image Guidelines

- Format: JPG or WebP
- Recommended size: 1920x1080px (16:9 ratio)
- Optimize images (compress to ~300KB per image)
- Show project deliverables, dashboards, or results
- Use professional-looking screenshots

## Content Ideas

- Architecture diagrams
- Dashboard screenshots
- Before/after comparisons
- Performance metrics
- System monitoring views
- Deployment pipelines
- Infrastructure diagrams

## Privacy & Permissions

- Get client permission before using project images
- Blur or remove sensitive information
- Use generic/anonymized data in screenshots
- Consider using mockups if real data can't be shown

## File Naming Convention

Use company name (lowercase, no spaces) as directory:
- ✅ `techvision/project-1.jpg`
- ✅ `dataflow/project-2.jpg`
- ❌ `TechVision/Project-1.jpg`

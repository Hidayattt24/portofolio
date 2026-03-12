# Experience Page Assets

This directory contains assets for the experience page.

## Required Files

### Company Logos
- `tech-company.png` - Tech Company Inc logo
- `startup-xyz.png` - StartUp XYZ logo
- `digital-agency.png` - Digital Agency logo

### Education Logos
- `university.png` - University logo

### Organization Logos
- `opensource.png` - Open Source Community logo
- `meetup.png` - Tech Meetup Group logo

## Usage

These files are referenced in `data/experience.ts`:

```typescript
logo: '/experience/tech-company.png',
```

## Image Guidelines

- Format: PNG (with transparency) or SVG
- Recommended size: 200x200px (square) or 300x100px (rectangular)
- Use transparent backgrounds when possible
- Optimize file size
- Consistent sizing across all logos

## File Naming Convention

Use lowercase with hyphens:
- ✅ `tech-company.png`
- ❌ `TechCompany.png`
- ❌ `tech_company.png`

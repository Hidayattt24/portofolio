# Achievements Images

Place your achievement images in this directory.

## Naming Convention

Use descriptive names for your images:
- `hackathon-2023.jpg`
- `web-comp-2023.jpg`
- `gcp-cert.jpg`
- `aws-cert.jpg`

## Recommended Specifications

- **Format**: JPG, PNG, or WebP
- **Dimensions**: 800x600px or similar aspect ratio (4:3 or 16:9)
- **Size**: Under 500KB for optimal loading
- **Quality**: High quality but optimized for web

## Example Structure

```
public/achievements/
├── hackathon-2023.jpg
├── web-comp-2023.jpg
├── gcp-cert.jpg
├── contribution-2023.jpg
├── mobile-app-2022.jpg
└── aws-cert.jpg
```

## Usage

Reference these images in your achievement data:

```typescript
{
  image: '/achievements/hackathon-2023.jpg',
  // ...other properties
}
```

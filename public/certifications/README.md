# Certifications Page Assets

This directory contains assets for the certifications page.

## Directory Structure

Each certification should have its own subdirectory:

```
certifications/
├── aws-saa/
│   ├── certificate.jpg
│   ├── badge.jpg
│   └── badge.png
├── gcp-pca/
│   ├── certificate.jpg
│   └── badge.png
├── azure-expert/
│   ├── certificate.jpg
│   ├── badge.jpg
│   └── badge.png
└── ...
```

## Required Files per Certification

### Certificate
- `certificate.jpg` - Scanned or downloaded certificate image

### Badge (Optional)
- `badge.png` - Digital badge (if provided by issuer)
- `badge.jpg` - Alternative badge format

## Usage

These files are referenced in `data/certifications.ts`:

```typescript
images: [
  '/certifications/aws-saa/certificate.jpg',
  '/certifications/aws-saa/badge.jpg',
],
badge: '/certifications/aws-saa/badge.png',
```

## Image Guidelines

- Format: JPG for certificates, PNG for badges
- Certificate: High resolution scan (at least 1500px width)
- Badge: 300x300px or as provided by issuer
- Optimize file size while maintaining readability
- Ensure text is legible in images

## Privacy Note

- Remove or blur sensitive information (credential IDs, personal details)
- Only include publicly shareable certificates
- Consider watermarking if needed

## File Naming Convention

Use lowercase with hyphens matching the certification ID:
- ✅ `aws-saa/certificate.jpg`
- ✅ `gcp-pca/badge.png`
- ❌ `AWS-SAA/Certificate.jpg`

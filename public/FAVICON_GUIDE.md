# Favicon & Icon Setup Guide

## Current Setup

The website uses `/public/icon.png` as the favicon. This is configured in `app/layout.tsx`.

## How to Change the Icon

### Option 1: Replace the existing file (Recommended)
1. Create your icon image (PNG format recommended)
2. Resize it to 512x512px or 256x256px
3. Save it as `icon.png`
4. Replace `/public/icon.png` with your new file
5. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
6. Restart the dev server

### Option 2: Use Next.js file-based metadata (Alternative)
Next.js 13+ supports automatic favicon detection:

1. Create an icon file in the `app/` directory:
   - `app/icon.png` (PNG format)
   - `app/icon.ico` (ICO format)
   - `app/icon.svg` (SVG format)

2. Next.js will automatically use it as favicon

3. Remove the icons config from `app/layout.tsx` metadata

## Icon Specifications

### Recommended Sizes
- **Favicon**: 32x32px or 16x16px
- **Apple Touch Icon**: 180x180px
- **General Purpose**: 512x512px (will be resized automatically)

### Supported Formats
- PNG (recommended for best quality)
- ICO (traditional favicon format)
- SVG (scalable, modern browsers)

## Troubleshooting

### Icon not showing?

1. **Clear browser cache**
   - Chrome: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   - Or hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

2. **Restart dev server**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

3. **Check file path**
   - Ensure `/public/icon.png` exists
   - File name is case-sensitive

4. **Verify file format**
   - Make sure it's a valid PNG/ICO file
   - Try opening it in an image viewer

5. **Check browser console**
   - Open DevTools (F12)
   - Look for 404 errors for icon.png

6. **Try incognito/private mode**
   - This bypasses cache completely

## Multiple Icon Sizes (Advanced)

For better cross-platform support, you can provide multiple sizes:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
```

## Tools for Creating Icons

- **Online**: 
  - https://favicon.io/ (Generate from text, image, or emoji)
  - https://realfavicongenerator.net/ (Comprehensive favicon generator)
  
- **Design Tools**:
  - Figma
  - Adobe Illustrator
  - Canva

## Current Configuration

Location: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Hidayat Nur Hakim - Portfolio",
  description: "Full-Stack Developer | AI & LLM Enthusiast",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: [{ url: '/icon.png' }],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
  },
};
```

## Quick Fix

If icon still doesn't show after trying everything:

1. Rename your icon to `favicon.ico`
2. Place it in `/public/favicon.ico`
3. Update metadata:
   ```typescript
   icons: {
     icon: '/favicon.ico',
   }
   ```
4. Hard refresh browser

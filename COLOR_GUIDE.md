# Color Guide - Portfolio Website

Semua warna di project ini sudah dikonfigurasi menggunakan CSS Variables di `app/globals.css` untuk memudahkan customization.

## 🎨 Color Variables

### Background Colors
```css
--background: #ffffff          /* Background utama website */
--foreground: #25343F          /* Warna teks utama */
```

### Card Colors
```css
--card-bg: #DCDCDC            /* Background card (abu-abu terang) */
--card-border: #000000        /* Border card (HITAM untuk kesan classic) */
--card-shadow: #5A7863        /* Shadow card (hijau medium) */
```

### Button Colors
```css
--button-primary-bg: #000000          /* Background button primary (HITAM) */
--button-primary-text: #ffffff        /* Text button primary */
--button-secondary-bg: #ffffff        /* Background button secondary */
--button-secondary-text: #25343F     /* Text button secondary */
--button-secondary-border: #000000   /* Border button secondary (HITAM) */
```

### Text Colors
```css
--text-primary: #25343F               /* Text utama */
--text-secondary: rgba(37, 52, 63, 0.7)  /* Text secondary (70% opacity) */
--text-muted: rgba(37, 52, 63, 0.5)      /* Text muted (50% opacity) */
```

### Accent Colors
```css
--accent-green: #5A7863              /* Accent hijau untuk highlight */
--accent-light: rgba(37, 52, 63, 0.1)  /* Accent light untuk hover */
```

### Status Colors
```css
--status-available: #5A7863          /* Status "Available to Work" */
```

### Border & Shadow
```css
--border-width: 3px                  /* Ketebalan border */
--shadow-sm: 4px 4px 0px var(--card-shadow)    /* Shadow kecil */
--shadow-md: 8px 8px 0px var(--card-shadow)    /* Shadow medium */
--shadow-lg: 12px 12px 0px var(--card-shadow)  /* Shadow besar */
```

### Border Radius
```css
--radius-sm: 12px                    /* Border radius kecil */
--radius-md: 16px                    /* Border radius medium */
--radius-lg: 24px                    /* Border radius besar */
--radius-xl: 32px                    /* Border radius extra besar */
```

## 🔄 Cara Mengganti Warna

### 1. Edit di globals.css
Buka file `app/globals.css` dan ubah nilai variable yang diinginkan:

```css
:root {
  /* Contoh: Ganti warna card menjadi biru */
  --card-bg: #E3F2FD;
  --card-border: #1976D2;
  --card-shadow: #42A5F5;
}
```

### 2. Warna akan otomatis berubah di seluruh project
Tidak perlu mengubah file component satu per satu!

## 🎨 Rekomendasi Color Schemes

### Scheme 1: Blue Professional
```css
--card-bg: #E3F2FD;
--card-border: #1976D2;
--card-shadow: #42A5F5;
--accent-green: #42A5F5;
```

### Scheme 2: Purple Creative
```css
--card-bg: #F3E5F5;
--card-border: #7B1FA2;
--card-shadow: #AB47BC;
--accent-green: #AB47BC;
```

### Scheme 3: Orange Energetic
```css
--card-bg: #FFF3E0;
--card-border: #E65100;
--card-shadow: #FF6F00;
--accent-green: #FF6F00;
```

### Scheme 4: Teal Modern
```css
--card-bg: #E0F2F1;
--card-border: #00695C;
--card-shadow: #00897B;
--accent-green: #00897B;
```

### Scheme 5: Red Bold
```css
--card-bg: #FFEBEE;
--card-border: #C62828;
--card-shadow: #E53935;
--accent-green: #E53935;
```

## 📝 Notes

- Semua warna menggunakan format HEX (#RRGGBB)
- Untuk opacity, gunakan rgba() format
- Shadow menggunakan format: `[x] [y] [blur] [color]`
- Setelah mengubah warna, refresh browser untuk melihat perubahan

## 🔍 Dimana Warna Digunakan

- **--card-bg**: BioCard, Navbar, ProjectCard, ExperienceCard, dll
- **--card-border**: Border semua card dan button
- **--card-shadow**: Shadow effect pada card
- **--button-primary-bg**: Button "Collaboration"
- **--button-secondary-bg**: Button "Resume"
- **--accent-green**: Badge status, highlights

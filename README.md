# Šumava Apartments - Next.js Website

Modern website for two apartments in Šumava (Prášily and Železná Ruda) built with Next.js and configured for static export.

## 🚀 Technologies

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Static export** (ready for standard hosting)

## 📁 Project Structure

```
apartmany-sumava/
├── app/                          # Next.js pages
│   ├── apartman/[slug]/         # Apartment detail (dynamic page)
│   ├── galerie/                 # Gallery with filter
│   ├── cenik/                   # Pricing
│   ├── kontakt/                 # Contact & FAQ
│   ├── okoli/                   # Trip suggestions
│   ├── rezervace/               # Booking page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── Navbar.tsx               # Navigation
│   ├── Hero.tsx                 # Hero section
│   ├── ApartmentCard.tsx        # Apartment card
│   ├── SectionHeading.tsx       # Section headings
│   └── Footer.tsx               # Footer
├── content/                      # Data model
│   ├── apartments.ts            # Apartment data
│   ├── site.ts                  # Global site data
│   └── trips.ts                 # Trip suggestions
├── public/images/               # Images
│   ├── prasily/                 # Prášily images
│   ├── zelezna-ruda/            # Železná Ruda images
│   └── shared/                  # Shared images
└── out/                         # Static export (after build)
```

## 🎨 Design System

### Color Palette
- **Forest Dark**: `#1a3a2e` - Dark green
- **Charcoal**: `#2c3531` - Charcoal
- **Cream**: `#f4f1ea` - Cream
- **Copper**: `#b87333` - Copper (accent)
- **Mist**: `#e0e5e3` - Mist

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)

## 🛠️ Installation & Development

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Website will be available at `http://localhost:3000`

### Build & Export

```bash
# Build project
npm run build
```

After build, the `out/` folder will contain the complete static website.

## 📤 Deployment to Hosting

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload to hosting
1. Open your FTP client (FileZilla, WinSCP, etc.)
2. Connect to your hosting
3. Navigate to `public_html/`
4. Upload **entire contents** of `out/` folder to `public_html/`

**Important**: Upload only CONTENTS of `out/` folder, not the folder itself!

### Hosting Structure
```
public_html/
├── index.html
├── apartman/
│   ├── prasily/
│   └── zelezna-ruda/
├── galerie/
├── cenik/
├── kontakt/
├── okoli/
├── rezervace/
├── _next/
└── images/
```

## 📸 How to Add Your Own Photos

### 1. Prepare Photos
- Recommended size: min. 1920x1080px
- Format: JPG (optimized for web)
- Naming: numerical (01.jpg, 02.jpg, etc.)

### 2. Photo Locations

#### Hero Images
```
public/images/prasily/hero.jpg
public/images/zelezna-ruda/hero.jpg
public/images/shared/hero-homepage.jpg
```

#### Apartment Galleries
```
public/images/prasily/gallery/01.jpg to 10.jpg
public/images/zelezna-ruda/gallery/01.jpg to 10.jpg
```

#### Trip Suggestions
```
public/images/shared/certovo-jezero.jpg
public/images/shared/spicak.jpg
public/images/shared/magistrala.jpg
public/images/shared/cyklo.jpg
public/images/shared/pancirska.jpg
public/images/shared/modrava.jpg
```

### 3. After Adding Photos
```bash
npm run build
```
Then upload new `out/` contents to hosting.

## ✏️ How to Edit Content

### Contact Information
Edit `content/site.ts`:
```typescript
contact: {
  phone: '+420123456789',
  phoneDisplay: '+420 123 456 789',
  email: 'info@apartmany-sumava.cz',
}
```

### Apartment Prices
Edit `content/apartments.ts`:
```typescript
pricing: [
  {
    season: 'High Season (summer, winter)',
    pricePerNight: 'from 1,800 CZK',
    minNights: 2,
  },
]
```

### Apartment Features
Edit `features` array in `content/apartments.ts`:
```typescript
features: [
  { icon: '🏠', label: 'Entire apartment' },
  { icon: '🅿️', label: 'Free parking' },
  // ...
]
```

### Trip Suggestions
Edit `content/trips.ts`

After any content change:
```bash
npm run build
```

## 🔧 Technical Notes

### Static Export
Website is configured for static export (`output: 'export'` in `next.config.ts`). This means:
- No server-side rendering
- All pages are pre-rendered as HTML
- Works on any hosting (doesn't need Node.js support)

### Images
Next.js Image component is set to `unoptimized: true` for static export. Recommended to optimize images before upload (e.g., using TinyPNG).

### SEO
- Each page has its own metadata (title, description)
- Open Graph tags for social media sharing
- Semantic HTML for better accessibility

## 📝 License

© 2026 Apartmány Šumava. All rights reserved.

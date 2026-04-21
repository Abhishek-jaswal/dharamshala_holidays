# 🌿 SKD Holidays — Official Website

**Dharamshala's #1 Taxi, Bike Rental & Tour Package Service**

A production-ready Next.js 14 website with full SEO, PWA support, and conversion-optimized design.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## 📁 Folder Structure

```
skd-holidays/
├── public/
│   ├── favicon.svg          # Leaf-style brand icon
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # SEO crawl rules
│   └── og-image.jpg         # ← Add your OG image (1200×630)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + SEO + structured data
│   │   ├── page.tsx         # 🏠 Home page
│   │   ├── globals.css      # Tailwind + custom styles
│   │   ├── sitemap.ts       # Auto sitemap generation
│   │   ├── taxi/
│   │   │   └── page.tsx     # 🚕 Taxi services page
│   │   ├── rentals/
│   │   │   └── page.tsx     # 🏍️ Bike & scooty rental page
│   │   ├── packages/
│   │   │   └── page.tsx     # 🏔️ Tour packages page
│   │   └── contact/
│   │       └── page.tsx     # 📞 Contact page
│   │
│   ├── components/
│   │   ├── Navbar.tsx        # Responsive nav with mobile menu
│   │   ├── Hero.tsx          # Hero + quick booking form
│   │   ├── Services.tsx      # 3 service cards
│   │   ├── WhyChooseUs.tsx   # Trust signals + stats
│   │   ├── PopularRoutes.tsx # Route pricing cards
│   │   ├── Testimonials.tsx  # Customer reviews
│   │   ├── Gallery.tsx       # Photo gallery
│   │   ├── Footer.tsx        # Site-wide footer
│   │   ├── FloatingWhatsApp.tsx  # Floating WA button
│   │   └── StickyBottomBar.tsx   # Mobile Call+WA bar
│   │
│   └── lib/
│       └── constants.ts      # ⚠️ UPDATE YOUR CONTACT INFO HERE
│
├── tailwind.config.ts        # Custom theme (green/mountain palette)
├── next.config.mjs           # Image optimization + security headers
├── package.json
└── tsconfig.json
```

---

## ⚙️ Configuration — IMPORTANT

### 1. Update Your Contact Details
Edit `src/lib/constants.ts`:

```ts
export const BUSINESS = {
  phone:    '+91-98057-XXXXX',   // ← Your real phone number
  phoneRaw: '9805700000',        // ← Digits only (for tel: link)
  whatsapp: '919805700000',      // ← Country code + number (no +)
  email:    'skdholidays@gmail.com',
  address:  'Main Market, Dharamshala, HP – 176215',
  ...
}
```

### 2. Add Your OG Image
Place a 1200×630 JPG at `public/og-image.jpg` for social sharing previews.

### 3. Add PWA Icons
Generate icons at https://maskable.app and place:
- `public/icon-192.png` (192×192)
- `public/icon-512.png` (512×512)

### 4. Update Map Embed
In `src/lib/constants.ts`, replace `mapEmbed` with your Google Maps embed URL:
1. Go to Google Maps → Find your business
2. Share → Embed a map → Copy the `src` URL

### 5. Update Domain in Sitemap
Replace `https://skdholidays.in` with your actual domain in:
- `src/app/layout.tsx` (metadataBase)
- `src/app/sitemap.ts`

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary Green | `#16a34a` | Buttons, accents, CTAs |
| Dark Green | `#052e16` | Hero overlays, footer |
| Light Green | `#f0fdf4` | Card backgrounds |
| Font (Display) | Playfair Display | Headings, brand |
| Font (Body) | DM Sans | Paragraphs, UI |

---

## 📈 SEO Features

- ✅ Next.js Metadata API (title, description, OG, Twitter)
- ✅ LocalBusiness structured data (JSON-LD)
- ✅ Auto sitemap via `src/app/sitemap.ts`
- ✅ robots.txt
- ✅ Canonical URLs per page
- ✅ Mobile-first responsive (Core Web Vitals optimized)
- ✅ next/image with lazy loading + AVIF/WebP
- ✅ Security headers (X-Frame-Options, CSP)

---

## 📱 PWA

Install the site as an app on mobile:
- Add `public/icon-192.png` and `public/icon-512.png`
- The `manifest.json` is already wired in `layout.tsx`
- Works offline for previously visited pages (add next-pwa for full SW support)

---

## 🔧 Customization

### Adding a New Page
```bash
mkdir src/app/blog
touch src/app/blog/page.tsx
```

### Updating Prices / Routes
Edit the arrays in `src/lib/constants.ts` — changes auto-reflect everywhere.

### Changing Colors
Edit `tailwind.config.ts` → `theme.extend.colors.primary`.

---

## 🚢 Deployment

**Vercel (Recommended — free tier)**
```bash
npm i -g vercel
vercel
```

**Other options:** Netlify, Railway, DigitalOcean App Platform

---

## 📞 Support

Built for SKD Holidays, Dharamshala.  
© 2024 SKD Holidays. All rights reserved.

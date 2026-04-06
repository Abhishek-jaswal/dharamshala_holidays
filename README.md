# 🏔️ Dharamshala Holidays — Website

A fast, SEO-optimised travel & taxi booking website for **Dharamshala Holidays**, built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## 📞 Business Contact

| Detail | Value |
|--------|-------|
| **Business Name** | Dharamshala Holidays |
| **Phone / Call** | +91 76500 14729 |
| **WhatsApp** | +91 76500 14729 |
| **WhatsApp Link** | Opens with pre-filled booking message |
| **Address** | Near Bus Stand, McLeod Ganj, Dharamshala, HP 176219 |

> ✏️ All contact details are centralised in one file:  
> `src/constants/business.ts` — edit once, updates everywhere.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar, Footer, floating buttons)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── destinations/page.tsx
│   ├── faq/page.tsx
│   ├── gallery/page.tsx
│   ├── pricing/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   ├── taxi/page.tsx
│   │   ├── scooty-on-rent/page.tsx
│   │   ├── bike-on-rent/page.tsx
│   │   └── airport-pickup/page.tsx
│   ├── globals.css             # Global styles & Tailwind
│   ├── robots.ts               # SEO robots config
│   └── sitemap.ts              # Auto-generated sitemap
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky responsive navbar with dropdown
│   │   └── Footer.tsx          # Full footer with links & contact
│   ├── sections/
│   │   ├── CTASection.tsx      # Call-to-action section
│   │   ├── ContactForm.tsx     # Contact form
│   │   ├── FAQSection.tsx      # Accordion FAQ
│   │   ├── PricingCard.tsx     # Pricing display card
│   │   ├── ServiceCard.tsx     # Service listing card
│   │   └── TestimonialCard.tsx # Customer review card
│   └── shared/
│       ├── Breadcrumbs.tsx     # Page breadcrumbs
│       ├── CallFloatingButton.tsx    # 📞 Sticky call button (bottom-right)
│       ├── SectionHeading.tsx        # Reusable section title
│       └── WhatsAppFloatingButton.tsx # 💬 Sticky WhatsApp button (above call)
│
├── constants/
│   └── business.ts             # ⭐ SINGLE SOURCE OF TRUTH for all business data
│
└── lib/
    ├── metadata.ts             # Shared SEO metadata helpers
    ├── schema.ts               # JSON-LD structured data (Google rich results)
    └── utils.ts                # Tailwind class merger utility
```

---

## ⭐ Key File: `src/constants/business.ts`

This is the **only file you need to edit** to update all contact info, names, and links across the entire website.

```ts
export const BUSINESS = {
  name: "Dharamshala Holidays",
  phone: "+91 76500 14729",
  phoneRaw: "+917650014729",
  whatsapp: "917650014729",
  whatsappMessage: "Hi! I found you on Dharamshala Holidays website...",
  email: "info@dharamshalaholicays.com",
  address: "Near Bus Stand, McLeod Ganj, Dharamshala...",
  // ... social links, business hours, maps
};
```

---

## 📱 WhatsApp & Call Integration

### WhatsApp Button
- Floating button (bottom-right, above call button)
- Opens `https://wa.me/917650014729?text=...` with a **pre-filled message**
- Message: *"Hi! I found you on Dharamshala Holidays website. I want to book a taxi/scooty. Please share details."*
- Pulse animation to draw attention

### Call Button
- Floating button (bottom-right)
- Opens `tel:+917650014729` — triggers native phone dialler on mobile
- Works on both Android and iOS

To change the WhatsApp pre-filled message, edit `whatsappMessage` in `src/constants/business.ts`.

---

## ⚡ Performance Optimizations

| Optimization | Details |
|---|---|
| **Font preconnect** | `<link rel="preconnect">` to Google Fonts in `<head>` for faster font load |
| **font-display: swap** | Text visible immediately; web font swaps in when ready (no invisible text) |
| **Image formats** | AVIF + WebP served automatically by Next.js Image component |
| **Aggressive caching** | Static assets cached 1 year; images cached 30 days |
| **Tree-shaking** | `optimizePackageImports: ["lucide-react"]` reduces JS bundle size |
| **HTTP headers** | Security + cache headers added via `next.config.js` |
| **Reduced motion** | `prefers-reduced-motion` CSS query respects user preferences |
| **App Router** | Next.js 14 App Router enables React Server Components (zero JS for static pages) |

---

## 🗺️ Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services, testimonials, FAQ |
| `/about` | About the business |
| `/services` | All services overview |
| `/services/taxi` | Taxi service details & pricing |
| `/services/scooty-on-rent` | Scooty rental details |
| `/services/bike-on-rent` | Bike rental details |
| `/services/airport-pickup` | Airport pickup/drop service |
| `/destinations` | Popular destinations with prices |
| `/pricing` | Full pricing table |
| `/gallery` | Photo gallery |
| `/faq` | Frequently asked questions |
| `/contact` | Contact form + map |

---

## 🔍 SEO Features

- ✅ Auto-generated `sitemap.xml` via `src/app/sitemap.ts`
- ✅ `robots.txt` via `src/app/robots.ts`
- ✅ JSON-LD structured data (Local Business schema) for Google rich results
- ✅ Per-page `metadata` with title, description, and keywords
- ✅ `metadataBase` for correct canonical URLs
- ✅ Open Graph ready

---

## 🛠️ Customisation Checklist

- [ ] Update `src/constants/business.ts` with your real domain URL
- [ ] Add Google Search Console verification code in `src/app/layout.tsx`
- [ ] Replace placeholder Google Maps embed URL with your real location
- [ ] Add real Instagram / Facebook links in `business.ts`
- [ ] Add real photos to `/public/images/`
- [ ] Update email address in `business.ts`

---

## 🧰 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14.2 | React framework, App Router, SSR/SSG |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.3 | Utility-first styling |
| Lucide React | 0.344 | Icons |
| Radix UI | latest | Accessible headless UI primitives |

---

## 📄 License

Private — all rights reserved by Dharamshala Holidays.

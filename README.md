# 🌾 PANJARA AGRO — Farmers Producer Company Limited

**From Farmers to the World — Trusted Agro Supply Chain Partner**

A professional, multi-page B2B website for Panjara Agro Farmers Producer Company Limited — an Indian Farmer Producer Company (FPC) connecting farmer clusters directly to global buyers through ethical aggregation, rigorous quality control, and reliable supply chain management.

> 🌐 **Live Preview**: Clone and run locally (see [Quick Start](#-quick-start))

---

## 📋 Table of Contents

- [About Panjara Agro](#-about-panjara-agro)
- [Features](#-features)
- [Pages Overview](#-pages-overview)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Deployment](#-deployment)

---

## 🏢 About Panjara Agro

**Panjara Agro Farmers Producer Company Limited** is a farmer-owned collective based in **Maharashtra, India**, organized under the Companies Act as a **Farmer Producer Company (FPC)**. Unlike traditional trading companies, FPCs are owned and governed by the farmers themselves — ensuring fair pricing, transparent operations, and direct market access.

### The Problem We Solve

Indian agriculture suffers from a fragmented supply chain where **middlemen capture 40-60% of the value**, leaving farmers with minimal returns and international buyers with inconsistent quality. Panjara Agro eliminates these inefficiencies.

### Our Model

```
👨‍🌾 Farmer Clusters → 🏘️ Collection Centers → 🏭 Processing & QC → 📦 Packaging → 🚢 Export
```

| Aspect | Details |
|--------|---------|
| **Structure** | Farmer Producer Company (FPC) under Companies Act, 2013 |
| **Farmer Network** | 5,000+ farmers across multiple Indian states |
| **Product Categories** | Food Grains, Pulses, Spices, Oilseeds, Fresh Produce |
| **Export Destinations** | 15+ countries — Middle East, Africa, Southeast Asia, Europe, Americas |
| **Monthly Capacity** | 10,000+ Metric Tonnes |
| **Key Ports** | JNPT Mumbai, Mundra, Chennai, Kolkata |

### Core Values

- 🤝 **Fair Trade** — Farmers receive transparent, market-linked pricing
- 🌿 **Sustainable Agriculture** — Promoting organic and low-chemical farming practices
- 📊 **Full Traceability** — Every shipment traced back to farm origin
- 🎓 **Farmer Training** — Capacity building for quality and sustainable yield
- 👥 **Worker Welfare** — Fair wages, safe conditions, zero child labor

### Certifications & Compliance

- **FSSAI** — Food Safety & Standards Authority of India
- **ISO 22000** — Food Safety Management System
- **NPOP / NOP** — Organic certification options
- **GLOBALGAP** — Global Good Agricultural Practices
- **HACCP** — Hazard Analysis & Critical Control Points

---

## ✨ Features

### Website Features
- 🎨 **Premium B2B Design** — Professional green/brown/gold color palette with modern typography (Inter + Outfit)
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu, adaptive grids
- ⚡ **Animated Interactions** — Scroll-triggered fade-ins, animated counters, hover effects
- 🗺️ **Interactive SVG Map** — Animated world map showing trade routes and export destinations
- 📝 **B2B Inquiry System** — Comprehensive trade inquiry form (no e-commerce cart)
- 🔍 **SEO-Optimized** — Meta tags, Open Graph, JSON-LD schema markup for Organization + Product catalog
- 📊 **Admin-Editable Catalog** — Product data in a simple JSON file for easy updates
- 💬 **WhatsApp Integration** — One-click WhatsApp chat for quick trade inquiries

### Technical Features
- ⚛️ **React 19** with functional components and hooks
- 🛣️ **React Router v7** for client-side routing
- ⚡ **Vite 7** for lightning-fast dev server and builds
- 🎯 **Component-Based Architecture** — Reusable Navbar, Footer, Hero, InquiryForm, AnimatedCounter
- 🎨 **CSS Custom Properties** — Complete design system with tokens for colors, spacing, shadows, transitions
- 📦 **Zero external UI libraries** — Pure CSS for maximum control and minimal bundle size

---

## 📄 Pages Overview

| # | Page | Route | Description |
|---|------|-------|-------------|
| 1 | **Home** | `/` | Hero banner, trust stats, commodity portfolio, sustainability section, CTA |
| 2 | **About Us** | `/about` | Mission/Vision, FPC model, middleman elimination, company values |
| 3 | **Products** | `/products` | Category-filtered product catalog with specs, grading, and inquiry links |
| 4 | **Export Services** | `/export-services` | 5-step export timeline: aggregation → grading → packaging → documentation → shipping |
| 5 | **Import Services** | `/import-services` | Commodity sourcing, trade facilitation, quality inspection, warehousing |
| 6 | **Farmer Network** | `/farmer-network` | Farmer stories, regional coverage, training programs, impact metrics |
| 7 | **Quality Assurance** | `/quality` | 6-stage QC pipeline, certifications, traceability flow, ethical sourcing |
| 8 | **Global Trade** | `/global-trade` | SVG world map, 6 regional trade cards, trade advantages, stats |
| 9 | **Infrastructure** | `/infrastructure` | Supply chain pipeline, facilities, capacity stats, port logistics |
| 10 | **Contact** | `/contact` | Trade inquiry form, contact info, WhatsApp CTA, Google Maps, business hours |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 19](https://react.dev/) | UI framework |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Vite 7](https://vitejs.dev/) | Build tool & dev server |
| Vanilla CSS | Styling (custom properties design system) |
| [Inter](https://fonts.google.com/specimen/Inter) + [Outfit](https://fonts.google.com/specimen/Outfit) | Typography |
| JSON | Product data layer |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ — [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Supabase Account** for the database

### Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/FGARMY/Panjara_agro.git
cd Panjara_agro

# 2. Setup Backend Environment Variables
# Create a .env file in the backend/ directory with your Supabase credentials
echo "SUPABASE_URL=your_url" > backend/.env
echo "SUPABASE_ANON_KEY=your_key" >> backend/.env
echo "PORT=3001" >> backend/.env

# 3. Install dependencies across the monorepo
npm install

# 4. Start the development servers (Frontend & Backend simultaneously)
npm run dev

# 5. Open in browser
# Navigate to http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build for the frontend
npm run build
```

---

## 📁 Project Structure

```
panjara-agro/
├── index.html              # SEO meta, schema markup, font imports
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── run.bat                 # One-click Windows launcher
├── public/
│   └── vite.svg            # Favicon
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Router setup with all 10 routes
│   ├── index.css           # 🎨 Global design system (tokens, utilities, components)
│   ├── App.css             # App-level styles
│   ├── assets/
│   │   ├── hero-banner.png     # Homepage hero image
│   │   ├── farmer-network.png  # Farmer network hero
│   │   └── products-hero.png   # Products page hero
│   ├── components/
│   │   ├── Navbar.jsx / .css       # Sticky nav with mobile hamburger
│   │   ├── Footer.jsx / .css       # Site footer with links and contact
│   │   ├── Hero.jsx / .css         # Reusable hero banner component
│   │   ├── InquiryForm.jsx / .css  # B2B trade inquiry form
│   │   └── AnimatedCounter.jsx     # Scroll-triggered number animation
│   ├── data/
│   │   └── products.json   # 📊 Admin-editable product catalog (18 products)
│   ├── hooks/
│   │   └── useScrollAnimation.js   # IntersectionObserver for fade-in animations
│   └── pages/
│       ├── Home.jsx / .css
│       ├── About.jsx / .css
│       ├── Products.jsx / .css
│       ├── ExportServices.jsx
│       ├── ImportServices.jsx
│       ├── FarmerNetwork.jsx / .css
│       ├── Quality.jsx / .css
│       ├── GlobalTrade.jsx / .css
│       ├── Infrastructure.jsx / .css
│       ├── Contact.jsx / .css
│       └── Services.css            # Shared styles for Export/Import pages
```

---

## ⚙️ Customization

### Updating Products

Edit `src/data/products.json` — each product has:

```json
{
    "id": "basmati-rice",
    "name": "Basmati Rice",
    "category": "Food Grains",
    "origin": "Punjab, Haryana, Madhya Pradesh",
    "qualityStandards": "FSSAI Certified, ISO 22000, Non-GMO",
    "packaging": "25 kg / 50 kg PP bags, Custom packaging available",
    "exportCapacity": "500+ MT per month",
    "description": "Premium long-grain Basmati rice..."
}
```

### Updating Contact Info

- **Footer** — `src/components/Footer.jsx`
- **Contact page** — `src/pages/Contact.jsx`
- **WhatsApp number** — Search for `wa.me/91XXXXXXXXXX` and replace

### Changing Colors

All colors are CSS custom properties in `src/index.css`:

```css
:root {
    --green-800: #1B5E20;   /* Primary dark */
    --green-700: #2E7D32;   /* Primary */
    --gold: #C49B2A;        /* Accent */
    --brown-600: #5D4037;   /* Secondary */
    --cream: #FFF8E1;       /* Background alt */
}
```

---

## 🌍 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the `dist/` folder to Netlify
```

### Static Hosting

Run `npm run build` — the `dist/` folder contains the complete static site ready for any web hosting provider.

---

## 📜 License

This project is proprietary to Panjara Agro Farmers Producer Company Limited.

---

<p align="center">
  <strong>🌾 Panjara Agro — Farmer-owned · Ethically sourced · Globally trusted</strong>
</p>

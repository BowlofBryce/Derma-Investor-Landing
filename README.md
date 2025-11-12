# Derma Finance Landing Page

Production-grade landing page for Derma Finance - the first BNPL built for multi-session services.

## Features

- **Striking Black/White/Gold Design**: Premium aesthetic with glassmorphism effects
- **Smooth Animations**: Framer Motion micro-interactions and scroll-triggered reveals
- **Fully Responsive**: Mobile-first design that scales beautifully to desktop
- **Accessible**: WCAG AA compliant with keyboard navigation and screen reader support
- **High Performance**: Optimized for excellent Lighthouse scores

## Tech Stack

- Next.js 13.5 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI (via shadcn/ui)
- Lucide React Icons

## Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and theme tokens
├── components/            # React components
│   ├── Nav.tsx           # Sticky navigation
│   ├── Hero.tsx          # Hero section with animated background
│   ├── ValueCard.tsx     # Value proposition cards
│   ├── CustomerJourney.tsx
│   ├── MerchantJourney.tsx
│   ├── Calculator.tsx    # Interactive ROI calculator
│   ├── Economics.tsx     # Economics visualization
│   ├── Compliance.tsx    # Compliance information grid
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── FinalCTA.tsx      # Call-to-action section
│   └── Footer.tsx        # Site footer
├── content/
│   └── site.ts           # Centralized content management
└── components/ui/        # Reusable UI primitives

```

## Design System

### Color Palette
- **Background**: `#0B0B0C` (near-black)
- **Surface**: `#111214`
- **Foreground**: `#F5F7FA` (near-white)
- **Gold**: `#D4AF37`
- **Gold Dark**: `#B8962F`
- **Glass**: `rgba(255,255,255,0.06)` with backdrop blur

### Typography
- **Body/UI**: Inter (variable font)
- Tight tracking on headings, generous line-height on body text

## Accessibility Features

- Semantic HTML throughout
- Skip-to-content link for keyboard users
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Color contrast AA or better

## Performance Optimizations

- Next.js static generation
- Optimized font loading with `font-display: swap`
- Lazy loading for non-critical sections
- Minimal dependencies
- Tree-shaken icons from Lucide

## Content Management

All content is centralized in `/content/site.ts` for easy editing without touching component code.

## License

© 2025 Derma Finance, Inc.

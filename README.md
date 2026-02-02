# Taipan USA - Website Redesign

Modern, mobile-first website for Taipan USA Dim Sum & Bakery in Sacramento, CA.

## Overview

This is a complete redesign of the Taipan USA website, built with modern web technologies and best practices. The site features:

- **Modern Design**: Clean, appetizing layout with warm Chinese-inspired colors (red, gold, amber)
- **Mobile-First**: Fully responsive design optimized for all devices
- **Smooth Animations**: Subtle Framer Motion animations for professional feel
- **SEO Optimized**: Proper metadata, Open Graph tags, and JSON-LD structured data
- **Performance**: Optimized images via Next.js Image component
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation support

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Auth**: Clerk (installed for future admin features)
- **Deployment**: Vercel-ready

## Project Structure

```
taipan-redesign/
├── app/
│   ├── layout.tsx          # Root layout with navbar, footer, metadata
│   ├── page.tsx            # Homepage
│   ├── menu/page.tsx       # Menu page
│   ├── catering/page.tsx   # Catering page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── globals.css         # Global styles with brand colors
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Footer.tsx          # Footer with contact info
│   ├── Hero.tsx            # Hero section with CTA
│   ├── FeaturedProducts.tsx # Signature dishes showcase
│   ├── AboutSection.tsx    # About/story section
│   ├── MenuPreview.tsx     # Tabbed menu preview
│   ├── Features.tsx        # Key features grid
│   ├── Testimonials.tsx    # Customer testimonials carousel
│   ├── LocationHours.tsx   # Contact info + Google Maps
│   └── CTASection.tsx      # Call-to-action banner
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- A code editor (VS Code recommended)

### Installation

1. Clone or navigate to the project:
   ```bash
   cd taipan-redesign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will hot-reload as you make changes to the code.

### Build for Production

```bash
npm run build
npm run start
```

## Key Features

### Homepage Sections

1. **Hero**: Full-screen hero with background image and dual CTAs
2. **Featured Products**: Grid of 6 signature dim sum items with hover effects
3. **About**: Two-column layout with story and image grid
4. **Menu Preview**: Tabbed interface for Dim Sum, Bakery, Beverages, Catering
5. **Features**: 4-column grid highlighting handmade, traditional, fast service, family-owned
6. **Testimonials**: Carousel with placeholder reviews
7. **Location & Hours**: Contact info + embedded Google Maps
8. **CTA Section**: Final call-to-action before footer

### Navigation

- Sticky navbar with transparent-to-solid transition on scroll
- Mobile hamburger menu with smooth animation
- Links to all pages + prominent "Order Online" button (DoorDash)

### Pages

- **Menu**: Full menu display with category tabs
- **Catering**: Catering packages and pricing with contact form CTA
- **About**: Family story, values, behind-the-scenes gallery
- **Contact**: Contact form + info + Google Maps

## Placeholder Content

### Images

All images use Unsplash URLs and are clearly placeholders. Search terms used:
- "dim sum"
- "chinese dumplings"
- "asian bakery"
- "bao buns"
- "egg tarts"

### Text

Placeholder text is marked with `[brackets]` where actual business information is needed:
- `[Owner's story will go here]`
- `[Actual customer reviews coming soon]`
- `[year]` for founding year

### Business Information (Already Integrated)

- **Address**: 4400 Freeport Blvd, Suite 160, Sacramento, CA 95822
- **Phone**: (916) 330-1919 (clickable `tel:` links)
- **Hours**: Monday-Sunday, 7:00 AM - 6:00 PM
- **DoorDash**: Full order link integrated throughout

## Customization

### Colors

Brand colors are defined in `app/globals.css`:
```css
--primary-red: #dc2626;
--primary-amber: #f59e0b;
--accent-gold: #fcd34d;
```

Use Tailwind classes: `bg-red-600`, `text-amber-500`, `border-amber-300`

### Images

Replace Unsplash URLs with actual photos:
1. Add images to `public/images/`
2. Update `src` in Image components: `src="/images/your-photo.jpg"`
3. Update `next.config.ts` if using external domains

### Content

1. **Owner's Story**: Update `AboutSection.tsx` and `app/about/page.tsx`
2. **Menu Items**: Modify arrays in `MenuPreview.tsx`
3. **Testimonials**: Edit array in `Testimonials.tsx` (or integrate Google Reviews API)
4. **Business Info**: Update `Footer.tsx`, `LocationHours.tsx`, `layout.tsx`

## SEO & Metadata

Structured data (JSON-LD) for local business is included in `app/layout.tsx`:
- Business name, address, phone
- Opening hours
- Cuisine type
- Price range

Update metadata in each page's `metadata` export for page-specific SEO.

## Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels on interactive elements
- Minimum 16px font size on mobile
- Touch targets ≥44px
- Keyboard navigation support

## Performance

- Next.js Image component for automatic optimization
- Lazy loading for below-the-fold content
- Minimal animation overhead (Framer Motion optimized)
- Fast page loads (<3 seconds target)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (auto-configured for Next.js)

### Other Platforms

Build command: `npm run build`
Output directory: `.next`
Install command: `npm install`

## Future Enhancements

- [ ] Integrate Clerk for admin dashboard
- [ ] Connect to Neon PostgreSQL for menu management
- [ ] Add real customer reviews from Google API
- [ ] Implement contact form backend
- [ ] Add online ordering system (beyond DoorDash)
- [ ] Multi-language support (English/Chinese)
- [ ] Blog/news section
- [ ] Photo gallery page

## Important Notes

- All placeholder images are from Unsplash (royalty-free)
- No copyrighted content from original site was used
- DoorDash link is functional and tested
- Google Maps embed uses actual business address
- Phone numbers are formatted for click-to-call

## License

This is a custom website built for Taipan USA Dim Sum & Bakery.

## Support

For questions or issues with the site, contact the development team.

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS

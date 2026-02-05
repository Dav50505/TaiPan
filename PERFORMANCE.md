# Core Web Vitals & Performance Optimization

This document outlines the performance optimizations implemented and recommendations for monitoring Core Web Vitals.

## Current Optimizations

### 1. Image Optimization ✅
- **Next.js Image Component**: All images use `next/image` for automatic optimization
- **WebP Format**: All images converted to WebP for smaller file sizes
- **Lazy Loading**: Below-fold images use `loading="lazy"` attribute
- **Priority Loading**: Hero images use `priority` prop for faster LCP
- **Explicit Dimensions**: All images have width/height to prevent CLS

### 2. Layout Shift Prevention ✅
- **Fixed Image Dimensions**: All images have explicit width/height
- **Breadcrumb Container**: Breadcrumb component has consistent spacing
- **Font Loading**: Using `next/font` for optimized font loading with `font-display: swap`
- **No Layout Shift Components**: All components maintain consistent heights

### 3. JavaScript Optimization ✅
- **Code Splitting**: Next.js automatic code splitting per route
- **Client Components**: Only interactive components marked as `'use client'`
- **Server Components**: Static content rendered on server
- **Framer Motion**: Loaded only where needed for animations

### 4. Mobile Optimization ✅
- **Responsive Design**: All components use Tailwind's responsive utilities
- **Touch Targets**: Buttons and links meet 44x44px minimum
- **Viewport Meta**: Proper viewport configuration in layout
- **Mobile-First CSS**: Tailwind mobile-first approach

## Core Web Vitals Targets

### Largest Contentful Paint (LCP) - Target: < 2.5s
**Current Implementation:**
- Hero images use `priority` prop
- WebP format reduces file size by ~30%
- Images have explicit dimensions
- Server-side rendering for faster initial load

**Recommendations:**
- Monitor LCP using Google PageSpeed Insights
- Consider image preloading for hero section
- Use CDN for static assets (Vercel handles this)

### First Input Delay (FID) - Target: < 100ms
**Current Implementation:**
- Minimal JavaScript on initial load
- Client components only where needed
- No heavy third-party scripts blocking main thread
- Google Analytics loads with `strategy="afterInteractive"`

**Recommendations:**
- Monitor FID in production using GA4 or web-vitals
- Keep JavaScript bundles small
- Avoid long tasks on the main thread

### Cumulative Layout Shift (CLS) - Target: < 0.1
**Current Implementation:**
- All images have width/height attributes
- Font loading optimized with `next/font`
- No dynamic content insertions above fold
- Consistent spacing in all components

**Recommendations:**
- Test CLS on mobile devices
- Ensure no ads or dynamic content cause shifts
- Reserve space for any late-loading content

## Monitoring Setup

### Google Analytics 4 Integration ✅
- **Setup**: Add `NEXT_PUBLIC_GA4_MEASUREMENT_ID` to `.env.local`
- **Component**: `GoogleAnalytics.tsx` in root layout
- **Event Tracking**: Custom events for key interactions

### Custom Events Tracked:
1. `order_click` - Order button clicks with source tracking
2. `phone_click` - Phone number clicks with source tracking
3. `contact_form_submit` - Contact form submissions
4. `blog_post_view` - Blog post views with title/slug
5. `internal_link_click` - Internal navigation tracking
6. `menu_view` - Menu item interactions

### Web Vitals Monitoring
To monitor Core Web Vitals in production, consider:

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **Chrome User Experience Report**: https://web.dev/chrome-ux-report/
3. **Vercel Analytics**: Built-in performance monitoring (if on paid plan)
4. **web-vitals Library**: Real user monitoring

Example web-vitals integration:
```typescript
// lib/web-vitals.ts
import { onCLS, onFID, onLCP } from 'web-vitals';

export function reportWebVitals() {
  onCLS(metric => {
    // Send to GA4 or monitoring service
    console.log('CLS:', metric);
  });
  onFID(metric => {
    console.log('FID:', metric);
  });
  onLCP(metric => {
    console.log('LCP:', metric);
  });
}
```

## Performance Checklist

### Before Deployment
- [ ] Run `npm run build` and check bundle sizes
- [ ] Test on mobile device (real device, not just emulator)
- [ ] Run Lighthouse audit (aim for 90+ performance score)
- [ ] Check PageSpeed Insights (mobile and desktop)
- [ ] Verify all images are optimized (WebP format)
- [ ] Test on slow 3G network (Chrome DevTools)

### After Deployment
- [ ] Monitor Core Web Vitals in GA4
- [ ] Check real user metrics in Google Search Console
- [ ] Set up performance alerts in monitoring tools
- [ ] Review Vercel Analytics (if available)
- [ ] Test from different geographic locations

## Mobile Testing Recommendations

### Devices to Test
1. **iOS**: iPhone 12/13/14 (Safari)
2. **Android**: Pixel 5/6 (Chrome)
3. **Tablets**: iPad, Android tablet

### Test Scenarios
1. **Network Conditions**:
   - Fast 3G
   - Slow 3G
   - Offline (should show error gracefully)

2. **Interactions**:
   - Tap targets (minimum 44x44px)
   - Scroll performance
   - Form interactions
   - Image loading

3. **Viewport Sizes**:
   - 375px (mobile)
   - 768px (tablet)
   - 1024px+ (desktop)

## Further Optimization Opportunities

### Short Term
1. Add `<link rel="preconnect">` for external domains (DoorDash, Google Maps)
2. Implement image blur placeholders for better perceived performance
3. Add service worker for offline support (optional)

### Long Term
1. Consider static generation for blog posts (already implemented)
2. Implement incremental static regeneration for dynamic content
3. Add edge caching for API routes
4. Consider using Next.js Image CDN optimization

## Resources

- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Core Web Vitals](https://web.dev/vitals/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

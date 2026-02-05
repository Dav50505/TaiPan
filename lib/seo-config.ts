/**
 * Centralized SEO configuration for Tai Pan Dim Sum & Bakery
 * 
 * To switch from Vercel to production domain, update SITE_URL only
 */

// CHANGE THIS WHEN MOVING TO PRODUCTION DOMAIN
export const SITE_URL = 'https://tai-pan-sage.vercel.app';

export const SITE_NAME = 'Taipan Dim Sum & Bakery';
export const SITE_TAGLINE = 'Authentic Cantonese Cuisine in Sacramento';

export const BUSINESS_INFO = {
  name: 'Taipan Dim Sum & Bakery',
  legalName: 'Taipan USA Dim Sum & Bakery',
  description: "Sacramento's premier dim sum restaurant & bakery. Handcrafted dumplings, fresh baked goods daily. Family-owned. Order online or visit us at Freeport Blvd.",
  phone: '+19163301919',
  phoneDisplay: '(916) 330-1919',
  email: 'info@taipanusa.com', // Update if actual email exists
  priceRange: '$$',
  
  address: {
    street: '4400 Freeport Blvd, Suite 160',
    city: 'Sacramento',
    state: 'CA',
    stateCode: 'CA',
    zip: '95822',
    country: 'United States',
    countryCode: 'US',
  },
  
  coordinates: {
    latitude: 38.5382,
    longitude: -121.5047,
  },
  
  hours: {
    opens: '07:00',
    closes: '18:00',
    timezone: 'America/Los_Angeles',
    display: 'Monday - Sunday: 7:00 AM - 6:00 PM',
  },
  
  cuisines: ['Chinese', 'Cantonese', 'Dim Sum', 'Bakery'],
  
  social: {
    instagram: 'https://www.instagram.com/taipan.usa/',
  },
  
  orderUrl: 'https://www.doordash.com/store/taipan-dim-sum-&-bakery-sacramento-sacramento-37986657/86387556/?pickup=true',
};

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Taipan Dim Sum & Bakery Sacramento',
  defaultTitle: 'Taipan Dim Sum & Bakery Sacramento | Authentic Cantonese Cuisine',
  defaultDescription: BUSINESS_INFO.description,
  
  keywords: [
    'dim sum sacramento',
    'sacramento dim sum restaurant',
    'best dim sum sacramento',
    'chinese bakery sacramento',
    'authentic cantonese restaurant',
    'handmade dumplings sacramento',
    'dim sum near me',
    'best bbq pork buns sacramento',
    'traditional chinese bakery',
    'dim sum freeport boulevard',
  ],
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
  },
  
  twitter: {
    cardType: 'summary_large_image',
  },
};

export const RATING_INFO = {
  ratingValue: 4.5,
  reviewCount: 150,
  bestRating: 5,
  worstRating: 1,
};

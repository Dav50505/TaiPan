/**
 * SEO Metadata Helpers
 * Build Next.js Metadata objects with consistent defaults
 */

import { Metadata } from 'next';
import { SITE_URL, SITE_NAME, SEO_DEFAULTS } from '@/lib/seo-config';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    image = '/bg-img/hero-img.webp',
    type = 'website',
    publishedTime,
    modifiedTime,
    noIndex = false,
  } = options;

  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const allKeywords = [...SEO_DEFAULTS.keywords, ...keywords];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: SEO_DEFAULTS.openGraph.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/**
 * Quick helper for common page types
 */
export const pageMetadata = {
  home: () =>
    buildPageMetadata({
      title: 'Taipan Dim Sum & Bakery Sacramento | Authentic Cantonese Cuisine',
      description:
        "Sacramento's premier dim sum restaurant & bakery. Handcrafted dumplings, fresh baked goods daily. Family-owned. Order online or visit us at Freeport Blvd.",
      path: '/',
      keywords: ['dim sum sacramento', 'authentic cantonese cuisine', 'family owned restaurant'],
    }),

  menu: () =>
    buildPageMetadata({
      title: 'Menu - Dim Sum, Dumplings & Baked Goods',
      description:
        'Explore our authentic dim sum menu featuring handmade dumplings, BBQ pork buns, shrimp har gow, and fresh baked goods. Made daily in Sacramento.',
      path: '/menu',
      keywords: ['dim sum menu sacramento', 'authentic chinese bakery', 'handmade dumplings'],
    }),

  about: () =>
    buildPageMetadata({
      title: 'About Us - Family Tradition & Authentic Recipes',
      description:
        'Learn about our family-owned dim sum restaurant in Sacramento. Traditional Cantonese recipes passed down through generations. Serving fresh, handmade dim sum daily.',
      path: '/about',
      keywords: ['family owned dim sum', 'traditional cantonese recipes', 'sacramento chinese restaurant'],
    }),

  contact: () =>
    buildPageMetadata({
      title: 'Contact Us - Location & Hours | Freeport Blvd Sacramento',
      description:
        'Visit Taipan Dim Sum & Bakery at 4400 Freeport Blvd, Sacramento. Open 7 days a week, 7AM-6PM. Call (916) 330-1919 or order online through DoorDash.',
      path: '/contact',
      keywords: ['taipan sacramento location', 'freeport boulevard restaurant', 'dim sum sacramento hours'],
    }),

  faq: () =>
    buildPageMetadata({
      title: 'FAQ - Common Questions About Our Dim Sum & Bakery',
      description:
        'Get answers to frequently asked questions about Taipan Dim Sum & Bakery. Learn about our menu, reservations, vegetarian options, and more.',
      path: '/faq',
      keywords: ['dim sum faq', 'what is dim sum', 'cantonese food questions'],
    }),

  location: () =>
    buildPageMetadata({
      title: 'Sacramento Dim Sum Restaurant | Best Dim Sum in Sacramento',
      description:
        "Discover why Taipan is Sacramento's top-rated dim sum destination on Freeport Boulevard. Authentic Cantonese cuisine, convenient parking, family-friendly atmosphere.",
      path: '/sacramento-dim-sum',
      keywords: ['best dim sum sacramento', 'freeport dim sum', 'sacramento cantonese restaurant'],
    }),
};

/**
 * Reusable JSON-LD Schema Component
 * Renders structured data for search engines
 */

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Schema Builders
 */

import { BUSINESS_INFO, SITE_URL, RATING_INFO } from '@/lib/seo-config';

export function buildRestaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: BUSINESS_INFO.name,
    image: `${SITE_URL}/bg-img/hero-img.webp`,
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
    servesCuisine: BUSINESS_INFO.cuisines,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.stateCode,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.latitude.toString(),
      longitude: BUSINESS_INFO.coordinates.longitude.toString(),
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: BUSINESS_INFO.hours.opens,
        closes: BUSINESS_INFO.hours.closes,
      },
    ],
    menu: `${SITE_URL}/menu`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING_INFO.ratingValue.toString(),
      reviewCount: RATING_INFO.reviewCount.toString(),
      bestRating: RATING_INFO.bestRating.toString(),
      worstRating: RATING_INFO.worstRating.toString(),
    },
    url: SITE_URL,
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS_INFO.name,
    image: `${SITE_URL}/bg-img/hero-img.webp`,
    description: BUSINESS_INFO.description,
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.stateCode,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.latitude.toString(),
      longitude: BUSINESS_INFO.coordinates.longitude.toString(),
    },
    url: SITE_URL,
    hasMenu: `${SITE_URL}/menu`,
  };
}

export function buildMenuItemSchema(item: {
  name: string;
  description: string;
  price: string;
  image?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name: item.name,
    description: item.description,
    offers: {
      '@type': 'Offer',
      price: item.price.replace('$', ''),
      priceCurrency: 'USD',
    },
    ...(item.image && { image: item.image }),
    ...(item.category && { menuAddOn: { '@type': 'MenuSection', name: item.category } }),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${SITE_URL}/bg-img/hero-img.webp`,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: article.authorName || BUSINESS_INFO.name,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/facicon.webp`,
      },
    },
  };
}

import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import HomeContent from '@/components/HomeContent';
import MenuPreview from '@/components/MenuPreview';
import Testimonials from '@/components/Testimonials';
import LocationHours from '@/components/LocationHours';
import CTASection from '@/components/CTASection';
import type { Review, GooglePlacesResponse } from '@/types/reviews';
import JsonLd, { buildRestaurantSchema, buildLocalBusinessSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/components/seo/Meta';

// Enable ISR with 24-hour revalidation
export const revalidate = 86400; // 24 hours in seconds

// SEO Metadata
export const metadata = pageMetadata.home();

async function getReviews(): Promise<Review[]> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error('Missing Google Places API credentials');
    return [];
  }

  try {
    // Fetch directly from Google Places API during server-side rendering
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    
    const response = await fetch(url, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });

    if (!response.ok) {
      console.error('Google Places API request failed:', response.status);
      return [];
    }

    const data: GooglePlacesResponse = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status);
      return [];
    }

    // Filter and transform reviews
    const reviews: Review[] = (data.result.reviews || [])
      .filter(review => review.rating >= 4) // Only show 4-5 star reviews
      .sort((a, b) => b.time - a.time) // Sort by most recent
      .slice(0, 10) // Limit to 10 reviews
      .map(review => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.relative_time_description,
        profilePhoto: review.profile_photo_url,
      }));

    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export default async function Home() {
  const reviews = await getReviews();

  return (
    <>
      <JsonLd data={buildRestaurantSchema()} />
      <JsonLd data={buildLocalBusinessSchema()} />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutSection />
        <HomeContent />
        <MenuPreview />
        <Testimonials reviews={reviews} />
        <LocationHours />
        <CTASection />
      </main>
    </>
  );
}

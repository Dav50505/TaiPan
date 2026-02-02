import { NextResponse } from 'next/server';
import type { GooglePlacesResponse, Review } from '@/types/reviews';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error('Missing required environment variables');
    return NextResponse.json(
      { error: 'Configuration error', reviews: [] },
      { status: 500 }
    );
  }

  try {
    // Using Google Places API (Legacy) - Place Details
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    
    const response = await fetch(url, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data: GooglePlacesResponse = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status);
      return NextResponse.json(
        { error: 'Failed to fetch reviews', reviews: [] },
        { status: 500 }
      );
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

    return NextResponse.json({
      reviews,
      overallRating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
    });

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch reviews',
        reviews: [],
      },
      { status: 500 }
    );
  }
}

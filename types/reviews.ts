// Google Places API Review Types

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  reviews?: GoogleReview[];
  rating?: number;
  user_ratings_total?: number;
}

export interface GooglePlacesResponse {
  result: GooglePlaceDetails;
  status: string;
}

// Simplified review interface for component usage
export interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
  profilePhoto?: string;
}

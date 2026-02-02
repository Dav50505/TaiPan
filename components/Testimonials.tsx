'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Review } from '@/types/reviews';

interface TestimonialsProps {
  reviews?: Review[];
}

// Fallback reviews in case API fails
const fallbackReviews: Review[] = [
  {
    author: 'Happy Customer',
    rating: 5,
    text: 'The best dim sum in Sacramento! The BBQ pork buns are absolutely amazing. You can tell everything is made fresh.',
    time: 'a few weeks ago',
  },
  {
    author: 'Regular Patron',
    rating: 5,
    text: 'Family-owned gem with authentic flavors. The egg tarts remind me of Hong Kong. Will definitely be back!',
    time: 'a month ago',
  },
  {
    author: 'Food Enthusiast',
    rating: 5,
    text: 'Outstanding quality and service. The dumplings are handmade to perfection. My go-to spot for dim sum.',
    time: '2 months ago',
  },
];

export default function Testimonials({ reviews = fallbackReviews }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const displayReviews = reviews.length > 0 ? reviews : fallbackReviews;
  const currentReview = displayReviews[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length);
    setIsExpanded(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length);
    setIsExpanded(false);
  };

  // Truncate long reviews
  const shouldTruncate = currentReview.text.length > 300;
  const displayText = !isExpanded && shouldTruncate 
    ? currentReview.text.slice(0, 300) + '...'
    : currentReview.text;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from Google
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          >
            {/* Profile Photo */}
            {currentReview.profilePhoto && (
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={currentReview.profilePhoto}
                    alt={currentReview.author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < currentReview.rating ? 'text-amber-400' : 'text-gray-300'
                  } fill-current`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-6 italic">
              &ldquo;{displayText}&rdquo;
            </blockquote>

            {/* Read More Button */}
            {shouldTruncate && (
              <div className="text-center mb-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              </div>
            )}

            {/* Author and Time */}
            <div className="text-center">
              <p className="text-gray-900 font-semibold">
                {currentReview.author}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {currentReview.time}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50"
              aria-label="Previous testimonial"
              disabled={displayReviews.length <= 1}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {displayReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsExpanded(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50"
              aria-label="Next testimonial"
              disabled={displayReviews.length <= 1}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

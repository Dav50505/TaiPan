'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Family Tradition,<br />Modern Flavor
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                <strong className="text-red-600">[Owner&apos;s story will go here]</strong> For over many years, our family has been serving Sacramento&apos;s finest dim sum and baked goods.
              </p>
              <p>
                Every dumpling is handmade fresh daily using traditional techniques passed down through generations. We believe in honoring authentic recipes while serving them with modern hospitality.
              </p>
              <p>
                From our family to yours, we invite you to experience the warmth and flavors of genuine Cantonese cuisine. Each bite tells a story of tradition, quality, and love for what we do.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Modern/Screenshot 2026-02-02 at 12.27.47 PM-optimized.jpg"
                alt="Making dim sum"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden mt-8 shadow-lg">
              <Image
                src="/Modern/Screenshot 2026-02-02 at 12.29.18 PM-optimized.jpg"
                alt="Restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden -mt-8 shadow-lg">
              <Image
                src="/Modern/Screenshot 2026-02-02 at 12.29.38 PM-optimized.jpg"
                alt="Fresh ingredients"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Modern/Screenshot 2026-02-02 at 12.30.13 PM-optimized.jpg"
                alt="Steaming dumplings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export default function AboutClient() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-4 text-red-100" />
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-red-100 max-w-2xl mx-auto"
            >
              A family tradition of authentic dim sum and baked goods
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Family Tradition, Modern Flavor</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
              <p className="text-lg italic text-gray-700">
                <strong className="text-red-600">[Owner&apos;s story will go here]</strong> - This section will be filled with the actual family history and story once provided.
              </p>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              For many years, Taipan USA has been a cornerstone of Sacramento&apos;s vibrant food scene, serving authentic Cantonese dim sum and freshly baked goods to our community. What started as a dream to share traditional family recipes has grown into a beloved local establishment.
            </p>

            <p className="text-gray-700 text-lg mb-6">
              Every morning before dawn, our team arrives to begin the meticulous process of handcrafting each dumpling, bun, and pastry. We believe in honoring the time-honored techniques passed down through generations while maintaining the highest standards of quality and freshness.
            </p>

            <h3 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Our Philosophy</h3>
            <p className="text-gray-700 text-lg mb-6">
              At Taipan, we believe that great food brings people together. Whether you&apos;re celebrating a special occasion, gathering with family, or simply treating yourself to a delicious meal, we&apos;re honored to be part of your experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What We Stand For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">🥟</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We stay true to traditional Cantonese recipes and techniques, ensuring every bite is authentic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Ingredients</h3>
              <p className="text-gray-600">
                We source the finest ingredients and prepare everything fresh daily, never cutting corners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                As a family-owned business, we&apos;re committed to serving our Sacramento community with warmth and care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Behind the Scenes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/Modern/Screenshot 2026-02-02 at 12.27.47 PM-optimized.jpg',
              '/Modern/Screenshot 2026-02-02 at 12.29.18 PM-optimized.jpg',
              '/Modern/Screenshot 2026-02-02 at 12.29.38 PM-optimized.jpg',
              '/Modern/Screenshot 2026-02-02 at 12.30.13 PM-optimized.jpg',
            ].map((src, index) => {
              const altTexts = [
                'Fresh dim sum being prepared in our Sacramento kitchen',
                'Modern interior of Taipan Dim Sum restaurant on Freeport Boulevard',
                'Traditional bamboo steamers with handmade dumplings',
                'Steaming hot dim sum fresh from our kitchen at Taipan',
              ];
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={altTexts[index]}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            );
            })}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            [Actual photos of the restaurant, staff, and food preparation will replace these placeholders]
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl mb-8">
            Experience the tradition and taste the difference at Taipan USA
          </p>
          <a
            href="/"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Menu & Order
          </a>
        </div>
      </section>
    </main>
  );
}

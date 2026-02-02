'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🥟',
    title: 'Handmade Daily',
    description: 'Fresh dim sum made from scratch every morning using traditional techniques',
  },
  {
    icon: '🌟',
    title: 'Traditional Recipes',
    description: 'Authentic flavors passed down through generations of our family',
  },
  {
    icon: '🚀',
    title: 'Fast Service',
    description: 'Quick pickup and delivery options through our partners',
  },
  {
    icon: '❤️',
    title: 'Family Owned',
    description: 'Proudly serving the Sacramento community with love and care',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              ref={index === 0 ? ref : null}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

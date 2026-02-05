'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const menuCategories = {
  'Dim Sum': [
    { name: 'Pork Shu Mai', description: 'Traditional open-topped pork and shrimp dumplings', price: '$2.00', image: '/Menu Items/Pork Shu Mai .avif' },
    { name: 'Hai Gow', description: 'Delicate shrimp dumplings with translucent wrapper', price: '$2.00', image: '/Menu Items/Hai Gow.avif' },
    { name: 'Shark Fin Dumplings', description: 'Premium dumplings with shark fin filling', price: '$2.00', image: '/Menu Items/Shark fin dumplings.avif' },
    { name: 'Fried Shrimp Ball', description: 'Crispy fried shrimp balls', price: '$2.50', image: '/Menu Items/Fired Shrimp Ball.avif' },
  ],
  'Bakery Items': [
    { name: 'Baked BBQ Pork Bun', description: 'Soft bun filled with sweet BBQ pork', price: '$2.95', image: '/Menu Items/Baked BBQ pork bun.avif' },
    { name: 'Baked BBQ Pork & Pineapple Bun', description: 'BBQ pork bun with sweet pineapple topping', price: '$3.75', image: '/Menu Items/Baked BBQ pork, pineapple bun.avif' },
    { name: 'Baked Green Onion Bun', description: 'Savory bun with fresh green onions', price: '$3.75', image: '/Menu Items/Baked green onion bun.avif' },
    { name: 'Baked Bacon, Cheese & Egg Bun', description: 'Hearty bun with bacon, cheese and egg', price: '$3.75', image: '/Menu Items/Baked Bacon, Cheese and Egg Bun.avif' },
  ],
  'Beverages': [
    { name: 'Water', description: 'Bottled water', price: '$1.25', image: '/Menu Items/Water.avif' },
    { name: 'Coke', description: 'Classic Coca-Cola', price: '$1.75', image: '/Menu Items/Coke.avif' },
    { name: 'Sprite', description: 'Refreshing lemon-lime soda', price: '$1.75', image: '/Menu Items/Sprite.avif' },
    { name: 'Iced Tea', description: 'Freshly brewed iced tea', price: '$1.75', image: '/Menu Items/Ice Tea.avif' },
  ],
};

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuCategories>('Dim Sum');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Menu
          </h2>
          <p className="text-xl text-gray-600">
            Authentic flavors made fresh daily
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category as keyof typeof menuCategories)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {menuCategories[activeTab].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.description} - authentic dim sum at Taipan Sacramento`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    {item.name}
                  </h3>
                  <span className="text-red-600 font-bold text-lg ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note and CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Full menu available in-store. Prices subject to change.
          </p>
          <a
            href="https://www.doordash.com/store/taipan-dim-sum-&-bakery-sacramento-sacramento-37986657/86387556/?pickup=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Order Online Now
          </a>
        </div>
      </div>
    </section>
  );
}

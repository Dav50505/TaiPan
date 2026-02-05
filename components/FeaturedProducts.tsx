'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const products = [
  {
    name: 'Chives & Shrimp Dumplings',
    description: 'Bright, flavorful dumplings with shrimp and chives.',
    price: '$7.50',
    image: '/Most-ordered/Chives &  shrimp dumplings.avif',
  },
  {
    name: 'Deep-Fried Meat Dumpling',
    description: 'Fried mochi ball filled with savory pork, peanuts, and mushrooms.',
    price: '$2.00',
    image: '/Most-ordered/Deep-fried meat dumpling.avif',
  },
  {
    name: 'Preserved Egg & Pork Congee',
    description: 'Silky rice porridge with century egg and pork.',
    price: '$7.00',
    image: '/Most-ordered/Preserved egg, pork Congee.avif',
  },
  {
    name: 'Steamed BBQ Pork Bun',
    description: 'Soft, fluffy bun filled with sweet and savory roasted pork.',
    price: '$2.95',
    image: '/Most-ordered/Steamed BBQ Pork Bun.avif',
  },
  {
    name: 'Sticky Rice Roll in Lotus Leaf',
    description: 'Fragrant sticky rice steamed in lotus leaves.',
    price: '$6.50',
    image: '/Most-ordered/Sticky rice roll in lotus leaf.avif',
  },
  {
    name: 'Turnip Cake',
    description: 'Pan-fried cake with radish, dried shrimp, and sausage.',
    price: '$7.50',
    image: '/Most-ordered/Turnip Cake.avif',
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-80 overflow-hidden">
          <Image
            src={product.image}
            alt={`${product.name} - fresh handmade dim sum at Taipan Sacramento on Freeport Boulevard`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <a
            href="https://www.doordash.com/store/taipan-dim-sum-&-bakery-sacramento-sacramento-37986657/86387556/?pickup=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium"
          >
            Order Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <span className="text-amber-300 text-xl font-bold ml-2">{product.price}</span>
        </div>
        <p className="text-gray-200 text-sm">{product.description}</p>
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Most Ordered Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Customer favorites - the dishes our guests can't get enough of
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

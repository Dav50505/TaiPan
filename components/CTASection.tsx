'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-img/hero-img.webp"
          alt="Delicious dim sum platter"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Order?
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Experience authentic dim sum today
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="https://www.doordash.com/store/taipan-dim-sum-&-bakery-sacramento-sacramento-37986657/86387556/?pickup=true"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition-colors shadow-2xl"
          >
            Order on DoorDash
          </motion.a>

          <motion.a
            href="tel:+19163301919"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all"
          >
            Call: (916) 330-1919
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

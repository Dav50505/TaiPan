'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HomeContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      {/* Sacramento's Premier Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Sacramento&apos;s Premier Authentic Dim Sum Restaurant
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Welcome to Taipan Dim Sum & Bakery, where authentic Cantonese cuisine meets Sacramento hospitality. Located on Freeport Boulevard, we&apos;ve been serving our community with <Link href="/menu" className="text-red-600 hover:text-red-700 font-medium">handmade dumplings</Link>, fresh baked goods, and traditional dim sum that reminds our guests of Hong Kong&apos;s finest teahouses.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Every morning, our skilled chefs arrive before dawn to begin the labor-intensive process of crafting each item by hand. From our signature <Link href="/menu" className="text-red-600 hover:text-red-700 font-medium">steamed BBQ pork buns (char siu bao)</Link> to our delicate shrimp har gow, we use only the finest ingredients and time-honored techniques passed down through generations. This dedication to authenticity and quality has made us a beloved destination for dim sum enthusiasts throughout Sacramento.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                As a family-owned restaurant, we take pride in creating a warm, welcoming atmosphere where everyone feels at home. Whether you&apos;re a dim sum connoisseur or trying it for the first time, our friendly staff is here to guide you through our extensive menu of Cantonese specialties. We believe great food brings people together, and we&apos;re honored to be part of your family celebrations, business lunches, and everyday dining experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Taipan Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Why Choose Taipan?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">🥢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentic Cantonese Recipes</h3>
              <p className="text-gray-600">
                Our recipes come straight from Southern China, prepared using traditional methods that preserve the authentic flavors and textures of genuine dim sum. No shortcuts, no compromises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Made Fresh Daily</h3>
              <p className="text-gray-600">
                We make everything from scratch each morning. Watch as our chefs skillfully fold each dumpling by hand, ensuring perfect consistency and flavor in every bite.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Convenient Sacramento Location</h3>
              <p className="text-gray-600">
                Easy to find on <Link href="/sacramento-dim-sum" className="text-red-600 hover:text-red-700 font-medium">Freeport Boulevard</Link> with ample parking. Perfect for a quick lunch, family dinner, or takeout on your way home.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exceptional Value</h3>
              <p className="text-gray-600">
                Enjoy restaurant-quality dim sum at prices that won&apos;t break the bank. Perfect for families, groups, or solo dining adventures through Cantonese cuisine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vegetarian Options Available</h3>
              <p className="text-gray-600">
                We offer a variety of vegetarian dim sum options, from vegetable dumplings to mushroom buns, ensuring everyone can enjoy our authentic flavors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Ordering</h3>
              <p className="text-gray-600">
                Skip the wait with convenient online ordering through DoorDash. Enjoy our fresh dim sum at home or pick it up on your schedule.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Our Specialties
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            These signature dishes have made us Sacramento&apos;s favorite destination for authentic dim sum
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Steamed BBQ Pork Buns (Char Siu Bao)</h3>
              <p className="text-gray-600 mb-4">
                Our most popular item! Soft, pillowy steamed buns filled with sweet and savory roasted pork. The perfect balance of flavors that keeps customers coming back week after week.
              </p>
              <Link href="/menu" className="text-red-600 hover:text-red-700 font-medium">
                Order Now →
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shrimp Har Gow</h3>
              <p className="text-gray-600 mb-4">
                Delicate translucent wrapper encasing fresh, plump shrimp. These elegant dumplings showcase the skill of our dim sum chefs and are a must-try for any first-time visitor.
              </p>
              <Link href="/menu" className="text-red-600 hover:text-red-700 font-medium">
                Order Now →
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Turnip Cake (Lo Bak Go)</h3>
              <p className="text-gray-600 mb-4">
                Pan-fried to golden perfection, our turnip cake combines radish, dried shrimp, and Chinese sausage for a crispy outside and tender inside. A classic Cantonese breakfast favorite.
              </p>
              <Link href="/menu" className="text-red-600 hover:text-red-700 font-medium">
                Order Now →
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fresh Baked Goods</h3>
              <p className="text-gray-600 mb-4">
                Beyond dim sum, our bakery produces fresh egg tarts, pineapple buns, and other Chinese pastries daily. Perfect for breakfast, dessert, or an afternoon snack.
              </p>
              <Link href="/menu" className="text-red-600 hover:text-red-700 font-medium">
                View Bakery Items →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us in Sacramento Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Visit Us in Sacramento
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Located at <strong>4400 Freeport Boulevard, Suite 160</strong>, Taipan is easily accessible from anywhere in Sacramento. Whether you&apos;re coming from downtown, East Sacramento, or South Sacramento, we&apos;re just minutes away with convenient parking right at our door.
            </p>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Open 7 days a week from 7:00 AM to 6:00 PM, we&apos;re here for your morning dim sum breakfast, lunch meetings, or early dinner. Our spacious dining room accommodates both intimate meals and large family gatherings, with a welcoming atmosphere that makes every visit special.
            </p>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Can&apos;t make it in? No problem! <Link href="/contact" className="text-red-600 hover:text-red-700 font-medium">Order through DoorDash</Link> for delivery or pickup. Our carefully packaged dim sum travels well, so you can enjoy authentic Cantonese cuisine wherever you are in Sacramento.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Have Questions?</p>
              <p className="text-gray-700">
                Check our <Link href="/faq" className="text-red-600 hover:text-red-700 font-medium">frequently asked questions</Link> or <Link href="/contact" className="text-red-600 hover:text-red-700 font-medium">contact us directly</Link>. We&apos;re here to help make your dim sum experience perfect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

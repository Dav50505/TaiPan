'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export default function LocationClient() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bg-img/hero-img.webp"
            alt="Best dim sum restaurant in Sacramento California - Taipan on Freeport Boulevard"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-4">
            <Breadcrumbs className="justify-center text-gray-300" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Sacramento&apos;s Best Dim Sum Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Authentic Cantonese Cuisine on Freeport Boulevard
          </motion.p>
        </div>
      </section>

      {/* Why Taipan is Sacramento's Best */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Why Taipan is Sacramento&apos;s Premier Dim Sum Destination
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              When searching for authentic <strong>dim sum in Sacramento</strong>, food lovers consistently choose Taipan Dim Sum & Bakery. Located conveniently on <strong>Freeport Boulevard</strong>, we&apos;ve built a reputation as the go-to destination for traditional Cantonese cuisine in California&apos;s capital city.
            </p>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              What sets us apart? Our commitment to authenticity. Every morning, our skilled chefs arrive before dawn to handcraft each dumpling, bun, and pastry using time-honored recipes from Southern China. Unlike restaurants that rely on frozen or pre-made items, we make everything from scratch daily. This dedication to traditional preparation methods means you&apos;re getting the real deal – dim sum that tastes just like what you&apos;d find in Hong Kong&apos;s best teahouses.
            </p>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Sacramento residents appreciate not just our food quality, but also our welcoming atmosphere and reasonable prices. Whether you&apos;re a longtime dim sum enthusiast or trying it for the first time, our friendly staff guides you through the menu and helps you discover new favorites. Many customers tell us they drive across Sacramento specifically to visit us, passing other Chinese restaurants because they know the quality and authenticity they&apos;ll find at Taipan.
            </p>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            The Perfect Sacramento Location
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Access & Parking</h3>
              <p className="text-gray-600">
                Located right on Freeport Boulevard with excellent visibility and ample free parking. No circling the block or paying for parking meters – just pull up and enjoy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Central Sacramento Location</h3>
              <p className="text-gray-600">
                Convenient to downtown, Midtown, East Sacramento, Land Park, and South Sacramento. Whether you&apos;re coming from work or home, we&apos;re easy to reach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopping Center Convenience</h3>
              <p className="text-gray-600">
                Part of a convenient shopping center, making it easy to combine your dim sum meal with other errands. Perfect for a quick lunch or takeout on busy days.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">♿</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessible</h3>
              <p className="text-gray-600">
                Our restaurant is fully accessible with ground-level entry, wide aisles, and accessible parking spaces. Everyone is welcome at our table.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">🏙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vibrant Neighborhood</h3>
              <p className="text-gray-600">
                Freeport Boulevard is home to diverse dining and shopping options, making it a destination for food lovers throughout Sacramento County.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Transit Friendly</h3>
              <p className="text-gray-600">
                Accessible via Sacramento Regional Transit bus routes. Check SacRT for the most convenient route from your location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            More Than Just Another Chinese Restaurant
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Authentic Cantonese Specialization</h3>
              <p className="text-gray-600">
                While many Sacramento Chinese restaurants offer a broad menu mixing different regional styles, we specialize exclusively in Cantonese dim sum and bakery items. This focus allows us to perfect traditional recipes and techniques, ensuring authenticity in every bite.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Made Fresh, Not Frozen</h3>
              <p className="text-gray-600">
                In an era where many restaurants cut corners with frozen products, we maintain the traditional practice of making everything by hand each day. You can see the difference in taste and texture – our dumplings have the delicate wrapper and fresh filling that only comes from handmade preparation.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Family Owned & Community Focused</h3>
              <p className="text-gray-600">
                We&apos;re not a chain or corporate restaurant. Taipan is family-owned and operated, meaning we&apos;re invested in Sacramento&apos;s community. We remember our regular customers, celebrate with families on special occasions, and take pride in being part of Sacramento&apos;s diverse food culture.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Education & Guidance</h3>
              <p className="text-gray-600">
                New to dim sum? Our staff loves introducing first-timers to this wonderful cuisine. We&apos;ll explain each dish, suggest popular items, and help you build a meal that suits your tastes. Check our <Link href="/faq" className="text-red-600 hover:text-red-700 font-medium">FAQ page</Link> for common questions or ask when you visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Visit Us Today
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location & Hours</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">ADDRESS</p>
                  <p className="text-lg text-gray-900">
                    4400 Freeport Blvd, Suite 160<br />
                    Sacramento, CA 95822
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">PHONE</p>
                  <a href="tel:+19163301919" className="text-lg text-red-600 hover:text-red-700 font-medium">
                    (916) 330-1919
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">HOURS</p>
                  <p className="text-lg text-gray-900">
                    Monday - Sunday<br />
                    7:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://www.doordash.com/store/taipan-dim-sum-&-bakery-sacramento-sacramento-37986657/86387556/?pickup=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Order Online via DoorDash
                </a>
                <Link
                  href="/menu"
                  className="inline-block text-center border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
                >
                  View Our Menu
                </Link>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.8755847389!2d-121.50149!3d38.55159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad1b5a6c5f7e3%3A0x1c3f8d7f1e2e3f4a!2s4400%20Freeport%20Blvd%20%23160%2C%20Sacramento%2C%20CA%2095822!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Taipan Dim Sum & Bakery Location - 4400 Freeport Blvd Sacramento"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Community of Satisfied Customers
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don&apos;t just take our word for it – see what Sacramento diners are saying about us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Read Customer Reviews
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

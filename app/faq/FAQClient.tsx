'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd, { buildFAQSchema } from '@/components/seo/JsonLd';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is dim sum?',
    answer: 'Dim sum is a style of Cantonese cuisine featuring small, flavorful dishes traditionally served with tea. The term translates to "touch the heart" and includes a wide variety of steamed, fried, and baked items like dumplings, buns, and rice rolls. At Taipan, we specialize in authentic Cantonese dim sum made fresh daily using traditional recipes and techniques.'
  },
  {
    question: 'Do you take reservations?',
    answer: 'We operate on a first-come, first-served basis and do not currently take reservations. However, we do our best to accommodate large groups when possible. We recommend calling ahead at (916) 330-1919 if you have a party of 6 or more, so we can prepare for your arrival. Our busiest times are typically weekend mornings.'
  },
  {
    question: 'What are your most popular dishes?',
    answer: 'Our customers love our Steamed BBQ Pork Buns (Char Siu Bao), Shrimp Har Gow, Pork Shu Mai, and Turnip Cake. Our bakery items, especially the egg tarts and pineapple buns, are also customer favorites. If you\'re new to dim sum, we recommend starting with the BBQ pork buns and har gow to experience classic Cantonese flavors.'
  },
  {
    question: 'Do you have vegetarian or vegan options?',
    answer: 'Yes! We offer several vegetarian dim sum options including vegetable dumplings, mushroom buns, and various vegetable-based dishes. While many of our items can be made vegetarian, please note that some dishes may contain eggs or dairy. Let our staff know about your dietary restrictions, and they\'ll be happy to guide you through suitable options.'
  },
  {
    question: 'What time do you serve dim sum?',
    answer: 'We serve dim sum all day during our operating hours: Monday through Sunday, 7:00 AM to 6:00 PM. Unlike traditional dim sum restaurants that only serve it in the morning, you can enjoy our full menu from opening to closing. We recommend arriving earlier in the day for the freshest selection, as popular items may sell out.'
  },
  {
    question: 'Can I order takeout or delivery?',
    answer: 'Absolutely! You can order takeout by calling us directly at (916) 330-1919 or through our DoorDash partnership for both pickup and delivery. Our dim sum is carefully packaged to maintain quality during transport. We recommend enjoying your order soon after pickup or delivery for the best experience.'
  },
  {
    question: 'Where are you located and is parking available?',
    answer: 'We\'re located at 4400 Freeport Blvd, Suite 160, Sacramento, CA 95822. We have convenient free parking right in front of the restaurant with ample spaces. We\'re easily accessible from all parts of Sacramento with good visibility from Freeport Boulevard.'
  },
  {
    question: 'Is Taipan family-friendly?',
    answer: 'Yes! We\'re a family-owned restaurant and welcome guests of all ages. Our diverse menu has options that appeal to children and adults alike. Dim sum is perfect for families as you can order a variety of small dishes and share them together. High chairs are available upon request.'
  },
  {
    question: 'How much should I expect to spend per person?',
    answer: 'Most guests spend between $12-$20 per person depending on appetite and selections. Individual dim sum items range from $2 to $8, and most people order 3-5 items per person when dining in a group. Our pricing offers excellent value for authentic, handmade Cantonese cuisine in Sacramento.'
  },
  {
    question: 'Do you offer catering for events?',
    answer: 'Yes, we can accommodate catering orders for events and large gatherings. Dim sum is perfect for parties, corporate events, and celebrations. Please call us at (916) 330-1919 with at least 48 hours notice to discuss your catering needs, group size, and menu preferences.'
  },
  {
    question: 'Are your dishes made fresh daily?',
    answer: 'Absolutely! Every dumpling, bun, and pastry is made by hand each morning by our skilled chefs. We never use frozen or pre-made items. This commitment to freshness is why our customers return again and again. We prepare items throughout the day to ensure quality.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), and contactless payment methods including Apple Pay and Google Pay. For online orders through DoorDash, follow their payment options.'
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <JsonLd data={buildFAQSchema(faqs)} />
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
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-red-100 max-w-2xl mx-auto"
              >
                Everything you need to know about Taipan Dim Sum & Bakery
              </motion.p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-red-50 border-2 border-red-600 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-700 mb-6">
                Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+19163301919"
                  className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors"
                >
                  Call: (916) 330-1919
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

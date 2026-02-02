'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages with light backgrounds need dark text always
  const isLightBackgroundPage = pathname === '/menu' || pathname === '/about' || pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightBackgroundPage
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16">
              <Image
                src="/facicon.webp"
                alt="Taipan Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-red-600 ${
                  isScrolled || isLightBackgroundPage ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.doordash.com/store/taipan-dim-sum-&-bakery-sacramento-sacramento-37986657/86387556/?pickup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled || isLightBackgroundPage ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-900 hover:text-red-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.doordash.com/store/taipan-dim-sum-&-bakery-sacramento-sacramento-37986657/86387556/?pickup=true"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-600 text-white text-center px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-medium"
              >
                Order Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

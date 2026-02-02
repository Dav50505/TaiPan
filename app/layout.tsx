import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taipan USA - Authentic Dim Sum & Bakery | Sacramento, CA",
  description: "Family-owned dim sum and bakery serving Sacramento's finest handcrafted dumplings, bao buns, and fresh baked goods daily. Traditional recipes since [year]. Order online for pickup or delivery.",
  keywords: ["dim sum", "bakery", "Sacramento", "Chinese food", "dumplings", "bao buns", "egg tarts"],
  openGraph: {
    title: "Taipan USA - Authentic Dim Sum & Bakery",
    description: "Sacramento's premier dim sum and bakery. Handcrafted with love daily.",
    url: "https://taipanusa.com",
    siteName: "Taipan USA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Taipan USA Dim Sum & Bakery",
              "image": "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=1200",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4400 Freeport Blvd, Suite 160",
                "addressLocality": "Sacramento",
                "addressRegion": "CA",
                "postalCode": "95822",
                "addressCountry": "US"
              },
              "telephone": "+19163301919",
              "servesCuisine": "Chinese, Dim Sum, Bakery",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "07:00",
                  "closes": "18:00"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

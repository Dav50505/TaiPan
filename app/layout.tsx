import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SEO_DEFAULTS, BUSINESS_INFO } from "@/lib/seo-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: SEO_DEFAULTS.titleTemplate,
    default: SEO_DEFAULTS.defaultTitle,
  },
  description: SEO_DEFAULTS.defaultDescription,
  keywords: SEO_DEFAULTS.keywords,
  icons: {
    icon: "/facicon.webp",
    shortcut: "/facicon.webp",
    apple: "/facicon.webp",
  },
  openGraph: {
    type: SEO_DEFAULTS.openGraph.type as 'website',
    locale: SEO_DEFAULTS.openGraph.locale,
    siteName: SEO_DEFAULTS.openGraph.siteName,
    images: [
      {
        url: '/bg-img/hero-img.webp',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Authentic Dim Sum`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

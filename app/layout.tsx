import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craving Cuisine - Fresh Food Delivery in Lahore | Office Catering & Events",
  description: "Premium food delivery service in Lahore. Fresh daily meals for offices, meetings, conferences & events. Serving Gulberg, Model Town, Garden Town, Johar Town, DHA & all major areas. Book online now!",
  keywords: "food delivery Lahore, office catering Lahore, fresh food delivery, corporate catering, event catering, meeting catering, conference catering, daily meals Lahore, Gulberg food delivery, Model Town catering, Garden Town food, Johar Town delivery, DHA catering, business lunch Lahore",
  authors: [{ name: "Craving Cuisine" }],
  creator: "Craving Cuisine",
  publisher: "Craving Cuisine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://craving-cuisine.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Craving Cuisine - Fresh Food Delivery in Lahore",
    description: "Premium food delivery service in Lahore. Fresh daily meals for offices, meetings & events. Book online now!",
    url: 'https://craving-cuisine.vercel.app',
    siteName: 'Craving Cuisine',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Craving Cuisine - Fresh Food Delivery in Lahore',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Craving Cuisine - Fresh Food Delivery in Lahore",
    description: "Premium food delivery service in Lahore. Fresh daily meals for offices, meetings & events.",
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

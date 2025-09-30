import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craving Cuisine - Fresh Food Delivery in Lahore",
  description: "Daily fresh food delivery in Lahore. Perfect for offices, meetings & events. Serving Gulberg, Model Town, Garden Town, Johar Town & more areas.",
  keywords: "food delivery, Lahore, fresh food, office catering, events, meetings",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/craving-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/craving-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/craving-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/craving-logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  // Cache busting - Updated: 2025-09-30 12:25
  other: {
    'cache-bust': '2025-09-30-12-25',
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
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

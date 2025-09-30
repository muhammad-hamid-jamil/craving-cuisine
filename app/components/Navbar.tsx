'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/craving-logo.png"
                alt="Craving Cuisine Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-orange-600">
                Craving Cuisine
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <a
                href="/#menu"
                className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Menu
              </a>
              <a
                href="/#weekend-deals"
                className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Weekend Deals
              </a>
              <Link
                href="/about"
                className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <a
                href="tel:+923016828719"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
              >
                Call Now: +92 301 6828719
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-orange-600 focus:outline-none focus:text-orange-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-gray-900 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="/#menu"
                className="text-gray-900 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="/#weekend-deals"
                className="text-gray-900 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Weekend Deals
              </a>
              <Link
                href="/about"
                className="text-gray-900 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+923016828719"
                className="bg-orange-600 text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-orange-700 transition-colors mx-3 text-center"
              >
                Call Now: +92 301 6828719
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

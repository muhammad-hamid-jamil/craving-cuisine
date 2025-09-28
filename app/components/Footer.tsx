'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
                🍽️ Craving Cuisine
              </Link>
              <p className="text-gray-300 mt-2 text-sm">
                Your trusted partner for fresh, delicious food delivery in Lahore
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-orange-500">📞</span>
                <a 
                  href="tel:+923016828719" 
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  +92 301 6828719
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500">✉️</span>
                <a 
                  href="mailto:muhammadhamidofficial0@gmail.com" 
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  muhammadhamidofficial0@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500">📍</span>
                <span className="text-gray-300">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/#menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Food Menu
                </a>
              </li>
              <li>
                <a href="/#weekend-deals" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Weekend Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">🏢 Office Catering</span>
              </li>
              <li>
                <span className="text-gray-300">🤝 Business Meetings</span>
              </li>
              <li>
                <span className="text-gray-300">🎉 Special Events</span>
              </li>
              <li>
                <a href="/#packages" className="text-gray-300 hover:text-orange-400 transition-colors">
                  📦 Our Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Menu Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  🌅 Breakfast
                </a>
              </li>
              <li>
                <a href="/#menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  ☀️ Lunch
                </a>
              </li>
              <li>
                <a href="/#menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  🌙 Dinner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Areas Full Width */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300">
              <span className="flex items-center space-x-1">
                <span className="text-orange-500">📍</span>
                <span>Gulberg</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="text-orange-500">📍</span>
                <span>Model Town</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="text-orange-500">📍</span>
                <span>Garden Town</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="text-orange-500">📍</span>
                <span>Johar Town</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="text-orange-500">📍</span>
                <span>Wapda Town</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="text-orange-500">📍</span>
                <span>Thokar</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="text-orange-500">📍</span>
                <span>Township</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 <a href="https://websolsolutions.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors">Websolsolutions</a>. All rights reserved.
            </div>
            
            {/* Business Hours */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-orange-500">🕒</span>
                <span>Mon-Sun: 8:00 AM - 10:00 PM</span>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+923016828719"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>📞</span>
                <span>Order Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Fresh Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Professional Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

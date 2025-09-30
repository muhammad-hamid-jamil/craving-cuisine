'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="flex items-center mb-3">
                <Image
                  src="/craving-logo.png"
                  alt="Craving Cuisine Logo"
                  width={88}
                  height={88}
                  className="w-[5.5rem] h-[5.5rem] object-contain"
                />
              </Link>
              <p className="text-gray-300 text-sm">
                Your trusted partner for fresh,<br /> delicious food delivery in Lahore
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-4">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                title="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-110"
                title="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            

              {/* Phone */}
              <a 
                href="tel:+923016828719" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-600 hover:scale-110"
                title="Phone"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:muhammadhamidofficial0@gmail.com" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:scale-110"
                title="Email"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#d11a5c' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
               
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#menu" className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  Food Menu
                </Link>
              </li>
              <li>
                <Link href="/#weekend-deals" className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  Weekend Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#d11a5c' }}>Our Services</h3>
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
                <Link href="/#packages" className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  📦 Our Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#d11a5c' }}>Menu Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#menu" className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  🌅 Breakfast
                </Link>
              </li>
              <li>
                <Link href="/#menu" className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  ☀️ Lunch
                </Link>
              </li>
              <li>
                <Link href="/#menu" className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  🌙 Dinner
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Areas Full Width */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 text-gray-300">
              <div className="flex flex-col items-center space-y-2">
                <svg className="w-5 h-5" style={{ color: '#ffa723' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Gulberg</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <svg className="w-5 h-5" style={{ color: '#ffa723' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Model Town</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <svg className="w-5 h-5" style={{ color: '#ffa723' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Garden Town</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <svg className="w-5 h-5" style={{ color: '#ffa723' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Johar Town</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <svg className="w-5 h-5" style={{ color: '#ffa723' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Wapda Town</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <svg className="w-5 h-5" style={{ color: '#ffa723' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Thokar</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <svg className="w-5 h-5" style={{ color: '#ffa723' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Township</span>
              </div>
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
              © 2025 <a href="https://websolsolutions.com" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#d11a5c' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'} onMouseLeave={(e) => e.currentTarget.style.color = '#d11a5c'}>Websolsolutions</a>. All rights reserved.
            </div>
            
            {/* Business Hours */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span style={{ color: '#ffa723' }}>🕒</span>
                <span>Mon-Sun: 8:00 AM - 10:00 PM</span>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+923016828719"
                className="text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center space-x-2"
                style={{ backgroundColor: '#ffa723' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e6951f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffa723'}
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
              <span style={{ color: '#ffa723' }}>✓</span>
              <span>Fresh Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <span style={{ color: '#ffa723' }}>✓</span>
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <span style={{ color: '#ffa723' }}>✓</span>
              <span>Professional Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <span style={{ color: '#ffa723' }}>✓</span>
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

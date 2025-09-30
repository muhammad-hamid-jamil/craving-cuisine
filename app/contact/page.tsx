'use client'

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    peopleCount: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '69a4067a-c588-4d8d-aee5-dc17f82781bb',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          eventType: formData.eventType,
          peopleCount: formData.peopleCount,
          date: formData.date,
          message: formData.message,
          subject: `New Catering Inquiry from ${formData.name}`,
          from_name: 'Craving Cuisine Contact Form',
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you for your inquiry! We will contact you within 24 hours.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          eventType: '',
          peopleCount: '',
          date: '',
          message: ''
        });
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #d11a5c, #ffa723)' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl" style={{ color: '#fef3c7' }}>
            Get in touch for fresh food delivery or custom catering quotes
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fef3c7' }}>
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+923016828719"
                className="text-lg font-medium transition-colors"
                style={{ color: '#d11a5c' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffa723'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d11a5c'}
              >
                +92 301 6828719
              </a>
              <p className="text-gray-600 text-sm mt-1">Call for immediate orders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fef3c7' }}>
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Areas</h3>
              <p className="text-gray-600">
                Gulberg, Model Town, Garden Town, Johar Town, Wapda Town, Thokar, Township
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fef3c7' }}>
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Hours</h3>
              <p className="text-gray-600">
                Daily: 8:00 AM - 8:00 PM<br />
                Order 2 hours in advance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get a Custom Quote
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we&apos;ll get back to you with a personalized quote
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors"
                    style={{ '--focus-ring-color': '#d11a5c', '--focus-border-color': '#d11a5c' } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#d11a5c';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 26, 92, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors"
                    style={{ '--focus-ring-color': '#d11a5c', '--focus-border-color': '#d11a5c' } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#d11a5c';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 26, 92, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors"
                    style={{ '--focus-ring-color': '#d11a5c', '--focus-border-color': '#d11a5c' } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#d11a5c';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 26, 92, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors"
                    style={{ '--focus-ring-color': '#d11a5c', '--focus-border-color': '#d11a5c' } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#d11a5c';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 26, 92, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors"
                    style={{ '--focus-ring-color': '#d11a5c', '--focus-border-color': '#d11a5c' } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#d11a5c';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 26, 92, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select event type</option>
                    <option value="office-daily">Daily Office Meals</option>
                    <option value="business-meeting">Business Meeting</option>
                    <option value="conference">Conference/Seminar</option>
                    <option value="special-event">Special Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="peopleCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of People *
                  </label>
                  <select
                    id="peopleCount"
                    name="peopleCount"
                    required
                    value={formData.peopleCount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors"
                    style={{ '--focus-ring-color': '#d11a5c', '--focus-border-color': '#d11a5c' } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#d11a5c';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 26, 92, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select group size</option>
                    <option value="5-20">5-20 People</option>
                    <option value="20-50">20-50 People</option>
                    <option value="50-100">50-100 People</option>
                    <option value="100-150">100-150 People</option>
                    <option value="150+">150+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors"
                    style={{ '--focus-ring-color': '#d11a5c', '--focus-border-color': '#d11a5c' } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#d11a5c';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 26, 92, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors"
                    style={{ '--focus-ring-color': '#d11a5c', '--focus-border-color': '#d11a5c' } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#d11a5c';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 26, 92, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  placeholder="Tell us about your specific requirements, dietary preferences, budget, or any other details..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#ffa723' }}
                  onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#e6951f')}
                  onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#ffa723')}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Quote'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16" style={{ backgroundColor: '#d11a5c' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Immediate Service?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#fef3c7' }}>
            For urgent orders or same-day delivery, call us directly
          </p>
          <a
            href="tel:+923016828719"
            className="bg-white px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-flex items-center justify-center"
            style={{ color: '#d11a5c' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            📞 Call Now: +92 301 6828719
          </a>
        </div>
      </section>
    </div>
  );
}

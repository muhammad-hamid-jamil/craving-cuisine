'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, MapPin, Clock, Phone, Mail, Building, CheckCircle, Download, Share2 } from 'lucide-react';
import { useState } from 'react';

interface BookingSlipProps {
  bookingData: any;
  onClose: () => void;
}

const packages = {
  'small-office': { name: 'Small Office', people: '5-20 People', color: '#d11a5c' },
  'medium-office': { name: 'Medium Office', people: '20-80 People', color: '#ffa723' },
  'large-events': { name: 'Large Events', people: '80-150 People', color: '#059669' }
};

export default function BookingSlip({ bookingData, onClose }: BookingSlipProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const bookingId = `#${Date.now().toString().slice(-6)}`;
      
      // Use the server-side PDF generation
      const response = await fetch('/api/booking?action=download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      // Get the PDF blob from the response
      const pdfBlob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `craving-cuisine-booking-${bookingId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF generation failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Craving Cuisine Booking Confirmation',
        text: `I've booked catering services with Craving Cuisine for ${bookingData.eventDate}`,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`Craving Cuisine Booking Confirmation - ${bookingData.eventDate}`);
      alert('Booking details copied to clipboard!');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <CheckCircle className="mr-3" size={32} />
                <div>
                  <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
                  <p className="text-green-100">Your catering service has been reserved</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-green-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="mt-4 bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-green-100">Booking ID</p>
                  <p className="text-lg font-bold">#{Date.now().toString().slice(-6)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-100">Confirmation Email Sent</p>
                  <p className="text-sm font-semibold">{bookingData.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* Customer Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="mr-2 text-orange-500" />
                    Customer Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-semibold">{bookingData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-semibold">{bookingData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-semibold">{bookingData.phone}</span>
                    </div>
                    {bookingData.company && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Company:</span>
                        <span className="font-semibold">{bookingData.company}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="mr-2 text-orange-500" />
                    Event Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Event Type:</span>
                      <span className="font-semibold capitalize">{bookingData.eventType.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold">{bookingData.eventDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-semibold">{bookingData.eventTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">People:</span>
                      <span className="font-semibold">{bookingData.peopleCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span 
                        className="font-semibold px-2 py-1 rounded text-white text-sm"
                        style={{ backgroundColor: packages[bookingData.selectedPackage as keyof typeof packages]?.color || '#d11a5c' }}
                      >
                        {packages[bookingData.selectedPackage as keyof typeof packages]?.name || bookingData.selectedPackage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="mr-2 text-orange-500" />
                    Delivery Location
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-600">Address:</span>
                      <p className="font-semibold mt-1">{bookingData.address}</p>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Area:</span>
                      <span className="font-semibold">{bookingData.area}</span>
                    </div>
                    {bookingData.deliveryInstructions && (
                      <div>
                        <span className="text-gray-600">Instructions:</span>
                        <p className="font-semibold mt-1">{bookingData.deliveryInstructions}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Selected Menu Items */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="mr-2 text-orange-500" />
                    Selected Menu Items
                  </h3>
                  <div className="space-y-2">
                    {bookingData.selectedMenuItems.map((item: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requirements */}
                {bookingData.specialRequirements && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Building className="mr-2 text-orange-500" />
                      Special Requirements
                    </h3>
                    <p className="text-gray-700">{bookingData.specialRequirements}</p>
                  </div>
                )}

                {/* Budget */}
                {bookingData.budget && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Phone className="mr-2 text-orange-500" />
                      Budget Range
                    </h3>
                    <p className="text-gray-700 capitalize">{bookingData.budget.replace('-', ' - ')}</p>
                  </div>
                )}

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Mail className="mr-2 text-orange-500" />
                    Contact Us
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-orange-500" />
                      <span className="text-gray-700">+92 301 6828719</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="text-orange-500" />
                      <span className="text-gray-700">muhammadhamidofficial0@gmail.com</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    We'll contact you within 24 hours to confirm your booking and discuss final details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div className="text-sm text-gray-600">
                <p>Confirmation emails sent to you and our team</p>
                <p>Booking valid for 7 days from confirmation</p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
                >
                  <Download size={16} />
                  <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
                </button>
                
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
                
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

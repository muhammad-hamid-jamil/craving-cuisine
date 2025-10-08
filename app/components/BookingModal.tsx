'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, MapPin, Clock, Phone, Mail, Building } from 'lucide-react';

interface BookingModalProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const packages = [
  {
    id: 'small-office',
    name: 'Small Office',
    people: '5-20 People',
    price: 'Starting from Rs. 2,500',
    features: ['Fresh daily meals', 'On-time delivery', 'Variety of cuisines'],
    color: '#d11a5c'
  },
  {
    id: 'medium-office',
    name: 'Medium Office',
    people: '20-80 People',
    price: 'Starting from Rs. 8,000',
    features: ['Fresh daily meals', 'Priority delivery', 'Custom menu options', 'Bulk discounts'],
    color: '#ffa723'
  },
  {
    id: 'large-events',
    name: 'Large Events',
    people: '80-150 People',
    price: 'Starting from Rs. 25,000',
    features: ['Premium catering service', 'Dedicated coordinator', 'Multiple cuisine options', 'Best rates guaranteed'],
    color: '#059669'
  }
];

const menuCategories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: '🌅',
    items: [
      'Traditional Paratha & Chai',
      'Halwa Puri Special',
      'Omelette & Toast',
      'Nihari & Naan',
      'Fresh Fruit Platter',
      'Continental Breakfast'
    ]
  },
  {
    id: 'lunch',
    name: 'Lunch',
    icon: '☀️',
    items: [
      'Chicken Biryani',
      'Karahi Chicken',
      'Beef Pulao',
      'Dal Makhani & Rice',
      'Grilled Fish',
      'Vegetable Curry'
    ]
  },
  {
    id: 'dinner',
    name: 'Dinner',
    icon: '🌙',
    items: [
      'Mutton Karahi',
      'Chicken Tikka Masala',
      'Seekh Kebab Platter',
      'Fish Curry & Rice',
      'Mixed Grill',
      'Palak Paneer'
    ]
  }
];

export default function BookingModal({ onClose, onSubmit }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Customer Details
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Event Details
    eventType: '',
    eventDate: '',
    eventTime: '',
    peopleCount: '',
    selectedPackage: '',
    
    // Location
    address: '',
    area: '',
    
    // Menu Selection
    selectedMenuItems: [] as string[],
    
    // Additional Details
    specialRequirements: '',
    budget: '',
    deliveryInstructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMenuSelection = (item: string) => {
    setFormData(prev => ({
      ...prev,
      selectedMenuItems: prev.selectedMenuItems.includes(item)
        ? prev.selectedMenuItems.filter(i => i !== item)
        : [...prev.selectedMenuItems, item]
    }));
  };

  const handlePackageSelection = (packageId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedPackage: packageId
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email to admin and customer
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSubmit(formData);
      } else {
        // Fallback: still show booking slip even if email fails
        onSubmit(formData);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      // Fallback: still show booking slip even if email fails
      onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.eventType && formData.eventDate && formData.peopleCount && formData.selectedPackage;
      case 3:
        return formData.address && formData.area;
      case 4:
        return formData.selectedMenuItems.length > 0;
      default:
        return false;
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Advanced Booking</h2>
                <p className="text-orange-100">Reserve your catering service in advance</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-orange-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-center space-x-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step <= currentStep ? 'bg-white text-orange-500' : 'bg-orange-200 text-orange-300'
                      }`}
                    >
                      {step}
                    </div>
                    {step < 4 && (
                      <div
                        className={`w-8 h-1 mx-2 ${
                          step < currentStep ? 'bg-white' : 'bg-orange-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-16 text-sm mt-2">
                <span>Details</span>
                <span>Event</span>
                <span>Location</span>
                <span>Menu</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Customer Details */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="mr-2 text-orange-500" />
                    Customer Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="+92 300 1234567"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Event Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="mr-2 text-orange-500" />
                    Event Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        required
                      >
                        <option value="">Select event type</option>
                        <option value="office-daily">Daily Office Meals</option>
                        <option value="business-meeting">Business Meeting</option>
                        <option value="conference">Conference/Seminar</option>
                        <option value="special-event">Special Event</option>
                        <option value="wedding">Wedding</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Time *
                      </label>
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of People *
                      </label>
                      <select
                        name="peopleCount"
                        value={formData.peopleCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        required
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

                  {/* Package Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select Package *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {packages.map((pkg) => (
                        <div
                          key={pkg.id}
                          onClick={() => handlePackageSelection(pkg.id)}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.selectedPackage === pkg.id
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          <div className="text-center">
                            <div
                              className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold"
                              style={{ backgroundColor: pkg.color }}
                            >
                              {pkg.people.split('-')[0]}
                            </div>
                            <h4 className="font-bold text-gray-900">{pkg.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{pkg.people}</p>
                            <p className="text-sm font-semibold text-orange-600">{pkg.price}</p>
                            <ul className="text-xs text-gray-500 mt-2 space-y-1">
                              {pkg.features.map((feature, index) => (
                                <li key={index}>• {feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Location */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="mr-2 text-orange-500" />
                    Delivery Location
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter complete delivery address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area *
                    </label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      required
                    >
                      <option value="">Select your area</option>
                      <option value="Gulberg">Gulberg</option>
                      <option value="Model Town">Model Town</option>
                      <option value="Garden Town">Garden Town</option>
                      <option value="Johar Town">Johar Town</option>
                      <option value="Wapda Town">Wapda Town</option>
                      <option value="Thokar">Thokar</option>
                      <option value="Township">Township</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Instructions
                    </label>
                    <textarea
                      name="deliveryInstructions"
                      value={formData.deliveryInstructions}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Any special delivery instructions or access details"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Menu Selection */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="mr-2 text-orange-500" />
                    Menu Selection
                  </h3>
                  
                  <div className="space-y-6">
                    {menuCategories.map((category) => (
                      <div key={category.id} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <span className="text-2xl mr-2">{category.icon}</span>
                          {category.name}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {category.items.map((item) => (
                            <label
                              key={item}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={formData.selectedMenuItems.includes(item)}
                                onChange={() => handleMenuSelection(item)}
                                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                              />
                              <span className="text-sm text-gray-700">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requirements
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Any dietary restrictions, allergies, or special requests"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10000">Under Rs. 10,000</option>
                      <option value="10000-25000">Rs. 10,000 - 25,000</option>
                      <option value="25000-50000">Rs. 25,000 - 50,000</option>
                      <option value="50000-100000">Rs. 50,000 - 100,000</option>
                      <option value="over-100000">Over Rs. 100,000</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid() || isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Booking'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

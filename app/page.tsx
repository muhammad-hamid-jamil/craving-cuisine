'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FadeInUp, 
  StaggerContainer, 
  AnimatedCard
} from "./components/Animations";

// Force rebuild - Updated: 2025-09-30 14:05

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const menuData = {
    breakfast: [
      {
        name: "Traditional Paratha & Chai",
        description: "Freshly made parathas served with aromatic Pakistani chai and butter",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop"
      },
      {
        name: "Halwa Puri Special",
        description: "Classic combination of semolina halwa, crispy puris, and spiced chickpeas",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
      },
      {
        name: "Omelette & Toast",
        description: "Fluffy omelette with fresh vegetables served with buttered toast",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=200&fit=crop"
      },
      {
        name: "Nihari & Naan",
        description: "Slow-cooked beef nihari with fresh naan bread and garnishes",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop"
      },
      {
        name: "Fresh Fruit Platter",
        description: "Seasonal fresh fruits beautifully arranged with yogurt dip",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300&h=200&fit=crop"
      },
      {
        name: "Continental Breakfast",
        description: "Eggs, toast, jam, butter, fresh juice, and coffee",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=200&fit=crop"
      }
    ],
    lunch: [
      {
        name: "Chicken Biryani",
        description: "Aromatic basmati rice with tender chicken, spices, and saffron",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop"
      },
      {
        name: "Karahi Chicken",
        description: "Spicy chicken curry cooked in traditional karahi with fresh tomatoes",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop"
      },
      {
        name: "Beef Pulao",
        description: "Fragrant rice dish with tender beef pieces and whole spices",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
      },
      {
        name: "Dal Makhani & Rice",
        description: "Creamy black lentils served with steamed basmati rice",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop"
      },
      {
        name: "Grilled Fish",
        description: "Fresh fish marinated in spices and grilled to perfection",
        image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop"
      },
      {
        name: "Vegetable Curry",
        description: "Mixed seasonal vegetables cooked in aromatic curry sauce",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop"
      }
    ],
    dinner: [
      {
        name: "Mutton Karahi",
        description: "Tender mutton pieces cooked with tomatoes, ginger, and green chilies",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop"
      },
      {
        name: "Chicken Tikka Masala",
        description: "Grilled chicken tikka in rich, creamy tomato-based curry",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop"
      },
      {
        name: "Seekh Kebab Platter",
        description: "Juicy minced meat kebabs served with naan and mint chutney",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop"
      },
      {
        name: "Fish Curry & Rice",
        description: "Fresh fish cooked in coconut-based curry with aromatic spices",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop"
      },
      {
        name: "Mixed Grill",
        description: "Assorted grilled meats including chicken, beef, and lamb",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop"
      },
      {
        name: "Palak Paneer",
        description: "Fresh cottage cheese cubes in creamy spinach curry",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop"
      }
    ]
  };

  const tabs = [
    { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
    { id: 'lunch', name: 'Lunch', icon: '☀️' },
    { id: 'dinner', name: 'Dinner', icon: '🌙' }
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <FadeInUp className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 hover:bg-white'
              }`}
              style={activeTab === tab.id ? { backgroundColor: '#d11a5c', color: 'white' } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#d11a5c';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#4b5563';
                }
              }}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.name}
            </motion.button>
          ))}
        </div>
      </FadeInUp>

      {/* Menu Content */}
      <div className="relative">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={activeTab === tab.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={activeTab === tab.id ? 'block' : 'absolute inset-0 pointer-events-none'}
          >
            <div id={tab.id} className="scroll-mt-20">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData[tab.id as keyof typeof menuData].map((dish, index) => (
                  <AnimatedCard
                    key={dish.name}
                    delay={index * 0.1}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Dish Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Dish Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{dish.name}</h4>
                      <p className="text-gray-600 mb-4 line-clamp-2">{dish.description}</p>
                      
                      {/* Order Button */}
                      <motion.a
                        href="tel:+923016828719"
                        className="w-full text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center gap-2 group"
                        style={{ backgroundColor: '#ffa723' }}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: '#e6951f',
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>📞</span>
                        <span className="group-hover:scale-105 transition-transform duration-200">Order Now</span>
                      </motion.a>
                    </div>
                  </AnimatedCard>
                ))}
              </StaggerContainer>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WeekendDealsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const deals = [
    {
      name: "Chicken Pulao Special",
      description: "Tender chicken with aromatic rice, served with raita",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop",
      price: "450",
      originalPrice: "600",
      badge: "🔥 HOT DEAL",
      badgeColor: "bg-red-500",
      emoji: "🍗"
    },
    {
      name: "Beef Biryani Deal",
      description: "Juicy beef chunks cooked in traditional biryani spices",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop",
      price: "550",
      originalPrice: "700",
      badge: "⭐ POPULAR",
      badgeColor: "bg-orange-500",
      emoji: "🍖"
    },
    {
      name: "Grilled Fish Platter",
      description: "Fresh fish fillet marinated with herbs and served with fries",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&h=400&fit=crop",
      price: "650",
      originalPrice: "800",
      badge: "🐟 FRESH",
      badgeColor: "bg-green-500",
      emoji: "🍤"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deals.length) % deals.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-3xl">
        <motion.div 
          className="flex"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {deals.map((deal, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <motion.div 
                className="bg-white rounded-3xl shadow-2xl overflow-hidden mx-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      fill
                      className="object-cover"
                    />
                    <motion.div 
                      className={`absolute top-6 left-6 ${deal.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {deal.badge}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <motion.h3 
                      className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {deal.emoji} {deal.name}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-gray-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {deal.description}
                    </motion.p>
                    
                    {/* Pricing */}
                    <motion.div 
                      className="flex items-center gap-4 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <span className="text-4xl lg:text-5xl font-bold text-orange-600">
                        Rs. {deal.price}
                      </span>
                      <span className="text-xl text-gray-500 line-through">
                        Rs. {deal.originalPrice}
                      </span>
                    </motion.div>

                    {/* Order Button */}
                    <motion.a
                      href="tel:+923016828719"
                      className="bg-orange-600 text-white py-4 px-8 rounded-xl text-xl font-bold hover:bg-orange-700 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#ea580c',
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl">📞</span>
                      <span>Order Now</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {deals.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSlider = () => {
  const heroImages = [
    '/hero.jpg',
    '/hero1.jpeg', 
    '/hero2.jpg',
    '/hero3.jpg',
    '/hero4.webp'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={image}
            alt={`Hero slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h1 
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 4.5rem)',
            fontWeight: '700',
            fontFamily: '"Playfair Display", "Times New Roman", serif',
            letterSpacing: '0.02em',
            lineHeight: '1.2',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            color: '#ffffff',
            textAlign: 'center',
            wordSpacing: '0.1em'
          }}
        >
          Daily Fresh Food Delivery
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Perfect for Offices, Meetings & Events in Lahore
        </motion.p>
        
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Fresh & Hot Meals – Daily Service for 5 to 150 people
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.a
            href="tel:+923016828719"
            className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            style={{ backgroundColor: '#ffa723' }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#e6951f',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            📞 Order Now: +92 301 6828719
          </motion.a>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#d11a5c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              Get Quote
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              We cater to all your food needs with fresh, delicious meals
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image
                  src="/officecatering.jpeg"
                  alt="Office Catering"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Office Catering</h3>
              <p className="text-gray-600">
                Daily fresh meals delivered to your office. Keep your team well-fed and productive with our reliable service.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image
                  src="/businessmeeting.webp"
                  alt="Business Meetings"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Meetings</h3>
              <p className="text-gray-600">
                Impress your clients and colleagues with our professional catering service for meetings and conferences.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image
                  src="/event.webp"
                  alt="Special Events"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Special Events</h3>
              <p className="text-gray-600">
                Make your events memorable with our delicious food. Perfect for celebrations and gatherings.
              </p>
            </AnimatedCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              We deliver fresh food across major areas in Lahore
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              "Gulberg",
              "Model Town",
              "Garden Town",
              "Johar Town",
              "Wapda Town",
              "Thokar",
              "Township"
            ].map((area, index) => (
              <AnimatedCard 
                key={area} 
                delay={index * 0.1} 
                className="p-4 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:scale-105" 
                style={{ backgroundColor: '#fef3c7' }}
              >
                <div className="mb-2 flex justify-center">
                  <svg className="w-6 h-6" style={{ color: '#ffa723' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{area}</h3>
              </AnimatedCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Food Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Food Menu
            </h2>
            <p className="text-xl text-gray-600">
              Delicious, fresh meals prepared daily for your satisfaction
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <MenuTabs />
          </FadeInUp>
        </div>
      </section>

      {/* Menu/Packages Section */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Packages
            </h2>
            <p className="text-xl text-gray-600">
              Flexible packages to suit your needs - from 5 to 150 people
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d11a5c' }}>Small Office</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">5-20 People</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="mr-2" style={{ color: '#ffa723' }}>✓</span>
                  Fresh daily meals
                </li>
                <li className="flex items-center">
                  <span className="mr-2" style={{ color: '#ffa723' }}>✓</span>
                  On-time delivery
                </li>
                <li className="flex items-center">
                  <span className="mr-2" style={{ color: '#ffa723' }}>✓</span>
                  Variety of cuisines
                </li>
              </ul>
              <a
                href="tel:+923016828719"
                className="block w-full text-white text-center py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: '#ffa723' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e6951f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffa723'}
              >
                Order Now
              </a>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2} className="bg-white p-8 rounded-lg shadow-lg border-2 hover:shadow-xl transition-shadow duration-300" style={{ borderColor: '#d11a5c' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d11a5c' }}>Medium Office</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">20-80 People</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span style={{ color: '#ffa723' }}>✓</span>
                  Fresh daily meals
                </li>
                <li className="flex items-center">
                  <span style={{ color: '#ffa723' }}>✓</span>
                  Priority delivery
                </li>
                <li className="flex items-center">
                  <span style={{ color: '#ffa723' }}>✓</span>
                  Custom menu options
                </li>
                <li className="flex items-center">
                  <span style={{ color: '#ffa723' }}>✓</span>
                  Bulk discounts
                </li>
              </ul>
              <a
                href="tel:+923016828719"
                className="block w-full text-white text-center py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: '#ffa723' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e6951f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffa723'}
              >
                Order Now
              </a>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d11a5c' }}>Large Events</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">80-150 People</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span style={{ color: '#ffa723' }}>✓</span>
                  Premium catering service
                </li>
                <li className="flex items-center">
                  <span style={{ color: '#ffa723' }}>✓</span>
                  Dedicated coordinator
                </li>
                <li className="flex items-center">
                  <span style={{ color: '#ffa723' }}>✓</span>
                  Multiple cuisine options
                </li>
                <li className="flex items-center">
                  <span style={{ color: '#ffa723' }}>✓</span>
                  Best rates guaranteed
                </li>
              </ul>
              <a
                href="tel:+923016828719"
                className="block w-full text-white text-center py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: '#ffa723' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e6951f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffa723'}
              >
                Order Now
              </a>
            </AnimatedCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Weekend Deals Section */}
      <section id="weekend-deals" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎉 Weekend Deals
            </h2>
            <p className="text-xl text-gray-600">
              Special weekend offers - Limited time only!
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <WeekendDealsSlider />
          </FadeInUp>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#d11a5c' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Order Fresh Food?
            </h2>
            <p className="text-xl mb-8" style={{ color: '#fef3c7' }}>
              Call us now or get a custom quote for your office or event
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+923016828719"
              className="bg-white px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-flex items-center justify-center"
              style={{ color: '#d11a5c' }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#f3f4f6',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call: +92 301 6828719
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors inline-flex items-center justify-center"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#d11a5c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Get Custom Quote
              </Link>
            </motion.div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}

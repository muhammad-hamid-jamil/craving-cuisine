import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Craving Cuisine
          </h1>
          <p className="text-xl text-orange-100">
            Your trusted partner for fresh, delicious food delivery in Lahore
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Craving Cuisine was born from a simple idea: everyone deserves access to fresh, 
                delicious food, especially during busy work days and important events. We started 
                our journey in Lahore with a mission to provide reliable, high-quality food 
                delivery services to offices, meetings, and special events.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What sets us apart is our commitment to freshness and punctuality. We understand 
                that when you're planning an office lunch or a business meeting, timing is everything. 
                That's why we've built our entire operation around delivering fresh, hot meals 
                exactly when you need them.
              </p>
              <p className="text-lg text-gray-600">
                Today, we proudly serve major areas across Lahore, catering to groups from 
                5 to 150 people with the same level of care and attention to detail.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Fresh & Hot Meals</h3>
                <p className="text-gray-600">
                  Every meal is prepared fresh and delivered hot to ensure the best taste and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our food. Every ingredient is carefully 
                selected and every meal is prepared with care.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliable Service</h3>
              <p className="text-gray-600">
                Punctuality is our promise. We understand the importance of timely delivery 
                for your business needs and events.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our success. We go the extra mile to ensure every 
                customer experience exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Craving Cuisine?
            </h2>
            <p className="text-xl text-gray-600">
              Here's what makes us the preferred choice for food delivery in Lahore
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Fresh Food</h3>
                <p className="text-gray-600">
                  All our meals are prepared fresh daily using the finest ingredients.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Portions</h3>
                <p className="text-gray-600">
                  We cater to any group size, from small teams of 5 to large events of 150 people.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wide Coverage</h3>
                <p className="text-gray-600">
                  We serve all major areas in Lahore including Gulberg, Model Town, and more.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Service</h3>
                <p className="text-gray-600">
                  Perfect for offices, meetings, and events with our reliable delivery service.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Ordering</h3>
                <p className="text-gray-600">
                  Simple phone ordering process with dedicated customer support.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Best value for money with bulk discounts for larger orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of satisfied customers who trust us for their daily food needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923016828719"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              📞 Call Now: +92 301 6828719
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

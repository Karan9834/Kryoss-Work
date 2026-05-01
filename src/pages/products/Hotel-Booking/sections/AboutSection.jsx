import React from 'react';
import bookingabout from "../../../../assets/Hotel-Management/bookingabout.jpg"

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">

      {/* Subtle Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left side - Image with Theme Accent */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Ring */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-teal-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-cyan-200 rounded-full opacity-60"></div>

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={bookingabout}
                alt="Hotel management team at work"
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Hotel Management
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                We're transforming hotel management through intelligent technology that simplifies daily operations while elevating the guest experience. Our all-in-one platform seamlessly connects booking management, room assignments, staff coordination, and guest communications in one intuitive dashboard.
              </p>

              <p>
                Born from the real-world challenges faced by hoteliers, our solution combines deep hospitality industry knowledge with cutting-edge technology. We've walked in your shoes — understanding that efficient operations lead to happier guests and more successful properties.
              </p>

              <p>
                Today, thousands of hotels across the globe rely on our platform to streamline their workflows, reduce manual tasks, and deliver exceptional service. From boutique properties to large hotel chains, we're committed to providing the tools that make hospitality management effortless.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
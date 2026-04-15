import React from 'react';
import aboutimg from "../../../../assets/Hotel-Management/manageabout1.jpg"
const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">

      {/* Subtle Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-violet-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Rings */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-purple-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-violet-200 rounded-full opacity-60"></div>

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutimg}
                alt="Hotel management team at work"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-violet-500/5 pointer-events-none"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                Xain Hotel Management
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Xain is a comprehensive hotel management system designed to streamline operations, enhance guest experiences, and maximize revenue. With an integrated website, powerful PMS, and intuitive tools, we provide everything hotels need to succeed in today's competitive hospitality landscape.
              </p>

              <p>
                Born from real-world hospitality challenges, our platform combines deep industry expertise with cutting-edge technology. We understand that efficient operations lead to happier guests and more successful properties — that's why we built Xain to be powerful yet simple to use.
              </p>

              <p>
                From boutique hotels to large chains, thousands of properties worldwide trust Xain to manage their daily operations, online presence, and guest relationships. Our mission is to make hotel management effortless, allowing you to focus on what matters most: creating memorable experiences for every guest.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
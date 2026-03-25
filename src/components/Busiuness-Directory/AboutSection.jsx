import React from "react";
import { CheckCircle, Building2, Star, Users } from "lucide-react";
import about from "../../assets/Busiuness-directory/about.jpg"

const AboutSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT IMAGE (ONLINE) ===== */}
        <div className="flex justify-center">
          <img
            src="https://undraw.co/api/illustrations/undraw_business_deal_re_up4u.svg"
            alt="About Business Directory"
            className="w-full max-w-md object-contain drop-shadow-xl"
          />
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div>

          {/* Tag */}
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
            About Platform
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            A Smarter Way to Discover{" "}
            <span className="text-blue-600">Local Businesses</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our business directory platform is designed to help users easily find, compare,
            and connect with trusted service providers across multiple industries.
            We focus on delivering accurate listings, real customer insights, and a seamless
            browsing experience.
          </p>

          {/* Extra Info Paragraph */}
          <p className="mt-4 text-gray-500 leading-relaxed">
            Whether you're looking for restaurants, healthcare services, real estate,
            or professional services — our platform ensures you get access to verified
            businesses with complete details, helping you make informed decisions faster.
          </p>

          {/* Feature Points */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Verified business listings</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Real customer reviews</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Advanced filtering & search</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Multi-category coverage</p>
            </div>

          </div>

          {/* Stats (Informative Touch 🔥) */}
          <div className="mt-10 flex flex-wrap gap-6">

            <div className="flex items-center gap-2">
              <Building2 className="text-blue-600 w-5 h-5" />
              <span className="text-gray-700 text-sm">50K+ Businesses</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="text-blue-600 w-5 h-5" />
              <span className="text-gray-700 text-sm">100K+ Users</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-blue-600 w-5 h-5" />
              <span className="text-gray-700 text-sm">4.8 Avg Rating</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from "react";
import { CheckCircle, Building2, Users, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT IMAGE ===== */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
            alt="Business discussion"
            className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
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
            Simplifying the Way You{" "}
            <span className="text-blue-600">Find Businesses</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our business directory platform is designed to help users discover,
            evaluate, and connect with trusted businesses across various industries.
            We provide accurate listings, real customer reviews, and a seamless
            browsing experience.
          </p>

          {/* Extra Info */}
          <p className="mt-4 text-gray-500 leading-relaxed">
            Whether you're searching for local services, comparing options, or
            exploring new opportunities — our platform ensures you get reliable
            information quickly and efficiently.
          </p>

          {/* Features Points */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Verified business listings</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Trusted customer reviews</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Advanced search & filters</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Multi-category discovery</p>
            </div>

          </div>

          {/* Stats */}
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
import React from "react";
import { Globe, Shield, TrendingUp, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <p className="text-sm font-semibold text-green-600 mb-3 uppercase">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gray-900">Driving Innovation in</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
              Global Business Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-6">
            We empower businesses with cutting-edge technology, real-time insights, 
            and scalable solutions designed to thrive in a rapidly evolving global market.
          </p>

          <p className="text-gray-600 mb-8">
            Our platform combines data intelligence, automation, and expert strategies 
            to help organizations grow, adapt, and lead with confidence.
          </p>

          {/* Points */}
          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <Globe className="text-green-500 mt-1" />
              <p className="text-gray-700">
                Global market reach with localized insights
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="text-green-500 mt-1" />
              <p className="text-gray-700">
                Secure and reliable business infrastructure
              </p>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="text-green-500 mt-1" />
              <p className="text-gray-700">
                Data-driven strategies for consistent growth
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-green-500 mt-1" />
              <p className="text-gray-700">
                Trusted by businesses and professionals worldwide
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="about"
            className="rounded-2xl shadow-xl w-full object-cover"
          />

          {/* floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 border">
            <p className="text-xs text-gray-500">Trusted by</p>
            <p className="font-bold text-gray-900">50K+ Businesses</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
import React from 'react';
import { CheckCircle, TrendingUp, Users, Clock, Shield, BarChart3 } from 'lucide-react';
import softwareImg from "../../../../../assets/Restaurant-Manage/about.png"; // Add your image path

const RestaurantSoftware = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center order-1 md:order-1">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-l-4 border-t-4 border-orange-500 rounded-tl-2xl"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-4 border-b-4 border-amber-500 rounded-br-2xl"></div>
          
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 blur-2xl rounded-full"></div>

          <img
            src={softwareImg}
            alt="Restaurant Management Software"
            className="relative w-full max-w-md rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-2 md:order-2">
          {/* Kryoss Work Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            Kryoss Work
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Restaurant Management{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Software Development
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Restaurant software is an extensive range of solutions that caters to various operations in a restaurant business and streamlines the same. It encompasses software and hardware tools like POS systems, inventory management software, and other tailor-made tools to tap into technology and reap the benefits of the digital era.
          </p>

          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
            These enable operations like online ordering, billing and invoicing, feedback management, CRM, reports, and analytics, etc. All-inclusive restaurant management software solutions that help your business manage operations efficiently and scale new heights while getting closer to your customers.
          </p>

          {/* Key Features List */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-orange-500" />
              <span className="text-gray-600 text-xs">POS Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-orange-500" />
              <span className="text-gray-600 text-xs">Inventory Management</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-orange-500" />
              <span className="text-gray-600 text-xs">Online Ordering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-orange-500" />
              <span className="text-gray-600 text-xs">Billing & Invoicing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-orange-500" />
              <span className="text-gray-600 text-xs">CRM Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-orange-500" />
              <span className="text-gray-600 text-xs">Reports & Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSoftware;
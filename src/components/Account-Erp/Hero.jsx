import React from "react";
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";

const HeroERP = () => {
  // Scroll to products section function
  const scrollToProducts = () => {
    const productsSection = document.getElementById("erp-products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* 🔥 Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>
      </div>

      {/* 🌊 Subtle Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,32,158,28,70.36-5,136.33-33,206.8-37C438.64,32,512.34,53,583,72s141.64,28,212.2,14C872,71,938,37,1008,30c63.64-6,127.36,10,192,26V0Z"
            className="fill-blue-50"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm mb-6">
            ERP & Accounting Suite
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Smart ERP Solutions <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              For Modern Business
            </span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-xl leading-relaxed">
            Manage accounting, inventory, payroll, and reporting in one unified platform.
            Gain real-time insights and automate operations with ease.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 mt-8 text-gray-600">
            <div className="flex items-center gap-2">
              <BarChart3 className="text-blue-600 w-5 h-5" />
              Real-time Analytics
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-blue-600 w-5 h-5" />
              Secure & Compliant
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-blue-600 w-5 h-5" />
              Automation
            </div>
          </div>

          {/* CTA - Now scrolls to products section */}
          <div className="mt-10 flex gap-4">
            <button 
              onClick={scrollToProducts}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore Product
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* 🔥 GLOW BEHIND IMAGE */}
          <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 blur-3xl rounded-3xl"></div>

          {/* IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400"
              alt="ERP Dashboard"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* FLOATING STATS */}
          <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-md px-4 py-3">
            <p className="text-xs text-gray-500">Monthly Revenue</p>
            <p className="font-semibold">$124,582</p>
          </div>

          <div className="absolute -top-6 right-6 bg-white rounded-xl shadow-md px-4 py-2 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Live Dashboard
            </span>
          </div>

        </div>
      </div>

      {/* 🌊 Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,32,158,28,70.36-5,136.33-33,206.8-37C438.64,32,512.34,53,583,72s141.64,28,212.2,14C872,71,938,37,1008,30c63.64-6,127.36,10,192,26V0Z"
            className="fill-blue-50"
          />
        </svg>
      </div>

    </section>
  );
};

export default HeroERP;
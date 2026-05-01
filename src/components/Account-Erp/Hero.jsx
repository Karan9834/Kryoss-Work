import React from "react";
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import heroimg from "../../assets/account and erp 1/Enterprise Grade ERP Solution ERP OS Peak Financial Performance.jpg";
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
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[12px] font-medium tracking-[0.05em] uppercase mb-6">
            ERP & Accounting Suite
          </div>

          {/* H1 - Updated: text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Smart ERP Solutions <br />
            {/* Highlighted Text - Same typography as H1 with gradient */}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              For Modern Business
            </span>
          </h1>

          {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[16px] md:text-[18px] font-normal leading-[1.6] mt-6 max-w-xl">
            Manage accounting, inventory, payroll, and reporting in one unified platform.
            Gain real-time insights and automate operations with ease.
          </p>

          {/* FEATURES - Updated typography */}
          <div className="flex flex-wrap gap-6 mt-8 text-gray-600">
            <div className="flex items-center gap-2 text-[14px] md:text-[15px] font-normal">
              <BarChart3 className="text-blue-600 w-5 h-5" />
              Real-time Analytics
            </div>
            <div className="flex items-center gap-2 text-[14px] md:text-[15px] font-normal">
              <Shield className="text-blue-600 w-5 h-5" />
              Secure & Compliant
            </div>
            <div className="flex items-center gap-2 text-[14px] md:text-[15px] font-normal">
              <Zap className="text-blue-600 w-5 h-5" />
              Automation
            </div>
          </div>

          {/* CTA - Updated button typography */}
          <div className="mt-10 flex gap-4">
            <button
              onClick={scrollToProducts}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-[16px] tracking-[0.01em] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
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
              src={heroimg}
              alt="ERP Dashboard"
              className="w-full h-[420px] object-cover"
            />
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
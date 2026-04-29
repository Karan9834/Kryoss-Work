import React from "react";
import { ArrowRight } from "lucide-react";
import saashero from "../../assets/saas products 1/AI ContentGenerato SaaS.jpg";

const SaaSHero = () => {
  // Scroll to products section function
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">

      {/* Premium Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Soft Radial Gradient */}
      <div className="absolute top-0 -right-1/3 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-1/3 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl"></div>

      {/* 🌊 Premium Wavy SVG Background with Multi-Layer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        {/* Layer 1 - Primary Wave */}
        <svg
          className="relative block w-full h-auto min-h-[320px] opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#premium-gradient-1)"
            fillOpacity="0.6"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <defs>
            <linearGradient id="premium-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Layer 2 - Subtle Reverse Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-auto min-h-[280px] opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ top: '-40px' }}
        >
          <path
            fill="url(#premium-gradient-2)"
            fillOpacity="0.5"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,218.7C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <defs>
            <linearGradient id="premium-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Layer 3 - Delicate Blurred Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-auto min-h-[300px] opacity-20 blur-sm"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ top: '-20px' }}
        >
          <path
            fill="url(#premium-gradient-3)"
            d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,197.3C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
          <defs>
            <linearGradient id="premium-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-24">

        {/* 🧠 LEFT CONTENT */}
        <div className="backdrop-blur-sm">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-gray-700">Trusted by 10,000+ businesses</span>
          </div>

          {/* H1 - Updated: text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Smart SaaS Solutions <br />
            {/* Highlighted Text - Same typography as H1 with gradient */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 font-bold">
              Built for Growth
            </span>
          </h1>

          {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
          <p className="mt-6 text-gray-600 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl">
            Launch, manage, and scale your digital products with powerful SaaS tools designed for modern businesses.
            From automation to analytics, everything you need in one platform.
          </p>

          {/* 🚀 SINGLE CTA - Updated button typography */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[16px] tracking-[0.01em] font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Explore Product
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* 💻 RIGHT IMAGE */}
        <div className="relative group">
          {/* Premium Glow Effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 to-blue-200/40 blur-2xl rounded-3xl"></div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl"></div>

          {/* Image Container with Premium Border */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 pointer-events-none"></div>
            <img
              src={saashero}
              alt="Dashboard Preview"
              className="relative w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default SaaSHero;
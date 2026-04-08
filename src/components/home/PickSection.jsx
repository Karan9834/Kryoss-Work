import React from "react";
import {
  Star,
  Handshake,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const PickSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-white overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        {/* Soft gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-3xl" />
        
        {/* 🔥 MULTIPLE HEXAGONS - Scattered everywhere */}
        {/* Top left area */}
        <div className="absolute top-10 left-10 opacity-15 pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F97316" />
          </svg>
        </div>
        
        <div className="absolute top-32 left-32 opacity-10 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F59E0B" />
          </svg>
        </div>
        
        {/* Top right area */}
        <div className="absolute top-20 right-20 opacity-15 pointer-events-none">
          <svg width="70" height="70" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F97316" />
          </svg>
        </div>
        
        <div className="absolute top-48 right-10 opacity-8 pointer-events-none">
          <svg width="35" height="35" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F59E0B" />
          </svg>
        </div>
        
        {/* Middle left */}
        <div className="absolute top-1/2 left-5 opacity-12 pointer-events-none">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F97316" />
          </svg>
        </div>
        
        {/* Middle right */}
        <div className="absolute top-1/3 right-5 opacity-10 pointer-events-none">
          <svg width="45" height="45" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F59E0B" />
          </svg>
        </div>
        
        {/* Bottom left */}
        <div className="absolute bottom-20 left-20 opacity-15 pointer-events-none">
          <svg width="65" height="65" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F97316" />
          </svg>
        </div>
        
        <div className="absolute bottom-40 left-10 opacity-8 pointer-events-none">
          <svg width="30" height="30" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F59E0B" />
          </svg>
        </div>
        
        {/* Bottom right */}
        <div className="absolute bottom-10 right-10 opacity-15 pointer-events-none">
          <svg width="55" height="55" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F97316" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 right-32 opacity-10 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#F59E0B" />
          </svg>
        </div>

        {/* 🔥 DOTTED TRAIL PATHS - Multiple paths */}
        {/* Path 1 - Top horizontal */}
        <div className="absolute top-1/4 left-0 right-0 opacity-40">
          <div className="flex justify-center gap-1.5">
            {[...Array(30)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-orange-500' : i % 3 === 1 ? 'bg-amber-500' : 'bg-orange-300'}`} />
            ))}
          </div>
        </div>
        
        {/* Path 2 - Diagonal top-left to bottom-right */}
        <div className="absolute top-20 left-20 opacity-30 transform rotate-45">
          <div className="flex gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-orange-400' : 'bg-amber-400'}`} />
            ))}
          </div>
        </div>
        
        {/* Path 3 - Vertical right side */}
        <div className="absolute top-0 right-32 bottom-0 opacity-30">
          <div className="flex flex-col gap-2 h-full justify-center">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-amber-500' : 'bg-orange-500'}`} />
            ))}
          </div>
        </div>
        
        {/* Path 4 - Bottom horizontal */}
        <div className="absolute bottom-1/4 left-0 right-0 opacity-40">
          <div className="flex justify-center gap-1.5">
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-amber-500' : i % 3 === 1 ? 'bg-orange-400' : 'bg-amber-300'}`} />
            ))}
          </div>
        </div>
        
        {/* Path 5 - Diagonal bottom-left to top-right */}
        <div className="absolute bottom-20 right-20 opacity-25 transform -rotate-45">
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-orange-400' : 'bg-amber-400'}`} />
            ))}
          </div>
        </div>

        {/* 🔥 CORNER BRACKETS - Multiple corners */}
        {/* Top left corner */}
        <div className="absolute top-8 left-8 w-16 h-16 opacity-30">
          <div className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
          <div className="absolute top-0 left-0 w-0.5 h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
        
        {/* Top right corner */}
        <div className="absolute top-8 right-8 w-16 h-16 opacity-30">
          <div className="absolute top-0 right-0 w-12 h-0.5 bg-gradient-to-l from-amber-500 to-transparent" />
          <div className="absolute top-0 right-0 w-0.5 h-12 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
        
        {/* Bottom left corner */}
        <div className="absolute bottom-8 left-8 w-16 h-16 opacity-30">
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
          <div className="absolute bottom-0 left-0 w-0.5 h-12 bg-gradient-to-t from-orange-500 to-transparent" />
        </div>
        
        {/* Bottom right corner */}
        <div className="absolute bottom-8 right-8 w-16 h-16 opacity-30">
          <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-amber-500 to-transparent" />
          <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-gradient-to-t from-amber-500 to-transparent" />
        </div>

        {/* 🔥 MICRO DOTS - Scattered randomly */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-400/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-600 text-xs font-semibold uppercase tracking-widest">
              Choose Your Path
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pick What{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Suits You Most
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose the path that aligns with your goals and let's create something amazing together
          </p>
        </div>

        {/* Cards Grid - Same as before */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6">
              {/* Card 1 - Products */}
              <div className="group bg-white rounded-2xl border border-orange-100 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Explore Products
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  Discover our ready-to-deploy digital solutions and white-label products
                </p>
                <div className="flex items-center justify-between">
                  <Link to="/products" className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <CheckCircle size={16} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
                </div>
              </div>
              
              {/* Card 3 - Hire Developers */}
              <div className="group bg-white rounded-2xl border border-orange-100 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Hire Developers
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  Get dedicated expert developers for your project needs
                </p>
                <div className="flex items-center justify-between">
                  <Link to="/hire-developers" className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <CheckCircle size={16} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN (SHIFTED DOWN) */}
            <div className="flex flex-col gap-6 mt-8">
              {/* Card 2 - Services */}
              <div className="group bg-white rounded-2xl border border-amber-100 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Handshake size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Explore Services
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  Check out our comprehensive service offerings and solutions
                </p>
                <div className="flex items-center justify-between">
                  <Link to="/services" className="inline-flex items-center gap-2 text-amber-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <CheckCircle size={16} className="text-gray-300 group-hover:text-amber-500 transition-colors" />
                </div>
              </div>
              
              {/* Card 4 - Careers */}
              <div className="group bg-white rounded-2xl border border-orange-100 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Join Our Team
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  Build your career with KryossWork and grow together
                </p>
                <div className="flex items-center justify-between">
                  <Link to="/business-growth" className="inline-flex items-center gap-2 text-amber-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <CheckCircle size={16} className="text-gray-300 group-hover:text-amber-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT CONTENT */}
          <div className="lg:pl-4">
            <div className="bg-gradient-to-br from-orange-100/50 to-amber-100/50 rounded-2xl p-8 border border-orange-200 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-orange-600 text-sm font-semibold uppercase tracking-wider">
                    Why Choose Us?
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Find Your Perfect Fit
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                We've organized our offerings based on what matters most to you. 
                Whether you're looking to purchase products, hire talent, explore 
                services, or join our team — we've got you covered.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our team is always ready to assist you with tailored solutions that
                match your specific requirements and business goals.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-orange-200">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-orange-50 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Clock className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-orange-600 transition-colors">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-orange-50 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <Shield className="w-4 h-4 text-amber-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-amber-600 transition-colors">Secure Solutions</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-orange-50 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Zap className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-orange-600 transition-colors">24/7 Support</span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">✓ 250+ Projects</span>
                <span className="flex items-center gap-1">✓ 70+ Countries</span>
                <span className="flex items-center gap-1">✓ 98% Satisfaction</span>
              </div>

              <p className="text-xs text-gray-500 mt-4 italic text-center">
                *No long-term commitments. Pay as you grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickSection;
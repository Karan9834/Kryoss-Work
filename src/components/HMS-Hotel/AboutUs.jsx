import React from "react";
import { Sparkles, Zap, Shield, Globe, Award, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">
      
      {/* Subtle Orange and Teal Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-50 to-teal-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-50 to-orange-50 rounded-full blur-3xl opacity-40"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731605_1px,transparent_1px),linear-gradient(to_bottom,#0d948805_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Decorative Wave Line */}
      <div className="absolute top-20 left-0 w-full">
        <svg className="w-full h-auto opacity-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="none" stroke="#F97316" strokeWidth="1" d="M0,40 L80,35 C160,30,320,20,480,25 C640,30,800,50,960,55 C1120,60,1280,50,1360,45 L1440,40"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT - IMAGE */}
          <div className="relative order-2 lg:order-1">
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-teal-200/30 rounded-2xl blur-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400/20 to-teal-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration in modern newsroom"
                  className="w-full rounded-xl shadow-lg transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-2 rounded-xl bg-gradient-to-tr from-orange-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-orange-500 to-teal-500 rounded-xl p-3 shadow-xl animate-float">
              <Sparkles size={24} className="text-white" />
            </div>
          </div>

          {/* RIGHT CONTENT - TEXT */}
          <div className="order-1 lg:order-2">
            {/* Section Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-teal-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
              <Heart size={14} className="text-orange-500" />
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
                About NewsFlow
              </span>
            </div>

            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
              Revolutionizing How{" "}
              <span className="bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
                News Gets Made
              </span>
            </h2>

            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
            <p className="mt-6 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
              NewsFlow is the world's first AI-powered news management platform designed for modern media enterprises. We combine cutting-edge artificial intelligence with intuitive workflows to help newsrooms produce, distribute, and optimize content at scale.
            </p>

            <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
              Founded by journalists and technologists, we understand the unique challenges of modern newsrooms. Our platform empowers over 500 news organizations across 40 countries to deliver accurate, timely, and engaging content while reducing operational complexity.
            </p>

            {/* Feature Highlights - Updated typography */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap size={18} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-[13px] md:text-[14px]">AI-Powered</p>
                  <p className="text-[11px] md:text-[12px] font-normal text-gray-500">Smart workflows</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-[13px] md:text-[14px]">Global Reach</p>
                  <p className="text-[11px] md:text-[12px] font-normal text-gray-500">40+ countries</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield size={18} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-[13px] md:text-[14px]">Enterprise Grade</p>
                  <p className="text-[11px] md:text-[12px] font-normal text-gray-500">Bank-level security</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-[13px] md:text-[14px]">Trusted Leader</p>
                  <p className="text-[11px] md:text-[12px] font-normal text-gray-500">500+ newsrooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
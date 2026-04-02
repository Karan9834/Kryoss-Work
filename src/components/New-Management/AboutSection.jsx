import React from "react";
import { Sparkles, Zap, Globe, TrendingUp, Shield, Layers } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* Subtle Orange Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-50 to-transparent rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
      
      {/* Decorative Wave Line */}
      <div className="absolute top-20 left-0 w-full">
        <svg className="w-full h-auto opacity-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="none" stroke="#F97316" strokeWidth="1" d="M0,40 L80,35 C160,30,320,20,480,25 C640,30,800,50,960,55 C1120,60,1280,50,1360,45 L1440,40"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          
          {/* LEFT CONTENT - IMAGE (Full height) */}
          <div className="relative flex items-stretch">
            {/* Orange Glow Effect Behind Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-h-[500px] bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-2xl blur-3xl"></div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-8 -right-8 z-10 bg-white shadow-xl rounded-2xl p-3 border border-orange-100 animate-float">
              <Layers size={28} className="text-orange-500" />
            </div>
            <div className="absolute -bottom-8 -left-8 z-10 bg-white shadow-xl rounded-2xl p-3 border border-orange-100 animate-float animation-delay-2000">
              <Sparkles size={28} className="text-amber-500" />
            </div>

            {/* Main Image Card - Full height matching content */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 h-full flex items-center">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
                alt="Newsroom collaboration and content creation"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-amber-500/5 pointer-events-none"></div>
              
              {/* Simple Caption Card - No Stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-orange-100/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-orange-600 font-semibold">Global News Network</p>
                    <p className="text-sm text-gray-700 font-medium">Seamless collaboration across 40+ countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - TEXT */}
          <div className="flex flex-col justify-center">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6 w-fit">
              <Sparkles size={16} className="text-orange-600" />
              <span className="text-sm font-semibold text-orange-700 tracking-wide">About NewsFlow</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Revolutionizing How{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">
                News Gets Made
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              NewsFlow is the world's first AI-powered news management platform designed for modern media enterprises. We combine cutting-edge artificial intelligence with intuitive workflows to help newsrooms produce, distribute, and optimize content at scale.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded by journalists and technologists, we understand the unique challenges of modern newsrooms. Our platform empowers over 500 news organizations across 40 countries to deliver accurate, timely, and engaging content while reducing operational complexity.
            </p>

            {/* Feature Grid - No Stats, Just Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={18} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI-Powered Workflows</h3>
                  <p className="text-sm text-gray-500 mt-1">Automate repetitive tasks and focus on storytelling</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe size={18} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Distribution</h3>
                  <p className="text-sm text-gray-500 mt-1">Reach audiences across any channel or platform</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={18} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Real-Time Analytics</h3>
                  <p className="text-sm text-gray-500 mt-1">Data-driven insights to optimize content performance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={18} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enterprise Security</h3>
                  <p className="text-sm text-gray-500 mt-1">Bank-grade encryption and compliance standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
import React from "react";
import { CheckCircle, Sparkles, Zap, Shield, TrendingUp, ArrowRight, Award, Users, Globe } from "lucide-react";
import aboutimg from "../../assets/IMS/about.jpg";
const AboutUs = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#f3f4f6"
            opacity="0.4"
          ></path>
          <path
            d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C348.57,4.12,423.3,34.79,498.07,48.68c74.27,13.77,148.15,20.7,222.32,9.48,35.59-5.38,70-14.38,104.68-24.31C956.39,13.43,1083.62,4.41,1200,15.81V0Z"
            fill="#f3f4f6"
            opacity="0.6"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c60.53-4.79,113.78-28.21,169.23-44.48C1096.58,34.46,1149,24.87,1200,15.81V0Z"
            fill="#f3f4f6"
          ></path>
        </svg>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Section Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full px-4 py-2">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Our Platform
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT - Image Section */}
          <div className="relative group order-2 lg:order-1">
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-2">
              <img
                src={aboutimg}
                alt="Team collaboration in modern workspace"
                className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-indigo-500/10 rounded-xl"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-3 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Globe size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.05em] text-gray-500">Global Reach</p>
                  <p className="text-sm font-semibold text-gray-900">Worldwide Presence</p>
                </div>
              </div>
            </div>

            {/* Experience Badge - Stats Removed */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-lg shadow-lg p-2 hidden lg:block">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Trusted</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.05em] text-gray-500">Globally</span>
              </div>
            </div>
          </div>

          {/* RIGHT - Content Section */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
              Powering the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Future of Work
              </span>
            </h2>

            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
            <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              We build powerful, scalable solutions designed to simplify complex workflows
              and enhance productivity. Our platform combines cutting-edge technology with
              intuitive design to deliver seamless user experiences across industries.
            </p>

            <p className="text-gray-500 text-[14px] md:text-[15px] font-normal leading-[1.6]">
              Trusted by businesses worldwide, we're committed to innovation and excellence
              in everything we create.
            </p>

            {/* Feature Points with Icons - Updated typography */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <CheckCircle size={12} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-[14px] md:text-[15px]">AI-powered automation</span>
                  <p className="text-[12px] md:text-[13px] font-normal text-gray-500">Smart workflows & predictive analytics</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <CheckCircle size={12} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-[14px] md:text-[15px]">Scalable architecture</span>
                  <p className="text-[12px] md:text-[13px] font-normal text-gray-500">Built for growing businesses</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <Shield size={12} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-[14px] md:text-[15px]">Enterprise-grade security</span>
                  <p className="text-[12px] md:text-[13px] font-normal text-gray-500">Bank-level encryption & compliance</p>
                </div>
              </div>
            </div>

            {/* Achievement Stats - REMOVED */}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#f3f4f6"
            opacity="0.4"
          ></path>
          <path
            d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C348.57,4.12,423.3,34.79,498.07,48.68c74.27,13.77,148.15,20.7,222.32,9.48,35.59-5.38,70-14.38,104.68-24.31C956.39,13.43,1083.62,4.41,1200,15.81V0Z"
            fill="#f3f4f6"
            opacity="0.6"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c60.53-4.79,113.78-28.21,169.23-44.48C1096.58,34.46,1149,24.87,1200,15.81V0Z"
            fill="#f3f4f6"
          ></path>
        </svg>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
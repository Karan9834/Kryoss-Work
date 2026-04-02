import React from "react";
import { CheckCircle, Sparkles, ArrowRight, Zap, Shield, Globe, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-orange-50/30 to-teal-50/30 py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* LEFT IMAGE - Enhanced */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-teal-400/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
              alt="Team collaboration in modern workspace"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-teal-500/10"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-orange-100/50 animate-float">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 flex items-center justify-center">
                    <Users size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Active Users</p>
                    <p className="text-sm font-bold text-gray-900">10,000+</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 flex items-center justify-center">
                    <Globe size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Countries</p>
                    <p className="text-sm font-bold text-gray-900">50+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-orange-300/50 rounded-tl-2xl"></div>
          <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-teal-300/50 rounded-br-2xl"></div>
        </div>

        {/* RIGHT CONTENT - Enhanced */}
        <div>
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-orange-500" />
            <span className="text-xs font-semibold bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              About Our Platform
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Powering the{" "}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-teal-600 text-transparent bg-clip-text">
              Future of Work
            </span>
          </h2>
          
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            We build powerful, scalable solutions designed to simplify complex workflows
            and enhance productivity. Our platform combines cutting-edge technology with
            intuitive design to deliver seamless user experiences across industries.
          </p>
          
          <p className="mt-4 text-gray-500 leading-relaxed">
            Trusted by businesses worldwide, we're committed to innovation and excellence
            in everything we create.
          </p>

          {/* Enhanced Points */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="text-orange-500" size={14} />
              </div>
              <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                AI-powered automation & smart workflows
              </span>
            </div>

            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="text-orange-500" size={14} />
              </div>
              <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                Scalable architecture for growing businesses
              </span>
            </div>

            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="text-orange-500" size={14} />
              </div>
              <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                Seamless integration across platforms
              </span>
            </div>

            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="text-teal-500" size={14} />
              </div>
              <span className="text-gray-700 group-hover:text-teal-600 transition-colors">
                Enterprise-grade security & compliance
              </span>
            </div>
          </div>

          {/* CTA Link */}
          <div className="mt-8">
            <button className="group inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300">
              Learn more about our story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
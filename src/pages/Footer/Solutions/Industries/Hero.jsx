import React from 'react';
import { ArrowRight, Play, CheckCircle, Building, Factory, TrendingUp, Shield } from 'lucide-react';
import heroImage from "../../../../assets/Indutries/hero.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-800 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/30 via-transparent to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-float opacity-70"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-float-delay opacity-60"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-amber-200 rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/2 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-float-delay opacity-60"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Diagonal slash lines */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L60 60 M60 0 L0 60' stroke='%23ffffff' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-[30px] md:h-[40px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C321.39,50.47,258.71,66.66,183.44,85.59,135.05,108.87,59.71,118.11,0,95.8V0H1200V95.8C1146.53,108.87,1070.05,101.29,985.66,92.83Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>
      
      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
              <span className="text-xs font-normal text-amber-200 tracking-wide">
                🏭 Industries We Serve
              </span>
            </div>
            
            {/* Heading */}
            <h1 className="text-[1.875rem] md:text-[3rem] font-bold text-white leading-tight mb-4">
              Transforming{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Industries Worldwide
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base font-normal text-amber-100/90 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              Tailored digital solutions for every sector. From manufacturing to healthcare, 
              we help businesses innovate, scale, and thrive in the modern economy.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Building className="w-4 h-4 text-amber-300" />
                <span className="text-sm text-amber-100">Enterprise Solutions</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Factory className="w-4 h-4 text-amber-300" />
                <span className="text-sm text-amber-100">Manufacturing Tech</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <TrendingUp className="w-4 h-4 text-amber-300" />
                <span className="text-sm text-amber-100">Scalable Growth</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Shield className="w-4 h-4 text-amber-300" />
                <span className="text-sm text-amber-100">Industry 4.0 Ready</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              
              {/* Get Started Button - Reduced shine */}
              <button className="group relative px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold text-base rounded-full shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* Secondary Button */}
              <button className="px-8 py-3.5 border border-white/30 text-white font-semibold text-base rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                <span>View Industries</span>
              </button>
              
            </div>
            
            {/* Stats Section */}
            <div className="mt-8 pt-5 border-t border-white/20">
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-white">20+</div>
                  <div className="text-xs font-normal text-amber-200/80 mt-1">Industries Covered</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-white">500+</div>
                  <div className="text-xs font-normal text-amber-200/80 mt-1">Enterprise Clients</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold text-white">99.9%</div>
                  <div className="text-xs font-normal text-amber-200/80 mt-1">Success Rate</div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            
            {/* Glowing orb effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-500/20 rounded-full blur-2xl"></div>
            
            {/* Main image container with glass effect */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-yellow-500/20 rounded-2xl"></div>
              
              {/* Image */}
              <img 
                src={heroImage}
                alt="Industries Solutions Illustration"
                className="relative w-full max-w-md lg:max-w-lg h-auto rounded-xl shadow-2xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-amber-600/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating badge 1 */}
              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md rounded-lg px-3 py-1.5 border border-amber-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-normal text-white">Global Presence</span>
                  <span className="text-xs font-bold text-amber-400">50+ Countries</span>
                </div>
              </div>
              
              {/* Floating badge 2 */}
              <div className="absolute top-6 right-6 bg-amber-500/90 backdrop-blur-md rounded-lg px-3 py-1.5 shadow-lg">
                <span className="text-xs font-normal text-white">🏭 Industry 4.0</span>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-[30px] md:h-[40px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,135.05,108.87,183.44,85.59,223.46,66.66,258.71,50.47,321.39,56.44Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes floatDelay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: floatDelay 7s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
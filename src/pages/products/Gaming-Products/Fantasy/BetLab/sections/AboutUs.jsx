import React from 'react';
import { ArrowRight, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import betlababout from "../../../../../../assets/Betting apps/Betlab/2,.jpg"

const AboutUs = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center order-1 md:order-1">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-l-4 border-t-4 border-blue-500 rounded-tl-2xl"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-4 border-b-4 border-cyan-500 rounded-br-2xl"></div>
          
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-2xl rounded-full"></div>

          <img
            src={betlababout}
            alt="About BetPro"
            className="relative w-full max-w-md rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-2 md:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            About Us
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Leading the Future of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Online Betting
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            BetPro is a premier online betting platform that combines cutting-edge technology 
            with user-centric design. Founded by industry experts, we've revolutionized the 
            way people experience online betting.
          </p>

          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
            With over 50,000 active users and 99.9% uptime, we provide a seamless, secure, 
            and exciting betting experience. Our platform offers real-time odds, instant 
            payouts, and 24/7 customer support.
          </p>

          {/* Stats/Features Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Award size={14} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Award Winning</p>
                <p className="text-xs text-gray-500">Best Betting Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                <Users size={14} className="text-cyan-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">50K+ Users</p>
                <p className="text-xs text-gray-500">Active Worldwide</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle size={14} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Secure & Safe</p>
                <p className="text-xs text-gray-500">Bank-grade Encryption</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <TrendingUp size={14} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Best Odds</p>
                <p className="text-xs text-gray-500">High Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
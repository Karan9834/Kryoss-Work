import React from 'react';
import { Play, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  const handleLiveDemo = () => {
    window.open("https://preview.codecanyon.net/item/betpro-flutter-sports-betting-app-with-admin-panel/full_screen_preview/47008071", "_blank");
  };

  return (
    <section className="relative w-full py-16 md:py-20 flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/20 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-0 w-[250px] h-[250px] bg-amber-300/20 blur-[80px] rounded-full"></div>
      </div>

      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='%23f59e0b' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 text-orange-600 px-4 py-2 rounded-full mb-5 text-sm font-semibold">
            <Zap size={14} className="fill-orange-500" />
            <span>BetPro • Premium Betting Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-gray-900">Bet Smarter With</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              BetPro
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-xl">
            Experience the future of online betting with real-time odds, secure payments, 
            and lightning-fast payouts. Join thousands of satisfied users worldwide.
          </p>

          {/* Stats */}
          <div className="mt-6 flex gap-6">
            <div>
              <p className="text-xl font-bold text-orange-600">50K+</p>
              <p className="text-xs text-gray-500">Active Users</p>
            </div>
            <div>
              <p className="text-xl font-bold text-orange-600">99.9%</p>
              <p className="text-xs text-gray-500">Payout Rate</p>
            </div>
            <div>
              <p className="text-xl font-bold text-orange-600">24/7</p>
              <p className="text-xs text-gray-500">Support</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleLiveDemo}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md shadow-orange-500/20 hover:scale-105 transition-all duration-300"
            >
              <Play size={16} /> Live Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-yellow-500/20 blur-2xl rounded-full"></div>

          {/* Decorative circles */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/30 rounded-full blur-xl"></div>

          {/* Corner elements */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-l-3 border-t-3 border-orange-400 rounded-tl-xl"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-3 border-b-3 border-yellow-400 rounded-br-xl"></div>

          <img
            src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600"
            alt="BetPro Platform"
            className="relative w-full max-w-md rounded-xl shadow-xl border border-orange-300/40 hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
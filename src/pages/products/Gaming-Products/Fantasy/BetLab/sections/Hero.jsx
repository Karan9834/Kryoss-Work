import React from 'react';
import { Play, ArrowRight, Trophy, Zap, Shield, MessageCircle } from "lucide-react";
import betlab from "../../../../../../assets/Betting apps/Betlab/1,.jpg"


const Hero = () => {
  const handleLiveDemo = () => {
    window.open("https://preview.codecanyon.net/item/betlab-sports-betting-platform/full_screen_preview/36256044", "_blank");
  };

  return (
    <section className="relative w-full py-16 md:py-20 flex items-center overflow-hidden">
      {/* Background - Dark like 1xBet */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0f0f1a]"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='%23ffd700' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-[90px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold">
            <Zap size={12} className="fill-blue-400" />
            <span>Official Betting Partner</span>
          </div>

          {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Bet Smarter With</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BetPro
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl">
            Experience the future of online betting with real-time odds, secure payments, 
            and lightning-fast payouts. Join thousands of satisfied users worldwide.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleLiveDemo}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 hover:scale-105 transition-all duration-300 text-sm"
            >
              <Play size={16} /> Live Demo
            </button>
            <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
              <MessageCircle size={18} />
              Let's Discuss
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap gap-4 text-gray-500 text-[11px]">
            <div className="flex items-center gap-1">
              <Shield size={11} className="text-blue-500" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy size={11} className="text-blue-500" />
              <span>Best Odds</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap size={11} className="text-blue-500" />
              <span>Instant Withdrawals</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center flex-wrap gap-4">
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-600/30 blur-2xl rounded-full"></div>
          
          {/* Decorative corner elements */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-l-3 border-t-3 border-blue-500 rounded-tl-xl"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-3 border-b-3 border-cyan-500 rounded-br-xl"></div>

          <img
            src={betlab}
            alt="BetPro Platform"
            className="relative w-full max-w-md rounded-xl shadow-2xl border border-blue-500/30 hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import { ArrowRight, Play, Sparkles, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open("https://preview.codecanyon.net/item/betpro-flutter-sports-betting-app-with-admin-panel/full_screen_preview/47008071", "_blank");
  };

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full mb-6 text-sm font-semibold">
          <Sparkles size={14} className="fill-white" />
          <span>Ready to Get Started?</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Launch Your{" "}
          <span className="text-yellow-300">Betting Platform</span>
        </h2>

        {/* Description */}
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Join 200+ successful operators already using BetPro. Get started today and launch your platform in under 2 weeks.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleLiveDemo}
            className="flex items-center gap-2 px-8 py-3.5 bg-white text-orange-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Play size={18} /> Live Demo
          </button>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/60 text-xs">
          <span>✓ No Hidden Fees</span>
          <span>✓ 24/7 Support</span>
          <span>✓ 14-Day Free Trial</span>
          <span>✓ Cancel Anytime</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
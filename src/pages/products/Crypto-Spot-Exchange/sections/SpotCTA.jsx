import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const SpotCTA = () => {
  return (
    <section className="py-24 bg-[#0A0B14] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
          Ready to Launch Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Next-Gen Spot Exchange?</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Get the institutional-grade infrastructure you need to compete with the industry giants. Secure, scalable, and ready for deployment.
        </p>

        <div className="flex justify-center pt-4 flex-wrap gap-4">
          <a
            href="https://preview.codecanyon.net/item/localcoins-ultimate-peer-to-peer-crypto-exchange-platform/full_screen_preview/34781557"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-500/20 hover:scale-105 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-3 group"
          >
            Try Live Demo
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
        </div>
      </div>
    </section>
  );
};

export default SpotCTA;

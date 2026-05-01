import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const RestoCTA = () => {
  return (
    <section className="py-24 bg-indigo-950 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-10">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
          Ready to Transform Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Hospitality Management?</span>
        </h2>

        <p className="text-indigo-100/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
          Join thousands of successful restaurateurs who have automated their operations and increased their revenue with our POS.
        </p>

        <div className="flex justify-center pt-4 flex-wrap gap-4">
          <a
            href="https://preview.codecanyon.net/item/pos-saas-addon-for-salepro-multitenant-inventory-billing-module/full_screen_preview/58373948"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black rounded-3xl shadow-2xl shadow-emerald-500/20 hover:scale-105 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-4 group uppercase tracking-widest text-sm"
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

export default RestoCTA;

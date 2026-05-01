import React from "react";
import { ArrowRight, Activity, MessageCircle } from "lucide-react";

const KiviCareCTA = () => {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-sky-900"
            style={{ background: "linear-gradient(135deg, #075985 0%, #082f49 100%)" }}>

            {/* background decoration icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
                <div className="absolute top-0 left-0 sm:top-10 sm:left-10 text-white rotate-12 -translate-x-12 -translate-y-12 sm:translate-x-0 sm:translate-y-0"><Activity size={120} className="sm:w-[180px] sm:h-[180px]" /></div>
                <div className="absolute bottom-0 right-0 sm:bottom-10 sm:right-10 text-teal-600 -rotate-12 translate-x-12 translate-y-12 sm:translate-x-0 sm:translate-y-0"><Activity size={120} className="sm:w-[180px] sm:h-[180px]" /></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8 sm:space-y-10">
                <div className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-sky-800 text-teal-300 font-bold text-[10px] sm:text-sm uppercase tracking-widest shadow-2xl border border-sky-700">
                    Clinical Excellence starts here
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                    Upgrade Your Hospital{" "}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #0284c7, #10b981)" }}>
                        to Clinical Standards.
                    </span>
                </h2>
                <p className="text-sky-100 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-bold tracking-tight px-4">
                    Join the most advanced medical facilities in redefining medication management. Seamless, secure, and clinical-grade.
                </p>
                <div className="pt-4 sm:pt-6">
                    <a
                        href="https://preview.codecanyon.net/item/kivicare-tm-pharma-addon-pharmacy-inventory-management-in-laravel/full_screen_preview/60994895"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 sm:gap-4 px-8 py-4 sm:px-12 sm:py-6 rounded-full font-black text-white text-lg sm:text-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        style={{ background: "linear-gradient(90deg, #0284c7, #10b981)", boxShadow: "0 15px 45px rgba(2,132,199,0.3)" }}
                    >
                        Live Demo
                        <ArrowRight size={22} className="sm:w-[26px] sm:h-[26px]" />
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

export default KiviCareCTA;

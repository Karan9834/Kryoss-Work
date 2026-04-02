import React from "react";
import { ArrowRight, Activity } from "lucide-react";

const MultistoreERPCTA = () => {
    const demoUrl = "https://preview.codecanyon.net/item/invoice-os-invoice-management-software-with-email-accounting-inventory-store-functionality/full_screen_preview/42021434";

    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #312e81 0%, #111827 100%)" }}>

            {/* background decoration icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
                <div className="absolute top-0 left-0 sm:top-10 sm:left-10 text-teal-600 rotate-12 -translate-x-12 -translate-y-12 sm:translate-x-0 sm:translate-y-0"><Activity size={120} className="sm:w-[180px] sm:h-[180px]" /></div>
                <div className="absolute bottom-0 right-0 sm:bottom-10 sm:right-10 text-indigo-600 -rotate-12 translate-x-12 translate-y-12 sm:translate-x-0 sm:translate-y-0"><Activity size={120} className="sm:w-[180px] sm:h-[180px]" /></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8 sm:space-y-10">
                <div className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-indigo-800/50 text-teal-300 font-black text-[10px] sm:text-sm uppercase tracking-[0.25em] shadow-inner border border-indigo-700">
                    Join the Retail Evolution
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                    Transform Your Enterprise{" "}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #5eead4, #818cf8)" }}>
                        with Next-Gen Tech.
                    </span>
                </h2>
                <p className="text-teal-100/70 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-bold tracking-tight px-4">
                    Experience the future of multi-store retail management today. Fast, secure, and built for scale.
                </p>
                <div className="pt-4 sm:pt-6">
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 sm:gap-4 px-8 py-4 sm:px-12 sm:py-6 rounded-full font-black text-white text-lg sm:text-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl shadow-indigo-900/50"
                        style={{ background: "linear-gradient(90deg, #0d9488, #4338ca)" }}
                    >
                        Try Live Demo
                        <ArrowRight size={22} className="sm:w-[26px] sm:h-[26px]" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MultistoreERPCTA;

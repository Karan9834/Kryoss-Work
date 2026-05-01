import React from "react";
import { ArrowRight, Activity, MessageCircle } from "lucide-react";

const AcadifyEduERPCTA = () => {
    const demoUrl = "https://preview.codecanyon.net/item/acadify-edu-the-education-management-system-student-app-only/full_screen_preview/60513357";

    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" }}>

            {/* background decoration icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
                <div className="absolute top-0 left-0 sm:top-10 sm:left-10 text-blue-600 rotate-12 -translate-x-12 -translate-y-12 sm:translate-x-0 sm:translate-y-0"><Activity size={120} className="sm:w-[180px] sm:h-[180px]" /></div>
                <div className="absolute bottom-0 right-0 sm:bottom-10 sm:right-10 text-indigo-600 -rotate-12 translate-x-12 translate-y-12 sm:translate-x-0 sm:translate-y-0"><Activity size={120} className="sm:w-[180px] sm:h-[180px]" /></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8 sm:space-y-10">
                <div className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-blue-800/50 text-blue-300 font-black text-[10px] sm:text-sm uppercase tracking-[0.25em] shadow-inner border border-blue-700">
                    Join the Digital Evolution
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                    Transform Your Institution{" "}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #818cf8)" }}>
                        with Next-Gen Tech.
                    </span>
                </h2>
                <p className="text-blue-100/70 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-bold tracking-tight px-4">
                    Experience the future of education management today. Fast, secure, and built for scale.
                </p>
                <div className="pt-4 sm:pt-6">
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 sm:gap-4 px-8 py-4 sm:px-12 sm:py-6 rounded-full font-black text-white text-lg sm:text-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl shadow-blue-900/50"
                        style={{ background: "linear-gradient(90deg, #2563eb, #4f46e5)" }}
                    >
                        Try Live Demo
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

export default AcadifyEduERPCTA;

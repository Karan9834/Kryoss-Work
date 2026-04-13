import { MessageCircle } from "lucide-react";
import React from 'react';
import heroImg from "@/assets/bdtaskhms-img/bdtaskhmshero.webp";

const BdTaskHMSHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 overflow-hidden pt-32 pb-24 lg:pt-30 lg:pb-32">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/30 text-fuchsia-300 font-semibold tracking-wide text-sm mb-6 uppercase">
                            Agile Clinical Software
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                            Streamline Your <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
                                Clinic Operations
                            </span>
                        </h1>

                        <p className="text-purple-200/90 text-lg md:text-xl mb-10 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                            BdTask HMS is the lightweight, scalable, and intuitive management solution built specifically for independent clinics, diagnostic centers, and outpatient networks.
                        </p>

                        <div>
                            <a
                                href="https://preview.codecanyon.net/item/hospital-hospital-management-system-with-website/full_screen_preview/18955750"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-lg font-bold text-lg transition shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)] hover:-translate-y-1"
                            >
                                Live Demo
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center flex-wrap gap-4">
                        <div className="w-full max-w-md aspect-square rounded-[2rem] bg-indigo-900/50 border border-purple-500/30 backdrop-blur-sm shadow-2xl relative overflow-hidden group p-2">
                            <img src={heroImg} alt="BdTask HMS Dashboard" className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BdTaskHMSHero;

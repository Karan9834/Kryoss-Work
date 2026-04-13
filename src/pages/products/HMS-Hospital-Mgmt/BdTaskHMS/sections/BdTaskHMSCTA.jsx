import { MessageCircle } from "lucide-react";
import React from 'react';

const BdTaskHMSCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-fuchsia-900 border-t border-fuchsia-800 text-center text-white">
            <div className="absolute inset-0 top-0 left-0 right-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800 via-fuchsia-900 to-indigo-950 -z-10"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                    Start Managing Your Clinic <br className="hidden md:block" />
                    <span className="text-fuchsia-300">The Agile Way</span>
                </h2>
                <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
                    Take BdTask HMS for a spin. See how quickly you can register a patient and generate your first detailed medical report.
                </p>

                <a
                    href="https://preview.codecanyon.net/item/hospital-hospital-management-system-with-website/full_screen_preview/18955750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-white text-fuchsia-700 hover:bg-fuchsia-50 hover:scale-105 rounded-xl font-black text-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                >
                    Live Demo
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
            </div>
        </section>
    );
};

export default BdTaskHMSCTA;

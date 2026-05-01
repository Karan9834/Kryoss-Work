import { MessageCircle } from "lucide-react";
import React from 'react';

const SmartHMSCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-teal-800 via-cyan-900 to-indigo-900 text-white text-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
                    Ready to digitize your <span className="text-teal-400">Hospital Operations?</span>
                </h2>
                <p className="text-xl text-cyan-100/80 mb-12 font-sans font-light">
                    Join hundreds of multi-specialty hospitals around the world running on Smart HMS. Experience the platform first-hand.
                </p>

                <a
                    href="https://preview.codecanyon.net/item/smart-hospital-hospital-management-system/full_screen_preview/23205038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-400 hover:to-teal-400 rounded-xl font-bold text-white text-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1 flex-wrap gap-4"
                >
                    Live Demo
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

export default SmartHMSCTA;

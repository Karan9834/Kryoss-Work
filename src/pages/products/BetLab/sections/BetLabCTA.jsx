import React from "react";
import { MessageCircle } from "lucide-react";

const BetLabCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#047857] to-[#0f766e] text-white relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Start Handling High-Volume Bettors Today
                </h2>

                {/* Description */}
                <p className="text-emerald-100 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                    Generate flawless match bets, control odd algorithms, host live scores, and manage sports lines
                    smoothly using our BetLab engine.
                    Bypass intensive coding, eliminate third-party hassles, and focus purely
                    on maximizing your total bet revenue immediately.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        href="https://preview.codecanyon.net/item/betlab-sports-betting-platform/full_screen_preview/36256044"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-emerald-800 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition duration-300 shadow-lg"
                    >
                        Try Live Demo
                    </a>
                    <a
                        href="/company/contact"
                        className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition duration-300"
                    >
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
                </div>

            </div>

            {/* Background Glow Effects */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-400 opacity-20 blur-3xl rounded-full"></div>

        </section>
    );
};

export default BetLabCTA;

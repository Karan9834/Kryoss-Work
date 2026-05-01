import { MessageCircle } from "lucide-react";
import React from "react";

const HyipInvestProCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Start Launching Financial Investment Pools Today
                </h2>

                {/* Description */}
                <p className="text-blue-100 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                    Generate flawless return pools, control commission algorithms, host thousands of transactions, and manage user escrow accounts
                    smoothly using our InvestPro engine. Bypass intensive manual accounting, empower your investor community, and focus purely
                    on maximizing your total platform volume instantly.
                </p>

                {/* CTA Button */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        href="https://preview.codecanyon.net/item/hyippro-a-modern-hyip-investmet-platform/full_screen_preview/35293972"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg"
                    >
                        Try Live Demo
                    </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
                </div>

            </div>

            {/* Background Glow Effects */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

        </section>
    );
};

export default HyipInvestProCTA;

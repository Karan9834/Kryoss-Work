import React from "react";

const BetYourDuckCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#047857] to-[#0f766e] text-white relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Start Launching Betting Exchanges Today
                </h2>

                {/* Description */}
                <p className="text-emerald-100 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                    Generate flawless match pools, control commission algorithms, host live chats, and manage escrow smart pools
                    smoothly using our BetYourDuck engine. Bypass intensive coding, empower your community, and focus purely
                    on maximizing your total bet spread instantly.
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                    <a
                        href="https://preview.codecanyon.net/item/bet-your-duck/full_screen_preview/55832766"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-emerald-800 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition duration-300 shadow-lg"
                    >
                        Try Live Demo
                    </a>
                </div>

            </div>

            {/* Background Glow Effects */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-400 opacity-20 blur-3xl rounded-full"></div>

        </section>
    );
};

export default BetYourDuckCTA;

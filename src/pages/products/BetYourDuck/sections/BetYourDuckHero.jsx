import React from "react";
import { Star, Users, TrendingUp, MessageCircle } from "lucide-react";
import hero from "../../../../assets/Fantasy sports/Betpro fantasy/1...jpg"

const BetYourDuckHero = () => {
    return (
        <section className="py-28 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] text-white relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-emerald-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-teal-500 opacity-20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8 order-2 lg:order-1">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm w-fit">
                            {"</>"} Betting Exchange
                        </div>

                        {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            BetYourDuck <span className="text-emerald-300">Sports Betting</span> App
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
                            Deploy a full-fledged next-generation betting exchange where users bet directly
                            against each other. Manage liquidity, guarantee unmatched latency, and leverage
                            an incredibly robust matching engine.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://preview.codecanyon.net/item/bet-your-duck/full_screen_preview/55832766"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-teal-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
                            >
                                Live Demo
                            </a>
                            <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                                <MessageCircle size={18} />
                                Let's Discuss
                            </a>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end w-full lg:w-[526px] h-[501px] order-1 lg:order-2 ml-auto flex-wrap gap-4">

                        {/* Premium Badge - Removed as requested */}

                        <img
                            src={hero}
                            alt="BetYourDuck Platform"
                            className="w-full h-full rounded-3xl shadow-2xl object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BetYourDuckHero;
import React from "react";
import { Star, Users, TrendingUp } from "lucide-react";

const HyipInvestProHero = () => {
    return (
        <section className="py-28 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] text-white relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-sky-500 opacity-20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8 order-2 lg:order-1">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm w-fit">
                            {"</>"} Investment Platform
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Hyip InvestPro <span className="text-blue-300">Investment</span> System
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
                            Deploy a modern, highly secure HYIP investment platform designed to manage robust
                            financial operations, advanced interest distribution algorithms, and multi-currency
                            transactions confidently on a global scale.
                        </p>

                        {/* CTA */}
                        <div>
                            <a
                                href="https://preview.codecanyon.net/item/hyippro-a-modern-hyip-investmet-platform/full_screen_preview/35293972"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
                            >
                                Live Demo
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4">

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3">
                                <Star size={20} className="text-blue-300" />
                                <div>
                                    <p className="font-semibold">4.8</p>
                                    <p className="text-sm text-gray-300">Rating</p>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3">
                                <Users size={20} className="text-blue-300" />
                                <div>
                                    <p className="font-semibold">40k+</p>
                                    <p className="text-sm text-gray-300">Investors</p>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3">
                                <TrendingUp size={20} className="text-blue-300" />
                                <div>
                                    <p className="font-semibold">99.9%</p>
                                    <p className="text-sm text-gray-300">Uptime</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end w-full lg:w-[526px] h-[501px] order-1 lg:order-2 ml-auto">

                        {/* Premium Badge */}
                        <div className="absolute top-4 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-1 rounded-full z-10">
                            ✨ Enterprise
                        </div>

                        <img
                            src="/Products/Hyip.png"
                            alt="Hyip InvestPro Platform"
                            className="w-full h-full rounded-3xl shadow-2xl object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HyipInvestProHero;

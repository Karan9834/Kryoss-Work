import React from "react";
import { Star, Users, TrendingUp, MessageCircle, ArrowRight } from "lucide-react";

const RevPTCHero = () => {
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
                            {"</>"} Enterprise MLM
                        </div>

                        {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            revPTC <span className="text-blue-300">Software</span> Suite
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
                            Deploy a modern, highly secure multi-level marketing platform designed to manage robust
                            compensation plans including complex matrix, binary, and unilevel architectures.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://script.viserlab.com/revptc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
                            >
                                Live Demo
                            </a>
                            <a
                                href="/company/contact"
                                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition shadow-lg backdrop-blur-md"
                            >
                                <MessageCircle size={18} />
                                Let's Discuss
                                <ArrowRight size={18} />
                            </a>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end w-full lg:w-[526px] h-[501px] order-1 lg:order-2 ml-auto">

                        {/* Premium Badge - Removed as requested */}

                        <img
                            src="/Products/RevPtc.png"
                            alt="revPTC Platform"
                            className="w-full h-full rounded-3xl shadow-2xl object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default RevPTCHero;
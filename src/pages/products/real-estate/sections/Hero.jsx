import React from "react";
import { MessageCircle } from "lucide-react";
import realEstateHero from "@/assets/real-estate-img/realEstateHero.jpeg"
const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#0b2239] to-[#061726] text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sm px-4 py-2 rounded-full backdrop-blur w-fit">
                            <span className="text-blue-400">&lt;/&gt;</span>
                            Saas
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
                            Real Estate Agency
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                            Complete pipeline and client management for realtors.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://preview.codecanyon.net/item/real-estate-agency-portal/full_screen_preview/6539169"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-900 transition px-7 py-3 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 text-white"
                            >
                                👁 Live Demo
                            </a>
                            <a
                                href="/company/contact"
                                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3 rounded-lg font-medium shadow-lg hover:bg-white/20 transition backdrop-blur"
                            >
                                <MessageCircle size={18} />
                                Let's Discuss
                            </a>
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-3 gap-4 pt-6">

                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur">
                                <p className="text-2xl font-semibold">4.9</p>
                                <p className="text-gray-400 text-sm">Rating</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur">
                                <p className="text-2xl font-semibold">10k+</p>
                                <p className="text-gray-400 text-sm">Users</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur">
                                <p className="text-2xl font-semibold">99.9%</p>
                                <p className="text-gray-400 text-sm">Uptime</p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* glow */}
                        <div className="absolute w-[420px] h-[420px]  blur-[120px] rounded-full"></div>

                        {/* IMAGE PLACEHOLDER */}
                        <div className="relative w-full max-w-md h-[420px] rounded-2xl flex items-center justify-center text-gray-300">
                            <img
                                src={realEstateHero}
                                alt="Carpool App"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;
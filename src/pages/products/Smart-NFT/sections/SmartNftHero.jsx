import React from "react";
import { Star, Users, TrendingUp } from "lucide-react";

const SmartNftHero = () => {
    return (
        <section className="py-28 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] text-white relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative flex justify-center lg:justify-start w-full lg:w-[526px] h-[501px]">

                        {/* Premium Badge */}
                        <div className="absolute top-4 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-1 rounded-full z-10">
                            ✨ Premium
                        </div>

                        <img
                            src="/Products/Smart Hero.jpg"
                            alt="Smart NFT"
                            className="w-full h-full rounded-3xl shadow-2xl"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-8">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm w-fit">
                            {"</>"} Web3 Tools
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Smart NFT Marketplace <span className="text-purple-300">Creator</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
                            Generate your NFT marketplace instantly using advanced blockchain
                            technology. Create collections, mint tokens, list digital assets, and integrate smart contracts
                            in seconds with our intelligent platform.
                        </p>

                        {/* CTA */}
                        <div>
                            <a
                                href="https://preview.codecanyon.net/item/smart-nft-nft-marketplace-wordpress-plugin/full_screen_preview/39767244"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
                            >
                                Live Demo
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4">

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3">
                                <Star size={20} className="text-purple-300" />
                                <div>
                                    <p className="font-semibold">4.9</p>
                                    <p className="text-sm text-gray-300">Rating</p>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3">
                                <Users size={20} className="text-purple-300" />
                                <div>
                                    <p className="font-semibold">10k+</p>
                                    <p className="text-sm text-gray-300">Users</p>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3">
                                <TrendingUp size={20} className="text-purple-300" />
                                <div>
                                    <p className="font-semibold">99.9%</p>
                                    <p className="text-sm text-gray-300">Uptime</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SmartNftHero;

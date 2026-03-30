import React from "react";

const EneftiCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#312e81] to-[#6d28d9] text-white relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Start Building Web3 Game Economies Today
                </h2>

                {/* Description */}
                <p className="text-gray-200 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                    Generate leaderboards, secure assets, player profiles, and NFT interactions
                    instantly using our advanced GameFi infrastructure platform.
                    Save time, boost engagement, and scale your gaming network
                    effortlessly.
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                    <a
                        href="https://preview.codecanyon.net/item/enefti-nft-marketplace-core/full_screen_preview/37972199"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:bg-sky-200 transition duration-300 shadow-lg"
                    >
                        Try Live Demo
                    </a>
                </div>

            </div>

            {/* Background Glow Effects */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

        </section>
    );
};

export default EneftiCTA;

import React from "react";

const RevPTCCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Start Launching Global MLM Organizations
                </h2>

                {/* Description */}
                <p className="text-blue-100 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                    Generate flawless return pools, control exact commission structures, process thousands of affiliate nodes, and scale
                    smoothly using our revPTC engine. Bypass intensive logic programming, empower your promoters, and focus purely
                    on maximizing your brand's growth footprint today.
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                    <a
                        href="https://script.viserlab.com/revptc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg"
                    >
                        Try Live Demo
                    </a>
                </div>

            </div>

            {/* Background Glow Effects */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

        </section>
    );
};

export default RevPTCCTA;

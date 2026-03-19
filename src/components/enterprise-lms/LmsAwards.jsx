import React from 'react';
import trustpilot from "../../assets/transport-uber-img/trustpilot.webp";
import google from "../../assets/transport-uber-img/Google.webp";
import clutch from "../../assets/transport-uber-img/Clutch.webp";
import goodfirms from "../../assets/transport-uber-img/Goodfirms.webp";

const LmsAwards = () => {
    const awards = [
        { name: "Trustpilot", logo: trustpilot },
        { name: "Google", logo: google },
        { name: "Clutch", logo: clutch },
        { name: "GoodFirms", logo: goodfirms }
    ];

    return (
        <section className="bg-[#0f172a] py-20 px-4 relative overflow-hidden">
            {/* Radial Gradients for that premium feel */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-8 text-[13px] font-medium tracking-widest uppercase text-violet-300">
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
                    Awards & Recognition
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-[45px] leading-tight md:leading-[55px] font-semibold text-white mb-6 max-w-4xl mx-auto">
                    Trusted by Educational Leaders & Global Platforms
                </h2>

                {/* Description */}
                <p className="text-slate-400 text-sm md:text-[16px] leading-[26px] max-w-5xl mx-auto mb-16">
                    Our commitment to excellence in LMS development is recognized by top global review platforms. We take pride in delivering high-quality, scalable learning solutions that empower businesses and educators worldwide.
                </p>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="bg-white/95 backdrop-blur-sm rounded-[24px] p-8 flex flex-col items-center justify-center transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)] group min-h-[160px]"
                        >
                            {/* Logo */}
                            <div className="w-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <img
                                    src={award.logo}
                                    alt={award.name}
                                    className="max-h-20 w-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LmsAwards;

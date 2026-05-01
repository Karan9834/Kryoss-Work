import React from 'react';
import trustpilot from "../../assets/transport-uber-img/trustpilot.webp";
import google from "../../assets/transport-uber-img/Google.webp";
import clutch from "../../assets/transport-uber-img/Clutch.webp";
import goodfirms from "../../assets/transport-uber-img/Goodfirms.webp";

const Awards = () => {
    const awards = [
        { name: "Trustpilot", logo: trustpilot },
        { name: "Google", logo: google },
        { name: "Clutch", logo: clutch },
        { name: "GoodFirms", logo: goodfirms }
    ];

    return (
        <section className="bg-[#0a0a0a] py-20 px-4 relative overflow-hidden">
            {/* Background Pattern Elements - Abstract Mesh */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L1440 0L1440 800L0 800Z" fill="none" />
                    <path d="M-100 400L400 -100M1000 -100L1540 400M1540 400L1000 900M400 900L-100 400" stroke="white" strokeWidth="1" />
                    <path d="M200 100L1200 100L1200 700L200 700Z" stroke="white" strokeWidth="1" />
                    <circle cx="200" cy="100" r="2" fill="white" />
                    <circle cx="1200" cy="100" r="2" fill="white" />
                    <circle cx="1200" cy="700" r="2" fill="white" />
                    <circle cx="200" cy="700" r="2" fill="white" />
                    <line x1="0" y1="0" x2="1440" y2="800" stroke="white" strokeWidth="0.5" />
                    <line x1="1440" y1="0" x2="0" y2="800" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Radial Gradients for that premium feel */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                {/* Badge - Updated Typography */}
                <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-white/20 rounded-full px-5 py-1.5 mb-8 text-[12px] font-medium tracking-[0.05em] uppercase text-white">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    Awards & Recognition
                </div>

                {/* Title - Updated Typography */}
                <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white mb-6 max-w-4xl mx-auto">
                    Recognized by Global Review Platforms & Industry Leaders
                </h2>

                {/* Description - Updated Typography */}
                <p className="text-gray-400 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-5xl mx-auto mb-16">
                    We are proud to be recognized by top industry platforms such as Trustpilot, Google, Clutch, and GoodFirms. With excellent ratings and reviews, our commitment to delivering high-quality, clone app development solutions is trusted by businesses and users worldwide.
                </p>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[24px] p-8 flex flex-col items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] group min-h-[160px]"
                        >
                            {/* Logo */}
                            <div className="w-full flex items-center justify-center">
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

export default Awards;
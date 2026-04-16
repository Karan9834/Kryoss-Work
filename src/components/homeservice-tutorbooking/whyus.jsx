import React from "react";
import whyus from "../../assets/homeservice-tutor-img/whyus.webp";
const WhyUs = () => {
    return (
        <section className="bg-[#1a1110] py-8 lg:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                {/* BADGE */}
                <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        Core Advantages
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[34px] lg:text-[48px] font-bold text-white mb-6 leading-tight">
                    Why <span className="text-[#f5b301]">Vyom Tutor is the</span> Superior Launchpad for Your Venture?
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-white/70 text-[16px] lg:text-[18px] max-w-4xl mx-auto mb-20">
                    Our specialized tutoring framework provides the ideal foundation for 
                    establishing your education marketplace with maximum efficiency. 
                    Discover our unique benefits:
                </p>

                {/* INFOGRAPHIC IMAGE PLACEHOLDER */}
                <div className="w-full flex justify-center mb-24">

                    <img src={whyus}
                        alt="Why choose us"
                        className="w-full h-full object-contain" />

                </div>

                {/* BULLET POINTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                    {/* LEFT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Deploy your personalized instructor marketplace in just 5 business 
                                days, enabling you to begin educator coordination without the 
                                typical industry delays.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Adapt the framework to satisfy your precise commercial objectives, 
                                functional requirements, and brand identity for a truly distinct 
                                market presence.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Leverage a sophisticated user experience prioritized for effortless 
                                interaction, ensuring a high-fidelity journey for both learners 
                                and experts.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Our architecture is engineered for long-term scalability and 
                                incorporates enterprise-grade protection to optimize data 
                                integrity and platform stability.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Ensure your audience remains engaged through real-time push alerts 
                                for educational sessions, confirm appointments, and critical 
                                system updates.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Possess total operational oversight via a simplified administrative 
                                interface, allowing you to coordinate user activities and financial 
                                settlements from one hub.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyUs;

import React from "react";
import digital from "../../assets/homeservice-tutor-img/digital.webp"
const DigitalFootprints = () => {
    return (
        <section className="bg-[#1a1110]">
            {/* Rounded top */}
            <div className="rounded-t-[60px] overflow-hidden">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">

                    {/* LEFT : IMAGE */}
                    <div className="relative pt-0 lg:pt-0 px-6 lg:px-8 flex items-center justify-center">

                        {/* PLACEHOLDER FOR IMAGE (Man with laptop) */}
                        <img src={digital}
                            alt="digital footprints"
                            className="w-full max-w-[550px] rounded-xl object-cover" />

                    </div>

                    {/* RIGHT : CONTENT */}
                    <div className="flex flex-col justify-center  px-6 lg:px-16 pt-6 lg:pt-10 pb-20 lg:py-20 text-white">

                        {/* Chip */}
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 text-sm w-fit">
                                <span className="w-2 h-2 bg-white rounded-full" />
                                Secure Your Digital Presence
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-[44px] font-bold leading-[1.2] mb-8">
                            Activate your <span className="text-[#f5b301]">High-Performance</span> Tutor Platform in <span className="text-[#f5b301]">Days</span>
                        </h2>

                        {/* Text Content */}
                        <div className="space-y-6 text-white/80 text-[16px] leading-[1.6]">
                            <p>
                                Your specialized instructional ecosystem can be fully 
                                production-ready within a hyper-brief window, significantly 
                                outperforming traditional development timelines through our 
                                refined deployment strategy.
                            </p>

                            <p>
                                Compared to bespoke architectural initiatives that often consume 
                                months of engineering, our curated framework drastically reduces 
                                your time-to-market, enabling immediate educator coordination 
                                without operational friction.
                            </p>

                            <p>
                                By leveraging our modular architecture, you circumvent the 
                                complexities of ground-up development, securing an 
                                enterprise-grade learning platform that synchronizes 
                                participants effortlessly.
                            </p>

                            <p>
                                Our veteran-engineered tutoring framework is pre-loaded with every 
                                mission-critical module required for establishing a modern, 
                                extensible educational marketplace.
                            </p>

                            <p>
                                Eliminate the common frustrations of protracted coding and quality 
                                assurance cycles—allowing your team to prioritize commercial 
                                operations and market growth from the very first day.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DigitalFootprints;

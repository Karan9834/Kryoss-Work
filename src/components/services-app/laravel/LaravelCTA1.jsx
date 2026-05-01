import React from "react";
import ctaImg from "../../../assets/services-laravel-img/laravelcta1.webp";

const CTA1 = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0f766e] to-[#083344]">

                    <div className="grid lg:grid-cols-2 items-center gap-10 px-8 md:px-14 py-12">

                        {/* LEFT CONTENT */}
                        <div className="text-white order-1">

                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight mb-6">
                                Your Next Laravel Project Deserves a Team
                                <br />
                                That Actually Gets It Done
                            </h2>

                            <p className="text-white/90 text-[17px] leading-relaxed mb-8 max-w-xl">
                                40+ dedicated Laravel developers. 8+ years of experience.
                                200+ projects delivered. We are ready to plug into your
                                agency and start building from day one — under your brand,
                                on your timeline.
                            </p>

                            <button className="border border-white rounded-full px-7 py-3 font-medium hover:bg-white hover:text-[#0f766e] transition-all duration-300">
                                Talk to Our Expert
                            </button>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end order-2">

                            <img
                                src={ctaImg}
                                alt="Laravel Development"
                                className="w-full max-w-[480px] object-contain"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA1;
import React from "react";
import heroImg from "../../../assets/services-wordpress-img/wordpresshero.webp";

const Hero = () => {
    return (
        <section className="bg-[#021b2a] text-white py-24 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 items-center gap-14">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">

                            White Label WordPress Development
                            <span className="text-orange-400"> Services</span>

                            <br />

                            <span className="text-orange-400">
                                for B2B Partners
                            </span>

                        </h1>

                        <p className="text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                            Partner with White Label Fox and deliver world-class WordPress
                            websites fully under your brand. From custom theme development
                            and WooCommerce stores to Headless WordPress, we handle the
                            build while you own the relationship. 100% white label,
                            NDA-protected, and built to scale with your agency.
                        </p>

                        {/* CTA BUTTON */}
                        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 transition px-8 py-3 rounded-full font-semibold shadow-lg">

                            Start Your Project

                            <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                                →
                            </span>

                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={heroImg}
                            alt="WordPress Development"
                            className="max-w-full lg:max-w-[560px] object-contain"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;
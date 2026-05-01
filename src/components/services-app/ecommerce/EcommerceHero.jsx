import React from "react";
import heroImg from "../../../assets/services-ecommerce-img/ecommercehero.webp";

const EcommerceHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#050015] via-[#160028] to-[#2a003a]">

            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

                <div className="grid lg:grid-cols-2 items-center gap-12">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">

                        <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight text-white mb-6">
                            <span className="text-[#ff9f2d]">
                                White Label Ecommerce Development
                            </span>{" "}
                            for Agencies, Startups & Enterprises
                        </h1>

                        <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Launch your own fully branded ecommerce business with our scalable
                            white label ecommerce development services. We provide ready-made
                            and custom-built ecommerce websites that you can rebrand, manage,
                            and scale under your own identity. From design to deployment, our
                            solution helps you go live faster with full ownership and
                            long-term flexibility.
                        </p>

                        {/* CTA */}
                        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ffb347] to-[#ff7a18] text-white px-7 py-3 rounded-full font-semibold text-[16px] hover:scale-105 transition">
                            Get a Free Quote
                            <span className="text-lg">→</span>
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">

                        <div className="w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px]">
                            <img
                                src={heroImg}
                                alt="Ecommerce Development"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default EcommerceHero;
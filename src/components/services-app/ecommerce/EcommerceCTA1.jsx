import React from "react";
import ctaImg from "../../../assets/services-ecommerce-img/ecommercecta1.webp";

const EcommerceCTA1 = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* CTA Container */}
                <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#ff7a18] via-[#a02a5e] to-[#5c0f8b]">

                    <div className="grid lg:grid-cols-2 items-center">

                        {/* LEFT IMAGE */}
                        <div className="order-1 lg:order-none flex justify-center lg:justify-start">
                            <img
                                src={ctaImg}
                                alt="Ecommerce Platform"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="order-2 lg:order-none px-8 md:px-12 py-12 text-white text-center lg:text-left">

                            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
                                Ready to Launch Your White Label
                                Ecommerce Platform?
                            </h2>

                            <p className="text-white/90 text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                Start your white label ecommerce development with a scalable,
                                fully branded solution built for long-term growth and
                                profitability.
                            </p>

                            <button className="border border-white rounded-full px-8 py-3 text-[16px] font-semibold hover:bg-white hover:text-[#7a1c6b] transition">
                                Schedule a Free Strategy Call
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default EcommerceCTA1;
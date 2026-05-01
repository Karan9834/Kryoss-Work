import React from "react";
import cta2img from "../../../assets/services-ecommerce-img/ecommercecta2.webp";

const EcommerceCTA2 = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* CTA Container */}
                <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#3b0d33] via-[#7c002c] to-[#b3002d]">

                    <div className="grid lg:grid-cols-2 items-center gap-10 px-8 md:px-12 py-12 lg:py-14">

                        {/* LEFT CONTENT */}
                        <div className="text-white text-center lg:text-left order-1">

                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold leading-snug mb-6">
                                Build Your White Label Ecommerce
                                Solution Today
                            </h2>

                            <p className="text-white/90 text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                Launch a scalable, fully branded white label ecommerce platform
                                designed to help you grow faster, increase margins, and compete
                                globally.
                            </p>

                            <button className="border border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-[#7c002c] transition">
                                Request a Free Demo
                            </button>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end order-2">

                            <div className="w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px]">
                                <img
                                    src={cta2img}
                                    alt="White Label Ecommerce"
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default EcommerceCTA2;
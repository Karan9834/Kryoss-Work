import React from "react";
import kotlincta1img from "../../../assets/services-kotlin-img/kotlincta1.webp";
const CtaOne = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="relative bg-gradient-to-r from-[#7a001f] to-[#b3002d] rounded-[60px]  ">

                    <div className="grid lg:grid-cols-2 items-center gap-10">

                        {/* IMAGE SIDE */}
                        <div className="relative order-1 lg:order-none">

                            {/* IMAGE */}
                            <div className="relative -mt-20 lg:-ml-10">

                                <div className="w-full h-[520px]  flex items-center justify-center">
                                    <img src={kotlincta1img}
                                        alt="kotlin cta "
                                        className="w-full h-full object-contain overflow-visible"
                                    />
                                </div>

                            </div>

                        </div>


                        {/* TEXT SIDE */}
                        <div className="text-white px-8 py-10 lg:pr-20 order-2">

                            <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
                                Ready to Launch Your White Label Kotlin App
                                Development Solutions?
                            </h2>

                            <p className="mt-6 text-white/90 leading-relaxed max-w-lg">
                                Take full control of your brand with a market-ready platform
                                delivered in just a few weeks. Contact us today to secure your
                                100% source code ownership and a future-proof mobile solution.
                            </p>

                            <button className="mt-8 border border-white px-7 py-3 rounded-full font-medium hover:bg-white hover:text-red-700 transition">
                                Schedule a Call
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CtaOne;
import React from "react";
import kotlincta2img from "../../../assets/services-kotlin-img/kotlincta2.webp";
const CTA2 = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-[1400px] mx-auto px-6">

                <div className="bg-[#0c4a4a] rounded-[40px] overflow-hidden">

                    <div className="grid md:grid-cols-2 items-center">

                        {/* IMAGE */}
                        <div className="relative order-1 md:order-none">

                            <div className="h-[320px] md:h-[420px] flex items-end justify-center">

                                {/* IMAGE PLACEHOLDER */}
                                <div className="w-[330px] h-[230px] md:w-[550px] md:h-[380px]   flex items-center justify-center text-white">
                                    <img src={kotlincta2img}
                                        alt="kotlin cta "
                                        className="w-full h-full object-contain overflow-visible"
                                    />
                                </div>

                            </div>

                        </div>

                        {/* TEXT SIDE */}
                        <div className="px-8 md:px-16 lg:pr-24 py-12 text-white">

                            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                                Partner with the Leading White Label Kotlin App Development Company
                            </h2>

                            <p className="text-white/80 mb-8 leading-relaxed max-w-lg">
                                Secure 100% ownership of your platform and launch a market-ready
                                solution in just a few weeks. Let our experts build your
                                future-proof business engine with 1-year of dedicated support included.
                            </p>

                            <button className="border border-white rounded-full px-8 py-3 hover:bg-white hover:text-[#0c4a4a] transition">
                                Talk to Our Experts
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};
export default CTA2;
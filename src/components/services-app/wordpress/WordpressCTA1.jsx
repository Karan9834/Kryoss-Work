import React from "react";
import ctaImg from "../../../assets/services-wordpress-img/wordpresscta1.webp";

const CTA1 = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* purple container */}
                <div className="relative bg-gradient-to-r from-[#3f1d6b] to-[#7b3bd2] rounded-[60px] px-10 md:px-16 py-14 lg:py-20 overflow-visible">

                    <div className="grid lg:grid-cols-2 items-center gap-12">

                        {/* LEFT TEXT */}
                        <div className="text-center lg:text-left z-10">

                            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug mb-6">

                                Scale Your WordPress Projects
                                <br />

                                Without Hiring In-House

                            </h2>

                            <p className="text-white/90 max-w-lg mx-auto lg:mx-0 mb-8">

                                Partner with White Label Fox as your dedicated WordPress
                                development team. We deliver under your brand, meet your
                                deadlines, and protect your client relationships every
                                single time.

                            </p>

                            {/* CTA */}
                            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#5b2ca4] transition">

                                Get a Free Quote

                            </button>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex justify-center lg:justify-end">

                            <img
                                src={ctaImg}
                                alt="WordPress Developer"
                                className="w-[450px] md:w-[520px] lg:w-[720px] object-contain lg:absolute lg:-right-10 lg:-top-44"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTA1;
import React from "react";
import cta3 from "../../assets/homeservice-tutor-img/cta3.webp";
const CTA3 = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#7b1fa2] via-[#6a1b9a] to-[#2d0036]">

                    {/* CONTENT */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">

                        {/* LEFT TEXT */}
                        <div className="px-8 py-10 md:px-14 md:py-14 text-white text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight max-w-[550px] mx-auto lg:mx-0">
                                Take the First Step Toward Launching Your Tutor App
                            </h2>

                            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-white/90 leading-relaxed text-sm md:text-base">
                                Ready to start your own on-demand tutoring business? With White
                                Label Fox, you can quickly launch a fully functional,
                                customizable Uber for Tutor app.
                            </p>

                            <div className="mt-8">
                                <button className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-white font-semibold hover:bg-white hover:text-[#6a1b9a] transition-all duration-300">
                                    Start Your App Today
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 lg:self-end">

                            {/* Main Image */}
                            <img
                                src={cta3}
                                alt="Tutor App CTA"
                                className="
                                    relative z-10
                                    w-full
                                    max-w-[260px]
                                    md:max-w-[320px]
                                    lg:max-w-[420px]
                                    object-contain
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA3;
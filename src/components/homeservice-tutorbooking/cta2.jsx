import React from "react";
import cta2 from "../../assets/homeservice-tutor-img/tutorcta2.webp";


const CTA2 = () => {
    return (
        <section className="w-full bg-white pt-24 pb-12 sm:pt-32 sm:pb-20">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* 
                   The blue box container. We remove overflow-hidden to let parts of the 
                   image/shapes stick out of the top and bottom.
                */}
                <div className="relative rounded-[48px] bg-[#4f7fdc] px-8 py-12 md:px-20 md:py-24 flex flex-col md:block items-center md:items-start overflow-visible">

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col items-center md:items-start lg:flex-row w-full">
                        <div className="max-w-[650px] text-center md:text-left">
                            <h2 className="text-[28px] font-bold text-white sm:text-[40px] lg:text-[45px] leading-[1.15]">
                                Initiate Your Specialized Instruction <br className="hidden sm:block" /> Venture Immediately!
                            </h2>

                            <p className="mt-6 text-white/90 text-[15px] sm:text-[18px] leading-relaxed max-w-[550px]">
                                Prepared to transform the landscape of modern education? Secure your 
                                personalized instructional platform today and bridge the gap between 
                                learners and elite educators.
                            </p>

                            <div className="mt-8">
                                <button className="inline-flex items-center justify-center rounded-full border-2 border-white px-10 py-3 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#4f7fdc] hover:shadow-xl">
                                    Acquire Your Platform
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE - Relative on mobile (below button), Absolute on Desktop (side pop-out) */}
                    <div className="pointer-events-none md:absolute relative right-0 md:top-1/2 z-20 w-full max-w-[320px] md:-translate-y-1/2 md:max-w-[480px] lg:max-w-[620px] mt-10 md:mt-0 flex justify-center md:justify-end">
                        <img
                            src={cta2}
                            alt="Tutor"
                            className="
                                relative
                                w-full
                                h-auto
                                object-contain
                                md:-mt-44
                                md:mb-[-150px]
                                mb-[-60px]
                                scale-100
                                md:scale-105
                                origin-bottom
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA2;
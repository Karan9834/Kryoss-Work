import React from "react";
import androidcta2img from "../../../assets/services-android-img/androidcta2.webp";

const CTA2 = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative flex flex-col lg:flex-row min-h-[420px] rounded-[40px] lg:rounded-l-[250px] overflow-hidden">

                    {/* LEFT SIDE - TEAL CONTENT */}
                    <div
                        className="flex-1 lg:flex-[1.8] p-10 lg:pl-32 lg:pr-10 flex flex-col justify-center text-white relative z-10"
                        style={{ background: "#008a94" }}
                    >
                        <h2 className="text-3xl lg:text-[42px] font-bold mb-6 leading-tight">
                            Start Your White Label Android App <br className="hidden xl:block" />
                            Development Today
                        </h2>

                        <p className="text-white/90 mb-8 text-[17px] max-w-lg">
                            Launch high-performance Android solutions with our proven
                            White Label Android App Development Service.
                        </p>

                        <button className="w-fit border-2 border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-[#008a94] transition-all duration-300">
                            Start App Now
                        </button>
                    </div>

                    {/* RIGHT SIDE - DARK SECTION */}
                    <div
                        className="flex-1 lg:flex-[1.2] relative min-h-[350px] lg:min-h-full flex items-end justify-end"
                        style={{ background: "#008a94" }}
                    >
                        {/* Image Mockup - Arch is part of the image asset */}
                        <div className="relative z-10 w-full h-full flex items-end justify-end">
                            <img
                                src={androidcta2img}
                                alt="Android Development Mockup"
                                className="w-full max-w-none lg:w-[130%] h-auto object-contain lg:mb-[-2px] lg:mr-[-5%] origin-bottom-right "
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA2;
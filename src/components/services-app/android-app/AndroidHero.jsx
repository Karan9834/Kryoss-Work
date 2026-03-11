import React from "react";
import androidheroimg from "../../../assets/services-android-img/androidhero.webp";

const HeroSection = () => {
    return (
        <section 
            className="relative overflow-hidden bg-[#011e11] text-white"
            style={{ 
                background: "radial-gradient(circle at 80% 50%, #0c422c 0%, #011e11 100%)"
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 items-center gap-16">

                    {/* LEFT CONTENT */}
                    <div className="relative z-10">
                        <h1 className="text-4xl lg:text-[54px] font-bold leading-[1.15] mb-8">
                            <span className="text-orange-400">
                                White Label Android App Development
                            </span>{" "}
                            That <br className="hidden lg:block" />
                            Launches Your Business Faster
                        </h1>

                        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
                            As a leading White Label Android App Development Agency, we
                            deliver secure, scalable Android applications designed to
                            increase user engagement and business performance. Our White
                            Label Android App Development Service ensures faster launches
                            with long-term success in mind.
                        </p>

                        {/* CTA BUTTON */}
                        <div className="flex flex-wrap gap-5">
                            <button className="flex items-center gap-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-orange-500/30">
                                Contact Us
                                <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative z-10 w-full max-w-[550px]">
                            <img src={androidheroimg}
                                alt="Android app development mockup"
                                className="w-full h-auto object-contain scale-110 lg:scale-125 transition-transform duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;

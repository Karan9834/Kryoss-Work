import React from "react";
import Snowcta2 from "../../assets/homeservice-snow-img/Snowcta2.webp";

const SnowCTA2 = () => {
    return (
        <section className="py-24 bg-[#f5f5f5]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="relative overflow-visible rounded-[60px] bg-gradient-to-r from-[#8f1b06] to-[#8b0000] px-10 py-20">

                    <div className="grid lg:grid-cols-2 items-center gap-10">

                        {/* LEFT CONTENT */}
                        <div className="text-white">

                            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                                Get Started with Your Snow Plow Business Today!
                            </h2>

                            <p className="text-lg text-white/90 max-w-xl mb-8">
                                Revolutionize your snow removal services! Launch your Uber Snow
                                Plow App in 5 days. Book your demo now and get started!
                            </p>

                            <button className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-red-700 transition">
                                Start Your Journey Now!
                            </button>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex justify-center lg:justify-end">

                            <img
                                src={Snowcta2}
                                alt="snow app"
                                className="relative lg:absolute lg:-right-10 lg:-top-65 max-w-[520px] w-full object-contain"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};
export default SnowCTA2;
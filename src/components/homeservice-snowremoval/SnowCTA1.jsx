import React from "react";
import Snowcta1 from "../../assets/homeservice-snow-img/Snowcta1.webp";

const SnowCTA1 = () => {
    return (
        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* CTA Container */}
                <div className="relative overflow-visible rounded-[40px] bg-gradient-to-r from-[#5a0ea8] to-[#7b1fa2] px-10 py-20">

                    <div className="grid lg:grid-cols-2 items-center gap-10">

                        {/* LEFT IMAGE */}
                        <div className="relative flex justify-center lg:justify-start">

                            <img
                                src={Snowcta1}
                                alt="snow plow"
                                className="relative lg:absolute lg:-left-10 lg:-bottom-60 max-w-[520px] w-full object-contain"
                            />

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="text-white">

                            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                                Ready to Launch Your Snow Plow App?
                            </h2>

                            <p className="text-lg text-white/90 mb-8 max-w-xl">
                                Get your Uber Snow Plow Service App Solution live on Android,
                                iOS, and the web within just 5 days. Experience our live demo
                                today and take the first step towards boosting your snow
                                removal business!
                            </p>

                            <button className="border border-white rounded-full px-8 py-4 text-lg font-medium hover:bg-white hover:text-purple-700 transition">
                                Schedule a Demo Now!
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SnowCTA1;
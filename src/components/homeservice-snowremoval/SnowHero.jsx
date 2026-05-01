import React from "react";
import Snowhero from "../../assets/homeservice-snow-img/Snowhero.webp";

const SnowHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] bg-gradient-to-r from-[#cfe3f2] via-[#dbeaf5] to-[#e7f1f8] overflow-hidden">

            {/* background */}
            {/* <div className="absolute inset-0 pointer-events-none"></div> */}

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[50%] text-white pb-12 mt-20 lg:pb-20 lg:pr-10">

                    <div className="flex items-center gap-4 mb-6">

                        {/* Icon */}
                        <div className="bg-gradient-to-br from-[#49c5d4] to-[#2f8ccf] 
      p-4 rounded-xl text-white text-2xl
      shadow-[0_0_18px_rgba(47,140,207,0.85)]">

                            <span className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                                ❄️
                            </span>

                        </div>

                        {/* Brand */}
                        <h4 className="text-3xl font-bold tracking-wide uppercase">

                            <span className="text-[#2f8ccf] 
            drop-shadow-[0_0_8px_rgba(47,140,207,0.9)]">
                                VYOM
                            </span>

                            <span className="text-gray-800 ml-2">
                                SNOW
                            </span>

                        </h4>

                    </div>

                    <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 leading-tight">

                        <span className="text-[#2f8ccf]">Uber Snow Plow</span>{" "}
                        Service App Solution

                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-xl">
                        We deliver powerful on-demand snow plows clone script
                        applications for Android & iOS. Remove snow with our
                        Uber snow plow service app solution.
                    </p>


                    {/* CTA */}
                    <a
                        href="https://preview.themeforest.net/item/barfi-snow-removal-lawn-care-landscaping-company-html-template/full_screen_preview/60961620"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gradient-to-r from-[#3aa7e3] to-[#1b6fa8] hover:bg-gradient-to-r hover:from-[#1b6fa8] hover:to-[#3aa7e3] px-6 py-3 rounded-full text-lg font-medium transition w-fit"
                    >
                        Live Demo
                        <span className="text-xl">→</span>
                    </a>
                </div>


                {/* RIGHT IMAGE */}
                <div className="flex justify-center lg:justify-end">

                    <img
                        src={Snowhero}
                        alt="snow hero"
                        className="max-w-[520px] w-full object-contain"
                    />

                </div>

            </div>

        </section>
    );
};

export default SnowHero;
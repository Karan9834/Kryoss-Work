import React from "react";
import Towtruckhero from "../../assets/homeservice-towtruck-img/Towhero.webp";
const HeroSection = () => {
    return (
        <section className="relative w-full bg-gradient-to-r from-[#021423] via-[#031b2e] to-[#021423] overflow-hidden">

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[50%] text-white pb-12 lg:pb-20 lg:pr-10">

                    {/* Top Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                            🚚
                        </div>
                        <h3 className="text-lg tracking-wide font-semibold">
                            FOX-TOW TRUCK
                        </h3>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        Uber for Tow Trucks:{" "}
                        <span className="text-blue-400">
                            Seamless Roadside Assistance
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 max-w-xl mb-8">
                        Get a secure, white-label Uber for tow trucks app that connects
                        customers with nearby tow truck drivers instantly. Our towing app
                        like Uber ensures fast, reliable roadside assistance, powered by
                        cutting-edge technology.
                    </p>

                    {/* CTA */}
                    <button className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-lg font-medium transition">
                        Let's Discuss
                        <span className="text-xl">→</span>
                    </button>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">

                    {/* IMAGE PLACEHOLDER */}
                    <img
                        src={Towtruckhero}
                        alt="Tow Truck App"
                        className="w-[420px] md:w-[480px] lg:w-[520px] object-contain"
                    />

                </div>

            </div>
        </section>
    );
};

export default HeroSection;
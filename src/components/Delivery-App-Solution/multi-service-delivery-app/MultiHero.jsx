import React from "react";
import { ArrowRight } from "lucide-react";
import Multiheroimg from "../../../assets/delivery-multiservice-img/Multihero.webp";
const MultiHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] bg-[#070b0f] overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[50%] text-white pb-12 lg:pb-20 lg:pr-10">

                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-green-400 flex items-center justify-center">
                            <span className="text-black font-bold">F</span>
                        </div>

                        <div>
                            <p className="font-semibold tracking-wide">FOX-DELIVERY</p>
                            <p className="text-gray-400 text-sm">ANYTHING</p>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                        <span className="text-cyan-400">Grow Your Business With</span>{" "}
                        <span className="text-white">On Demand Delivery App</span>
                    </h1>

                    {/* Paragraph */}
                    <p className="text-gray-300 max-w-xl mb-8 text-lg">
                        With our feature-rich delivery app, expand your reach and deliver
                        anything, anytime and anywhere. Get a customized on demand delivery
                        app development solution according to your business needs that
                        simplifies your deliveries and boost your revenue.
                    </p>

                    {/* CTA Button */}
                    <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-green-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                        Let's Discuss
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center lg:justify-end">

                    {/* Glow Background */}
                    <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur-[140px] opacity-40"></div>

                    {/* Hero Image */}
                    <img
                        src={Multiheroimg}
                        alt="delivery app"
                        className="relative z-10 w-[280px] md:w-[450px] lg:w-[720px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default MultiHero;
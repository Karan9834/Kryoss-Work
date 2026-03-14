import React from "react";
import Multicta2img from "../../../assets/delivery-multiservice-img/Multicta2.webp";
const MultiCTA2 = () => {
    return (
        <section className="w-full bg-gray-100 py-20 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* CTA BOX */}
                <div className="relative bg-gradient-to-r from-black via-[#0e2230] to-[#2b6b4c] rounded-[40px] px-10 md:px-16 py-16 grid lg:grid-cols-2 items-center gap-10 overflow-visible">

                    {/* LEFT TEXT */}
                    <div className="z-10">

                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-6">
                            Build Your Own "Delivery Anything" App Today!
                        </h2>

                        <p className="text-gray-300 mb-8 max-w-lg">
                            Launch a powerful on-demand delivery app that lets users send or
                            receive anything, anytime. Scale your business with a seamless,
                            feature-rich solution.
                        </p>

                        <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                            Get a Free Demo
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        <img
                            src={Multicta2img}
                            alt="delivery app"
                            className="
              w-[300px] md:w-[400px] lg:w-[680px]
              lg:absolute
              lg:-right-20
              lg:-bottom-70
              "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MultiCTA2;
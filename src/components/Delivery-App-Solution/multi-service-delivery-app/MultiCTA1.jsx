import React from "react";
import Multicta1img from "../../../assets/delivery-multiservice-img/Multicta1.webp";
const MultiCTA1 = () => {
    return (
        <section className="w-full bg-gray-100 py-20 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* CTA CARD */}
                <div className="relative bg-gradient-to-r from-green-900 to-black rounded-[40px] px-10 md:px-16 py-16 grid lg:grid-cols-2 items-center gap-10 overflow-visible">

                    {/* LEFT TEXT */}
                    <div className="z-10">

                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-6">
                            Want to Experience an On-Demand Delivery App in Action?
                        </h2>

                        <p className="text-gray-300 mb-8 max-w-lg">
                            Get in touch with us and see in real-time how our custom-built
                            delivery app can optimize your delivery operations and drive your
                            business forward.
                        </p>

                        {/* CTA BUTTON */}
                        <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                            Book a demo today
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        <img
                            src={Multicta1img}
                            alt="delivery app"
                            className="
              w-[280px] md:w-[360px] lg:w-[700px]
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

export default MultiCTA1;
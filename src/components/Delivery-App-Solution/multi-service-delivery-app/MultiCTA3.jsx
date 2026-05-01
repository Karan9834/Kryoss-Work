import React from "react";
import Multicta3img from "../../../assets/delivery-multiservice-img/Multicta3.webp";

const MultiCTA3 = () => {
    return (
        <section className="w-full bg-gray-100 py-24 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* CTA Container */}
                <div className="relative grid lg:grid-cols-2 items-center bg-gradient-to-r from-red-800 via-red-900 to-[#4a0a05] rounded-[40px] px-10 md:px-16 py-16 overflow-visible">

                    {/* LEFT TEXT */}
                    <div className="text-white z-10">

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-6">
                            Want to Launch An On-Demand
                            <br />
                            Delivery App For Every Industry?
                        </h2>

                        <p className="text-white/90 mb-8 max-w-lg">
                            We have a team of expert developers who create high-performing
                            delivery apps that are customized according to every business
                            type and size. Our team ensures it improves user experience and
                            drives growth.
                        </p>

                        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-red-700 transition">
                            Contact Us
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">

                        <img
                            src={Multicta3img}
                            alt="delivery"
                            className="
              w-[260px] md:w-[340px] lg:w-[640px]
              lg:absolute
              lg:-right-16
              lg:-bottom-70
              "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MultiCTA3;
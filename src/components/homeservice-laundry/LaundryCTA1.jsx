import React from "react";
import Laundrycta1 from "../../assets/homeservice-laundry-img/Laundrycta1.webp";

const LaundryCTA1 = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative bg-[#e3d5c5] rounded-[50px] overflow-hidden">

                    <div className="grid lg:grid-cols-2 items-center">

                        {/* IMAGE */}
                        <div className="order-1 lg:order-1 relative flex justify-center lg:justify-start">

                            <img
                                src={Laundrycta1}
                                alt="Laundry Business"
                                className="w-[420px] lg:w-[520px] lg:absolute  lg:-top-20 lg:left-16"
                            />

                        </div>

                        {/* CONTENT */}
                        <div className="order-2 lg:order-2 px-8 lg:px-14 py-16 lg:py-20">

                            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">

                                Launch Your{" "}
                                <span className="text-teal-700">Laundry Business</span>{" "}
                                in Just 5 Days with Our Custom App Solution

                            </h2>

                            <p className="text-gray-600 mb-8 max-w-xl">
                                Ready to grow your laundry business? Our custom on-demand app
                                provides a scalable, feature-packed solution, launching in just
                                5 days to enhance your services and customer experience.
                            </p>

                            <button className="border border-gray-700 rounded-full px-6 py-3 font-medium hover:bg-black hover:text-white transition">
                                Start Your Journey Today!
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default LaundryCTA1;
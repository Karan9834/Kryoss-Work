import React from "react";
import Laundryabout from "../../assets/homeservice-laundry-img/Laundryabout.webp";

const LaundryAbout = () => {
    return (
        <section className="py-24 bg-[#f4f4f4]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Capsule */}
                <div className="flex justify-center mb-6">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        About Our On-Demand Dry Cleaning App Development
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold mb-14 leading-snug">
                    On-Demand{" "}
                    <span className="text-teal-700">Dry Cleaning App</span>{" "}
                    Development for Hassle-Free Service
                </h2>

                {/* Main Container */}
                <div className="bg-[#f7f7f7] rounded-[40px] px-8 md:px-12 pt-16 pb-0 flex flex-col md:flex-row items-end gap-10">

                    {/* LEFT IMAGE */}
                    <div className="md:w-1/2 flex items-end justify-center">

                        <img
                            src={Laundryabout}
                            alt="Laundry App"
                            className="w-[420px] md:w-[520px]"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="md:w-1/2 text-gray-700 pb-14">

                        <p className="mb-6 leading-relaxed">
                            An on-demand dry cleaning app simplifies laundry services by
                            enabling customers to book and receive doorstep service
                            effortlessly. Kryoss Work offers a scalable solution with a
                            user app, provider app, and admin panel to streamline your
                            business. Customize your laundry app with all the essential
                            features to meet your unique requirements.
                        </p>

                        <p className="mb-6 leading-relaxed">
                            In today's fast-paced world, busy professionals, students, and
                            families struggle to find time for laundry. Between work, studies,
                            and personal commitments, traditional laundry tasks often take a
                            backseat. This is where on-demand dry cleaning apps come into play,
                            providing a quick and convenient solution.
                        </p>

                        <p className="mb-6 leading-relaxed">
                            At Kryoss Work, we specialize in offering scalable ready-made
                            on-demand laundry app solutions for businesses looking to tap into
                            this growing market. Our Uber-like laundry service app offers a
                            seamless user experience with three essential components.
                        </p>

                        <p className="leading-relaxed">
                            Our on-demand dry cleaning app development service provides you
                            with a customizable clone script designed to fit your unique
                            business needs. Launch quickly and grow your laundry business
                            effortlessly.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default LaundryAbout;
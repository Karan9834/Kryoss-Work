import React from "react";
import Towtruckabout from "../../assets/homeservice-towtruck-img/Towabout.webp";
const AboutSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="border rounded-3xl p-8 lg:p-14 grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={Towtruckabout}
                            alt="Tow Truck App"
                            className="w-full max-w-md rounded-4xl object-contain"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* Label */}
                        <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm mb-6">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            About Uber for Tow Trucks
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
                            Build a Powerful Uber for Tow Trucks App for{" "}
                            <span className="text-blue-600">
                                Roadside Assistance App Development
                            </span>
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-5 text-gray-600 leading-relaxed">

                            <p>
                                Vehicle breakdowns can happen anywhere—whether in the heart of
                                the city or on a deserted highway. Finding a tow truck driver
                                at the right time can be challenging, especially in remote
                                areas. With the rise of digital solutions, an efficient Uber
                                for Tow Trucks app has become essential for providing quick
                                and reliable roadside assistance.
                            </p>

                            <p>
                                At KryossOne, we understand the growing demand for
                                seamless towing solutions. Our tow truck app like Uber is
                                designed to help businesses connect stranded users with
                                professional tow truck drivers instantly.
                            </p>

                            <p>
                                If you're looking to develop a towing app like Uber, we offer a
                                fully customizable and feature-rich solution tailored to your
                                business needs with real-time tracking and a user-friendly
                                interface.
                            </p>

                            <p>
                                Get your hands on a premium roadside assistance app clone
                                script for both Android and iOS platforms and launch your own
                                branded Uber towing app efficiently.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;
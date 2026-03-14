import React from "react";
import Snowwhatweprovide from "../../assets/homeservice-snow-img/Snowwhatweprovide.webp";

const SnowWhatWeProvide = () => {
    return (
        <section className="bg-[#052c3b] py-14">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center text-white mb-16">

                    <span className="border border-white/40 px-4 py-1 rounded-full text-sm">
                        What We Provide
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-semibold mt-6">
                        Comprehensive <span className="text-cyan-400">Snow Plow App</span>{" "}
                        Solution for All Platforms
                    </h2>

                    <p className="text-white/70 mt-6 max-w-3xl mx-auto">
                        Our Uber Snow Plow Service App Solution includes fully optimized
                        Android and iOS versions alongside a powerful web admin panel to
                        manage your business operations efficiently.
                    </p>

                </div>

                {/* layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CARDS */}
                    <div className="space-y-8">

                        {/* card 1 */}
                        <div className="border border-white/30 rounded-[30px] p-8 group hover:border-white transition">

                            <div className="bg-[#0a3a4b] rounded-[25px] p-8 transition group-hover:bg-[#114e64]">

                                <h3 className="text-white text-xl font-semibold mb-4">
                                    Android & iOS
                                </h3>

                                <p className="text-white/70 mb-6">
                                    Offer your customers a smooth and responsive app experience on
                                    both Android and iOS platforms. Connect users and providers
                                    with easy navigation.
                                </p>

                                <div className="flex flex-wrap gap-3">

                                    <span className="px-5 py-2 rounded-full bg-[#0f4f66] text-white text-sm group-hover:bg-white group-hover:text-[#052c3b]">
                                        Customer Android Application
                                    </span>

                                    <span className="px-5 py-2 rounded-full bg-[#0f4f66] text-white text-sm group-hover:bg-white group-hover:text-[#052c3b]">
                                        Customer iOS Application
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* card 2 */}
                        <div className="border border-white/30 rounded-[30px] p-8 group hover:border-white transition">

                            <div className="bg-[#0a3a4b] rounded-[25px] p-8 transition group-hover:bg-[#114e64]">

                                <h3 className="text-white text-xl font-semibold mb-4">
                                    Web Admin Panel
                                </h3>

                                <p className="text-white/70 mb-6">
                                    Manage your snow plow business effortlessly with our feature
                                    rich web admin panel. Monitor bookings, payments and
                                    performance all in one place.
                                </p>

                                <div className="flex flex-wrap gap-3">

                                    <span className="px-5 py-2 rounded-full bg-[#0f4f66] text-white text-sm group-hover:bg-white group-hover:text-[#052c3b]">
                                        Super Admin Web Panel
                                    </span>

                                    <span className="px-5 py-2 rounded-full bg-[#0f4f66] text-white text-sm group-hover:bg-white group-hover:text-[#052c3b]">
                                        Store/Restaurant Web Panel
                                    </span>

                                    <span className="px-5 py-2 rounded-full bg-[#0f4f66] text-white text-sm group-hover:bg-white group-hover:text-[#052c3b]">
                                        Dispatcher Web Panel
                                    </span>

                                    <span className="px-5 py-2 rounded-full bg-[#0f4f66] text-white text-sm group-hover:bg-white group-hover:text-[#052c3b]">
                                        Billing Admin Account
                                    </span>

                                    <span className="px-5 py-2 rounded-full bg-[#0f4f66] text-white text-sm group-hover:bg-white group-hover:text-[#052c3b]">
                                        Static Landing Page Website
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={Snowwhatweprovide}
                            alt="snow apps"
                            className="max-w-[850px]   w-full object-contain"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};
export default SnowWhatWeProvide;
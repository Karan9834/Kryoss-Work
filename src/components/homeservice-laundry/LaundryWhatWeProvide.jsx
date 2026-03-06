import React from "react";
import { Smartphone, Monitor } from "lucide-react";

import Laundrywhatweprovide from "../../assets/homeservice-laundry-img/Laundrywhatweprovide.webp";

const LaundryWhatWeProvide = () => {
    return (
        <section className="py-24">

            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">

                <span className="border rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
                    What We Provide
                </span>

                <h2 className="text-4xl font-semibold mb-4">
                    Comprehensive <span className="text-teal-700">Laundry App Development</span> Solution for All Platforms
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto">
                    Our on-demand laundry app development solution offers fully optimized Android and iOS versions,
                    ensuring a seamless user experience for both customers and service providers.
                </p>

            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-[#e6f3f2] rounded-[40px] p-10 grid lg:grid-cols-2 gap-10">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-8">

                        {/* CARD 1 */}
                        <div className="bg-white border border-teal-200 hover:border-teal-700 transition rounded-3xl p-8">

                            <div className="flex items-center gap-4 mb-4">

                                <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center">
                                    <Smartphone className="text-white" size={20} />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Android & iOS
                                </h3>

                            </div>

                            <p className="text-gray-600 mb-6">
                                Provide your customers with a smooth experience on both Android and iOS platforms.
                                Our solutions ensure seamless laundry booking with robust functionality.
                            </p>

                            <div className="flex flex-wrap gap-3">

                                <span className="border border-teal-300 px-4 py-2 rounded-full text-sm">
                                    Customer Android App
                                </span>

                                <span className="border border-teal-300 px-4 py-2 rounded-full text-sm">
                                    Customer iOS App
                                </span>

                                <span className="border border-teal-300 px-4 py-2 rounded-full text-sm">
                                    Provider Android App
                                </span>

                                <span className="border border-teal-300 px-4 py-2 rounded-full text-sm">
                                    Provider iOS App
                                </span>

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white border border-teal-200 hover:border-teal-700 transition rounded-3xl p-8">

                            <div className="flex items-center gap-4 mb-4">

                                <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center">
                                    <Monitor className="text-white" size={20} />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Web Admin Panel
                                </h3>

                            </div>

                            <p className="text-gray-600 mb-6">
                                Efficiently manage your laundry business with our feature-packed web admin panel.
                                Monitor orders, manage payments, and track deliveries easily.
                            </p>

                            <div className="flex flex-wrap gap-3">

                                <span className="border border-teal-300 px-4 py-2 rounded-full text-sm">
                                    Super Admin Web Panel
                                </span>

                                <span className="border border-teal-300 px-4 py-2 rounded-full text-sm">
                                    Provider Web Panel
                                </span>

                                <span className="border border-teal-300 px-4 py-2 rounded-full text-sm">
                                    Billing Account
                                </span>

                                <span className="border border-teal-300 px-4 py-2 rounded-full text-sm">
                                    Static Landing Page
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="bg-[#0d6a63] rounded-3xl items-end justify-center overflow-hidden max-h-[390px]">

                        <img
                            src={Laundrywhatweprovide}
                            alt="Laundry App"
                            className="w-[520px] object-contain"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LaundryWhatWeProvide;
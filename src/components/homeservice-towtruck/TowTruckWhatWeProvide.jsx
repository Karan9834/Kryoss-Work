import React from "react";
import { Apple, Smartphone, Globe } from "lucide-react";
import Towtruckwhatweprovide from "../../assets/homeservice-towtruck-img/Towwhatweprovide.webp";
const WhatWeProvide = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* capsule */}
                <div className="flex justify-center mb-4">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        What We Provide
                    </span>
                </div>

                {/* heading */}
                <h2 className="text-center text-4xl font-semibold mb-6">
                    Comprehensive Uber for Tow Trucks{" "}
                    <span className="text-blue-600">App for All Platforms</span>
                </h2>

                {/* paragraph */}
                <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
                    Transform your roadside assistance business with our customizable Uber
                    for Tow Trucks app for Android, iOS, and Web. Connect stranded users
                    with nearby tow truck drivers efficiently across all platforms.
                </p>

                {/* blue container */}
                <div className="relative bg-[#f3f8fd] border border-blue-200 rounded-[40px] p-10 lg:p-14 overflow-hidden lg:overflow-visible">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div className="relative z-10">

                            {/* icons */}
                            <div className="flex gap-4 mb-6">

                                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                                    <Smartphone className="text-white" size={24} />
                                </div>

                                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                                    <Apple className="text-white" size={24} />
                                </div>

                                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                                    <Globe className="text-white" size={24} />
                                </div>

                            </div>

                            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                                iOS + Android + Web
                            </h3>

                            <p className="text-gray-600 mb-8">
                                Our Uber for Tow Trucks app is available for iOS, Android, and
                                Web, offering a seamless and consistent experience across all
                                platforms.
                            </p>

                            {/* pills */}
                            <div className="flex flex-wrap gap-4">

                                <span className="px-6 py-2 border border-blue-300 rounded-full">
                                    Customer Android + iOS App
                                </span>

                                <span className="px-6 py-2 border border-blue-300 rounded-full">
                                    Driver Android + iOS App
                                </span>

                                <span className="px-6 py-2 border border-blue-300 rounded-full">
                                    Super Admin Web Panel
                                </span>

                                <span className="px-6 py-2 border border-blue-300 rounded-full">
                                    Static Landing Page
                                </span>

                                <span className="px-6 py-2 border border-blue-300 rounded-full">
                                    Dispatcher Admin Account
                                </span>

                                <span className="px-6 py-2 border border-blue-300 rounded-full">
                                    Billing Admin Account
                                </span>

                            </div>

                        </div>

                        {/* IMAGE MOBILE - Flows below content */}
                        <div className="lg:hidden flex justify-center -mb-10">
                            <img
                                src={Towtruckwhatweprovide}
                                alt="devices"
                                className="w-full max-w-md"
                            />
                        </div>

                    </div>

                    {/* IMAGE DESKTOP - Touching right screen edge */}
                    <img
                        src={Towtruckwhatweprovide}
                        alt="devices"
                        className="hidden lg:block absolute bottom-0 
                        right-[-120px] 2xl:right-[-190px] 
                        max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] scale-90"
                    />

                </div>

            </div>

        </section>
    );
};

export default WhatWeProvide;

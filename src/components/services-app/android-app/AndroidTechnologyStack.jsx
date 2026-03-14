
import React from "react";

const Technology = () => {
    return (
        <section className="bg-white py-20 relative">

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT CONTENT - STICKY CONTAINER */}
                    <div className="h-full">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                Modern Technology
                            </div>

                            <h2 className="text-4xl font-semibold leading-snug">
                                Core Tech Behind Our{" "}
                                <span className="text-orange-500">
                                    White Label Kotlin App Development Company
                                </span>
                            </h2>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">
                                We utilize a cutting-edge stack featuring Kotlin Multiplatform,
                                Jetpack Compose, and Ktor to build high-performance, shared-logic
                                applications. This modern architecture ensures native execution
                                on Android and iOS while maintaining a single, scalable codebase
                                for your entire business ecosystem.


                            </p>
                        </div>
                    </div>

                    {/* RIGHT SCROLL CONTENT */}
                    <div className="flex flex-col gap-10">

                        {/* LANGUAGE */}
                        <div className="bg-[#EEF1FF] border border-[#C6CFFF] rounded-3xl p-10 transition-all duration-300 hover:shadow-lg">
                            <h3 className="text-lg font-semibold text-indigo-600 mb-6">
                                Language
                            </h3>

                            <div className="flex gap-4 flex-wrap">
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">XML</span>
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">Java</span>
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">Kotlin</span>
                            </div>
                        </div>

                        {/* FRAMEWORK */}
                        <div className="bg-[#F4E3CF] border border-[#E6B885] rounded-3xl p-10 transition-all duration-300 hover:shadow-lg">
                            <h3 className="text-lg font-semibold text-orange-600 mb-6">
                                Framework
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">
                                    Firebase Crashlytics
                                </span>
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">
                                    Lottie
                                </span>
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">
                                    Google Map
                                </span>
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">
                                    Google Cloud
                                </span>
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">
                                    Fastlane
                                </span>
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">
                                    Material UI
                                </span>
                            </div>
                        </div>

                        {/* DATABASE */}
                        <div className="bg-[#D8ECF5] border border-[#A8D6E8] rounded-3xl p-10 transition-all duration-300 hover:shadow-lg">
                            <h3 className="text-lg font-semibold text-sky-600 mb-6">
                                Database
                            </h3>

                            <div className="flex gap-4 flex-wrap">
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">
                                    Firebase realtime database
                                </span>
                                <span className="px-6 py-3 bg-white border rounded-full text-sm font-medium shadow-sm">
                                    SQLite
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};
export default Technology;

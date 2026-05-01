import React from "react";
import bikeplatform from "../../assets/transport-bikeride-img/platform.webp"
const PlatformCompatibility = () => {
    return (
        <section className="relative w-full bg-gradient-to-b from-[#0b3d2e] to-[#062016] overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-0">

                {/* PILL */}
                <div className="flex justify-center mb-5">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/40 text-white text-sm">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        Platform Compatibility
                    </div>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-white text-[30px] lg:text-[36px] font-bold mb-4">
                    Seamless Bike Taxi App for{" "}
                    <span className="text-[#2ef2b5]">Android</span>,{" "}
                    <span className="text-white">iOS</span>, and{" "}
                    <span className="text-[#c6ff4a]">Web Admin Panel</span>
                </h2>

                {/* SUB TEXT */}
                <p className="text-center text-white/80 max-w-3xl mx-auto leading-[26px] mb-12">
                    Our Bike Taxi App Development solution is available on Android, iOS,
                    and comes with a powerful web-based admin panel, ensuring smooth
                    operations and a seamless user experience across all platforms.
                </p>

                {/* CONTENT GRID */}
                <div className="relative flex flex-col lg:flex-row items-end">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-[60%] pb-12 lg:pb-24">
                        {/* ICONS */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl">
                                🤖
                            </div>
                            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl">
                                🍎
                            </div>
                            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl">
                                💻
                            </div>
                        </div>

                        <h3 className="text-[22px] font-bold text-[#2ef2b5] mb-4">
                            Available in Android, iOS | Web Admin Panel
                        </h3>

                        <p className="text-white/80 leading-[26px] mb-8 text-sm md:text-base max-w-2xl">
                            We provide a fully functional On-Demand Bike Taxi App for Android
                            and iOS, offering an intuitive interface for both riders and
                            drivers. Alongside the mobile apps, our robust web admin panel
                            allows businesses to manage bookings, track rides in real-time,
                            monitor driver activities, and analyze performance data
                            effortlessly.
                        </p>

                        {/* TAGS */}
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {[
                                "Customer App",
                                "Driver App",
                                "Super Admin",
                                "Dispatcher",
                                "Billing",
                                "Landing Page",
                            ].map((item, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full bg-white/10 border border-white/5 text-white text-[12px] md:text-[13px] font-medium"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* MOBILE IMAGE ONLY (INSIDE FLOW) */}
                    <div className="w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] -mx-4 sm:-mx-6 lg:hidden mt-8">
                        <img
                            src={bikeplatform}
                            alt="Bike platform mobile"
                            className="w-full h-auto object-contain object-bottom block"
                        />
                    </div>

                </div>
            </div>

            {/* DESKTOP IMAGE (OUTSIDE PADDED CONTAINER TO TOUCH SCREEN EDGE) */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-[42%] h-auto pointer-events-none">
                <img
                    src={bikeplatform}
                    alt="Bike platform desktop"
                    className="w-full h-full object-contain object-right-bottom block"
                />
            </div>
        </section>
    );
};

export default PlatformCompatibility;


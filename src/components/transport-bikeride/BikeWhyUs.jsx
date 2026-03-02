import React from "react";
import whyus from "../../assets/transport-bikeride-img/whyus.webp";
const BikeWhyUs = () => {
    return (
        <section className="bg-[#053c2e] py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* CHIP */}
                <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        Why Choose Our Bike Taxi App?
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[34px] lg:text-[50px] font-black text-white mb-16 leading-tight">
                    Why <span className="text-[#2af0b4]">Choose Our</span>{" "}
                    <span className="text-[#c7f000]">Bike Taxi App</span>{" "}
                    Solution?
                </h2>

                {/* MAIN ILLUSTRATION IMAGE */}
                <div className="w-full flex justify-center mb-16">
                    <img
                        src={whyus}
                        alt="Why Choose Our Bike Taxi App?"
                        className="w-full h-auto max-w-[1100px] object-contain"
                    />
                </div>

                {/* BULLET POINTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-10">
                    <div className="space-y-6 lg:space-y-10">
                        <div className="flex items-start gap-4 group">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0 group-hover:bg-[#2af0b4] transition-colors" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed">
                                Our app is designed to grow with your business, easily adapting
                                to market demands and expansion needs.
                            </p>
                        </div>
                        <div className="flex items-start gap-4 group">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0 group-hover:bg-[#2af0b4] transition-colors" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed">
                                Advanced data encryption, secure payment gateways, and
                                authentication protocols ensure maximum user data protection.
                            </p>
                        </div>
                        <div className="flex items-start gap-4 group">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0 group-hover:bg-[#2af0b4] transition-colors" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed">
                                Modify and personalize your Bike Taxi Booking App with adaptable
                                modules to create a unique user experience.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 lg:space-y-10">
                        <div className="flex items-start gap-4 group">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0 group-hover:bg-[#2af0b4] transition-colors" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed">
                                Get complete control over your app, enabling easy customization
                                and management as per your business requirements.
                            </p>
                        </div>
                        <div className="flex items-start gap-4 group">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0 group-hover:bg-[#2af0b4] transition-colors" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed">
                                Our intuitive design enhances user experience, ensuring smooth
                                navigation for both riders and drivers.
                            </p>
                        </div>
                        <div className="flex items-start gap-4 group">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0 group-hover:bg-[#2af0b4] transition-colors" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed">
                                We follow the latest industry practices to deliver a
                                high-performance app within a quick turnaround time.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BikeWhyUs;
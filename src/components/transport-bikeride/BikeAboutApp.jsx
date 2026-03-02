import React from "react";
import aboutapp from "../../assets/transport-bikeride-img/aboutapp.webp"
const AboutAppSection = () => {
    return (
        <section className="w-full bg-white py-16 font-['IBM_Plex_Sans']">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-start">

                    {/* LEFT IMAGE */}
                    <div className="w-full lg:w-[450px]">
                        <div className="h-[570px] rounded-[24px] bg-gradient-to-b from-[#0b3d2e] to-[#062016] flex items-center justify-center text-white/40 text-sm">
                            <img src={aboutapp}
                                alt="About the App"
                                ClassName="h-full w-full object-cover" />
                        </div>
                    </div>

                    {/* RIGHT CONTENT (EXACT WIDTH) */}
                    <div className="w-full lg:w-[1000px] lg:ml-0">
                        <div className="rounded-[24px] border border-[#7be3c5] bg-[#f3fffb] pt-[60px] px-8 pb-8">

                            {/* Pill */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7be3c5] text-[#0b3d2e] text-sm font-medium mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#0b3d2e]" />
                                About the App
                            </div>

                            {/* Heading */}
                            <h2 className="text-[32px] leading-tight font-semibold text-[#0b3d2e] mb-6">
                                Launch Your Own Bike Taxi App for <br />
                                <span className="text-[#1fae88]">Maximum Growth</span>
                            </h2>

                            {/* Paragraphs */}
                            <p className="text-[16px] leading-[24px] text-[#303030] mb-4">
                                Our Bike Taxi App Development solution helps businesses meet the rising demand for quick,
                                affordable, and hassle-free transportation. Designed for urban commuters, it offers a
                                feature-rich, user-friendly platform to tap into the growing on-demand bike taxi market.
                            </p>

                            <p className="text-[16px] leading-[24px] text-[#303030] mb-4">
                                The On-Demand Bike Taxi App allows users to book rides instantly, track drivers in real-time,
                                and enjoy cashless payments—all from their smartphones. It’s not just about convenience for
                                riders; it’s also a powerful tool for businesses to manage operations efficiently with
                                advanced analytics and admin controls.
                            </p>

                            <p className="text-[16px] leading-[24px] text-[#303030] mb-4">
                                Whether you're a startup or an established business looking to expand, our Bike Taxi Booking
                                App Development service offers a scalable and customizable solution. We ensure that the app
                                fits your brand identity, operational needs, and business goals while delivering a smooth
                                experience for both riders and drivers.
                            </p>

                            <p className="text-[16px] leading-[24px] text-[#303030]">
                                With our Bike Ride Booking App, you can offer reliable, eco-friendly, and cost-effective
                                transportation options. It’s the perfect solution for entrepreneurs who want to enter the
                                booming bike taxi market.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutAppSection;
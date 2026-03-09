import React from "react";
import whyusimg from "../../../assets/homeservice-tutor-img/whyus.webp";
const WhyUs = () => {
    return (
        <section className="bg-black py-8 lg:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                {/* BADGE */}
                <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        Why Choose Us
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[34px] lg:text-[48px] font-bold text-white mb-6 leading-tight">
                    Why Choose us for <span className="text-cyan-500">On demand Delivery App </span>
                </h2>



                {/* INFOGRAPHIC IMAGE PLACEHOLDER */}
                <div className="w-full flex justify-center mb-24">

                    <img src={whyusimg}
                        alt="Why choose us"
                        className="w-full h-full object-contain" />

                </div>

                {/* BULLET POINTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                    {/* LEFT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Our on-demand delivery anything has a pre-built system that lets you launch your app quickly and start delivering right away. No need to build it from scratch.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Our app has everything you need with a range of features from real-time tracking to multiple payment options to run a smooth delivery business.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                With our on-demand app, you can reach more customers as it works seamlessly across mobile and web platforms, providing a smooth user experience.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Our solution comes with customization options that allow you to easily adapt the delivery app to fit your brand and business needs. It provides you a unique and personalized experience.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Whether you are a small startup or a big enterprise, our app is designed to scale with you and adjust to your growing needs.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Our team is always available to support you after the launch. Whether it’s fixing issues, adding new features, or answering your questions, we have got you covered every step of the way.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyUs;

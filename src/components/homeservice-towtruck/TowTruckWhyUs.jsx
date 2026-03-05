import React from "react";
import whyus from "../../assets/homeservice-tutor-img/whyus.webp";
const WhyUs = () => {
    return (
        <section className="bg-[#1a1110] py-8 lg:py-16 overflow-hidden">
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
                    Why <span className="text-blue-500">Choose Our</span> Uber for Tow Trucks App?
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-white/70 text-[16px] lg:text-[18px] max-w-4xl mx-auto mb-20">
                    Our Uber for Tow Trucks app is the perfect solution for launching your on-demand towing business with speed and efficiency. Here’s why our app is the best choice for your business:
                </p>

                {/* INFOGRAPHIC IMAGE PLACEHOLDER */}
                <div className="w-full flex justify-center mb-24">

                    <img src={whyus}
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
                                Get your app up and running in just 5 working days, allowing you to start offering roadside assistance and towing services right away.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Tailor the app to suit your specific business needs, branding, and services for a personalized experience for both customers and tow truck drivers.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                With an intuitive, simple interface, the app ensures a smooth and hassle-free experience for users and service providers.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Built to scale as your business grows, our app includes robust security features to protect user data and maintain system integrity.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Keep your customers updated with instant notifications on service status, helping to enhance trust and customer satisfaction.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Manage users, services, payments, and orders efficiently with an easy-to-use admin dashboard that puts everything in your control.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyUs;

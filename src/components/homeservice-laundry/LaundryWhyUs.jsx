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
                    Why Choose us for <span className="text-teal-400">On demand Laundry App Development</span>
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-white/70 text-[16px] lg:text-[18px] max-w-4xl mx-auto mb-20">
                    Our On-Demand Laundry App Development solution offers a fast and seamless way to launch your laundry service business with minimal hassle. Here's why our solution is the best choice for you:
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
                                Keep your customers and service providers informed with real-time updates on order status, delivery progress, and other essential notifications. This ensures smooth communication, improving customer satisfaction and service efficiency.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Tailor the app to match your unique laundry business requirements. Whether it's branding, service offerings, or user features, we ensure your app delivers a personalized experience for both customers and service providers.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Designed for simplicity and ease of use, our laundry app ensures a smooth experience for customers booking services and providers managing their orders. The intuitive interface makes it easy for everyone to navigate.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Built with growth in mind, our platform is highly scalable to accommodate your expanding business needs. With robust security measures in place, you can rest assured that user data is protected and your app remains reliable and trustworthy.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Get your on-demand laundry app up and running in just 5 working days, not weeks! This rapid deployment allows you to start offering laundry services to customers right away, without unnecessary delays.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                With the help of an agile approach, we follow emerging techniques and practices to deliver the project within the decided time frame.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyUs;

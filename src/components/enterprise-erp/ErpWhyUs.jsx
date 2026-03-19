import React from "react";
import whyus from "../../assets/homeservice-tutor-img/whyus.webp";

const WhyUs = () => {
    return (
        <section className="bg-[#111827] py-8 lg:py-16 overflow-hidden">
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
                    Why Choose us for <span className="text-blue-900">ERP Development</span>
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-white/70 text-[16px] lg:text-[18px] max-w-4xl mx-auto mb-20">
                    Our ERP development solution offers a fast and seamless way to streamline your business operations with minimal hassle. Here's why our solution is the best choice for your business:
                </p>

                {/* INFOGRAPHIC IMAGE */}
                <div className="w-full flex justify-center mb-24">
                    <img
                        src={whyus}
                        alt="Why choose us"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* BULLET POINTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                    {/* LEFT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Keep your teams and stakeholders informed with real-time updates on operations, workflows, and performance metrics, ensuring better collaboration and faster decision-making.
                            </p>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Customize the ERP system according to your business needs, including modules like HRM, CRM, inventory, finance, and more, delivering a fully tailored solution.
                            </p>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Designed with a user-friendly interface, our ERP ensures a smooth experience for employees and administrators, making it easy to manage daily business operations efficiently.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Built for scalability and security, our ERP platform grows with your business while ensuring your data remains protected, reliable, and secure at all times.
                            </p>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Get your ERP system up and running in just 5 working days, allowing you to streamline operations and boost productivity without long development cycles.
                            </p>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Using an agile development approach, we implement modern technologies and best practices to deliver high-quality ERP solutions within the committed timeline.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyUs;
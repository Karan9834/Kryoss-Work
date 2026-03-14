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
                    Why <span className="text-[#f5b301]">Choose Our</span> Uber for Tutor App?
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-white/70 text-[16px] lg:text-[18px] max-w-4xl mx-auto mb-20">
                    Our Uber for Tutor app is the perfect solution for launching your tutoring business
                    quickly and efficiently. Here's why it's the best choice:
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
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Get your on-demand tutor app up and running within 5 working days, not
                                weeks, so you can start connecting students with tutors right away.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Tailor the app to suit your specific business needs, features, and
                                branding for a unique user experience.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Enjoy an intuitive design that ensures a seamless experience for both
                                students and tutors, making the platform easy to navigate.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Our app is built to scale as your business grows, with top-notch
                                security measures to protect user data and ensure reliability.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Keep your users updated with instant notifications for new sessions,
                                bookings, and other important updates.
                            </p>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="mt-2 w-2 h-2 rounded-full bg-[#f5b301] shrink-0" />
                            <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed font-medium">
                                Take full control with an easy-to-use admin panel that allows you to
                                manage users, payments, and other key activities from a single
                                dashboard.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyUs;

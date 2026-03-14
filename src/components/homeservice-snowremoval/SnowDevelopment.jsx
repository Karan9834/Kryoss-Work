import React, { useState } from "react";
import Snowdevelopment from "../../assets/homeservice-snow-img/Snowdevelopment.webp";

const steps = [
    {
        title: "Gathering Requirements",
        desc: "We begin by understanding your business needs and objectives. Our team works closely with you to gather detailed requirements and define the app's features and functionality.",
    },
    {
        title: "Design & Development",
        desc: "Next, we create an intuitive and visually appealing design, followed by robust development. Both Android and iOS versions are built with your customizations and branding in mind.",
    },
    {
        title: "Collect Third-Party Accounts",
        desc: "To enhance app functionality, we integrate third-party services (such as payment gateways or mapping systems). This step ensures your app runs smoothly and offers essential services.",
    },
    {
        title: "Test and Launch",
        desc: "Once the app is fully developed, we conduct extensive testing to ensure performance, security, and usability. After testing, we launch your app on both the Play Store and App Store, ready to serve your customers!",
    },
];

const SnowDevelopment = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white">

            {/* ── WHITE SECTION: badge + heading + para ── */}
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-14 text-center">

                <span className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-sm text-gray-600 mb-6">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Development Process
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                    Our Uber Snow Plow Service App{" "}
                    <span className="text-blue-500">Solution Development Process</span>
                </h2>

                <p className="text-gray-600 mt-6 max-w-4xl mx-auto text-base md:text-lg">
                    At White Label Fox, we follow a streamlined, four-stage process to create your Uber Snow Plow Service App Solution. From gathering requirements to testing and launching, we ensure a seamless app development experience tailored to your business needs.
                </p>

            </div>

            {/* ── DARK SECTION: rounded top corners, cards + image ── */}
            <div className="bg-[#062f3f] rounded-tl-[60px] rounded-tr-[60px] pt-16 pb-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* LEFT: Scrollable Cards (hidden scrollbar) */}
                        <div
                            className="h-[480px] overflow-y-auto space-y-5 pr-2"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {steps.map((step, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`
                                            rounded-2xl p-7 cursor-pointer transition-all duration-300 border
                                            ${isActive
                                                ? 'bg-[#e8f5ff] border-[#2f8ccf]/40 shadow-md'
                                                : 'bg-white border-gray-200 hover:border-[#2f8ccf]/30 hover:bg-[#f4fbff]'
                                            }
                                        `}
                                    >
                                        <h3 className="text-lg font-bold italic mb-3 text-[#2f8ccf]">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT: Development illustration */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={Snowdevelopment}
                                alt="Development Process"
                                className="w-full max-w-[520px] object-contain"
                            />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SnowDevelopment;

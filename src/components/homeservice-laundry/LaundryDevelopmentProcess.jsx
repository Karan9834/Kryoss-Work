import React from "react";
import { FileText, MonitorSmartphone, Link2, Rocket } from "lucide-react";
import Laundrydevelopment from "../../assets/homeservice-laundry-img/Laundrydevelopment.webp";

const steps = [
    {
        icon: FileText,
        title: "Gathering Requirements",
        text: "We collaborate with you to understand your business goals, target audience, and specific needs to create a tailored app solution.",
    },
    {
        icon: MonitorSmartphone,
        title: "Design & Development",
        text: "Our expert team designs intuitive interfaces and develops robust app features, ensuring a smooth user experience across all platforms.",
    },
    {
        icon: Link2,
        title: "Collect Third-Party Accounts",
        text: "We integrate essential third-party services, such as payment gateways, SMS APIs, and map services, to enhance the app functionality.",
    },
    {
        icon: Rocket,
        title: "Test and Launch",
        text: "Before deployment, we rigorously test the app for performance, security, and reliability. Once approved, your app is launched.",
    },
];

const LaundryDevelopmentProcess = () => {
    return (
        <section className="py-12 bg-white">

            <div className="max-w-8xl mx-auto px-6">

                <div className="bg-[#032e2c] rounded-3xl p-14">

                    {/* heading */}
                    <div className="text-center text-white mb-16">

                        <span className="border border-white/30 rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Development Process
                        </span>

                        <h2 className="text-4xl font-semibold mb-4">
                            Our Streamlined <span className="text-teal-400">Laundry App</span>{" "}
                            Development Process
                        </h2>

                        <p className="text-white/80 max-w-3xl mx-auto">
                            At Kryoss Work, we follow a structured and efficient process
                            to deliver high-quality on-demand laundry app solutions.
                        </p>

                    </div>


                    {/* layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT PROCESS */}
                        <div className="relative max-h-[520px] overflow-y-auto pr-6"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {/* Hide scrollbar for webkit */}
                            <style>
                                {`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
                            </style>

                            {/* dotted line */}
                            <div className="absolute left-7 top-0 h-full border-l border-dashed border-white/30"></div>

                            <div className="space-y-12">

                                {steps.map((step, index) => {
                                    const Icon = step.icon;

                                    return (
                                        <div key={index} className="relative pl-16">

                                            {/* icon */}
                                            <div className="absolute left-0 top-1 bg-[#214e4b] p-3 rounded-xl">
                                                <Icon size={22} className="text-white" />
                                            </div>

                                            {/* card */}
                                            <div className="bg-[#214e4b] p-6 rounded-xl text-white">

                                                <h3 className="text-xl font-semibold mb-3">
                                                    {step.title}
                                                </h3>

                                                <p className="text-white/80">
                                                    {step.text}
                                                </p>

                                            </div>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>


                        {/* RIGHT IMAGE */}
                        <div className="lg:justify-end">

                            <img
                                src={Laundrydevelopment}
                                alt="development process"
                                className="max-w-[720px] w-full"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LaundryDevelopmentProcess;
import React from 'react';
import {
    UserCheck,
    ToggleLeft,
    Brain,
    Navigation,
    Map,
    Car,
    PlayCircle,
    Bell,
    Wallet,
    Star,
    MessageSquare,
    BarChart3,
} from "lucide-react";

const driverFeatures = [
    {
        title: "Onboarding & Document Validation",
        desc: "Partners can complete enrollment and submit necessary credentials within the platform to undergo essential safety protocols.",
        icon: UserCheck,
    },
    {
        title: "Availability Management (Active / Inactive)",
        desc: "Service providers benefit from absolute autonomy in determining their operational hours and schedule.",
        icon: ToggleLeft,
    },
    {
        title: "Intelligent Dispatch Allocation",
        desc: "Service requests are distributed through smart algorithms, ensuring partners maximize their successful fulfillment rate.",
        icon: Brain,
    },
    {
        title: "Native Route Guidance (Mapping Services)",
        desc: "Advanced geolocation tools assist partners in navigating to collection and drop-off points efficiently.",
        icon: Navigation,
    },
    {
        title: "Dynamic Activity Heatmaps",
        desc: "Visual demand indicators highlight high-volume zones, helping partners position themselves for peak opportunities.",
        icon: Map,
    },
    {
        title: "Versatile Fleet Integration",
        desc: "Transitioning between various service categories is straightforward for partners utilizing the mobility framework.",
        icon: Car,
    },
    {
        title: "Service Lifecycle Management",
        desc: "Intuitive operational controls empower partners to initiate and conclude assignments with a single interaction.",
        icon: PlayCircle,
    },
    {
        title: "Pre-Booking Reminders",
        desc: "Partners receive automated alerts ahead of scheduled appointments, facilitating better availability planning.",
        icon: Bell,
    },
    {
        title: "Earnings Dashboard",
        desc: "An integrated financial module allows partners to monitor their income streams with absolute transparency.",
        icon: Wallet,
    },
    {
        title: "Feedback & Performance Scores",
        desc: "Detailed performance metrics provide partners with actionable insights to maintain superior service standards.",
        icon: Star,
    },
    {
        title: "Encrypted In-App Messaging",
        desc: "Partners can interact with passengers through a secure communication channel to clarify specific request details.",
        icon: MessageSquare,
    },
    {
        title: "Activity Logs & Revenue Metrics",
        desc: "Comprehensive historical data enables partners to evaluate their professional output and productivity levels.",
        icon: BarChart3,
    },
];

const UberDriverFeatures = () => {
    return (
        <section
            className="w-full bg-white py-12"
            style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
        >
            <div className="max-w-[1400px] mx-auto px-4">

                {/* TAG */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 rounded-full px-5 py-1 text-sm text-gray-600">
                        Driver App Features
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[34px] md:text-[42px] leading-[46px] md:leading-[56px] font-semibold text-[#2f2f2f] mb-6">
                    Operational Tools That Empower Partners to Earn Smarter
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-[16px] text-[#5f5f5f] max-w-4xl mx-auto mb-16">
                    Our AI-enhanced mobility framework is engineered to assist partners in complex
                    real-world environments. Every attribute of the interface is optimized to provide
                    a frictionless and efficient operational experience.
                </p>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {driverFeatures.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = item.active;

                        return (
                            <div
                                key={index}
                                className={`
                  group rounded-[20px] p-6 transition-all duration-300
                  border ${isActive ? "border-transparent bg-gradient-to-br from-[#1a1a1a] to-black" : "border-[#d6d6d6] bg-white"}
                  hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-black
                  hover:border-transparent hover:shadow-xl
                `}
                            >
                                {/* ICON */}
                                <div
                                    className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300
                    ${isActive ? "bg-white" : "bg-black group-hover:bg-white"}
                  `}
                                >
                                    <Icon
                                        size={22}
                                        className={`
                      transition-all duration-300
                      ${isActive ? "text-black" : "text-white group-hover:text-black"}
                    `}
                                    />
                                </div>

                                {/* TITLE */}
                                <h3
                                    className={`
                    text-[18px] font-semibold mb-2 transition-colors duration-300
                    ${isActive ? "text-white" : "text-[#2f2f2f] group-hover:text-white"}
                  `}
                                >
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p
                                    className={`
                    text-[14.5px] leading-[24px] transition-colors duration-300
                    ${isActive ? "text-[#e5e5e5]" : "text-[#5f5f5f] group-hover:text-[#e5e5e5]"}
                  `}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* BUTTON */}
                <div className="flex justify-center mt-16">
                    <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#111] transition">
                        View More Features
                    </button>
                </div>

            </div>
        </section>
    );
};

export default UberDriverFeatures;

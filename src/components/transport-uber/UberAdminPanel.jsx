import React from 'react';
import {
    BarChart3,
    Users,
    Clock,
    DollarSign,
    ShieldCheck,
    TrendingUp,
    Headphones,
    Percent,
} from "lucide-react";
import admincontrol from "../../assets/transport-uber-img/admincontrol.webp"
const adminFeatures = [
    {
        title: "Operational Dashboards",
        desc: "Interactive visual reports provide real-time metrics to monitor platform activity and address service anomalies instantly.",
        icon: BarChart3,
    },
    {
        title: "Unified Profile Oversight",
        desc: "Eliminate fragmented data management; supervise all user and partner profiles through a centralized administrative hub.",
        icon: Users,
    },
    {
        title: "Journey Logs & Archival Data",
        desc: "Monitor active trips and dive into exhaustive historical records with a streamlined, multi-functional interface.",
        icon: Clock,
    },
    {
        title: "Intelligent Rate Structures",
        desc: "Define and adjust how your ecosystem generates revenue by fine-tuning sophisticated pricing and fare algorithms.",
        icon: DollarSign,
    },
    {
        title: "Advanced Permissions Control",
        desc: "Protect critical system settings by implementing rigid, role-based access for different administrative departments.",
        icon: ShieldCheck,
    },
    {
        title: "Demand-Driven Rate Logic",
        desc: "Establish automated surge parameters to protect profit margins during high-activity periods without manual oversight.",
        icon: TrendingUp,
    },
    {
        title: "Centralized Support Desk",
        desc: "Resolve all participant inquiries and disputes within the administrative portal to maintain service excellence.",
        icon: Headphones,
    },
    {
        title: "Revenue & Commission Tracking",
        desc: "Oversee gross platform income and precisely determine your profit sharing levels for sustainable growth.",
        icon: Percent,
    },
];

const AdminControl = () => {
    return (
        <section
            className="w-full bg-white py-24"
            style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
        >
            <div className="max-w-[1400px] mx-auto px-4">

                {/* TAG */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 rounded-full px-5 py-1 text-sm text-gray-600">
                        Operational HQ
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[40px] leading-[44px] md:leading-[54px] font-semibold text-[#2f2f2f] mb-5">
                    Exercise Absolute Command Over Your Mobility Enterprise
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-[15px] text-[#5f5f5f] max-w-4xl mx-auto mb-14">
                    Managing a modern transportation ecosystem requires granular visibility.
                    Our administrative suite provides the comprehensive oversight required to
                    steer your business operations from a single, unified interface.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">

                    {/* LEFT IMAGE – HEIGHT MATCHES CARDS */}
                    <div className="relative h-[600px]">
                        <div className="w-full h-full min-h-[600px] rounded-xl  overflow-hidden">
                            <img
                                src={admincontrol}
                                alt="Admin panel control"
                                className="w-full h-[600px] object-contain"
                            />
                        </div>
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                        {adminFeatures.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                    group
                    rounded-[16px]
                    p-5                 /* ⬅ reduced padding */
                    border border-[#d6d6d6]
                    bg-white
                    transition-all duration-300
                    hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-black
                    hover:border-transparent
                    hover:shadow-lg
                  "
                                >
                                    {/* ICON */}
                                    <div
                                        className="
                      w-10 h-10           /* ⬅ smaller icon box */
                      rounded-lg
                      bg-black
                      flex items-center justify-center
                      mb-3
                      transition-all duration-300
                      group-hover:bg-white
                    "
                                    >
                                        <Icon
                                            size={18}          /* ⬅ smaller icon */
                                            className="text-white transition-all duration-300 group-hover:text-black"
                                        />
                                    </div>

                                    {/* TITLE */}
                                    <h3
                                        className="
                      text-[16px]         /* ⬅ smaller title */
                      font-semibold
                      mb-1.5
                      text-[#2f2f2f]
                      transition-colors duration-300
                      group-hover:text-white
                    "
                                    >
                                        {item.title}
                                    </h3>

                                    {/* DESC */}
                                    <p
                                        className="
                      text-[13.5px]       /* ⬅ smaller description */
                      leading-[22px]
                      text-[#5f5f5f]
                      transition-colors duration-300
                      group-hover:text-[#e5e5e5]
                    "
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* BUTTON */}
                <div className="flex justify-center mt-14">
                    <button className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#111] transition">
                        View More Features
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AdminControl;
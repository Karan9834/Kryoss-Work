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
        title: "Dashboard & Analytics",
        desc: "Visual reports & metrics help understand what is happening and react to service issues immediately.",
        icon: BarChart3,
    },
    {
        title: "User & Driver Management",
        desc: "No more manual tracking across systems; you can manage everything from a single place.",
        icon: Users,
    },
    {
        title: "Trip Management & History",
        desc: "Watch trips and access complete historical data in real time with a few taps.",
        icon: Clock,
    },
    {
        title: "Pricing & Fare Rules",
        desc: "Configure how your platform charges by fine-tuning pricing models.",
        icon: DollarSign,
    },
    {
        title: "Role-Based Access Control",
        desc: "Keep sensitive controls restricted, allowing teams to work efficiently within their roles.",
        icon: ShieldCheck,
    },
    {
        title: "Surge Pricing Configuration",
        desc: "Set dynamic surge rules to protect revenue without manual intervention.",
        icon: TrendingUp,
    },
    {
        title: "Ticket Support",
        desc: "All the disputes can be handled inside the admin panel, helping you maintain quality.",
        icon: Headphones,
    },
    {
        title: "Commission & Revenue",
        desc: "Monitor total platform earnings and define how much commission you keep.",
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
                        Admin Control
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[40px] leading-[44px] md:leading-[54px] font-semibold text-[#2f2f2f] mb-5">
                    Get Complete Ride-Hailing Business Control with Admin Panel
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-[15px] text-[#5f5f5f] max-w-4xl mx-auto mb-14">
                    Operating a modern transport business demands complete control. And the
                    Admin panel gives you full control over your business operations from a
                    single place.
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
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
        title: "Driver Registration & Verification",
        desc: "Drivers can register and upload their documents in the driver app to pass the safety checks.",
        icon: UserCheck,
    },
    {
        title: "Availability Toggle (Online / Offline)",
        desc: "Drivers get complete flexibility to choose when to work & when not to work.",
        icon: ToggleLeft,
    },
    {
        title: "Smart Ride Request Allocation",
        desc: "Ride requests are assigned smartly, helping drivers to receive higher-probability bookings.",
        icon: Brain,

    },
    {
        title: "In-App Navigation (Google / Mapbox)",
        desc: "Google or Mapbox helps drivers reach their pickup and drop-off destinations without delays.",
        icon: Navigation,
    },
    {
        title: "Heat Map for High-Demand Areas",
        desc: "Highlighted zones help drivers indicate busy areas, increasing their chances of getting a ride.",
        icon: Map,
    },
    {
        title: "Multi-Vehicle Support",
        desc: "Switching between multiple vehicle categories for drivers becomes easier with the Uber clone app.",
        icon: Car,
    },
    {
        title: "Trip Start & End Controls",
        desc: "Easy-to-use trip control option allows drivers to start and end rides with just one tap.",
        icon: PlayCircle,
    },
    {
        title: "Scheduled Ride Reminder",
        desc: "Drivers receive notifications before the pickup time, helping them plan their availability.",
        icon: Bell,
    },
    {
        title: "Wallet Management",
        desc: "Built-in wallet in app helps drivers track their earnings details to avoid any confusion about payouts.",
        icon: Wallet,
    },
    {
        title: "Ratings & Feedback",
        desc: "Strong ratings help drivers to know what they need to work on, encouraging consistent service.",
        icon: Star,
    },
    {
        title: "In-App Chat with Rider",
        desc: "Drivers can communicate with riders to solve their doubts with the secure in-app chat functionality.",
        icon: MessageSquare,
    },
    {
        title: "Ride History & Earnings",
        desc: "A complete trip history helps drivers to measure their productivity.",
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
                    Functionalities That Help Drivers Work Smarter
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-[16px] text-[#5f5f5f] max-w-4xl mx-auto mb-16">
                    Our AI-powered Uber clone script is developed to support drivers in real-world
                    conditions. Every feature of the app aims to provide everything to drivers for
                    a smooth experience.
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

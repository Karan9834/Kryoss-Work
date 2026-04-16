import React from 'react';

import {
    MapPin,
    TrendingUp,
    Accessibility,
    Bookmark,
    Car,
    Route,
    Headset,
    PhoneCall,
    CreditCard,
    Calculator,
    CalendarClock,
    Wallet,
} from "lucide-react";

const features = [
    {
        title: "Real-Time Courier Monitoring",
        desc: "The moment a request is acknowledged, passengers can observe the detailed progress in a live environment.",
        icon: MapPin,
    },
    {
        title: "Peak Frequency Pricing",
        desc: "Prior to making a reservation, passengers can view adjusted rates during periods of high platform activity.",
        icon: TrendingUp,
    },
    {
        title: "Inclusion Capabilities",
        desc: "Simplified accessibility options empower all platform participants to book transportation without any obstacles.",
        icon: Accessibility,
    },
    {
        title: "Frequently Visited Places",
        desc: "Passengers can store their preferred destinations to accelerate the process for subsequent reservations.",
        icon: Bookmark,
    },
    {
        title: "Diverse Fleet Options",
        desc: "Multiple vehicle categories permit passengers to select a transportation mode that suits their specific needs.",
        icon: Car,
    },
    {
        title: "Multi-Destination Paths",
        desc: "The mobility application supports the addition of various waypoints within a single scheduled journey.",
        icon: Route,
    },
    {
        title: "Integrated Support Dashboard",
        desc: "Submitting and supervising support inquiries is simplified through our feature-dense communication portal.",
        icon: Headset,
    },
    {
        title: "Direct Secure Communication",
        desc: "In-platform messaging and voice calls facilitate seamless interaction between drivers and passengers.",
        icon: PhoneCall,
    },
    {
        title: "Versatile Billing Solutions",
        desc: "The platform integrates numerous payment gateways, significantly improving successful booking rates.",
        icon: CreditCard,
    },
    {
        title: "Pre-Booking Fare Quotes",
        desc: "Before a journey is finalized, passengers can review anticipated costs to maintain budget transparency.",
        icon: Calculator,
    },
    {
        title: "Advanced Journey Scheduling",
        desc: "Reserving transportation for upcoming flights or private events is streamlined via the passenger interface.",
        icon: CalendarClock,
    },
    {
        title: "Built-in Digital Balance",
        desc: "Avoid repetitive payment steps by utilizing the rapid-pay features of the integrated digital wallet system.",
        icon: Wallet,
    },
];

const UberRiderFeatures = () => {
    return (
        <section
            className="w-full bg-white py-24"
            style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
        >
            <div className="max-w-[1400px] mx-auto px-4">

                {/* TOP TAG */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 rounded-full px-5 py-1 text-sm text-gray-600">
                        Rider App Features
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[34px] md:text-[42px] leading-[46px] md:leading-[56px] font-semibold text-[#2f2f2f] mb-6">
                    Optimized Passenger Interface for an Elevated Transit Experience
                </h2>

                {/* SUB TEXT */}
                <p className="text-center text-[16px] text-[#5f5f5f] max-w-3xl mx-auto mb-16">
                    Engineered to make every reservation effortless. Our passenger-centric solution
                    prioritizes secure handling and intuitive flows so users can travel with absolute peace of mind.
                </p>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="
                                  group
                                  border border-[#d6d6d6]
                                  rounded-[20px]
                                  p-6
                                  bg-white
                                  transition-all
                                  duration-300
                                  hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-black
                                  hover:border-transparent">
                                {/* ICON */}
                                <div
                                    className="
                                    w-12 h-12 rounded-xl
                                    bg-black
                                    flex items-center justify-center
                                    mb-4
                                    transition-all
                                    duration-300
                                    group-hover:bg-white">
                                    <Icon
                                        size={22}
                                        className="text-white transition-all duration-300 group-hover:text-black"
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-[18px] font-semibold text-[#2f2f2f] mb-2 transition-colors duration-300 group-hover:text-white">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-[14.5px] leading-[24px] text-[#5f5f5f] transition-colors duration-300 group-hover:text-[#e5e5e5]">
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

export default UberRiderFeatures;
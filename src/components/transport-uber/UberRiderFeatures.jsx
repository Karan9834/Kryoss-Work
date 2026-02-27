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
        title: "Live Driver Tracking",
        desc: "From the moment a driver accepts an order, they can easily track everything in real-time.",
        icon: MapPin,
    },
    {
        title: "Surge Pricing Visibility",
        desc: "Before confirming the booking, users can check surge pricing during high demand for services.",
        icon: TrendingUp,
    },
    {
        title: "Accessibility Options",
        desc: "Easy accessibility facilitates the Uber clone script users to book a ride comfortably without barriers.",
        icon: Accessibility,
    },
    {
        title: "Saved Locations",
        desc: "Customers can save their favourite destination to speed up the repeat bookings process.",
        icon: Bookmark,
    },
    {
        title: "Multiple Vehicle Types",
        desc: "Different vehicle options enable customers to choose an option that matches their expectations.",
        icon: Car,
    },
    {
        title: "Multi-Stop Trips",
        desc: "The Uber clone's customer app allows multiple stops within a single trip.",
        icon: Route,
    },
    {
        title: "Customer Support Ticketing",
        desc: "Raising and managing a customer support ticket becomes easier with the feature-rich platform.",
        icon: Headset,
    },
    {
        title: "In-App Chat & Call",
        desc: "In-app chat and call ensure smooth communication between drivers and customers.",
        icon: PhoneCall,
    },
    {
        title: "Multiple Payment Methods",
        desc: "The app supports various payment options, increasing booking completion rates.",
        icon: CreditCard,
    },
    {
        title: "Fare Estimation Before Booking",
        desc: "Before confirming a ride, customers can check the estimated fare to avoid paying more.",
        icon: Calculator,
    },
    {
        title: "Scheduled Ride Booking",
        desc: "Scheduling a ride for the airport and events becomes easier with an Uber clone customer app.",
        icon: CalendarClock,
    },
    {
        title: "In-App Wallet",
        desc: "No more repeated payment authorization steps, just quick pay with the in-app wallet system.",
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
                    Uber Clone Customer App Features for Better Experience
                </h2>

                {/* SUB TEXT */}
                <p className="text-center text-[16px] text-[#5f5f5f] max-w-3xl mx-auto mb-16">
                    Designed to make ride booking stress-free. Uber clone's customer app focuses on
                    secure transactions so customers can complete trips with confidence.
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
import React from "react";
import {
    LogIn,
    CreditCard,
    Star,
    Bike,
    CheckCircle,
    MapPin,
} from "lucide-react";

const steps = [
    {
        title: "User Signup/Login",
        desc: "Customers and drivers can quickly register using their phone number, email, or social media accounts, ensuring a smooth onboarding process.",
        icon: LogIn,
    },
    {
        title: "Secure Payments",
        desc: "Users can pay seamlessly through multiple options, including cash, wallets, or integrated payment gateways, ensuring a smooth transaction.",
        icon: CreditCard,
    },
    {
        title: "Rate & Review",
        desc: "After completing the ride, both riders and drivers can provide ratings and feedback to help improve service quality and reliability.",
        icon: Star,
    },
    {
        title: "Book a Ride",
        desc: "Riders enter pickup and drop-off locations, get fare estimates, and request a ride instantly with just a few taps.",
        icon: Bike,
    },
    {
        title: "Driver Accepts",
        desc: "Nearby drivers receive instant notifications, review ride details, and accept the request within seconds.",
        icon: CheckCircle,
    },
    {
        title: "Real-Time Tracking",
        desc: "Riders and drivers can track the ride in real-time using GPS navigation, ensuring accurate routes and estimated arrival times.",
        icon: MapPin,
    },
];

const BikeHowItWorks = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#063d2b] to-[#03261b] pt-28 pb-28 mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* TOP BADGE */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/40 text-white text-sm">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        How It Works
                    </div>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[36px] lg:text-[44px] font-bold text-white mb-6">
                    Simple &{" "}
                    <span className="text-[#2ef2b5]">Efficient</span>{" "}
                    Bike Taxi Booking{" "}
                    <span className="text-[#caff3d]">Process</span>
                </h2>

                {/* SUB TEXT */}
                <p className="text-center text-white/80 max-w-3xl mx-auto mb-16 leading-[28px]">
                    Our Bike Ride Booking App ensures a hassle-free experience for both
                    riders and drivers. Here’s how it works in just a few simple steps.
                </p>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="
          group rounded-3xl p-6
          bg-white/10 backdrop-blur-sm
          border border-white/10
          transition-all duration-300
          hover:bg-white
        "
                            >
                                {/* ICON */}
                                <div
                                    className="
            w-12 h-12 rounded-full
            flex items-center justify-center
            bg-white/20 text-white
            mb-5
            transition-all duration-300
            group-hover:bg-[#0b3d2e]
            group-hover:text-white
          "
                                >
                                    <Icon size={22} strokeWidth={1.8} />
                                </div>

                                {/* TITLE */}
                                <h3
                                    className="
            text-lg font-semibold mb-2
            text-white
            transition-colors duration-300
            group-hover:text-[#0b3d2e]
          "
                                >
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p
                                    className="
            text-white/80 text-sm leading-[24px]
            transition-colors duration-300
            group-hover:text-gray-700
          "
                                >
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default BikeHowItWorks;

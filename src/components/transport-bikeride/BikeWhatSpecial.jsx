import React from "react";
import {
    Calculator,
    Navigation,
    CreditCard,
    BarChart3,
    LayoutDashboard,
    BadgeCheck,
} from "lucide-react";

const features = [
    {
        title: "Automated Fare Calculation",
        desc:
            "The Bike Taxi App ensures transparent fare calculation by determining cost based on distance & traffic conditions. It eliminates fare disputes and provides accurate pricing before ride confirmation, with options for surge pricing and discounts.",
        icon: Calculator,
    },
    {
        title: "Advanced GPS Tracking",
        desc:
            "Real-time ride tracking ensures accurate navigation, safety, and efficiency for both riders and drivers.",
        icon: Navigation,
    },
    {
        title: "Multi-Payment Options",
        desc:
            "Offer secure and flexible payment methods, including cash, wallets, and online payments, for user convenience.",
        icon: CreditCard,
    },
    {
        title: "Scalable & High Performance",
        desc:
            "Designed to handle growing user demands with seamless performance across all platforms.",
        icon: BarChart3,
    },
    {
        title: "Robust Admin Panel",
        desc:
            "Manage bookings, monitor rides, track earnings, and control business operations from a single dashboard.",
        icon: LayoutDashboard,
    },
    {
        title: "White-Label Solution",
        desc:
            "Get a fully branded and customizable app tailored to your business needs with quick deployment, advanced feature integration, and seamless user experience.",
        icon: BadgeCheck,
    },
];

const BikeWhatSpecial = () => {
    return (
        <section className="bg-white py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* BADGE */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-sm">
                        <span className="w-2 h-2 rounded-full bg-[#0b9f7a]" />
                        What Makes Bike Taxi App Script Special
                    </div>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[36px] lg:text-[44px] font-bold mb-6">
                    <span className="text-[#0b9f7a]">What Makes Our Bike Taxi App</span>{" "}
                    <span className="text-gray-800">Stand Out?</span>
                </h2>

                {/* SUB TEXT */}
                <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16 leading-[28px]">
                    Our Bike Taxi App Development solution is designed with cutting-edge
                    features to enhance user experience, improve business efficiency, and
                    ensure seamless ride operations. Here’s what makes our app special:
                </p>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="
                  group rounded-3xl p-8 min-h-[220px]
                  bg-[#f3fffb] border border-[#9ecdc0]
                  transition-all duration-300
                  hover:bg-[#0b3d2e] hover:border-[#0b3d2e]
                  hover:-translate-y-1 hover:shadow-lg
                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                    w-14 h-14 rounded-full
                    flex items-center justify-center
                    mb-5
                    bg-[#0b9f7a] text-white
                    transition-all duration-300
                    group-hover:bg-[#06261d]
                  "
                                >
                                    <Icon size={26} strokeWidth={1.8} />
                                </div>

                                {/* TITLE */}
                                <h3
                                    className="
                    text-xl font-semibold mb-3
                    text-[#0b9f7a]
                    transition-colors duration-300
                    group-hover:text-white
                  "
                                >
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p
                                    className="
                    leading-[26px] text-gray-700
                    transition-colors duration-300
                    group-hover:text-white/90
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

export default BikeWhatSpecial;
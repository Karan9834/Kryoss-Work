import React, { useState } from "react";
import {
    LogIn,
    Car,
    MessageCircle,
    Upload,
    Search,
    CalendarX,
    ClipboardList,
    Image,
    Bell,
    ShieldCheck,
    CalendarCheck,
    CarTaxiFront
} from "lucide-react";

const customerFeatures = [
    {
        icon: LogIn,
        title: "Registration/Login",
        desc: "Customers can log in via social media accounts or create a new account using basic information."
    },
    {
        icon: Car,
        title: "Check Vehicle Status",
        desc: "Customers can view vehicle details like fuel level, kilometers run, and existing damages before booking."
    },
    {
        icon: MessageCircle,
        title: "In-App Messaging",
        desc: "Users can directly connect with hosts to ask questions or clarify rental details."
    },
    {
        icon: Upload,
        title: "Upload Documents",
        desc: "Customers can upload identity verification documents such as driver's license or ID card."
    },
    {
        icon: Search,
        title: "Search Vehicle",
        desc: "Find available rental vehicles based on location, date, vehicle type and pricing."
    },
    {
        icon: CalendarX,
        title: "Cancel Booking",
        desc: "Customers can cancel or modify bookings with a transparent cancellation policy."
    }
];

const hostFeatures = [
    {
        icon: ClipboardList,
        title: "Vehicle Listing",
        desc: "Hosts can create and manage vehicle listings including pricing, details and availability."
    },
    {
        icon: Image,
        title: "Photos Upload",
        desc: "Upload high-quality photos of vehicles to maintain transparency for renters."
    },
    {
        icon: CalendarCheck,
        title: "Manage Booking",
        desc: "Hosts can accept or reject booking requests and manage availability calendars."
    },
    {
        icon: Bell,
        title: "Notifications",
        desc: "Get instant alerts about new bookings, cancellations and important updates."
    },
    {
        icon: CarTaxiFront,
        title: "Vehicle Inspection",
        desc: "Document vehicle condition at the start and end of each rental period."
    },
    {
        icon: ShieldCheck,
        title: "Identity Verification",
        desc: "Verify renter identity through document verification and authentication checks."
    }
];

const FeaturesSection = () => {
    const [activeTab, setActiveTab] = useState("customer");

    const features = activeTab === "customer" ? customerFeatures : hostFeatures;

    return (
        <section className="py-24 bg-gradient-to-b from-[#eef5fb] to-[#dceaf7]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    Key Features of Our <span className="text-blue-600">Car Rental App</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Our car rental platform offers seamless booking, secure payments,
                    vehicle management, and communication tools for both customers and hosts.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">
                    <div className="flex bg-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setActiveTab("customer")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === "customer"
                                ? "bg-white text-blue-900"
                                : "text-white"
                                }`}
                        >
                            ● Customer App
                        </button>

                        <button
                            onClick={() => setActiveTab("host")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === "host"
                                ? "bg-white text-blue-900"
                                : "text-white"
                                }`}
                        >
                            ● Host App
                        </button>

                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-14">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-lg transition duration-300"
                            >
                                <div className="flex items-start gap-4">

                                    {/* Icon */}
                                    <div className="p-3 rounded-full border border-blue-200 
group-hover:bg-blue-600 
group-hover:border-blue-600 
transition duration-300">

                                        <Icon
                                            size={26}
                                            className="text-blue-600 group-hover:text-white transition duration-300"
                                        />

                                    </div>

                                    {/* Text */}
                                    <div>

                                        <h3 className="font-semibold text-lg text-gray-800">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                            {feature.desc}
                                        </p>

                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default FeaturesSection;
import React, { useState } from "react";
import {
    ClipboardList,
    Wrench,
    MapPin,
    Clock,
    MessageCircle,
    CreditCard,
    LayoutDashboard,
    Settings,
    Bell,
    Users,
    BarChart3,
    Home
} from "lucide-react";

const serviceBookingFeatures = [
    {
        icon: ClipboardList,
        title: "Easy Service Booking",
        desc: "Customers can quickly book home services like plumbing, electrical repair, cleaning, and more."
    },
    {
        icon: Wrench,
        title: "Multiple Service Categories",
        desc: "Offer a wide range of services such as carpentry, appliance repair, painting, and maintenance."
    },
    {
        icon: MapPin,
        title: "Location-Based Services",
        desc: "Users can find nearby service professionals based on their location."
    },
    {
        icon: Clock,
        title: "Real-Time Booking Tracking",
        desc: "Track service request status from booking to completion in real time."
    },
    {
        icon: MessageCircle,
        title: "Customer & Provider Chat",
        desc: "Customers can communicate directly with service providers through in-app messaging."
    },
    {
        icon: CreditCard,
        title: "Secure Payment Options",
        desc: "Accept payments through cards, digital wallets, and other secure payment methods."
    }
];

const businessManagementFeatures = [
    {
        icon: LayoutDashboard,
        title: "Admin Dashboard",
        desc: "Manage service requests, users, and payments from a centralized admin panel."
    },
    {
        icon: Settings,
        title: "Service Management",
        desc: "Add, update, or manage different service categories and pricing easily."
    },
    {
        icon: Home,
        title: "Multi-Service Management",
        desc: "Operate multiple home service categories within one platform."
    },
    {
        icon: Users,
        title: "Provider & Staff Management",
        desc: "Manage handyman professionals, assign roles, and monitor service providers."
    },
    {
        icon: Bell,
        title: "Instant Notifications",
        desc: "Get real-time alerts for new bookings, service updates, and cancellations."
    },
    {
        icon: BarChart3,
        title: "Business Analytics",
        desc: "Track service performance, revenue reports, and customer insights."
    }
];

const Features = () => {
    const [tab, setTab] = useState("services");

    const features = tab === "services" ? serviceBookingFeatures : businessManagementFeatures;

    return (
        <section className="py-24 bg-[#eef5fb]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    Powerful Features That Make Your{" "}
                    <span className="text-blue-600">Handyman Service App</span> Stand Out
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    From seamless service booking to powerful admin controls,
                    our handyman service platform provides everything you need
                    to manage home services efficiently and grow your business.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("services")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${
                                tab === "services"
                                    ? "bg-white text-blue-900"
                                    : "text-white"
                            }`}
                        >
                            🛠 Service Booking
                        </button>

                        <button
                            onClick={() => setTab("business")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${
                                tab === "business"
                                    ? "bg-white text-blue-900"
                                    : "text-white"
                            }`}
                        >
                            📊 Business Management
                        </button>

                    </div>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-2xl border border-blue-200 bg-white p-6 transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 hover:text-white"
                            >

                                <div className="flex items-start gap-4">

                                    {/* Icon */}
                                    <div className="p-3 rounded-xl border border-blue-200 bg-white group-hover:bg-white/20 group-hover:border-white/30 transition">

                                        <Icon
                                            size={26}
                                            className="text-blue-600 group-hover:text-white transition"
                                        />

                                    </div>

                                    {/* Content */}
                                    <div>

                                        <h3 className="text-lg font-semibold">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 group-hover:text-white/90 mt-2 leading-relaxed">
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

export default Features;
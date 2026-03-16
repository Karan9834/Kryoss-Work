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

const salonBookingFeatures = [
    {
        icon: ClipboardList,
        title: "Easy Appointment Booking",
        desc: "Customers can easily book salon appointments for haircuts, styling, spa, makeup, and other beauty services."
    },
    {
        icon: Wrench,
        title: "Multiple Beauty Services",
        desc: "Offer various salon services like hair styling, skincare treatments, manicure, pedicure, and spa therapies."
    },
    {
        icon: MapPin,
        title: "Nearby Salon Discovery",
        desc: "Users can find nearby salons and beauty professionals based on their location."
    },
    {
        icon: Clock,
        title: "Real-Time Appointment Tracking",
        desc: "Customers can track booking status, appointment schedules, and service completion in real time."
    },
    {
        icon: MessageCircle,
        title: "Customer & Stylist Chat",
        desc: "Customers can communicate directly with salon staff or stylists through in-app messaging."
    },
    {
        icon: CreditCard,
        title: "Secure Online Payments",
        desc: "Allow customers to pay securely using cards, wallets, or other digital payment methods."
    }
];

const salonManagementFeatures = [
    {
        icon: LayoutDashboard,
        title: "Admin Dashboard",
        desc: "Manage appointments, customers, salon services, and payments from a centralized admin panel."
    },
    {
        icon: Settings,
        title: "Service & Pricing Management",
        desc: "Add, edit, and manage different beauty services, packages, and pricing easily."
    },
    {
        icon: Home,
        title: "Multi-Salon Management",
        desc: "Operate and manage multiple salon branches within one platform."
    },
    {
        icon: Users,
        title: "Staff & Stylist Management",
        desc: "Manage salon staff, assign stylists to appointments, and track their schedules."
    },
    {
        icon: Bell,
        title: "Instant Appointment Notifications",
        desc: "Receive real-time alerts for new bookings, cancellations, and appointment reminders."
    },
    {
        icon: BarChart3,
        title: "Business Reports & Analytics",
        desc: "Analyze revenue, popular services, and customer trends to grow your salon business."
    }
];

const Features = () => {
    const [tab, setTab] = useState("booking");

    const features = tab === "booking" ? salonBookingFeatures : salonManagementFeatures;

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
                    <span className="text-blue-600">Salon Booking System</span> Stand Out
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    From seamless appointment booking to powerful salon management tools,
                    our salon booking platform provides everything you need to manage
                    beauty services efficiently and grow your salon business.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("booking")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${
                                tab === "booking"
                                    ? "bg-white text-blue-900"
                                    : "text-white"
                            }`}
                        >
                            💇 Appointment Booking
                        </button>

                        <button
                            onClick={() => setTab("management")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${
                                tab === "management"
                                    ? "bg-white text-blue-900"
                                    : "text-white"
                            }`}
                        >
                            📊 Salon Management
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
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
    title: "Easy Property Listings",
    desc: "Property owners and agents can easily list residential or commercial properties with detailed descriptions."
},
{
    icon: Home,
    title: "Multiple Property Categories",
    desc: "Support listings for apartments, houses, commercial spaces, plots, and rental properties."
},
{
    icon: MapPin,
    title: "Location-Based Property Search",
    desc: "Users can explore properties based on city, locality, and nearby landmarks."
},
{
    icon: Clock,
    title: "Real-Time Property Updates",
    desc: "Property listings are updated instantly with availability status and price changes."
},
{
    icon: MessageCircle,
    title: "Buyer & Agent Communication",
    desc: "Buyers can directly contact property agents or owners through integrated messaging."
},
{
    icon: CreditCard,
    title: "Secure Booking & Payments",
    desc: "Support secure payments for property bookings, deposits, or premium listings."
}
];

const businessManagementFeatures = [
{
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    desc: "Manage property listings, agents, user accounts, and platform activity from a central dashboard."
},
{
    icon: Settings,
    title: "Property Management",
    desc: "Add, update, approve, or remove property listings easily from the admin panel."
},
{
    icon: Home,
    title: "Multi-Property Management",
    desc: "Manage thousands of property listings across different cities and categories."
},
{
    icon: Users,
    title: "Agent & User Management",
    desc: "Manage property agents, buyers, and sellers with role-based access and profiles."
},
{
    icon: Bell,
    title: "Instant Notifications",
    desc: "Receive alerts for new property listings, inquiries, and booking requests."
},
{
    icon: BarChart3,
    title: "Real Estate Analytics",
    desc: "Track property views, inquiries, user activity, and revenue reports."
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
                    Powerful Features That Make Your {" "}
                    <span className="text-blue-600">Property Listing Portal</span> Stand Out
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                  our property listing platform provides everything you need
to manage real estate listings, connect buyers and sellers,
and grow your property marketplace.
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
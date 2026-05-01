import React, { useState } from "react";
import {
    Facebook,
    Shirt,
    CalendarClock,
    MapPin,
    MessageCircle,
    Wallet,
    Map,
    Package,
    ClipboardList,
    Star,
    Layers,
    Navigation,
} from "lucide-react";

const LaundryFeatures = () => {
    const [activeTab, setActiveTab] = useState("customer");

    const customerFeatures = [
        {
            icon: Facebook,
            title: "Social Login",
            desc: "A customer can create a new account or log in with social accounts like Facebook, Google, or email.",
        },
        {
            icon: Shirt,
            title: "Service Selection",
            desc: "Customers can browse laundry providers and select services based on their requirements.",
        },
        {
            icon: CalendarClock,
            title: "Service Scheduling",
            desc: "Customers can schedule pickup and delivery conveniently.",
        },
        {
            icon: MapPin,
            title: "Track Order Status",
            desc: "Users can track the service provider location and order progress.",
        },
        {
            icon: MessageCircle,
            title: "In-App Live Chat",
            desc: "Customers can communicate with providers directly through chat.",
        },
        {
            icon: Wallet,
            title: "Flexible Payment Option",
            desc: "Multiple payment methods including cash, cards, and wallets.",
        },
    ];

    const providerFeatures = [
        {
            icon: Map,
            title: "Set Service Area",
            desc: "Providers can define their operational service areas.",
        },
        {
            icon: ClipboardList,
            title: "Manage Processing Status",
            desc: "Providers can track laundry processing stages.",
        },
        {
            icon: Package,
            title: "Pickup & Delivery Order",
            desc: "Manage pickup and delivery orders efficiently.",
        },
        {
            icon: Layers,
            title: "Manage Clothes & Categories",
            desc: "Organize laundry items into categories.",
        },
        {
            icon: Navigation,
            title: "Map Navigation",
            desc: "Real-time navigation for pickup and delivery.",
        },
        {
            icon: Star,
            title: "Review & Rating",
            desc: "Providers can review and rate customers after service.",
        },
    ];

    const features = activeTab === "customer" ? customerFeatures : providerFeatures;

    return (
        <section className="py-24 bg-[#e6f3f2]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Capsule */}
                <div className="flex justify-center mb-4">
                    <span className="border border-teal-600 rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold mb-4">
                    Key Features of Our{" "}
                    <span className="text-teal-700">Laundry App Development</span>
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    Our laundry app offers a range of powerful features designed to streamline
                    service booking, management, and delivery.
                </p>

                {/* Toggle Buttons */}
                <div className="flex justify-center mb-16">
                    <div className="bg-teal-700 rounded-full p-2 flex gap-2">

                        <button
                            onClick={() => setActiveTab("customer")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 ${activeTab === "customer"
                                ? "bg-white text-teal-700"
                                : "text-white"
                                }`}
                        >
                            Customer App
                        </button>

                        <button
                            onClick={() => setActiveTab("provider")}
                            className={`px-6 py-2 rounded-full ${activeTab === "provider"
                                ? "bg-white text-teal-700"
                                : "text-white"
                                }`}
                        >
                            Provider App
                        </button>

                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-sm transition border border-transparent hover:border-teal-600"
                            >
                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-50 group-hover:bg-teal-600 transition">
                                        <Icon
                                            size={22}
                                            className="text-teal-600 group-hover:text-white"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.desc}
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

export default LaundryFeatures;
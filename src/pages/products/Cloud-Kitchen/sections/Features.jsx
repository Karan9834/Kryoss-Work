import React, { useState } from "react";
import {
    ClipboardList,
    UtensilsCrossed,
    Package,
    Clock,
    MessageCircle,
    CreditCard,
    LayoutDashboard,
    Settings,
    Bell,
    Users,
    BarChart3,
    Store
} from "lucide-react";

const orderManagementFeatures = [
    {
        icon: ClipboardList,
        title: "Order Aggregation",
        desc: "Collect orders from multiple delivery platforms like Swiggy, Zomato, and direct website orders in one dashboard."
    },
    {
        icon: UtensilsCrossed,
        title: "Kitchen Order Management",
        desc: "Automatically send incoming orders to the kitchen display system for faster food preparation."
    },
    {
        icon: Package,
        title: "Inventory Tracking",
        desc: "Monitor ingredient stock levels and get alerts when items are running low."
    },
    {
        icon: Clock,
        title: "Real-Time Order Tracking",
        desc: "Track order status from preparation to delivery in real time."
    },
    {
        icon: MessageCircle,
        title: "Customer Communication",
        desc: "Notify customers about order updates and delivery status instantly."
    },
    {
        icon: CreditCard,
        title: "Secure Payment Integration",
        desc: "Accept payments through multiple gateways including cards, wallets, and UPI."
    }
];

const businessManagementFeatures = [
    {
        icon: LayoutDashboard,
        title: "Centralized Dashboard",
        desc: "Manage orders, menus, payments, and reports from a single control panel."
    },
    {
        icon: Settings,
        title: "Menu Management",
        desc: "Easily update menu items, prices, and availability across all delivery platforms."
    },
    {
        icon: Store,
        title: "Multi-Brand Management",
        desc: "Run multiple virtual restaurant brands from one cloud kitchen setup."
    },
    {
        icon: Users,
        title: "Staff & Role Management",
        desc: "Assign different roles and permissions for kitchen staff and managers."
    },
    {
        icon: Bell,
        title: "Order Notifications",
        desc: "Receive instant alerts for new orders, cancellations, and delivery updates."
    },
    {
        icon: BarChart3,
        title: "Sales & Performance Analytics",
        desc: "View daily revenue, best-selling items, and performance reports to grow your business."
    }
];

const Features = () => {
    const [tab, setTab] = useState("orders");

    const features = tab === "orders" ? orderManagementFeatures : businessManagementFeatures;

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
                    <span className="text-blue-600">FoodHat</span> Stand Out
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    From seamless order aggregation to advanced analytics,  FoodHat POS system provides all the tools you need to manage
                    delivery-only restaurants efficiently and scale your food
                    business with ease.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("orders")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${
                                tab === "orders"
                                    ? "bg-white text-blue-900"
                                    : "text-white"
                            }`}
                        >
                            🍽 Order Management
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
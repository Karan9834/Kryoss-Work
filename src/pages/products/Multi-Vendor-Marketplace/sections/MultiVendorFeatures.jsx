import React, { useState } from "react";
import {
    Store,
    Package,
    CreditCard,
    BarChart3,
    ShoppingCart,
    ShieldCheck,
    Truck,
    MessageCircle,
    Users,
    Star,
    Settings,
    Wallet
} from "lucide-react";

const vendorFeatures = [
    {
        icon: Store,
        title: "Vendor Storefront",
        desc: "Each vendor receives a dedicated storefront within the marketplace where they can showcase their products, brand identity, and store information. This allows vendors to create a professional online presence and build trust with customers."
    },
    {
        icon: Package,
        title: "Product Management",
        desc: "Vendors can easily add new products, update product details, manage categories, and track inventory levels from a simple dashboard. The system ensures vendors can maintain accurate product listings at all times."
    },
    {
        icon: Wallet,
        title: "Commission Management",
        desc: "The platform automatically calculates commissions for every sale made by vendors. Admins can configure flexible commission rules while vendors get transparent insights into their earnings and payouts."
    },
    {
        icon: BarChart3,
        title: "Sales Analytics",
        desc: "Detailed analytics dashboards allow vendors to track their sales performance, order statistics, revenue trends, and customer engagement to make better business decisions."
    },
    {
        icon: Truck,
        title: "Order Fulfillment",
        desc: "Vendors can manage incoming orders, update shipping status, and coordinate deliveries through an easy-to-use order management system that ensures smooth order fulfillment."
    },
    {
        icon: MessageCircle,
        title: "Vendor Messaging",
        desc: "Integrated messaging tools allow vendors to communicate directly with customers to answer product questions, resolve issues, and provide better customer support."
    }
];

const customerFeatures = [
    {
        icon: ShoppingCart,
        title: "Unified Shopping Cart",
        desc: "Customers can add products from multiple vendors to a single cart and complete checkout in one seamless transaction without switching between different stores."
    },
    {
        icon: CreditCard,
        title: "Secure Payments",
        desc: "Our marketplace integrates trusted payment gateways that support multiple payment options including cards, wallets, and online banking for secure and smooth transactions."
    },
    {
        icon: Users,
        title: "Vendor Discovery",
        desc: "Customers can explore a wide range of vendors, browse their stores, and discover unique products from different sellers within one centralized marketplace."
    },
    {
        icon: Star,
        title: "Ratings & Reviews",
        desc: "Buyers can leave ratings and reviews for products and vendors, helping future customers make informed purchase decisions while encouraging vendors to maintain high quality."
    },
    {
        icon: ShieldCheck,
        title: "Buyer Protection",
        desc: "The platform ensures a safe shopping experience by implementing buyer protection policies, secure payment handling, and reliable dispute resolution mechanisms."
    },
    {
        icon: Settings,
        title: "Order Tracking",
        desc: "Customers can easily track their orders in real time, receive delivery updates, and view order history directly from their account dashboard."
    }
];

const MultiVendorFeatures = () => {
    const [tab, setTab] = useState("vendors");

    const features = tab === "vendors" ? vendorFeatures : customerFeatures;

    return (
        <section className="py-24 bg-[#f8fafc]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● Marketplace Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    Powerful Features for a{" "}
                    <span className="text-orange-500">Multi-Vendor Marketplace</span>
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our multi-vendor platform includes everything needed to manage
                    vendors, products, orders, and customers efficiently while
                    delivering a seamless shopping experience.
                </p>

                {/* Tabs */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-orange-500 rounded-full p-1">

                        <button
                            onClick={() => setTab("vendors")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${tab === "vendors"
                                ? "bg-white text-orange-600"
                                : "text-white"
                                }`}
                        >
                            Vendors
                        </button>

                        <button
                            onClick={() => setTab("customers")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${tab === "customers"
                                ? "bg-white text-orange-600"
                                : "text-white"
                                }`}
                        >
                            Customers
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
                                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-1"
                            >

                                <div className="flex items-start gap-4">

                                    {/* Icon */}
                                    <div className="p-3 rounded-xl bg-orange-100 group-hover:bg-orange-500 transition">

                                        <Icon
                                            size={26}
                                            className="text-orange-500 group-hover:text-white transition"
                                        />

                                    </div>

                                    {/* Text */}
                                    <div>

                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
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

export default MultiVendorFeatures;
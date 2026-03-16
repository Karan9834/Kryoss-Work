import React from "react";
import {
    UserPlus,
    Store,
    Package,
    ShoppingCart,
    CreditCard,
    Truck
} from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Vendor Registration",
        desc: "Vendors create their accounts and register their store on the platform by submitting the required details and verification documents."
    },
    {
        icon: Store,
        title: "Create Storefront",
        desc: "Once approved, vendors can set up their own storefront where they can display their products, branding, and store information."
    },
    {
        icon: Package,
        title: "Add Products",
        desc: "Vendors upload products with descriptions, images, pricing, and inventory details so customers can browse and purchase easily."
    },
    {
        icon: ShoppingCart,
        title: "Customers Place Orders",
        desc: "Customers explore products from multiple vendors, add items to their cart, and complete checkout through a secure payment process."
    },
    {
        icon: CreditCard,
        title: "Secure Payment Processing",
        desc: "The platform securely processes payments and automatically distributes commissions to vendors based on configured rules."
    },
    {
        icon: Truck,
        title: "Order Fulfillment & Delivery",
        desc: "Vendors receive order notifications, prepare shipments, and deliver products to customers while updating order status."
    }
];

const MultiVendorHowItWorks = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-6xl mx-auto px-6">

                {/* Badge */}
                <div className="text-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● How Marketplace Works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    How a <span className="text-orange-500">Multi-Vendor Marketplace</span> Works
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our platform connects vendors and customers through a streamlined
                    marketplace system that simplifies selling, buying, and managing
                    products online.
                </p>

                {/* Timeline */}
                <div className="mt-16 relative border-l-2 border-orange-200">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={index} className="ml-10 mb-12 group">

                                {/* Step Dot */}
                                <div className="absolute -left-5 w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
                                    {index + 1}
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-orange-400 transition">

                                    <div className="flex items-start gap-4">

                                        <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition">
                                            <Icon
                                                size={24}
                                                className="text-orange-500 group-hover:text-white transition"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {step.title}
                                            </h3>

                                            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>

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

export default MultiVendorHowItWorks;
import React from "react";
import { Search, Upload, ShoppingCart, Truck, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Search Medicines",
        desc: "Users search medicines and healthcare products from the pharmacy catalog."
    },
    {
        icon: Upload,
        title: "Upload Prescription",
        desc: "Customers can upload prescriptions for pharmacist verification."
    },
    {
        icon: ShoppingCart,
        title: "Place Order",
        desc: "Add medicines to cart and confirm the order securely."
    },
    {
        icon: Truck,
        title: "Order Processing",
        desc: "Pharmacy verifies prescription and prepares medicines for delivery."
    },
    {
        icon: CheckCircle,
        title: "Doorstep Delivery",
        desc: "Delivery partners deliver medicines directly to the customer's home."
    }
];

const PharmacyDeliveryHowItWorks = () => {
    return (
        <section className="py-24 bg-[#fff1f2]">

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm">
                        Process
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How Pharmacy Delivery Works
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Ordering medicines online is simple and secure with our pharmacy
                        delivery platform.
                    </p>

                </div>

                {/* Step Grid */}
                <div className="grid md:grid-cols-3 gap-10">

                    {steps.slice(0, 3).map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white border border-rose-200 rounded-full px-8 py-6 shadow-md flex items-center gap-4 hover:shadow-xl transition duration-500"
                            >
                                <div className="bg-rose-100 p-3 rounded-full">
                                    <Icon size={22} className="text-rose-600" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-gray-600">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* Bottom Row */}
                <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-3xl mx-auto">

                    {steps.slice(3).map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white border border-rose-200 rounded-full px-8 py-6 shadow-md flex items-center gap-4 hover:shadow-xl transition duration-500"
                            >
                                <div className="bg-rose-100 p-3 rounded-full">
                                    <Icon size={22} className="text-rose-600" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-gray-600">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default PharmacyDeliveryHowItWorks;
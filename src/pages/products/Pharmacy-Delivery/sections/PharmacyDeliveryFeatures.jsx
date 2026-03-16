import React from "react";
import {
    Pill,
    Upload,
    Truck,
    ClipboardList,
    CreditCard,
    MapPin
} from "lucide-react";

const features = [
    {
        icon: Pill,
        title: "Medicine Catalog",
        desc: "Customers can easily browse thousands of medicines, healthcare products, and pharmacy essentials through a structured online catalog."
    },
    {
        icon: Upload,
        title: "Prescription Upload",
        desc: "Users can upload prescriptions directly through the app so pharmacists can verify and process the order safely."
    },
    {
        icon: ClipboardList,
        title: "Pharmacy Order Management",
        desc: "Pharmacy owners can manage medicine inventory, verify prescriptions, and process customer orders through a powerful dashboard."
    },
    {
        icon: Truck,
        title: "Fast Delivery System",
        desc: "Integrated delivery management ensures medicines are delivered quickly to customers’ doorsteps."
    },
    {
        icon: CreditCard,
        title: "Secure Online Payments",
        desc: "Customers can pay securely using multiple payment methods including cards, wallets, or online banking."
    },
    {
        icon: MapPin,
        title: "Real-Time Order Tracking",
        desc: "Users can track their medicine delivery in real time and receive updates about order status."
    }
];

const PharmacyDeliveryFeatures = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm">
                        Platform Features
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Powerful Features for Online Pharmacy Delivery
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our pharmacy delivery solution provides everything needed to
                        manage medicines, prescriptions, and fast home deliveries.
                    </p>
                </div>

                <div className="space-y-10">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="flex gap-6 items-start border-l-4 border-rose-500 pl-6"
                            >
                                <div className="bg-rose-100 p-3 rounded-lg">
                                    <Icon size={24} className="text-rose-600" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        {feature.desc}
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

export default PharmacyDeliveryFeatures;
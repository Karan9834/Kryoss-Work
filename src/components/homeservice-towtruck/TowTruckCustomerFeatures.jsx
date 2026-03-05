import React from "react";
import {
    MapPin,
    CreditCard,
    Truck,
    Car,
    MessageSquare,
    Star,
} from "lucide-react";
import Towtruckcustomerfeatures from "../../assets/homeservice-towtruck-img/Towcustomerfeatures.webp";
const features = [
    {
        icon: MapPin,
        title: "Track Live Location",
        desc: "After booking a towing service, the user can track the towing service provider located within the app.",
    },
    {
        icon: CreditCard,
        title: "Flexible Payment Option",
        desc: "Users can make easy transactions within the app using cards and in-app wallets.",
    },
    {
        icon: Truck,
        title: "Select Tow Vehicle",
        desc: "Customers can choose towing vehicle types depending on their needs.",
    },
    {
        icon: Car,
        title: "Add & Manage Vehicle",
        desc: "Users can add and manage vehicles including model, year, and license plate.",
    },
    {
        icon: MessageSquare,
        title: "In-App Live Chat",
        desc: "Users can easily interact with service providers through the in-app chat.",
    },
    {
        icon: Star,
        title: "Rating & Reviews",
        desc: "After completing the service, users can give ratings and reviews.",
    },
];

const CustomerFeatures = () => {
    return (
        <section className="py-12 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* LABEL */}
                <div className="flex justify-center mb-4">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Customer App Features
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold mb-6">
                    <span className="text-blue-600">Key Features</span> of the Customer App
                </h2>

                <p className="text-center text-gray-600 mx-auto mb-16 max-w-3xl lg:max-w-none lg:whitespace-nowrap">
                    Our Uber for tow trucks app offers a range of powerful features designed to enhance the customer experience.
                </p>


                <div className="grid lg:grid-cols-2 gap-4 items-start">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start lg:-mt-10">
                        <img
                            src={Towtruckcustomerfeatures}
                            alt="Customer App"
                            className="max-w-md w-full scale-90"
                        />
                    </div>


                    {/* RIGHT FEATURES */}
                    <div
                        className="
            max-h-[500px] 
            overflow-y-auto 
            pr-2
            space-y-6
            scrollbar-hide
            "
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {/* Hide scrollbar for webkit */}
                        <style>
                            {`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
                        </style>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="
  group
  flex gap-6 items-start
  border rounded-2xl p-6
  transition-all duration-300
  hover:bg-[#0b2c45]
  hover:border-[#0b2c45]
  cursor-pointer
  "
                                >
                                    {/* ICON */}
                                    <div className="p-3 border rounded-lg transition group-hover:border-white">
                                        <Icon
                                            size={28}
                                            className="text-[#1e5c8a] group-hover:text-white transition"
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 group-hover:text-gray-200 transition">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CustomerFeatures;
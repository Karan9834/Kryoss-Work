import React from "react";
import {
    LogIn,
    ClipboardList,
    Map,
    ToggleLeft,
    Receipt,
    RefreshCw
} from "lucide-react";
import Towtruckdriverfeatures from "../../assets/homeservice-towtruck-img/Towdriverfeatures.webp";
const features = [
    {
        icon: LogIn,
        title: "Easy Login/Signup",
        desc: "Tow truck provider registers with information like name, email, contact no, and password."
    },
    {
        icon: ClipboardList,
        title: "Manage Request",
        desc: "After admin approval the provider receives towing requests and manages them easily."
    },
    {
        icon: Map,
        title: "Map Navigation",
        desc: "Provider can use Google map navigation within the app to find the exact location of a user."
    },
    {
        icon: ToggleLeft,
        title: "Online/Offline",
        desc: "Towing provider can toggle availability ON or OFF depending on their availability."
    },
    {
        icon: Receipt,
        title: "Order Statics",
        desc: "Display a detailed list of all completed service requests including date, time, and location."
    },
    {
        icon: RefreshCw,
        title: "Update Status",
        desc: "Drivers can update service request status like en route, on-site, and job completed."
    }
];

const DriverFeatures = () => {
    return (
        <section className="py-12 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* label */}
                <div className="flex justify-center mb-4">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Driver App Features
                    </span>
                </div>

                {/* heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold mb-6">
                    <span className="text-blue-600">Key Features</span> of the Driver App
                </h2>

                {/* paragraph */}
                <p className="text-center text-gray-600 mx-auto mb-16 lg:whitespace-nowrap">
                    The Uber for tow trucks driver app is built to help tow truck operators manage requests efficiently and provide quick roadside assistance.
                </p>


                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CARDS */}
                    <div className="max-h-[520px] overflow-y-auto space-y-6 scrollbar-hide pr-2"
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
                  flex items-center gap-6
                  border rounded-2xl p-6
                  transition-all duration-300
                  lg:hover:bg-[#0b2c45]
                  lg:hover:text-white
                  cursor-pointer
                  "
                                >
                                    <div className="p-3 border rounded-lg">
                                        <Icon
                                            size={28}
                                            className="text-blue-600 lg:group-hover:text-white transition"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-semibold mb-1">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 lg:group-hover:text-gray-200">
                                            {feature.desc}
                                        </p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={Towtruckdriverfeatures}
                            alt="Driver App"
                            className="max-w-md w-full scale-90"
                        />
                    </div>

                </div>

            </div>

        </section>
    );
}
export default DriverFeatures;
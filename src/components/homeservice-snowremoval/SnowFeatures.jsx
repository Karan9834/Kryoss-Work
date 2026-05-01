import React, { useState } from "react";
import { FaUser, FaPhone, FaStar, FaWallet } from "react-icons/fa";
import Snowfeature1 from "../../assets/homeservice-snow-img/Snowfeature1.webp";
import Snowfeature2 from "../../assets/homeservice-snow-img/Snowfeature2.webp";

const userFeatures = [
    {
        icon: <FaUser />,
        title: "Register",
        desc: "A user can register into the snow app by providing their basic information.",
    },
    {
        icon: <FaUser />,
        title: "View Plower Profile",
        desc: "Users can view provider profile details like name, pricing and ratings.",
    },
    {
        icon: <FaWallet />,
        title: "Payment",
        desc: "Users can pay via wallet, card or cash for snow removal services.",
    },
    {
        icon: <FaUser />,
        title: "Check Provider Availability",
        desc: "Check real-time availability and book services instantly.",
    },
    {
        icon: <FaUser />,
        title: "Manage Profile",
        desc: "Users can update their profile information anytime.",
    },
    {
        icon: <FaPhone />,
        title: "In-app Call",
        desc: "Users can call providers directly inside the app.",
    },
    {
        icon: <FaStar />,
        title: "Rating & Review",
        desc: "Users can review providers after completing services.",
    },
    {
        icon: <FaUser />,
        title: "Order History",
        desc: "Track previous bookings and upcoming service requests.",
    },
];

const providerFeatures = [
    {
        icon: <FaUser />,
        title: "Social Login",
        desc: "Providers can login using Google, Facebook or Email.",
    },
    {
        icon: <FaUser />,
        title: "Package",
        desc: "Providers can add packages and pricing for their services.",
    },
    {
        icon: <FaUser />,
        title: "Manage Request",
        desc: "Accept or reject service requests easily.",
    },
    {
        icon: <FaUser />,
        title: "Manage Portfolio",
        desc: "Showcase work and services to attract more clients.",
    },
    {
        icon: <FaUser />,
        title: "Map Navigation",
        desc: "Navigate to user location using built-in maps.",
    },
    {
        icon: <FaUser />,
        title: "Earning Report",
        desc: "Track earnings from completed jobs.",
    },
    {
        icon: <FaUser />,
        title: "Manage Profile",
        desc: "Update provider profile and service radius.",
    },
    {
        icon: <FaPhone />,
        title: "Chat & Call",
        desc: "Communicate with users directly from the app.",
    },
];

const SnowFeatures = () => {
    const [active, setActive] = useState("user");

    const data = active === "user" ? userFeatures : providerFeatures;
    const centerImage = active === "user" ? Snowfeature1 : Snowfeature2;

    return (
        <section className="py-24 bg-[#f6f6f6]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Key Features
                    </span>

                    <h2 className="text-4xl font-semibold mt-6">
                        <span className="text-sky-500">Key Features</span> of Our User &
                        Provider Apps
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Our Uber Snow Plow Service App Solution comes packed with powerful
                        features for both users and providers.
                    </p>

                    {/* Toggle */}
                    <div className="flex justify-center mt-8">
                        <div className="flex bg-gradient-to-r from-sky-400 to-blue-900 rounded-full p-1">

                            <button
                                onClick={() => setActive("user")}
                                className={`px-6 py-2 rounded-full text-white ${active === "user" ? "bg-sky-500" : ""
                                    }`}
                            >
                                User App
                            </button>

                            <button
                                onClick={() => setActive("provider")}
                                className={`px-6 py-2 rounded-full text-white ${active === "provider" ? "bg-blue-700" : ""
                                    }`}
                            >
                                Provider App
                            </button>

                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-3 gap-10 items-center">

                    {/* LEFT CARDS */}
                    <div className="space-y-6">
                        {data.slice(0, 4).map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:bg-[#0d3c55] hover:text-white transition"
                            >
                                <div className="flex gap-4">
                                    <div className="text-sky-500 text-2xl">{item.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-sm mt-1 opacity-80">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="bg-[#0b2c3b] rounded-3xl p-10 flex justify-center items-center">

                        {active === "user" && (
                            <img
                                src={Snowfeature1}
                                alt="User App"
                                className="max-h-[520px] object-contain"
                            />
                        )}

                        {active === "provider" && (
                            <img
                                src={Snowfeature2}
                                alt="Provider App"
                                className="max-h-[520px] object-contain"
                            />
                        )}

                    </div>

                    {/* RIGHT CARDS */}
                    <div className="space-y-6">
                        {data.slice(4, 8).map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:bg-[#0d3c55] hover:text-white transition"
                            >
                                <div className="flex gap-4">
                                    <div className="text-sky-500 text-2xl">{item.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-sm mt-1 opacity-80">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SnowFeatures;


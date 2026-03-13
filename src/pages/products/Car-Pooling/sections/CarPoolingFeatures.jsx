import React, { useState } from "react";
import {
    CalendarSearch,
    User,
    Armchair,
    Car,
    MessageCircle,
    CalendarX,
    CarFront,
    CalendarClock,
    MapPin,
    Settings,
    UserCheck,
    Bell
} from "lucide-react";

const findRideFeatures = [
    {
        icon: CalendarSearch,
        title: "Search Rides by Location & Date",
        desc: "Find matching rides instantly by entering your route and preferred travel date."
    },
    {
        icon: User,
        title: "View Driver Profile & Ratings",
        desc: "Check driver details, past ratings, and reviews before confirming your booking."
    },
    {
        icon: Armchair,
        title: "Seat Availability Display",
        desc: "See exactly how many seats are left on any ride before you book."
    },
    {
        icon: Car,
        title: "Ride Halts",
        desc: "View all scheduled stops along the route to plan your journey easily."
    },
    {
        icon: MessageCircle,
        title: "In-App Chat with Driver",
        desc: "Connect directly with your driver inside the app without sharing numbers."
    },
    {
        icon: CalendarX,
        title: "Cancel Booking Option",
        desc: "Cancel your ride anytime before the trip begins with a single tap."
    }
];

const publishRideFeatures = [
    {
        icon: CarFront,
        title: "Publish Ride",
        desc: "List your ride in seconds by adding route, date and available seats."
    },
    {
        icon: CalendarClock,
        title: "Ride Rescheduling",
        desc: "Reschedule your published ride anytime without canceling it."
    },
    {
        icon: MapPin,
        title: "Favorite Addresses",
        desc: "Save pickup and drop locations for faster ride publishing."
    },
    {
        icon: Settings,
        title: "Set Ride Preferences",
        desc: "Define preferences like luggage, pets, music or co-traveler rules."
    },
    {
        icon: UserCheck,
        title: "Accept or Reject Booking",
        desc: "Review rider requests and approve or decline them easily."
    },
    {
        icon: Bell,
        title: "Trip Notifications",
        desc: "Get alerts for booking confirmations, reminders and updates."
    }
];

const CarpoolFeatures = () => {
    const [tab, setTab] = useState("find");

    const features = tab === "find" ? findRideFeatures : publishRideFeatures;

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
                    <span className="text-blue-600">Carpooling Clone App</span> Stand Out
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    From seamless ride booking to smart admin controls, every feature
                    inside our carpool platform is designed to deliver a smooth
                    experience for riders and drivers.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("find")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${tab === "find"
                                ? "bg-white text-blue-900"
                                : "text-white"
                                }`}
                        >
                            🚗 Find Ride
                        </button>

                        <button
                            onClick={() => setTab("publish")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${tab === "publish"
                                ? "bg-white text-blue-900"
                                : "text-white"
                                }`}
                        >
                            ➕ Publish Ride
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

export default CarpoolFeatures;
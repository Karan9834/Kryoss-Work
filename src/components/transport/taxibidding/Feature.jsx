import React, { useState } from "react";
import {
  Car,
  DollarSign,
  CheckCircle,
  MapPin,
  User,
  UserPlus,
  Phone,
  Star,
  Shield,
} from "lucide-react";

/* ---------------- PASSENGER FEATURES ---------------- */
const passengerFeatures = [
  {
    icon: Car,
    title: "Book Ride with Own Fare",
    desc: "Customers take control of their budget and book rides at flexible fares.",
  },
  {
    icon: DollarSign,
    title: "Price Negotiations",
    desc: "Negotiate fair prices before confirming the ride.",
  },
  {
    icon: CheckCircle,
    title: "Accept/Reject Offer",
    desc: "Approve or reject ride offers easily.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    desc: "Track ride location and ETA directly in the app.",
  },
  {
    icon: User,
    title: "Check Driver’s Details",
    desc: "Review ratings, vehicle info and credentials.",
  },
  {
    icon: UserPlus,
    title: "Become a Driver",
    desc: "Register and start earning flexibly.",
  },
  {
    icon: Phone,
    title: "In-App Call",
    desc: "Secure communication inside the app.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    desc: "Maintain transparency with feedback system.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    desc: "Multiple safe payment methods supported.",
  },
];

/* ---------------- DRIVER FEATURES ---------------- */
const driverFeatures = [
  {
    icon: Car,
    title: "View Ride Requests",
    desc: "Drivers receive ride requests with full ride details and fare offers.",
  },
  {
    icon: DollarSign,
    title: "Counter Offer",
    desc: "Send counter offers to negotiate better fares.",
  },
  {
    icon: CheckCircle,
    title: "Accept or Decline Rides",
    desc: "Drivers choose rides based on fare and location.",
  },
  {
    icon: MapPin,
    title: "Navigation Support",
    desc: "Built-in navigation to reach pickup and drop locations.",
  },
  {
    icon: User,
    title: "Passenger Details",
    desc: "View passenger information before accepting rides.",
  },
  {
    icon: Star,
    title: "Performance Ratings",
    desc: "Maintain ratings to increase trust and visibility.",
  },
  {
    icon: Phone,
    title: "Direct Communication",
    desc: "Call or message passengers securely inside the app.",
  },
  {
    icon: Shield,
    title: "Secure Earnings",
    desc: "Track earnings and withdraw securely anytime.",
  },
  {
    icon: UserPlus,
    title: "Flexible Work Hours",
    desc: "Work anytime and maximize your income potential.",
  },
];

const StakeholderFeaturesSection = () => {
  const [mode, setMode] = useState("passenger");

  const features =
    mode === "passenger" ? passengerFeatures : driverFeatures;

  return (
    <section
      className="w-full py-14 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://whitelabelfox.com/assets/images/indriver-clone-app/indrive-clone-app-features-bg.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Small Pill */}
        <div className="flex justify-center mb-4 md:mb-6">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium 
                           text-[#5aa114] border border-[#a6c77a] 
                           bg-white/70 backdrop-blur-sm
                           px-3 md:px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-[#5aa114] rounded-full"></span>
            Stakeholder Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-800 mb-3 md:mb-4">
          What Do You Get With an{" "}
          <span className="text-[#5aa114]">
            App Similar to inDriver?
          </span>
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
          Get a powerful set of features designed to enhance ride-hailing and parcel delivery for all stakeholders.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="bg-[#5aa114] rounded-full p-1 flex text-sm md:text-base">

            <button
              onClick={() => setMode("passenger")}
              className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium transition ${
                mode === "passenger"
                  ? "bg-white text-[#5aa114]"
                  : "text-white"
              }`}
            >
              Passenger Mode
            </button>

            <button
              onClick={() => setMode("driver")}
              className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium transition ${
                mode === "driver"
                  ? "bg-white text-[#5aa114]"
                  : "text-white"
              }`}
            >
              Driver Mode
            </button>

          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
  key={index}
  className="
    relative
    bg-[#e9efd9]/60
    backdrop-blur-md
    border border-[#7ca742]/60
    rounded-2xl md:rounded-3xl
    px-5 md:px-6
    pt-12 md:pt-16
    pb-6 md:pb-10
    transition-all duration-500 ease-in-out
    hover:bg-white/60
    hover:backdrop-blur-xl
    hover:-translate-y-2
    hover:shadow-[0_15px_40px_rgba(90,161,20,0.25)]
"
>
                {/* Icon Circle */}
                <div
  className="
    absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2
    w-12 h-12 md:w-16 md:h-16
    bg-gradient-to-br from-[#6dbb1a] to-[#5aa114]
    rounded-full
    flex items-center justify-center
    text-white
    shadow-lg
    transition-all duration-300
    group-hover:scale-110
  "
>
                  <Icon size={18} className="md:w-6 md:h-6" />
                </div>

                <h3 className="text-base md:text-lg font-semibold text-[#5aa114] mb-2 md:mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default StakeholderFeaturesSection;
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
    title: "Propose Custom Trip Rates",
    desc: "Riders manage their travel costs by suggesting price points that fit their budget.",
  },
  {
    icon: DollarSign,
    title: "Interactive Fare Bargaining",
    desc: "Coordinate with drivers to establish mutually beneficial costs before departure.",
  },
  {
    icon: CheckCircle,
    title: "Manage Service Proposals",
    desc: "Easily review and select or decline incoming trip offers with one tap.",
  },
  {
    icon: MapPin,
    title: "Live Trip Monitoring",
    desc: "Observe vehicle movement and estimated arrival times through integrated GPS.",
  },
  {
    icon: User,
    title: "Verify Partner Profiles",
    desc: "Access driver performance history, vehicle data, and verified identification.",
  },
  {
    icon: UserPlus,
    title: "Transition to Driver Role",
    desc: "Join our partner network and begin generating income on your own schedule.",
  },
  {
    icon: Phone,
    title: "Protected In-App Voice",
    desc: "Maintain privacy while communicating directly through our secure platform.",
  },
  {
    icon: Star,
    title: "Feedback Ecosystem",
    desc: "Support community integrity by sharing ratings and detailed service reviews.",
  },
  {
    icon: Shield,
    title: "Encrypted Payment Suite",
    desc: "Complete transactions using various protected digital and card-based options.",
  },
];

/* ---------------- DRIVER FEATURES ---------------- */
const driverFeatures = [
  {
    icon: Car,
    title: "Monitor Incoming Leads",
    desc: "Partners access detailed trip requests including pickup points and user fare offers.",
  },
  {
    icon: DollarSign,
    title: "Submit Custom Counter-Bids",
    desc: "Engage in negotiations by proposing alternative rates to potential riders.",
  },
  {
    icon: CheckCircle,
    title: "Autonomous Trip Selection",
    desc: "Partners retain the right to accept or refuse requests based on profitability.",
  },
  {
    icon: MapPin,
    title: "Integrated Routing Tools",
    desc: "Utilize precise mapping systems to navigate to destinations efficiently.",
  },
  {
    icon: User,
    title: "Review Rider Histories",
    desc: "Check passenger ratings and basic profiles to ensure a safe work environment.",
  },
  {
    icon: Star,
    title: "Quality Performance Metrics",
    desc: "Build professional reputation through high user ratings and service excellence.",
  },
  {
    icon: Phone,
    title: "Direct Partner Support",
    desc: "Connect with passengers or support teams via secure integrated channels.",
  },
  {
    icon: Shield,
    title: "Protected Revenue Portal",
    desc: "Monitor daily earnings and initiate secure transfers to your bank account.",
  },
  {
    icon: UserPlus,
    title: "Self-Managed Schedule",
    desc: "Define your own working hours and optimize your personal productivity.",
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
            Participant Functionalities
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-800 mb-3 md:mb-4">
          Which Specialized Capabilities Does Our{" "}
          <span className="text-[#5aa114]">
            inDrive Replica Offer?
          </span>
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
          Experience a robust suite of tools engineered to optimize transportation and logistics for every user and partner.
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
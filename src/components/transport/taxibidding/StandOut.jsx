import React from "react";
import {
  Smartphone,
  Truck,
  Coins,
  CreditCard,
  Settings,
  MapPin
} from "lucide-react";

const StandOutSection = () => {
  return (
    <section className="w-full bg-[#f6f7f5] py-24 flex justify-center">
      <div className="w-full max-w-7xl px-6">

        {/* Top Pill */}
        <div className="flex justify-center mb-6">
          <span className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-[#6dbb1a]
            border border-[#d8e6bf]
            bg-white
            px-4 py-1.5
            rounded-full
          ">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            Exclusive Features for Market Leadership
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            What Distinguishes Our{" "}
            <span className="text-[#6dbb1a]">
              inDrive Clone Framework?
            </span>
          </h2>

          <p className="text-gray-600 mt-3">
            Our Architecture: A Game-Changing Framework for Mobility and Logistics
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            "Live Navigation",
            "Transparent Pricing",
            "Unified Service Dashboard for Peak Efficiency",
            "Dynamic Analytics"
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 bg-white"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card Component */}
          {[
            {
              icon: <Smartphone size={22} />,
              title: "Unified Interface for All Users",
              desc: "Our inDrive Clone Software integrates passenger and partner functionalities into a single, cohesive experience. Coordinate trips and manage deliveries without switching applications, providing a frictionless journey for every participant."
            },
            {
              icon: <Truck size={22} />,
              title: "Integrated Mobility & Delivery",
              desc: "Expand your service horizon by offering both personal transport and parcel logistics within one environment. From daily commutes to urgent package transfers, users access high-quality, versatile solutions in seconds."
            },
            {
              icon: <Coins size={22} />,
              title: "Dynamic Price Negotiation",
              desc: "Eliminate rigid cost structures with our flexible bidding script. Grant users the autonomy to suggest their own fares, fostering a transparent marketplace that respects both consumer budgets and driver expectations."
            },
            {
              icon: <CreditCard size={22} />,
              title: "Integrated Digital Wallet",
              desc: "Simplify financial interactions through a protected, built-in payment gateway. Whether managing trip costs or delivery fees, our infrastructure supports instant, cashless transactions for maximum convenience."
            },
            {
              icon: <Settings size={22} />,
              title: "Complete Brand Adaptation",
              desc: "Shape the platform to reflect your unique business identity and operational vision. Our framework is fully extensible, allowing for deep customization of features and aesthetics to ensure your brand truly resonates."
            },
            {
              icon: <MapPin size={22} />,
              title: "Precision Live Monitoring",
              desc: "Access minute-by-minute updates on every active trip or shipment with advanced GPS integration. Gain total operational oversight while providing users with the security and reliability they deserve."
            }
          ].map((card, index) => (
            <div
  key={index}
  className="
    relative
    bg-[#f1f3ec]
    border border-[#cfe3a9]
    rounded-[20px]
    p-8
    transition-all
    duration-500
    ease-in-out
    hover:-translate-y-2
    hover:shadow-[0_15px_40px_rgba(109,187,26,0.15)]
    hover:border-[#6dbb1a]
    hover:bg-white/60
    hover:backdrop-blur-md
  "
>
              <div className="flex items-start gap-4">

                {/* Icon Box */}
                <div
  className="
    relative
    w-14 h-14
    rounded-2xl
    flex items-center justify-center
    text-[#6dbb1a]
    bg-gradient-to-br from-white to-[#f4f8ea]
    border border-[#cfe3a9]
    shadow-sm
    transition-all duration-500
    group-hover:shadow-[0_8px_25px_rgba(109,187,26,0.25)]
    group-hover:scale-110
  "
>
  {card.icon}
</div>

                <div>
                  <h3 className="text-lg font-semibold text-[#6dbb1a] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {card.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StandOutSection;
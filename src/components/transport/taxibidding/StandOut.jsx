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
            Add-Ons to Help You Lead!
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            What Makes Our{" "}
            <span className="text-[#6dbb1a]">
              inDriver Clone App
            </span>{" "}
            Stand Out?
          </h2>

          <p className="text-gray-600 mt-3">
            Our Platform: Revolutionary Solution for Taxi and Delivery Domain
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            "Real-Time Tracking",
            "Fare Breakdown",
            "Manage all your services in one place for a cohesive workflow.",
            "Enhanced Reports"
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
              title: "Single App For Driver & Customer",
              desc: "Our inDriver Clone Script connects drivers and customers with a single app. You can manage rides, request trips, and track deliveries effortlessly. Say goodbye to separate apps and enjoy the convenience of a unified platform that simplifies operations for all users."
            },
            {
              icon: <Truck size={22} />,
              title: "Book a Ride & Courier",
              desc: "Go beyond traditional ride-hailing by enabling users to request rides and book courier services, all in one app. Whether you need a ride or want to send a package, you get reliable, efficient, and value-added transportation services, all with a few simple taps."
            },
            {
              icon: <Coins size={22} />,
              title: "Negotiate Prices with Drivers",
              desc: "Negotiate fares freely with our inDriver Clone Script. No more fixed prices! Empower customers to set their own fares, giving them the flexibility to choose options that best suit their budget. It’s all about fair, transparent pricing without the hassle."
            },
            {
              icon: <CreditCard size={22} />,
              title: "In-App Payments",
              desc: "Say goodbye to cash exchanges with our secure in-app payment system. Whether for rides, courier services, or other features, our inDriver Clone Script enables users to make quick and secure payments, making transactions hassle-free."
            },
            {
              icon: <Settings size={22} />,
              title: "100% Customizable",
              desc: "Customize your inDriver Clone Script to suit your brand and business needs. Our solution is 100% customizable, allowing you to tailor the experience and features to your specific requirements, helping you stand out."
            },
            {
              icon: <MapPin size={22} />,
              title: "Real-Time Live Tracking",
              desc: "Track rides & deliveries in real-time with our live tracking feature. Get full visibility into each ride/delivery, ensuring smooth operations & an enhanced user experience from start to finish."
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
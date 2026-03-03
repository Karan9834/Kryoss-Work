import React from "react";
import {
  LayoutDashboard,
  Layers,
  Globe,
  CalendarCheck,
} from "lucide-react";

import monitorImage from "../../assets/Handyman/handymanmonitor.webp";

const features = [
  {
    icon: LayoutDashboard,
    title: "User-Friendly Interfaces",
    desc: "The easy-to-navigate interface helps provide a seamless experience.",
  },
  {
    icon: Layers,
    title: "Multi-Service Categories",
    desc: "Manage diverse services within a single platform.",
  },
  {
    icon: Globe,
    title: "Multi-Language & Currency Support",
    desc: "Expand globally with multi-language and currency support.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Bookings",
    desc: "Enable users to schedule service requests in advance.",
  },
];

const ProviderWebPanel = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-16 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-4 md:mb-6">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm">
            Provider Web Panel
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold mb-4">
          Provider Web Panel Features That Make Our Uber Like{" "}
          <span className="text-yellow-600">Handyman</span>{" "}
          Solution Worth Investing
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 md:mb-16 text-sm md:text-base">
          Our handyman app like Uber comes with functionalities that are essential to provide an exceptional experience.
        </p>

        {/* Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CARDS */}
          <div className="space-y-6 w-full">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-[#f3f3f3]
                    border border-yellow-500
                    rounded-2xl
                    p-5 md:p-6
                    transition-all duration-300
                    hover:shadow-md
                  "
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-yellow-500 flex items-center justify-center text-white shrink-0">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* RIGHT PANEL */}
          <div className="w-full relative">

            <div className="
              bg-yellow-500
              rounded-3xl
              h-[250px] sm:h-[300px] md:h-[380px]
              flex items-center justify-center
              relative
            ">

              <img
                src={monitorImage}
                alt="Provider Panel"
                className="
                  w-[90%]
                  sm:w-[80%]
                  md:w-[600px]
                  object-contain
                  drop-shadow-xl
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProviderWebPanel;
import React from "react";
import {
  ClipboardList,
  CalendarClock,
  CreditCard,
  MapPin,
  Star,
  BarChart3,
} from "lucide-react";

const HomeCleaningProviderAdmin = () => {
  const features = [
    {
      title: "Service Request Management",
      desc: "Easily track and assign service requests to available cleaners in real time.",
      icon: ClipboardList,
    },
    {
      title: "Provider Scheduling",
      desc: "Manage and update cleaner schedules for optimal service delivery and efficiency.",
      icon: CalendarClock,
    },
    {
      title: "Payment Management",
      desc: "Handle secure payments, view earnings, and process payouts for service providers.",
      icon: CreditCard,
    },
    {
      title: "Real-Time Tracking",
      desc: "Monitor provider status and location for timely cleaning delivery.",
      icon: MapPin,
    },
    {
      title: "Ratings & Reviews",
      desc: "View feedback and ratings to maintain high service standards.",
      icon: Star,
    },
    {
      title: "Performance Analytics",
      desc: "Generate reports to track provider performance and optimize operations.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            Provider Admin Web Panel Features
          </div>

          <h3 className="text-lg sm:text-4xl font-bold text-gray-700 mb-6">
            <span className="text-[#1d79c6]">
              Key Features of the Provider Web Panel
            </span>{" "}
            for House Cleaning App
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our Uber for House Cleaning App offers a powerful Provider Admin Web
            Panel that streamlines service management. It ensures smooth
            communication, task assignment, and performance tracking for your
            cleaning professionals.
          </p>

        </div>

        {/* ===== Layout ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/uber-house-cleaning-app/prvider-web-panel-image.webp"
              alt="Provider Admin Panel"
              className="w-full max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
            />
          </div>

          {/* RIGHT SCROLLABLE CARDS */}
          <div className="max-h-[540px] overflow-y-auto pr-3 space-y-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group border rounded-2xl p-6 transition duration-300
                           border-[#55D7FF]
                           hover:bg-gradient-to-r 
                           hover:from-[#009ACA] 
                           hover:to-[#006C8D] 
                           hover:text-white"
                >

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-3">

                    <Icon className="w-12 h-12 text-[#009ACA] group-hover:text-white" />

                    <h4 className="font-semibold text-lg">
                      {item.title}
                    </h4>

                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeCleaningProviderAdmin;
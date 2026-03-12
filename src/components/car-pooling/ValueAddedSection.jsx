import React from "react";
import {
  Smartphone,
  Wallet,
  Globe,
  MessageCircle,
  BarChart4,
  CalendarClock
} from "lucide-react";

const ValueAddedSection = () => {

  const features = [
    {
      icon: Smartphone,
      title: "Single App",
      desc: "A unified app for both drivers and passengers, simplifying the user experience and eliminating the need for multiple apps.",
    },
    {
      icon: Wallet,
      title: "Any Local Payment",
      desc: "Supports a wide range of local payment methods, allowing users to make payments easily and securely in their preferred currency.",
    },
    {
      icon: Globe,
      title: "Multi-Language and Multi-Currency Support",
      desc: "Tailor your app to different regions with multi-language and multi-currency options, offering a global reach.",
    },
    {
      icon: MessageCircle,
      title: "In-App Live Chat",
      desc: "Provides real-time communication between passengers, drivers, and admin.",
    },
    {
      icon: BarChart4,
      title: "Advanced Admin Analytics Dashboard",
      desc: "A powerful dashboard for admins to track performance and manage users easily.",
    },
    {
      icon: CalendarClock,
      title: "Pre-scheduled Rides with Recurring Bookings",
      desc: "Allows passengers to book rides in advance or set up recurring bookings.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-black">

      <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-xs md:text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Value-Added Features
        </div>

        {/* Heading */}
        <h2 className="text-[26px] md:text-[38px] font-semibold mb-4">
          Get Add On Features of Our Carpooling App Script Without Spending a Penny
        </h2>

        <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-12 md:mb-16">
          Offer Something Extra to Your Customers with Exclusive Modern Features
          of the Carpooling Solution
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex gap-4 md:gap-5 p-5 md:p-6 rounded-2xl border border-gray-200 transition duration-300 hover:shadow-lg hover:border-blue-500"
              >

                {/* Icon */}
                <div className="flex-shrink-0">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 transition group-hover:text-blue-600 group-hover:italic">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ValueAddedSection;
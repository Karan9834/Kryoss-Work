import React from "react";

const ValueAddedSection = () => {
  const features = [
    {
      icon: "/value/icon1.png",
      title: "Single App",
      desc: "A unified app for both drivers and passengers, simplifying the user experience and eliminating the need for multiple apps.",
    },
    {
      icon: "/value/icon2.png",
      title: "Any Local Payment",
      desc: "Supports a wide range of local payment methods, allowing users to make payments easily and securely in their preferred currency.",
    },
    {
      icon: "/value/icon3.png",
      title: "Multi-Language and Multi-Currency Support",
      desc: "Tailor your app to different regions with multi-language and multi-currency options, offering a global reach.",
    },
    {
      icon: "/value/icon4.png",
      title: "In-App Live Chat",
      desc: "Provides real-time communication between passengers, drivers, and admin, ensuring quick resolution of issues and seamless support.",
    },
    {
      icon: "/value/icon5.png",
      title: "Advanced Admin Analytics Dashboard",
      desc: "A powerful dashboard for admins to track performance, manage users, and make data-driven decisions with ease.",
    },
    {
      icon: "/value/icon6.png",
      title: "Pre-scheduled Rides with Recurring Bookings",
      desc: "Allows passengers to book rides in advance or set up recurring bookings for convenience and consistency in travel plans.",
    },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Value-Added Features
        </div>

        {/* Heading */}
        <h2 className="text-[38px] font-semibold mb-4">
          Get Add On Features of Our Carpooling App Script Without Spending a Penny
        </h2>

        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
          Offer Something Extra to Your Customers with Exclusive Modern Features of the Carpooling Solution
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">

          {features.map((item, index) => (
            <div
              key={index}
              className="group flex gap-5 p-6 rounded-2xl border border-gray-200 transition duration-300 hover:shadow-lg hover:border-blue-500"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold mb-2 transition group-hover:text-blue-600 group-hover:italic">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ValueAddedSection;
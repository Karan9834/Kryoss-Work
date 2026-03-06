import React, { useState } from "react";

const featuresData = {
  user: {
    image:
      "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/Fox-home-cleaning-customer-app-ui-features-mockup.webp",
    items: [
      { title: "Sign up/Login", desc: "To user home cleaning app, the user can sign up by providing the basic details with name, email, address and contact details." },
      { title: "Payment options", desc: "To pay for cleaner services, a user has a flexible payment option such as cash, credit and in-app wallet." },
      { title: "In-app Wallet", desc: "Customers can make payments via cash or other wallet options and store funds digitally within the app. It offers greater transaction security and eliminates the need for external payment methods." },
      { title: "View Available Provider", desc: "A user can view the list of nearest available providers with details of their name, pricing package, and reviews." },
      { title: "Review & Rating", desc: "After completing the service request, the user gives review and rating to a provider based on their offer service." },
      { title: "Booking per hrs or sqft", desc: "It allows customers to select pricing options based on the exact number of hours or the total square footage of the area to be cleaned, providing extra flexibility and transparency in service bookings." },
    ],
  },
  provider: {
    image:
      "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-app-features-provider-app-image.webp",
    items: [
      { title: "Manage Order Request", desc: "A provider can view the new order request with all details and they have the option to accept or reject order requests." },
      { title: "Map Navigation", desc: "If they have trouble to find the user location, a provider can use google map navigation within the app." },
      { title: "Manage Profile", desc: "A provider can add or manage their profile details such as name, email, contact details, address and profile picture." },
      { title: "Manage Service Time", desc: "It lets customers schedule, modify, and track the duration of their cleaning service by offering great convenience." },
      { title: "Add Package", desc: "A provider add or manage pricing package with details of package name, description, and amount." },
      { title: "Easy Call", desc: "A provider can call the user within the app if they have any query regarding the location or service request." },
    ],
  },
};

const HomeCleaningFeatures = () => {
  const [activeTab, setActiveTab] = useState("user");

  const currentData = featuresData[activeTab];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* ===== Top Content ===== */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 
                          bg-[#eaf4fd] px-4 py-1.5 
                          rounded-full border border-[#b7d4f6] 
                          text-xs sm:text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            Essential Features
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
           <span className="text-[#1d79c6]">Key Features of</span>  Uber for House Cleaning App
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our Uber for House Cleaning App provides essential features for customers, cleaners, and service owners. It simplifies booking, enhances management, and ensures seamless communication.
          </p>
        </div>

        {/* ===== Toggle Buttons ===== */}
        <div className="flex justify-center gap-4 mb-14">
          {["user", "provider"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === type
                  ? "text-white bg-gradient-to-r from-[#009ACA] to-[#006C8D]"
                  : "border border-gray-300 text-gray-700"
              }`}
            >
              {type === "user" ? "User App" : "Provider App"}
            </button>
          ))}
        </div>

        {/* ===== 3 Column Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch ">

          {/* LEFT CARDS */}
          <div className="space-y-6 ">
            {currentData.items.slice(0, 3).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

          {/* CENTER IMAGE (Dynamic) */}
          <div className="flex justify-center ">
            <img
              src={currentData.image}
              alt="App Features"
              className="w-full 
                         max-w-md sm:max-w-lg lg:max-w-xl
                         h-full
                         object-contain
                         rounded-3xl 
                         shadow-xl 
                         transition duration-500"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6">
            {currentData.items.slice(3, 6).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

const FeatureCard = ({ item }) => {
  return (
    <div className="group  
                    rounded-2xl p-5 text-left 
                    transition duration-300 
                    hover:bg-gradient-to-r 
                    hover:from-[#009ACA] 
                    hover:to-[#006C8D] 
                    hover:text-white border-2 border-cyan-200">

      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center 
                        rounded-full 
                        bg-[#55D7FF]/20 
                        text-[#55D7FF] 
                        font-bold text-lg
                        group-hover:bg-white 
                        group-hover:text-[#009ACA]">
          ✓
        </div>

        {/* Text */}
        <div>
          <h4 className="font-semibold mb-1">
            {item.title}
          </h4>
          <p className="text-sm opacity-80 group-hover:opacity-100">
            {item.desc}
          </p>
        </div>

      </div>
    </div>
  );
};

export default HomeCleaningFeatures;
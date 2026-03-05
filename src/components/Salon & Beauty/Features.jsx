import React, { useState } from "react";

const featuresData = {
  user: {
    image:
      "https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-user-app-features-Ui.webp",
    items: [
      { title: "Social Login", desc: "A user can easily signup and login through social media sites like Facebook, Instagram etc." },
      { title: "Live Chat", desc: "After the provider accepts an order request, a user can chat with the provider within the app." },
      { title: "View Available Provider", desc: "A user can view the information of beautician such as name, ratings, offer services, and how far away from their location." },
      { title: "View Provider Portfolio", desc: "Browse stylist profiles, services, and past work before booking." },
      { title: "Book Multiple Packages", desc: "A user can book more than one package service in a single order which provided by the beautician." },
      { title: "Payment Option", desc: "A user has multiple payment options to pay for beauty services such as cash, card, and wallet." },
      { title: "Review & Rating", desc: "A user can give review and rating to beautician after complete the services request." },
            { title: "Order History", desc: "Track past appointments and rebook favorite services easily." },
    ],
  },
  provider: {
    image:
      "https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-Provider-app-features-Ui.webp",
    items: [
        { title: "Add Packages", desc: "The beautician adds the category wise multiple packages with the details of name, price, description of the package." },
      { title: "Manage Request", desc: "A beautician can view the complete details of the request and have an option to accept/reject the requests." },
      { title: "Map Navigation", desc: "After the order accepted, the provider can use Map Navigation within the app to find the user’s location." },
      { title: "Manage Portfolio", desc: "Showcase services, update work samples, and attract more clients." },
      { title: "Manage Document", desc: "A provider can efficiently manage and upload all the necessary documents required for offering beauty services." },
      { title: "Set Service Radius", desc: "A provider can set the service radius to their home location where he/she want to offer their beauty service." },
        { title: "Order History", desc: "A beautician can check the earning history with the total number of completed, canceled and pending order requests." },
          { title: "Review & Rating", desc: "Receive customer feedback to improve services and build credibility." },
    ],
  },
};

const Features = () => {
  const [activeTab, setActiveTab] = useState("user");

  const currentData = featuresData[activeTab];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* ===== Top Content ===== */}
        <div className="max-w-3xl mx-auto mb-12">
         <div className="flex items-center justify-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 w-fit mx-auto border-2">
  <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
 Features
</div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">Key Features </span> of the Customer & Provider Apps
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
           The customer app offers easy booking and service tracking, while the provider app helps beauticians manage appointments and deliver services efficiently, ensuring a seamless experience for both.   </p>
        </div>

        {/* ===== Toggle Buttons ===== */}
        <div className="flex justify-center gap-4 mb-14">
          {["user", "provider"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === type
                  ? "bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-white"
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
          <div className="space-y-10 ">
            {currentData.items.slice(0, 4).map((item, i) => (
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
                         h-150
                         object-contain
                         rounded-3xl 
                         shadow-xl 
                         transition duration-500"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-10">
            {currentData.items.slice(4, 8).map((item, i) => (
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
                    hover:from-[#FF2485] 
                    hover:to-[#C739FF] 
                      
                    hover:text-white border-2 border-[#FF2485]">

      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center 
                        rounded-full 
                        bg-[#C739FF]/20 
                        text-[#FF2485] 
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

export default Features;
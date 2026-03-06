import React, { useState } from "react";

const AppGlance = () => {
  const [activeTab, setActiveTab] = useState("CustomerApp");

  const images = {
    CustomerApp: [
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-user-app-UI-1.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-user-app-UI-2.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-user-app-UI-3.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-user-app-UI-4.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-user-app-UI-5.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-user-app-UI-6.webp",
    ],
    DriverApp: [
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-driver-app-UI-1.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-driver-app-UI-2.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-driver-app-UI-3.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-driver-app-UI-4.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-driver-app-UI-5.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-driver-app-UI-6.webp",
    ],
    StoreApp: [
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-store-app-UI-1.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-store-app-UI-2.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-store-app-UI-3.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-store-app-UI-4.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-store-app-UI-5.webp",
      "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-store-app-UI-6.webp",
    ],
  };

  return (
    <section
      className="py-24 text-white overflow-hidden h-250"
      style={{
        backgroundImage:
          "url(https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-UI-section-BG.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-sm mb-6">
          <span className="w-2.5 h-2.5 bg-[#4A011D] rounded-full"></span>
          Alcohol Delivery At A Glance
        </div>

        {/* Heading */}
        <h2 className="text-[40px] font-semibold mb-10">
          <span className=" bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text">Discover Our Alcohol Delivery</span>{" "}
      App Solutions
        </h2>
        <p>Browse real images of our User App, Driver App, and Store App to see how our Alcohol Delivery App Clone Script creates a seamless experience for all users. Simple, intuitive, and efficient—explore the features today!</p>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-r from-[#921E4B] to-[#4A011D] rounded-full p-1 flex gap-2 backdrop-blur-md mt-10">

            <button
              onClick={() => setActiveTab("CustomerApp")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition  ${
                activeTab === "CustomerApp"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Customer App
            </button>

            <button
              onClick={() => setActiveTab("DriverApp")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "DriverApp"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
           Driver App
            </button>

            <button
              onClick={() => setActiveTab("StoreApp")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "StoreApp"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Store App
            </button>

          </div>
        </div>

        {/* Image Scroll Row */}
        <div className="relative overflow-hidden">

          <div className="flex gap-5 animate-scroll whitespace-nowrap">
            {images[activeTab].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-[250px] inline-block"
              />
            ))}

            {/* duplicate for infinite loop */}
            {images[activeTab].map((img, index) => (
              <img
                key={"dup-" + index}
                src={img}
                alt=""
                className="w-[250px] inline-block"
              />
            ))}
          </div>

        </div>

      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>

    </section>
  );
};

export default AppGlance;



















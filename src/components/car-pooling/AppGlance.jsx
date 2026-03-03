import React, { useState } from "react";

const AppGlance = () => {
  const [activeTab, setActiveTab] = useState("find");

  const images = {
    find: [
      "https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-UI-section-find-ride-UI-3.webp",
      "https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-UI-section-find-ride-UI-5.webp",
      "https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-UI-section-find-ride-UI-2.webp",
      "https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-UI-section-find-ride-UI-4.webp",
      "https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-UI-section-find-ride-UI-1.webp",
      "https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-UI-section-find-ride-UI-6.webp",
    ],
    offer: [
      "/glance/offer1.png",
      "/glance/offer2.png",
      "/glance/offer3.png",
      "/glance/offer4.png",
      "/glance/offer5.png",
      "/glance/offer6.png",
    ],
    menu: [
      "/glance/menu1.png",
      "/glance/menu2.png",
      "/glance/menu3.png",
      "/glance/menu4.png",
      "/glance/menu5.png",
      "/glance/menu6.png",
    ],
  };

  return (
    <section
      className="py-24 text-white overflow-hidden h-230"
      style={{
        backgroundImage:
          "url(https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-UI-section-BG.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-sm mb-6">
          <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
          Carpooling App Script at a Glance
        </div>

        {/* Heading */}
        <h2 className="text-[40px] font-semibold mb-10">
          <span className="text-cyan-400">A Glimpse into Our</span>{" "}
          Carpooling App Script
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/20 rounded-full p-1 flex gap-2 backdrop-blur-md">

            <button
              onClick={() => setActiveTab("find")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "find"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Find Ride
            </button>

            <button
              onClick={() => setActiveTab("offer")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "offer"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Offer Ride
            </button>

            <button
              onClick={() => setActiveTab("menu")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "menu"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              App Menu
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



















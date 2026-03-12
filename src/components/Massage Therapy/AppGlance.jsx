import React, { useState } from "react";

const AppGlance = () => {
  const [activeTab, setActiveTab] = useState("UserApp");

  const images = {
    UserApp: [
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-user-app-UI-1.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-user-app-UI-2.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-user-app-UI-3.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-user-app-UI-4.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-user-app-UI-5.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-user-app-UI-6.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-user-app-UI-7.webp"
    ],
    ProviderApp: [
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-provider-app-UI-1.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-provider-app-UI-2.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-provider-app-UI-3.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-provider-app-UI-4.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-provider-app-UI-5.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-provider-app-UI-6.webp",
      "https://whitelabelfox.com/assets/images/uber-massage-therapy-app/Fox-Massage-Ui-section-provider-app-UI-7.webp"
    ],
  };

  return (
    <section
      className="py-16 md:py-24 text-white overflow-hidden md:h-250"
      style={{
        backgroundImage:
          "url('https://whitelabelfox.com/assets/images/uber-massage-therapy-app/fox-massage-page-ui-section-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-xs md:text-sm mb-6">
          <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
          Get to Know Our Uber for Massage App in a Snap
        </div>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[40px] font-semibold mb-8 md:mb-10">
          <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
            Explore the Key Features of
          </span>{" "}
          Our Uber for Massage Solution
        </h2>

        <p className="text-sm md:text-base max-w-3xl mx-auto">
          Discover the seamless experience our Uber for Massage app offers.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-12 md:mb-16 mt-8 md:mt-10">
          <div className="bg-white/20 rounded-full p-1 flex gap-2 backdrop-blur-md">

            <button
              onClick={() => setActiveTab("UserApp")}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition ${activeTab === "UserApp"
                  ? "bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-white"
                  : "text-white"
                }`}
            >
              User App
            </button>

            <button
              onClick={() => setActiveTab("ProviderApp")}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition ${activeTab === "ProviderApp"
                  ? "bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-white"
                  : "text-white"
                }`}
            >
              Provider App
            </button>

          </div>
        </div>

        {/* Image Scroll Row */}
        <div className="relative overflow-hidden">

          <div className="flex gap-4 md:gap-5 animate-scroll whitespace-nowrap">
            {images[activeTab].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-[180px] md:w-[250px] inline-block"
              />
            ))}

            {images[activeTab].map((img, index) => (
              <img
                key={"dup-" + index}
                src={img}
                alt=""
                className="w-[180px] md:w-[250px] inline-block"
              />
            ))}
          </div>

        </div>

      </div>

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
import React, { useState } from "react";

const AppGlance = () => {
  const [activeTab, setActiveTab] = useState("CustomerApp");

  const images = {
    CustomerApp: [
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-customer-app-ui-1.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-customer-app-ui-2.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-customer-app-ui-3.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-customer-app-ui-4.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-customer-app-ui-5.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-customer-app-ui-6.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-customer-app-ui-7.webp"
    ],
    DriverApp: [
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-driver-app-ui-1.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-driver-app-ui-2.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-driver-app-ui-3.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-driver-app-ui-4.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-driver-app-ui-5.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-driver-app-ui-6.webp",
      "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-driver-app-ui-7.webp"
    ],
  
  };

  return (
    <section
      className="py-24 text-white overflow-hidden h-250 bg-gradient-to-r from-[#00454B] to-[#75dae4]"
      style={{
        // backgroundImage:
        //   "url(https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-ui-bg.webp)",
        // backgroundSize: "cover",
       
        // backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-sm mb-6">
          <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#00454B] to-[#01181A] rounded-full"></span>
          
Our Milk Delivery App in Action
        </div>

        {/* Heading */}
        <h2 className="text-[40px] font-semibold mb-10">
         A Glance at Our  {" "}
         <span className="bg-gradient-to-r from-[#00454B] to-[#01181A] text-transparent bg-clip-text">Milk Delivery App Solution</span>  
        </h2>
        <p>Get a sneak peek at how our on-demand milk delivery app can transform your business. With powerful features for both customers and drivers, our solution ensures a seamless and efficient delivery experience from start to finish.</p>

        {/* Tabs */}
        <div className="flex justify-center mb-16 mt-10">
          <div className="bg-white/20 rounded-full p-1 flex gap-2 backdrop-blur-md">

            <button
              onClick={() => setActiveTab("CustomerApp")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "CustomerApp"
                  ? "bg-gradient-to-r from-[#00454B] to-[#01181A] text-white"
                  : "text-white"
              }`}
            >
             Customer App
            </button>

            <button
              onClick={() => setActiveTab("DriverApp")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "DriverApp"
                  ? "bg-gradient-to-r from-[#00454B] to-[#01181A] text-white"
                  : "text-white"
              }`}
            >
              Driver App
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



















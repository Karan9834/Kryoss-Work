import React from "react";

const features = [
  {
    number: "01",
    title: "User App",
    desc: "The User App allows customers to easily browse and order alcohol from their favorite stores. With a smooth interface, real-time tracking, secure payment options, and quick checkout, your customers will enjoy a seamless delivery experience right at their doorstep.",
    icon1: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    icon2: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
    img: "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-what-we-provide-User-app-UI.webp",
  },
  {
    number: "02",
    title: "Driver App",
    desc: "The Driver App helps delivery drivers receive real-time order requests, track delivery routes, and manage delivery details. Drivers can efficiently navigate through the app, ensuring timely and accurate deliveries while enhancing customer satisfaction.",
    icon1: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png",
    icon2: "https://cdn-icons-png.flaticon.com/512/2920/2920222.png",
    img: "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-what-we-provide-Driver-app-UI.webp",
  },
  {
    number: "03",
    title: "Store App",
    desc: "The Store App provides liquor stores with full control over their inventory and orders. It allows stores to update product details, receive and manage orders, track deliveries, and ensure a streamlined process for fulfilling alcohol deliveries.",
    icon1: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    icon2: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    img: "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-what-we-provide-Store-app-UI.webp",
  },
  {
    number: "04",
    title: "Admin Panel",
    desc: "The Admin Panel is the backbone of your alcohol delivery business, giving you control. Admins can manage users, drivers, payments, and more. Detailed reports and analytics enable you to track performance and make data-driven decisions to grow your business.",
    icon1: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    icon2: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    img: "https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-what-we-provide-Admin-panel-UI.webp",
  },
];

const WhatWeProvide = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-6">
          <span className="px-4 py-1.5 rounded-full text-sm bg-gray-100">
            What We Provide
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Comprehensive Features of Our{" "}
          <span className="bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text">Alcohol Delivery App Solution</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Our Alcohol Delivery App Clone Script is a complete, end-to-end
          solution for liquor delivery businesses. It includes everything you
          need to manage your business efficiently, from user orders to delivery
          logistics. Here’s what we offer.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 bg-[#250010] m-4 p-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#481a2f] border border-gray-100 shadow-md rounded-[40px] p-8 flex justify-between items-center hover:shadow-xl transition "
            >

              {/* LEFT CONTENT */}
              <div className="max-w-sm text-white">

                {/* Icons */}
                <div className="flex gap-3 mb-4">
                  <img src={feature.icon1} alt="" className="w-8 h-8" />
                  <img src={feature.icon2} alt="" className="w-8 h-8" />
                </div>

                {/* Number */}
                <p className="text-teal-600 font-bold text-lg mb-1">
                  {feature.number}
                </p>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm">
                  {feature.desc}
                </p>

              </div>

              {/* RIGHT IMAGE */}
              <img
                src={feature.img}
                alt={feature.title}
                className="w-28 h-28 object-contain"
              />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
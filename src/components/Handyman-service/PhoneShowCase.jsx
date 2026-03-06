import React, { useState } from "react";

import c1 from "../../assets/Handyman/handymanphone1.webp";
import c2 from "../../assets/Handyman/handymanphone2.webp";
import c3 from "../../assets/Handyman/handymanphone3.webp";
import c4 from "../../assets/Handyman/handymanphone4.webp";

import p1 from "../../assets/Handyman/handymanphone1.webp";
import p2 from "../../assets/Handyman/handymanphone2.webp";
import p3 from "../../assets/Handyman/handymanphone3.webp";
import p4 from "../../assets/Handyman/handymanphone4.webp";

const AppScreensShowcase = () => {
  const [activeTab, setActiveTab] = useState("customer");

  const customerImages = [c1, c2, c3, c4];
  const providerImages = [p1, p2, p3, p4];

  const images =
    activeTab === "customer" ? customerImages : providerImages;

  return (
    <section className="py-24 bg-[#1f1400] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* 🔶 Yellow Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-400 text-sm">
            Handyman Clone App Screens
          </span>
        </div>

        {/* 🔶 Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10">
          Have a quick peek into how our handyman clone app looks!
        </h2>

        {/* 🔶 Toggle Buttons */}
        <div className="flex justify-center mb-14">
          <div className="flex bg-[#2b1d00] p-1 rounded-full border border-yellow-600">

            <button
              onClick={() => setActiveTab("customer")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "customer"
                  ? "bg-yellow-500 text-black"
                  : "text-yellow-300"
              }`}
            >
              Customer App
            </button>

            <button
              onClick={() => setActiveTab("provider")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "provider"
                  ? "bg-yellow-500 text-black"
                  : "text-yellow-300"
              }`}
            >
              Provider App
            </button>

          </div>
        </div>

        {/* 🔶 Yellow Outline Billboard Box */}
        <div className="relative border border-yellow-600 rounded-[40px] py-16 overflow-hidden">

          {/* ONE Moving Row */}
          <div className="overflow-hidden">
            <div className="flex w-max gap-10 animate-scroll-right">

              {[...images, ...images].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="app screen"
                  className="w-[240px] md:w-[280px] object-contain drop-shadow-2xl"
                />
              ))}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AppScreensShowcase;
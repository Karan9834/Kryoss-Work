import React, { useState } from "react";
import user1 from "../../assets/PestControl/user1.webp";
import user2 from "../../assets/PestControl/user2.webp";
import user3 from "../../assets/PestControl/user3.webp";
import user4 from "../../assets/PestControl/user4.webp";
import user5 from "../../assets/PestControl/user5.webp";
import provider1 from "../../assets/PestControl/provider1.webp";
import provider2 from "../../assets/PestControl/provider2.webp";
import provider3 from "../../assets/PestControl/provider3.webp";
import provider4 from "../../assets/PestControl/provider4.webp";
import provider5 from "../../assets/PestControl/provider5.webp";
const userImages = [
  user1,
  user2,
  user3,
  user4,
  user5,
];

const providerImages = [
  provider1,
  provider2,
  provider3,
  provider4,
  provider5,
];

const AppFeatures = () => {
  const [activeTab, setActiveTab] = useState("user");

  const images = activeTab === "user" ? userImages : providerImages;

  return (
    <section className="py-24 bg-black text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="border border-gray-500 rounded-full px-4 py-1 text-sm">
            Snap Of Uber For Pest Control App
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-6">
          <span className="text-orange-400">Explore Our</span>{" "}
          User & Provider App Features
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
          Discover the powerful features of our User and Provider Apps through
          interactive screens showing booking, tracking and payments.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-14">
          <div className="bg-gray-800 rounded-full p-1 flex gap-2">

            <button
              onClick={() => setActiveTab("user")}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === "user"
                  ? "bg-white text-black"
                  : "text-gray-300"
              }`}
            >
              User App
            </button>

            <button
              onClick={() => setActiveTab("provider")}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === "provider"
                  ? "bg-white text-black"
                  : "text-gray-300"
              }`}
            >
              Provider App
            </button>

          </div>
        </div>

      </div>

      {/* SLIDER */}
      <div className="overflow-hidden">

        <div className="marquee flex gap-10 w-max">

          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="w-[220px] border-4 border-yellow-500 rounded-[28px] overflow-hidden shadow-xl"
            >
              <img
                src={img}
                alt="app"
                className="w-full h-auto"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AppFeatures;
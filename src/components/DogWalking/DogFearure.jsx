import React, { useState } from "react";
import CUSTOMER_IMG_1 from "../../assets/DogWalking/CUSTOMER_IMAGE_1.webp"
import CUSTOMER_IMG_2 from "../../assets/DogWalking/CUSTOMER_IMAGE_2.webp"
import CUSTOMER_IMG_3 from "../../assets/DogWalking/CUSTOMER_IMAGE_3.webp"
import CUSTOMER_IMG_4 from "../../assets/DogWalking/CUSTOMER_IMAGE_4.webp"
import CUSTOMER_IMG_5 from "../../assets/DogWalking/CUSTOMER_IMAGE_5.webp"
import PROVIDER_IMG_1 from "../../assets/DogWalking/PROVIDER_IMAGE_1.webp"
import PROVIDER_IMG_2 from "../../assets/DogWalking/PROVIDER_IMAGE_2.webp"
import PROVIDER_IMG_3 from "../../assets/DogWalking/PROVIDER_IMAGE_3.webp"
import PROVIDER_IMG_4 from "../../assets/DogWalking/PROVIDER_IMAGE_4.webp"
import PROVIDER_IMG_5 from "../../assets/DogWalking/PROVIDER_IMAGE_5.webp"


const DogWalkingFeatures = () => {
  const [activeTab, setActiveTab] = useState("customer");

  const customerImages = [
    CUSTOMER_IMG_1,
    CUSTOMER_IMG_2,
    CUSTOMER_IMG_3,
    CUSTOMER_IMG_4,
    CUSTOMER_IMG_5,
  ];

  const providerImages = [
    PROVIDER_IMG_1,
    PROVIDER_IMG_2,
    PROVIDER_IMG_3,
    PROVIDER_IMG_4,
    PROVIDER_IMG_5,
  ];

  const images = activeTab === "customer" ? customerImages : providerImages;

  return (
    <section className="w-full py-24 bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 border border-white/40 rounded-full px-4 py-1 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Dog Walking App To Watch
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Explore the Features of Our{" "}
          <span className="text-green-400">Dog Walking App</span>
        </h2>

        {/* Description */}
        <p className="text-gray-200 max-w-3xl mx-auto mb-10">
          Discover powerful features designed to connect pet owners with
          trusted dog walkers effortlessly.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/20 rounded-full p-1 flex gap-2">

            <button
              onClick={() => setActiveTab("customer")}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === "customer"
                  ? "bg-white text-green-700"
                  : "text-white"
              }`}
            >
              ● Customer App
            </button>

            <button
              onClick={() => setActiveTab("provider")}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === "provider"
                  ? "bg-white text-green-700"
                  : "text-white"
              }`}
            >
              Provider App
            </button>

          </div>
        </div>

      </div>

      {/* Infinite Scrolling Images */}
      <div className="relative overflow-hidden">

        <div className="flex animate-scroll gap-10 w-max">

          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-[220px] md:w-[260px] object-contain drop-shadow-2xl"
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default DogWalkingFeatures;
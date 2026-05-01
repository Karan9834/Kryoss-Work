import React from "react";

import img1 from "../../../assets/bike.webp";
import img2 from "../../../assets/car.webp";
import img3 from "../../../assets/taxis.webp";
import img4 from "../../../assets/biker.webp";
import img5 from "../../../assets/courier.webp";

const ExploreOpportunities = () => {
  return (
    <section className="w-full bg-[#f7f8f5] py-24 flex justify-center">
      <div className="w-full max-w-7xl px-6">

        {/* Top Pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 text-sm text-[#6dbb1a] border border-[#d8e6bf] bg-white px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            Businesses We Support
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Explore <span className="text-[#6dbb1a]">Diverse</span> Opportunities!
          </h2>
          <p className="text-gray-600 mt-3">
            No matter the services you aim to provide, our clone adapts effortlessly.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LARGE CARD */}
          <PremiumCard
            title="Bike Ride"
            desc="Meet the growing demand for bike ride services with a customer-centric app similar to inDriver."
            img={img1}
            gradient="from-purple-200/30 to-purple-100/10"
          />

          <PremiumCard
            title="Car Rental"
            desc="Launch a car rental service to enable customers to rent vehicles for hours or days."
            img={img2}
            gradient="from-cyan-200/30 to-cyan-100/10"
          />

        </div>

        {/* SMALL GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">

          <PremiumCard
            title="Taxi Ride"
            desc="Provide customers with instant taxi booking by connecting with nearby drivers."
            img={img3}
            gradient="from-orange-200/30 to-orange-100/10"
          />

          <PremiumCard
            title="Bike Rental Service"
            desc="Expand your bike rental service and position yourself strongly in the market."
            img={img4}
            gradient="from-green-200/30 to-green-100/10"
          />

          <PremiumCard
            title="Courier Service"
            desc="Fulfill courier service needs with a reliable delivery solution."
            img={img5}
            gradient="from-pink-200/30 to-pink-100/10"
          />

        </div>

      </div>
    </section>
  );
};

const PremiumCard = ({ title, desc, img, gradient }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        p-8
        backdrop-blur-lg
        bg-white/40
        border border-white/40
        shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        transition-all duration-500
        hover:-translate-y-3
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      "
    >

      {/* Gradient Overlay */}
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-br ${gradient}
          transition-all duration-500
        `}
      ></div>

      {/* Content */}
      <div className="relative z-10">

        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-black transition-all">
          {title}
        </h3>

        <p className="text-gray-600 mb-6">
          {desc}
        </p>

        <div className="flex justify-end">
          <img
            src={img}
            alt={title}
            className="
              w-[220px]
              object-contain
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>

      </div>

      {/* Soft Glow Border */}
      <div className="
        absolute inset-0 rounded-[28px]
        border border-transparent
        group-hover:border-[#6dbb1a]/40
        transition-all duration-500
      "></div>

    </div>
  );
};

export default ExploreOpportunities;
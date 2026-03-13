import React, { useState } from "react";
// import { riderData, driverData } from "../../../data/products/uberFeatures";
import { riderData,driverData } from "../../../../data/products/uberFeatures";

const KeyFeaturesSection = () => {
  const [active, setActive] = useState("rider");

  const data = active === "rider" ? riderData : driverData;

  return (
    // <section className="py-20 bg-gray-50">
        <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">{data.title}</h2>
          <h3 className="text-xl text-gray-700 mt-3">{data.subtitle}</h3>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActive("rider")}
            className={`px-6 py-2 rounded-lg font-semibold ${
              active === "rider"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Rider App
          </button>

          <button
            onClick={() => setActive("driver")}
            className={`px-6 py-2 rounded-lg font-semibold ${
              active === "driver"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Driver App
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {data.features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-7 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            View More Features
          </button>
        </div>

      </div>
    </section>
  );
};

export default KeyFeaturesSection;
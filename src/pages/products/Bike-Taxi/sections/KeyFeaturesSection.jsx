import React, { useState } from "react";
import {
  customerFeatures,
  driverFeatures
} from "../../../../data/products/bikeTaxiFeatures";

const KeyFeaturesSection = () => {

  const [active, setActive] = useState("customer");

  const features =
    active === "customer" ? customerFeatures : driverFeatures;

  const leftFeatures = features.slice(0, 4);
  const rightFeatures = features.slice(4, 8);

  return (
    <section id="features" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Key Features of Customer & Driver Apps
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our Bike Taxi App Development solution comes with powerful
            features for both customers and drivers.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-6 mb-14">

          <button
            onClick={() => setActive("customer")}
            className={`px-6 py-2 rounded-lg font-semibold ${
              active === "customer"
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            Customer App
          </button>

          <button
            onClick={() => setActive("driver")}
            className={`px-6 py-2 rounded-lg font-semibold ${
              active === "driver"
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            Driver App
          </button>

        </div>

        {/* Features Layout */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-6">

            {leftFeatures.map((item, index) => (
              <div key={index} className="p-5 border rounded-xl">

                <h4 className="font-semibold mb-1">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">

            <img
              src={
                active === "customer"
                  ? "http://localhost:5173/src/assets/transport-bikeride-img/customerappmockup.webp"
                  : "http://localhost:5173/src/assets/transport-bikeride-img/deriverappmockup.webp"
              }
              alt="app mockup"
              className="w-[260px]"
            />

          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6">

            {rightFeatures.map((item, index) => (
              <div key={index} className="p-5 border rounded-xl">

                <h4 className="font-semibold mb-1">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default KeyFeaturesSection;
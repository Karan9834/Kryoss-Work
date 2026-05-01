import React from "react";
import campatible from "../../assets/Car-rental/capatible.webp";

const items = [
  "Customer Android + iOS App",
  "Driver Android + iOS App",
  "Super Web Admin Panel",
  "Driver Web Admin Panel",
  "Static Landing Page Website",
  "Billing Account",
  "Dispatcher Account",
];

const CompatibleSection = () => {
  return (
    <section className="bg-gray-100 pt-20">
      {/* ---------- TOP ---------- */}

      <div className="max-w-6xl mx-auto text-center px-4">
        {/* pill */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border rounded-full px-4 py-1 bg-white">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

            <span>What We Provide</span>
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold">
          Car Rental App Script{" "}
          <span className="text-sky-600">
            Compatible with Android, iOS & Web
          </span>
        </h2>

        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Offer a seamless car rental booking experience on Android, iOS, and
          Web with our scalable solution.
        </p>

        {/* DEVICES IMAGE */}

        <div className="relative mt-10 z-10 flex justify-center">
          <img
            src={campatible}
            className="
      w-[280px]
      sm:w-[420px]
      md:w-[600px]
      lg:w-[720px]
      object-contain
    "
          />
        </div>
      </div>

      {/* ---------- DARK BOX ---------- */}

      <div
        className="
          mt-[-70px]
          pt-28
          pb-14
          bg-gradient-to-br
          from-[#02122b]
          via-[#041a3a]
          to-[#02122b]
          rounded-t-[80px]
        "
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="
                  text-white
                  border
                  border-white/20
                  rounded-full
                  py-3
                  px-6
                  text-center
                  backdrop-blur
                  hover:bg-white/10
                  transition
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibleSection;

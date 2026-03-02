import React, { useState } from "react";
import gphone1 from "../../assets/Car-rental/rental-glimpse1.webp"
import gphone2 from "../../assets/Car-rental/rental-glimpse2.webp"
import gphone3 from "../../assets/Car-rental/rental-glimpse3.webp"
import gphone4 from "../../assets/Car-rental/rental-glimpse4.webp"
import gphone5 from "../../assets/Car-rental/rental-glimpse5.webp"
 
const customerImages = [
  gphone1,
  gphone2,
  gphone3,
  gphone4,
  gphone5,
];

const hostImages = [
   gphone1,
  gphone2,
  gphone3,
  gphone4,
  gphone5,
];

const GlimpseSection = () => {
  const [tab, setTab] = useState("customer");

  const images = tab === "customer" ? customerImages : hostImages;

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#061a44] via-[#071f4f] to-[#02122b] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* ---------- TOP PILL ---------- */}

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border border-blue-400 rounded-full px-4 py-1 text-white">

            <span className="w-2.5 h-2.5 bg-blue-400 rounded-full"></span>

            <span className="text-sm">
              Car Rental App Script At A Glance
            </span>

          </div>
        </div>


        {/* ---------- TITLE ---------- */}

        <h2 className="text-center text-2xl md:text-4xl font-bold text-white mb-6">
          A Glimpse into Our Car Rental App{" "}
          <span className="text-sky-400">
            for Customers and Hosts
          </span>
        </h2>



        {/* ---------- TOGGLE ---------- */}

        <div className="flex justify-center mb-12">

          <div className="flex bg-white/10 border border-white/30 rounded-full p-1">

            <button
              onClick={() => setTab("customer")}
              className={`px-5 py-2 rounded-full transition ${
                tab === "customer"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Customer App
            </button>

            <button
              onClick={() => setTab("host")}
              className={`px-5 py-2 rounded-full transition ${
                tab === "host"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Host App
            </button>

          </div>

        </div>



        {/* ---------- PHONES ---------- */}

        <div className="flex gap-8 overflow-x-auto lg:overflow-visible justify-start lg:justify-between items-end">

          {images.map((img, i) => (
            <div
              key={i}
              className="
                min-w-[180px]
                sm:min-w-[220px]
                md:min-w-[240px]
                lg:min-w-[200px]
              "
            >
              <img
                src={img}
                alt=""
                className="w-full object-contain"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default GlimpseSection;
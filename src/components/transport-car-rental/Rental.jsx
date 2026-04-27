import React from "react";
import carr from "../../assets/Car-rental/Carrental.webp"
import biker from "../../assets/Car-rental/bikerental.webp"
import carvanr from "../../assets/Car-rental/carvanrental.webp"
import boatr from "../../assets/Car-rental/boatrental.webp"
import cycler from "../../assets/Car-rental/cyclerental.webp"
import vanr from "../../assets/Car-rental/vanrental.webp"

const cards = [
  {
    title: "Car Rental",
    img: carr,
    bg: "bg-purple-200",
  },
  {
    title: "Bike Rental",
    img: biker,
    bg: "bg-green-200",
  },
  {
    title: "Carvan Rental",
    img: carvanr,
    bg: "bg-slate-200",
  },
  {
    title: "Boat Rental",
    img: boatr,
    bg: "bg-cyan-200",
  },
  {
    title: "Cycle Rental",
    img: cycler,
    bg: "bg-rose-200",
  },
  {
    title: "Van Rental",
    img: vanr,
    bg: "bg-amber-200",
  },
];

const RentalServicesSection = () => {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">

        {/* LEFT TEXT */}
        <div>

          {/* pill */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 bg-white">

              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

              <span>Explore Rental Services</span>

            </div>
          </div>


          <h2 className="text-3xl font-bold mb-4">
            <span className="text-sky-600">
              Your One-Stop Solution
            </span>{" "}
            for All Rental Needs
          </h2>


          <p className="text-gray-600">
            KryossOne Car Rental App Script offers versatile
            solutions for various rental services.
          </p>

        </div>



        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 gap-4">

          {cards.map((item, i) => (
            <div
              key={i}
              className={`
                ${item.bg}
                rounded-2xl
                p-4
                relative
                h-[160px]
                overflow-hidden
                flex
                flex-col
                justify-between
              `}
            >

              <h3 className="font-semibold text-gray-700">
                {item.title}
              </h3>


              <img
                src={item.img}
                className="
                  absolute
                  bottom-0
                  right-0
                  w-32
                  object-contain
                "
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default RentalServicesSection;
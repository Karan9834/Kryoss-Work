import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const steps = [
  {
    title: "1. Login/Signup",
    img: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png",
  },
  {
    title: "2. Search Provider",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
  },
  {
    title: "3. Place Order",
    img: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
  },
  {
    title: "4. Provider Offer Service",
    img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  },
  {
    title: "5. Secure Payment",
    img: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png",
  },
  {
    title: "6. Rating & Review",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
];

const ProcessFlowSection = () => {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto text-center">

        {/* Pill */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm">
            Graphical Representation
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          <span className="text-yellow-600">
            Process Flow of an
          </span>{" "}
          Uber-Like Handyman App
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Check out how a handyman app like Uber works in the graphical flow below to provide a seamless experience to every party involved!
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-14 relative">

          {/* TOP ROW */}
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="relative text-center">

              <div className="bg-yellow-100 border border-yellow-400 rounded-3xl p-10 shadow-sm hover:shadow-md transition">

                <img
                  src={step.img}
                  alt={step.title}
                  className="w-28 h-28 mx-auto mb-6 object-contain"
                />

              </div>

              <h4 className="mt-6 text-lg font-medium">
                {step.title}
              </h4>

              {/* Arrow Right (Desktop only) */}
              {index !== 2 && (
                <ArrowRight
                  className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 text-yellow-500"
                  size={40}
                />
              )}
            </div>
          ))}

          {/* BOTTOM ROW */}
          {steps.slice(3, 6).map((step, index) => (
            <div key={index} className="relative text-center">

              <div className="bg-yellow-100 border border-yellow-400 rounded-3xl p-10 shadow-sm hover:shadow-md transition">

                <img
                  src={step.img}
                  alt={step.title}
                  className="w-28 h-28 mx-auto mb-6 object-contain"
                />

              </div>

              <h4 className="mt-6 text-lg font-medium">
                {step.title}
              </h4>

              {/* Arrow Left (Desktop only) */}
              {index !== 2 && (
                <ArrowLeft
                  className="hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 text-yellow-500"
                  size={40}
                />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProcessFlowSection;
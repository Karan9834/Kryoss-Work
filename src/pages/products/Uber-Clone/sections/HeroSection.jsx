import React from "react";

const HeroSection = () => {

  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src="http://localhost:5173/src/assets/Product-update/uberclone.png"
              alt="Uber Clone App"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6">

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Launch Your Own Uber Clone App
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Build your own ride-hailing platform like Uber with our ready-made
              Uber Clone solution. It includes rider app, driver app, and admin
              dashboard with real-time tracking, secure payments, and smart
              dispatch system.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <button className="px-7 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                Request Demo
              </button>

              <button
                onClick={scrollToFeatures}
                className="px-7 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                View Features
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
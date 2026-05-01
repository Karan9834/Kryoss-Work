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

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Launch Your On-Demand Bike Taxi App with Ease
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Get a fully customized Bike Taxi App for startups and businesses.
              Our Bike Taxi Booking App Development solution helps you offer
              fast, reliable, and cost-effective bike ride services, ensuring
              a seamless experience for both riders and drivers.
            </p>

            {/* Buttons */}
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

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src="http://localhost:5173/src/assets/Product-update/biketaxi.jpeg"
              alt="Bike Taxi App"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
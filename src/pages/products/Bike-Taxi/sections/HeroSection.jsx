import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-yellow-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bike Taxi App Solution
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Launch your own bike taxi platform like Rapido or Uber Moto.
          Our ready-made solution includes passenger app, driver app,
          and admin dashboard.
        </p>

        <button className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg">
          Get Demo
        </button>

      </div>
    </section>
  );
};

export default HeroSection;
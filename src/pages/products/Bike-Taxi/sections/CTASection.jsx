import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Launch Your Bike Taxi App?
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Start your on-demand bike taxi business with a fully customizable
          and scalable solution designed for startups and enterprises.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get a Quote
          </button>

         <a
            href="https://preview.codecanyon.net/item/cab2door-online-taxi-booking-app-template/full_screen_preview/29919332"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            Live Demo
          </a>

        </div>

      </div>

    </section>
  );
};

export default CTASection;
import React from "react";
import cta from "../../../assets/IosApp/cta.webp";

export default function FirebaseCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-900 via-green-800 to-green-700">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}

        <div className="text-white">

          <h2 className="text-4xl font-semibold leading-tight">

            Ready to Grow Your Agency with{" "}
            <span className="text-green-300">
              Expert Firebase Development
            </span>
            ?

          </h2>

          <p className="mt-6 text-green-100 max-w-lg leading-relaxed">

            Expand your service offerings without building a large in-house
            engineering team. Partner with our experienced developers to
            deliver scalable Firebase powered applications that strengthen
            your brand and help your clients succeed.

          </p>


          {/* CTA BUTTON */}

          <button className="mt-8 px-7 py-3 rounded-full bg-white text-green-700 font-medium hover:bg-green-100 transition shadow-lg">

            Start Your Partnership Today

          </button>

        </div>


        {/* RIGHT IMAGE */}

        <div className="relative flex justify-center">

          {/* IMAGE YOU WILL ADD */}

          <div className="relative z-10">
            {/* Replace with your image */}
            <img
              src={cta}
              alt="Firebase Development"
              className="max-h-[420px] object-contain"
            />
          </div>


          {/* BACKGROUND SHAPE */}

          <div className="absolute w-80 h-80 bg-green-500/20 rounded-full blur-3xl"></div>

        </div>

      </div>

    </section>
  );
}
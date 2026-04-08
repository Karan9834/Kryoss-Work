import { Link } from 'react-router-dom';
import React from "react";
import hero from "../../../assets/IosApp/hero.webp";

export default function FirebaseHero() {
  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}

        <div>

          <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">

            Reliable White Label{" "}
            <span className="text-green-500">
              Firebase App Development
            </span>{" "}
            for Modern Digital Platforms

          </h1>


          <p className="text-gray-400 mt-6 max-w-lg">

            Launch scalable applications powered by Firebase. Our
            development team builds secure, real-time backend systems
            that support fast deployments, seamless data syncing,
            and reliable performance for modern mobile and web apps.

          </p>


          {/* CTA BUTTON */}

          <Link to="/company/contact" className="mt-8 bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-full flex items-center gap-2">

            Start Your Free Consultation

            <span className="text-lg">→</span>

          </Link>

        </div>


        {/* RIGHT IMAGE */}

        <div className="flex justify-center">

          {/* Replace this image with your hero image */}

          <img
            src={hero}
            alt="firebase development"
            className="max-h-[420px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}
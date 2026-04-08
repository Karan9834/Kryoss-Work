import { Link } from 'react-router-dom';
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* MAIN CONTAINER */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 rounded-bl">

          {/* LEFT IMAGE */}
          <div className="h-full">
            <img
              src="https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-CTA-2-image.webp"
              alt="Alcohol Delivery"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center p-12">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Alcohol Delivery Business Today
            </h2>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Take the first step toward launching your alcohol delivery
              business with our ready-to-use Alcohol Delivery App Clone Script.
              We provide a fast, efficient solution to get your business online
              in just <span className="font-semibold">5 days.</span>
            </p>

            <Link to="/company/contact" className="w-fit px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#009ACA] to-[#006C8D] hover:opacity-90 transition">
              Get Started Now
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
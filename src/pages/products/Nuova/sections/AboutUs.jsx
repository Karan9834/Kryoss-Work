import React from "react";
import { CheckCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80"
            alt="About Us"
            className="w-full rounded-2xl shadow-xl"
          />

          {/* subtle glow */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About Our{" "}
            <span className="bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Platform
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We build powerful, scalable solutions designed to simplify complex workflows
            and enhance productivity. Our platform combines cutting-edge technology with
            intuitive design to deliver seamless user experiences across industries.
          </p>

          {/* Points */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-orange-500" size={20} />
              <span className="text-gray-700">
                AI-powered automation & smart workflows
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-orange-500" size={20} />
              <span className="text-gray-700">
                Scalable architecture for growing businesses
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-orange-500" size={20} />
              <span className="text-gray-700">
                Seamless integration across platforms
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
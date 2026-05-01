import React from "react";
import flowImage from "../../assets/DatingApp/datingwhy.webp"; 
// replace with your image

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-[#07071f] to-[#020214] text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-6">
          <span className="border border-white/40 px-4 py-1 rounded-full text-sm">
            Why Choose Us
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-4">
          Why Select Our{" "}
          <span className="text-cyan-400">
            Medical Appointment Software?
          </span>
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-14">
          Our bespoke medical software serves as the perfect blueprint to rapidly launch
          your digital health infrastructure effortlessly.
        </p>

        {/* GRAPHIC IMAGE */}
        <div className="flex justify-center mb-16">
          <img
            src={flowImage}
            alt="Why choose our doctor app"
            className="max-w-full md:max-w-4xl"
          />
        </div>

        {/* BULLET POINTS */}
        <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-sm leading-relaxed">

          <ul className="space-y-4 list-disc pl-6">
            <li>
              Deploy your platform officially within a week, avoiding
              extended engineering timeframes.
            </li>
            <li>
              Tailor the platform fully to reflect your unique brand identity perfectly.
            </li>
            <li>
              Engineered prioritizing clarity to guarantee effortless navigation
              across all user profiles.
            </li>
          </ul>

          <ul className="space-y-4 list-disc pl-6">
            <li>
              Constructed utilizing a highly expansive framework guaranteeing security
              and high performance.
            </li>
            <li>
              Instantaneous push alerts concerning upcoming slots and critical updates.
            </li>
            <li>
              Comprehensive multilingual alongside multiple currency integrations tailored for international audiences.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}
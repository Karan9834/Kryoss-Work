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
          Why Choose Our{" "}
          <span className="text-cyan-400">
            Uber For Doctors App?
          </span>
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-14">
          Our Uber For Doctors App is the ideal solution to quickly launch your
          on-demand healthcare platform with ease.
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
              Get your app live in only 5 working days without long
              development cycles.
            </li>
            <li>
              Customize the app to match your branding and business model.
            </li>
            <li>
              Designed with simplicity to ensure seamless navigation
              for doctors and patients.
            </li>
          </ul>

          <ul className="space-y-4 list-disc pl-6">
            <li>
              Built on a robust scalable platform ensuring security
              and high performance.
            </li>
            <li>
              Real-time notifications for appointments and updates.
            </li>
            <li>
              Multi-language and multi-currency support for global users.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}
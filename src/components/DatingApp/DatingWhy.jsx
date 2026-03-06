import React from "react";
import featureFlow from "../../assets/DatingApp/datingwhy.webp";

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#120018] via-[#1c0026] to-[#2a0033] py-16">

      <div className="max-w-7xl mx-auto px-6 text-white">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block border border-white/30 px-4 py-1 rounded-full text-sm mb-4">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why Choose <span className="text-pink-500">Our Tinder Clone</span> App?
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Our Tinder Clone App is the ideal solution for quickly launching
            your dating business with minimal hassle.
          </p>

        </div>

        {/* FLOW IMAGE */}
        <div className="flex justify-center mb-14">

          <img
            src={featureFlow}
            alt="features flow"
            className="w-full max-w-5xl object-contain"
          />

        </div>

        {/* FEATURES LIST */}
        <div className="grid md:grid-cols-2 gap-10 text-white/80 text-sm leading-relaxed">

          <ul className="space-y-4 list-disc pl-6">

            <li>
              Get your Tinder Clone app live on the Play Store and App Store in
              just 5 working days, not weeks.
            </li>

            <li>
              Customize the platform with your own branding, services, and
              audience preferences.
            </li>

            <li>
              Enjoy an intuitive interface that allows users and admins to
              navigate easily and connect seamlessly.
            </li>

          </ul>

          <ul className="space-y-4 list-disc pl-6">

            <li>
              Built to grow with your business, supporting future updates and
              strong security systems.
            </li>

            <li>
              Keep users engaged with real-time notifications for matches,
              chats, and activity updates.
            </li>

            <li>
              Expand globally with built-in multi-language and multi-currency
              support.
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection;
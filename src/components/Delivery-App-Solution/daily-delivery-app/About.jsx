import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-about-us.webp"   // replace with your image
            alt="Milk Delivery App"
            className="w-full rounded-xl shadow-lg bg-[#022D28]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          {/* TOP DIV */}
          <div className="text-center md:text-left bg-[#E1FFE1] p-4">

            <span className="inline-block  text-black border-2 text-sm font-semibold px-4 py-1 rounded-full mb-3">
              About Daily Milk Delivery App
            </span>
{/* linear-gradient(270deg, #003C52 0%, #01B49E 100%); */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Boost Your Milk Delivery Business <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">with Our On-Demand App Solution</span>
            </h2>

          </div>

          {/* SECOND DIV */}
          <div className="text-gray-600 text-lg leading-relaxed bg-[#FFF2E0] p-4">

            <p className="mb-4">
              Take your milk delivery business to the next level with our
              advanced, on-demand milk delivery app. Designed to simplify
              operations, our solution allows you to efficiently manage
              online orders, track deliveries in real-time, and stay
              connected with customers. With its modern features and
              intuitive interface, you can streamline your milk delivery
              process—from order placement to successful delivery.
            </p>

            <p>
              Harness the power of technology to expand your customer base,
              enter new markets, and scale your operations effortlessly.
              Our ready-made app solution offers seamless integration and
              a digital experience that will transform the way you run
              your milk delivery service.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
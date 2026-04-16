import React from "react";

import mainImage from "../../../assets/bidding.webp";

const BiddingSection = () => {
  return (
    <section className="w-full bg-white py-24 flex justify-center">
      <div className="w-full max-w-7xl px-6">

        {/* Top Pill */}
        <div className="flex justify-center mb-6">
          <span className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-[#6dbb1a]
            border border-[#d8e6bf]
            bg-white
            px-4 py-1.5
            rounded-full
          ">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            Bidding Logic of Vyom Drive
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Understanding the{" "}
            <span className="text-[#6dbb1a]">
              Bidding Mechanism
            </span>{" "}
            in Next-Gen Mobility Apps
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Bidding establishes a transparent and collaborative environment where riders and operators 
            bargain over trip costs in real-time, delivering adaptability and equitable rates for 
            everyone involved. This strategic approach transforms standard booking into a 
            highly efficient and balanced marketplace.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-700">

            <ul className="space-y-4 list-disc pl-6">
              <li>
                Riders start the process by suggesting an affordable price point for their specific journey.
              </li>

              <li>
                The platform subsequently transmits this proposal to active drivers within the local radius.
              </li>

              <li>
                Operators can immediately confirm the price or respond with a personalized counter-bid.
              </li>

              <li>
                Upon mutual agreement on the trip value, the reservation is finalized instantly.
              </li>

              <li>
                Should no agreement be reached or if the timer runs out, 
                the request is closed automatically.
              </li>
            </ul>

            <p className="mt-6">
              This interactive framework facilitates competitive pricing for users while
              empowering drivers to maximize their daily revenue.
            </p>

          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative flex justify-center">

            {/* Main Image */}
            <img
              src={mainImage}
              alt="Bidding Flow"
              className="rounded-2xl shadow-lg w-[350px] md:w-[420px] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default BiddingSection;
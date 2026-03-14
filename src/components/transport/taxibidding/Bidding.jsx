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
            Bidding Flow of inDrive Clone
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            How Does{" "}
            <span className="text-[#6dbb1a]">
              Bidding Work
            </span>{" "}
            in Online Taxi Booking App?
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Bidding introduces a dynamic and interactive process where customers and drivers
            negotiate fares in real-time, offering flexibility and fair pricing for both parties.
            Through this innovative algorithm, the online taxi booking experience becomes
            not only more efficient but also more equitable.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-700">

            <ul className="space-y-4 list-disc pl-6">
              <li>
                Customers initiate the bidding process by entering their desired fare for the ride.
              </li>

              <li>
                The app then matches this bid with available drivers in the vicinity.
              </li>

              <li>
                Drivers have the option to either accept or counter the offer.
              </li>

              <li>
                If both parties agree on the fare, the booking proceeds.
              </li>

              <li>
                In case of disagreement or no response within a specified time frame,
                the bid is automatically declined or expired.
              </li>
            </ul>

            <p className="mt-6">
              This dynamic bidding model ensures fair pricing for customers while
              allowing drivers to optimize their earnings.
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
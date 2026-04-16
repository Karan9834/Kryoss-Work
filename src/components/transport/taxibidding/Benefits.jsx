import React from "react";

import mainImage from "../../../assets/benefits.webp";
import bookingCard from "../../../assets/float1.webp";
import priceCard from "../../../assets/float2.webp";

const CustomerBenefitsSection = () => {
  return (
    <section className="w-full bg-[#f7f8f5] py-24 flex justify-center overflow-hidden">
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
            User Advantages
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            In what ways does our{" "}
            <span className="text-[#6dbb1a]">
              inDrive Replica add value
            </span>{" "}
            for your riders?
          </h2>

          <p className="text-gray-600 mt-4">
            Empowering Users with Fare Autonomy and Personalized Travel Preferences
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT CONTENT */}
          <div className="text-gray-700 space-y-6 leading-relaxed">

            <p>
              While traditional ride-hailing platforms often impose surge pricing during
              peak intervals or high-demand cycles, our inDrive-inspired application 
              offers a distinctive edge: users maintain complete influence over costs 
              and can propose their own rates for any journey.
            </p>

            <p>
              This innovative feature returns decision-making authority to the user.
              Both riders and partners negotiate values that align with individual
              budgets, ensuring that transportation costs remain predictable and fair.
            </p>

            <p>
              Additionally, travelers can advocate for prices that suit their financial 
              comfort, utilizing a bid-selection process to find the most appropriate 
              service level for their current needs.
            </p>

            <p>
              This fosters a culture of transparency and mutual cooperation, resulting 
              in a reliable ecosystem that prioritizes user satisfaction and 
              long-term loyalty.
            </p>

          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative flex justify-center">

            {/* Green Rounded Background */}
            <div className="
              absolute
              w-[320px]
              h-[420px]
              bg-[#6dbb1a]
              rounded-[40px]
              right-10
              top-6
              z-0
            "></div>

            {/* Pixel Decorative Squares */}
            <div className="absolute left-0 top-16 grid grid-cols-3 gap-2 opacity-40">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-[#6dbb1a]"></div>
              ))}
            </div>

            {/* Main Person Image */}
            <img
              src={mainImage}
              alt="Customer Using App"
              className="
                relative
                z-10
                w-[350px]
                object-contain
              "
            />

            {/* Floating Bottom Card */}
            <img
              src={bookingCard}
              alt="Booking Card"
              className="
                absolute
                bottom-0
                left-10
                w-[250px]
                rounded-xl
                shadow-xl
                z-20
              "
            />

            {/* Floating Top Card */}
            <img
              src={priceCard}
              alt="Price Card"
              className="
                absolute
                top-0
                right-0
                w-[260px]
                rounded-xl
                shadow-xl
                z-20
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomerBenefitsSection;
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
            Customer Benefits
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            How Does{" "}
            <span className="text-[#6dbb1a]">
              inDriver Clone Benefit
            </span>{" "}
            Your Customers ?
          </h2>

          <p className="text-gray-600 mt-4">
            Involving Customers in Price Control and Let Them Drive as Per Their Requirements
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT CONTENT */}
          <div className="text-gray-700 space-y-6 leading-relaxed">

            <p>
              In the case of other taxi-booking apps, during the whole time of surcharging,
              there is an increase in the fees associated with the peak hours and the periods
              of increased pursuit. However, with the inDriver clone, customers enjoy a
              unique benefit: ultimately, they have the pricing power and can choose their
              price for a ride.
            </p>

            <p>
              This unique functionality restores customer control. Drivers and passengers
              now agree on a price within the user’s budget, and ride prices are no longer
              subjected to uncontrolled surcharges.
            </p>

            <p>
              Furthermore, customers can opt for charges they can afford, and the bid-and-choose
              system lets them select from different fares to match their needs adequately.
            </p>

            <p>
              This induces trust and teamwork among consumers and drivers, leading to
              a predictive transport system that is both customer-focused and satisfying.
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
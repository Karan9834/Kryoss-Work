import React from "react";
import benefitImg from "../../assets/Car-rental/benifits.webp";

const BenefitsSection = () => {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-6xl mx-auto px-4">

        {/* ---------- PILL ---------- */}

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border rounded-full px-4 py-1 bg-white">

            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

            <span>Advantages for Customers</span>

          </div>
        </div>



        {/* ---------- TITLE ---------- */}

        <h2 className="text-center text-2xl md:text-4xl font-bold">
          How Our Car Rental App{" "}
          <span className="text-sky-600">
            Benefits Your Customers
          </span>
        </h2>


        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-3 mb-10">
          Our Car Rental App offers a seamless, flexible experience with easy
          vehicle access, real-time updates, and a user-friendly interface.
        </p>



        {/* ---------- CONTENT ---------- */}

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}

          <div className="text-gray-700 space-y-4 text-sm md:text-base">

            <p>
              Easy Booking Process Customers can quickly browse available
              vehicles, check prices, and book the car of their choice through
              the app with just a few taps.
            </p>

            <p>
              Whether they need a car for an hour or several days, customers can
              choose from a variety of rental durations to suit their needs.
            </p>

            <p>
              With real-time tracking, customers can easily locate the vehicle,
              ensuring a smooth and timely pickup experience.
            </p>

            <p>
              All transactions are processed securely, offering customers peace
              of mind with easy payment options.
            </p>

            <p>
              Customers can view ratings and reviews of vehicles and hosts,
              ensuring they make informed decisions.
            </p>

            <p>
              Keep customers informed with real-time notifications regarding
              booking confirmation, delivery status, and vehicle returns.
            </p>

          </div>



          {/* RIGHT IMAGE */}

          <div className="flex justify-center">

            <img
              src={benefitImg}
              alt=""
              className="
                w-[250px]
                sm:w-[350px]
                md:w-[420px]
                lg:w-[480px]
                object-contain
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default BenefitsSection;
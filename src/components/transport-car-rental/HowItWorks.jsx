import React from "react";
import worksImg from "../../assets/Car-rental/how.webp";

const HowItWorksSection = () => {
  return (
    <section
      className="
        bg-gradient-to-r
        from-[#020f2b]
        via-[#041a3a]
        to-[#020f2b]
        text-white
        py-20
      "
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

          {/* pill */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1">

              <span className="w-2.5 h-2.5 bg-blue-400 rounded-full"></span>

              <span>Car Rental Clone Script Flow</span>

            </div>
          </div>


          {/* title */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            How Our Car Rental{" "}
            <span className="text-sky-400">
              Clone Script Works
            </span>
          </h2>


          <div className="space-y-4 text-white/90 text-sm md:text-base">

            <p>
              Our Car Rental Clone Script delivers a smooth and seamless
              experience for both customers and hosts.
            </p>

            <p>
              Customer Booking: Customers can easily browse vehicles
              and make bookings quickly.
            </p>

            <p>
              Vehicle Pickup: Host gets notification and customer
              collects vehicle.
            </p>

            <p>
              On-Demand Rental: Customers can rent for flexible
              durations.
            </p>

            <p>
              Vehicle Return: Vehicle returned at location and host
              confirms.
            </p>

            <p>
              Payments & Reviews: Secure payments and rating system.
            </p>

          </div>

        </div>



        {/* RIGHT IMAGE */}

        <div className="flex justify-center md:justify-end">

          <img
            src={worksImg}
            alt=""
            className="
              w-[300px]
              sm:w-[450px]
              md:w-[550px]
              lg:w-[650px]
              object-contain
            "
          />

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
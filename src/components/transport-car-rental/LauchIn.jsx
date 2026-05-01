import React from "react";

import launchImg from "../../assets/Car-rental/launchin.webp";
import whyImg from "../../assets/Car-rental/launchin2.webp";

const LaunchIn5DaysSection = () => {
  return (
    <section
      className="
        bg-[#020f2b]
        text-white
        pt-20
        pb-20
        rounded-t-[80px]
      "
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= FIRST PART ================= */}

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={launchImg}
              className="
                w-[300px]
                sm:w-[420px]
                md:w-[520px]
                lg:w-[600px]
                object-contain
              "
            />
          </div>


          {/* RIGHT TEXT */}
          <div>

            {/* pill */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1">

                <span className="w-2.5 h-2.5 bg-blue-400 rounded-full"></span>

                <span>Get Your Digital Footprints</span>

              </div>
            </div>


            {/* title */}
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Launch Your{" "}
              <span className="text-sky-400">
                Car Rental App
              </span>{" "}
              in Just 5 Days
            </h2>


            <div className="space-y-4 text-white/90">

              <p>
                With our Car Rental Script, you can launch a fully
                functional app in just 5 working days.
              </p>

              <p>
                Ready-made system connects owners, renters, admins.
              </p>

              <p>
                Includes booking, tracking, payments & more.
              </p>

            </div>

          </div>

        </div>



        {/* ================= WHY CHOOSE ================= */}

        <div className="mt-20">

          {/* pill */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 border border-white/30 rounded-full px-4 py-1">

              <span className="w-2.5 h-2.5 bg-blue-400 rounded-full"></span>

              <span>Why Choose Us</span>

            </div>
          </div>


          {/* title */}
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">

            Why Choose Our{" "}
            <span className="text-sky-400">
              Car Rental App?
            </span>

          </h2>



          {/* IMAGE */}

          <div className="flex justify-center mb-10">

            <img
              src={whyImg}
              className="
                w-[300px]
                sm:w-[500px]
                md:w-[700px]
                lg:w-[850px]
                object-contain
              "
            />

          </div>



          {/* TEXT */}

          <div
  className="
    grid
    md:grid-cols-2
    gap-10
    text-white
    text-[17px]
    md:text-[18px]
    leading-8
  "
>

  {/* LEFT TEXT */}

  <ul className="space-y-4">

    <li className="flex gap-3">

      <span className="mt-2 w-2.5 h-2.5 bg-sky-400 rounded-full"></span>

      <span>
        Get your car rental business off the ground in no time!
        Launch your app in just 5 working days without waiting months.
      </span>

    </li>


    <li className="flex gap-3">

      <span className="mt-2 w-2.5 h-2.5 bg-sky-400 rounded-full"></span>

      <span>
        Fully customizable script to match your brand,
        services, and business model.
      </span>

    </li>


    <li className="flex gap-3">

      <span className="mt-2 w-2.5 h-2.5 bg-sky-400 rounded-full"></span>

      <span>
        Clean and intuitive interface for customers
        and vehicle owners.
      </span>

    </li>

  </ul>



  {/* RIGHT TEXT */}

  <ul className="space-y-4">

    <li className="flex gap-3">

      <span className="mt-2 w-2.5 h-2.5 bg-sky-400 rounded-full"></span>

      <span>
        Real-time notifications for booking,
        availability and updates.
      </span>

    </li>


    <li className="flex gap-3">

      <span className="mt-2 w-2.5 h-2.5 bg-sky-400 rounded-full"></span>

      <span>
        Manage everything from admin dashboard —
        bookings, users, vehicles & payments.
      </span>

    </li>


    <li className="flex gap-3">

      <span className="mt-2 w-2.5 h-2.5 bg-sky-400 rounded-full"></span>

      <span>
        Built for scalability with strong security
        and smooth performance.
      </span>

    </li>

  </ul>

</div>

        </div>

      </div>
    </section>
  );
};

export default LaunchIn5DaysSection;
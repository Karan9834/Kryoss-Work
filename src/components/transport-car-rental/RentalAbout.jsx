import React from "react";
import aboutImg from "../../assets/Car-rental/rental-about.webp";

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* LEFT IMAGE CARD */}
          <div className="w-full lg:w-[40%]">

            <div className="bg-gradient-to-b from-sky-500 to-blue-900 rounded-3xl overflow-hidden relative h-[420px] flex items-end justify-center">

              {/* IMAGE */}
              <img
                src={aboutImg}
                alt=""
                className="
                  absolute bottom-0
                  w-full
                  h-full
                  object-contain
                "
              />

            </div>

          </div>



          {/* RIGHT TEXT BOX */}
          <div className="w-full lg:w-[60%]">

            <div className="border border-sky-400 rounded-3xl p-6 sm:p-8 bg-white/60 backdrop-blur">

              {/* badge */}
              <div className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-sm mb-4">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                About Car Rental app Script
              </div>


              {/* title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Build a Profitable Car Rental Business with{" "}
                <span className="text-sky-600">
                  Our Advanced Car Rental Script
                </span>
              </h2>


              {/* text */}
              <p className="text-gray-600 mb-4">
                In today’s fast-paced digital world, on-demand car rental apps have
                revolutionized the way people find and book vehicles for their
                transportation needs.
              </p>

              <p className="text-gray-600 mb-4">
                Our Car Rental App Script is designed to connect car owners and
                renters on a single platform, allowing seamless transactions with
                a commission-based revenue model.
              </p>

              <p className="text-gray-600">
                With our Car Rental Clone Script, businesses get a highly
                customizable solution with key features like instant car booking,
                unlimited host registrations, dashboard, and analytics.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;
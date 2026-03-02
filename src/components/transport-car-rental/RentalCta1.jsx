import React from "react";
import carImg from "../../assets/Car-rental/rental-car-2.webp";

const CTASection = () => {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-4">

        <div className="relative flex flex-col lg:flex-row items-center">

          {/* RED BOX */}
          <div
            className="
            w-full
            lg:w-[75%]
            bg-gradient-to-r
            from-red-800
            to-orange-700
            text-white
            rounded-[60px]
            px-8
            sm:px-12
            py-12
            relative
            overflow-hidden
          "
          >

            {/* TEXT */}
            <div className="max-w-xl">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Revolutionize Your Car Rental
                Business? Start Now!
              </h2>

              <p className="text-sm sm:text-base mb-6 text-white/90">
                Launch your business with our powerful Car Rental App
                Development solutions and drive growth with ease.
                Let’s get started today!
              </p>

              <button
                className="
                  border
                  border-white
                  px-6
                  py-2
                  rounded-full
                  hover:bg-white
                  hover:text-black
                  transition
                "
              >
                Get Started Now!
              </button>

            </div>

          </div>



          {/* IMAGE RIGHT */}
          <div
            className="
              w-full
              lg:w-[35%]
              flex
              justify-center
              lg:justify-end
              lg:absolute
              lg:right-0
              lg:bottom-0
            "
          >

            <img
              src={carImg}
              alt=""
              className="
                w-[280px]
                sm:w-[350px]
                md:w-[420px]
                lg:w-[450px]
                object-contain
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;
import React from "react";
import banner from "../../assets/Car-rental/banner.webp"; 

const CTASection = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">

      <div className="max-w-7xl mx-auto">

        {/* box */}

        <div
          className="
            relative
            rounded-[40px]
            overflow-hidden
            px-8
            md:px-16
            py-16
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            bg-gradient-to-r
            from-[#7a003c]
            via-[#8c0ea8]
            to-[#6c2cff]
          "
        >

          {/* LEFT TEXT */}

          <div className="text-white max-w-xl z-10">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">

              Take Your Car Rental Service  
              <br />
              to the Next Level!

            </h2>


            <p className="text-white/90 mb-6">

              Ready to expand? Start your journey today with our powerful
              car rental app. Boost efficiency and grow your business
              with ease.

            </p>


            <button
              className="
                border
                border-white
                px-6
                py-3
                rounded-full
                hover:bg-white
                hover:text-black
                transition
              "
            >
              Get a Demo
            </button>

          </div>



          {/* IMAGE RIGHT */}

          <div
            className="
              relative
              mt-10
              md:mt-0
              md:absolute
              md:right-0
              md:bottom-0
            "
          >

            <img
              src={banner}
              className="
                w-[300px]
                md:w-[550px]
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
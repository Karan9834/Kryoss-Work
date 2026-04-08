import { Link } from 'react-router-dom';
import React from "react";
import ctaImg from "../../assets/Car-rental/cta-2-image.webp"; 

const CreateAppCTA = () => {
  return (
    <section className="bg-gray-100 py-20">

      <div className="relative">

        {/* GREEN BOX */}

        <div
          className="
            bg-gradient-to-r
            from-[#063d1e]
            via-[#075c2c]
            to-[#063d1e]
            text-white
            py-16
            px-6
            md:px-16
            clip-path
          "
          style={{
            clipPath:
              "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
          }}
        >

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

            {/* LEFT */}

            <div>

              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Create Your On-Demand Car Rental App Now!
              </h2>

              <p className="mb-6 text-white/90">
                With our on-demand car rental app development solution,
                take your service to the next level. Start today and
                reach new heights!
              </p>


              <Link to="/company/contact"
                className="
                  border
                  border-white
                  rounded-full
                  px-6
                  py-2
                  hover:bg-white
                  hover:text-black
                  transition
                "
              >
                Request a Consultation
              </Link>

            </div>



            {/* RIGHT IMAGE */}

            <div className="flex justify-center md:justify-end">

              <img
                src={ctaImg}
                alt=""
                className="
                  w-[250px]
                  sm:w-[350px]
                  md:w-[450px]
                  lg:w-[520px]
                  object-contain
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CreateAppCTA;
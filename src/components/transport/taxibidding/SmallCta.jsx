import { Link } from 'react-router-dom';
import React from "react";
import taxi3 from "../../../assets/taxibidding2.webp"; // replace later

const SmallCtaSection = () => {
  return (
    <section className="w-full bg-[#f5f6f7] py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div
          className="
          relative overflow-hidden
          rounded-[30px] md:rounded-[70px]
          bg-gradient-to-r from-[#1b7c91] to-[#155e73]
          px-6 md:px-16
          py-10 md:py-14
          flex flex-col md:flex-row
          items-center
          gap-10
        "
        >
          {/* LEFT CONTENT */}
          <div className="text-white w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-snug mb-5">
              Deploy your Custom inDrive Replica in Record Time!
            </h2>

            <p className="text-white/80 text-sm sm:text-base mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
              Accelerate your market entry with a highly adaptable inDrive-style framework 
              and begin generating revenue from every transport booking and 
              logistics shipment.
            </p>

            <Link to="/company/contact"
              className="
              border border-white
              text-white
              px-5 py-2.5 md:px-6 md:py-3
              rounded-full
              hover:bg-white hover:text-[#155e73]
              transition-all duration-300
            "
            >
              Get an Instant Quote
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={taxi3}
              alt="CTA"
              className="
                w-[80%]
                sm:w-[65%]
                md:w-[110%]
                max-w-[450px]
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmallCtaSection;
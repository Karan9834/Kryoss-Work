import React from "react";
import heroImg from "../../../assets/MvpApp/cta2.webp";

const FinalCTA = () => {
  return (
    <section className="bg-[#640000] py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}

        <div className="text-white">

          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Ready to Lead Your Market with Our
            <br />
            White Label MVP App Development
            <br />
            Solutions?
          </h2>

          <p className="mt-6 text-white/80 max-w-xl">
            Don't let technical hurdles delay your business growth. Partner
            with an expert white label MVP app development company to launch
            a scalable, fully-owned platform that puts you ahead of the
            competition from day one.
          </p>

          <button className="mt-8 border border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-[#640000] transition">
            Get My Custom Quote Now
          </button>

        </div>


        {/* RIGHT IMAGE */}

        <div className="relative flex justify-center lg:justify-end">

          <img
            src={heroImg}
            alt="cta"
            className="w-[480px] lg:w-[520px]"
          />

        </div>

      </div>

    </section>
  );
};

export default FinalCTA;
import React from "react";
import pestcta1 from "../../assets/PestControl/pestcta1.webp";

const PestCTA = () => {
  return (
    <section className="bg-white pt-32">

      {/* Purple Section */}
      <div className="bg-[#3B1B82] py-24 overflow-visible">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center">

          {/* LEFT TEXT */}
          <div className="text-white">

            <h2 className="text-5xl font-semibold leading-tight mb-6">
              Get Started Today with Your
              <br />
              Custom{" "}
              <span className="text-orange-400">
                Pest Control App!
              </span>
            </h2>

            <p className="text-gray-200 max-w-md mb-8">
              Ready to launch your on-demand pest control business?
              Contact us today for a free demo and see how our solution
              can take your business to the next level. Start in just 5 days.
            </p>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Request Demo Now!
            </button>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end">

            <img
              src={pestcta1}
              alt="pest app"
              className="w-[420px] lg:-mt-32"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default PestCTA;
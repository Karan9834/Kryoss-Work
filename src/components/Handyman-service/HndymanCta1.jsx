import React from "react";
import bgImage from "../../assets/Handyman/backgroundhandyman.png"; // you can replace
import rightImage from "../../assets/Handyman/handymancta1.webp";   // you can replace

const HandymanCTA = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-[#f4f4f4] overflow-hidden">

      <div className="max-w-6xl mx-auto relative">

        {/* Background Layer (Image or Gradient) */}
        <div
          className="absolute inset-0 rounded-[40px] overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark Blue Base Card */}
        <div className="relative bg-gradient-to-r from-[#0c2d4a] to-[#08223a] 
                        rounded-[40px] px-10 md:px-16 py-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden">

          {/* Yellow Shape (Layered Card Behind Image) */}
          <div className="absolute right-[-40px] top-10 w-[420px] h-[260px] 
                          bg-yellow-500 rounded-[30px] rotate-[-8deg] 
                          hidden lg:block shadow-2xl" />

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white z-10">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Be the Go-To Choice with <br />
              Our Handyman App!
            </h2>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Launch your on-demand handyman platform and connect customers 
              with trusted professionals effortlessly.
            </p>

            <button className="px-6 py-3 border border-white rounded-full 
                               text-white hover:bg-white hover:text-[#0c2d4a] 
                               transition duration-300 font-medium">
              Get a Quote
            </button>

          </div>

          {/* RIGHT IMAGE (You Replace Manually) */}
          <div className="relative mt-12 lg:mt-0 z-20">

            <img
              src={rightImage}
              alt="Handyman"
              className="w-[280px] md:w-[350px] object-contain drop-shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default HandymanCTA;
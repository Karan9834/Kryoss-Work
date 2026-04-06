import React from "react";
import aboutImg from "../../../../../assets/Games-Product/about.png";

const StakeAbout = () => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">

          {/* Soft Glow Background */}
          <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-amber-200/40 to-yellow-100/30 blur-[90px] rounded-full"></div>

          {/* Decorative Corners */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-amber-400/70 rounded-tl-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-amber-400/70 rounded-br-xl"></div>

          {/* Image Wrapper */}
          <div className="relative p-2 bg-white rounded-xl shadow-xl">
            <img
              src={aboutImg}
              alt="Casino Gaming Platform"
              className="w-full max-w-md rounded-lg object-cover hover:scale-[1.03] transition duration-500"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <h2 className="text-[30px] md:text-[36px] font-bold text-gray-900">
            About{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          {/* Title */}
          <h3 className="mt-6 text-xl md:text-2xl font-semibold text-gray-900">
            Stake1
          </h3>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Premium iGaming Platform
          </p>

          {/* Description */}
          <p className="mt-5 text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
            Stake1 delivers a cutting-edge real-money casino experience with 
            seamless gameplay, secure transactions, and lightning-fast performance. 
            Our platform powers thousands of daily active users with 99.9% uptime 
            and industry-leading security protocols.
          </p>

          <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
            From classic table games to modern slots, we've built a comprehensive 
            gaming ecosystem that combines entertainment with reliability, making 
            it the preferred choice for operators worldwide.
          </p>

        </div>
      </div>
    </section>
  );
};

export default StakeAbout;
import React from "react";
import aboutImage from "../../assets/Handyman/handymanabout.webp";

const HandymanAbout = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#fdf6e3]">

      <div className="max-w-6xl mx-auto 
      bg-[#fff3c4] 
      border border-yellow-300 
      rounded-[40px] 
      shadow-xl 
      px-10 md:px-20 py-16">

        {/* Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-full 
          bg-yellow-100 text-yellow-700 border border-yellow-300 font-medium">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            About Product
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl 
        font-semibold text-center leading-tight mb-14 
        text-[#3a2d00]">
          Simplify Your Business Operations with{" "}
          <span className="text-yellow-600">
            Our Ready-to-use Handyman Clone App
          </span>
        </h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="Handyman About"
              className="w-[360px] md:w-[420px] object-contain"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-6 text-[#5c4500] leading-relaxed text-lg">

            <p>
              We understand the challenges of managing a handyman business in today’s competitive market—juggling with requests, finding skilled professionals (locksmith, plumber, electrical, or other), assigning tasks, tracking progress, and managing payments.
            </p>

            <p>
              White Label Fox’s Handyman clone app is a complete solution for businesses to manage customer requests, assign tasks, track progress, and process payments seamlessly.
            </p>

            <p>
              Our Uber-like handyman app simplifies business operations by connecting customers with trusted professionals for home repairs and maintenance, offering top-notch service at their fingertips.
            </p>

            <p>
              With modules for customers, service providers, and admins, our on-demand handyman app simplifies operations for all parties. The easy setup process allows you to launch and start offering your handyman services in a few days.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HandymanAbout;
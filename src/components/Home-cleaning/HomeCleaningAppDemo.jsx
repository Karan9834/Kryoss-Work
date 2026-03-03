import React from "react";

const HomeCleaningAppDemo = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side Image / Video Thumbnail */}
        <div className="relative flex justify-center">
          <img
            src="https://whitelabelfox.com/assets/images/uber-house-cleaning-app/video-section-image.webp"
            alt="Carpooling App Workflow"
            className="w-full max-w-xl rounded-2xl shadow-lg"
          />

          {/* Optional Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center">

          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6 w-fit">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full "></span>
            Home Cleaning App Demo
          </div>

          <h2 className="text-[38px] font-semibold mb-6 leading-tight">
  <span className="text-cyan-300">
Home Cleaning App</span> Work Flow Video
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Watch the step-by-step workflow of our home cleaning app, showcasing the seamless process from booking to tracking, ensuring a smooth user experience.
          </p>

        </div>

      </div>
    </section>
  );
};

export default HomeCleaningAppDemo;





















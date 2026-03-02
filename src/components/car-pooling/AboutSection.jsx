import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">

        {/* LEFT SIDE - DARK BLUE IMAGE BACKGROUND */}
        <div className="bg-[#0f4c81] rounded-3xl flex items-center justify-center w-125 z-10 ">
          <img
            src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-about-us-image.webp"
            alt="Carpooling App"
            className="w-full max-w-md "
          />
        </div>

        {/* RIGHT SIDE - LIGHT BLUE CONTENT BOX */}
        <div className="bg-[#eaf4fd] border border-[#b7d4f6] rounded-r-3xl p-12 ml-[-150px] mt-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            About Carpooling App Script
          </div>

          {/* Heading */}
          <h2 className="text-[36px] font-semibold leading-tight mb-6 text-gray-800">
            <span className="text-[#1d79c6]">
              Custom Carpooling App Development
            </span>{" "}
            for Seamless Ride-Sharing Solutions
          </h2>

          {/* Content */}
          <div className="text-gray-700 space-y-5 text-[16px] leading-relaxed">

            <p>
              Starting a carpooling business requires a reliable, scalable, and
              user-friendly solution. At White Label Fox, we offer a fully
              customizable carpooling app script designed to meet the specific
              needs of your business. Our white-label carpooling solution includes
              a single app that serves both drivers and passengers, along with
              web panels for super admin, dispatcher admin, and billing admin,
              ensuring smooth operations and better control over your carpooling platform.
            </p>

            <p>
              Our carpooling clone script includes essential features, plus free
              multi-language and multi-currency support for easy regional
              customization and a seamless user experience.
            </p>

            <p>
              The Fox-Carpool Carpooling Clone Script is completely white-labeled,
              allowing you to brand the app with your own logo, name, currency,
              and language. This level of customization ensures that your app
              aligns perfectly with your business identity, offering a
              personalized touch that enhances your customers’ trust and engagement.
            </p>

            <p>
              In addition to top-tier customization, we offer our carpooling app
              script at a highly competitive price, giving you access to the
              source code at a fraction of the cost of other competitors. With
              White Label Fox, you get the best value for your investment while
              ensuring the launch of a feature-rich and scalable carpooling platform.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
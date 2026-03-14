import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-5 md:px-0">

        {/* LEFT SIDE */}
        <div className="bg-[#0f4c81] rounded-3xl flex items-center justify-center md:w-[500px] z-10 p-6 md:p-0">

          <img
            src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-about-us-image.webp"
            alt="Carpooling App"
            className="w-full max-w-sm md:max-w-md h-auto"
          />

        </div>


        {/* RIGHT SIDE */}
        <div className="bg-[#eaf4fd] border border-[#b7d4f6] rounded-3xl md:rounded-r-3xl p-6 md:p-12 md:ml-[-150px] mt-8 md:mt-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-300 text-xs md:text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            About Carpooling App Script
          </div>

          {/* Heading */}
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-semibold leading-tight mb-6 text-gray-800">
            <span className="text-[#1d79c6]">
              Custom Carpooling App Development
            </span>{" "}
            for Seamless Ride-Sharing Solutions
          </h2>

          {/* Content */}
          <div className="text-gray-700 space-y-5 text-[15px] md:text-[16px] leading-relaxed">

            <p>
              Starting a carpooling business requires a reliable, scalable, and
              user-friendly solution. At White Label Fox, we offer a fully
              customizable carpooling app script designed to meet the specific
              needs of your business.
            </p>

            <p>
              Our carpooling clone script includes essential features, plus free
              multi-language and multi-currency support for easy regional
              customization and a seamless user experience.
            </p>

            <p>
              The Fox-Carpool Carpooling Clone Script is completely white-labeled,
              allowing you to brand the app with your own logo, name, currency,
              and language.
            </p>

            <p>
              In addition to top-tier customization, we offer our carpooling app
              script at a highly competitive price, giving you access to the
              source code at a fraction of the cost of other competitors.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;















// import React from "react";

// const AboutSection = () => {
//   return (
//     <section className="bg-white py-12 sm:py-14 md:py-16 px-4 overflow-x-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">

//         {/* LEFT SIDE */}
//         <div className="bg-[#0f4c81] rounded-3xl flex items-center justify-center
//                         w-full
//                         p-6 sm:p-8 md:p-10
//                         z-10">
//           <img
//             src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-about-us-image.webp"
//             alt="Carpooling App"
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md"
//           />
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="bg-[#eaf4fd] border border-[#b7d4f6]
//                         rounded-3xl md:rounded-r-3xl
//                         p-6 sm:p-8 md:p-12
//                         w-full">

//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5
//                           rounded-full border border-gray-300
//                           text-xs sm:text-sm text-gray-700 mb-6">
//             <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
//             About Carpooling App Script
//           </div>

//           {/* Heading */}
//           <h2 className="text-2xl sm:text-3xl md:text-4xl
//                          font-semibold leading-tight mb-6 text-gray-800">
//             <span className="text-[#1d79c6]">
//               Custom Carpooling App Development
//             </span>{" "}
//             for Seamless Ride-Sharing Solutions
//           </h2>

//           {/* Content */}
//           <div className="text-gray-700 space-y-4 sm:space-y-5
//                           text-sm sm:text-base
//                           leading-relaxed">

//             <p>
//               Starting a carpooling business requires a reliable, scalable, and
//               user-friendly solution. At White Label Fox, we offer a fully
//               customizable carpooling app script designed to meet the specific
//               needs of your business.
//             </p>

//             <p>
//               Our carpooling clone script includes essential features, plus free
//               multi-language and multi-currency support.
//             </p>

//             <p>
//               The Fox-Carpool Carpooling Clone Script is completely white-labeled,
//               allowing you to brand the app with your own logo, name, currency,
//               and language.
//             </p>

//             <p>
//               We offer our carpooling app script at a highly competitive price,
//               giving you access to the source code at a fraction of the cost.
//             </p>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;
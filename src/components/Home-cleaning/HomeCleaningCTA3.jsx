// import React from "react";

// const HomeCleaningCTA3 = () => {
//   return (
//     // <section
//     //   className="py-20 bg-cover bg-center"
//        <section className="py-12 sm:py-16 px-4 overflow-x-hidden ">
//       <div
//         className="max-w-7xl mx-auto rounded-3xl 
//                    bg-cover bg-right bg-no-repeat 
//                    px-6 sm:px-10 md:px-16 
//                    py-10 sm:py-12 md:py-0"
//       style={{
//         background: "linear-gradient(90deg, #370252 0%, #520177 100%)",
//       }}
//     >
//       <div className="max-w-8xl mx-auto px-4 ml-[-130px] sm:px-6">

//         <div className="flex flex-col lg:flex-row items-center gap-12">

//           {/* LEFT IMAGE */}
//           <div className="flex-1">
//             <img
//               src="https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-cta-3-graphic.webp"
//               alt="House Cleaning App"
//               className="w-full max-w-[520px] h-130
//                          rounded-bl-[120px] 
//                          rounded-tr-2xl 
//                          rounded-tl-2xl 
//                          rounded-br-2xl 
//                          object-cover"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex-1 text-white space-y-6">

//             <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
//               A Spotless Home Awaits with Our{" "}
//               <span className="text-[#55D7FF]">
//                 Uber for House Cleaning Service App
//               </span>
//             </h2>

//             <p className="text-white/80 text-lg">
//               Deliver a seamless, on-demand cleaning experience with our
//               Uber for House Cleaning Service App. Let your customers enjoy
//               a sparkling clean home with just a few taps, anytime, anywhere!
//             </p>

//             <button
//               className="mt-4 px-8 py-4 rounded-full 
//                          font-semibold 
//                          text-white 
//                          transition-all duration-300
//                          bg-gradient-to-r from-[#009ACA] to-[#006C8D]
//                          hover:scale-105"
//             >
//               Get Started Today
//             </button>

//           </div>

//         </div>

//       </div>
//       </div>
//     </section>
//   );
// };

// export default HomeCleaningCTA3;

















import React from "react";

const HomeCleaningCTA3 = () => {
  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div
        className="relative max-w-7xl mx-auto 
                   rounded-3xl 
                   px-6 sm:px-10 md:px-16 
                   py-12 md:py-16"
        style={{
          background: "linear-gradient(90deg, #370252 0%, #520177 100%)",
        }}
      >
        <div className="relative flex flex-col lg:flex-row items-center">

          {/* LEFT IMAGE */}
          <div className="lg:absolute lg:left-0 lg:bottom-0 lg:w-[45%] ">
            <img
              src="https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-cta-3-graphic.webp"
              alt="House Cleaning App"
              className="w-full max-w-[520px] 
                         rounded-bl-[140px] 
                         rounded-tr-2xl 
                         rounded-tl-2xl 
                         rounded-br-2xl 
                         object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:ml-auto lg:w-[55%] text-white space-y-6 
                          mt-10 lg:mt-0">

            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              A Spotless Home Awaits with Our{" "}
              <span className="text-[#55D7FF]">
                Uber for House Cleaning Service App
              </span>
            </h2>

            <p className="text-white/80 text-lg">
              Deliver a seamless, on-demand cleaning experience with our
              Uber for House Cleaning Service App. Let your customers enjoy
              a sparkling clean home with just a few taps, anytime, anywhere!
            </p>

            <button
              className="mt-4 px-8 py-4 rounded-full 
                         font-semibold text-white 
                         transition-all duration-300
                         bg-gradient-to-r from-[#009ACA] to-[#006C8D]
                         hover:scale-105"
            >
              Get Started Today
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeCleaningCTA3;
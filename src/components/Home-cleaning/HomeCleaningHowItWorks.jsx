import React from "react";

const HomeCleaningHowItWorks = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 overflow-x-hidden"
      style={{
        backgroundImage:
          "url('https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-how-app-works-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">

          {/* ===== LEFT CONTENT ===== */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 
                            bg-white 
                            px-4 py-1.5 
                            rounded-full 
                            border border-gray-300 
                            text-xs sm:text-sm 
                            text-gray-700 
                            mb-6 w-fit">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              How App Works
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl 
                           font-semibold leading-tight 
                           text-gray-100 mb-6">
              How the Uber for House Cleaning <span className="text-[#1d79c6]">Service App Works</span>
            </h2>

            {/* Intro Text */}
            <p className="text-gray-200 mb-8 text-sm sm:text-base leading-relaxed">
              Easily find a cleaner and get your house chores done with just a few simple steps. 
              Explore the straightforward process for booking and enjoying a seamless cleaning service experience.
            </p>

            {/* Steps */}
            <div className="space-y-6 text-sm sm:text-base text-gray-100">

              <div>
                <h4 className="font-semibold mb-1">1. Login / Signup</h4>
                <p>User can log in or sign up by providing basic information or through social platforms like Facebook or Google.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">2. Search Provider</h4>
                <p>Users can search the nearest cleaner, view provider details such as name, distance, pricing, and ratings.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">3. Place Order</h4>
                <p>After reviewing the cleaner’s profile and pricing, users can choose services based on their requirements and place the order.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">4. Provider Offers Service</h4>
                <p>After accepting the request, the cleaner arrives at the user’s location and provides the service.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">5. Secure Payment</h4>
                <p>Once the service is completed, users can pay via cash, card, or in-app wallet.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">6. Rating & Review</h4>
                <p>After payment, both user and provider can give ratings and reviews based on their service experience.</p>
              </div>

            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-how-app-works.webp"
              alt="How House Cleaning App Works"
              className="w-full 
                         max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
                         h-[400px] sm:h-[500px] md:h-full
                       
                         rounded-3xl
                         shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeCleaningHowItWorks;
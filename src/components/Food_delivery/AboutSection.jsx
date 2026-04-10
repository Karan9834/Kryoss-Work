import React from "react";
import foodabout from "../../assets/Food-delivery/foodabout.png";

const AboutSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side - Image Section */}
          <div className="flex-1 relative">
            {/* Premium gradient overlay */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-100/50 to-amber-100/50 rounded-3xl blur-2xl"></div>

            {/* Main Image Container */}
            <div className="relative group">
              {/* Decorative frame effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 to-amber-200 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-700"></div>

              <div className="flex-1 flex justify-center lg:justify-start">
                <div className="w-full max-w-xl aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl group relative">
                  <img
                    src={foodabout}
                    alt="Premium food delivery experience"
                    className="w-full h-full object-cover object-[center_60%] transition duration-700 group-hover:scale-105"
                  />

                  {/* Optional subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                </div>
              </div>

              {/* Premium accent element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl -z-10 opacity-20"></div>
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="flex-1 space-y-8">
            {/* Premium Tag - Updated */}
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur opacity-30"></div>
                <div className="relative px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full border border-orange-200/50">
                  <span className="text-[14px] font-semibold tracking-wider text-orange-600 uppercase">
                    About Us
                  </span>
                </div>
              </div>
            </div>

            {/* Main Heading H2 - Updated: 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] tracking-tight">
              <span className="text-gray-900">More Than Just</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Food Delivery
              </span>
            </h2>

            {/* Description - Updated: 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
            <div className="space-y-5 text-gray-600">
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6]">
                We're redefining the way you experience food by connecting you
                with the finest local restaurants and delivering culinary
                excellence right to your doorstep.
              </p>
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6]">
                Our passionate team works tirelessly to ensure every meal
                arrives fresh, every order is accurate, and every customer feels
                valued. We believe that great food has the power to bring people
                together and create unforgettable moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
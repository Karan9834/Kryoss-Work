import { MessageCircle } from "lucide-react";
import React from 'react';
import heroimg from "../../../../assets/Food-Delivery_product/hero.png"

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#fefaf5] to-[#fff5ed] font-['Inter'] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 lg:gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 min-w-[280px] lg:min-w-[300px] text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ffecd8] text-[#e67e22] font-bold text-xs sm:text-sm px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-5 sm:mb-6 lg:mb-7 mx-auto lg:mx-0">
            <i className="fas fa-motorcycle"></i> FREE DELIVERY ON FIRST ORDER
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1a1a2e]">
  Craving something? <br />
  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
    FoodBite
  </span> delivers <br />
  hot & fresh.
</h1>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-[#4a4a5a] mb-6 sm:mb-8 max-w-none lg:max-w-[90%] mx-auto lg:mx-0">
            Order from the best local restaurants. Fast delivery, sizzling deals,
            and a seamless experience from checkout to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="https://preview.codecanyon.net/item/foodbite-multi-restaurant-food-delivery-app-flutter/full_screen_preview/61762849"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-eye"></i> Live Demo
            </a>
            <a 
              href="/company/contact" 
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/20 text-gray-800 border border-gray-300 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md text-sm sm:text-base"
            >
              <MessageCircle size={18} />
              Let's Discuss
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gradient-to-br from-white to-[#fff7f0] rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] p-3 sm:p-4 lg:p-5 shadow-2xl hover:scale-[1.02] transition-all duration-300 max-w-[500px] lg:max-w-[750px] w-full">
            <img
              src={heroimg}
              alt="Delicious FoodBite meal - burger and fries"
              className="w-full h-auto rounded-[30px] sm:rounded-[35px] lg:rounded-[48px] object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Layout, Globe, Zap } from 'lucide-react';
import card1Img from '../../assets/saloonlanding-img/saloonlandingcard1.png';
import card2Img from '../../assets/saloonlanding-img/saloonlandingcard2.png';




const SalonCardSection = () => {
   const cards = [
      {
         title: "Salon & Beauty App",
         image: card1Img,
         path: "/products/home-service/salon",



         features: [
            "Multi Login Support",
            "Custom Product Management",
            "Android & iOS Apps",
            "Multi Language Support",
            "Light & Dark Modes",
            "Secure Payment Gateway"
         ],

      },
      {
         title: "Premium Salon Booking",
         image: card2Img,
         path: "/products/salon-booking",



         features: [
            "Multi Vendor Support",
            "Instant Payment Gateway",
            "Smart Notification System",
            "Multi Language Ready",
            "Unlimited Color Customization",
            "Comprehensive Categories"
         ],

      }
   ];

   return (
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <h2 className="text-2xl lg:text-3xl font-semibold text-[#1A1C2C]">
                  Our Best-Selling <span className="text-[#FF4D29]">Salon Solutions</span>
               </h2>


               <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Choose the perfect platform to power your beauty business.
                  Each solution is crafted for maximum impact and effortless management.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className={`group relative flex flex-col items-center text-center p-2 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl ${card.hoverAccent}`}
                  >
                     {/* Image Section */}
                     <div className="w-full  bg-gray-50 rounded-[36px] overflow-hidden relative mb-6">
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"

                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                     </div>


                     {/* Content Section */}
                     <div className="w-full px-8 pb-10 space-y-8">
                        <div className="space-y-2">
                           <h3 className="text-xl font-semibold text-[#1A1C2C]">{card.title}</h3>
                           <div className="h-1 w-20 bg-[#FF4D29] mx-auto rounded-full"></div>
                        </div>


                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 bg-[#FF4D29] rounded-full"></div>
                                 <span className="text-sm font-bold text-gray-700">{feature}</span>
                              </div>
                           ))}
                        </div>

                        {/* Powered By Badge & Button */}
                        {/* <div className="pt-6 flex flex-col gap-6">


                           <button className="flex items-center justify-center gap-2 text-[#FF4D29] font-bold text-sm group-hover:underline transition-all">
                              Explore Solution <ArrowRight size={18} />
                           </button>
                        </div> */}
                     </div>

                  </Link>
               ))}
            </div>
            {/* Bottom note */}
            <div className="text-center mt-16">
               <p className="text-sm text-gray-400">
                  ✦ More products coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default SalonCardSection;

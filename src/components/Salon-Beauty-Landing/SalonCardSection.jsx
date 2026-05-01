import { Link } from 'react-router-dom';
import React from 'react';
import card1Img from '../../assets/saloonlanding-img/saloonlandingcard1.jpg';
import card2Img from '../../assets/saloonlanding-img/saloonlandingcard2.jpg';

const SalonCardSection = () => {
   const cards = [
      {
         title: "Salon & Beauty App",
         image: card1Img,
         path: "/products/home-service/salon",
         desc: "A complete mobile app solution for salon and beauty service bookings."
      },
      {
         title: "Premium Salon Booking",
         image: card2Img,
         path: "/products/salon-booking",
         desc: "Feature-rich web platform for multi-vendor salon management."
      }
   ];

   return (
      <section id="salon-products" className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            {/* Header - Updated Typography */}
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-rose-200"></div>
                  {/* Badge - Updated: text-[14px] font-semibold tracking-wider uppercase */}
                  <span className="text-rose-600 text-[14px] font-semibold tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-rose-200"></div>
               </div>
               
               {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                  Our Best-Selling <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">Salon Solutions</span>
               </h2>

               {/* Description - 16px, weight 400, line-height 1.6 */}
               <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                  Choose the perfect platform to power your beauty business.
                  Each solution is crafted for maximum impact and effortless management.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
               {cards.map((card, index) => (
                  <div key={index} className="text-center">

                     {/* CLICKABLE IMAGE */}
                     <Link
                        to={card.path}
                        className="cursor-pointer group block"
                     >
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full rounded-xl border-[5px] border-transparent hover:border-rose-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION - Updated Typography */}
                     <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        <Link to={card.path} className="text-rose-600 font-semibold hover:underline">
                           {card.title}
                        </Link>{" "}
                        <span className="text-gray-700">
                           - {card.desc}
                        </span>
                     </p>

                  </div>
               ))}
            </div>
            
            {/* Bottom note - Updated Typography */}
            <div className="text-center mt-16">
               <p className="text-[14px] font-normal leading-[1.6] text-gray-400">
                  ✦ More products coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default SalonCardSection;
import { Link } from 'react-router-dom';
import React from 'react';

// Images will be added by the user later
import card1 from '@/assets/emslanding-img/emslandingcard1.jpg';
import card2 from '@/assets/emslanding-img/emslandingcard2.jpg';

const EMSCardSection = () => {
   const cards = [
      {
         title: "EventRight Pro",
         desc: "Advanced SaaS-based ticket sales and event booking management system with website and panels.",
         path: "/products/enterprise/ems/eventright-pro",
         image: card1
      },
      {
         title: "Event Next",
         desc: "Multivendor event management, intelligent ticketing, and revolutionary access control.",
         path: "/products/enterprise/ems/event-next",
         image: card2
      }
   ];

   return (
      <section id="ems-cards" className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-fuchsia-200"></div>
                  <span className="text-orange-500 text-[12px] font-medium tracking-[0.05em] uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-pink-200"></div>
               </div>

               {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 via-pink-600 to-orange-500">
                     Specialized Event Modules
                  </span>
               </h2>
               
               {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
               <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto mt-6">
                  Choose the specialized platform that fits your event scale perfectly.
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
                           className="w-full rounded-xl border-[5px] border-transparent hover:border-fuchsia-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                     <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        <Link to={card.path} className="text-fuchsia-600 font-semibold hover:underline">
                           {card.title}
                        </Link>{" "}
                        <span className="text-gray-700">- {card.desc}</span>
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default EMSCardSection;
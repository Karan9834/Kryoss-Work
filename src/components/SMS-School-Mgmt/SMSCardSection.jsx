import { Link } from 'react-router-dom';

import React from 'react';

// Images will be added by the user later
import card1 from '@/assets/smslanding-img/smslandingcard1.png'; // Placeholder
import card2 from '@/assets/smslanding-img/smslandingcard2.png'; // Placeholder

const SMSCardSection = () => {
   const cards = [
      {
         title: "iNiLabs School Management",
         path: "/products/enterprise/sms/inilabs", // Updated path
         description: "Complete Student Lifecycle Management",
         image: card1
      },
      {
         title: "Global School Management",
         path: "/products/enterprise/sms/global", // Updated path
         description: "Advanced Multi-Campus Platform",
         image: card2
      }
   ];

   return (
      <section id="sms-cards" className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* "Our Products" Header */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-blue-200"></div>
                  <span className="text-emerald-500 font-semibold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-indigo-200"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-500">
                     Specialized Education Modules
                  </span>
               </h2>
               <p className="text-[#4A4B5E] text-lg max-w-2xl mx-auto mt-6">
                  Choose the specialized platform that fits your institution's specific needs perfectly.
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
                           className="w-full rounded-xl border-[5px] border-transparent group-hover:border-blue-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION */}
                     <p className="mt-4 text-sm md:text-base">
                        <Link to={card.path} className="text-blue-600 font-semibold hover:underline">
                           {card.title}
                        </Link>{" "}
                        <span className="text-gray-700">
                           - {card.description}
                        </span>
                     </p>

                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default SMSCardSection;

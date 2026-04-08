import { Link } from 'react-router-dom';
import React from 'react';

import card1Img from '../../assets/lms-img/lmslandingcard1.png';
import card2Img from '../../assets/lms-img/lmslandingcard2.png';

const LmsCardSection = () => {
   const cards = [
      {
         title: "Mentor LMS",
         path: "/products/enterprise/lms/mentor-lms",
         description: "Intelligent Learning Suite",
         image: card1Img
      },
      {
         title: "Rocket LMS",
         path: "/products/enterprise/lms/rocket-lms",
         description: "Enterprise Academy Engine",
         image: card2Img
      }
   ];

   return (
      <section id="explore-lms" className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* "Our Products" Header */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-violet-200"></div>
                  <span className="text-violet-600 font-bold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-violet-200"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl font-semibold leading-tight tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 uppercase">
                     Specialized LMS Modules
                  </span>
               </h2>
               <p className="text-[#4A4B5E] text-lg max-w-2xl mx-auto mt-6 font-medium">
                  Choose the specialized platform that fits your academy's type and scale perfectly.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
               {cards.map((card, index) => (
                  <div key={index} className="text-center">
                     {/* CLICKABLE IMAGE */}
                     <Link
                        to={card.path}
                        className="cursor-pointer group block overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300"
                     >
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full h-full border-[5px] border-transparent group-hover:border-violet-500 transition duration-300 group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION */}
                     <p className="mt-4 text-sm md:text-base">
                        <Link
                           to={card.path}
                           className="text-violet-600 font-semibold hover:underline"
                        >
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

export default LmsCardSection;

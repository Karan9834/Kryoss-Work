import { Link } from 'react-router-dom';
import React from 'react';

import card1Img from '../../assets/erp-img/edu.jpg';
import card2Img from '../../assets/erp-img/multi.jpg';

const ErpCardSection = () => {
   const cards = [
      {
         title: "AcadifyEdu ERP",
         path: "/products/enterprise/erp/acadifyedu-erp",
         description: "Intelligent Education Suite",
         image: card1Img
      },
      {
         title: "Multistore ERP",
         path: "/products/enterprise/erp/multistore-erp",
         description: "Enterprise Growth Engine",
         image: card2Img
      }
   ];

   return (
      <section id="explore-erp" className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* "Our Products" Header - Badge Typography */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-blue-200"></div>
                  <span className="text-blue-600 font-medium text-[12px] tracking-[0.05em] uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-blue-200"></div>
               </div>

               {/* Heading - Updated Typography */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] tracking-[-0.02em]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 uppercase">
                     Specialized ERP Modules
                  </span>
               </h2>
               
               {/* Description - Updated Typography */}
               <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-[#4A4B5E] max-w-2xl mx-auto mt-6">
                  Choose the specialized platform that fits your institution's type and scale perfectly.
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
                           className="w-full h-full border-[5px] border-transparent group-hover:border-blue-500 transition duration-300 group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION - Updated Typography */}
                     <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        <Link
                           to={card.path}
                           className="text-blue-600 font-semibold hover:underline"
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

export default ErpCardSection;
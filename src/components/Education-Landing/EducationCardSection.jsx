import { Link } from 'react-router-dom';
import React from 'react';
import card1Img from '@/assets/educationlanding-img/educationlandingcard1.jpg';
import card2Img from '@/assets/educationlanding-img/educationlandingcard2.jpg';

const EducationCardSection = () => {
   const cards = [
      {
         title: "Bookingo: Tutor Booking App",
         image: card1Img,
         path: "/products/home-service/tutor",
         desc: "Complete tutor booking and management platform with video integration."
      },
      {
         title: "Academy: Tutor Booking Platform",
         image: card2Img,
         path: "/products/tutor-booking",
         desc: "Comprehensive online learning and course management solution."
      }
   ];

   return (
      <section id="education-products" className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            {/* Header - Updated Typography */}
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-indigo-300"></div>
                  {/* Badge - Updated: text-[14px] font-semibold tracking-wider uppercase */}
                  <span className="text-teal-600 text-[14px] font-semibold tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-indigo-300"></div>
               </div>
               
               {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                  Our Premium <span className="text-indigo-600">Education Solutions</span>
               </h2>
               
               {/* Description - 16px, weight 400, line-height 1.6 */}
               <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                  Pick the ideal platform to transform your traditional teaching into a
                  modern, interactive digital learning experience.
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
                           className="w-full rounded-xl border-[5px] border-transparent hover:border-indigo-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION - Updated Typography */}
                     <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        <Link to={card.path} className="text-indigo-600 font-semibold hover:underline">
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
                  ✦ More educational products coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default EducationCardSection;
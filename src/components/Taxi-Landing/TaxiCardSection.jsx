import { Link } from 'react-router-dom';
import React from 'react';
import card1Img from '../../assets/taxilanding-img/taxilandingcard1.jpg';
import card2Img from '../../assets/taxilanding-img/taxilandingcard2.jpg';

const TaxiCardSection = () => {
   const cards = [
      {
         title: "Global Taxi Booking App",
         desc: "A premium Uber-like solution for global transport businesses.",
         path: "/products/transport/uber-clone",
         image: card1Img
      },
      {
         title: "Taxi Bidding Platform",
         desc: "Empower riders and drivers with an InDrive-style bidding model.",
         path: "/products/transport/indrive-clone",
         image: card2Img
      }
   ];

   return (
      <section id="taxi-products" className="py-16 bg-transparent">
         <div className="max-w-7xl mx-auto px-6">
            {/* Header - Updated Typography */}
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-yellow-400"></div>
                  {/* Badge - Updated: text-[14px] font-bold tracking-wider uppercase */}
                  <span className="text-orange-600 text-[14px] font-bold tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-yellow-400"></div>
               </div>
               
               {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                  Choice Your Ideal <span className="text-yellow-600">Transport Model</span>
               </h2>
               
               {/* Description - 16px, weight 400, line-height 1.6 */}
               <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                  Whether you want a traditional booking system or a modern bidding marketplace, we have the perfect solution for you.
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
                           className="w-full rounded-xl border-[5px] border-transparent hover:border-yellow-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION - Updated Typography */}
                     <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        <Link to={card.path} className="text-yellow-600 font-semibold hover:underline">
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
                  ✦ More transport solutions coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default TaxiCardSection;
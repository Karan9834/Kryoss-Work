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
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-yellow-400"></div>
                  <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-yellow-400"></div>
               </div>
               <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
                  Choice Your Ideal <span className="text-yellow-600">Transport Model</span>
               </h2>
               <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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

                     {/* TITLE AND DESCRIPTION */}
                     <p className="mt-4 text-sm md:text-base">
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

            {/* Bottom note */}
            <div className="text-center mt-16">
               <p className="text-sm text-gray-400 font-medium">
                  ✦ More transport solutions coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default TaxiCardSection;

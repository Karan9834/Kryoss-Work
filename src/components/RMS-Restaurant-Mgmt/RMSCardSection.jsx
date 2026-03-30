import React from 'react';
import { Link } from 'react-router-dom';
// Images will be added by the user later
import card1 from '@/assets/rmslanding-img/rmslandingcard1.png';
import card2 from '@/assets/rmslanding-img/rmslandingcard2.png';

const RMSCardSection = () => {
   const cards = [
      {
         title: "Fine Dining & Casual",
         path: "/products/enterprise/rms/fine-dining", // Add specific paths later if needed
         features: [
            "Floor Plan Mapping",
            "Reservation Sync",
            "Course Pacing",
            "Wine Inventory",
            "Guest Preferences",
            "Tableside Ordering"
         ],
         image: card1
      },
      {
         title: "QSR & Fast Casual",
         path: "/products/enterprise/rms/qsr-fast-casual", // Add specific paths later if needed
         features: [
            "Self-Service Kiosks",
            "Drive-Thru Sync",
            "Rapid Checkout",
            "Combo Management",
            "Franchise Scaling",
            "Digital Menu Boards"
         ],
         image: card2
      }
   ];

   return (
      <section id="rms-cards" className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* "Our Products" Header */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-red-200"></div>
                  <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-rose-200"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-600 to-amber-500">
                     Specialized RMS Modules
                  </span>
               </h2>
               <p className="text-[#4A4B5E] text-lg max-w-2xl mx-auto mt-6">
                  Choose the specialized platform that fits your restaurant model perfectly.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[3.5rem] border border-gray-50 transition-all duration-500 hover:scale-[1.02] bg-rose-50/20 shadow-xl hover:border-rose-100"
                  >
                     {/* Image Section */}
                     <div className="w-full h-64 bg-gray-50 rounded-[3rem] overflow-hidden relative mb-8 flex items-center justify-center border border-rose-50/50">
                        {card.image ? (
                           <img src={card.image} alt={card.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
                        ) : (
                           <span className="text-gray-400 font-medium">Image Placeholder</span>
                        )}
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-12 pb-12 space-y-10 text-left">
                        <div className="space-y-4 text-center">
                           <h3 className="text-2xl font-bold text-[#1A1C2C] group-hover:text-rose-600 transition-colors tracking-tight">{card.title}</h3>
                           <div className="h-1.5 w-16 bg-gradient-to-r from-red-500 to-amber-500 mx-auto rounded-full group-hover:w-32 transition-all"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className="w-2.5 h-2.5 bg-amber-500 rounded-full group-hover:scale-125 transition-transform shadow-sm"></div>
                                 <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
};

export default RMSCardSection;

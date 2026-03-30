import React from 'react';
import { Link } from 'react-router-dom';
// Images will be added by the user later
import card1 from '@/assets/emslanding-img/emslandingcard1.png';
import card2 from '@/assets/emslanding-img/emslandingcard2.png';

const EMSCardSection = () => {
   const cards = [
      {
         title: "Corporate Events",
         path: "/products/enterprise/ems/corporate-events", // Add specific paths later if needed
         features: [
            "Seamless Registration",
            "Sponsor Management",
            "Lead Retrieval",
            "Speaker Agendas",
            "VIP Access Pass",
            "Post-Event Analytics"
         ],
         image: card1
      },
      {
         title: "Festivals & Concerts",
         path: "/products/enterprise/ems/festivals-concerts", // Add specific paths later if needed
         features: [
            "High-Volume Ticketing",
            "QR Access Control",
            "Cashless Payments",
            "Real-Time Analytics",
            "Fan Engagement App",
            "Multi-Day Check-in"
         ],
         image: card2
      }
   ];

   return (
      <section id="ems-cards" className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* "Our Products" Header */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-fuchsia-200"></div>
                  <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-pink-200"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 via-pink-600 to-orange-500">
                     Specialized Event Modules
                  </span>
               </h2>
               <p className="text-[#4A4B5E] text-lg max-w-2xl mx-auto mt-6">
                  Choose the specialized platform that fits your event scale perfectly.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[3.5rem] border border-gray-50 transition-all duration-500 hover:scale-[1.02] bg-fuchsia-50/20 shadow-xl hover:border-fuchsia-100"
                  >
                     {/* Image Section */}
                     <div className="w-full h-64 bg-gray-50 rounded-[3rem] overflow-hidden relative mb-8 flex items-center justify-center border border-fuchsia-50/50">
                        {card.image ? (
                           <img src={card.image} alt={card.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
                        ) : (
                           <span className="text-gray-400 font-medium">Image Placeholder</span>
                        )}
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-12 pb-12 space-y-10 text-left">
                        <div className="space-y-4 text-center">
                           <h3 className="text-2xl font-bold text-[#1A1C2C] group-hover:text-fuchsia-600 transition-colors tracking-tight">{card.title}</h3>
                           <div className="h-1.5 w-16 bg-gradient-to-r from-fuchsia-500 to-pink-500 mx-auto rounded-full group-hover:w-32 transition-all"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className="w-2.5 h-2.5 bg-pink-500 rounded-full group-hover:scale-125 transition-transform shadow-sm"></div>
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

export default EMSCardSection;

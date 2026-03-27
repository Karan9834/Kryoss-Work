import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Snowflake, Map, Search, ArrowRight } from 'lucide-react';
import card1 from '../../assets/transportlanding-img/transportlandingcard1.png';
import card2 from '../../assets/transportlanding-img/transportlandingcard2.png';

const LogisticsCardSection = () => {
   const cards = [
      {
         title: "Tow Truck Platform",
         path: "/products/home-service/tow-truck",
         features: [
            "Real-time GPS Tracking",
            "Multiple Service Types",
            "In-app Payments",
            "Driver Management",
            "Dispatcher Panel",
            "Route Optimization"
         ],
         image: card1,
         icon: <Truck className="text-orange-600" size={60} />,
         themeColor: "from-orange-500 to-amber-500"
      },
      {
         title: "Snow Removal Solution",
         path: "/products/home-service/snow-removal",
         features: [
            "On-demand Booking",
            "Weather Integration",
            "Plow Tracking",
            "Automated Billing",
            "Equipment Tracking",
            "Area Mapping"
         ],
         image: card2,
         icon: <Snowflake className="text-blue-600" size={60} />,
         themeColor: "from-blue-600 to-sky-400"
      }
   ];

   return (
      <section id="logistics-products" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-slate-200"></div>
                  <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-slate-200"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-700 to-[#0F172A]">
                     Scalable Logistics Infrastructure
                  </span>
               </h2>
               <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6 font-medium">
                  Enterprise-grade platforms built to power your delivery and supply chain operations.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[3.5rem] border border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-slate-50/50 shadow-xl hover:border-orange-100"
                  >
                     {/* Image Section */}
                     <div className="w-full  bg-white rounded-[3rem] overflow-hidden relative mb-8 flex items-center justify-center border border-slate-100 shadow-inner group">
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Interactive Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.themeColor} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-12 pb-12 space-y-10 text-left">
                        <div className="space-y-4 text-center">
                           <h3 className="text-2xl font-semibold text-[#0F172A] group-hover:text-orange-600 transition-colors tracking-tight">{card.title}</h3>
                           <div className={`h-1.5 w-16 bg-gradient-to-r ${card.themeColor} mx-auto rounded-full group-hover:w-32 transition-all`}></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className="w-2.5 h-2.5 bg-orange-500 rounded-full group-hover:scale-125 transition-transform shadow-sm"></div>
                                 <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">{feature}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>

         <style jsx>{`
            .shadow-inner {
               box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.02);
            }
         `}</style>
      </section>
   );
};

export default LogisticsCardSection;

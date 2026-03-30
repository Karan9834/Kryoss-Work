import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Navigation2, Zap, Layout, Globe, Smartphone, ShieldCheck, ClipboardList, BarChart, UserCheck, CreditCard } from 'lucide-react';
import card1Img from '../../assets/taxilanding-img/taxilandingcard1.jpg';
import card2Img from '../../assets/taxilanding-img/taxilandingcard2.jpg';

const TaxiCardSection = () => {
   const cards = [
      {
         title: "Global Taxi Booking App",
         desc: "A premium Uber-like solution for global transport businesses.",
         path: "/products/transport/uber-clone",
         features: [
            "Real-time Tracking",
            "Multiple Ride Types",
            "Dynamic Pricing Engine",
            "In-app Chat & Support",
            "Wallet & Cash Payments",
            "Driver Performance Logs"
         ],
         icon: Navigation2,
         image: card1Img,
         themeColor: "text-blue-600",
         bgColor: "bg-blue-50",
         borderColor: "hover:border-blue-100"
      },
      {
         title: "Taxi Bidding Platform",
         desc: "Empower riders and drivers with an InDrive-style bidding model.",
         path: "/products/transport/indrive-clone",
         features: [
            "Dynamic Fare Bidding",
            "Direct Driver Negotiation",
            "Lowest Commission Rates",
            "Intercity Ride Support",
            "Ratings & Reviews System",
            "Driver/Rider Dashboards"
         ],
         icon: Zap,
         image: card2Img,
         themeColor: "text-yellow-600",
         bgColor: "bg-yellow-50",
         borderColor: "hover:border-yellow-200"
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

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-yellow-100"
                  >
                     {/* Image Section */}
                     <div className={`w-full ${card.bgColor} rounded-[36px] overflow-hidden relative mb-6`}>
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full h-auto object-contain "
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-8 pb-10 space-y-8">
                        <div className="space-y-2">
                           <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-yellow-600 transition-colors uppercase tracking-tight">{card.title}</h3>
                           <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                                 <span className="text-sm font-bold text-gray-700">{feature}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Link>
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

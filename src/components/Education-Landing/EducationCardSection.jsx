import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import card1Img from '../../assets/educationlanding-img/educationlandingcard1.png';
import card2Img from '../../assets/educationlanding-img/educationlandingcard2.png';

const EducationCardSection = () => {
   const cards = [
      {
         title: "Tutor Booking App",
         image: card1Img,
         path: "/products/home-service/tutor",
         features: [
            "Student & Teacher Login",
            "In-app Video Calling",
            "Real-time Scheduling",
            "Multi Language Support",
            "Progress Tracking",
            "Secure Payment Gateway"
         ],
      },
      {
         title: "Tutor Booking Platform",
         image: card2Img,
         path: "/products/tutor-booking",
         features: [
            "Course Management",
            "Instructor Dashboard",
            "Attendance Tracking",
            "Multi-Vendor Support",
            "Comprehensive Analytics",
            "Student Support System"
         ],
      }
   ];

   return (
      <section id="education-products" className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-indigo-300"></div>
                  <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-indigo-300"></div>
               </div>
               <h2 className="text-2xl lg:text-3xl font-semibold text-[#1A1C2C]">
                  Our Premium <span className="text-indigo-600">Education Solutions</span>
               </h2>
               <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Pick the ideal platform to transform your traditional teaching into a
                  modern, interactive digital learning experience.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-indigo-100"
                  >
                     {/* Image Section */}
                     <div className="w-full h-full bg-gray-50 rounded-[36px] overflow-hidden relative mb-6">
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-8 pb-10 space-y-8">
                        <div className="space-y-2">
                           <h3 className="text-xl font-semibold text-[#1A1C2C] group-hover:text-indigo-600 transition-colors">{card.title}</h3>
                           <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                                 <span className="text-sm font-bold text-gray-700">{feature}</span>
                              </div>
                           ))}
                        </div>

                        {/* <div className="pt-6">
                           <button className="flex items-center justify-center gap-2 text-indigo-600 font-bold text-sm group-hover:underline transition-all">
                              Explore Solution <ArrowRight size={18} />
                           </button>
                        </div> */}
                     </div>
                  </Link>
               ))}
            </div>

            {/* Bottom note */}
            <div className="text-center mt-16">
               <p className="text-sm text-gray-400 font-medium">
                  ✦ More educational products coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default EducationCardSection;

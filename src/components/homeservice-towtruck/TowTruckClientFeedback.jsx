// import React from "react";
// import { Play } from "lucide-react";
// import feedback1 from "../../assets/homeservice-tutor-img/feedback1.webp";
// import feedback2 from "../../assets/homeservice-tutor-img/feedback2.webp";
// import feedback3 from "../../assets/homeservice-tutor-img/feedback3.webp";
// import feedback4 from "../../assets/homeservice-tutor-img/feedback4.webp";

// const clients = [
//     {
//         name: "Acharya",
//         image: feedback1,
//         desc:
//             "M.R. Acharya from Nepal praises Kryoss Work for seamless service, fast support, and highly recommends us for online business solutions.",
//     },
//     {
//         name: "pablo",
//         image: feedback2,
//         desc:
//             "Watch our happy client, Mr. Pablo from Mexico, share his experience with our Gojek clone app, praising our professionalism and responsiveness.",
//     },
//     {
//         name: "David",
//         image: feedback3,
//         desc:
//             "Mr. David highly praised our team as superb, expressing great satisfaction with our service and eagerness for future successful collaboration.",
//     },
//     {
//         name: "George",
//         image: feedback4,
//         desc:
//             "Mr. George Nwokeabia praised our professionalism and plans future collaboration after a successful Fox-Jek app purchase.",
//     },
// ];

// const ClientFeedback = () => {
//     return (
//         <section className="w-full bg-gradient-to-r from-[#eaf6ff] via-[#f3fff1] to-[#fff9e6] py-20">
//             <div className="max-w-7xl mx-auto px-4">

//                 {/* Badge */}
//                 <div className="flex justify-center mb-4">
//                     <span className="flex items-center gap-2 rounded-full border px-4 py-1 text-sm text-gray-700 bg-white">
//                         <span className="w-2 h-2 rounded-full bg-blue-400"></span>
//                         People Love Our Platform!
//                     </span>
//                 </div>

//                 {/* Heading */}
//                 <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800">
//                     Let's Check <span className="text-blue-500">What Our Clients Love</span>{" "}
//                     to Share!
//                 </h2>

//                 {/* Cards */}
//                 <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {clients.map((item, idx) => (
//                         <div
//                             key={idx}
//                             className="bg-white rounded-2xl shadow-md p-6 text-center"
//                         >
//                             {/* Image */}
//                             <div className="relative mx-auto w-40 h-40 rounded-2xl overflow-hidden bg-gray-200">
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="w-full h-full object-cover"
//                                 />

//                                 {/* Play Icon */}
//                                 <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
//                                     <Play className="text-white w-5 h-5 fill-white" />
//                                 </div>
//                             </div>

//                             {/* Name */}
//                             <h4 className="mt-6 font-semibold text-lg capitalize">
//                                 {item.name}
//                             </h4>

//                             {/* Description */}
//                             <p className="mt-3 text-sm text-gray-600 leading-relaxed">
//                                 {item.desc}
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* CTA Button */}
//                 <div className="mt-14 flex justify-center">
//                     <button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 font-medium transition">
//                         Watch Their Experience
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ClientFeedback;
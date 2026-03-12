// import React from "react";
// import { Star, Handshake, Users, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";

// const PickSection = () => {
//   return (
//     <section className="py-24 bg-gradient-to-r from-[#f7f4ef] to-[#e0d4c1]">
//       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE CARDS */}
//         <div className="grid grid-cols-2 gap-10">

//           {/* LEFT COLUMN */}
//           <div className="flex flex-col gap-10">

//             {/* Card 1 */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
//               <div className="w-16 h-16 mb-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
//                 <Star size={26} />
//               </div>

//               <h3 className="font-semibold text-lg mb-2">
//                 I Want To Explore Your Products
//               </h3>

//               {/* <a className="text-blue-600 font-medium">Explore ↗</a> */}
//               <Link to="/products" className="text-blue-600 font-medium hover:underline">
//   Explore ↗
// </Link>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
//               <div className="w-16 h-16 mb-4 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
//                 <Users size={26} />
//               </div>

//               <h3 className="font-semibold text-lg mb-2">
//                 I Want To Hire Your Developers
//               </h3>

//               {/* <a className="text-blue-600 font-medium">Explore ↗</a> */}
//                   <Link to="/hire-developers" className="text-blue-600 font-medium hover:underline">
//   Explore ↗
// </Link>
//             </div>

//           </div>


//           {/* RIGHT COLUMN (SHIFTED DOWN) */}
//           <div className="flex flex-col gap-10 mt-16">

//             {/* Card 2 */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
//               <div className="w-16 h-16 mb-4 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center">
//                 <Handshake size={26} />
//               </div>

//               <h3 className="font-semibold text-lg mb-2">
//                 I Want To Explore Your Services
//               </h3>

//               {/* <a className="text-blue-600 font-medium">Explore ↗</a> */}
          
// <Link to="/services" className="text-blue-600 font-medium hover:underline">
//   Explore ↗
// </Link>
//             </div>

//             {/* Card 4 */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
//               <div className="w-16 h-16 mb-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
//                 <TrendingUp size={26} />
//               </div>

//               <h3 className="font-semibold text-lg mb-2">
//                Careers - To Join In Our Company
//               </h3>

//               {/* <a className="text-blue-600 font-medium">Explore ↗</a> */}
//              <Link to="/business-growth" className="text-blue-600 font-medium hover:underline">
//   Explore ↗
// </Link>
//             </div>

//           </div>

//         </div>


//         {/* RIGHT CONTENT */}
//         <div>
//           <h2 className="text-4xl font-bold mb-6">
//             Pick What’s Suits <span className="text-indigo-500">You Most!</span>
//           </h2>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             We have categorized our services based on client needs to ensure a
//             seamless selection process. Choose the service that aligns with
//             your goals and get started right away.
//           </p>

//           <p className="text-gray-600 leading-relaxed">
//             Our team is always ready to assist you with tailored solutions that
//             match your requirements.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PickSection;






















import React from "react";
import { Star, Handshake, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PickSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#c7b288] via-white to-[#996e30] overflow-hidden">

      {/* background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE CARDS */}
        <div className="grid grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">

            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition">
                <Star size={26} />
              </div>

              <h3 className="font-semibold text-lg mb-3">
                I Want To Explore Your Products
              </h3>

              <Link
                to="/products"
                className="flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition"
              >
                Explore <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center group-hover:scale-110 transition">
                <Users size={26} />
              </div>

              <h3 className="font-semibold text-lg mb-3">
                I Want To Hire Your Developers
              </h3>

              <Link
                to="/hire-developers"
                className="flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition"
              >
                Explore <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN (SHIFTED DOWN) */}
          <div className="flex flex-col gap-10 mt-16">

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center group-hover:scale-110 transition">
                <Handshake size={26} />
              </div>

              <h3 className="font-semibold text-lg mb-3">
                I Want To Explore Your Services
              </h3>

              <Link
                to="/services"
                className="flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition"
              >
                Explore <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:scale-110 transition">
                <TrendingUp size={26} />
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Careers - To Join In Our Company
              </h3>

              <Link
                to="/business-growth"
                className="flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition"
              >
                Explore <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          <h2 className="text-4xl font-bold leading-tight">
            Pick What’s Suits
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              You Most!
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We have categorized our services based on client needs to ensure a
            seamless selection process. Choose the service that aligns with
            your goals and get started right away.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our team is always ready to assist you with tailored solutions that
            match your requirements.
          </p>

        </div>

      </div>
    </section>
  );
};

export default PickSection;
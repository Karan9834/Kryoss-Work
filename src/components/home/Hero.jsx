// import { ArrowRight, Star } from "lucide-react";

// const reviewBadges = [
//   {
//     name: "Google Review",
//     rating: "4.9",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     border: "border-orange-500/30",
//     color: "text-orange-600"
//   },
//   {
//     name: "Goodfirm Review",
//     rating: "4.9",
//     logo: "https://cdn.iconscout.com/icon/free/png-256/free-goodfirms-logo-icon-download-in-svg-png-gif-file-formats--brand-brands-pack-logos-icons-2630044.png",
//     border: "border-blue-500/30",
//     color: "text-blue-600"
//   },
//   {
//     name: "Clutch Review",
//     rating: "4.9",
//     logo: "https://clutch.co/sites/all/themes/clutch/logo.svg",
//     border: "border-red-500/30",
//     color: "text-red-600"
//   },
//   {
//     name: "Trustpilot Review",
//     rating: "4.3",
//     logo: "https://cdn-icons-png.flaticon.com/512/5968/5968936.png",
//     border: "border-green-500/30",
//     color: "text-green-600"
//   }
// ];





// export default function Hero() {
//   return (
//     <section className="relative min-h-[600px] flex items-start bg-white overflow-hidden pt-2 pb-12">
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

//       <div className="max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-20 relative z-10 w-full">
//         <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
//           {/* Left Content */}
//           <div className="space-y-6 lg:max-w-2xl">
//             {/* Pill Badge */}
//             <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
//               <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
//               <span className="text-sm font-semibold text-gray-700">Digital Solutions</span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-3xl lg:text-[42px] font-semibold text-gray-900 leading-[1.1] tracking-tight">
//               Transforming Ideas With <br />
//               <span className="text-primary">Product Engineering</span>
//             </h1>

//             <p className="text-[16px] lg:text-[18px] text-gray-600 font-normal leading-[1.6] max-w-xl">
//               As a leading clone app development company, we provide scalable product engineering services & deliver ready-to-launch or custom app, Website & Software for diverse industries. Our high-performance enterprise solutions are tailored to your business needs, driving efficiency and sustainable growth.
//             </p>

//             {/* CTA */}
//             <div className="pt-1">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-bold text-[16px] hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
//               >
//                 Consult Our Experts
//                 <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-1">
//                   <ArrowRight className="h-3.5 w-3.5" />
//                 </span>
//               </a>
//             </div>

//             {/* Review Grid */}
//             <div className="grid grid-cols-2 gap-4 max-w-lg pt-4">
//               {reviewBadges.map((badge) => (
//                 <div
//                   key={badge.name}
//                   className={`flex items-center gap-4 bg-white border-2 ${badge.border} rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group`}
//                 >
//                   <div className="w-12 h-12 flex items-center justify-center shrink-0">
//                     <img src={badge.logo} alt={badge.name} className="w-full h-full object-contain" />
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[13px] font-bold text-gray-800">{badge.name}</span>
//                     <div className="flex items-center gap-1">
//                       <span className="text-[14px] font-bold text-gray-900">{badge.rating}</span>
//                       <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side — Hero Image Composition */}
//           <div className="relative pt-10 lg:pt-20">
//             <div className="relative mx-auto w-full max-w-[850px]">

//               {/* Main Image Illustration */}
//               <div className="relative z-10 w-full">
//                 <img
//                   src="https://whitelabelfox.com/assets/images/homepage/main-slider-vector-large.webp"
//                   alt="Hero Vector"
//                   className="w-full h-auto"
//                 />
//               </div>

//             </div>
//           </div>


//         </div>
//       </div>
//     </section>);

// }
























import { ArrowRight, Star } from "lucide-react";

const reviewBadges = [
  {
    name: "Google Review",
    rating: "4.9",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    border: "border-orange-500/30",
    color: "text-orange-600"
  },
  {
    name: "Goodfirm Review",
    rating: "4.9",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-goodfirms-logo-icon-download-in-svg-png-gif-file-formats--brand-brands-pack-logos-icons-2630044.png",
    border: "border-blue-500/30",
    color: "text-blue-600"
  },
  {
    name: "Clutch Review",
    rating: "4.9",
    logo: "https://clutch.co/sites/all/themes/clutch/logo.svg",
    border: "border-red-500/30",
    color: "text-red-600"
  },
  {
    name: "Trustpilot Review",
    rating: "4.3",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968936.png",
    border: "border-green-500/30",
    color: "text-green-600"
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-[650px] flex items-start bg-gradient-to-br from-white via-blue-50 to-orange-50 overflow-hidden pt-8 pb-12">

      {/* animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:max-w-2xl animate-fade-in">

            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm hover:shadow-md transition">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
              <span className="text-sm font-semibold text-gray-700">
                Digital Solutions
              </span>
            </div>

            {/* heading */}
            <h1 className="text-3xl lg:text-[46px] font-bold text-gray-900 leading-[1.1] tracking-tight">
              Transforming Ideas With <br />
              <span className="text-primary bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Product Engineering
              </span>
            </h1>

            {/* paragraph */}
            <p className="text-[16px] lg:text-[18px] text-gray-600 leading-[1.7] max-w-xl">
              As a leading clone app development company, we provide scalable
              product engineering services & deliver ready-to-launch or custom
              app, Website & Software for diverse industries.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-bold text-[16px] hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 active:scale-95"
              >
                Consult Our Experts

                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>

            {/* REVIEW CARDS */}
            <div className="grid grid-cols-2 gap-4 max-w-lg pt-4">
              {reviewBadges.map((badge) => (
                <div
                  key={badge.name}
                  className={`flex items-center gap-4 bg-white border-2 ${badge.border} rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img
                      src={badge.logo}
                      alt={badge.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-gray-800">
                      {badge.name}
                    </span>

                    <div className="flex items-center gap-1">
                      <span className="text-[14px] font-bold text-gray-900">
                        {badge.rating}
                      </span>

                      <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative pt-10 lg:pt-20">

            <div className="relative mx-auto w-full max-w-[850px]">

              <div className="relative z-10 w-full animate-float">
                <img
                  src="https://whitelabelfox.com/assets/images/homepage/main-slider-vector-large.webp"
                  alt="Hero Vector"
                  className="w-full h-auto"
                />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
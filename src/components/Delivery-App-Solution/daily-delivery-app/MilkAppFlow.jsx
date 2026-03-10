// import React from "react";

// const steps = [
//   { id: 1, title: "Login/Signup", img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-1.webp" },
//   { id: 2, title: "Find Product", img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-2.webp" },
//   { id: 3, title: "Select Subscription", img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-3.webp" },
//   { id: 4, title: "Select Quantity", img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-4.webp" },
//   { id: 5, title: "Select Date", img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-5.webp" },
//   { id: 6, title: "Add to Cart", img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-6.webp" },
//   { id: 7, title: "Place Order", img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-7.webp" },
//   { id: 8, title: "Proceed to Pay", img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-8.webp" },
// ];

// const MilkAppFlow = () => {

//   const firstRow = steps.slice(0,4);
//   const secondRow = steps.slice(4,8).reverse();

//   return (
//     <section className="py-20 bg-white relative">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Badge */}
//         <div className="text-center mb-6">
//           <span className="inline-flex items-center gap-2 px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-700">
//             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//             Graphical Flow Of Application
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Graphical Flow of Our{" "}
//           <span className="text-teal-600">Milk Delivery App</span>
//         </h2>

//         {/* Text */}
//         <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
//           Discover the seamless flow of our milk delivery app, from order placement
//           to delivery. This visual guide highlights the efficiency and ease of use
//           for both customers and drivers.
//         </p>

//         {/* FLOW CONTAINER */}
//         <div className="relative">

//           {/* SVG CONNECTOR LINES */}
//      {/* SVG CONNECTOR LINES */}
// <svg
//   className="absolute top-0 left-0 w-full h-full pointer-events-none"
//   viewBox="0 0 1200 350"
// >

//   {/* TOP ROW */}

//   {/* 1 → 2 (UP) */}
//   <path
//     d="M190 120 C260 60, 340 60, 410 120"
//     stroke="#94a3b8"
//     strokeWidth="2"
//     fill="none"
//     strokeDasharray="6 6"
//   />

//   {/* 2 → 3 (DOWN) */}
//   <path
//     d="M410 120 C480 180, 560 180, 630 120"
//     stroke="#94a3b8"
//     strokeWidth="2"
//     fill="none"
//     strokeDasharray="6 6"
//   />

//   {/* 3 → 4 (UP) */}
//   <path
//     d="M630 120 C700 60, 780 60, 850 120"
//     stroke="#94a3b8"
//     strokeWidth="2"
//     fill="none"
//     strokeDasharray="6 6"
//   />

//   {/* BOTTOM ROW */}

//   {/* 5 → 6 (UP) */}
//   <path
//     d="M850 270 C780 210, 700 210, 630 270"
//     stroke="#94a3b8"
//     strokeWidth="2"
//     fill="none"
//     strokeDasharray="6 6"
//   />

//   {/* 6 → 7 (DOWN) */}
//   <path
//     d="M630 270 C560 330, 480 330, 410 270"
//     stroke="#94a3b8"
//     strokeWidth="2"
//     fill="none"
//     strokeDasharray="6 6"
//   />

//   {/* 7 → 8 (UP) */}
//   <path
//     d="M410 270 C340 210, 260 210, 190 270"
//     stroke="#94a3b8"
//     strokeWidth="2"
//     fill="none"
//     strokeDasharray="6 6"
//   />

// </svg>

//           {/* ROW 1 */}
//           <div className="grid md:grid-cols-4 gap-12 text-center mb-20 relative">
//             {firstRow.map((step) => (
//               <div key={step.id} className="flex flex-col items-center">
//                 <h4 className="text-lg font-semibold text-teal-700 mb-4">
//                   {step.id}. {step.title}
//                 </h4>

//                 <div className="w-44 h-44 bg-teal-50 rounded-full flex items-center justify-center">
//                   <img src={step.img} alt={step.title} className="w-28" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ROW 2 */}
//           <div className="grid md:grid-cols-4 gap-12 text-center relative">
//             {secondRow.map((step) => (
//               <div key={step.id} className="flex flex-col items-center">
//                 <h4 className="text-lg font-semibold text-teal-700 mb-4">
//                   {step.id}. {step.title}
//                 </h4>

//                 <div className="w-44 h-44 bg-teal-50 rounded-full flex items-center justify-center">
//                   <img src={step.img} alt={step.title} className="w-28" />
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MilkAppFlow;



















import React from "react";

const steps = [
  {
    id: 1,
    title: "Login/Signup",
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-1.webp",
  },
  {
    id: 2,
    title: "Find Product",
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-2.webp",
  },
  {
    id: 3,
    title: "Select Subscription",
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-3.webp",
  },
  {
    id: 4,
    title: "Select Quantity",
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-4.webp",
  },
  {
    id: 5,
    title: "Select Date",
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-5.webp",
  },
   {
    id: 6,
    title: "Add to Cart",
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-6.webp",
  },
  {
    id: 7,
    title: "Place Order",
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-7.webp",
  },
  {
    id: 8,
    title: "Proceed to Pay",
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-graphical-flow-8.webp",
  },
];

const MilkAppFlow = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP BADGE */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-700">
            <span className="w-2 h-2 bg-[#003C52] rounded-full"></span>
            Graphical Flow Of Application
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Graphical Flow of Our{" "}
          <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">Milk Delivery App</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Discover the seamless flow of our milk delivery app, from order placement
          to delivery. This visual guide highlights the efficiency and ease of use
          for both customers and drivers.
        </p>

        {/* STEPS GRID */}
        <div className="grid md:grid-cols-4 gap-12 text-center">

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">

              {/* STEP TITLE */}
              <h4 className="text-lg font-semibold text-teal-700 mb-4">
                {step.id}. {step.title}
              </h4>

              {/* IMAGE CIRCLE */}
              <div className="w-44 h-44 bg-teal-50 rounded-full flex items-center justify-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-28"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MilkAppFlow;
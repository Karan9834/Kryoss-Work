// import React from "react";

// const stats = [
//   { number: "250+", label: "Customers" },
//   { number: "40+", label: "Team" },
//   { number: "70+", label: "Countries" },
//   { number: "08+", label: "Industry Experience" },
// ];

// const MovingStats = () => {
//   return (
//     <section className="bg-[#05002D] py-6 overflow-hidden w-full">

//       <div className="scroll-left flex items-center whitespace-nowrap">

//         {[...stats, ...stats].map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-12 px-12 text-white shrink-0"
//           >
//             <div className="text-center">
//               <h3 className="text-3xl font-bold">{item.number}</h3>
//               <p className="text-sm text-gray-300">{item.label}</p>
//             </div>

//             <div className="h-10 w-[1px] bg-gray-400"></div>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default MovingStats;













import React from "react";

const stats = [
  { number: "250+", label: "Customers" },
  { number: "40+", label: "Team" },
  { number: "70+", label: "Countries" },
  { number: "08+", label: "Industry Experience" },
];

const MovingStats = () => {
  return (
    <section className="bg-[#05002D] py-8 overflow-hidden w-full">

      <div className="marquee scroll-left flex items-center whitespace-nowrap">

        {[...stats, ...stats].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-10 px-16 text-white shrink-0"
          >

            <div className="text-center">
              <h3 className="text-3xl font-bold">{item.number}</h3>
              <p className="text-sm text-gray-300">{item.label}</p>
            </div>

            <div className="h-10 w-[1px] bg-gray-400"></div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default MovingStats;
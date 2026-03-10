// import React from "react";

// const years = [
//   { year: "2025", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2025.webp" },
//   { year: "2024", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2024.webp" },
//   { year: "2023", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2023.webp" },
//   { year: "2022", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2022.webp" },
//   { year: "2021", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2021.webp" },
//   { year: "2020", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2020.webp" },
//   { year: "2019", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2019.webp" },
//   { year: "2018", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2018.webp" },
// ];

// const YearsTimeLine = () => {
//   return (
//     <section className="bg-white py-20">

//       {/* Heading */}
//       <div className="max-w-7xl mx-auto px-6 text-center mb-20">

//         <div className="flex justify-center mb-4">
//           <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-sm">
//             <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
//             8 Years of Excellence
//           </div>
//         </div>

//         <h2 className="text-4xl font-bold mb-4">
//           Celebrating A Legacy of 8 Years, and Still Counting!
//         </h2>

//         <p className="text-gray-600 max-w-3xl mx-auto">
//           A journey full of achievements, memories and teamwork.
//         </p>

//       </div>

//       {/* Stack Cards */}
//       <div className="max-w-6xl mx-auto px-6">

//         {years.map((item, index) => (
//           <div
//             key={index}
//             className="sticky top-28"
//             style={{
//               zIndex: index + 1,
//               marginTop: index === 0 ? "0px" : "-70vh"
//             }}
//           >
//             <div className="bg-gradient-to-r from-green-200 to-teal-200 rounded-[40px] p-10 shadow-xl">

//               <img
//                 src={item.img}
//                 alt={item.year}
//                 className="w-full rounded-3xl"
//               />

//             </div>
//           </div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default YearsTimeLine;




















import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const years = [
  { year: "2025",
     img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2025.webp",
     bg: "from-yellow-200 to-orange-200"
     },
  { year: "2024", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2024.webp",bg: "from-green-200 to-emarald-300" },
  { year: "2023", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2023.webp",bg: "from-purple-200 to-pink-200" },
  { year: "2022", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2022.webp",bg: "from-blue-200 to-cyan-200" },
  { year: "2021", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2021.webp",bg: "from-orange-200 to-red-200" },
  { year: "2020", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2020.webp",bg: "from-teal-200 to-green-200" },
  { year: "2019", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2019.webp",bg: "from-indigo-200 to-purple-200" },
  { year: "2018", img: "https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-2018.webp",bg: "from-pink-200 to-rose-200" }
];

const YearsTimeline = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".year-card");

    cards.forEach((card, index) => {
      if (index === 0) return;

      gsap.from(card, {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: () => `${index * window.innerHeight} top`,
          end: () => `${(index + 1) * window.innerHeight} top`,
          scrub: true,
        },
      });
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=" + window.innerHeight * years.length,
      pin: true,
    });

  }, []);

  return (
    <section className="bg-white py-20">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">

        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
            8 Years of Excellence
          </div>
        </div>

        <h2 className="text-4xl font-bold">
          Celebrating  <span className="text-orange-400">A Legacy of 8 Years, and Still Counting!</span>
        </h2>

        

      </div>

      {/* Timeline */}
      <div
        ref={sectionRef}
        className="relative h-screen max-w-7xl mx-auto"
      >

        {years.map((item, index) => (
          <div
            key={index}
            className="year-card absolute top-0 left-0 w-full h-screen flex items-center justify-center px-6"
            // style={{ zIndex:   years.length- index }}
            style={{
                 zIndex: index + 1,
transform: `translateY(${index * 8}px)`

             }}
          >
            <div className={`bg-gradient-to-r ${item.bg}  rounded-[40px] p-10 shadow-xl max-w-6xl w-full h-[80vh]`}>

              <img
                src={item.img}
                alt={item.year}
                className="w-full rounded-3xl h-full object-cover"
              />

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default YearsTimeline;
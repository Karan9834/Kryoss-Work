// import React from "react";
import { ArrowRight } from "lucide-react";


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const years = [
  { year: "2025",
     img: "https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-2025.webp",
     bg: "from-yellow-200 to-orange-200"
     },
  { year: "2024", img: "https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-2024.webp",bg: "from-green-200 to-emarald-300" },
  { year: "2023", img: "https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-2023.webp",bg: "from-purple-200 to-pink-200" },
  { year: "2022", img: "https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-2022.webp",bg: "from-blue-200 to-cyan-200" },
  { year: "2021", img: "https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-2021.webp",bg: "from-orange-200 to-red-200" },
  { year: "2020", img: "https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-2020.webp",bg: "from-teal-200 to-green-200" },
  { year: "2019", img: "https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-2019.webp",bg: "from-indigo-200 to-purple-200" },
  { year: "2018", img: "https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-2018.webp",bg: "from-pink-200 to-rose-200" }
];


  

const services = [
  {
    title: "Flutter App Development",
    desc: "Build high-performance cross-platform mobile apps using Flutter with a single codebase.",
    icon: "/icons/flutter.png",
  },
  {
    title: "Kotlin App Development",
    desc: "Modern Android app development using Kotlin for better performance and safety.",
    icon: "/icons/kotlin.png",
  },
  {
    title: "Android App Development",
    desc: "Custom Android applications designed to deliver seamless user experiences.",
    icon: "/icons/android.png",
  },
  {
    title: "iOS App Development",
    desc: "Native iOS apps developed with high performance and elegant UI.",
    icon: "/icons/ios.png",
  },
  {
    title: "MVP App Development",
    desc: "Launch your startup idea quickly with a minimum viable product.",
    icon: "/icons/mvp.png",
  },
  {
    title: "White Label Web Development",
    desc: "Expand your agency services with our white label development solutions.",
    icon: "/icons/web.png",
  },
  {
    title: "Laravel Development",
    desc: "Powerful web applications using Laravel with scalable architecture.",
    icon: "/icons/laravel.png",
  },
  {
    title: "WordPress Development",
    desc: "Professional websites and CMS solutions built on WordPress.",
    icon: "/icons/wordpress.png",
  },
  {
    title: "Ecommerce Development",
    desc: "Build secure and scalable ecommerce platforms for your online business.",
    icon: "/icons/ecommerce.png",
  },
];

const BusinessGrowthPage = () => {

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
    <div>

   {/* HERO SECTION */}
<section className="py-24 bg-gradient-to-br from-blue-200 via-white to-purple-200 relative overflow-hidden text-center">

  {/* gradient shapes */}
  <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

  <div className="max-w-4xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      Careers
    </h1>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed text-lg mb-10">
      Are you a tech geek looking for a suitable position in the IT field?  
      You are right around the corner. Just one step ahead to grab a position
      in our company and explore the IT sector as it may turn out to be your
      cup of tea. Find below the current openings in our company and send us
      your CV.
    </p>

    {/* Button */}
    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
      View Vacancies
    </button>

  </div>

</section>


     



 <section className="py-14 "
    
    style={{
        backgroundImage: "url(https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-main-slider-bg.webp)",
        backgroundRepeat: "no-repeat"
    }}
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
            Life at KryossWork
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
           Life at  <span className="text-orange-500">KryossWork</span> 
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          We believe in encouraging our employee to excel in whatever they do in
          the best possible manner with joy. Our culture will give you the space
          to fulfil your dreams and empower excellence.
        </p>

      </div>

      {/* Full Width Image */}
      <div className="w-full">
        <img
          src="https://whitelabelfox.com/assets/images/life-at-kryosswork/life-at-white-label-fox-main-slider-graphic.webp"
          alt="Work Culture"
          className="w-full h-[500px] object-cover"
        />
      </div>

    </section>



    


















  
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
  
    </div>
  );
};

export default BusinessGrowthPage;
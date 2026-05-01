import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sol1 from "../../assets/E-Commerce-App/sol1.png"
import sol2 from "../../assets/E-Commerce-App/sol2.png"
import sol3 from "../../assets/E-Commerce-App/sol3.png"
import sol4 from "../../assets/E-Commerce-App/sol4.png"
import sol5 from "../../assets/E-Commerce-App/sol5.png"


const projects = [
  {
    title: "Adorawe",
    subtitle: "Fashion online shopping mall",
    desc: "Adorawe fashion online shopping mall is stylish destination, this fashion app designed for Saudi Arabia, United Arab Emirates, Kuwait, Oman, Bahrain & Qatar shopper Adorawe is an vogue closet for women, 500+ daily new casual two pieces, evening dress, nice bags in affordable price.",
    img: sol1,
  },
  {
    title: "Cartlow",
    subtitle: "Smarter Way To Shop",
    desc: "Meet Cartlow - is online shopping destination for buying Pre-owned, Open-box and Clearance products at the lowest price in UAE. Cartlow is a re-commerce initiative built on the bases of helping retailers discard less to save the environment while passing on benefits of savings to the customers.",
    img: sol2,
  },
  {
    title: "GeekBuying",
    subtitle: "Make life smart and easy",
    desc: "Online shopping with GeekBuying is very easy as you get to shop from the comfort of your home and get products delivered at your doorstep. By downloading the GeekBuying free online shopping app you can effortlessly browse our massive collection of more than 20,000 products.",
    img: sol3,
  },
  {
    title: "China Gadgets",
    subtitle: "The Gadget App",
    desc: "In the China-Gadgets App you will find the best reviews and craziest gadgets in the whole web! You get every gadget at best price with complete comparison and insights for smarter buying.",
    img: sol4,
  },
  {
    title: "Another App",
    subtitle: "Modern Shopping",
    desc: "A modern e-commerce experience built for performance, scalability and seamless user experience across devices.",
    img: sol5,
  },
];

const OurWork = ({
  theme = {
    primary: "text-purple-600",
    accent: "bg-purple-600",
  },
}) => {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((index + 1) % projects.length);
  const prev = () =>
    setIndex((index - 1 + projects.length) % projects.length);

  const current = projects[index];

  return (
    <section className="w-full py-24 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className={theme.primary}>Our</span> Work
        </h2>
        <div className={`w-16 h-[2px] mx-auto mt-3 ${theme.accent}`} />

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-12 relative">

        {/* IMAGE SIDE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={current.img}
            alt={current.title}
            className="w-[85%] md:w-[95%] transition duration-500"
          />
        </div>

        {/* TEXT SIDE */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            <span className={theme.primary}>{current.title}</span> - {current.subtitle}
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {current.desc}
          </p>

          <button className="mt-4 px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
            VIEW MORE
          </button>
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 bg-white border rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 bg-white border rounded-full shadow hover:scale-110 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-10">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-6 rounded-full transition ${
              i === index ? theme.accent : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWork;
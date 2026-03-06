import React from "react";
import { FaYoutube } from "react-icons/fa";

const testimonials = [
  {
    name: "David",
    img: "/images/client1.jpg",
    text: "Mr. David highly praised our team as superb, expressing great satisfaction with our service.",
  },
  {
    name: "Aman",
    img: "/images/client2.jpg",
    text: "Mr. Aman expressed his excitement and satisfaction with the project.",
  },
  {
    name: "Nora",
    img: "/images/client3.jpg",
    text: "I am very happy and satisfied with the work done on our project.",
  },
  {
    name: "George",
    img: "/images/client4.jpg",
    text: "Mr. George praised our professionalism and plans future collaboration.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-[#c9d6e3] via-[#e0d5e8] to-[#f3e2d1]">

      <div className="max-w-7xl mx-auto px-6">

        {/* badge */}
        <div className="text-center mb-4">
          <span className="inline-block border px-4 py-1 rounded-full text-sm">
            People Love Our Platform!
          </span>
        </div>

        {/* heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          Let's Check <span className="text-pink-500">What Our Clients Love to Share!</span>
        </h2>

        {/* cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 text-center shadow-sm relative"
            >
              
              {/* image */}
              <div className="relative mb-5">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[140px] object-cover rounded-lg"
                />

                {/* play icon */}
                <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-red-500 text-white p-2 rounded-full shadow">
                  <FaYoutube size={16}/>
                </div>
              </div>

              <h4 className="font-semibold text-sm mb-2 mt-3">
                {item.name}
              </h4>

              <p className="text-xs text-gray-600 leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition">
            View 20 More Testimonials
          </button>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;
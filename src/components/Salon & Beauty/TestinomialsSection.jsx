import React from "react";

const TestinomialsSection = () => {
  const testimonials = [
    {
      name: "Acharya",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/DP-Acharya.webp",
      desc: "Acharya from Nepal acknowledges the Vyom team for frictionless delivery and rapid technical assistance, endorsing our frameworks for digital commerce.",
    },
    {
      name: "Pablo",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/Pablo.webp",
      desc: "Review the testimonial from Mr. Pablo in Mexico, who highlights our systematic professionalism and operational agility during his platform launch.",
    },
    {
      name: "David",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/David.webp",
      desc: "David conveys exceptional satisfaction with our collaborative engineering, emphasizing technical excellence and anticipating long-term strategic partnership.",
    },
    {
      name: "George",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/George-Nwokeabia.webp",
      desc: "George Nwokeabia recognizes our specialized expertise and technical integrity, initiating further coordination following a smooth transition to our ecosystem.",
    },
  ];

  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(108.34deg, rgba(173, 190, 251, 0.2) 5.31%, rgba(139, 224, 251, 0.2) 27.63%, rgba(136, 220, 144, 0.2) 49.96%, rgba(239, 221, 68, 0.2) 72.28%, rgba(255, 183, 107, 0.2) 94.61%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="inline-flex items-center gap-2 border border-[#55D7FF] 
                          text-black px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            Community Validation
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
           Examine the <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> Experiences shared by Our Global Partners</span>
          </h2>

          

        </div>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-4 gap-8 relative">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg 
                         pt-16 pb-8 px-6 text-center 
                         hover:shadow-xl transition duration-300"
            >
              {/* PROFILE IMAGE */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text mt-4">
                {item.name}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* ===== BUTTON ===== */}
        <div className="text-center mt-16">
          <button
            className="px-8 py-4 rounded-full font-semibold text-white 
                       bg-gradient-to-r from-[#FF2485] to-[#C739FF] 
                       hover:scale-105 transition duration-300"
          >
            Watch Experience
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestinomialsSection;
import React from "react";

const TestinomialsSection = () => {
  const testimonials = [
    {
      name: "Acharya",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/Mr-Medyan.webp",
      desc: "Mr. Medyan from Jordan shares his experience after purchasing our food delivery app, highlighting clear communication & strong delivery quality.",
    },
    {
      name: "Anurag Borkar",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/Anurag-Borkar.webp",
      desc: "Mr. Anurag Borkar from Papua New Guinea appreciates our timely delivery and dedicated after-sales support, even on holidays, for his GoFood app launch.",
    },
    {
      name: "Sertima",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/Sertima.webp",
      desc: "Mr. Sertima from Trinidad and Tobago praises our professionalism, transparency, and support for his 'Delivery Anything' project, appreciating our team's passion.",
    },
    {
      name: "Elizabeth Ramos",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/Elizabeth-Ramos.webp",
      desc: "Ms. Elizabeth Ramos from the Philippines shares her experience, praising our ability to deliver the 'On-Demand Service App' as expected and our support",


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
           Client Testimonials
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
            <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> What Our Clients Say</span>About Working With Us
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
           View 20 More testinomials
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestinomialsSection;
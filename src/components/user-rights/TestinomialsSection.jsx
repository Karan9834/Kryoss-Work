import React from "react";

const TestinomialsSection = () => {
  const testimonials = [
    {
      name: "Acharya",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/DP-Acharya.webp",
      desc: "M.R. Acharya from Nepal praises White Label Fox for seamless service, fast support, and highly recommends us for online business solutions..",
    },
    {
      name: "pablo",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/Pablo.webp",
      desc: "Watch our happy client, Mr. Pablo from Mexico, share his experience with our Gojek clone app, praising our professionalism and responsiveness.!",
    },
    {
      name: "David",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/David.webp",
      desc: "Mr. David highly praised our team as superb, expressing great satisfaction with our service and eagerness for future successful collaboration.",
    },
    {
      name: "George",
      image: "https://whitelabelfox.com/assets/images/what-our-client-says/George-Nwokeabia.webp",
      desc: "Mr. George Nwokeabia praised our professionalism and plans future collaboration after a successful Fox-Jek app purchase.",
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

          <div className="inline-flex items-center gap-2 border border-[#e69d0b] 
                          text-black px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[#e3820c] rounded-full"></span>
            People Love Our Platform!
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
           Let's Check <span className="text-[#e9860d]"> What Our Clients Love to Share!</span>
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

              <h3 className="text-xl font-semibold text-[#eb8304] mt-4">
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
                       bg-gradient-to-r from-[#ac611b] to-[#ef7d03] 
                       hover:scale-105 transition duration-300"
          >
            Watch 20 more testimonials
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestinomialsSection;
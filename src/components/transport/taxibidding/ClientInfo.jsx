import React from "react";

const testimonials = [
  {
    name: "Mr. Stan",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Mr. Stan shares his seamless and rewarding journey with our taxi app solution during the development of his ride-hailing platform. He highlights the team’s dedication, professionalism, and timely delivery."
  },
  {
    name: "Mr. Labeeb",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf",
    text: "Mr. Labeeb praises the platform for delivering a powerful and scalable taxi booking app. He appreciates the commitment, transparency, and ongoing technical support provided throughout the process."
  },
  {
    name: "Oliveira Osman",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    text: "Oliveira shares how the white-label solution helped him launch quickly and build strong relationships with his customers. The smooth workflow and modern design exceeded expectations."
  },
  {
    name: "Alfanzo",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    text: "Our USA-based client Alfanzo explains how the solution helped transform his startup into a profitable business within weeks. He appreciates the flexibility and advanced features."
  }
];

const ClientFeedbackSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-[#d9e6e4] to-[#e7dcc9]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 border border-[#cbd5c0] bg-white px-4 py-1 rounded-full text-sm text-gray-700 mb-6">
          <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
          Client Feedback
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          What Clients Say About Working With Our Taxi App Solutions
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-xl"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#6dbb1a] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-semibold text-lg mb-3">
                {item.name}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button className="bg-[#6dbb1a] hover:bg-[#5aa115] text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-md">
            Watch Client Reviews
          </button>
        </div>

      </div>
    </section>
  );
};

export default ClientFeedbackSection;
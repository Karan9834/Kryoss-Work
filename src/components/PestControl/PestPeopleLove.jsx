import React from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Acharya",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    text: "M.R. Acharya from Nepal praises KryossOne for seamless service, fast support, and highly recommends us for online business solutions."
  },
  {
    name: "pablo",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Watch our happy client, Mr. Pablo from Mexico, share his experience with our Gojek clone app praising our professionalism and responsiveness."
  },
  {
    name: "David",
    image:
      "https://randomuser.me/api/portraits/men/56.jpg",
    text: "Mr. David highly praised our team as superb expressing great satisfaction with our service and eagerness for future successful collaboration."
  },
  {
    name: "George",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Mr. George praised our professionalism and plans future collaboration after a successful app purchase."
  }
];

export default function Testimonials() {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(90deg,#c7d6f1,#d7d9c5,#e7d7c6)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block border border-gray-300 text-sm px-4 py-1 rounded-full mb-6">
          People Love Our Platform!
        </span>

        {/* Title */}
        <h2 className="text-4xl font-semibold mb-16">
          Let's Check{" "}
          <span className="text-orange-500">
            What Our Clients Love to Share!
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur rounded-2xl p-6 relative"
            >
              {/* Image */}
              <div className="relative mb-6">
                <img
                  src={item.image}
                  className="w-full h-40 object-cover rounded-xl"
                />

                {/* Play button */}
                <div className="absolute left-1/2 bottom-[-18px] transform -translate-x-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                  <Play size={18} fill="white" />
                </div>
              </div>

              {/* Name */}
              <h4 className="font-semibold mb-2">{item.name}</h4>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-14 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium">
          Watch Their Experience
        </button>

      </div>
    </section>
  );
}
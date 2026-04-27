import React from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Acharya",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "M.R. Acharya from Nepal praises KryossOne for seamless service, fast support, and highly recommends us for online business solutions."
  },
  {
    name: "pablo",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "Watch our happy client, Mr. Pablo from Mexico, share his experience with our Gojek clone app, praising our professionalism and responsiveness."
  },
  {
    name: "David",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Mr. David highly praised our team as superb, expressing great satisfaction with our service and eagerness for future successful collaboration."
  },
  {
    name: "George",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Mr. George Nwokeabia praised our professionalism and plans future collaboration after a successful Fox-Jek app purchase."
  }
];

const ClientLove = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#cfdbe5] to-[#e9dcc6]">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center border border-gray-400 rounded-full px-4 py-1 text-sm mb-6 bg-white/40 backdrop-blur">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
          People Love Our Platform!
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-14">
          Let's Check <span className="text-green-700">What Our Clients Love</span> to Share!
        </h2>


        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 relative"
            >

              {/* Image */}
              <div className="relative w-full h-[160px] mb-6">

                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Play Button */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-600 p-3 rounded-full shadow-md cursor-pointer">
                  <Play className="text-white w-4 h-4" />
                </div>

              </div>


              {/* Name */}
              <h3 className="font-semibold mb-2">{item.name}</h3>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}

        </div>


        {/* Button */}
        <div className="mt-14">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
            Watch Their Experience
          </button>
        </div>

      </div>

    </section>
  );
};

export default ClientLove;
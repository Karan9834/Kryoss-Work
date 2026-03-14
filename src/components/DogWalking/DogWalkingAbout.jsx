import React from "react";
import DogAbout from "../../assets/DogWalking/dogabout.webp"

const DogWalkingAbout = () => {
  return (
    <section className="w-full py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 border border-green-200 rounded-full px-4 py-1 text-sm text-gray-700 bg-green-50">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            About Dog Walking App Development
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-14 leading-tight">
          <span className="text-green-600">Empower Pet Care with</span>{" "}
          Dog Walking and Sitting App Solutions
        </h2>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={DogAbout}
              alt="Dog walking app"
              className="w-[300px] sm:w-[380px] md:w-[420px] lg:w-[520px] object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="text-gray-600 space-y-6 text-sm sm:text-base leading-relaxed">

            <p>
              The demand for dog-walking services is rapidly growing in countries
              like the USA, UK, and Canada, driven by increasing pet adoption
              and busy lifestyles. Many dog owners need reliable solutions to
              ensure their pets receive proper care despite their tight schedules.
            </p>

            <p>
              Popular platforms like Rover and Wag have set the foundation for a
              thriving pet care industry, offering a great opportunity for
              entrepreneurs. Our scalable dog-walking app solution helps you
              establish and grow your business effortlessly.
            </p>

            <p>
              The platform includes seamless booking, real-time tracking, and a
              smooth user experience for both pet owners and professional walkers.
            </p>

            <p>
              Secure payments, instant notifications, scheduling tools, and
              booking management make the process simple and efficient.
            </p>

            <p>
              A rating and review system ensures that pet owners can select
              trusted dog walkers based on previous customer feedback.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DogWalkingAbout;
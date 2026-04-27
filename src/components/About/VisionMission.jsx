import React from "react";

const VisionMission = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
            Guiding Principles
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-4">
            Our <span className="text-orange-500">Promise & Purpose</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            At KryossOne, we are dedicated to advancing digital
            transformation through creativity, reliability, and meaningful impact.
            Our principles shape the way we build solutions that matter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Vision Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

            <h3 className="text-2xl font-bold mb-2 text-[#8A4C29]">
              Our Vision
            </h3>

            <div className="text-gray-600 leading-relaxed bg-[#FFE2D1] p-4">
              <p className="text-[#8A4C29] font-medium mb-4">
                Shape the future of digital business worldwide
              </p>
              We envision becoming a recognized force in digital transformation,
              helping organizations of all sizes harness the power of modern
              technology. Our goal is to foster a landscape where intelligent
              systems, cloud capabilities, and thoughtful software design drive
              meaningful progress. By adapting alongside emerging trends, we aim
              to turn ideas into reality, empowering businesses to achieve
              lasting success and sustainable growth.
            </div>

          </div>

          {/* Mission Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

            <h3 className="text-2xl font-bold mb-2 text-[#96731E]">
              Our Mission
            </h3>

            <div className="text-gray-600 leading-relaxed bg-[#FFF6DD] p-4">
              <p className="text-[#96731E] font-medium mb-4">
                Build reliable, thoughtful technology solutions
              </p>
              Our mission is to create dependable, inventive, and adaptable
              digital tools that enable businesses to succeed in a changing
              marketplace. We focus on crafting customized applications,
              incorporating data-driven insights, and refining technical
              infrastructure to boost performance. Our collaborative team works
              alongside startups, established companies, and industry pioneers
              to convert obstacles into opportunities through practical
              technology adoption. At KryossOne, we are committed to quality,
              client success, and lasting relationships that nurture business
              evolution and fresh thinking.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
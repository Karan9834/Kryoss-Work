import React from "react";

const VisionMission = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
            Our Vision & Mission
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-4">
            Our <span className="text-orange-500">Vision & Mission</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            At Kryoss Work, we are committed to driving digital
            transformation with innovation, scalability, and excellence.
            Our vision and mission guide us toward impactful solutions.
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
                <p className="text-[#8A4C29] font-medium mb-4 ">
              Lead in digital transformation globally
            </p>
              Our vision is to become a global leader in digital transformation,
              empowering businesses of all sizes with advanced technology and
              scalable solutions. We aim to create a future where AI, cloud
              computing, and software innovations drive efficiency and success.
              By continuously evolving with emerging trends, we strive to bridge
              the gap between ideas and execution, enabling businesses to achieve
              long-term growth and sustainability.
            </div>

          </div>

          {/* Mission Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

            <h3 className="text-2xl font-bold mb-2 text-[#96731E]">
              Our Mission
            </h3>

          

            <div className="text-gray-600 leading-relaxed bg-[#FFF6DD] p-4">
                  <p className="text-[#96731E] font-medium mb-4">
              Deliver high-quality digital solutions
            </p>
              Our mission is to deliver high-quality, innovative, and scalable
              digital solutions that help businesses thrive in a competitive
              market. We focus on building tailored applications, integrating
              AI-driven insights, and optimizing cloud infrastructure to enhance
              performance. Our dedicated team works closely with startups,
              enterprises, and industry leaders to transform challenges into
              opportunities through seamless technology adoption. At White Label
              Fox, we are committed to excellence, customer success, and
              long-term partnerships that foster business growth and innovation.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
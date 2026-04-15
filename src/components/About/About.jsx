import React from "react";

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="bg-[#F6E7C9] rounded-[40px] p-6">
          <img
            src="/images/company/companyabout/_About%20Us%20(1).png"
            alt="Kryoss Work Team"
            className="w-full h-auto rounded-[30px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            ● Our Company
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-snug mb-6">
            <span className="text-orange-500">
              Kryoss Work:
            </span>{" "}
            Leading the Way in Next-Generation Digital Innovation
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 mb-4 leading-relaxed">
            With over 5 years of experience in digital transformation, Kryoss Work
            has become a reliable technology partner. We merge creativity and 
            technical excellence to provide adaptable solutions that meet 
            changing business demands.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We assist startups, mid-sized companies, and large enterprises in building 
            efficient, production-ready platforms. From analyzing unique operational 
            needs to delivering dependable systems, we help our clients maintain 
            a competitive edge in the international marketplace.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our skilled team of engineers, creatives, and planners 
            utilizes advanced technologies to deliver streamlined,
            cloud-enabled systems engineered for sustained success.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;
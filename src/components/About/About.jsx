import React from "react";

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="bg-[#F6E7C9] rounded-[40px] p-6">
          <img
            src="https://whitelabelfox.com/assets/images/about-us/about-us-page-about-us-image.webp"
            alt="White Label Fox Team"
            className="w-full h-auto rounded-[30px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            ● About Us
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-snug mb-6">
            White Label Fox:{" "}
            <span className="text-orange-500">
              Setting the Pace to Build Next-gen Solutions
            </span>
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 mb-4 leading-relaxed">
            With 8+ years of experience in digital solutions, White Label Fox
            has established itself as a trusted technology partner. We combine
            innovation and expertise to deliver scalable solutions that align
            with evolving business needs.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We help startups, SMEs, and enterprises build efficient,
            market-ready products. From understanding unique business
            requirements to delivering robust solutions, we ensure our clients
            stay ahead in the global market.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our dedicated team of developers, designers, and strategists
            leverages cutting-edge technologies to deliver seamless,
            cloud-powered solutions tailored for success.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;
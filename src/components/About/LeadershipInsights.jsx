import React from "react";

const LeadershipInsights = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <div className="text-center mb-16">

          <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
            Leadership Insights
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-4">
            A Vision  <span className="text-orange-500">for Innovation & Growth</span>
          </h2>

          <p className="text-gray-600 max-w-5xl mx-auto">
            Our Managing Director & Founder shares the vision behind White Label Fox—building
            cutting-edge solutions, fostering team growth, and making a lasting impact on
            businesses and society.
          </p>

        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div>
            <img
              src="https://whitelabelfox.com/assets/images/about-us/word-from-our-Managing-Director.webp"
              alt="Jaykishan Lathigara"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <h3 className="text-2xl font-bold mb-1 text-orange-500">
              Mr. Jaykishan Lathigara
            </h3>

            <p className=" font-medium mb-4">
              Managing Director & Founder @ White Label Fox
            </p>

            {/* Quote */}
            <p className="italic text-gray-700 mb-6">
              “At White Label Fox Pvt Ltd, our vision is to be the top remote tech
              agency for enterprises and startups, delivering innovative software
              solutions with exceptional service.”
            </p>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              We prioritize team growth, continuous upskilling, and providing
              greater opportunities for our people.
            </p>

            <p className="text-gray-600 mb-4">
              Our goal is to build a strong, impactful organization that benefits
              not just our employees and clients but also contributes positively
              to society.
            </p>

            <p className="text-gray-600">
              With a commitment to excellence and innovation, we strive to create
              solutions that drive success. Together, we are shaping the future
              of technology.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LeadershipInsights;
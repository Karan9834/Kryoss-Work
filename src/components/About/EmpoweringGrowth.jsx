import { Link } from 'react-router-dom';
import React from "react";

const EmpoweringGrowth = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <span className="inline-block border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm w-fit mb-4">
              Empowering Growth
            </span>

            {/* Heading */}
            <h2 className="text-4xl font-bold mb-4">
              Empowering Growth <br />
              <span className="text-orange-500">with Innovation</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 mb-6">
              At Kryoss Work, we drive business success with cutting-edge
              solutions and a strong global presence. Our expertise and
              dedication fuel long-term growth.
            </p>

            {/* Points */}
            <ul className="space-y-3 text-gray-700 mb-8">

              <li>• Serving 70+ countries, delivering scalable digital solutions worldwide.</li>

              <li>• Backed by 40+ dedicated developers committed to innovation.</li>

              <li>• 8+ years of industry experience, ensuring expertise-driven results.</li>

              <li>• Trusted by 250+ happy customers across various industries.</li>

              <li>• Providing customized solutions to meet diverse business needs.</li>

              <li>• Focused on quality, performance, and seamless execution.</li>

              <li>• Helping businesses scale with AI, cloud, and mobile technology.</li>

            </ul>

            {/* Button */}
            <Link to="/company/contact" className="bg-orange-500 text-white px-6 py-3 rounded-full w-fit hover:bg-orange-600 transition">
              Connect With Us
            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="h-full">

            <img
              src="https://whitelabelfox.com/assets/images/about-us/about-us-page-weve-empowered-image.webp"
              alt="Empowering Growth"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default EmpoweringGrowth;
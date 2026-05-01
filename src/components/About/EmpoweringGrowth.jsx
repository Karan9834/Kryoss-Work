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
              Our Approach
            </span>

            {/* Heading */}
            <h2 className="text-4xl font-bold mb-4">
              Driving Progress <br />
              <span className="text-orange-500">Through Creative Technology</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 mb-6">
              At KryossOne, we believe in building more than just software —
              we build lasting partnerships. Every project begins with understanding
              your vision, challenges, and goals.
            </p>

            {/* Points - Authentic value propositions without fake stats */}
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <span>We take time to understand your unique business needs before writing a single line of code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <span>Our team stays current with emerging technologies to recommend what truly fits your goals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <span>We believe in clear communication and regular updates throughout every project phase.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <span>Each solution is crafted to grow alongside your business, not just meet immediate needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <span>We're proud of the long-term relationships we've built with businesses of all sizes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <span>Quality assurance and user experience are at the heart of everything we deliver.</span>
              </li>
            </ul>

            {/* Button */}
            <Link to="/company/contact" className="bg-orange-500 text-white px-6 py-3 rounded-full w-fit hover:bg-orange-600 transition">
              Start a Conversation
            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center">
            <img
              src="/images/company/companyabout/OK.png"
              alt="Team collaboration at KryossOne"
              className="w-full max-h-[630px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default EmpoweringGrowth;
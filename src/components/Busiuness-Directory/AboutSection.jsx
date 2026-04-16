import React from "react";
import { CheckCircle, Building2, Star, Users } from "lucide-react";
import aboutimg from "../../assets/Business Directory product 1/Simplifying the Way You Find Businesses.jpg"

const AboutSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT IMAGE (ONLINE) ===== */}
        <div className="flex justify-center order-2 lg:order-1">
          <img
            src={aboutimg}
            alt="About Business Directory"
            className="w-full max-w-lg aspect-square object-cover rounded-3xl drop-shadow-xl"
          />
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div className="order-1 lg:order-2">

          {/* Badge/Tag - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <span className="inline-block text-[12px] font-medium tracking-[0.05em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
            About Platform
          </span>

          {/* Heading H2 - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="mt-4 text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            A Smarter Way to Discover{" "}
            {/* Highlighted Text - Same typography as H2 */}
            <span className="text-blue-600 text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Local Businesses
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="mt-6 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
            Our business directory platform is designed to help users easily find, compare,
            and connect with trusted service providers across multiple industries.
            We focus on delivering accurate listings, real customer insights, and a seamless
            browsing experience.
          </p>

          {/* Extra Info Paragraph - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-500">
            Whether you're looking for restaurants, healthcare services, real estate,
            or professional services — our platform ensures you get access to verified
            businesses with complete details, helping you make informed decisions faster.
          </p>

          {/* Feature Points - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-700">Verified business listings</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-700">Real customer reviews</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-700">Advanced filtering & search</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-700">Multi-category coverage</p>
            </div>

          </div>

          {/* Stats - Keep as is (optional typography) */}
          <div className="mt-10 flex flex-wrap gap-6">

            <div className="flex items-center gap-2">
              <Building2 className="text-blue-600 w-5 h-5" />
              <span className="text-gray-700 text-[13px] md:text-[14px] font-normal">50K+ Businesses</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="text-blue-600 w-5 h-5" />
              <span className="text-gray-700 text-[13px] md:text-[14px] font-normal">100K+ Users</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-blue-600 w-5 h-5" />
              <span className="text-gray-700 text-[13px] md:text-[14px] font-normal">4.8 Avg Rating</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
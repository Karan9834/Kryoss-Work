import React from "react";
import { CheckCircle } from "lucide-react";
import aboutimg from "@/assets/account-erp-img/about.jpg";
const AboutSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src={aboutimg}
              alt="Team working"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* subtle accent glow (very light) */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 blur-2xl rounded-full opacity-40"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2">
          {/* Optional Badge - Add if needed */}
          {/* <div className="inline-flex items-center justify-center mb-4">
            <div className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-blue-600">About Us</span>
            </div>
          </div> */}

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Built for Businesses That Want
            <span className="text-blue-600"> More Control & Clarity</span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 mt-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Our ERP platform simplifies complex financial workflows, helping businesses
            manage accounting, inventory, payroll, and reporting from a single dashboard.
            Designed for efficiency and accuracy, we empower teams to make smarter decisions faster.
          </p>

          {/* BULLETS - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <div className="mt-6 space-y-4">
            {[
              "All-in-one financial management",
              "Real-time reporting & analytics",
              "Secure and scalable infrastructure",
              "Automation that saves time",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700 text-[14px] md:text-[16px] font-normal leading-[1.6]">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
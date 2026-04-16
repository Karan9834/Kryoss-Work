import React from "react";
import hrmImage from "../../../assets/Enterprise-Product/hrmabout.jpg";

const HRMAbout = () => {
  return (
    <section className="w-full bg-white py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={hrmImage}
            alt="HRM System"
            className="w-full max-w-[520px] rounded-3xl object-contain"
          />
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="border border-purple-200 rounded-2xl p-8 shadow-lg bg-gradient-to-br from-white to-purple-50">

          {/* Optional Badge - Add if needed */}
          {/* <div className="inline-flex items-center justify-center mb-4">
            <div className="px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-purple-600">About Us</span>
            </div>
          </div> */}

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-6">
            <span className="text-purple-600">About</span>{" "}
            <span className="text-gray-900">Our HRM System</span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 mb-5 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Our <span className="text-purple-600 font-medium">Human Resource Management (HRM)</span> system is built to simplify and
            centralize all essential HR operations within an organization. From
            managing employee data and recruitment workflows to handling payroll,
            attendance, and compliance, the platform ensures that every process is
            streamlined and efficiently managed in one place.
          </p>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            With intelligent automation and real-time insights, businesses can
            enhance productivity, track performance, and improve employee
            engagement. Our solution empowers teams to make data-driven decisions
            while creating a scalable and efficient workforce environment tailored
            for long-term growth.
          </p>

        </div>

      </div>

    </section>
  );
};

export default HRMAbout;
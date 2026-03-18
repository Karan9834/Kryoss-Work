import React from "react";
import hrmImage from "../../../assets/Enterprise-Product/hrmabout.png";

const HRMAbout = () => {
  return (
    <section className="w-full bg-white py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={hrmImage}
            alt="HRM System"
            className="w-full max-w-[520px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="border border-purple-200 rounded-2xl p-8 shadow-lg bg-gradient-to-br from-white to-purple-50">

          <h2 className="text-3xl font-bold mb-6">
            <span className="text-purple-600">About</span>{" "}
            <span className="text-gray-900">Our HRM System</span>
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-600 mb-5 leading-relaxed">
            Our <span className="text-purple-600 font-medium">Human Resource Management (HRM)</span> system is built to simplify and
            centralize all essential HR operations within an organization. From
            managing employee data and recruitment workflows to handling payroll,
            attendance, and compliance, the platform ensures that every process is
            streamlined and efficiently managed in one place.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-600 leading-relaxed">
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
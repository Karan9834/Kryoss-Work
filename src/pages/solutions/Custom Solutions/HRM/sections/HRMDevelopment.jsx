import React from "react";
import about from "../../../../../assets/human-resources/about.png"
const HRMDevelopment = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-slate-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
          Human Resource Management{" "}
          <span className="leading-[1.2] bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Software Development
          </span>
        </h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-12"></div>

        {/* Content with Image on Left */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">

          {/* Left Image */}
          <div className="flex-1 w-full">
            <img
              src={about}
              alt="HR Management Software Development Team"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-5">
            <p className="text-slate-700 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="font-semibold text-orange-600">KryossOne</span> has proven experience in delivering and implementing HR management solutions across diverse industries, offering comprehensive functionality tailored to modern business needs.
            </p>

            <p className="text-slate-700 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Our HR software development services focus on creating solutions that streamline essential human resources functions including personnel tracking, payroll management, benefits administration, recruitment, employee onboarding, learning and development programs, and beyond. Achieve your business objectives by hiring, training, and retaining a skilled workforce while implementing cutting-edge technologies and optimizing operational costs. Partner with our experienced Human Capital Software Development Team to build custom web and mobile HRM applications that elevate your HR operations.
            </p>

            <p className="text-slate-700 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Streamline and automate your organization's HR processes with the right custom software solution designed to accelerate administrative tasks, create engaging enterprise learning experiences, and enhance employee performance. Our professional full-service HRM development team is dedicated to creating a solution that perfectly fits your unique requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRMDevelopment;
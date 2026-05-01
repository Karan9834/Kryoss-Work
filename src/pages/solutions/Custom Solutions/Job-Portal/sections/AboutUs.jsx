import React from 'react';
import aboutImg from "../../../../../assets/Job portal and app/1..jpg";

const AboutUs = () => {
  return (
    <div className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-slate-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Job Portal {" "}
            <span className="leading-[1.2] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Development Company
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Content with Image on Left */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-indigo-100">
                <img
                  src={aboutImg}
                  alt="Job portal development team at work"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-100 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* First paragraph */}
            <p className="text-slate-700 mb-5 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              We are a premier <span className="font-semibold text-indigo-600">job portal development company</span> delivering fully responsive and
              feature-rich job portal solutions at competitive prices. Our platforms serve as an
              essential bridge connecting <span className="font-semibold text-purple-600">job seekers, recruiters, and employers</span> in today's
              competitive marketplace.
            </p>

            {/* Second paragraph */}
            <p className="text-slate-700 mb-5 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              With our comprehensive job portal development service, job seekers can effortlessly
              upload their <span className="font-semibold text-indigo-600">resumes, photographs, signatures, and professional biodata</span>. Simultaneously,
              recruiters gain the ability to post job advertisements and manage candidate applications
              seamlessly. All these powerful features come integrated into fully customized,
              responsive job portals built at <span className="font-semibold text-purple-600">affordable price points</span>. Simply reach out to us, and
              we'll deliver your tailor-made job portal solution.
            </p>

            {/* Third paragraph */}
            <p className="text-slate-700 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              As a trusted leader in job portal development, <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">KryossOne</span> offers exceptional solutions
              for organizations seeking to develop effective, user-friendly, and hassle-free job
              portal websites. Our team of specialized professionals brings deep expertise across
              diverse job portal requirements for agencies of all sizes. We engineer job portals that
              not only streamline and reward the recruitment process but also significantly reduce
              the administrative burden on <span className="font-semibold text-indigo-600">management systems of large enterprises</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
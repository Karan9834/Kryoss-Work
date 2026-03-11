import React from "react";

import img1 from "../../../assets/MvpApp/img1.webp";
import img2 from "../../../assets/MvpApp/img2.webp";
import img3 from "../../../assets/MvpApp/img3.webp";
import img4 from "../../../assets/MvpApp/img4.webp";
import img5 from "../../../assets/MvpApp/img5.webp";
import img6 from "../../../assets/MvpApp/img6.webp";
import img7 from "../../../assets/MvpApp/img7.webp";
const WhyPartner = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}

        <div className="text-center mb-6">
          <span className="px-4 py-1 text-sm border rounded-full text-slate-600">
            Why Partner With Us
          </span>
        </div>

        {/* Heading */}

        <h2 className="text-center text-3xl lg:text-4xl font-bold text-slate-800 max-w-4xl mx-auto leading-snug">
          The Trusted{" "}
          <span className="text-indigo-500">
            White Label MVP App Development Company
          </span>{" "}
          for Global Brands
        </h2>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mt-6">
          With over 8 years of expertise and 100+ successful launches, we
          provide the perfect balance of speed and ownership. Our white label
          MVP solutions help you launch scalable platforms with 100% source code
          ownership.
        </p>

        {/* Cards Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}

          <div className="bg-[#E9EDF7] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                No Operational Headaches
              </h3>
              <p className="mt-4 text-slate-600 text-sm">
                No need to manage tech infrastructure or team. Focus on your
                growth while our MVP developers handle everything.
              </p>
            </div>

            <img src={img1} alt="" className="mt-6 w-full max-w-[220px]" />
          </div>

          {/* Card 2 */}

          <div className="bg-[#F2E7D8] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-amber-700">
                100% Transparency
              </h3>
              <p className="mt-4 text-slate-600 text-sm">
                No surprises or hidden charges. We provide complete visibility
                with live project updates.
              </p>
            </div>

            <img src={img2} alt="" className="mt-6 w-full max-w-[220px]" />
          </div>

          {/* Card 3 */}

          <div className="bg-[#EAF3ED] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Clients Grow With Us
              </h3>
              <p className="mt-4 text-slate-600 text-sm">
                We build lasting partnerships. Our clients stay because we care
                about their success as much as they do.
              </p>
            </div>

            <img src={img3} alt="" className="mt-6 w-full max-w-[220px]" />
          </div>

          {/* Card 4 */}

          <div className="bg-[#EDF4F8] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-sky-700">
                Minimize Risk
              </h3>
              <p className="mt-4 text-slate-600 text-sm">
                We help reduce product risk by focusing on essential MVP
                features and avoiding unnecessary development costs.
              </p>
            </div>

            <img src={img4} alt="" className="mt-6 w-full max-w-[220px]" />
          </div>

          {/* Card 5 */}

          <div className="bg-[#E6F0E9] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-green-800">
                Full Product Support
              </h3>
              <p className="mt-4 text-slate-600 text-sm">
                From MVP development to product upgrades, we support you at
                every stage of your growth.
              </p>
            </div>

            <img src={img5} alt="" className="mt-6 w-full max-w-[220px]" />
          </div>

          {/* Card 6 */}

          <div className="bg-[#F3E6D8] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-amber-800">
                Launch in Days, Not Months
              </h3>
              <p className="mt-4 text-slate-600 text-sm">
                Our sprint-based development process helps launch MVPs faster
                than traditional development cycles.
              </p>
            </div>

            <img src={img6} alt="" className="mt-6 w-full max-w-[220px]" />
          </div>

          {/* Card 7 */}

          <div className="bg-[#E8F1F7] rounded-2xl p-8 flex flex-col justify-between lg:col-start-2">
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Long-Term Scale
              </h3>
              <p className="mt-4 text-slate-600 text-sm">
                Our solutions are built with scalable architecture that supports
                your business growth long-term.
              </p>
            </div>

            <img src={img7} alt="" className="mt-6 w-full max-w-[220px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;

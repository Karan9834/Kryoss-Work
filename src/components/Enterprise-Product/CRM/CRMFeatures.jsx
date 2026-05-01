import React from "react";
import crmFeatureImg from "../../../assets/Enterprise-Product/crm-feature.png";

const features = [
  {
    title: "Lead Management",
    desc: "Capture, organize, and track leads efficiently across your sales funnel."
  },
  {
    title: "Sales Pipeline",
    desc: "Visualize deals and manage every stage of your sales process seamlessly."
  },
  {
    title: "Customer Insights",
    desc: "Gain deep insights into customer behavior with real-time analytics."
  },
  {
    title: "Automation Tools",
    desc: "Automate follow-ups, reminders, and repetitive sales tasks."
  },
  {
    title: "Communication Tracking",
    desc: "Track emails, calls, and meetings in one centralized system."
  },
  {
    title: "Performance Analytics",
    desc: "Monitor team performance and revenue growth with smart dashboards."
  },
];

const CRMFeaturesAdvanced = () => {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">

      {/* Optional Section Header - Add if needed */}
      {/* <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-blue-600">Platform Features</span>
          </div>
        </div>
        <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
          Powerful <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CRM Features</span>
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6]">
          Everything you need to manage your sales process efficiently
        </p>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE (SCROLLABLE CARDS) */}
        <div className="h-[600px] overflow-y-auto pr-4 space-y-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>
            {`
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
          </style>

          {features.map((item, index) => (
            <div
              key={index}
              className="
                p-6 rounded-2xl 
                border border-blue-100 
                bg-white shadow-sm
                hover:shadow-md transition
              "
            >
              {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
              <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Card Description - Updated: text-[14px] md:text-[14px] font-normal leading-[1.6] */}
              <p className="text-gray-600 text-[14px] md:text-[14px] font-normal leading-[1.6]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE (STICKY IMAGE) */}
        <div className="relative h-[600px] flex items-center">

          <div className="sticky top-24 w-full flex justify-center">

            <img
              src={crmFeatureImg}
              alt="CRM Features"
              className="w-full max-w-[600px] rounded-3xl  object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default CRMFeaturesAdvanced;
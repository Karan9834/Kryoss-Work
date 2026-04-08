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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
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
              className="w-full max-w-[600px] object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default CRMFeaturesAdvanced;
import React from "react";
import { CloudDownload, Settings, PlayCircle, Share2, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: CloudDownload,
    title: "Content Ingestion",
    desc: "Upload or stream your source content to our secure ingestion servers."
  },
  {
    icon: Settings,
    title: "Processing & Transcoding",
    desc: "Optimizing video files for various devices and connection speeds."
  },
  {
    icon: ShieldCheck,
    title: "Security & DRM",
    desc: "Protecting your content with the latest encryption and licensing tech."
  },
  {
    icon: PlayCircle,
    title: "Content Delivery",
    desc: "Seamless delivery via global CDN edge nodes for smooth playback."
  },
  {
    icon: Share2,
    title: "Viewer Access",
    desc: "Your users enjoy high-quality streaming on any device worldwide."
  }
];

const StreamingHowItWorks = () => {
  return (
    <section className="py-24 bg-[#FFF5F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm">
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mt-4">
            How Our Streaming Backend Works
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A seamless workflow from ingestion to delivery, ensuring your users get the best possible experience.
          </p>
        </div>

        {/* Step Grid (Updated layout to match Pharmacy sample style) */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.slice(0, 3).map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-red-200 rounded-[40px] px-8 py-8 shadow-md flex items-center gap-4 hover:shadow-xl transition duration-500"
              >
                <div className="bg-red-50 p-4 rounded-2xl shrink-0">
                  <Icon size={28} className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-3xl mx-auto">
          {steps.slice(3).map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-red-200 rounded-[40px] px-8 py-8 shadow-md flex items-center gap-4 hover:shadow-xl transition duration-500"
              >
                <div className="bg-red-50 p-4 rounded-2xl shrink-0">
                  <Icon size={28} className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StreamingHowItWorks;

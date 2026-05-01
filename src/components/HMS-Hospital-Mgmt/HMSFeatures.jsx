import React, { useState } from 'react';
import { Pill, Users, Stethoscope, Bed, FileText, FlaskConical, ArrowRight } from 'lucide-react';

const HMSFeatures = () => {
   const [activeFeature, setActiveFeature] = useState(0);

   const features = [
      {
         icon: <Users size={24} />,
         title: "Patient Management (OPD)",
         shortDesc: "Outpatient flow management.",
         desc: "Complete demographic data, medical history, and visit logs tracked securely. Seamless registration, appointment scheduling, and automated queue management to eliminate waiting room bottlenecks. Allows for comprehensive EHR profile synchronization and ready-to-use self-kiosk setups. Our OPD module fundamentally transforms the outpatient journey by reducing manual paperwork, accelerating triage processes, and ensuring doctors have instant, actionable insights into patient history the moment they walk through the door."
      },
      {
         icon: <Bed size={24} />,
         title: "In-Patient Dept (IPD)",
         shortDesc: "Admission & bed management.",
         desc: "Streamlined in-patient flows from admission to discharge. Real-time ward mapping, bed occupancy metrics, and automated nursing station alerts for patient vitals tracking. Keep accurate nursing logs and fully automate the often tedious discharge documentation process. From diet scheduling and surgeon round tracking to dynamic cost-estimation alerts, the IPD module guarantees that every admitted patient receives coordinated, error-free clinical care at every hour."
      },
      {
         icon: <FlaskConical size={24} />,
         title: "Lab & Pathology",
         shortDesc: "Automated LIS integrations.",
         desc: "Integrated Laboratory Information System for sample tracking, barcoding, and automated reporting. Test results sync directly to the patient's electronic health record and the requesting physician's dashboard in real-time, complete with intelligent auto-alerts for critical values. Fully compatible with modern bidirectional machine interfacing, the system reduces laboratory turnaround timelines by up to 50% while completely removing the risk of manual transcription errors."
      },
      {
         icon: <Pill size={24} />,
         title: "Smart Pharmacy",
         shortDesc: "Automated inventory & dispensing.",
         desc: "Real-time inventory management, medication expiry alerts, and direct e-prescription routing from doctors to the pharmacy counter. Keep precise track of batch histories, automatically manage stock alerts, and entirely eliminate manual dispensing errors. Featuring comprehensive vendor management workflows, re-order level automations, and deep integration with billing, our Smart Pharmacy ensures your facility never faces a stock-out of life-saving medications."
      }
   ];

   return (
      <section className="py-24 bg-[#020617] relative overflow-hidden">
         {/* Minimalist Background */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/10 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full"></div>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
               {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-teal-500"></div>
                  <span className="text-teal-400 text-[12px] font-medium tracking-[0.05em] uppercase">
                     Our Features
                  </span>
                  <div className="w-8 h-px bg-cyan-500"></div>
               </div>

               {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                     Core Hospital Modules
                  </span>
               </h2>
               
               {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
               <p className="text-slate-400 text-[14px] md:text-[16px] font-normal leading-[1.6] mt-4">
                  An interactive look at how our platform handles every department seamlessly.
               </p>
            </div>

            {/* Interactive Tabbed Interface */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-slate-900/50 rounded-[2.5rem] p-6 lg:p-8 border border-slate-800 shadow-2xl backdrop-blur-sm">

               {/* Left side: Feature Tabs - Updated typography */}
               <div className="lg:w-1/3 flex flex-col gap-3">
                  {features.map((feature, idx) => (
                     <button
                        key={idx}
                        onClick={() => setActiveFeature(idx)}
                        className={`text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${activeFeature === idx
                              ? "bg-teal-500/10 border-teal-500/30 shadow-lg shadow-teal-900/20"
                              : "bg-transparent border-transparent hover:bg-slate-800/50 hover:border-slate-700"
                           }`}
                     >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${activeFeature === idx ? "bg-teal-500 text-white" : "bg-slate-800 text-slate-400"
                           }`}>
                           {feature.icon}
                        </div>
                        <div>
                           {/* Tab Title - Updated: text-[15px] md:text-[16px] font-bold */}
                           <h4 className={`font-bold text-[15px] md:text-[16px] ${activeFeature === idx ? "text-teal-300" : "text-slate-300"}`}>
                              {feature.title}
                           </h4>
                           {/* Tab Short Description - Updated: text-[12px] md:text-[13px] font-normal */}
                           <p className="text-slate-500 text-[12px] md:text-[13px] font-normal mt-1">{feature.shortDesc}</p>
                        </div>
                     </button>
                  ))}
               </div>

               {/* Right side: Active Feature Content - Updated typography */}
               <div className="lg:w-2/3 relative h-full">
                  <div
                     key={activeFeature}
                     className="h-full bg-slate-800/40 rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-700/50 flex flex-col justify-between group animate-in fade-in duration-500"
                  >
                     <div>
                        {/* Module Badge - Updated typography */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.05em] mb-6">
                           Module Overview
                        </div>
                        {/* Active Title - Updated: text-[24px] md:text-[30px] font-bold leading-[1.3] */}
                        <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-white mb-6">
                           {features[activeFeature].title}
                        </h3>
                        {/* Active Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                        <p className="text-slate-400 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-3xl">
                           {features[activeFeature].desc}
                        </p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default HMSFeatures;
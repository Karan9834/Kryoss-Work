import React from "react";
import { motion } from "framer-motion";

const HolisticCRMFeatures = () => {
  const features = [
    {
      id: "01",
      title: "Customized CRM Software Development Solutions",
      description: "With Kryoss Softech, try developing cost effective and customized CRM software that helps minimizing resources while spending and amplifying impactful results from the customer satisfaction and multiple tasks.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: "02",
      title: "CRM Consultancy",
      description: "Being one of the CRM development companies, we emphasis on consulting small and large businesses to drive multi-departmental growth. With our Kryoss Softech CRM consultants, you can take your business towards leveraging the existing technologies and customizing the CRM solutions according to your requirements.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "CRM Mobile Apps",
      description: "You can control your CRM software solutions wherever you go with its latest apps. Get on time dashboards with intuitive information to support better decision making and quick operational ramifications as these help driving higher customer satisfaction.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "04",
      title: "CRM Personalization",
      description: "You will be able to make most out of the multiple CRM tools with conducting CRM personalization at every stage. Drive metrics that matter for your organization while you can go for the custom CRM software development based on the available resources to help remaining a step ahead from your market competitors.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: "05",
      title: "CRM Software Integration",
      description: "This software is interconnected and allows connecting the missing dots within and outside of the dedicated departments with integration. You can share multiple details including customer contact, SLA, bills and other variables via a single portal having a dynamic customer information centre for easier management and maintenance.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: "06",
      title: "CRM Development Solutions",
      description: "Kryoss Softech CRM development solutions are easily implantable within weeks instead of months. Integrate our customer solutions for CRM with your existing solutions, which are easy to learn and certainly adaptable. We offer modifications for your existing CRM software and with evolved requirements to make that future proof.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: "07",
      title: "CRM Execution",
      description: "We execute CRM software solutions effortlessly for your business with a proven strategy that helps data migration and rolling out each of the modules phase wise. We have a dedicated CRM implementation team who are assigned strategic and executive roles to execute the entire process effortlessly.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "08",
      title: "CRM Migration Solutions",
      description: "We ensure zero information loss and guarantee utmost data integration as our foremost priority. We offer CRM software services support end to end, efficient CRM migration solutions that help initiating with a high level brief and forecasting possible information gaps in order to keep the process de-cluttered.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "09",
      title: "CRM Software Support & Maintenance",
      description: "We offer 24/7 and 365 support and maintenance with our professional CRM software developers. Our professionals will provide on time maintenance and updates which are necessary for a smooth functioning.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: "10",
      title: "CRM Portal Development",
      description: "We offer a stepwise approach for CRM portal development that aids enhancing productivity and reduces portal costs with a highly usable CRM extension based on the dynamics or other available tools.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden px-6 md:px-16">
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.875rem] md:text-[2.25rem] text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-teal-400">Holistic</span>{" "}
            <span className="text-white text-[30px] md:text-[36px] font-bold leading-[1.2]">CRM Feature Set</span>
          </h2>
          <div className="w-16 h-[2px] bg-teal-500 mx-auto mt-3" />
          <p className="text-teal-200/70 mt-4 mx-auto text-[0.875rem] md:text-[1rem] text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Comprehensive CRM solutions tailored to meet your business needs
          </p>
        </motion.div>

        {/* Features Grid - 3 columns, last card centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`group ${
                index === features.length - 1 ? 'lg:col-start-2 lg:col-end-2' : ''
              }`}
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10">
                
                {/* Card content */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-teal-500/30">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="mb-3">
                    <span className="text-teal-400 text-sm font-mono font-bold">
                      {feature.id}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-[1rem] md:text-[1.125rem] font-bold text-white mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[0.875rem] md:text-[0.95rem] text-gray-300 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grid pattern styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HolisticCRMFeatures;
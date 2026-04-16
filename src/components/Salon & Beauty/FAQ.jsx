import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What defines a specialized aesthetic platform and how does it function?",
      answer:
        "An aesthetic coordination framework connects participants with styling specialists for localized services. Clients orchestrate appointments via the interface, and professionals arrive at the designated site. The system optimizes scheduling, settlements, and operational oversight.",
    },
    {
      question: "Why is digital styling architecture becoming a standard in the salon sector?",
      answer:
        "Aesthetic technical development empowers firms to offer immediate service synchronization, meeting modern client demands for flexibility. It assists styling experts in expanding their professional reach and optimizing service interactions, catalyzing enterprise development.",
    },
    {
      question: "How does a dedicated styling ecosystem improve the participant journey?",
      answer:
        "A specialized aesthetic module provides effortless treatments scheduling, synchronized updates, and frictionless settlements. Participants select practitioners based on validated credentials and peer reviews, ensuring a consistent and elite encounter.",
    },
    {
      question: "What are the core modules of an integrated aesthetic framework?",
      answer:
        "Vital components include synchronized tracking, protected fiscal processing, participant profiles, reservation orchestration, and performance validation loops. These modules guarantee professional interaction for all platform stakeholders.",
    },
    {
      question: "Can I adapt the aesthetic platform to align with my firm's specific identity?",
      answer:
        "Indeed, the architecture is fully versatile to reflect your unique branding, service menus, and valuation strategies. You can modify functional parameters to achieve specific commercial goals and optimize participant interactions.",
    },
    {
      question: "How do technical styling frameworks assist practitioners in professional expansion?",
      answer:
        "Digital aesthetic engineering helps specialists engage a broader demographic, orchestrate appointments with precision, and optimize fiscal settlements. It provides a systemic platform for practitioners to verify their portfolio and manage their styling enterprise.",
    },
    {
      question: "Which technical environments support the aesthetic coordination suite?",
      answer:
        "These frameworks are typically deployed on iOS, Android, and distributed web environments. This guarantees reach across a diverse participant demographic and supports firm accessibility across mobile and workstation interfaces.",
    },
    {
      question: "What variables influence the engineering cost of an aesthetic platform?",
      answer:
        "The capital requirement for constructing an aesthetic module depends on functional complexity and architectural adaptation. Systemic pre-engineered frameworks generally offer higher capital efficiency compared to ground-up development.",
    },
    {
      question: "How should I position my aesthetic ecosystem to maximize participant adoption?",
      answer:
        "Catalyze participant growth through digital marketing, social credential campaigns, and referral incentive protocols. Strategic coordination with industry authorities and specialized promotions can significantly enhance platform authority.",
    },
    {
      question: "How does aesthetic software engineering safeguard stakeholder data?",
      answer:
        "Our frameworks incorporate protected settlement protocols, cryptographic data standards, and multi-factor authentication to secure the integrity of participant and specialist information. Vigilant defensive measures are integrated to maintain secure transactional environments.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-gray-200 
                          text-black  px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            Operational Intelligence
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
          Frequent Inquiries
          </h2>

        </div>

        {/* ===== FAQ GRID ===== */}
        <div className="grid md:grid-cols-2 gap-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 
                         hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <Minus className="text-[#FF2485]" />
                ) : (
                  <Plus className="text-[#FF2485]" />
                )}
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-60 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;
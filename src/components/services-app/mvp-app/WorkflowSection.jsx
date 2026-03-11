import React, { useEffect, useState } from "react";

const steps = [
  {
    id: "01",
    title: "Discovery & Planning",
    desc: "We analyze your product idea and define the roadmap to build a successful MVP."
  },
  {
    id: "02",
    title: "UI / UX Design",
    desc: "Our designers craft intuitive interfaces that deliver a seamless user experience."
  },
  {
    id: "03",
    title: "Prototyping",
    desc: "Interactive prototypes allow you to visualize the product before development begins."
  },
  {
    id: "04",
    title: "MVP Development",
    desc: "Our engineers build scalable MVP applications focusing on essential features."
  },
  {
    id: "05",
    title: "Quality Assurance",
    desc: "Rigorous testing ensures your product is reliable, secure, and bug-free."
  },
  {
    id: "06",
    title: "Deployment & Launch",
    desc: "We ensure your MVP launches smoothly and reaches the market successfully."
  },
  {
    id: "07",
    title: "Post-Launch Support",
    desc: "We monitor, improve, and scale your product after launch."
  }
];

const WorkflowSection = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <div>

          <span className="px-4 py-1 text-sm border rounded-full text-slate-600">
            Our Proven Workflow
          </span>

          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-slate-800 leading-snug">
            A Streamlined Process for <br/>
            White Label{" "}
            <span className="text-indigo-500">
              MVP App Development
            </span>
          </h2>

          <p className="mt-6 text-slate-600 max-w-md">
            We simplify the journey from concept to launch using a structured
            framework designed for speed, reliability, and scalability.
          </p>

        </div>


        {/* RIGHT PREMIUM WORKFLOW */}

        <div className="relative">

          {/* Premium container */}
          <div className="bg-gradient-to-br from-[#F4EBDD] via-[#EFE2D2] to-[#E7D6C3] rounded-3xl p-16 shadow-xl overflow-hidden">

            {/* timeline */}
            <div className="absolute top-12 left-0 w-full h-[3px] bg-[#b08a5a]" />

            {/* number */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#8b5e34] text-white rounded-full flex items-center justify-center font-semibold shadow-lg">
              {steps[index].id}
            </div>

            {/* card slider */}
            <div className="mt-12 flex justify-center">

              <div className="relative w-full max-w-md">

                {/* glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 blur-xl opacity-40 rounded-2xl"></div>

                {/* premium card */}
                <div className="relative bg-white/80 backdrop-blur rounded-2xl p-8 border border-white/40 shadow-xl transition duration-500">

                  <h3 className="text-xl font-semibold text-slate-800">
                    {steps[index].title}
                  </h3>

                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {steps[index].desc}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WorkflowSection;
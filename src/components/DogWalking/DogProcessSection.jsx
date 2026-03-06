import React from "react";

const steps = [
  {
    title: "1. Requirement Gathering",
    color: "border-red-200",
    textColor: "text-red-600",
    bg: "bg-red-50",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    desc: `We collect the client’s requirements first and everything required,
    which results in a tangible roadmap for development. During the
    collaborative conversations and brainstorming, we scrutinize your
    business objectives, target audience, and the features of its
    functions and establish a basis for the app’s success.`,
  },
  {
    title: "2. Design & Development",
    color: "border-green-300",
    textColor: "text-green-700",
    bg: "bg-green-50",
    img: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800",
    desc: `Our team designs intuitive interfaces and develops a scalable
    backend architecture to ensure seamless performance for the
    dog walking app across all devices.`,
  },
  {
    title: "3. Collect Third-party Accounts",
    color: "border-blue-300",
    textColor: "text-blue-700",
    bg: "bg-blue-50",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800",
    desc: `We integrate third-party services like payment gateways,
    maps, notifications, and analytics to enhance the functionality
    and performance of your application.`,
  },
  {
    title: "4. Test and Launch",
    color: "border-yellow-300",
    textColor: "text-yellow-700",
    bg: "bg-yellow-50",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    desc: `Before launch we run complete QA testing to ensure the app
    works perfectly across devices. After validation we deploy
    the product smoothly to production.`,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-green-600 rounded-full px-4 py-1 text-sm text-green-700">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Development Process
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl text-center font-semibold mb-4">
          Our Seamless Your <span className="text-green-700">Dog Walking App Development</span> Process
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Our Dog Walking App Development Follows a Streamlined Approach for
          Efficiency and Success, Ensuring Quick Launch and Seamless User Experience.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {steps.map((step, i) => (
            <div
              key={i}
              className={`group perspective`}
            >
              <div
                className={`relative h-[260px] w-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180`}
              >

                {/* FRONT */}
                <div
                  className={`absolute inset-0 ${step.bg} border ${step.color} rounded-2xl flex flex-col items-center justify-center backface-hidden`}
                >
                  <h3 className={`text-lg font-semibold mb-4 ${step.textColor}`}>
                    {step.title}
                  </h3>

                  <img
                    src={step.img}
                    alt="process"
                    className="w-[180px] object-contain"
                  />
                </div>

                {/* BACK */}
                <div
                  className={`absolute inset-0 ${step.bg} border ${step.color} rounded-2xl p-6 flex items-center backface-hidden rotate-y-180`}
                >
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
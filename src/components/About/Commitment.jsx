import React from "react";
import { Rocket, TrendingUp, Wallet, Headphones, Cpu, Users } from "lucide-react";

const commitments = [
  {
    icon: <Rocket size={28} />,
    title: "Launch Faster, Succeed Sooner",
    desc: "We help you launch your digital solutions quickly and efficiently, ensuring minimal downtime and a faster go-to-market strategy.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Unlock Growth Opportunities",
    desc: "Gain access to potential investors and scale your business with the right financial backing and strategic partnerships.",
  },
  {
    icon: <Wallet size={28} />,
    title: "Smart Budgeting, Maximum Value",
    desc: "We provide transparent pricing and cost-effective solutions, ensuring that your project stays within budget without compromising quality.",
  },
  {
    icon: <Headphones size={28} />,
    title: "Reliable Support, Always Here",
    desc: "Our dedicated support team ensures that your business runs smoothly with continuous updates, maintenance, and assistance whenever needed.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Future-Ready & Scalable Solutions",
    desc: "We develop solutions that grow with your business, ensuring long-term success with adaptable and cutting-edge technologies.",
  },
  {
    icon: <Users size={28} />,
    title: "Customer-First Approach",
    desc: "Your success is our priority. We focus on building strong relationships and delivering customized solutions tailored to your needs.",
  },
];

const Commitment = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div>

          <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
            Our Commitment
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-4">
            Our <span className="text-orange-500">Promises to Your Success</span>
          </h2>

          <p className="text-gray-600 max-w-md">
            At KryossOne, we are committed to delivering seamless,
            efficient, and future-ready solutions. Our promises ensure that
            your business stays ahead with reliable technology, expert support,
            and cost-effective solutions.
          </p>
          {/* IMAGE PLACEHOLDER */}
          <img
            src="/images/company/companyabout/commitment1.png"
            alt="Our commitment"
            className="mt-8 w-[600px] max-h-[470px] rounded-xl object-cover"
          />
        </div>

        {/* RIGHT SIDE SCROLLABLE CARDS */}
        <div className="max-h-[650px] overflow-y-auto space-y-6 pr-4">

          {commitments.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-3">

                <div className="bg-orange-100 text-orange-500 p-3 rounded-lg">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

              </div>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Commitment;
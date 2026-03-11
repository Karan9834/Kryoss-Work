import React from "react";
import { DollarSign, Search, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: <DollarSign size={22} />,
    title: "Lower Development Costs",
    desc: "MVP development helps minimize upfront investment by focusing on essential features, allowing you to validate ideas before investing heavily in development."
  },
  {
    icon: <Search size={22} />,
    title: "Market Validation",
    desc: "Test your core product idea with real users and gather valuable feedback to refine your product according to actual market demand."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Attract Investors Early",
    desc: "A working MVP demonstrates traction and potential, helping you showcase your vision and attract early investors."
  }
];

const BenefitsSection = () => {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}

        <div>

          <span className="px-4 py-1 text-sm rounded-full border border-slate-200 text-slate-600">
            Business Growth Benefits
          </span>

          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-slate-800 leading-snug">
            Strategic Benefits of Our White Label{" "}
            <span className="text-indigo-500">
              MVP App Development Services
            </span>
          </h2>

          <p className="mt-6 text-slate-600 max-w-md">
            Accelerate your launch and secure your digital assets with our
            high-performance white label MVP development solutions. We help
            minimize risks and maximize profitability by providing a
            pre-vetted platform that you fully own from day one.
          </p>

        </div>


        {/* RIGHT SIDE BENEFITS */}

        <div className="space-y-6">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="group flex gap-5 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* ICON */}

              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition">

                {item.icon}

              </div>

              {/* TEXT */}

              <div>

                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default BenefitsSection;
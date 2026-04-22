import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Eye, CheckCircle2, Sparkles } from "lucide-react";
import prod1 from "../../assets/account and erp/exp.jpg"
import prod2 from "../../assets/account and erp 1/What is an Enterprise CRM.jpg"

const ProductSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Enterprise Sales CRM",
      desc: "Comprehensive CRM solution designed for enterprise-level sales teams to manage leads, track performance, and close deals faster.",
      image: prod1,
      route: "/products/sales-crm",
    },
    {
      id: 2,
      title: "ERP Insights & OS",
      desc: "Advanced enterprise CRM providing deep insights into customer behavior and operational efficiency for seamless business growth.",
      image: prod2,
      route: "/products/enterprise/crm",
    }
  ];

  return (
    <section id="erp-products-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-slate-200"></div>
            <span className="text-blue-600 text-[12px] font-medium tracking-[0.05em] uppercase">
              Enterprise ERP Solutions
            </span>
            <div className="w-8 h-px bg-slate-200"></div>
          </div>

          {/* H2 Heading */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-700 to-[#0F172A]">
              Industry-Leading ERP Platforms
            </span>
          </h2>
          
          {/* Description Text */}
          <p className="text-slate-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto mt-6">
            Trusted by thousands of businesses worldwide for seamless operations and growth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              {/* CLICKABLE IMAGE */}
              <div
                onClick={() => navigate(product.route)}
                className="cursor-pointer group block"
                role="button"
                tabIndex={0}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-xl border-[5px] border-transparent hover:border-blue-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                />
              </div>

              {/* TITLE AND DESCRIPTION */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span
                  onClick={() => navigate(product.route)}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  {product.title}
                </span>{" "}
                <span className="text-gray-700">{product.desc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border-2 border-blue-200 text-blue-600 font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl text-[14px] md:text-[15px]"
          >
            <Sparkles size={18} />
            <span>Explore All ERP Solutions</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .shadow-inner {
          box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.02);
        }
      `}</style>
    </section>
  );
};

export default ProductSection;
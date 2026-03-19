import react from "react";
import { ArrowRight } from "lucide-react";
import erphero from "../../assets/erp-img/erphero.jpg";

const ErpHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] bg-gradient-to-r from-[#001f3f] to-[#00102b] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[50%] text-white pb-12 mt-20 lg:pb-20 lg:pr-10">
                    {/* Logo + Brand */}
                    <div className="flex items-center gap-3 mb-6">
                        {/* Icon */}
                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-lg text-xl
      bg-gradient-to-br from-blue-400 to-indigo-500
      shadow-[0_0_16px_rgba(59,130,246,0.85)]"
                        >
                            <span className="drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                                ⚙️
                            </span>
                        </div>

                        {/* Brand */}
                        <span className="text-xl font-semibold tracking-wide uppercase">
                            <span
                                className="text-blue-400 
            drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]"
                            >
                                Vyom
                            </span>

                            <span className="text-white ml-1">ERP</span>
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        <span className="text-[#3b82f6]">Enterprise Resource Planning</span> Product
                        Development
                    </h1>

                    {/* Paragraph */}
                    <p className="text-gray-200 max-w-xl mb-8">
                        Empower your organization with our custom ERP solutions. Our
                        feature-rich system for finance, HR, and supply chain ensures
                        maximum efficiency and real-time data visibility.
                    </p>

                    {/* CTA */}
                    <button className="flex items-center gap-3 bg-[#3b82f6] text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        Live Demo
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-14 lg:mt-0">
                    <img
                        src={erphero}
                        alt="ERP App"
                        className="w-[420px] md:w-[520px] rounded-3xl scale-100"
                    />
                </div>
            </div>
        </section>
    );
};

export default ErpHero;

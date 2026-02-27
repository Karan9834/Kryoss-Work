import React from "react";
import launchImage from "../../../assets/launch.webp";
import launch1 from "../../../assets/launch1.webp";

const LaunchSection = () => {
  return (
    <section
      className="
        relative
        w-full
        bg-gradient-to-b
        from-[#151C00]
        to-[#070E05]
        rounded-t-[100px]
        overflow-hidden
      "
    >

      {/* ================= FIRST SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center min-h-[650px]">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center lg:justify-start">
          <img
            src={launchImage}
            alt="Launch App"
            className="h-[620px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white lg:pl-12 py-16">

          <div className="inline-flex items-center gap-2 border border-white/30 px-4 py-1 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[#9FE870] rounded-full"></span>
            Get Your Digital Footprints
          </div>

          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug mb-6">
            Launch Your{" "}
            <span className="text-[#9FE870]">
              inDriver Like App
            </span>{" "}
            within Days (Not Weeks)
          </h2>

          <p className="text-white/80 mb-4 leading-relaxed">
            Your inDriver app clone can be up and running in days, not weeks,
            with our fast and easy-to-use ready-made solution.
          </p>

          <p className="text-white/80 mb-4 leading-relaxed">
            Skip development delays and quickly launch a fully functional
            ride-sharing platform.
          </p>

          <p className="text-white/80 leading-relaxed">
            Focus on scaling your business while we provide the technical foundation.
          </p>

        </div>
      </div>

      {/* ================= SECOND SECTION ================= */}
      {/* ================= SECOND SECTION ================= */}
<div className="max-w-7xl mx-auto px-6 py-24 text-white">

  {/* Pill */}
  <div className="flex justify-center mb-6">
    <div className="inline-flex items-center gap-2 border border-white/30 px-4 py-1 rounded-full text-sm">
      <span className="w-2 h-2 bg-[#9FE870] rounded-full"></span>
      Why Choose Our inDriver Clone?
    </div>
  </div>

  {/* Heading */}
  <h2 className="text-center text-3xl lg:text-4xl font-semibold mb-4">
    Why{" "}
    <span className="text-[#9FE870]">
      Choose Our inDriver Clone Script?
    </span>
  </h2>

  <p className="text-center text-white/70 max-w-3xl mx-auto mb-16">
    Lead the market with a fully scalable, secure, and feature-rich ride-hailing
    solution designed to give you complete business control, faster launch
    timelines, and long-term competitive advantage.
  </p>

  {/* Image */}
  <div className="flex justify-center mb-20">
    <img
      src={launch1}
      alt="Why Choose"
      className="w-full max-w-5xl object-contain"
    />
  </div>

  {/* Bullet Grid */}
  <div className="grid md:grid-cols-2 gap-16 text-white/85">

    <ul className="space-y-6 list-disc pl-6">
      <li>
        Our inDriver clone solution enables businesses to scale rapidly based
        on market demand while maintaining performance stability and operational efficiency.
      </li>

      <li>
        The platform is fully customizable, allowing you to integrate your
        brand identity, pricing models, operational strategies, and unique service offerings.
      </li>

      <li>
        With intuitive UI/UX design and optimized workflows, users experience
        seamless ride booking, bidding, and communication within the app.
      </li>

      <li>
        Real-time analytics and reporting dashboards provide actionable insights
        to improve decision-making and maximize profitability.
      </li>
    </ul>

    <ul className="space-y-6 list-disc pl-6">
      <li>
        Advanced data protection mechanisms including encryption protocols,
        secure payment gateways, and multi-level authentication ensure complete platform security.
      </li>

      <li>
        Full source code access gives you complete ownership and flexibility to
        modify, expand, or integrate third-party services as your business grows.
      </li>

      <li>
        Our agile development methodology ensures faster deployment, timely
        updates, and continuous technical improvements.
      </li>

      <li>
        Dedicated technical support and maintenance services guarantee smooth
        operations and uninterrupted platform performance.
      </li>
    </ul>

  </div>

</div>

    </section>
  );
};

export default LaunchSection;
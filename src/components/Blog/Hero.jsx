import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f3dada] rounded-3xl p-10 max-w-8xl mx-auto mt-5">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-600 mb-3">
            Case Study • Product Showcase • 2026
          </p>

          <h1 className="text-4xl font-bold mb-4 text-black">
            Smart Digital Products Built for Real-World Impact
          </h1>

          <p className="text-gray-700 mb-6">
            Explore how we design and develop scalable, high-performance
            digital products for our clients — from innovative startup ideas
            to enterprise-grade solutions that drive measurable results.
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop"
              alt="team"
              className="w-10 h-10 rounded-full"
            />

            <p className="text-sm">
              crafted by <br />
              <span className="font-semibold">
                Product Engineering Team
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
            alt="Product dashboard showcase"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
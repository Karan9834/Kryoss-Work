import React from "react";
import mvphero from "../../../assets/MvpApp/mvphero.webp";
const MvpHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] py-16">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}

        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            <span className="text-indigo-400">
              Accelerate Your Product Launch
            </span>
            <br />
            with White-Label MVP Development
          </h1>

          <p className="mt-5 text-slate-300 text-base max-w-lg">
            Launch market-ready digital platforms in weeks with our powerful
            white-label MVP development solutions. Get full source code
            ownership, flexible UI/UX customization, and scalable architecture
            to deliver enterprise-grade applications under your brand.
          </p>

          <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-full text-white font-semibold">
            Get a Free MVP Consultation →
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="flex justify-center lg:justify-end">

          <div className="relative">

            <img
              src={mvphero}
              alt="team meeting"
              className="w-72 lg:w-96 rounded-2xl shadow-2xl"
            />

            {/* FLOATING CARD */}

            <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-xs">
              <p className="font-semibold text-gray-800">
                Scalable Architecture
              </p>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-xs">
              <p className="font-semibold text-gray-800">
                Built-In Testing
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MvpHero;
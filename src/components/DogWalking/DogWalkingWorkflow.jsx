import React from "react";
import DogWorkflow from "../../assets/DogWalking/dogworkflow.webp"

const DogWalkingWorkflow = () => {
  return (
    <section className="w-full py-24 bg-white flex justify-center">

      {/* Rounded Container */}
      <div
        className="relative max-w-7xl w-full rounded-3xl overflow-visible"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558944351-cb7c7d1f1a3a?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 rounded-3xl"></div>

        {/* Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16 py-20">

          {/* LEFT SIDE TEXT */}
          <div className="text-white space-y-6 max-h-[420px] overflow-y-auto pr-4 lg:pr-8 z-10"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/40 rounded-full px-4 py-1 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              App Workflow
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-snug">
              How Does <span className="text-green-400">Dog Walking App</span> Work?
            </h2>

            {/* Steps */}
            <ul className="space-y-6 text-gray-200">

              <li className="flex gap-3">
                <span className="w-5 h-5 border border-white rounded-full mt-1"></span>
                Users sign up using email, contact details, or social accounts.
              </li>

              <li className="flex gap-3">
                <span className="w-5 h-5 border border-white rounded-full mt-1"></span>
                Pet owners can browse nearby dog walkers and check ratings.
              </li>

              <li className="flex gap-3">
                <span className="w-5 h-5 border border-white rounded-full mt-1"></span>
                Select service date and time to schedule dog walking.
              </li>

              <li className="flex gap-3">
                <span className="w-5 h-5 border border-white rounded-full mt-1"></span>
                Multiple pets can be added along with their details.
              </li>

              <li className="flex gap-3">
                <span className="w-5 h-5 border border-white rounded-full mt-1"></span>
                Check walker availability before sending a service request.
              </li>

              <li className="flex gap-3">
                <span className="w-5 h-5 border border-white rounded-full mt-1"></span>
                Track the service in real time once booking is confirmed.
              </li>

            </ul>

          </div>

          {/* RIGHT IMAGE (DESKTOP ONLY) */}
          <div className="relative hidden lg:flex justify-center items-center">

            <img
              src={DogWorkflow}
              alt="workflow"
              className="
              absolute
              -top-32
              -bottom-32
              w-[620px]
              object-contain
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
              rotate-2
              "
            />

          </div>

        </div>
      </div>

    </section>
  );
};

export default DogWalkingWorkflow;
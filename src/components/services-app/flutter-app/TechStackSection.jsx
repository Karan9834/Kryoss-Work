import React from "react";

export default function TechStackSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>

          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-orange-100 text-orange-600">
            Our Technology Stack
          </span>

          <h2 className="text-4xl font-semibold mt-6 leading-tight">
            <span className="text-orange-500">
              Powering White Label Flutter App
            </span>
            <br />
            Development with Modern Tools
          </h2>

          <p className="text-gray-600 mt-5 max-w-lg">
            The right tools make a huge difference in building reliable
            Flutter applications. Our development process combines
            powerful programming languages, trusted frameworks, and
            scalable databases to deliver fast and secure mobile apps.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* LANGUAGE */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <h3 className="text-indigo-600 font-semibold mb-4">Language</h3>

            <div className="flex flex-wrap gap-3">
              <span className="tech-pill">Dart</span>
              <span className="tech-pill">Kotlin</span>
              <span className="tech-pill">Swift</span>
              <span className="tech-pill">Java</span>
            </div>
          </div>

          {/* FRAMEWORK */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <h3 className="text-orange-600 font-semibold mb-4">Framework</h3>

            <div className="flex flex-wrap gap-3">
              <span className="tech-pill">Firebase Crashlytics</span>
              <span className="tech-pill">Lottie</span>
              <span className="tech-pill">GetX</span>
              <span className="tech-pill">Transporter</span>
            </div>
          </div>

          {/* DATABASE */}
          <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6">
            <h3 className="text-cyan-600 font-semibold mb-4">Database</h3>

            <div className="flex flex-wrap gap-3">
              <span className="tech-pill">Firebase Realtime Database</span>
              <span className="tech-pill">SQLite</span>
              <span className="tech-pill">Hive</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
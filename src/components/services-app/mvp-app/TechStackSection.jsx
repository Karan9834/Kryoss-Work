import React from "react";

const techStack = [
  {
    title: "Languages",
    color: "indigo",
    items: ["Dart", "Objective-C", "C++", "Java", "Kotlin", "XML", "Swift"]
  },
  {
    title: "Frameworks",
    color: "purple",
    items: [
      "CloudKit",
      "MapKit",
      "RealmSwift",
      "Lottie-iOS",
      "Firebase iOS SDK",
      "Flutter SDK",
      "Android SDK",
      "Lottie",
      "Material UI",
      "Crashlytics"
    ]
  },
  {
    title: "Databases",
    color: "sky",
    items: [
      "Firebase Realtime Database",
      "SQLite",
      "Core Data",
      "Realm"
    ]
  }
];

const TechStackSection = () => {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}

        <div>

          <span className="px-4 py-1 text-sm border rounded-full text-slate-600">
            Our Technology Stack
          </span>

          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-slate-800 leading-snug">
            Cutting-Edge Technology for{" "}
            <span className="text-indigo-500">
              White Label MVP App Development
            </span>{" "}
            Solutions
          </h2>

          <p className="mt-6 text-slate-600 max-w-md">
            We build platforms using a robust and scalable tech stack designed
            for high performance and easy maintenance. Our solutions are built
            using industry-leading frameworks that support rapid growth and
            seamless integrations.
          </p>

        </div>


        {/* RIGHT TECH STACK */}

        <div className="space-y-8">

          {techStack.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-lg transition"
            >

              <h3 className="font-semibold text-lg text-slate-800 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full border border-slate-200 bg-white hover:bg-indigo-50 hover:border-indigo-300 transition"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TechStackSection;
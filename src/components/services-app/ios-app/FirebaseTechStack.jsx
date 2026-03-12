export default function FirebaseTechStack() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT CONTENT */}

        <div>

          <span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            Tech Stack We Use
          </span>

          <h2 className="text-4xl font-semibold mt-6 leading-tight">

            Modern Technology Stack for{" "}
            <span className="text-green-600">
              Firebase App Development
            </span>

          </h2>

          <p className="text-gray-500 mt-6 leading-relaxed max-w-lg">
            Our development team leverages powerful cloud technologies and
            modern frameworks to build secure, scalable, and high-performance
            mobile applications. By combining real-time infrastructure with
            efficient development tools, we deliver solutions that remain
            reliable and easy to maintain as your product grows.
          </p>

        </div>


        {/* RIGHT STACK */}

        <div className="space-y-8">

          {/* LANGUAGE */}

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

            <h4 className="text-green-700 font-semibold mb-4">
              Programming Language
            </h4>

            <div className="flex flex-wrap gap-3">

              {["JavaScript", "TypeScript", "Dart"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm border border-green-300 rounded-full hover:bg-green-600 hover:text-white transition cursor-default"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>


          {/* FRAMEWORK */}

          <div className="bg-green-100 border border-green-200 rounded-2xl p-6">

            <h4 className="text-green-700 font-semibold mb-4">
              Frameworks & Tools
            </h4>

            <div className="flex flex-wrap gap-3">

              {[
                "Firebase Crashlytics",
                "Cloud Functions",
                "Google Maps API",
                "Google Cloud",
                "Fastlane",
                "Material UI"
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm border border-green-300 rounded-full hover:bg-green-600 hover:text-white transition cursor-default"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>


          {/* DATABASE */}

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

            <h4 className="text-green-700 font-semibold mb-4">
              Database & Storage
            </h4>

            <div className="flex flex-wrap gap-3">

              {[
                "Firebase Realtime DB",
                "Firestore",
                "SQLite",
                "Realm"
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm border border-green-300 rounded-full hover:bg-green-600 hover:text-white transition cursor-default"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
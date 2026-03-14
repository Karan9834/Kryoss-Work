import React from "react";
import { Code2, Zap, Cpu } from "lucide-react";

export default function FlutterBenefits() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
            Key Benefits
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 leading-tight">

            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Benefits of White Label Flutter
            </span>

            <br />

            App Development for Growing Brands

          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Flutter allows businesses to launch powerful cross-platform
            mobile applications using a single efficient codebase.
            This approach reduces development time and maintenance
            costs while ensuring consistent performance and scalability.
          </p>

        </div>


        {/* RIGHT SIDE STICKY BENEFITS */}
        <div className="sticky top-32 h-fit space-y-10">

          {/* ITEM */}
          <div className="flex gap-4">

            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Code2 size={22}/>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                One Codebase
              </h3>

              <p className="text-gray-600 text-sm mt-1 max-w-md">
                Flutter enables development for multiple platforms using
                a unified codebase. This simplifies updates, improves
                maintainability, and significantly lowers development costs.
              </p>
            </div>

          </div>


          {/* ITEM */}
          <div className="flex gap-4">

            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Zap size={22}/>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Faster Development
              </h3>

              <p className="text-gray-600 text-sm mt-1 max-w-md">
                Thanks to hot reload, developers can instantly preview
                changes and iterate quickly. This accelerates development
                cycles and helps teams launch products faster.
              </p>
            </div>

          </div>


          {/* ITEM */}
          <div className="flex gap-4">

            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Cpu size={22}/>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Native-Level Performance
              </h3>

              <p className="text-gray-600 text-sm mt-1 max-w-md">
                Flutter’s rendering engine delivers smooth animations,
                fast load times, and a responsive user experience
                across Android and iOS devices.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
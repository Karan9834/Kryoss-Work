import React from "react";
import img1 from "../../../assets/FlutterApp/img1.webp";
import img2 from "../../../assets/FlutterApp/img2.webp";
import img3 from "../../../assets/FlutterApp/img3.webp";
import img4 from "../../../assets/FlutterApp/img4.webp";
import img5 from "../../../assets/FlutterApp/img5.webp";
import img6 from "../../../assets/FlutterApp/img6.webp";
import img7 from "../../../assets/FlutterApp/img7.webp";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-14">

          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-semibold mt-4 leading-snug">
            <span className="text-blue-600">
              Why Businesses Choose Our
            </span>{" "}
            White Label Flutter Development
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our Flutter development approach focuses on performance,
            scalability, and long-term reliability. From project planning
            to deployment, we help businesses build modern mobile
            applications with strong technical foundations.
          </p>

        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Reliable Project Delivery
              </h3>

              <p className="text-gray-600 mt-3">
                Our development workflow ensures projects stay on schedule.
                We follow a structured process to deliver apps smoothly
                without delays or unexpected issues.
              </p>
            </div>

            <div className="mt-6">
              <img src={img1} alt="" />
            </div>

          </div>

          {/* Card 2 */}

          <div className="bg-orange-50 rounded-3xl p-8 flex flex-col justify-between lg:col-span-2">

            <div>
              <h3 className="text-xl font-semibold text-orange-600">
                Consistent Project Updates
              </h3>

              <p className="text-gray-600 mt-3">
                We maintain clear communication throughout the development
                process. Clients receive frequent updates so they always
                understand the project’s progress.
              </p>
            </div>

            <div className="mt-6">
              <img src={img2} alt="" />
            </div>

          </div>

          {/* Card 3 */}

          <div className="bg-blue-50 rounded-3xl p-8 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Extensive Industry Experience
              </h3>

              <p className="text-gray-600 mt-3">
                Our team has built applications for multiple industries,
                allowing us to design Flutter apps that meet real-world
                business needs.
              </p>
            </div>

            <div className="mt-6">
              <img src={img3} alt="" />
            </div>

          </div>

          {/* Card 4 */}

          <div className="bg-green-50 rounded-3xl p-8 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Cost-Efficient Development
              </h3>

              <p className="text-gray-600 mt-3">
                Flutter’s single codebase allows us to reduce development
                time and costs while still delivering powerful mobile
                applications.
              </p>
            </div>

            <div className="mt-6">
              <img src={img4} alt="" />
            </div>

          </div>

          {/* Card 5 */}

          <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Skilled Flutter Engineers
              </h3>

              <p className="text-gray-600 mt-3">
                Our developers specialize in Flutter and understand the
                ecosystem deeply, enabling us to build highly optimized
                mobile solutions.
              </p>
            </div>

            <div className="mt-6">
              <img src={img5} alt="" />
            </div>

          </div>

          {/* Card 6 */}

          <div className="bg-orange-50 rounded-3xl p-8 flex flex-col justify-between lg:col-span-2">

            <div>
              <h3 className="text-xl font-semibold text-orange-600">
                Faster Time to Market
              </h3>

              <p className="text-gray-600 mt-3">
                By using Flutter’s efficient development environment,
                we accelerate app delivery and help businesses launch
                their products faster.
              </p>
            </div>

            <div className="mt-6">
              <img src={img6} alt="" />
            </div>

          </div>

          {/* Card 7 */}

          <div className="bg-blue-50 rounded-3xl p-8 flex flex-col justify-between">

  <div>
    <h3 className="text-xl font-semibold text-blue-700">
      Robust Technology
    </h3>

    <p className="text-gray-600 mt-3">
      We build Flutter applications using reliable technologies and
      scalable architecture. This ensures your app performs smoothly
      as your business grows.
    </p>
  </div>

  <div className="mt-6">
    <img src={img7} alt="" />
  </div>

</div>

        </div>

      </div>
    </section>
  );
}
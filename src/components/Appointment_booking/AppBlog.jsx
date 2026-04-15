import blog1 from "../../assets/Appointment/blog1.webp";
import blog2 from "../../assets/Appointment/blog2.webp";
import blog3 from "../../assets/Appointment/blog3.webp";

export default function RelatedBlogs() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="border px-4 py-1 rounded-full text-sm">
            Articles
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-4">
          Our <span className="text-blue-600">Latest Publications</span>
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Remain informed regarding recent tech movements, deep analyses, plus development
          strategies within digital healthcare. Read our emerging articles acquiring
          crucial perspectives boosting your operational insights.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Large Blog */}
          <div className="border rounded-3xl overflow-hidden hover:shadow-lg transition">

            <img
              src={blog1}
              alt="blog"
              className="w-full"
            />

            <h3 className="p-6 text-blue-600 font-semibold">
              Digital Health Platforms: The Next Era of Telehealth Software
            </h3>

          </div>

          {/* Right Small Blogs */}
          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-6 border rounded-3xl p-4 hover:shadow-lg transition">

              <img
                src={blog2}
                className="w-40 rounded-xl"
                alt=""
              />

              <h3 className="font-semibold">
                Medical Scheduling Interfaces: Core Toolsets & Investment Models
              </h3>

            </div>

            <div className="flex items-center gap-6 border rounded-3xl p-4 hover:shadow-lg transition">

              <img
                src={blog3}
                className="w-40 rounded-xl"
                alt=""
              />

              <h3 className="font-semibold">
                Steps for Deploying Your Proprietary Healthcare Digital Solution Today
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
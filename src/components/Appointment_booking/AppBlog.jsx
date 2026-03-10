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
            Blogs
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-4">
          Our <span className="text-blue-600">Related Blogs</span>
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Stay updated with the latest trends, insights, and tips in the on-demand
          app industry. Explore our newest blogs to gain valuable knowledge and
          ideas to grow your business!
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
              On-Demand Doctor Apps: Future of Telemedicine in 2025
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
                Doctor Appointment Booking App: Features & Cost
              </h3>

            </div>

            <div className="flex items-center gap-6 border rounded-3xl p-4 hover:shadow-lg transition">

              <img
                src={blog3}
                className="w-40 rounded-xl"
                alt=""
              />

              <h3 className="font-semibold">
                How To Launch Your Own On-Demand Doctor App For Startup Business?
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
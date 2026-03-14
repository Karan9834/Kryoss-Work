import blog1 from "../../../assets/IosApp/blog1.webp";
import blog2 from "../../../assets/IosApp/blog2.webp";
import blog3 from "../../../assets/IosApp/blog3.webp";

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-14">

          <span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            Blogs
          </span>

          <h2 className="text-3xl font-semibold mt-3">
            Recent <span className="text-green-600">Articles</span>
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Explore insights, industry updates, and helpful guides about
            modern app development, cloud solutions, and digital innovation.
          </p>

        </div>


        {/* BLOG GRID */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT BIG CARD */}

          <div className="border border-green-200 rounded-2xl overflow-hidden hover:shadow-lg transition">

            <img
              src={blog1}
              alt="blog"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="font-semibold text-lg leading-snug">
                Leading Food Delivery Platforms Transforming Local Markets
              </h3>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="flex flex-col gap-6">


            {/* SMALL CARD 1 */}

            <div className="border border-green-200 rounded-2xl p-4 flex gap-4 items-center hover:shadow-lg transition">

              <img
                src={blog2}
                alt="blog"
                className="w-40 h-24 rounded-lg object-cover"
              />

              <h4 className="font-medium text-sm leading-snug">
                Top Food Delivery Apps Shaping Online Ordering Experiences
              </h4>

            </div>


            {/* SMALL CARD 2 */}

            <div className="border border-green-200 rounded-2xl p-4 flex gap-4 items-center hover:shadow-lg transition">

              <img
                src={blog3}
                alt="blog"
                className="w-40 h-24 rounded-lg object-cover"
              />

              <h4 className="font-medium text-sm leading-snug">
                Understanding the Business Model Behind Modern Food Apps
              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
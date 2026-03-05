import React from "react";

const blogs = [
  {
    title: "How Does Zipcar Make Money? Zipcar Business Model Explained",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
];

const sideBlogs = [
  {
    title: "How to Develop your car rental app for Startup Business?",
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
  },
  {
    title: "Motorbike Rental app Development Cost & Key Features",
    img: "https://images.unsplash.com/photo-1558981403-c5f9891c8b8a",
  },
];

const RelatedBlogsSection = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        {/* title */}

        <div className="text-center mb-12">

          <div className="flex justify-center mb-3">
            <div className="flex items-center gap-2 border px-4 py-1 rounded-full bg-white">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              Blogs
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-sky-600">Related Blogs</span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Stay updated with latest trends and insights in on-demand apps
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-8">


          {/* LEFT BIG */}

          {blogs.map((b, i) => (
            <div
              key={i}
              className="
                border
                rounded-3xl
                p-4
                bg-white
                shadow-sm
                hover:shadow-lg
                transition
              "
            >

              <img
                src={b.img}
                className="rounded-2xl mb-4 h-64 w-full object-cover"
              />

              <h3 className="font-semibold text-lg">
                {b.title}
              </h3>

            </div>
          ))}



          {/* RIGHT */}

          <div className="flex flex-col gap-6">

            {sideBlogs.map((b, i) => (

              <div
                key={i}
                className="
                  border
                  rounded-3xl
                  p-4
                  bg-white
                  flex
                  gap-4
                  items-center
                  hover:shadow-lg
                  transition
                "
              >

                <img
                  src={b.img}
                  className="w-40 h-24 object-cover rounded-xl"
                />

                <h4 className="font-semibold">
                  {b.title}
                </h4>

              </div>

            ))}

          </div>


        </div>

      </div>

    </section>
  );
};

export default RelatedBlogsSection;
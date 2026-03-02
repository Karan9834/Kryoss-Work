import React from "react";

const apps = [
  {
    title: "Gojek Clone App",
    img: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4",
  },
  {
    title: "Uber Clone App",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
  {
    title: "Food Delivery App",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Medicine Delivery App",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    title: "Handyman Service App",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
  },
  {
    title: "Carpool Ride App",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  },
  {
    title: "Indrive Clone App",
    img: "https://images.unsplash.com/photo-1549921296-3a6b3c1d8c9b",
  },
  {
    title: "Delivery Anything App",
    img: "https://images.unsplash.com/photo-1586769852044-692d6e3703f2",
  },
];

const OnDemandSolutionsSection = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* pill */}

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full bg-white">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            <span>Product Showcase</span>
          </div>
        </div>


        {/* title */}

        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Our{" "}
          <span className="text-sky-600">
            On-Demand App Solutions
          </span>
        </h2>


        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Check out our best-selling on-demand solutions and find the perfect fit
          for your unique business needs.
        </p>



        {/* cards */}

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-10">

          {apps.map((app, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                shadow
                overflow-hidden
                hover:shadow-xl
                transition
                cursor-pointer
              "
            >

              <img
                src={app.img}
                className="
                  w-full
                  h-40
                  object-cover
                "
              />

              <div className="p-4 font-semibold">
                {app.title}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OnDemandSolutionsSection;
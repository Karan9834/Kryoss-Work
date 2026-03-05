import React from "react";

const reviews = [
  {
    name: "Trustpilot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Trustpilot_Logo.svg",
    rating: "4.3",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    rating: "4.9",
  },
  {
    name: "Clutch",
    logo: "https://clutch.co/static/logo.svg",
    rating: "5.0",
  },
  {
    name: "GoodFirms",
    logo: "https://goodfirms.s3.amazonaws.com/assets/ui/goodfirms-logo.svg",
    rating: "4.9",
  },
];

const AwardsSection = () => {
  return (
    <section
      className="
        py-20
        text-white
        bg-[#021b3a]
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* pill */}

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border border-white/40 px-4 py-1 rounded-full">
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <span>Awards & Recognition</span>
          </div>
        </div>


        {/* title */}

        <h2 className="text-3xl md:text-4xl font-bold">
          Recognized by{" "}
          <span className="text-sky-400">
            Global Review Platforms & Industry Leaders
          </span>
        </h2>


        <p className="mt-4 max-w-3xl mx-auto text-gray-200">
          We are proud to be recognized by top industry platforms such as
          Trustpilot, Google, Clutch, and GoodFirms. With excellent ratings and
          reviews, our commitment to delivering high-quality solutions is trusted
          worldwide.
        </p>



        {/* cards */}

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-12">

          {reviews.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                text-black
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                shadow-lg
              "
            >
              <img
                src={item.logo}
                className="h-8 object-contain mb-3"
              />

              <div className="text-yellow-500 text-lg">
                ★★★★★
              </div>

              <div className="text-gray-600 text-sm mt-1">
                ({item.rating})
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AwardsSection;
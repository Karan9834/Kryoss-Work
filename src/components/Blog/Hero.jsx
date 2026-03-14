import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f3dada] rounded-3xl p-10 max-w-8xl mx-auto mt-5">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-600 mb-3">
            11 min read • 16 February, 2026
          </p>

          <h1 className="text-4xl font-bold mb-4 text-black">
            Top 12 Taxi Booking Apps in the UK - 2026 Updated
          </h1>

          <p className="text-gray-700 mb-6">
            Discover the Best 12 Taxi booking apps dominating the UK market
            and make your travel experiences more convenient than ever!
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://journal-portal.whitelabelfox.com/blog-assets/image/author-images/Viral-Kacha.webp"
              alt="author"
              className="w-10 h-10 rounded-full"
            />

            <p className="text-sm">
              written by <br />
              <span className="font-semibold">
                Viral Kacha – CEO & Sales Head
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://journal-portal.whitelabelfox.com/blog-assets/image/blog-images/taxi-booking-apps-in-uk.webp"
            alt="blog"
            className="rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
import { Link } from 'react-router-dom';
import React from "react";

const BlogFeature = () => {
  return (
    <section className="max-w-8xl mx-auto px-6 py-16"
    
    style={{backgroundImage: "url(https://whitelabelfox.com/blog-assets/blog-images/main-cta-bg.webp)",
backgroundRepeat: "no-repeat"

    }}
    >

      <div className="grid md:grid-cols-2 gap-5 items-stretch">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          

          <h2 className="text-4xl font-bold mb-4 text-white">
           Unlock Your Business Potential Now!
          </h2>

          <p className="text-white mb-6">
         Take your business to the next level with our ready-to-launch, customizable apps. Whether you're a startup or an established brand, we have the perfect solution to accelerate your growth and success.
          </p>

          <Link to="/company/contact" className="bg-orange-500 text-white px-6 py-3 rounded-lg w-fit">
           Get Started Today
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="h-full">

          <img
            src="https://whitelabelfox.com/blog-assets/blog-images/main-cta-vector.webp"
            alt="feature"
            className="w-full h-full object-cover rounded-xl"
          />

        </div>

      </div>

    </section>
  );
};

export default BlogFeature;
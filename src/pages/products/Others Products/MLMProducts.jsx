import React, { useEffect } from "react";
import MLMHero from "../../../components/MLM-Landing/MLMHero";
import MLMAbout from "../../../components/MLM-Landing/MLMAbout";
import MLMFeatures from "../../../components/MLM-Landing/MLMFeatures";
import MLMCardSection from "../../../components/MLM-Landing/MLMCardSection";
import MLMWhyUs from "../../../components/MLM-Landing/MLMWhyUs";

// Common Sections
import Testimonial from "../../../components/Common/Testimonial";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";
import TeamMoments from "../../../components/Common/TeamMoments";
import PopularBlogs from "../../../components/Blog/PopularBlogs";

const MLMProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("mlm-products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F0F9FF]">
      {/* 1. Hero Section */}
      <MLMHero onExplore={scrollToProducts} />

      {/* 2. About Section */}
      <div className="bg-white">
        <MLMAbout />
      </div>

      {/* 3. Features Section */}
      <MLMFeatures />

      {/* 4. Card Section (Products) */}
      <div className="bg-white">
        <MLMCardSection />
      </div>

      {/* 5. Why Us Section */}
      <MLMWhyUs />

      {/* 6. Testimonial Section (Common) */}
      <div className="bg-white">
        <Testimonial
          theme="blue"
          bgGradient="from-white to-blue-50"
          cardGradient="from-blue-600 to-sky-500"
          headingText="What Our MLM Clients Say"
          subheadingText="Trusted by network marketing leaders and direct selling companies worldwide."
        />
      </div>

      {/* 7. Industries Section (Common) */}
      <div className="bg-blue-50">
        <Industries
          theme={{
            bg: "bg-transparent",
            primary: "text-[#1E293B]",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
          }}
        />
      </div>

      {/* 8. Our Work Section (Common) */}
      <div className="bg-white">
        <OurWork
          theme={{
            primary: "text-[#1E293B]",
            accent: "bg-blue-500",
            bg: "bg-transparent",
          }}
        />
      </div>
      <div className="bg-white">
        <PopularBlogs />
      </div>

      {/* 9. Contact Us Section (Common) */}
      <div className="bg-[#F0F9FF]">
        <ContactUs
          theme="blue"
          productName="MLM Solutions"
          bgGradient="from-blue-50 to-sky-50"
          cardBg="bg-white"
        />
      </div>
      <TeamMoments />
    </div>
  );
};

export default MLMProducts;

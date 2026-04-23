import React, { useEffect } from "react";
import OTTHero from "../../../components/OTT-Landing/OTTHero";
import OTTAbout from "../../../components/OTT-Landing/OTTAbout";
import OTTFeatures from "../../../components/OTT-Landing/OTTFeatures";
import OTTCardSection from "../../../components/OTT-Landing/OTTCardSection";
import OTTWhyUs from "../../../components/OTT-Landing/OTTWhyUs";

// Common Sections
import Testimonial from "../../../components/Common/Testimonial";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";
import TeamMoments from "../../../components/Common/TeamMoments";
import PopularBlogs from "../../../components/Blog/PopularBlogs";

const OTTLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0A0A0B]">
      {/* 1. Hero Section - Dark */}
      <OTTHero />

      {/* 2. About Section - White */}
      <div className="bg-white">
        <OTTAbout isLight={true} />
      </div>

      {/* 3. Features Section - Dark */}
      <OTTFeatures />

      {/* 4. Card Section (Products) - White */}
      <div className="bg-white">
        <OTTCardSection isLight={true} />
      </div>

      {/* 5. Why Us Section - Dark */}
      <OTTWhyUs />

      {/* 6. Testimonial Section (Common) - White */}
      <div className="bg-white">
        <Testimonial
          theme="orange"
          bgGradient="from-white to-gray-50"
          cardGradient="from-red-600 to-purple-600"
          headingText="What Our Streamers Say"
          subheadingText="Trusted by leading content creators and media empires worldwide."
        />
      </div>

      {/* 7. Industries Section (Common) - Light Red (Theme Related) */}
      <div className="bg-[#FFF5F5]">
        <Industries
          theme={{
            bg: "bg-transparent",
            primary: "text-red-600",
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
          }}
        />
      </div>

      {/* 8. Our Work Section (Common) - White */}
      <div className="bg-white">
        <OurWork
          theme={{
            primary: "text-red-600",
            accent: "bg-purple-600",
            bg: "bg-transparent",
          }}
        />
      </div>
      
      {/* 9. Blog Section - White */}
      <div className="bg-white">
        <PopularBlogs />
      </div>

      {/* 10. Contact Us Section (Common) - Light Purple (Theme Related) */}
      <div className="bg-[#F5F3FF]">
        <ContactUs
          theme="orange"
          productName="OTT & Video Streaming"
          bgGradient="from-transparent to-transparent"
          cardBg="bg-white"
        />
      </div>
      <TeamMoments />
    </div>
  );
};

export default OTTLanding;
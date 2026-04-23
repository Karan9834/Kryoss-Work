import React, { useEffect } from "react";
import GroceryHero from "../../../components/Grocery-Landing/GroceryHero";
import GroceryAbout from "../../../components/Grocery-Landing/GroceryAbout";
import GroceryFeatures from "../../../components/Grocery-Landing/GroceryFeatures";
import GroceryCardSection from "../../../components/Grocery-Landing/GroceryCardSection";
import GroceryWhyUs from "../../../components/Grocery-Landing/GroceryWhyUs";
import Testimonial from "../../../components/Common/Testimonial";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";
import TeamMoments from "../../../components/Common/TeamMoments";
import PopularBlogs from "../../../components/Blog/PopularBlogs";

const GroceryLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F0FDF4]">
      <GroceryHero />

      <div className="bg-white">
        <GroceryAbout />
      </div>

      <div className="bg-[#FFF7ED]">
        <GroceryFeatures />
      </div>

      <div className="bg-white">
        <GroceryCardSection />
      </div>

      <div className="bg-[#F0FDF4]">
        <GroceryWhyUs />
      </div>

      <div className="bg-[#FFF7ED]">
        <Testimonial
          theme="green"
          bgGradient="from-[#FFF7ED] to-white"
          cardGradient="from-emerald-600 to-teal-500"
          headingText="What Our Grocery Clients Say"
        />
      </div>

      <div className="bg-white">
        <Industries
          theme={{
            bg: "bg-transparent",
            primary: "text-emerald-600",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
          }}
        />
      </div>

      <div className="bg-[#F0FDF4]">
        <OurWork
          theme={{
            primary: "text-orange-600",
            accent: "bg-emerald-600",
          }}
        />
      </div>
      <PopularBlogs />

      <ContactUs
        theme="green"
        productName="Grocery Delivery"
        bgGradient="from-[#F0FDF4] to-[#FFF7ED]"
        accentGradient="from-emerald-600 to-teal-500"
        buttonGradient="from-emerald-600 to-orange-500"
        showImage={true}
      />

      <TeamMoments />
    </div>
  );
};

export default GroceryLanding;

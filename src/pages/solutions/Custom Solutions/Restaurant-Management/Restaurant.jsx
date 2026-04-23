import React from "react";
import Hero from "./sections/Hero";
import RestaurantSoftware from "./sections/RestaurantSoftware";
import RestaurantExpertise from "./sections/RestaurantExpertise";
import RestaurantPOS from "./sections/RestaurantPOS";
import RestaurantOrdering from "./sections/RestaurantOrdering";
import RestaurantBilling from "./sections/RestaurantBilling";
import RestaurantInventory from "./sections/RestaurantInventory";
import RMSCardSection from "../../../../components/RMS-Restaurant-Mgmt/RMSCardSection";
import RestaurantFeatures from "./sections/RestaurantFeatures";
import UniqueOfferings from "./sections/UniqueOfferings";
import RestaurantCost from "./sections/RestaurantCost";
import Industries from "../../../../components/Common/Industries";
import Testimonial from "../../../../components/Common/Testimonial";
import OurWork from "../../../../components/Common/OurWork";
import ContactUs from "../../../../components/Common/ContactUs";
import PopularBlogs from "../../../../components/Blog/PopularBlogs";
import TeamMoments from "../../../../components/Common/TeamMoments";



const Restaurant = () => {
  return (
    <div>
      <Hero />
      <RestaurantSoftware />
      <RestaurantExpertise />
      <RestaurantPOS />
      <RestaurantOrdering />
      <RestaurantBilling />
      <RestaurantInventory />
      <RMSCardSection />
      <RestaurantFeatures />
      <UniqueOfferings />
      <div id="product-section">
    <RestaurantCost />
</div>
      <OurWork
        theme={{
          primary: "text-orange-600",
          accent: "bg-orange-600",
        }}
      />

      <Testimonial
        theme="orange"
        bgGradient="from-orange-50 to-amber-50"
        cardGradient="from-orange-600 to-amber-600"
        headingText="What Our Customers Say"
        subheadingText="Trusted by thousands of restaurant owners"
      />

      <Industries
        theme={{
          bg: "bg-gradient-to-b from-orange-50 to-amber-50",
          primary: "text-orange-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-orange-600",
        }}
      />
      <PopularBlogs/>

      <ContactUs
        theme="orange"
        productName="Restaurant Management"
        bgGradient="from-orange-50 to-amber-50"
        accentGradient="from-orange-600 to-amber-600"
        buttonGradient="from-orange-600 to-orange-700"
        showImage={true}
      />
      <TeamMoments/>
    </div>
  );
};

export default Restaurant;

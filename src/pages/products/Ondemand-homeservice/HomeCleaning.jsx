import React, { lazy, Suspense } from "react";

import HomeCleaningHero from "../../../components/Home-cleaning/HomeCleaningHero";
import HomeCleaningAbout from "../../../components/Home-cleaning/HomeCleaningAbout";
import HomeCleaningHowItWorks from "../../../components/Home-cleaning/HomeCleaningHowItWorks";
import HomeCleaningCTA from "../../../components/Home-cleaning/HomeCleaningCTA";
import HomeCleaningSnapsot from "../../../components/Home-cleaning/HomeCleaningSnapshot";
import HomeCleaningFeatures from "../../../components/Home-cleaning/HomeCleaningFeatures";
import HomeCleaningWebAdmin from "../../../components/Home-cleaning/HomeCleaningWebAdmin";
import HomeCleaningProviderAdmin from "../../../components/Home-cleaning/HomeCleaningProviderAdmin";
import HomeCleaningOffer from "../../../components/Home-cleaning/HomeCleaningOffer";
import HomeCleaningCTA2 from "../../../components/Home-cleaning/HomeCleaningCTA2";
import HomeCleaningUniqueFeatures from "../../../components/Home-cleaning/HomeCleaningUniqueFeatures";
import HomeCleaningAppDemo from "../../../components/Home-cleaning/HomeCleaningAppDemo";
import HomeCleaningDevelopmentProcess from "../../../components/Home-cleaning/HomeCleaningDevelopmentProcess";
import HomeCleaningCTA3 from "../../../components/Home-cleaning/HomeCleaningCTA3";
import HomeCleaningDigitalFootprint from "../../../components/Home-cleaning/HomeCleaningDigitalFootprint";
import HomeCleaningChooseUs from "../../../components/Home-cleaning/HomeCleaningChooseUs";
// import HomeCleaningTestimonialsSection from "../../../components/Home-cleaning/HomeCleaningTestinomialsSection";

// import HomeCleaningAwardRecognition from "../../../components/Home-cleaning/HomeCleaningAwardRecognition";
import HomeCleaningFAQ from "../../../components/Home-cleaning/HomeCleaningFAQ";
import HomeCleaningTechStack from "../../../components/Home-cleaning/HomeCleaningTechStack";
import PopularBlogs from "../../../components/Blog/PopularBlogs";
import HomeCleaningNewsletterSection from "../../../components/Home-cleaning/HomeCleaningNewsletterSection";
const PortfolioShowcase = lazy(() => import("@/components/home/PortfolioShowcase"));

import ContactUs from "../../../components/Common/ContactUs";
import TeamMoments from "../../../components/Common/TeamMoments";
import Testimonial from "../../../components/Common/Testimonial";

const HomeCleaning = () => {
  return (
    <>
      <HomeCleaningHero />
      <HomeCleaningAbout />
      <HomeCleaningHowItWorks />
      <HomeCleaningCTA />
      <HomeCleaningSnapsot />
      <HomeCleaningFeatures />
      <HomeCleaningWebAdmin />
      <HomeCleaningProviderAdmin />
      <HomeCleaningOffer />
      <HomeCleaningCTA2 />
      <HomeCleaningUniqueFeatures />
      <HomeCleaningAppDemo />
      <HomeCleaningDevelopmentProcess />
      <HomeCleaningCTA3 />
      <HomeCleaningDigitalFootprint />
      <HomeCleaningChooseUs />

      <Suspense fallback={<div className="h-20" />}>
        <PortfolioShowcase />
      </Suspense>

      {/* <HomeCleaningTestimonialsSection/> */}

      {/* ✅ Proper Testimonial */}
      <Testimonial
        theme="orange"
        bgGradient="from-orange-50 via-white to-orange-50"
        cardGradient="from-orange-500 to-amber-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />



      {/* <HomeCleaningAwardRecognition/> */}

      <HomeCleaningFAQ />
      <HomeCleaningTechStack />

      {/* ✅ Orange Contact */}
      <ContactUs
        theme="orange"
        productName="Home Cleaning"
        bgGradient="from-orange-50 via-white to-orange-50"
        accentGradient="from-orange-500 to-amber-500"
        buttonGradient="from-orange-600 to-amber-600"
        showImage={true}
      />

      <PopularBlogs />
      <HomeCleaningNewsletterSection />
      <TeamMoments />
    </>
  );
};

export default HomeCleaning;
import React, { lazy, Suspense } from "react";
import Testimonial from "../../components/Common/Testimonial";
const PortfolioShowcase = lazy(() => import("@/components/home/PortfolioShowcase"));
import AwardRecognition from "../../components/user-rights/AwardRecognition";
import ContactUs from "../../components/Common/ContactUs";
import Contact from "../../components/user-rights/Contact";
import Policies from "../../components/user-rights/Policies";
import Newsletter from "../../components/user-rights/Newsletter";
import TeamMoments from "../../components/Our-Team/TeamMoments";
const PoliciesPage = () => {
  return (
    <>
    <Suspense fallback={
      <div className="w-full py-20 flex justify-center items-center">
        <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <Policies />
      <Testimonial theme="orange" />
      <PortfolioShowcase />
      <AwardRecognition />
      <ContactUs
        theme="orange"
        productName="Business Directory"
        bgGradient="from-orange-100 to-white"
        accentGradient="from-orange-600 to-red-500"
        buttonGradient="from-orange-600 to-red-600"
        showImage={true}
      />
      <Newsletter />
      <TeamMoments />
    </Suspense>
    </>
  );
};

export default PoliciesPage;

import React from "react";
import TestinomialsSection from "../../components/user-rights/TestinomialsSection";
import ProductShowcase from "../../components/user-rights/ProductShowcase";
import AwardRecognition from "../../components/user-rights/AwardRecognition";
import ContactUs from "../../components/Common/ContactUs";
import Contact from "../../components/user-rights/Contact";
import Policies from "../../components/user-rights/Policies";
import Newsletter from "../../components/user-rights/Newsletter";
import TeamMoments from "../../components/Our-Team/TeamMoments";
const PoliciesPage = () => {
  return (
    <>
      <Policies />
      <TestinomialsSection />
      <ProductShowcase />
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
    </>
  );
};

export default PoliciesPage;

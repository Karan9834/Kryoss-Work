import React from "react";
import CarHero from "../../../components/car-pooling/CarHero";
import AboutSection from "../../../components/car-pooling/AboutSection";
import HowItWorks from "../../../components/car-pooling/HowItWorks";
import AppGlance from "../../../components/car-pooling/AppGlance";
import CTASection from "../../../components/car-pooling/CTASection";
import FeaturesSection from "../../../components/car-pooling/FeatureSection";
import AdminPanelSection from "../../../components/car-pooling/AdminPanelSection";
import ValueAddedSection from "../../../components/car-pooling/ValueAddedSection";
import CustomerBenefitsSection from "../../../components/car-pooling/CustomerBenefitsSection";
import AppWorkflowSection from "../../../components/car-pooling/AppWorkFlowSection";
import CTASection2 from "../../../components/car-pooling/CTASection2";
import DigitalFootprintSection from "../../../components/car-pooling/DigitalFootprintSection";
import WhyChooseUsSection from "../../../components/car-pooling/WhyChooseUsSection";
import TaxiBusinessModelSection from "../../../components/car-pooling/TaxiBusinessModelSection";

const CarPoolingApp = () => {
  return (
    <>
      <CarHero />
      <AboutSection/>
      <HowItWorks/>
      <AppGlance/>
      <CTASection/>
      <FeaturesSection/>
      <AdminPanelSection/>
      <ValueAddedSection/>
      <CustomerBenefitsSection/>
      <AppWorkflowSection/>
      <CTASection2/>
      <DigitalFootprintSection/>
      <WhyChooseUsSection/>
      <TaxiBusinessModelSection/>
    </>
  );
};

export default CarPoolingApp;
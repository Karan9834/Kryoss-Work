import React from "react";
import AppointmentHero from "../../../components/Appointment_booking/AppointmentHero";
import AppointmentAbout from "../../../components/Appointment_booking/AppointmentAbout";
import AppScreens from "../../../components/Appointment_booking/AppScreens";
import AppCta1 from "../../../components/Appointment_booking/AppCta1";
import DoctorAppFeatures from "../../../components/Appointment_booking/DoctorAppFeatures";
import AdminFeatures from "../../../components/Appointment_booking/AdminFeatures";
import PlatformsSection from "../../../components/Appointment_booking/PlatformsSection";
import AppFlow from "../../../components/Appointment_booking/AppFlow";
import AppBenefits from "../../../components/Appointment_booking/AppBenefits";
import AppointmentScheduling from "../../../components/Appointment_booking/AppointmentScheduling";
import LaunchSection from "../../../components/Appointment_booking/LaunchSection";
import AppWhySection from "../../../components/Appointment_booking/AppWhySection";
import AppDevelopmentProcess from "../../../components/Appointment_booking/AppDevelopmentProcess";
import DoctorAppSolutions from "../../../components/Appointment_booking/DoctorAppSolutions";
import OnDemandApps from "../../../components/DatingApp/OnDemandApps";
import OnDemandSolutions from "../../../components/DatingApp/OnDemandSolutions";
import TechStack from "../../../components/PestControl/PestTech";
import AppFaqs from "../../../components/Appointment_booking/AppFaqs";
import ContactUs from "../../../components/Common/ContactUs";
import AppBlog from "../../../components/Appointment_booking/AppBlog";
import AppFinalCta from "../../../components/Appointment_booking/AppFinalCta";
import Testimonials from "../../../components/PestControl/PestPeopleLove";
import TeamMoments from "../../../components/Common/TeamMoments";
import Testimonial from "../../../components/Common/Testimonial";

const AppointmentBooking = () => {
  return (
    <>
      <AppointmentHero />
      <AppointmentAbout />
      <AppScreens />
      <AppCta1 />
      <DoctorAppFeatures />
      <AdminFeatures />
      <PlatformsSection />
      <AppFlow />
      <AppBenefits />
      <AppointmentScheduling />
      <LaunchSection />
      <AppWhySection />
      <AppDevelopmentProcess />
      <DoctorAppSolutions />
      <OnDemandApps />
      <OnDemandSolutions />
      <TechStack />
      <Testimonial
        theme="blue"
        bgGradient="from-blue-50 via-white to-blue-50"
        cardGradient="from-blue-500 to-indigo-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />
      <AppFaqs />
      <ContactUs productName="Doctor Appointment App" theme="blue" />
      <AppBlog />
      <AppFinalCta />
      <TeamMoments/>
    </>
  );
};

export default AppointmentBooking;

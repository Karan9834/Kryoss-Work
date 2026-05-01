import React, { lazy, Suspense } from "react";
import Hero from "@/components/home/Hero";

// Lazy load components that are below the fold
const WorkApproach = lazy(() => import("../../components/home/WorkApproach"));
const About = lazy(() => import("@/components/home/About"));
const PickSection = lazy(() => import("../../components/home/PickSection"));
const PortfolioShowcase = lazy(() => import("@/components/home/PortfolioShowcase"));
const Industries = lazy(() => import("@/components/home/Industries"));
const WhyChooseUs = lazy(() => import("@/components/home/WhyChooseUs"));
const TechStack = lazy(() => import("@/components/home/TechStack"));
const Testimonial = lazy(() => import("../../components/Common/Testimonial"));
const FAQ = lazy(() => import("@/components/home/FAQ"));
const TrustBadges = lazy(() => import("@/components/home/TrustBadges"));
const CTASection = lazy(() => import("@/components/home/CTASection"));
const Contact = lazy(() => import("@/components/home/Contact"));
const TeamMoments = lazy(() => import("@/components/Common/TeamMoments"));
const PopularBlogs = lazy(() => import("../../components/Blog/PopularBlogs"))

const SectionLoader = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <WorkApproach />
        <About />
        <PickSection />
        <PortfolioShowcase />
        <Industries />
        <WhyChooseUs />
        <TechStack />
        <Testimonial
          theme="orange"
          bgGradient="from-orange-50/50 via-amber-50/30 to-white"
          cardGradient="from-orange-500 to-amber-500"
        />
        <FAQ />
        <TrustBadges />
        <CTASection />
        <PopularBlogs/>
        <Contact />
        <TeamMoments />
      </Suspense>
    </>
  );
};

export default Home;

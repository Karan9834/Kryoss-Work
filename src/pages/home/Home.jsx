import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Industries from "@/components/home/Industries";
import AISolutions from "@/components/home/AISolutions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Testimonial from "../../components/Common/Testimonial";
import Team from "@/components/home/Team";
import CTABanner from "@/components/home/CTABanner";
import FAQ from "@/components/home/FAQ";
import TrustBadges from "@/components/home/TrustBadges";
import Contact from "@/components/home/Contact";
import PickSection from "../../components/home/PickSection";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import TechStack from "@/components/home/TechStack";
import CTASection from "@/components/home/CTASection";
import TeamMoments from "@/components/Common/TeamMoments";
import WorkApproach from "../../components/home/WorkApproach";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <WorkApproach />
      <About />
      <PickSection />
      <PortfolioShowcase />
      {/* <Products /> */}
      <Industries />
      {/* <AISolutions /> */}
      <WhyChooseUs />
      <TechStack />
      {/* <Stats /> */}
      <Testimonial
        theme="orange"
        bgGradient="from-orange-50/50 via-amber-50/30 to-white"
        cardGradient="from-orange-500 to-amber-500"
      />
      {/* <Team /> */}
      {/* <CTABanner /> */}
      <FAQ />
      <TrustBadges />
      <CTASection />
      <Contact />
      <TeamMoments />
    </>
  );
};

export default Home;

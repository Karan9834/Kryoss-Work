import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Industries from "@/components/home/Industries";
import AISolutions from "@/components/home/AISolutions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Team from "@/components/home/Team";
import CTABanner from "@/components/home/CTABanner";
import FAQ from "@/components/home/FAQ";
import TrustBadges from "@/components/home/TrustBadges";
import Contact from "@/components/home/Contact";
import Newsletter from "@/components/home/Newsletter";
import PickSection from "../../components/home/PickSection";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <PickSection/>
      {/* <Products /> */}
      <Industries />
      {/* <AISolutions /> */}
      <WhyChooseUs />
      {/* <Stats /> */}
      <About />
      <Testimonials />
      {/* <Team /> */}
      {/* <CTABanner /> */}
      <FAQ />
      <TrustBadges />
      <Contact />
      <Newsletter />
    </>
  );
};

export default Home;
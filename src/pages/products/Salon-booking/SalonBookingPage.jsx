import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import TechStackSection from "./sections/TechStack";
import Gallery from "./sections/Gallery";
import CTA from "./sections/CTA";

const SalonBookingPage = ()=>{
    return(
        <>
        <Hero/>
        <About/>
        <Features/>
        <HowItWorks/>
        <TechStackSection/>
        <Gallery/>
        <CTA/>
        </>
    )
}

export default SalonBookingPage
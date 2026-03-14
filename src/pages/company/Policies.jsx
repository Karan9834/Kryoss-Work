import React from "react";
import TestinomialsSection from "../../components/user-rights/TestinomialsSection";
import ProductShowcase from "../../components/user-rights/ProductShowcase";
import AwardRecognition from "../../components/user-rights/AwardRecognition";
import Contact from "../../components/user-rights/Contact";
import Policies from "../../components/user-rights/Policies";
import Newsletter from "../../components/user-rights/Newsletter";
import TeamMoments from "../../components/Our-Team/TeamMoments";
const PoliciesPage = ()=>{
    return(
        <>
        <Policies/>
        <TestinomialsSection/>
        <ProductShowcase/>
        <AwardRecognition/>
        <Contact/>
        <Newsletter/>
        <TeamMoments/>
        </>
    )
}

export default PoliciesPage
import React from "react";
import Hero from "../../components/Our-Team/Hero";
import WhatSetsUsApart from "../../components/Our-Team/WhatSetsUsApart";
import EmpowerTeam from "../../components/Our-Team/EmpowerTeam";
import TeamVoices from "../../components/Our-Team/TeamVoices";
import TeamSection from "../../components/Our-Team/TeamSection";
import AwardRecognition from "../../components/Our-Team/AwardRecognition";
import ProductShowcase from "../../components/Our-Team/ProductShowcase";
import Contact from "../../components/Our-Team/Contact";
import Newsletter from "../../components/Our-Team/Newsletter";
import TeamMoments from "../../components/Our-Team/TeamMoments";

const TeamPage = ()=>{
    return(
        <>
       <Hero/>
       <WhatSetsUsApart/>
       <EmpowerTeam/>
       <TeamVoices/>
       <TeamSection/>
       <AwardRecognition/>
       <ProductShowcase/>
       <Contact/>
       <Newsletter/>
       <TeamMoments/>
        </>
    )
}

export default TeamPage
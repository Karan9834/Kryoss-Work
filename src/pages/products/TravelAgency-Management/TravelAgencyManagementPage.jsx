import React, { useEffect } from "react";
import AgencyManagementHero from "./sections/AgencyManagementHero";
import AgencyManagementAbout from "./sections/AgencyManagementAbout";
import AgencyManagementFeatures from "./sections/AgencyManagementFeatures";
import AgencyManagementHowItWorks from "./sections/AgencyManagementHowItWorks";
import AgencyManagementTechStack from "./sections/AgencyManagementTechStack";
import AgencyManagementGallery from "./sections/AgencyManagementGallery";
import AgencyManagementCTA from "./sections/AgencyManagementCTA";

const TravelAgencyManagementPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <AgencyManagementHero />
            <AgencyManagementAbout />
            <AgencyManagementFeatures />
            <AgencyManagementHowItWorks />
            <AgencyManagementTechStack />
            <AgencyManagementGallery />
            <AgencyManagementCTA />
        </div>
    );
};

export default TravelAgencyManagementPage;

import React from "react";
import Hero from "../../components/SiteMap/Hero";
import TopSelling from "../../components/SiteMap/TopSelling";
import TransportApps from "../../components/SiteMap/TranspostApps";
import DeliveryApps from "../../components/SiteMap/DeliveryApps";
import HandymanApps from "../../components/SiteMap/HandymanApps";
import FoodDelivery from "../../components/SiteMap/FoodDelivery";
import UberClone from "../../components/SiteMap/UberClone";
import GojekClone from "../../components/SiteMap/GojekClone";
import TechSolutions from "../../components/SiteMap/TechSolutions";
import Newsletter from "../../components/SiteMap/Newsletter";
import TeamMoments from "../../components/SiteMap/TeamMoments";

const SiteMapPage = ()=>{
    return(
        <>
        <Hero/>
        <TopSelling/>
        <TransportApps/>
        <DeliveryApps/>
        <HandymanApps/>
        <FoodDelivery/>
        <UberClone/>
        <GojekClone/>
        <TechSolutions/>
        <Newsletter/>
        <TeamMoments/>
        </>
    )
}

export default SiteMapPage
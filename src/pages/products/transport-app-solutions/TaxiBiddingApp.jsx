import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Gavel, DollarSign, Shield, Clock } from 'lucide-react';
import Hero from "../../../components/transport/taxibidding/Hero";
import About from '../../../components/transport/taxibidding/About';
import WorkFlow from '../../../components/transport/taxibidding/WorkFlow';
import DarkUi from '../../../components/transport/taxibidding/DarkUi';
import AppUi from '../../../components/transport/taxibidding/AppUi';
import SmallCta from '../../../components/transport/taxibidding/SmallCta';
import Feature from '../../../components/transport/taxibidding/Feature';
import AdminFeature from '../../../components/transport/taxibidding/AdminFeature';
import Platform from '../../../components/transport/taxibidding/Platform';
import DemoCta from '../../../components/transport/taxibidding/DemoCta';
import StandOut from '../../../components/transport/taxibidding/StandOut';
import Bidding from '../../../components/transport/taxibidding/Bidding';
import Benefits from '../../../components/transport/taxibidding/Benefits';
import Content from '../../../components/transport/taxibidding/Content';
import Opportunities from '../../../components/transport/taxibidding/Opportunities';
import Launch from '../../../components/transport/taxibidding/Launch';
import Cta3 from '../../../components/transport/taxibidding/Cta3';
import Working from '../../../components/transport/taxibidding/Working';
import QuickFlow from '../../../components/transport/taxibidding/QuickFlow';
import ClientInfo from '../../../components/transport/taxibidding/ClientInfo';
import Faqs from '../../../components/transport/taxibidding/Faqs';
import Technologies from '../../../components/transport/taxibidding/Technologies';
import ContactUs from '../../../components/Common/ContactUs';
import Blog from '../../../components/transport/taxibidding/Blog';
import Explore from '../../../components/transport/taxibidding/Explore';
import Updated from '../../../components/transport/taxibidding/Updated';
const TaxiBiddingApp = () => {
    return (
        <>
            <Hero />
            <About/>
            <WorkFlow/>
            <DarkUi/>
            <AppUi/>
            <SmallCta/>
            <Feature/>
            <AdminFeature/>
            <Platform/>
            <DemoCta/>
            <StandOut/>
            <Bidding/>
            <Benefits/>
            <Content/>
            <Opportunities/>
            <Launch/>
            <Cta3/>
            <Working/>
            <QuickFlow/>
            <ClientInfo/>
            <Explore/>
            <Faqs/>
            <Technologies/>
            <ContactUs theme="green" productName="Vyom Drive" />
            <Blog/>
            <Updated/>
        </>
    );
};

export default TaxiBiddingApp;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';
import NotFound from '../pages/NotFound';
import { ProductRoutes } from './ProductRoutes';
import { CompanyRoutes } from './CompanyRoutes';
import { GojekRoutes } from './GojekRoutes';
import { ServiceRoutes } from './ServiceRoutes';
import Blog from "../pages/Blog";
import Products from "../pages/Products";
import ServicesPage from '../components/home/ServicePage';
import HireDevelopersPage from '../components/home/HireDevelopersPage';
import BusinessGrowthPage from '../components/home/BusinessGrowthPage';
import UberClonePage from "../pages/products/Uber-Clone/UberClonePage";
import BikeTaxiPage from "../pages/products/Bike-Taxi/BikeTaxiPage";
import TaxiBiddingPage from "../pages/products/Taxi-Bidding/TaxiBiddingPage";
import FoodDeliveryPage from '../pages/products/Food-Delivery/FoodDeliveryPage';
import CarRentalPage from "../pages/products/Car-Rental/CarRentalPage";
import CarPoolingPage from "../pages/products/Car-Pooling/CarPoolingPage";
import CloudKitchenPage from '../pages/products/Cloud-Kitchen/CloudKitchenPage';
import HandymanServicePage from '../pages/products/handyman-service/HandymanServicePage';
import SalonBookingPage from '../pages/products/Salon-booking/SalonBookingPage';
import CustomerSupportBotPage from '../pages/products/customer-support-bot/CustomerSupportBotPage';
import PropertyListingPortalPage from '../pages/products/property-listing-portal/PropertyListingPortalPage';
import RealEstatePage from '../pages/products/real-estate/RealEstatePage';
import MultiVendorMarketplacePage from "../pages/products/Multi-Vendor-Marketplace/MultiVendorMarketplacePage";
import B2BWholesalePage from "../pages/products/B2B-Wholesale/B2BWholesalePage";
import AiContentGeneratorPage from "../pages/products/AI-Content-Generator/AiContentGeneratorPage";
import TelemedicineAppPage from "../pages/products/Telemedicine-App/TelemedicineAppPage";
import PharmacyDeliveryPage from "../pages/products/Pharmacy-Delivery/PharmacyDeliveryPage";
import ELearningPage from '../pages/products/E-Learning/ELearningPage';
import TutorBookingPage from '../pages/products/Tutor-Booking/TutorBookingPage';
import GroceryDeliveryPage from '../pages/products/Grocery-Delivery/GroceryDeliveryPage';
import SalesCRMPage from "../pages/products/Sales-CRM/SalesCRMPage";
import WebsitesWorks from '../pages/Works/OurWorks/WebsitesWorks';
import UiUxWorks from "../pages/Works/OurWorks/UiUxWorks";
import RealEstateWorks from "../pages/Works/RealEstateWorks";
import SaasWorks from "../pages/Works/SaasWorks";
import HotelBooking from '../pages/products/Hotel-Booking/HotelBooking';
import HotelManagement from '../pages/products/Hotel-Management-System/HotelManagement';
import SocialMedia from "../pages/Works/OurWorks/SocialMedia";
import GraphicBranding from "../pages/Works/OurWorks/GraphicBranding";
import BusinessWorks from '../pages/Works/BusinessWorks';
import WhatsAppPage from '../pages/products/WhatsApp-Clone/WhatsAppPage';
import NewsMagazine from "../pages/Works/OurWorks/NewsMagazine";
import FinanceWorks from '../pages/Works/OurWorks/FinanceWorks';
import OnDemandWorks from '../pages/Works/OurWorks/OnDemandWorks';
import FitnessAppsWorks from '../pages/Works/FitnessAppsWorks';
import LocalBusiness from '../pages/products/Local-Business/LocalBusiness';
import Services from '../pages/products/Service-Platform/Services';
import Job from '../pages/products/Job-Board/Job';
import Recruitment from '../pages/products/Recruitment/Recruitment';
import GamingWorks from "../pages/Works/Gaming&Crypto/GamingWorks";
import FantasyApps from "../pages/Works/Gaming&Crypto/FantasyApps";
import CryptoApps from '../pages/Works/Crypto Works/CryptoApps';
import ExchangeApps from '../pages/Works/Crypto Works/ExchangeApps';
import MLMAppsWorks from '../pages/Works/MLMAppsWorks';
import BettingAppsWorks from '../pages/Works/BettingAppsWorks';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                {GojekRoutes}
                {ProductRoutes}
                {CompanyRoutes}
                {ServiceRoutes}

                {/* Works Routes */}
                <Route path="/works/real-estate" element={<RealEstateWorks />} />
                <Route path="/works/saas" element={<SaasWorks />} />
                <Route path="/works/ui-ux" element={<UiUxWorks />} />
                <Route path="/works/websites" element={<WebsitesWorks />} />
                <Route path="/works/business" element={<BusinessWorks />} />
                <Route path="/works/social-media" element={<SocialMedia />} />
                <Route path="/works/branding" element={<GraphicBranding />} />
                <Route path="/works/news-magazine" element={<NewsMagazine />} />
                <Route path="/works/finance" element={<FinanceWorks />} />
                <Route path="/works/on-demand" element={<OnDemandWorks />} />
                <Route path="/works/fitness-apps" element={<FitnessAppsWorks />} />
                <Route path="/works/gaming" element={<GamingWorks />} />
                <Route path="/works/fantasy-apps" element={<FantasyApps />} />
                <Route path="/works/crypto-apps" element={<CryptoApps />} />
                <Route path="/works/exchange-apps" element={<ExchangeApps />} />
                <Route path="/works/mlm-apps" element={<MLMAppsWorks />} />
                <Route path="/works/betting-apps" element={<BettingAppsWorks />} />

                {/* Blog & Services */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/business-growth" element={<BusinessGrowthPage />} />
                <Route path="/hire-developers" element={<HireDevelopersPage />} />

                {/* Taxi & Delivery Products */}
                <Route path="/products/Uber-Clone" element={<UberClonePage />} />
                <Route path="/products/Bike-Taxi-app" element={<BikeTaxiPage />} />
                <Route path="/products/Taxi-Bidding-app" element={<TaxiBiddingPage />} />
                <Route path="/products/swiggy-clone" element={<FoodDeliveryPage />} />
                <Route path="/products/Car-Rental-app" element={<CarRentalPage />} />
                <Route path="/products/Carpool-app" element={<CarPoolingPage />} />

                {/* Home Services */}
                <Route path="/products/cloud-kitchen" element={<CloudKitchenPage />} />
                <Route path="/products/handyman-app" element={<HandymanServicePage />} />
                <Route path="/products/salon-booking" element={<SalonBookingPage />} />

                {/* AI & Support */}
                <Route path="/products/ai-chatbot" element={<CustomerSupportBotPage />} />

                {/* Real Estate */}
                <Route path="/products/property-listing" element={<PropertyListingPortalPage />} />
                <Route path="/products/real-estate-crm" element={<RealEstatePage />} />

                {/* E-Commerce */}
                <Route path="/products/multi-vendor-ecommerce" element={<MultiVendorMarketplacePage />} />
                <Route path="/products/b2b-wholesale" element={<B2BWholesalePage />} />

                {/* AI Content */}
                <Route path="/products/ai-content-generator" element={<AiContentGeneratorPage />} />

                {/* Healthcare */}
                <Route path="/products/telemedicine-app" element={<TelemedicineAppPage />} />
                <Route path="/products/pharmacy-delivery" element={<PharmacyDeliveryPage />} />

                {/* Education */}
                <Route path="/products/elearning-platform" element={<ELearningPage />} />
                <Route path="/products/tutor-booking" element={<TutorBookingPage />} />

                {/* Food & Grocery */}
                <Route path="/products/grocery-delivery" element={<GroceryDeliveryPage />} />

                {/* CRM */}
                <Route path="/products/sales-crm" element={<SalesCRMPage />} />

                {/* Hospitality */}
                <Route path="/product/1" element={<HotelBooking />} />
                <Route path="/product/2" element={<HotelManagement />} />

                {/* Social Media / WhatsApp Clone */}
                <Route path="/product/social-connect" element={<WhatsAppPage />} />
                <Route path='/products/business-directory' element={<LocalBusiness />} />
                <Route path='/products/service-booking' element={<Services />} />
                <Route path="/products/job-board" element={<Job />} />
                <Route path='/products/recruitment-ats' element={<Recruitment />} />

                {/* 404 */}

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
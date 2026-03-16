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
// import ServicesPage from "../pages/ServicesPage";
import UberClonePage from "../pages/products/Uber-Clone/UberClonePage";
import BikeTaxiPage from "../pages/products/Bike-Taxi/BikeTaxiPage";

import TaxiBiddingPage from "../pages/products/Taxi-Bidding/TaxiBiddingPage"
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
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                {GojekRoutes}
                {ProductRoutes}
                {CompanyRoutes}
                {ServiceRoutes}
                <Route path="*" element={<NotFound />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/business-growth" element={<BusinessGrowthPage />} />


                <Route path="/hire-developers" element={<HireDevelopersPage />} />
                <Route path="/products/Uber-Clone" element={<UberClonePage />} />
                <Route path="/products/Bike-Taxi-app" element={<BikeTaxiPage />} />
                <Route path="/products/Taxi-Bidding-app" element={<TaxiBiddingPage />} />
                <Route path="/products/swiggy-clone" element={<FoodDeliveryPage />} />




                <Route path="/products/Car-Rental-app" element={<CarRentalPage />} />
                <Route path="/products/Carpool-app" element={<CarPoolingPage />} />

                <Route path="/products/cloud-kitchen" element={<CloudKitchenPage />} />
                <Route path="/products/handyman-app" element={<HandymanServicePage />} />

                <Route path="/products/salon-booking" element={<SalonBookingPage />} />

    <Route path="/products/ai-chatbot" element={<CustomerSupportBotPage/>} />

    <Route path="/products/property-listing" element={<PropertyListingPortalPage/>} />

    <Route path="/products/real-estate-crm" element={<RealEstatePage/>} />
                <Route path="/products/ai-chatbot" element={<CustomerSupportBotPage />} />
                <Route path="/products/multi-vendor-ecommerce" element={<MultiVendorMarketplacePage />} />
                <Route path="/products/b2b-wholesale" element={<B2BWholesalePage />} />
                <Route path="/products/ai-content-generator" element={<AiContentGeneratorPage />} />
                <Route path="/products/telemedicine-app" element={<TelemedicineAppPage />} />
                <Route path="/products/pharmacy-delivery" element={<PharmacyDeliveryPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;

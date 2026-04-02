import React from "react";
import { Route } from "react-router-dom";
import ProductsShowcase from "../pages/products/ProductsShowcase";
import ProductDetailsPlaceholder from "../pages/products/ProductDetailsPlaceholder";

import TaxiBookingUber from "../pages/products/transport-app-solutions/TaxiBookingUber";
import TaxiBiddingApp from "../pages/products/transport-app-solutions/TaxiBiddingApp";
import BikeRidingApp from "../pages/products/transport-app-solutions/BikeRidingApp";
import CarPoolingApp from "../pages/products/transport-app-solutions/CarPoolingApp";
import CarRental from "../pages/products/transport-app-solutions/CarRental";


import FoodDeliveryApp from "../pages/products/delivery-app-solutions/FoodDeliveryApp";
import GroceryDeliveryApp from "../pages/products/delivery-app-solutions/GroceryDeliveryApp";
import MedicineDeliveryApp from "../pages/products/delivery-app-solutions/MedicineDeliveryApp";
import DailyDeliveryApp from "../pages/products/delivery-app-solutions/DailyDeliveryApp";
import LiquorDeliveryApp from "../pages/products/delivery-app-solutions/LiquorDeliveryApp";
import CannabisDeliveryApp from "../pages/products/delivery-app-solutions/Cannabis-Delivery-App";
import MultiServiceDeliveryApp from "../pages/products/delivery-app-solutions/MultiServiceDeliveryApp";

import TutorBookingApp from "../pages/products/Ondemand-homeservice/TutorBookingApp";
import Handyman from "../pages/products/Ondemand-homeservice/Handyman_service";
import HomeCleaning from "../pages/products/Ondemand-homeservice/HomeCleaning";
import DogWalking from "../pages/products/Ondemand-homeservice/DogWalking";
import PestControl from "../pages/products/Ondemand-homeservice/PestControl";
import SalonBeauty from "../pages/products/Ondemand-homeservice/SalonBeauty";
import MassageTherapy from "../pages/products/Ondemand-homeservice/MassageTherapy";
import TowTruck from "../pages/products/Ondemand-homeservice/TowTruck";
import LaundryService from "../pages/products/Ondemand-homeservice/LaundryService";
import SnowRemoval from '../pages/products/Ondemand-homeservice/SnowRemoval';
import SalonLanding from "../pages/products/Salon-Beauty-Landing/SalonLanding";
import EducationLanding from "../pages/products/Education-Landing/EducationLanding";
import GroceryLanding from "../pages/products/Grocery-Landing/GroceryLanding";
import OTTLanding from "../pages/products/OTT-Landing/OTTLanding";
import TaxiLanding from "../pages/products/Taxi-Landing/TaxiLanding";
import MatrimonyLanding from "../pages/products/Matrimony-Dating-Landing/MatrimonyLanding";
import TourTravelLanding from "../pages/products/TourTravel-Landing/TourTravelLanding";
import RealEstateLanding from "../pages/products/RealEstate-Landing/RealEstateLanding";
import TourBookingAppPage from "../pages/products/TourTravel-Booking/TourBookingAppPage";
import TravelAgencyManagementPage from "../pages/products/TravelAgency-Management/TravelAgencyManagementPage";
import RealEstatePage from "../pages/products/real-estate/RealEstatePage";
import PropertyListingPortalPage from "../pages/products/property-listing-portal/PropertyListingPortalPage";
import CryptoExchangeLanding from "../pages/products/Crypto-Exchange/CryptoExchangeLanding";
import POSBillingLanding from "../pages/products/POS-Billing/POSBillingLanding";
import CryptoSpotExchangePage from "../pages/products/Crypto-Spot-Exchange/CryptoSpotExchangePage";
import CryptoDerivativesPage from "../pages/products/Crypto-Derivatives/CryptoDerivativesPage";
import RestaurantPOSPage from "../pages/products/Restaurant-POS/RestaurantPOSPage";
import RetailPOSPage from "../pages/products/Retail-POS/RetailPOSPage";
import TransportLogisticsLanding from "../pages/products/Transport-Logistics/TransportLogisticsLanding";
import VideoConferenceLanding from "../pages/products/Video-Conference/VideoConferenceLanding";
import ZoomClonePage from "../pages/products/Zoom-Clone/ZoomClonePage";
import WebinarEnginePage from "../pages/products/Webinar-Engine/WebinarEnginePage";

import DatingApp from "../pages/products/Emerging-Social App/DatingApp";
import AppointmentBooking from "../pages/products/Emerging-Social App/AppointmentBooking";
import TikTokClonePage from "../pages/products/Social-App-Solutions/Video-App";
import ErpPage from "../pages/products/Enterprise/ErpPage";
import LmsPage from "../pages/products/Enterprise/LmsPage";
import HRM from "../pages/products/Enterprise/HRM";
import CRM from "../pages/products/Enterprise/CRM";
import DoctorHealthPage from "../pages/products/Doctor-Health-App/DoctorHealthPage";
import Ecommerce from "../pages/products/ECommerce-App/Ecommerce";
import FoodDeliveryPage from "../pages/products/Food-Delivery-App/FoodDeliveryPage";
import HotelManagement from "../pages/products/Hotel-Management/HotelManagement";
import StreamingBackendPage from "../pages/products/Streaming-Backend/StreamingBackendPage";
import SocialMediaPage from "../pages/products/Social-Media-App/SocialMediaPage";
import HomeService from "../pages/products/Home-sevices/HomeService";
import MatrimonySolutionPage from '../pages/products/Matrimony-Solution/MatrimonySolutionPage';
import JobPortalPage from "../pages/products/Job-Portal/JobPortalPage";
import Busiuness from "../pages/products/Busiuness-Directory/Busiuness";
import SaasPage from "../pages/products/SaasProduct/SaasPage";
import AccountErpPage from "../pages/products/Account-Erp/AccountErpPage";
import NewsPage from "../pages/products/News/NewsPage";
import BFSIFinance from "../pages/products/BFSI-Finance/BFSIFinance";
import NewsMAnagement from "../pages/products/News-Management/NewsMAnagement";
import HSMHotel from "../pages/products/HMS-Hotel/HSMHotel";
import HMSLanding from "../pages/products/HMS-Hospital-Mgmt/HMSLanding";
import EMSLanding from "../pages/products/EMS-Event-Mgmt/EMSLanding";
import RMSLanding from "../pages/products/RMS-Restaurant-Mgmt/RMSLanding";
import SMSLanding from "../pages/products/SMS-School-Mgmt/SMSLanding";
import PMSLanding from "../pages/products/PMS-Pharmacy-Mgmt/PMSLanding";

import CorporateEventsPage from "../pages/products/EMS-Event-Mgmt/CorporateEvents/CorporateEventsPage";
import FestivalsConcertsPage from "../pages/products/EMS-Event-Mgmt/FestivalsConcerts/FestivalsConcertsPage";
import FineDiningCasualPage from "../pages/products/RMS-Restaurant-Mgmt/FineDiningCasual/FineDiningCasualPage";
import QsrFastCasualPage from "../pages/products/RMS-Restaurant-Mgmt/QsrFastCasual/QsrFastCasualPage";
import IMSPager from "../pages/products/IMS/IMSPager";

import InilabsPage from "../pages/products/SMS-School-Mgmt/Inilabs/InilabsPage";
import GlobalPage from "../pages/products/SMS-School-Mgmt/Global/GlobalPage";
import PharmacyNextAIPage from "../pages/products/PMS-Pharmacy-Mgmt/PharmacyNextAI/PharmacyNextAIPage";
import KiviCarePage from "../pages/products/PMS-Pharmacy-Mgmt/KiviCare/KiviCarePage";

import SmartHMSPage from "../pages/products/HMS-Hospital-Mgmt/SmartHMS/SmartHMSPage";
import BdTaskHMSPage from "../pages/products/HMS-Hospital-Mgmt/BdTaskHMS/BdTaskHMSPage";

import AcadifyEduERPPage from "../pages/products/Enterprise/AcadifyEduERP/AcadifyEduERPPage";
import MultistoreERPPage from "../pages/products/Enterprise/MultistoreERP/MultistoreERPPage";
import MentorLMSPage from "../pages/products/Enterprise/MentorLMS/MentorLMSPage";
import RocketLMSPage from "../pages/products/Enterprise/RocketLMS/RocketLMSPage";
export const ProductRoutes = [
    <Route key="products-showcase" path="products" element={<ProductsShowcase />} />,
    <Route key="products-details" path="products/:id" element={<ProductDetailsPlaceholder />} />,
    <Route key="taxi-uber" path="products/transport/uber-clone" element={<TaxiBookingUber />} />,

    <Route key="taxi-bidding" path="products/transport/indrive-clone" element={<TaxiBiddingApp />} />,
    <Route key="bike-riding" path="products/transport/rapido-clone" element={<BikeRidingApp />} />,
    <Route key="car-pooling" path="products/transport/blablacar-clone" element={<CarPoolingApp />} />,
    <Route key="car-rental" path="products/transport/car-rental" element={<CarRental />} />,

    <Route key="food-delivery" path="products/delivery/food-delivery" element={<FoodDeliveryApp />} />,
    <Route key="grocery-delivery" path="products/delivery/grocery-delivery" element={<GroceryDeliveryApp />} />,
    <Route key="medicine-delivery" path="products/delivery/medicine-delivery" element={<MedicineDeliveryApp />} />,
    <Route key="daily-delivery" path="products/delivery/daily-delivery" element={<DailyDeliveryApp />} />,
    <Route key="liquor-delivery" path="products/delivery/liquor-delivery" element={<LiquorDeliveryApp />} />,
    <Route key="cannabis-delivery" path="products/delivery/cannabis-delivery" element={<CannabisDeliveryApp />} />,
    <Route key="multi-delivery" path="products/delivery/multi-delivery" element={<MultiServiceDeliveryApp />} />,

    <Route key="tutor-booking" path="products/home-service/tutor" element={<TutorBookingApp />} />,
    <Route key="home-cleaning" path="products/home-service/cleaning" element={<HomeCleaning />} />,
    <Route key="handyman" path="products/home-service/handyman" element={<Handyman />} />,
    <Route key="dog-walking" path="products/home-service/dog-walking" element={<DogWalking />} />,
    <Route key="pest-control" path="products/home-service/pest-control" element={<PestControl />} />,
    <Route key="salon-beauty" path="products/home-service/salon" element={<SalonBeauty />} />,
    <Route key="salon-landing" path="products/our/salon-beauty" element={<SalonLanding />} />,
    <Route key="education-landing" path="products/our/education" element={<EducationLanding />} />,
    <Route key="grocery-landing" path="products/our/grocery-delivery" element={<GroceryLanding />} />,
    <Route key="ott-landing" path="products/our/ott-streaming" element={<OTTLanding />} />,

    <Route key="massage-therapy" path="products/home-service/massage" element={<MassageTherapy />} />,
    <Route key="tow-truck" path="products/home-service/tow-truck" element={<TowTruck />} />,
    <Route key="laundry-service" path="products/home-service/laundry" element={<LaundryService />} />,
    <Route key="snow-removal" path="products/home-service/snow-removal" element={<SnowRemoval />} />,

    <Route key="dating-app" path="products/social/dating-app" element={<DatingApp />} />,
    <Route key="appointment-booking" path="products/social/appointment-booking" element={<AppointmentBooking />} />,
    <Route key="video-app" path="products/social/video-app" element={<TikTokClonePage />} />,
    <Route key="doctor-health" path="/products/our/healthcare" element={<DoctorHealthPage />} />,
    <Route key="erp" path="products/enterprise/erp" element={<ErpPage />} />,
    <Route key="lms" path="products/enterprise/lms" element={<LmsPage />} />,
    <Route key="Hrm" path="/products/enterprise/hrm" element={<HRM />} />,
    <Route Key="Crm" path="/products/enterprise/crm" element={<CRM />} />,
    <Route key="hms-hospital" path="/products/enterprise/hms-hospital" element={<HMSLanding />} />,
    <Route key="Ecommerce" path="/products/our/ecommerce" element={<Ecommerce />} />,
    <Route key="Food-delivery-app" path="/products/our/food-delivery" element={<FoodDeliveryPage />} />,
    <Route key="hotel-management" path="/products/our/hotel-booking" element={<HotelManagement />} />,
    <Route key="taxi-app" path="/products/our/taxi-app" element={<TaxiLanding />} />,
    <Route key="streaming-solution" path="products/our/streaming-solution" element={<StreamingBackendPage />} />,
    <Route key="social-media" path="/products/our/social-media" element={<SocialMediaPage />} />,
    <Route key="home-service" path="/products/our/home-service" element={<HomeService />} />,
    <Route key="matrimony-dating" path="/products/our/matrimony-dating" element={<MatrimonyLanding />} />,
    <Route key="matrimony-solution" path="/products/social/matrimony-solution" element={<MatrimonySolutionPage />} />,
    <Route key="job-portal" path="/products/prime/job-portals" element={<JobPortalPage />} />,
    <Route key="busiuness-directory" path="/products/prime/business-directory" element={<Busiuness />} />,
    <Route key="tour-travel" path="/products/prime/tour-travel" element={<TourTravelLanding />} />,
    <Route key="real-estate-landing" path="/products/prime/real-estate" element={<RealEstateLanding />} />,
    <Route key="tour-booking-app" path="/products/prime/tour-travel-booking-app" element={<TourBookingAppPage />} />,
    <Route key="travel-agency-mgmt" path="/products/prime/travel-agency-management" element={<TravelAgencyManagementPage />} />,
    <Route key="real-estate-solution" path="/products/prime/real-estate-solution" element={<RealEstatePage />} />,
    <Route key="property-listing-portal" path="/products/prime/property-listing-portal" element={<PropertyListingPortalPage />} />,
    <Route key="saas-products" path="/products/prime/saas" element={<SaasPage />} />,
    <Route key="account-erp" path="/products/prime/account-erp" element={<AccountErpPage />} />,

    <Route key="crypto-exchange" path="/products/prime/crypto-exchange" element={<CryptoExchangeLanding />} />,
    <Route key="pos-billing" path="/products/prime/pos-billing" element={<POSBillingLanding />} />,
    <Route key="crypto-spot" path="/products/crypto-spot-exchange" element={<CryptoSpotExchangePage />} />,
    <Route key="crypto-deriv" path="/products/crypto-derivatives" element={<CryptoDerivativesPage />} />,
    <Route key="resto-pos" path="/products/restaurant-pos" element={<RestaurantPOSPage />} />,
    <Route key="retail-pos" path="/products/retail-pos" element={<RetailPOSPage />} />,

    <Route key="ems" path="/products/enterprise/ems" element={<EMSLanding />} />,
    <Route key="rms" path="/products/enterprise/rms" element={<RMSLanding />} />,

    <Route key="ems-corporate-events" path="/products/enterprise/ems/corporate-events" element={<CorporateEventsPage />} />,
    <Route key="ems-festivals-concerts" path="/products/enterprise/ems/festivals-concerts" element={<FestivalsConcertsPage />} />,
    <Route key="rms-fine-dining" path="/products/enterprise/rms/fine-dining" element={<FineDiningCasualPage />} />,
    <Route key="rms-qsr-fast-casual" path="/products/enterprise/rms/qsr-fast-casual" element={<QsrFastCasualPage />} />,

    <Route key="sms-inilabs" path="/products/enterprise/sms/inilabs" element={<InilabsPage />} />,
    <Route key="sms-global" path="/products/enterprise/sms/global" element={<GlobalPage />} />,
    <Route key="pms-pharmacynext-ai" path="/products/enterprise/pms/pharmacynext-ai" element={<PharmacyNextAIPage />} />,
    <Route key="pms-kivicare" path="/products/enterprise/pms/kivicare" element={<KiviCarePage />} />,

    <Route key="hms-smart" path="/products/enterprise/hms-hospital/smart-hms" element={<SmartHMSPage />} />,
    <Route key="hms-bdtask" path="/products/enterprise/hms-hospital/bdtask-hms" element={<BdTaskHMSPage />} />,

    <Route key="erp-acadify" path="/products/enterprise/erp/acadifyedu-erp" element={<AcadifyEduERPPage />} />,
    <Route key="erp-multistore" path="/products/enterprise/erp/multistore-erp" element={<MultistoreERPPage />} />,
    <Route key="lms-mentor" path="/products/enterprise/lms/mentor-lms" element={<MentorLMSPage />} />,
    <Route key="lms-rocket" path="/products/enterprise/lms/rocket-lms" element={<RocketLMSPage />} />,


    <Route key="news" path="/products/prime/news-magazine" element={<NewsPage />} />,
    <Route key="bfsi-finance" path="/products/prime/bfsi-finance" element={<BFSIFinance />} />,


    <Route key="transport-logistics" path="/products/prime/transport-logistics" element={<TransportLogisticsLanding />} />,
    <Route key="video-conference" path="/products/prime/video-conference" element={<VideoConferenceLanding />} />,
    <Route key="zoom-clone" path="/products/prime/zoom-clone" element={<ZoomClonePage />} />,
    <Route key="webinar-engine" path="/products/prime/webinar-engine" element={<WebinarEnginePage />} />,
    <Route key="news-management" path="/products/enterprise/nms" element={<NewsMAnagement />} />,
    <Route key="hotel-management-system" path="/products/enterprise/hms-hotel" element={<HSMHotel />} />,
<Route key="ims" path="/products/enterprise/ims" element={<IMSPager />} />,
<Route key="sms" path="/products/enterprise/sms" element={<SMSLanding />} />,
<Route key="pms" path="/products/enterprise/pms" element={<PMSLanding />} />,

];

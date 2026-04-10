import React, { lazy } from "react";
import { Route } from "react-router-dom";

const ProductsShowcase = lazy(() => import("../pages/products/ProductsShowcase"));
const ProductDetailsPlaceholder = lazy(() => import("../pages/products/ProductDetailsPlaceholder"));

const OurProducts = lazy(() => import("../pages/Footer/Products/OurProducts"));
const PrimeProducts = lazy(() => import("../pages/Footer/Products/PrimeProducts"));
const EnterpriseProducts = lazy(() => import("../pages/Footer/Products/EnterpriseProducts"));
const GamingProducts = lazy(() => import("../pages/Footer/Products/GamingProducts"));
const OthersProducts = lazy(() => import("../pages/Footer/Products/OthersProducts"));

const TaxiBookingUber = lazy(() => import("../pages/products/transport-app-solutions/TaxiBookingUber"));
const TaxiBiddingApp = lazy(() => import("../pages/products/transport-app-solutions/TaxiBiddingApp"));
const BikeRidingApp = lazy(() => import("../pages/products/transport-app-solutions/BikeRidingApp"));
const CarPoolingApp = lazy(() => import("../pages/products/transport-app-solutions/CarPoolingApp"));
const CarRental = lazy(() => import("../pages/products/transport-app-solutions/CarRental"));

const FoodDeliveryApp = lazy(() => import("../pages/products/delivery-app-solutions/FoodDeliveryApp"));
const GroceryDeliveryApp = lazy(() => import("../pages/products/delivery-app-solutions/GroceryDeliveryApp"));
const MedicineDeliveryApp = lazy(() => import("../pages/products/delivery-app-solutions/MedicineDeliveryApp"));
const DailyDeliveryApp = lazy(() => import("../pages/products/delivery-app-solutions/DailyDeliveryApp"));
const LiquorDeliveryApp = lazy(() => import("../pages/products/delivery-app-solutions/LiquorDeliveryApp"));
const CannabisDeliveryApp = lazy(() => import("../pages/products/delivery-app-solutions/Cannabis-Delivery-App"));
const MultiServiceDeliveryApp = lazy(() => import("../pages/products/delivery-app-solutions/MultiServiceDeliveryApp"));

const TutorBookingApp = lazy(() => import("../pages/products/Ondemand-homeservice/TutorBookingApp"));
const Handyman = lazy(() => import("../pages/products/Ondemand-homeservice/Handyman_service"));
const HomeCleaning = lazy(() => import("../pages/products/Ondemand-homeservice/HomeCleaning"));
const DogWalking = lazy(() => import("../pages/products/Ondemand-homeservice/DogWalking"));
const PestControl = lazy(() => import("../pages/products/Ondemand-homeservice/PestControl"));
const SalonBeauty = lazy(() => import("../pages/products/Ondemand-homeservice/SalonBeauty"));
const MassageTherapy = lazy(() => import("../pages/products/Ondemand-homeservice/MassageTherapy"));
const TowTruck = lazy(() => import("../pages/products/Ondemand-homeservice/TowTruck"));
const LaundryService = lazy(() => import("../pages/products/Ondemand-homeservice/LaundryService"));
const SnowRemoval = lazy(() => import('../pages/products/Ondemand-homeservice/SnowRemoval'));
const SalonLanding = lazy(() => import("../pages/products/Salon-Beauty-Landing/SalonLanding"));
const EducationLanding = lazy(() => import("../pages/products/Education-Landing/EducationLanding"));
const GroceryLanding = lazy(() => import("../pages/products/Grocery-Landing/GroceryLanding"));
const OTTLanding = lazy(() => import("../pages/products/OTT-Landing/OTTLanding"));
const TaxiLanding = lazy(() => import("../pages/products/Taxi-Landing/TaxiLanding"));
const MatrimonyLanding = lazy(() => import("../pages/products/Matrimony-Dating-Landing/MatrimonyLanding"));
const TourTravelLanding = lazy(() => import("../pages/products/TourTravel-Landing/TourTravelLanding"));
const RealEstateLanding = lazy(() => import("../pages/products/RealEstate-Landing/RealEstateLanding"));
const TourBookingAppPage = lazy(() => import("../pages/products/TourTravel-Booking/TourBookingAppPage"));
const TravelAgencyManagementPage = lazy(() => import("../pages/products/TravelAgency-Management/TravelAgencyManagementPage"));
const RealEstatePage = lazy(() => import("../pages/products/real-estate/RealEstatePage"));
const PropertyListingPortalPage = lazy(() => import("../pages/products/property-listing-portal/PropertyListingPortalPage"));
const CryptoExchangeLanding = lazy(() => import("../pages/products/Crypto-Exchange/CryptoExchangeLanding"));
const POSBillingLanding = lazy(() => import("../pages/products/POS-Billing/POSBillingLanding"));
const CryptoSpotExchangePage = lazy(() => import("../pages/products/Crypto-Spot-Exchange/CryptoSpotExchangePage"));
const CryptoDerivativesPage = lazy(() => import("../pages/products/Crypto-Derivatives/CryptoDerivativesPage"));
const RestaurantPOSPage = lazy(() => import("../pages/products/Restaurant-POS/RestaurantPOSPage"));
const RetailPOSPage = lazy(() => import("../pages/products/Retail-POS/RetailPOSPage"));
const TransportLogisticsLanding = lazy(() => import("../pages/products/Transport-Logistics/TransportLogisticsLanding"));
const VideoConferenceLanding = lazy(() => import("../pages/products/Video-Conference/VideoConferenceLanding"));
const ZoomClonePage = lazy(() => import("../pages/products/Zoom-Clone/ZoomClonePage"));
const WebinarEnginePage = lazy(() => import("../pages/products/Webinar-Engine/WebinarEnginePage"));

const DatingApp = lazy(() => import("../pages/products/Emerging-Social App/DatingApp"));
const AppointmentBooking = lazy(() => import("../pages/products/Emerging-Social App/AppointmentBooking"));
const TikTokClonePage = lazy(() => import("../pages/products/Social-App-Solutions/Video-App"));
const ErpPage = lazy(() => import("../pages/products/Enterprise/ErpPage"));
const LmsPage = lazy(() => import("../pages/products/Enterprise/LmsPage"));
const HRM = lazy(() => import("../pages/products/Enterprise/HRM"));
const CRM = lazy(() => import("../pages/products/Enterprise/CRM"));
const DoctorHealthPage = lazy(() => import("../pages/products/Doctor-Health-App/DoctorHealthPage"));
const Ecommerce = lazy(() => import("../pages/products/ECommerce-App/Ecommerce"));
const FoodDeliveryPage = lazy(() => import("../pages/products/Food-Delivery-App/FoodDeliveryPage"));
const HotelManagement = lazy(() => import("../pages/products/Hotel-Management/HotelManagement"));
const StreamingBackendPage = lazy(() => import("../pages/products/Streaming-Backend/StreamingBackendPage"));
const SocialMediaPage = lazy(() => import("../pages/products/Social-Media-App/SocialMediaPage"));
const HomeService = lazy(() => import("../pages/products/Home-sevices/HomeService"));
const MatrimonySolutionPage = lazy(() => import('../pages/products/Matrimony-Solution/MatrimonySolutionPage'));
const JobPortalPage = lazy(() => import("../pages/products/Job-Portal/JobPortalPage"));
const Busiuness = lazy(() => import("../pages/products/Busiuness-Directory/Busiuness"));
const SaasPage = lazy(() => import("../pages/products/SaasProduct/SaasPage"));
const AccountErpPage = lazy(() => import("../pages/products/Account-Erp/AccountErpPage"));
const NewsPage = lazy(() => import("../pages/products/News/NewsPage"));
const BFSIFinance = lazy(() => import("../pages/products/BFSI-Finance/BFSIFinance"));
const NewsMAnagement = lazy(() => import("../pages/products/News-Management/NewsMAnagement"));
const HSMHotel = lazy(() => import("../pages/products/HMS-Hotel/HSMHotel"));
const HMSLanding = lazy(() => import("../pages/products/HMS-Hospital-Mgmt/HMSLanding"));
const EMSLanding = lazy(() => import("../pages/products/EMS-Event-Mgmt/EMSLanding"));
const RMSLanding = lazy(() => import("../pages/products/RMS-Restaurant-Mgmt/RMSLanding"));
const SMSLanding = lazy(() => import("../pages/products/SMS-School-Mgmt/SMSLanding"));
const PMSLanding = lazy(() => import("../pages/products/PMS-Pharmacy-Mgmt/PMSLanding"));

const EventRightProPage = lazy(() => import("../pages/products/EMS-Event-Mgmt/EventRightPro/EventRightProPage"));
const EventNextPage = lazy(() => import("../pages/products/EMS-Event-Mgmt/EventNext/EventNextPage"));
const RestulatorPage = lazy(() => import("../pages/products/RMS-Restaurant-Mgmt/Restulator/RestulatorPage"));
const QsrFastCasualPage = lazy(() => import("../pages/products/RMS-Restaurant-Mgmt/QsrFastCasual/QsrFastCasualPage"));
const IMSPager = lazy(() => import("../pages/products/IMS/IMSPager"));

const InilabsPage = lazy(() => import("../pages/products/SMS-School-Mgmt/Inilabs/InilabsPage"));
const GlobalPage = lazy(() => import("../pages/products/SMS-School-Mgmt/Global/GlobalPage"));
const PharmacyNextAIPage = lazy(() => import("../pages/products/PMS-Pharmacy-Mgmt/PharmacyNextAI/PharmacyNextAIPage"));
const KiviCarePage = lazy(() => import("../pages/products/PMS-Pharmacy-Mgmt/KiviCare/KiviCarePage"));

const SmartHMSPage = lazy(() => import("../pages/products/HMS-Hospital-Mgmt/SmartHMS/SmartHMSPage"));
const BdTaskHMSPage = lazy(() => import("../pages/products/HMS-Hospital-Mgmt/BdTaskHMS/BdTaskHMSPage"));

const AcadifyEduERPPage = lazy(() => import("../pages/products/Enterprise/AcadifyEduERP/AcadifyEduERPPage"));
const MultistoreERPPage = lazy(() => import("../pages/products/Enterprise/MultistoreERP/MultistoreERPPage"));
const MentorLMSPage = lazy(() => import("../pages/products/Enterprise/MentorLMS/MentorLMSPage"));
const RocketLMSPage = lazy(() => import("../pages/products/Enterprise/RocketLMS/RocketLMSPage"));
const CRMProPage = lazy(() => import("../pages/products/Enterprise/CRM/CRMPro/CRMProPage"));
const OnestCRMPage = lazy(() => import("../pages/products/Enterprise/CRM/OnestCRM/OnestCRMPage"));

export const ProductRoutes = () => (
    <>
        <Route key="products-showcase" path="products" element={<ProductsShowcase />} />
        <Route key="products-details" path="products/:id" element={<ProductDetailsPlaceholder />} />
        <Route key="taxi-uber" path="products/transport/uber-clone" element={<TaxiBookingUber />} />

        <Route key="taxi-bidding" path="products/transport/indrive-clone" element={<TaxiBiddingApp />} />
        <Route key="bike-riding" path="products/transport/rapido-clone" element={<BikeRidingApp />} />
        <Route key="car-pooling" path="products/transport/blablacar-clone" element={<CarPoolingApp />} />
        <Route key="car-rental" path="products/transport/car-rental" element={<CarRental />} />

        <Route key="food-delivery" path="products/delivery/food-delivery" element={<FoodDeliveryApp />} />
        <Route key="grocery-delivery" path="products/delivery/grocery-delivery" element={<GroceryDeliveryApp />} />
        <Route key="medicine-delivery" path="products/delivery/medicine-delivery" element={<MedicineDeliveryApp />} />
        <Route key="daily-delivery" path="products/delivery/daily-delivery" element={<DailyDeliveryApp />} />
        <Route key="liquor-delivery" path="products/delivery/liquor-delivery" element={<LiquorDeliveryApp />} />
        <Route key="cannabis-delivery" path="products/delivery/cannabis-delivery" element={<CannabisDeliveryApp />} />
        <Route key="multi-delivery" path="products/delivery/multi-delivery" element={<MultiServiceDeliveryApp />} />

        <Route key="tutor-booking" path="products/home-service/tutor" element={<TutorBookingApp />} />
        <Route key="home-cleaning" path="products/home-service/cleaning" element={<HomeCleaning />} />
        <Route key="handyman" path="products/home-service/handyman" element={<Handyman />} />
        <Route key="dog-walking" path="products/home-service/dog-walking" element={<DogWalking />} />
        <Route key="pest-control" path="products/home-service/pest-control" element={<PestControl />} />
        <Route key="salon-beauty" path="products/home-service/salon" element={<SalonBeauty />} />
        <Route key="salon-landing" path="products/our/salon-beauty" element={<SalonLanding />} />
        <Route key="education-landing" path="products/our/education" element={<EducationLanding />} />
        <Route key="grocery-landing" path="products/our/grocery-delivery" element={<GroceryLanding />} />
        <Route key="ott-landing" path="products/our/ott-streaming" element={<OTTLanding />} />

        <Route key="massage-therapy" path="products/home-service/massage" element={<MassageTherapy />} />
        <Route key="tow-truck" path="products/home-service/tow-truck" element={<TowTruck />} />
        <Route key="laundry-service" path="products/home-service/laundry" element={<LaundryService />} />
        <Route key="snow-removal" path="products/home-service/snow-removal" element={<SnowRemoval />} />

        <Route key="dating-app" path="products/social/dating-app" element={<DatingApp />} />
        <Route key="appointment-booking" path="products/social/appointment-booking" element={<AppointmentBooking />} />
        <Route key="video-app" path="products/social/video-app" element={<TikTokClonePage />} />
        <Route key="doctor-health" path="/products/our/healthcare" element={<DoctorHealthPage />} />
        <Route key="erp" path="products/enterprise/erp" element={<ErpPage />} />
        <Route key="lms" path="products/enterprise/lms" element={<LmsPage />} />
        <Route key="Hrm" path="/products/enterprise/hrm" element={<HRM />} />
        <Route Key="Crm" path="/products/enterprise/crm" element={<CRM />} />
        <Route key="hms-hospital" path="/products/enterprise/hms-hospital" element={<HMSLanding />} />
        <Route key="Ecommerce" path="/products/our/ecommerce" element={<Ecommerce />} />
        <Route key="Food-delivery-app" path="/products/our/food-delivery" element={<FoodDeliveryPage />} />
        <Route key="hotel-management" path="/products/our/hotel-booking" element={<HotelManagement />} />
        <Route key="taxi-app" path="/products/our/taxi-app" element={<TaxiLanding />} />
        <Route key="streaming-solution" path="products/our/streaming-solution" element={<StreamingBackendPage />} />
        <Route key="social-media" path="/products/our/social-media" element={<SocialMediaPage />} />
        <Route key="home-service" path="/products/our/home-service" element={<HomeService />} />
        <Route key="matrimony-dating" path="/products/our/matrimony-dating" element={<MatrimonyLanding />} />
        <Route key="matrimony-solution" path="/products/social/matrimony-solution" element={<MatrimonySolutionPage />} />
        <Route key="job-portal" path="/products/prime/job-portals" element={<JobPortalPage />} />
        <Route key="busiuness-directory" path="/products/prime/business-directory" element={<Busiuness />} />
        <Route key="tour-travel" path="/products/prime/tour-travel" element={<TourTravelLanding />} />
        <Route key="real-estate-landing" path="/products/prime/real-estate" element={<RealEstateLanding />} />
        <Route key="tour-booking-app" path="/products/prime/tour-travel-booking-app" element={<TourBookingAppPage />} />
        <Route key="travel-agency-mgmt" path="/products/prime/travel-agency-management" element={<TravelAgencyManagementPage />} />
        <Route key="real-estate-solution" path="/products/prime/real-estate-solution" element={<RealEstatePage />} />
        <Route key="property-listing-portal" path="/products/prime/property-listing-portal" element={<PropertyListingPortalPage />} />
        <Route key="saas-products" path="/products/prime/saas" element={<SaasPage />} />
        <Route key="account-erp" path="/products/prime/account-erp" element={<AccountErpPage />} />

        <Route key="crypto-exchange" path="/products/prime/crypto-exchange" element={<CryptoExchangeLanding />} />
        <Route key="pos-billing" path="/products/prime/pos-billing" element={<POSBillingLanding />} />
        <Route key="crypto-spot" path="/products/crypto-spot-exchange" element={<CryptoSpotExchangePage />} />
        <Route key="crypto-deriv" path="/products/crypto-derivatives" element={<CryptoDerivativesPage />} />
        <Route key="resto-pos" path="/products/restaurant-pos" element={<RestaurantPOSPage />} />
        <Route key="retail-pos" path="/products/retail-pos" element={<RetailPOSPage />} />

        <Route key="ems" path="/products/enterprise/ems" element={<EMSLanding />} />
        <Route key="rms" path="/products/enterprise/rms" element={<RMSLanding />} />

        <Route key="ems-eventright-pro" path="/products/enterprise/ems/eventright-pro" element={<EventRightProPage />} />
        <Route key="ems-event-next" path="/products/enterprise/ems/event-next" element={<EventNextPage />} />
        <Route key="rms-restulator" path="/products/enterprise/rms/restulator" element={<RestulatorPage />} />
        <Route key="rms-qsr-fast-casual" path="/products/enterprise/rms/qsr-fast-casual" element={<QsrFastCasualPage />} />

        <Route key="sms-inilabs" path="/products/enterprise/sms/inilabs" element={<InilabsPage />} />
        <Route key="sms-global" path="/products/enterprise/sms/global" element={<GlobalPage />} />
        <Route key="pms-pharmacynext-ai" path="/products/enterprise/pms/pharmacynext-ai" element={<PharmacyNextAIPage />} />
        <Route key="pms-kivicare" path="/products/enterprise/pms/kivicare" element={<KiviCarePage />} />

        <Route key="hms-smart" path="/products/enterprise/hms-hospital/smart-hms" element={<SmartHMSPage />} />
        <Route key="hms-bdtask" path="/products/enterprise/hms-hospital/bdtask-hms" element={<BdTaskHMSPage />} />

        <Route key="erp-acadify" path="/products/enterprise/erp/acadifyedu-erp" element={<AcadifyEduERPPage />} />
        <Route key="erp-multistore" path="/products/enterprise/erp/multistore-erp" element={<MultistoreERPPage />} />
        <Route key="lms-mentor" path="/products/enterprise/lms/mentor-lms" element={<MentorLMSPage />} />
        <Route key="lms-rocket" path="/products/enterprise/lms/rocket-lms" element={<RocketLMSPage />} />
        <Route key="crm-pro" path="/products/enterprise/crm/crm-pro" element={<CRMProPage />} />
        <Route key="onest-crm" path="/products/enterprise/crm/onest-crm" element={<OnestCRMPage />} />


        <Route key="news" path="/products/prime/news-magazine" element={<NewsPage />} />
        <Route key="bfsi-finance" path="/products/prime/bfsi-finance" element={<BFSIFinance />} />


        <Route key="transport-logistics" path="/products/prime/transport-logistics" element={<TransportLogisticsLanding />} />
        <Route key="video-conference" path="/products/prime/video-conference" element={<VideoConferenceLanding />} />
        <Route key="zoom-clone" path="/products/prime/zoom-clone" element={<ZoomClonePage />} />
        <Route key="webinar-engine" path="/products/prime/webinar-engine" element={<WebinarEnginePage />} />
        <Route key="news-management" path="/products/enterprise/nms" element={<NewsMAnagement />} />
        <Route key="hotel-management-system" path="/products/enterprise/hms-hotel" element={<HSMHotel />} />
        <Route key="ims" path="/products/enterprise/ims" element={<IMSPager />} />
        <Route key="sms" path="/products/enterprise/sms" element={<SMSLanding />} />
        <Route key="pms" path="/products/enterprise/pms" element={<PMSLanding />} />

        <Route key="footer-our-products" path="products/our-products" element={<OurProducts />} />
        <Route key="footer-prime-products" path="products/prime-products" element={<PrimeProducts />} />
        <Route key="footer-enterprise-products" path="products/enterprise-products" element={<EnterpriseProducts />} />
        <Route key="footer-gaming-products" path="products/gaming-products" element={<GamingProducts />} />
        <Route key="footer-others-products" path="products/others-products" element={<OthersProducts />} />
    </>
);

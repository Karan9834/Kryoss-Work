import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Application = lazy(() => import('../pages/Footer/Solutions/Application-Solutions/Application'));
const CustomSoftware = lazy(() => import('../pages/Footer/Solutions/CustomSoftware'));
const OnDemandSolutions = lazy(() => import('../pages/Footer/Solutions/OnDemandSolutions'));
const FooterIndustries = lazy(() => import('../pages/Footer/Solutions/Industries'));

// Application Solutions
const TaxiBookingApp = lazy(() => import('../pages/solutions/Application Solutions/TaxiBookingApp'));
const FoodDeliveryApp = lazy(() => import('../pages/solutions/Application Solutions/FoodDeliveryApp'));
const GroceryDeliveryApp = lazy(() => import('../pages/solutions/Application Solutions/GroceryDeliveryApp'));
const SalonBeautyApp = lazy(() => import('../pages/solutions/Application Solutions/SalonBeautyApp'));
const OttAppDevelopment = lazy(() => import('../pages/solutions/Application Solutions/OttAppDevelopment'));
const MatrimonyApp = lazy(() => import('../pages/solutions/Application Solutions/MatrimonyApp'));
const DatingAppDevelopment = lazy(() => import('../pages/solutions/Application Solutions/DatingAppDevelopment'));
const HomeServiceApp = lazy(() => import('../pages/solutions/Application Solutions/HomeServiceApp'));
const ECommerceApp = lazy(() => import('../pages/solutions/Application Solutions/ECommerceApp'));
const BusinessDirectoryApp = lazy(() => import('../pages/solutions/Application Solutions/BusinessDirectoryApp'));
const RealEstateApp = lazy(() => import('../pages/solutions/Application Solutions/RealEstateApp'));
const HotelBookingApp = lazy(() => import('../pages/solutions/Application Solutions/HotelBookingApp'));

// Custom Solutions
const HRMPage = lazy(() => import('../pages/solutions/Custom Solutions/HRM/HRMPage'));
const CustomerPage = lazy(() => import('../pages/solutions/Custom Solutions/Customer-Relationship/CustomerPage'));
const Hotel = lazy(() => import('../pages/solutions/Custom Solutions/Hotel-Management/Hotel'));
const Restaurant = lazy(() => import('../pages/solutions/Custom Solutions/Restaurant-Management/Restaurant'));
const Enterprise = lazy(() => import('../pages/solutions/Custom Solutions/Enterprise-Management/Enterprise'));
const HospitalManagement = lazy(() => import('../pages/solutions/Custom Solutions/Hospital-Management/HospitalManagement'));
const School = lazy(() => import('../pages/solutions/Custom Solutions/School-Management/School'));
const Learning = lazy(() => import('../pages/solutions/Custom Solutions/Learning-Management/Learning'));
const PharmacyManagement = lazy(() => import('../pages/solutions/Custom Solutions/PharmacyManagement'));
const CryptoExchangeApp = lazy(() => import('../pages/solutions/Custom Solutions/CryptoExchangeApp'));
const JobPortal = lazy(() => import('../pages/solutions/Custom Solutions/Job-Portal/JobPortal'));

// On Demand Solutions
const MechanicsApp = lazy(() => import('../pages/solutions/On Demand Solutions/MechanicsApp'));
const LaundryApp = lazy(() => import('../pages/solutions/On Demand Solutions/LaundryApp'));
const CarRentalApp = lazy(() => import('../pages/solutions/On Demand Solutions/CarRentalApp'));
const VideoConfApp = lazy(() => import('../pages/solutions/On Demand Solutions/VideoConfApp'));
const MedicineDeliveryApp = lazy(() => import('../pages/solutions/On Demand Solutions/MedicineDeliveryApp'));
const ShortVideoApp = lazy(() => import('../pages/solutions/On Demand Solutions/ShortVideoApp'));
const EWalletApp = lazy(() => import('../pages/solutions/On Demand Solutions/EWalletApp'));
const ClassifiedApp = lazy(() => import('../pages/solutions/On Demand Solutions/ClassifiedApp'));
const FitnessApp = lazy(() => import('../pages/solutions/On Demand Solutions/FitnessApp'));
const DoctorAppointmentApp = lazy(() => import('../pages/solutions/On Demand Solutions/DoctorAppointmentApp'));
const CourierDeliveryApp = lazy(() => import('../pages/solutions/On Demand Solutions/CourierDeliveryApp'));
const LogisticsApp = lazy(() => import('../pages/solutions/On Demand Solutions/LogisticsApp'));

// Industries
const HealthcareIndustry = lazy(() => import('../pages/solutions/Industries/Healthcare'));
const EducationIndustry = lazy(() => import('../pages/solutions/Industries/EducationIndustry'));
const EcommerceIndustry = lazy(() => import('../pages/solutions/Industries/EcommerceIndustry'));
const RealEstateIndustry = lazy(() => import('../pages/solutions/Industries/RealEstateIndustry'));
const LogisticsIndustry = lazy(() => import('../pages/solutions/Industries/LogisticsIndustry'));
const FinanceIndustry = lazy(() => import('../pages/solutions/Industries/FinanceIndustry'));
const SocialNetworkingIndustry = lazy(() => import('../pages/solutions/Industries/SocialNetworkingIndustry'));
const EntertainmentIndustry = lazy(() => import('../pages/solutions/Industries/EntertainmentIndustry'));
const NewsMediaIndustry = lazy(() => import('../pages/solutions/Industries/NewsMediaIndustry'));
const FoodRestaurantIndustry = lazy(() => import('../pages/solutions/Industries/FoodRestaurantIndustry'));
const TravelTourismIndustry = lazy(() => import('../pages/solutions/Industries/TravelTourismIndustry'));
const NewsManage = lazy(() => import('../pages/solutions/Custom Solutions/News-Managemnet/NewsManage'));

export const SolutionRoutes = () => (
    <>
        {/* Application Solutions */}
        <Route key="sol-taxi-booking" path="solutions/taxi-booking" element={<TaxiBookingApp />} />
        <Route key="sol-food-delivery" path="solutions/food-delivery" element={<FoodDeliveryApp />} />
        <Route key="sol-grocery-delivery" path="solutions/grocery-delivery" element={<GroceryDeliveryApp />} />
        <Route key="sol-salon-beauty" path="solutions/salon-beauty" element={<SalonBeautyApp />} />
        <Route key="sol-ott-app" path="solutions/ott-app" element={<OttAppDevelopment />} />
        <Route key="sol-matrimony-app" path="solutions/matrimony-app" element={<MatrimonyApp />} />
        <Route key="sol-dating-app" path="solutions/dating-app" element={<DatingAppDevelopment />} />
        <Route key="sol-home-service" path="solutions/home-service" element={<HomeServiceApp />} />
        <Route key="sol-ecommerce-app" path="solutions/ecommerce-app" element={<ECommerceApp />} />
        <Route key="sol-business-directory" path="solutions/business-directory" element={<BusinessDirectoryApp />} />
        <Route key="sol-real-estate-app" path="solutions/real-estate-app" element={<RealEstateApp />} />
        <Route key="sol-hotel-booking" path="solutions/hotel-booking" element={<HotelBookingApp />} />

        {/* Custom Solutions */}
        <Route key="sol-job-portal" path="solutions/job-portal" element={<JobPortal />} />
        <Route key="sol-hrm" path="solutions/hrm" element={<HRMPage />} />
        <Route key="sol-crm" path="solutions/crm" element={<CustomerPage />} />
        <Route key="sol-hotel-mgmt" path="solutions/hotel-mgmt" element={<Hotel />} />
        <Route key="sol-news-mgmt" path="solutions/news-mgmt" element={<NewsManage />} />
        <Route key="sol-restaurant-mgmt" path="solutions/restaurant-mgmt" element={<Restaurant />} />
        <Route key="sol-erp" path="solutions/erp" element={<Enterprise />} />
        <Route key="sol-hospital-mgmt" path="solutions/hospital-mgmt" element={<HospitalManagement />} />
        <Route key="sol-school-mgmt" path="solutions/school-mgmt" element={<School />} />
        <Route key="sol-lms" path="solutions/lms" element={<Learning />} />
        <Route key="sol-pharmacy-mgmt" path="solutions/pharmacy-mgmt" element={<PharmacyManagement />} />
        <Route key="sol-crypto-exchange" path="solutions/crypto-exchange" element={<CryptoExchangeApp />} />

        {/* On Demand Solutions */}
        <Route key="sol-mechanics-app" path="solutions/mechanics-app" element={<MechanicsApp />} />
        <Route key="sol-laundry-app" path="solutions/laundry-app" element={<LaundryApp />} />
        <Route key="sol-car-rental" path="solutions/car-rental" element={<CarRentalApp />} />
        <Route key="sol-video-conf" path="solutions/video-conf" element={<VideoConfApp />} />
        <Route key="sol-medicine-delivery" path="solutions/medicine-delivery" element={<MedicineDeliveryApp />} />
        <Route key="sol-short-video" path="solutions/short-video" element={<ShortVideoApp />} />
        <Route key="sol-ewallet-app" path="solutions/ewallet-app" element={<EWalletApp />} />
        <Route key="sol-classified-app" path="solutions/classified-app" element={<ClassifiedApp />} />
        <Route key="sol-fitness-app" path="solutions/fitness-app" element={<FitnessApp />} />
        <Route key="sol-doctor-appointment" path="solutions/doctor-appointment" element={<DoctorAppointmentApp />} />
        <Route key="sol-courier-delivery" path="solutions/courier-delivery" element={<CourierDeliveryApp />} />
        <Route key="sol-logistics-app" path="solutions/logistics-app" element={<LogisticsApp />} />

        {/* Industries */}
        <Route key="sol-healthcare" path="solutions/healthcare" element={<HealthcareIndustry />} />
        <Route key="ind-healthcare" path="industries/healthcare" element={<HealthcareIndustry />} />
        <Route key="ind-education" path="industries/education" element={<EducationIndustry />} />
        <Route key="ind-ecommerce" path="industries/ecommerce" element={<EcommerceIndustry />} />
        <Route key="ind-real-estate" path="industries/real-estate" element={<RealEstateIndustry />} />
        <Route key="ind-logistics" path="industries/logistics" element={<LogisticsIndustry />} />
        <Route key="ind-finance" path="industries/finance" element={<FinanceIndustry />} />
        <Route key="ind-social-networking" path="industries/social-networking" element={<SocialNetworkingIndustry />} />
        <Route key="ind-entertainment" path="industries/entertainment" element={<EntertainmentIndustry />} />
        <Route key="ind-news-media" path="industries/news-media" element={<NewsMediaIndustry />} />
        <Route key="ind-food-restaurant" path="industries/food-restaurant" element={<FoodRestaurantIndustry />} />
        <Route key="ind-travel-tourism" path="industries/travel-tourism" element={<TravelTourismIndustry />} />

        <Route key="footer-application-solutions" path="solutions/application-solutions" element={<Application />} />
        <Route key="footer-custom-software" path="solutions/custom-software" element={<CustomSoftware />} />
        <Route key="footer-on-demand-solutions" path="solutions/on-demand-solutions" element={<OnDemandSolutions />} />
        <Route key="footer-solutions-industries" path="solutions/industries" element={<FooterIndustries />} />
    </>
);

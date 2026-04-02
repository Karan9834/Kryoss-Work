import React from 'react';
import { Route } from 'react-router-dom';

// Application Solutions
import TaxiBookingApp from '../pages/solutions/Application Solutions/TaxiBookingApp';
import FoodDeliveryApp from '../pages/solutions/Application Solutions/FoodDeliveryApp';
import GroceryDeliveryApp from '../pages/solutions/Application Solutions/GroceryDeliveryApp';
import SalonBeautyApp from '../pages/solutions/Application Solutions/SalonBeautyApp';
import OttAppDevelopment from '../pages/solutions/Application Solutions/OttAppDevelopment';
import MatrimonyApp from '../pages/solutions/Application Solutions/MatrimonyApp';
import DatingAppDevelopment from '../pages/solutions/Application Solutions/DatingAppDevelopment';
import HomeServiceApp from '../pages/solutions/Application Solutions/HomeServiceApp';
import ECommerceApp from '../pages/solutions/Application Solutions/ECommerceApp';
import BusinessDirectoryApp from '../pages/solutions/Application Solutions/BusinessDirectoryApp';
import RealEstateApp from '../pages/solutions/Application Solutions/RealEstateApp';
import HotelBookingApp from '../pages/solutions/Application Solutions/HotelBookingApp';

// Custom Solutions
import JobPortalApp from '../pages/solutions/Custom Solutions/JobPortalApp';
import HumanResourceMgmt from '../pages/solutions/Custom Solutions/HumanResourceMgmt';
import CustomerRelationship from '../pages/solutions/Custom Solutions/CustomerRelationship';
import HotelManagement from '../pages/solutions/Custom Solutions/HotelManagement';
import NewsManagement from '../pages/solutions/Custom Solutions/NewsManagement';
import RestaurantMgmt from '../pages/solutions/Custom Solutions/RestaurantMgmt';
import EnterprisePlanningERP from '../pages/solutions/Custom Solutions/EnterprisePlanningERP';
import HospitalManagement from '../pages/solutions/Custom Solutions/HospitalManagement';
import SchoolManagement from '../pages/solutions/Custom Solutions/SchoolManagement';
import LearningManagement from '../pages/solutions/Custom Solutions/LearningManagement';
import PharmacyManagement from '../pages/solutions/Custom Solutions/PharmacyManagement';
import CryptoExchangeApp from '../pages/solutions/Custom Solutions/CryptoExchangeApp';
import JobPortal from '../pages/solutions/Custom Solutions/Job-Portal/JobPortal';

// On Demand Solutions
import MechanicsApp from '../pages/solutions/On Demand Solutions/MechanicsApp';
import LaundryApp from '../pages/solutions/On Demand Solutions/LaundryApp';
import CarRentalApp from '../pages/solutions/On Demand Solutions/CarRentalApp';
import VideoConfApp from '../pages/solutions/On Demand Solutions/VideoConfApp';
import MedicineDeliveryApp from '../pages/solutions/On Demand Solutions/MedicineDeliveryApp';
import ShortVideoApp from '../pages/solutions/On Demand Solutions/ShortVideoApp';
import EWalletApp from '../pages/solutions/On Demand Solutions/EWalletApp';
import ClassifiedApp from '../pages/solutions/On Demand Solutions/ClassifiedApp';
import FitnessApp from '../pages/solutions/On Demand Solutions/FitnessApp';
import DoctorAppointmentApp from '../pages/solutions/On Demand Solutions/DoctorAppointmentApp';
import CourierDeliveryApp from '../pages/solutions/On Demand Solutions/CourierDeliveryApp';
import LogisticsApp from '../pages/solutions/On Demand Solutions/LogisticsApp';

// Industries
import HealthcareIndustry from '../pages/solutions/Industries/Healthcare';
import EducationIndustry from '../pages/solutions/Industries/EducationIndustry';
import EcommerceIndustry from '../pages/solutions/Industries/EcommerceIndustry';
import RealEstateIndustry from '../pages/solutions/Industries/RealEstateIndustry';
import LogisticsIndustry from '../pages/solutions/Industries/LogisticsIndustry';
import FinanceIndustry from '../pages/solutions/Industries/FinanceIndustry';
import SocialNetworkingIndustry from '../pages/solutions/Industries/SocialNetworkingIndustry';
import EntertainmentIndustry from '../pages/solutions/Industries/EntertainmentIndustry';
import NewsMediaIndustry from '../pages/solutions/Industries/NewsMediaIndustry';
import FoodRestaurantIndustry from '../pages/solutions/Industries/FoodRestaurantIndustry';
import TravelTourismIndustry from '../pages/solutions/Industries/TravelTourismIndustry';

export const SolutionRoutes = [
    // Application Solutions
    <Route key="sol-taxi-booking" path="solutions/taxi-booking" element={<TaxiBookingApp />} />,
    <Route key="sol-food-delivery" path="solutions/food-delivery" element={<FoodDeliveryApp />} />,
    <Route key="sol-grocery-delivery" path="solutions/grocery-delivery" element={<GroceryDeliveryApp />} />,
    <Route key="sol-salon-beauty" path="solutions/salon-beauty" element={<SalonBeautyApp />} />,
    <Route key="sol-ott-app" path="solutions/ott-app" element={<OttAppDevelopment />} />,
    <Route key="sol-matrimony-app" path="solutions/matrimony-app" element={<MatrimonyApp />} />,
    <Route key="sol-dating-app" path="solutions/dating-app" element={<DatingAppDevelopment />} />,
    <Route key="sol-home-service" path="solutions/home-service" element={<HomeServiceApp />} />,
    <Route key="sol-ecommerce-app" path="solutions/ecommerce-app" element={<ECommerceApp />} />,
    <Route key="sol-business-directory" path="solutions/business-directory" element={<BusinessDirectoryApp />} />,
    <Route key="sol-real-estate-app" path="solutions/real-estate-app" element={<RealEstateApp />} />,
    <Route key="sol-hotel-booking" path="solutions/hotel-booking" element={<HotelBookingApp />} />,

    // Custom Solutions
    <Route key="sol-job-portal" path="solutions/job-portal" element={<JobPortal />} />,
    <Route key="sol-hrm" path="solutions/hrm" element={<HumanResourceMgmt />} />,
    <Route key="sol-crm" path="solutions/crm" element={<CustomerRelationship />} />,
    <Route key="sol-hotel-mgmt" path="solutions/hotel-mgmt" element={<HotelManagement />} />,
    <Route key="sol-news-mgmt" path="solutions/news-mgmt" element={<NewsManagement />} />,
    <Route key="sol-restaurant-mgmt" path="solutions/restaurant-mgmt" element={<RestaurantMgmt />} />,
    <Route key="sol-erp" path="solutions/erp" element={<EnterprisePlanningERP />} />,
    <Route key="sol-hospital-mgmt" path="solutions/hospital-mgmt" element={<HospitalManagement />} />,
    <Route key="sol-school-mgmt" path="solutions/school-mgmt" element={<SchoolManagement />} />,
    <Route key="sol-lms" path="solutions/lms" element={<LearningManagement />} />,
    <Route key="sol-pharmacy-mgmt" path="solutions/pharmacy-mgmt" element={<PharmacyManagement />} />,
    <Route key="sol-crypto-exchange" path="solutions/crypto-exchange" element={<CryptoExchangeApp />} />,

    // On Demand Solutions
    <Route key="sol-mechanics-app" path="solutions/mechanics-app" element={<MechanicsApp />} />,
    <Route key="sol-laundry-app" path="solutions/laundry-app" element={<LaundryApp />} />,
    <Route key="sol-car-rental" path="solutions/car-rental" element={<CarRentalApp />} />,
    <Route key="sol-video-conf" path="solutions/video-conf" element={<VideoConfApp />} />,
    <Route key="sol-medicine-delivery" path="solutions/medicine-delivery" element={<MedicineDeliveryApp />} />,
    <Route key="sol-short-video" path="solutions/short-video" element={<ShortVideoApp />} />,
    <Route key="sol-ewallet-app" path="solutions/ewallet-app" element={<EWalletApp />} />,
    <Route key="sol-classified-app" path="solutions/classified-app" element={<ClassifiedApp />} />,
    <Route key="sol-fitness-app" path="solutions/fitness-app" element={<FitnessApp />} />,
    <Route key="sol-doctor-appointment" path="solutions/doctor-appointment" element={<DoctorAppointmentApp />} />,
    <Route key="sol-courier-delivery" path="solutions/courier-delivery" element={<CourierDeliveryApp />} />,
    <Route key="sol-logistics-app" path="solutions/logistics-app" element={<LogisticsApp />} />,

    // Industries
    <Route key="sol-healthcare" path="solutions/healthcare" element={<HealthcareIndustry />} />,
    <Route key="ind-healthcare" path="industries/healthcare" element={<HealthcareIndustry />} />,
    <Route key="ind-education" path="industries/education" element={<EducationIndustry />} />,
    <Route key="ind-ecommerce" path="industries/ecommerce" element={<EcommerceIndustry />} />,
    <Route key="ind-real-estate" path="industries/real-estate" element={<RealEstateIndustry />} />,
    <Route key="ind-logistics" path="industries/logistics" element={<LogisticsIndustry />} />,
    <Route key="ind-finance" path="industries/finance" element={<FinanceIndustry />} />,
    <Route key="ind-social-networking" path="industries/social-networking" element={<SocialNetworkingIndustry />} />,
    <Route key="ind-entertainment" path="industries/entertainment" element={<EntertainmentIndustry />} />,
    <Route key="ind-news-media" path="industries/news-media" element={<NewsMediaIndustry />} />,
    <Route key="ind-food-restaurant" path="industries/food-restaurant" element={<FoodRestaurantIndustry />} />,
    <Route key="ind-travel-tourism" path="industries/travel-tourism" element={<TravelTourismIndustry />} />,
];

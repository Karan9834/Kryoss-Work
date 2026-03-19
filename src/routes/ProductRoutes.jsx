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


import DatingApp from "../pages/products/Emerging-Social App/DatingApp";
import AppointmentBooking from "../pages/products/Emerging-Social App/AppointmentBooking";
import TikTokClonePage from "../pages/products/Social-App-Solutions/Video-App";
import ErpPage from "../pages/products/Enterprise/ErpPage";
import LmsPage from "../pages/products/Enterprise/LmsPage";
import HRM from "../pages/products/Enterprise/HRM";
import CRM from "../pages/products/Enterprise/CRM";
import DoctorHealthPage from "../pages/products/Doctor-Health-App/DoctorHealthPage";

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
    <Route Key="Crm" path="/products/enterprise/crm" element={<CRM />} />
];

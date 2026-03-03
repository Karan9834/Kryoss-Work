import React from 'react';
import { Route } from 'react-router-dom';
import TaxiBookingUber from '../pages/products/transport-app-solutions/TaxiBookingUber';
import TaxiBiddingApp from '../pages/products/transport-app-solutions/TaxiBiddingApp';
import BikeRidingApp from '../pages/products/transport-app-solutions/BikeRidingApp';
import FoodDeliveryApp from '../pages/products/delivery-app-solutions/FoodDeliveryApp';
import CarPoolingApp from "../pages/products/transport-app-solutions/CarPoolingApp";
import CarRental from "../pages/products/transport-app-solutions/CarRental";
import GroceryDeliveryApp from '../pages/products/delivery-app-solutions/GroceryDeliveryApp';
import TutorBookingApp from '../pages/products/Ondemand-homeservice/TutorBookingApp';
import Handyman from "../pages/products/Ondemand-homeservice/Handyman_service";
import HomeCleaning from "../pages/products/Ondemand-homeservice/HomeCleaning";

export const ProductRoutes = [
    <Route key="taxi-uber" path="products/transport/uber-clone" element={<TaxiBookingUber />} />,
    <Route key="taxi-bidding" path="products/transport/indrive-clone" element={<TaxiBiddingApp />} />,
    <Route key="bike-riding" path="products/transport/rapido-clone" element={<BikeRidingApp />} />,
    <Route key="food-delivery" path="products/delivery/food-delivery" element={<FoodDeliveryApp />} />,
    <Route key="car-rental" path="products/transport/car-rental" element={<CarRental />} />,
    <Route key="grocery-delivery" path="products/delivery/grocery-delivery" element={<GroceryDeliveryApp />} />,
    // Add other product routes here
    <Route key="car-pooling" path="products/transport/blablacar-clone" element={<CarPoolingApp />} />,
    <Route key="tutor-booking" path="/products/home-service/tutor" element={<TutorBookingApp />} />,
];
    <Route key="car-pooling" path="products/transport/blablacar-clone" element={<CarPoolingApp />} />,
    <Route key="home-cleaning" path="products/home-service/cleaning" element={<HomeCleaning />} />,
    <Route key="handyman" path="products/home-service/handyman" element={<Handyman />} />
];

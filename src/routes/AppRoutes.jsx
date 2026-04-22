import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// ✅ Route configuration files MUST be statically imported — they return <Route> elements,
// not renderable components. React.lazy() cannot be used for them.
import { ProductRoutes } from './ProductRoutes';
import { CompanyRoutes } from './CompanyRoutes';
import { GojekRoutes } from './GojekRoutes';
import { ServiceRoutes } from './ServiceRoutes';
import { SolutionRoutes } from './SolutionRoutes';

// Lazy load pages
const Home = lazy(() => import('../pages/home/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Blog = lazy(() => import("../pages/Blog"));
const Products = lazy(() => import("../pages/Works/Products"));
const ServicesPage = lazy(() => import('../components/home/ServicePage'));
const HireDevelopersPage = lazy(() => import('../components/home/HireDevelopersPage'));
const BusinessGrowthPage = lazy(() => import('../components/home/BusinessGrowthPage'));
const UberClonePage = lazy(() => import("../pages/products/Uber-Clone/UberClonePage"));
const BikeTaxiPage = lazy(() => import("../pages/products/Bike-Taxi/BikeTaxiPage"));
const TaxiBiddingPage = lazy(() => import("../pages/products/Taxi-Bidding/TaxiBiddingPage"));
const FoodDeliveryPage = lazy(() => import('../pages/products/Food-Delivery/FoodDeliveryPage'));
const CarRentalPage = lazy(() => import("../pages/products/Car-Rental/CarRentalPage"));
const CarPoolingPage = lazy(() => import("../pages/products/Car-Pooling/CarPoolingPage"));
const CloudKitchenPage = lazy(() => import('../pages/products/Cloud-Kitchen/CloudKitchenPage'));
const HandymanServicePage = lazy(() => import('../pages/products/handyman-service/HandymanServicePage'));
const SalonBookingPage = lazy(() => import('../pages/products/Salon-booking/SalonBookingPage'));
const CustomerSupportBotPage = lazy(() => import('../pages/products/customer-support-bot/CustomerSupportBotPage'));
const PropertyListingPortalPage = lazy(() => import('../pages/products/property-listing-portal/PropertyListingPortalPage'));
const RealEstatePage = lazy(() => import('../pages/products/real-estate/RealEstatePage'));
const MultiVendorMarketplacePage = lazy(() => import("../pages/products/Multi-Vendor-Marketplace/MultiVendorMarketplacePage"));
const B2BWholesalePage = lazy(() => import("../pages/products/B2B-Wholesale/B2BWholesalePage"));
const AiContentGeneratorPage = lazy(() => import("../pages/products/AI-Content-Generator/AiContentGeneratorPage"));
const SmartNftPage = lazy(() => import("../pages/products/Smart-NFT/SmartNftPage"));
const EneftiProductsPage = lazy(() => import("../pages/products/Enefti-Products/EneftiProductsPage"));
const TelemedicineAppPage = lazy(() => import("../pages/products/Telemedicine-App/TelemedicineAppPage"));
const PharmacyDeliveryPage = lazy(() => import("../pages/products/Pharmacy-Delivery/PharmacyDeliveryPage"));
const ELearningPage = lazy(() => import('../pages/products/E-Learning/ELearningPage'));
const TutorBookingPage = lazy(() => import('../pages/products/Tutor-Booking/TutorBookingPage'));
const GroceryDeliveryPage = lazy(() => import('../pages/products/Grocery-Delivery/GroceryDeliveryPage'));
const SalesCRMPage = lazy(() => import("../pages/products/Sales-CRM/SalesCRMPage"));
const WebsitesWorks = lazy(() => import('../pages/Works/OurWorks/WebsitesWorks'));
const UiUxWorks = lazy(() => import("../pages/Works/OurWorks/UiUxWorks"));
const RealEstateWorks = lazy(() => import('../pages/Works/OurWorks/RealEstateWorks'));
const SaasWorks = lazy(() => import('../pages/Works/OurWorks/SaasWorks'));
const HotelBooking = lazy(() => import('../pages/products/Hotel-Booking/HotelBooking'));
const HotelManagement = lazy(() => import('../pages/products/Hotel-Management-System/HotelManagement'));
const SocialMedia = lazy(() => import("../pages/Works/OurWorks/SocialMedia"));
const GraphicBranding = lazy(() => import("../pages/Works/OurWorks/GraphicBranding"));
const BusinessWorks = lazy(() => import('../pages/Works/OurWorks/BusinessWorks'));
const WhatsAppPage = lazy(() => import('../pages/products/WhatsApp-Clone/WhatsAppPage'));
const NewsMagazine = lazy(() => import("../pages/Works/OurWorks/NewsMagazine"));
const FinanceWorks = lazy(() => import('../pages/Works/OurWorks/FinanceWorks'));
const OnDemandWorks = lazy(() => import('../pages/Works/OurWorks/OnDemandWorks'));
const FitnessAppsWorks = lazy(() => import('../pages/Works/OurWorks/FitnessAppsWorks'));
const LocalBusiness = lazy(() => import('../pages/products/Local-Business/LocalBusiness'));
const Services = lazy(() => import('../pages/products/Service-Platform/Services'));
const Job = lazy(() => import('../pages/products/Job-Board/Job'));
const Recruitment = lazy(() => import('../pages/products/Recruitment/Recruitment'));
const GamingWorks = lazy(() => import("../pages/Works/Gaming&Crypto/GamingWorks"));
const FantasyApps = lazy(() => import("../pages/Works/Gaming&Crypto/FantasyApps"));
const CryptoApps = lazy(() => import('../pages/Works/Crypto Works/CryptoApps'));
const ExchangeApps = lazy(() => import('../pages/Works/Crypto Works/ExchangeApps'));
const MLMAppsWorks = lazy(() => import('../pages/Works/OtherWorks/MLMAppsWorks'));
const BettingAppsWorks = lazy(() => import('../pages/Works/OtherWorks/BettingAppsWorks'));
const FlowWrite = lazy(() => import('../pages/products/FlowWriteAI/FlowWrite'));
const CasinoGames = lazy(() => import('../pages/products/Casino Games/CasinoGames'));
const FantasySports = lazy(() => import('../pages/products/Fantasy Sports/FantasySports'));
const NFTProducts = lazy(() => import('../pages/products/Others Products/NFTProducts'));
const BettingApps = lazy(() => import('../pages/products/Others Products/BettingApps'));
const MLMProducts = lazy(() => import('../pages/products/Others Products/MLMProducts'));

const HealthFitnessApps = lazy(() => import('../pages/Works/Application Works/HealthFitnessApps'));
const ShoppingApps = lazy(() => import('../pages/Works/Application Works/ShoppingApps'));
const FoodGroceryApps = lazy(() => import('../pages/Works/Application Works/FoodGroceryApps'));
const EntertainmentOTTApps = lazy(() => import('../pages/Works/Application Works/EntertainmentOTTApps'));
const TaxiLogisticsApps = lazy(() => import('../pages/Works/Application Works/TaxiLogisticsApps'));
const TourTravelApps = lazy(() => import('../pages/Works/Application Works/TourTravelApps'));
const EducationApps = lazy(() => import('../pages/Works/Application Works/EducationApps'));
const MatrimonyApps = lazy(() => import('../pages/Works/Application Works/MatrimonyApps'));
const SocialNetworkingApps = lazy(() => import('../pages/Works/Application Works/SocialNetworkingApps'));
const BeautySalonApps = lazy(() => import('../pages/Works/Application Works/BeautySalonApps'));
const TechDaily = lazy(() => import('../pages/products/TechDaily/TechDaily'));
const DailBusiness = lazy(() => import('../pages/products/DailyBusimess/DailBusiness'));
const FineTech = lazy(() => import('../pages/products/Finetech/FineTech'));
const WealthPage = lazy(() => import('../pages/products/Wealth-Management/WealthPage'));
const ApexErp = lazy(() => import('../pages/products/Apex-ERP/ApexErp'));
const Mars = lazy(() => import('../pages/products/Mars/Mars'));
const TimeStay = lazy(() => import('../pages/products/TimeStay/TimeStay'));
const Nouva = lazy(() => import('../pages/products/Nuova/Nouva'));
const Essential = lazy(() => import('../pages/products/Essential/Essential'));
const Posly = lazy(() => import('../pages/products/Posly/Posly'));
const WholeSale = lazy(() => import('../pages/products/WholeSale/WholeSale'));
const FoodBite = lazy(() => import('../pages/products/FoodBite/FoodBite'));
const Snapcart = lazy(() => import('../pages/products/Snapcart/Snapcart'));
const Omni = lazy(() => import('../pages/products/Omni/Omni'));

const BetLabPage = lazy(() => import('../pages/products/BetLab/BetLabPage'));
const BetYourDuckPage = lazy(() => import('../pages/products/BetYourDuck/BetYourDuckPage'));
const HyipInvestProPage = lazy(() => import('../pages/products/HyipInvestPro/HyipInvestProPage'));
const RevPTCPage = lazy(() => import('../pages/products/RevPTC/RevPTCPage'));

const TennPati = lazy(() => import('../pages/products/Gaming-Products/Casino-Games/TennPati'));
const Kasino = lazy(() => import('../pages/products/Gaming-Products/Casino-Games/Kasino/Kasino'));
const BetPro = lazy(() => import('../pages/products/Gaming-Products/Fantasy/BetPro/BetPro'));
const BetLab = lazy(() => import('../pages/products/Gaming-Products/Fantasy/BetLab/BetLab'));
const HRMSol = lazy(() => import('../pages/products/HRM-Sol1/HRMSol'));
const BdTask = lazy(() => import('../pages/products/BdTask/BdTask'));

// Blog Pages
const ScalableRideHailing = lazy(() => import('../pages/blogs/ScalableRideHailing'));
const MultiCountryTaxiApp = lazy(() => import("../pages/blogs/MultiCountryTaxiApp"));
const ConversionFocusedSaas = lazy(() => import("../pages/blogs/ConversionFocusedSaas"));
const AiPoweredVisualContent = lazy(() => import("../pages/blogs/AiPoweredVisualContent"));
const HighPerformanceRideBooking = lazy(() => import("../pages/blogs/HighPerformanceRideBooking"));
const IntuitiveSaasDashboard = lazy(() => import("../pages/blogs/IntuitiveSaasDashboard"));
const AiDrivenAutomation = lazy(() => import("../pages/blogs/AiDrivenAutomation"));

// Loading component
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    
                    {/* ✅ Route config functions called as functions — returns <Route> elements for React Router */}
                    {GojekRoutes()}
                    {ProductRoutes()}
                    {CompanyRoutes()}
                    {ServiceRoutes()}
                    {SolutionRoutes()}

                    {/* Blog & Services */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/scalable-ride-hailing" element={<ScalableRideHailing />} />
                    <Route path="/blog/multi-country-taxi-app" element={<MultiCountryTaxiApp />} />
                    <Route path="/blog/conversion-focused-saas" element={<ConversionFocusedSaas />} />
                    <Route path="/blog/ai-powered-visual-content" element={<AiPoweredVisualContent />} />
                    <Route path="/blog/high-performance-ride-booking" element={<HighPerformanceRideBooking />} />
                    <Route path="/blog/intuitive-saas-dashboard" element={<IntuitiveSaasDashboard />} />
                    <Route path="/blog/ai-driven-automation" element={<AiDrivenAutomation />} />

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
                    <Route path='/product/visionboard-metrics' element={<FlowWrite />} />
                    <Route path='/products/tech-daily' element={<TechDaily />} />
                    <Route path='/products/global-times' element={<DailBusiness />} />
                    <Route path='/products/fintech-analytics' element={<FineTech />} />
                    <Route path='/products/wealth-management' element={<WealthPage />} />
                    <Route path='/products/enterprise/Apex-Erp' element={<ApexErp />} />

                    <Route path="/products/gaming/casino" element={<CasinoGames />} />
                    <Route path="/products/gaming/fantasy-sports" element={<FantasySports />} />

                    {/* From main */}
                    <Route path="/products/nft-marketplace" element={<NFTProducts />} />
                    <Route path="/products/smart-nft" element={<SmartNftPage />} />
                    <Route path="/products/enefti" element={<EneftiProductsPage />} />
                    <Route path="/products/betting-platform" element={<BettingApps />} />
                    <Route path="/products/betlab" element={<BetLabPage />} />
                    <Route path="/products/bet-your-duck" element={<BetYourDuckPage />} />
                    <Route path="/products/mlm-software" element={<MLMProducts />} />
                    <Route path="/products/hyip-investpro" element={<HyipInvestProPage />} />
                    <Route path="/products/revptc" element={<RevPTCPage />} />

                    {/* From your branch */}
                    <Route path="/products/mars" element={<Mars />} />
                    <Route path="/products/TimeStay" element={<TimeStay />} />
                    <Route path='/products/nuova' element={<Nouva />} />
                    <Route path='/products/essential-plugins' element={<Essential />} />
                    <Route path='/products/posly' element={<Posly />} />
                    <Route path='/products/wholesale' element={<WholeSale />} />
                    <Route path='/products/coming-soon' element={<FoodBite />} />
                    <Route path='/products/snapcart' element={<Snapcart />} />
                    <Route path='/products/omnicart' element={<Omni />} />

                    <Route path="/products/casino/stake1" element={<TennPati />} />
                    <Route path="/products/casino/kasino" element={<Kasino />} />
                    <Route path="/products/fantasy/betpro" element={<BetPro />} />
                    <Route path="/products/fantasy/betlab" element={<BetLab />} />
                    <Route path='/products/home-service/HRM' element={<HRMSol />} />
                    <Route path="/products/bdtask" element={<BdTask />} />

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
                    <Route path="/works/health-fitness-apps" element={<HealthFitnessApps />} />
                    <Route path="/works/shopping-apps" element={<ShoppingApps />} />
                    <Route path="/works/food-grocery-apps" element={<FoodGroceryApps />} />
                    <Route path="/works/ott-apps" element={<EntertainmentOTTApps />} />
                    <Route path="/works/taxi-logistics" element={<TaxiLogisticsApps />} />
                    <Route path="/works/travel-apps" element={<TourTravelApps />} />
                    <Route path="/works/education-apps" element={<EducationApps />} />
                    <Route path="/works/matrimony-apps" element={<MatrimonyApps />} />
                    <Route path="/works/social-networking" element={<SocialNetworkingApps />} />
                    <Route path="/works/beauty-salon" element={<BeautySalonApps />} />

                    {/* 404 */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ShoppingBag, 
  CheckCircle2, 
  Users, 
  Store, 
  ShieldCheck, 
  Smartphone, 
  Layout, 
  Database, 
  Globe, 
  Layers, 
  Search, 
  Bell, 
  CreditCard, 
  Star, 
  Heart, 
  Share2, 
  Smartphone as Phone, 
  Mail, 
  MapPin, 
  Send,
  ArrowRight,
  TrendingUp,
  Clock,
  Briefcase,
  Headphones,
  Plane,
  GraduationCap,
  PlayCircle,
  Truck,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';

const ECommerceApp = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    antispam: ''
  });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const industries = [
    { name: "Healthcare", icon: Heart, desc: "Digital health solutions" },
    { name: "Travel & Tourism", icon: Plane, desc: "Booking & tour platforms" },
    { name: "Banking & Finance", icon: Building2, desc: "Fintech & wallet apps" },
    { name: "Logistics & Transport", icon: Truck, desc: "Supply chain management" },
    { name: "Media & Entertainment", icon: PlayCircle, desc: "Streaming & content apps" },
    { name: "Education & E-Learning", icon: GraduationCap, desc: "Modern learning portals" }
  ];

  const features = [
    { name: "Multiple Login & Registration", icon: Users },
    { name: "Advanced Search & Filter", icon: Search },
    { name: "Social Media Sharing", icon: Share2 },
    { name: "Push Notifications", icon: Bell },
    { name: "Order Details & Tracking", icon: Truck },
    { name: "Add To Cart / Wishlist", icon: ShoppingBag },
    { name: "Multiple Language & Currency", icon: Globe },
    { name: "Ratings & Reviews", icon: Star }
  ];

  const ecommerceApps = [
    { name: "D-Kart", desc: "Multi Vendor E-Commerce Solutions" },
    { name: "Eshoppers", desc: "Multi Vendor E-Commerce Solutions" },
    { name: "Czar Shop", desc: "Multipurpose Ecommerce Solutions" },
    { name: "Wish Bin", desc: "E-commerce Solutions" },
    { name: "Zap! Ecommerce", desc: "React Native E-Commerce Solutions" },
    { name: "M-Kart", desc: "Multi Vendor eCommerce Systems" },
    { name: "Buy Basket", desc: "Multi-Store eCommerce Solutions" },
    { name: "Galaxy Store", desc: "Flutter Multi Vendor Marketplace Solution" },
    { name: "Vyom Store", desc: "Flutter Single Ecommerce Solution" },
    { name: "E-Shoppers", desc: "Flutter Multiple Ecommerce Solution" },
    { name: "Commercefox", desc: "Flutter E-commerce Solution" },
    { name: "Classy Store", desc: "React Native App" },
    { name: "Super Store", desc: "eCommerce solutions" },
    { name: "Marketjet", desc: "Android eCommerce app" },
    { name: "Easy Express", desc: "Multi Store E-commerce" },
    { name: "First Shop", desc: "Native E-Commerce Solutions" },
    { name: "Yes Mall", desc: "Flutter Shopping Platform" },
    { name: "Street Wing", desc: "Multi-vendors eCommerce App" },
    { name: "Kit Kart", desc: "eCommerce Solutions" },
    { name: "Wonder", desc: "Flutter Marketplace E-Commerce" }
  ];

  const portfolio = [
    {
      title: "Adorawe",
      subtitle: "Fashiononline shopping mall",
      desc: "Adorawe fashion online shopping mall is stylish destination, this fashion app designed for Saudi Arabia, UAE, Kuwait, Oman, Bahrain & Qatar shopper. Adorawe is an vogue closet for women with 500+ daily new arrivals."
    },
    {
      title: "Jazp.com",
      subtitle: "It’s a Online Store",
      desc: "Jazp.com is the leading online shopping platform in UAE, Oman, Qatar and Saudi Arabia. Developed in 2018, its vast product mix includes exclusive in-house collections, sports, electronics, and global brands."
    },
    {
      title: "Cartlow",
      subtitle: "Smarter Way To Shop",
      desc: "Cartlow is the online shopping destination for buying Pre-owned, Open-box and Clearance products at the lowest price in UAE. It's a re-commerce initiative helping retailers and the environment."
    },
    {
      title: "GeekBuying",
      subtitle: "Make life smart and easy",
      desc: "Online shopping with GeekBuying is easy with a massive collection of 20,000+ products across multiple categories. Browse effortlessly and get items delivered to your doorstep."
    },
    {
      title: "China Gadgets",
      subtitle: "The Gadget App",
      desc: "Find the best reviews and craziest gadgets on the web! From the strongest magnets to the smallest drones, we test everything and provide price comparisons to get the best deals."
    }
  ];

  const testimonials = [
    {
      name: "GIRI RAMACHANDRAN",
      company: "CLOUD EQUATION PTY LTD",
      text: "We have known Kryoss for years. They work seamlessly and collaborate effectively. I trust their skills and professionalism. Kryoss always stepped up and delivered to our satisfaction."
    },
    {
      name: "JASON HOLMAN",
      company: "LETSGO GROUP LIMITED",
      text: "Extremely happy with their project delivery! They have an excellent, supportive team. Hassle-free communication and timely response made me completely satisfied."
    },
    {
      name: "ROMAN MALONE",
      company: "SUFF METAL COMPANY",
      text: "Hired Kryoss to build web-based solution for estimates and project management. Response time was impressive. Our sales teams are now more accurate and training is much easier."
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>ECommerce Software Solutions | KryossWork</title>
        <meta name="description" content="Launch your eCommerce business with our best single/multi-vendor eCommerce software. Readymade scripts for quick customization and implementation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
              Our E-Commerce Products
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              ECommerce Software - Made Easy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Now With Our Script!
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Launch your eCommerce business with our best single/multi-vendor eCommerce softwares to uplift your business. 
              Ready-to-use solutions with quick customization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 transform hover:scale-105">
                Discuss Your Project <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all border border-white/30 backdrop-blur-sm">
                View Live Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Empower Your Business With Our Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Our Readymade scripts is ready-to-use and supports quick customization and implementation. All E-Commerce products is developed intensively to satisfy your business requirements and also can be optimized effortlessly for better search results, faster page loads, higher conversions, mobile shopping, etc. Make use of our amazing ecommerce solution with outstanding features and get ready to process and streamline all your business operations from a single location.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We help you to progress in your multivendor ecommerce business with best-in-class app designs and features. Our designing and development team will provide end-to-end support for the implementation of our all E-commerce Products.
            </p>
          </div>
        </div>
      </section>

      {/* Control Panels Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-4">Complete E-commerce Ecosystem</h2>
           <p className="text-gray-600 mb-16">Three powerful interfaces to manage your business seamlessly</p>
           
           <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {/* User App */}
             <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
               <div className="bg-blue-600 p-6 text-white text-left">
                  <div className="flex justify-between items-center mb-4 text-sm opacity-80">
                    <span>9:41 AM</span>
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-bold">User Mobile App</h3>
                  <p className="text-blue-100 text-sm">Welcome back 👋</p>
               </div>
               <div className="p-6 text-left space-y-4">
                 <div className="p-3 bg-gray-100 rounded-lg flex items-center gap-3">
                   <Search className="h-4 w-4 text-gray-400" />
                   <span className="text-gray-400 text-sm italic">Search products, brands...</span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-100 p-3 rounded-xl bg-gray-50">
                      <div className="text-3xl mb-1">👟</div>
                      <div className="font-bold text-sm">Nike Air Max</div>
                      <div className="text-blue-600 font-bold">₹4,999</div>
                    </div>
                    <div className="border border-gray-100 p-3 rounded-xl bg-gray-50">
                      <div className="text-3xl mb-1">📱</div>
                      <div className="font-bold text-sm">iPhone 15</div>
                      <div className="text-blue-600 font-bold">₹79,999</div>
                    </div>
                 </div>
                 <div className="bg-orange-500 text-white p-3 rounded-xl">
                    <div className="text-sm font-bold">🎉 50% OFF — Big Sale!</div>
                    <div className="text-xs">Use code: SAVE50</div>
                 </div>
                 <div className="space-y-2 pt-2 border-t border-gray-100">
                    <div className="text-xs font-bold uppercase text-gray-500">Order Tracking</div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                       <span className="text-blue-600">Placed</span>
                       <span className="text-blue-600">Packed</span>
                       <span className="text-gray-300">Shipped</span>
                       <span className="text-gray-300">Delivered</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 w-1/2"></div>
                    </div>
                 </div>
               </div>
               <div className="p-4 border-t border-gray-100 flex justify-around items-center bg-gray-50">
                  <Layout className="h-5 w-5 text-blue-600" />
                  <Search className="h-5 w-5 text-gray-400" />
                  <Heart className="h-5 w-5 text-gray-400" />
                  <Users className="h-5 w-5 text-gray-400" />
               </div>
             </div>

             {/* Vendor Panel */}
             <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group lg:mt-6">
               <div className="bg-teal-600 p-6 text-white text-left">
                  <div className="flex justify-between items-center mb-4 text-sm opacity-80">
                    <span>9:41 AM</span>
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-bold">Vendor Panel</h3>
                  <p className="text-teal-100 text-sm">🛍️ My Store Dashboard</p>
               </div>
               <div className="p-6 text-left space-y-4">
                 <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-teal-50 p-2 rounded-lg">
                       <div className="text-teal-700 font-bold">₹38K</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase">Revenue</div>
                    </div>
                    <div className="bg-teal-50 p-2 rounded-lg">
                       <div className="text-teal-700 font-bold">214</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase">Orders</div>
                    </div>
                    <div className="bg-teal-50 p-2 rounded-lg">
                       <div className="text-teal-700 font-bold">56</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase">Products</div>
                    </div>
                 </div>
                 <div className="space-y-3">
                    <div className="text-xs font-bold uppercase text-gray-500">Product Management</div>
                    <div className="flex items-center justify-between p-2 rounded-lg border border-gray-100 bg-gray-50">
                       <div className="flex items-center gap-2">
                          <span className="text-xl">👟</span>
                          <div className="text-[10px]">
                             <div className="font-bold">Nike Air Max</div>
                             <div className="text-gray-500">Stock: 18 · ₹4,999</div>
                          </div>
                       </div>
                       <button className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">Edit</button>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg border border-gray-100 bg-gray-50">
                       <div className="flex items-center gap-2">
                          <span className="text-xl">📱</span>
                          <div className="text-[10px]">
                             <div className="font-bold">iPhone 15</div>
                             <div className="text-gray-500">Stock: 7 · ₹79,999</div>
                          </div>
                       </div>
                       <button className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">Edit</button>
                    </div>
                 </div>
                 <div className="space-y-2 pt-2 border-t border-gray-100">
                    <div className="text-xs font-bold uppercase text-gray-500">Recent Orders</div>
                    <div className="flex justify-between text-[10px] items-center">
                       <span className="font-bold">#ORD-2041</span>
                       <span className="px-1.5 py-0.5 rounded bg-green-100 text-green-700">Delivered</span>
                       <span className="font-bold">₹4,999</span>
                    </div>
                 </div>
               </div>
               <div className="p-4 border-t border-gray-100 flex justify-around items-center bg-gray-50">
                  <Layout className="h-5 w-5 text-teal-600" />
                  <ShoppingBag className="h-5 w-5 text-gray-400" />
                  <Database className="h-5 w-5 text-gray-400" />
                  <TrendingUp className="h-5 w-5 text-gray-400" />
               </div>
             </div>

             {/* Admin Panel */}
             <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group lg:mt-12">
               <div className="bg-indigo-600 p-6 text-white text-left">
                  <div className="flex justify-between items-center mb-4 text-sm opacity-80">
                    <span>9:41 AM</span>
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-bold">Admin Panel</h3>
                  <p className="text-indigo-100 text-sm">E-commerce Control Center</p>
               </div>
               <div className="p-6 text-left space-y-4">
                 <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                       <div className="text-indigo-700 font-bold">8.4K</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase">Users</div>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded-lg">
                       <div className="text-indigo-700 font-bold">560</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase">Vendors</div>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded-lg">
                       <div className="text-indigo-700 font-bold">22K</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase">Products</div>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-2 rounded-xl bg-gray-100 flex items-center gap-2">
                       <Users className="h-4 w-4 text-indigo-600" />
                       <div className="text-[9px] font-bold">Manage Users</div>
                    </div>
                    <div className="p-2 rounded-xl bg-gray-100 flex items-center gap-2">
                       <Globe className="h-4 w-4 text-indigo-600" />
                       <div className="text-[9px] font-bold">Coupons</div>
                    </div>
                    <div className="p-2 rounded-xl bg-gray-100 flex items-center gap-2">
                       <CreditCard className="h-4 w-4 text-indigo-600" />
                       <div className="text-[9px] font-bold">Payments</div>
                    </div>
                    <div className="p-2 rounded-xl border-dashed border-2 border-gray-200"></div>
                 </div>
                 <div className="bg-indigo-700 text-white p-4 rounded-xl text-center">
                    <div className="text-[10px] font-bold uppercase mb-1 opacity-70">Total Revenue</div>
                    <div className="text-xl font-bold italic tracking-wide">₹18,40,000</div>
                 </div>
               </div>
               <div className="p-4 border-t border-gray-100 flex justify-around items-center bg-gray-50">
                  <Layout className="h-5 w-5 text-indigo-600" />
                  <Users className="h-5 w-5 text-gray-400" />
                  <Layers className="h-5 w-5 text-gray-400" />
                  <TrendingUp className="h-5 w-5 text-gray-400" />
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Must-Have Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Standard and advanced features included in our e-commerce solutions</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <feature.icon className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-lg">{feature.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App List Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready-Made E-Commerce Apps</h2>
            <p className="text-gray-600">Choose from our pre-built specialized solutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ecommerceApps.map((app, index) => (
              <div key={index} className="p-6 border border-gray-100 rounded-2x l bg-gray-50 flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                   <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-1">{app.name}</h3>
                   <p className="text-xs text-gray-500">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-gray-600 text-sm max-w-3xl mx-auto">Providing custom mobile app development solutions for various industries catering to startups, agencies, and enterprises.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((ind, index) => (
                <div key={index} className="text-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm transition-transform hover:scale-110">
                      <ind.icon className="h-8 w-8 text-blue-600" />
                   </div>
                   <h3 className="font-bold text-sm text-gray-900">{ind.name}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                 <div className="text-4xl md:text-5xl font-extrabold italic">750+</div>
                 <div className="text-sm font-bold uppercase tracking-wider opacity-80">Project Delivered</div>
              </div>
              <div className="space-y-2">
                 <div className="text-4xl md:text-5xl font-extrabold italic">150+</div>
                 <div className="text-sm font-bold uppercase tracking-wider opacity-80">Development Staff</div>
              </div>
              <div className="space-y-2">
                 <div className="text-4xl md:text-5xl font-extrabold italic">10+</div>
                 <div className="text-sm font-bold uppercase tracking-wider opacity-80">Years Experience</div>
              </div>
              <div className="space-y-2">
                 <div className="text-4xl md:text-5xl font-extrabold italic">450+</div>
                 <div className="text-sm font-bold uppercase tracking-wider opacity-80">Satisfied Clients</div>
              </div>
           </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600">Showcasing our recent high-impact successful projects</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {portfolio.map((work, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-lg transition-all border-l-4 border-l-blue-600">
                <div className="w-full md:w-1/3">
                   <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300 font-bold text-2xl uppercase tracking-tighter italic">
                      {work.title.charAt(0)}
                   </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-1">{work.title}</h3>
                  <p className="text-blue-600 font-bold text-sm mb-4">{work.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 relative">
                   <div className="text-blue-600 text-5xl font-serif absolute -top-4 left-6 opacity-30">"</div>
                   <p className="text-gray-600 italic text-sm leading-relaxed mb-6 relative z-10">{t.text}</p>
                   <div className="border-t border-gray-100 pt-4">
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-xs text-blue-600 font-bold uppercase">{t.company}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              {/* Form Side */}
              <div>
                <h2 className="text-3xl font-bold mb-2">Let's Discuss Your Requirement!</h2>
                <p className="text-gray-400 mb-10">We guarantee to get back to you within a business day.</p>
                
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="Name*" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <input name="email" type="email" placeholder="E-mail*" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="phone" type="tel" placeholder="Phone No" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input name="subject" type="text" placeholder="Subject*" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <textarea name="message" placeholder="Your Message*" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                  
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                     <span className="text-sm font-bold whitespace-nowrap">Antispam: 7 + 5 = ?</span>
                     <input name="antispam" type="text" placeholder="Answer" className="w-32 bg-white/10 border border-white/20 rounded px-3 py-1 font-bold" required />
                  </div>
                  
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                     Note: We Respect Your Privacy!
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]">
                    <Send className="h-5 w-5" /> Send Message
                  </button>
                </form>
              </div>

              {/* Info Side */}
              <div className="space-y-12">
                <div>
                   <h3 className="text-2xl font-bold mb-4">Got a project in mind?</h3>
                   <p className="text-gray-400 mb-6">We would love to hear how we can bring your possibilities to reality through technology and give away 2hrs of free consulting. So call us now..</p>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <Mail className="h-5 w-5 text-blue-400" />
                         </div>
                         <span className="font-bold italic">Info@kryosssoftech.org</span>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                            <Phone className="h-5 w-5 text-teal-400" />
                         </div>
                         <span className="font-bold italic">+0124-4001495</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <h3 className="text-xl font-bold border-b border-white/10 pb-2">Our Offices</h3>
                   <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-blue-400" />
                            <span className="uppercase text-xs font-bold tracking-widest text-blue-400">India · Gurgaon</span>
                         </div>
                         <p className="text-xs text-gray-500 leading-relaxed font-bold">
                            1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India
                         </p>
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-indigo-400" />
                            <span className="uppercase text-xs font-bold tracking-widest text-indigo-400">USA · Gurgaon</span>
                         </div>
                         <p className="text-xs text-gray-500 leading-relaxed font-bold">
                            348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India
                         </p>
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-teal-400" />
                            <span className="uppercase text-xs font-bold tracking-widest text-teal-400">India · Pune</span>
                         </div>
                         <p className="text-xs text-gray-500 leading-relaxed font-bold">
                            C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune – 411020 Maharashtra, India.
                         </p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Clients */}
      <section className="py-20 border-t border-gray-100">
         <div className="container mx-auto px-4">
            <h2 className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-10">Our Trusted Clients</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="h-12 w-32 bg-gray-200 rounded-lg"></div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ECommerceApp;

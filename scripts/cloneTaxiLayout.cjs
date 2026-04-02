const fs = require('fs');
const path = require('path');

const targetFiles = [
    'SalonBeautyApp.jsx',
    'RealEstateApp.jsx',
    'OttAppDevelopment.jsx',
    'MatrimonyApp.jsx',
    'HotelBookingApp.jsx',
    'HomeServiceApp.jsx',
    'GroceryDeliveryApp.jsx',
    'FoodDeliveryApp.jsx',
    'ECommerceApp.jsx',
    'DatingAppDevelopment.jsx',
    'BusinessDirectoryApp.jsx'
];

const basePath = 'src/pages/solutions/Application Solutions/';

const configMap = {
    "SalonBeautyApp.jsx": { theme: "rose", sec: "pink", icon: "Star", titleL1: "Salon & Beauty", titleL2: "App Development", appName: "Salon & Beauty" },
    "RealEstateApp.jsx": { theme: "blue", sec: "cyan", icon: "Home", titleL1: "Real Estate", titleL2: "App Development", appName: "Real Estate" },
    "OttAppDevelopment.jsx": { theme: "red", sec: "orange", icon: "PlaySquare", titleL1: "OTT Platform", titleL2: "App Development", appName: "OTT Platform" },
    "MatrimonyApp.jsx": { theme: "rose", sec: "pink", icon: "Heart", titleL1: "Matrimony", titleL2: "App Development", appName: "Matrimony" },
    "HotelBookingApp.jsx": { theme: "cyan", sec: "teal", icon: "Building", titleL1: "Hotel Booking", titleL2: "App Development", appName: "Hotel Booking" },
    "HomeServiceApp.jsx": { theme: "orange", sec: "yellow", icon: "Wrench", titleL1: "Home Service", titleL2: "App Development", appName: "Home Service" },
    "GroceryDeliveryApp.jsx": { theme: "green", sec: "emerald", icon: "ShoppingCart", titleL1: "Grocery Delivery", titleL2: "App Development", appName: "Grocery Delivery" },
    "FoodDeliveryApp.jsx": { theme: "emerald", sec: "teal", icon: "Coffee", titleL1: "Food Delivery", titleL2: "App Development", appName: "Food Delivery" },
    "ECommerceApp.jsx": { theme: "orange", sec: "yellow", icon: "ShoppingCart", titleL1: "E-Commerce", titleL2: "App Development", appName: "E-Commerce" },
    "DatingAppDevelopment.jsx": { theme: "fuchsia", sec: "purple", icon: "Heart", titleL1: "Dating App", titleL2: "Development", appName: "Dating Apps" },
    "BusinessDirectoryApp.jsx": { theme: "violet", sec: "fuchsia", icon: "Briefcase", titleL1: "Business Directory", titleL2: "App Development", appName: "Business Directory" }
};

const taxiContent = fs.readFileSync(path.join(basePath, 'TaxiBookingApp.jsx'), 'utf8');

const returnMatch = taxiContent.match(/return \([\s\S]*?\n\};/);
if (!returnMatch) {
    console.error("Could not find return block in TaxiBookingApp.jsx");
    process.exit(1);
}

let templateRaw = returnMatch[0].replace(/\n\};$/, "");

targetFiles.forEach(file => {
    const fullPath = path.join(basePath, file);
    if (!fs.existsSync(fullPath)) return;

    let fileContent = fs.readFileSync(fullPath, 'utf8');

    let heroImg = "/SolAps/FallbackEcom.png";
    let introImg = "/SolAps/FallbackEcom.png";

    let srcMatches = [];
    const srcRe = /<img[^>]*src=["'](\/SolAps\/[^"']+)["'][^>]*>/g;
    let match;
    while ((match = srcRe.exec(fileContent)) !== null) {
        srcMatches.push(match[1]);
    }
    
    if (srcMatches.length >= 2) {
        heroImg = srcMatches[0];
        introImg = srcMatches[1];
    } else if (srcMatches.length === 1) {
        heroImg = srcMatches[0];
        introImg = srcMatches[0];
    }

    const conf = configMap[file];

    let helmetTitle = conf.titleL1 + " Development | KryossWork";
    let helmetDesc = "Build your comprehensive " + conf.appName + " solution with our top-tier development services.";
    const titleMatch = fileContent.match(/<title>(.*?)<\/title>/);
    if(titleMatch) helmetTitle = titleMatch[1];
    const descMatch = fileContent.match(/<meta[^>]*name="description"[^>]*content=["'](.*?)["']/);
    if(descMatch) helmetDesc = descMatch[1];

    let tpl = templateRaw;

    tpl = tpl.replace(/<title>.*?<\/title>/g, "<title>" + helmetTitle + "</title>");
    tpl = tpl.replace(/<meta name="description" content=".*?" \/>/g, "<meta name=\"description\" content=\"" + helmetDesc + "\" />");

    tpl = tpl.replace(/Taxi Booking <br \/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">App Development<\/span>/g, 
        conf.titleL1 + " <br /> <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-" + conf.theme + "-500 to-" + conf.sec + "-500\">" + conf.titleL2 + "</span>"
    );
    tpl = tpl.replace(/taxi dispatch solution/g, conf.appName.toLowerCase() + " solution");
    tpl = tpl.replace(/transportation business/g, "business platform");

    tpl = tpl.replace(/Features for Taxi Booking/g, "Features for " + conf.appName);
    tpl = tpl.replace(/OUR TAXI PRODUCTS/g, "OUR " + conf.appName.toUpperCase() + " PRODUCTS");

    tpl = tpl.replace(/<Car /g, "<" + conf.icon + " ");

    tpl = tpl.replace(/\/SolAps\/taxi booking app\.png/g, heroImg);
    tpl = tpl.replace(/\/SolAps\/taxiapp\.png/g, introImg);

    tpl = tpl.replace(/text-orange-/g, "text-" + conf.theme + "-");
    tpl = tpl.replace(/bg-orange-/g, "bg-" + conf.theme + "-");
    tpl = tpl.replace(/border-orange-/g, "border-" + conf.theme + "-");
    tpl = tpl.replace(/from-orange-/g, "from-" + conf.theme + "-");
    tpl = tpl.replace(/shadow-orange-/g, "shadow-" + conf.theme + "-");

    tpl = tpl.replace(/Testimonial theme="orange"/g, "Testimonial theme=\"" + conf.theme + "\"");
    tpl = tpl.replace(/ContactUs id="contact-us" theme="orange"/g, "ContactUs id=\"contact-us\" theme=\"" + conf.theme + "\"");
    tpl = tpl.replace(/bg-\[#fff3eb\]/g, "bg-slate-50");

    tpl = tpl.replace(/bg-yellow-/g, "bg-" + conf.sec + "-");
    tpl = tpl.replace(/to-yellow-/g, "to-" + conf.sec + "-");

    let newContent;
    if (fileContent.includes("return (")) {
        newContent = fileContent.replace(/return \([\s\S]*?\n\};/, tpl + "\n};");
    } else {
        return;
    }

    if (!newContent.includes(conf.icon)) {
        newContent = newContent.replace(/import \{([\s\S]*?)\} from 'lucide-react';/, (m, group) => {
            return "import {" + group + ", " + conf.icon + "} from 'lucide-react';";
        });
    }

    fs.writeFileSync(fullPath, newContent);
    console.log("Updated Layout for: " + file);
});

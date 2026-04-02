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
    'BusinessDirectoryApp.jsx',
    'TaxiBookingApp.jsx'
];

const basePath = 'src/pages/solutions/Application Solutions/';

targetFiles.forEach(file => {
    const fullPath = path.join(basePath, file);
    if (!fs.existsSync(fullPath)) return;

    const content = fs.readFileSync(fullPath, 'utf8');

    // Check useState matches first key of panelFeatures
    const useStateMatch = content.match(/const \[activeTab,\s*setActiveTab\]\s*=\s*useState\(['"](.*)['"]\)/);
    const panelFeaturesMatch = content.match(/const panelFeatures = {\s*["']([^"']+)["']:/);

    if (useStateMatch && panelFeaturesMatch) {
        if (useStateMatch[1] !== panelFeaturesMatch[1]) {
            console.log("MISMATCH in " + file + ": useState('" + useStateMatch[1] + "') vs panelFeatures['" + panelFeaturesMatch[1] + "']");
        }
    } else {
        console.log("COULD NOT VERIFY state in " + file);
    }

    // Check if Icon used exists
    // The icon injected inside the map was from configMap.
    const iconMatch = content.match(/<([A-Z][a-zA-Z]+) size=\{40\} className="text-/);
    if (iconMatch) {
        const iconName = iconMatch[1];
        // Check if imported
        if (!content.includes(" " + iconName) && !content.includes(iconName + " ")) {
            console.log("Missing Import for " + iconName + " in " + file);
        }
    }

});
console.log("Done checking components.");

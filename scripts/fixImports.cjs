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

const configMap = {
    "SalonBeautyApp.jsx": "Star",
    "RealEstateApp.jsx": "Home",
    "OttAppDevelopment.jsx": "PlaySquare",
    "MatrimonyApp.jsx": "Heart",
    "HotelBookingApp.jsx": "Building",
    "HomeServiceApp.jsx": "Wrench",
    "GroceryDeliveryApp.jsx": "ShoppingCart",
    "FoodDeliveryApp.jsx": "Coffee",
    "ECommerceApp.jsx": "ShoppingCart",
    "DatingAppDevelopment.jsx": "Heart",
    "BusinessDirectoryApp.jsx": "Briefcase"
};

const basePath = 'src/pages/solutions/Application Solutions/';

targetFiles.forEach(file => {
    const fullPath = path.join(basePath, file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');
    const iconToEnsure = configMap[file];

    // Find the lucide-react import
    // Note: the import block spans multiple lines: import { \n ... \n } from 'lucide-react';
    // Let's use a regex that captures the inside group accurately.
    const importMatch = content.match(/import\s*\{([\s\S]*?)\}\s*from\s*['"]lucide-react['"]/);
    if (importMatch) {
        const importBlock = importMatch[1];

        // Split by comma, trim
        const importedItems = importBlock.split(',').map(s => s.trim()).filter(Boolean);

        // Find if our specific icon name is imported (exact match to word boundary to avoid substrings)
        // Check if there's x as y, we just want to see if `icon` is in the list
        const isImported = importedItems.some(item => {
            const parts = item.split(/\s+as\s+/);
            return parts[0] === iconToEnsure;
        });

        if (!isImported) {
            importedItems.push(iconToEnsure);
            const newImportStr = "import {\n    " + importedItems.join(', ') + "\n} from 'lucide-react'";
            content = content.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"]lucide-react['"]/, newImportStr);
            fs.writeFileSync(fullPath, content);
            console.log("Fixed import in " + file + " added " + iconToEnsure);
        }
    }
});
console.log("Imports fixed successfully.");

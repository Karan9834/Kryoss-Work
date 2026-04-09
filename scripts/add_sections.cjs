const fs = require('fs');

const files = [
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Footer\\Products\\OurProducts.jsx',
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Footer\\Products\\PrimeProducts.jsx',
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Footer\\Products\\OthersProducts.jsx',
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Footer\\Products\\GamingProducts.jsx',
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Footer\\Products\\EnterpriseProducts.jsx'
];

const imports = `import Hero from '../Solutions/Application-Solutions/sections/Hero';
import FeaturesSection from '../Solutions/Application-Solutions/sections/FeaturesSection';
import OverviewSection from '../Solutions/Application-Solutions/sections/OverviewSection';
import ProsConsSection from '../Solutions/Application-Solutions/sections/ProsConsSection';\n`;

for (const f of files) {
    let content = fs.readFileSync(f, 'utf8');
    
    if (!content.includes('import Hero from')) {
        content = content.replace(
            "import { useNavigate } from 'react-router-dom';",
            "import { useNavigate } from 'react-router-dom';\n" + imports
        );
        
        content = content.replace(
            '<div className="mt-16">\n      <section',
            '<div className="mt-16">\n      <Hero />\n      <FeaturesSection />\n      <section'
        );
        
        content = content.replace(
            '</section>\n    </div>',
            '</section>\n      <OverviewSection />\n      <ProsConsSection />\n    </div>'
        );
        
        fs.writeFileSync(f, content, 'utf8');
        console.log(`Updated ${f}`);
    }
}

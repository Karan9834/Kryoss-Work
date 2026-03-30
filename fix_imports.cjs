const fs = require('fs');
const files = [
    'd:/kryoss/Kryoss-Work/src/pages/Works/OurWorks/SaasWorks.jsx',
    'd:/kryoss/Kryoss-Work/src/pages/Works/OurWorks/RealEstateWorks.jsx',
    'd:/kryoss/Kryoss-Work/src/pages/Works/OurWorks/BusinessWorks.jsx',
    'd:/kryoss/Kryoss-Work/src/pages/Works/OurWorks/FitnessAppsWorks.jsx',
    'd:/kryoss/Kryoss-Work/src/pages/Works/OtherWorks/MLMAppsWorks.jsx',
    'd:/kryoss/Kryoss-Work/src/pages/Works/OtherWorks/BettingAppsWorks.jsx'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace imports to go one level higher
        // Since it was 'import ... from "../../assets/...', we want 'import ... from "../../../assets/...'
        content = content.replace(/from\s+['"]\.\.\/\.\.\/components/g, "from '../../../components");
        content = content.replace(/from\s+['"]\.\.\/\.\.\/assets/g, "from '../../../assets");

        fs.writeFileSync(file, content);
        console.log('Fixed imports in ' + file);
    } else {
        console.log('File not found: ' + file);
    }
});

// Also fix AppRoutes.jsx paths
const appRoutesPath = 'd:/kryoss/Kryoss-Work/src/routes/AppRoutes.jsx';
if (fs.existsSync(appRoutesPath)) {
    let appContent = fs.readFileSync(appRoutesPath, 'utf8');

    appContent = appContent.replace(/import\s+(SaasWorks|RealEstateWorks|BusinessWorks|FitnessAppsWorks)\s+from\s+["']\.\.\/pages\/Works\/([a-zA-Z]+)["'];?/gi, "import $1 from '../pages/Works/OurWorks/$2';");
    
    appContent = appContent.replace(/import\s+(MLMAppsWorks|BettingAppsWorks)\s+from\s+["']\.\.\/pages\/Works\/([a-zA-Z]+)["'];?/gi, "import $1 from '../pages/Works/OtherWorks/$2';");
    

    fs.writeFileSync(appRoutesPath, appContent);
    console.log('Fixed AppRoutes.jsx');
}

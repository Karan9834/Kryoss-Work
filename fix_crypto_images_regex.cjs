const fs = require('fs');
const path = require('path');

const dirs = [
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Works\\Crypto Works',
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Works\\Gaming&Crypto'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
    
    files.forEach(f => {
        const filePath = path.join(dir, f);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Use a RegEx to find the whole src prop logic and replace it with just item.img
        // The current src looks like:
        // src={assetMap[item.asset] || (item.img?.startsWith('http') ? item.img : item.img ? `https://kryosssoftech.org/${item.img}` : 'https://kryosssoftech.org/icons/default-app.png')}
        
        // We can just replace the whole `<img src={...}` if it contains kryosssoftech.org
        // It's safer to just replace `https://kryosssoftech.org/${item.img}` with `${item.img}` 
        // AND `https://kryosssoftech.org/${item.asset}` with `${item.asset}` in these template literals:
        
        content = content.replace(/https:\/\/kryosssoftech\.org\/\$\{item\.img\}/g, '${item.img}');
        content = content.replace(/https:\/\/kryosssoftech\.org\/\$\{item\.asset\}/g, '${item.asset}');
        
        // This makes `item.img ? `/GamingandCrypto/Crypto.png` : ...` which evaluates perfectly to the local public path!

        fs.writeFileSync(filePath, content, 'utf8');
    });
});

console.log('Fixed Crypto/Gaming components via regex!');

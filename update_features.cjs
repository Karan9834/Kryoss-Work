const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/pages/solutions/**/*.{jsx,js}');
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Add h-[80px] flex
    content = content.replace(/className=\"group bg-white p-3 rounded-xl border-2 border-([A-Za-z0-9-]+)-200 hover:border-([A-Za-z0-9-]+)-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0\.5 cursor-pointer\"/g, 'className=\"group bg-white p-3 rounded-xl border-2 border-$1-200 hover:border-$2-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-[80px] flex\"');

    // 2. Add w-full
    content = content.replace(/<div className=\"flex gap-2\">/g, '<div className=\"flex gap-2 w-full\">');

    // 3. Add flex flex-col justify-center
    content = content.replace(/(<span.*?<\/span>\s*)<div>(\s*<h4)/g, '$1<div className=\"flex flex-col justify-center\">$2');

    // 4. Add leading-tight to h4
    content = content.replace(/(<h4 className=\"[^\"]*?group-hover:text-[A-Za-z0-9-]+-600 transition-colors)(\">)/g, (match, p1, p2) => {
        if (!p1.includes('leading-tight')) {
            return p1 + ' leading-tight' + p2;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
        console.log('Updated: ' + file);
    }
});
console.log('Total files updated: ' + updatedCount);

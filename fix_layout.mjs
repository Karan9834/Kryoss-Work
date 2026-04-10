import fs from 'fs';
import path from 'path';

const dirs = [
    'src/pages/solutions/Industries',
    'src/pages/solutions/Application Solutions',
    'src/pages/solutions/On Demand Solutions'
];

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Remove `h-[Xpx]` or `min-h-[Xpx]` ONLY from inside className="..." for feature cards
    content = content.replace(/(className="[^"]*group bg-white p-[34] rounded-[A-Za-z0-9]+ border-2[^"]*) h-\[\d+px\]([^"]*")/g, "$1$2");
    content = content.replace(/(className="[^"]*group bg-white p-[34] rounded-[A-Za-z0-9]+ border-2[^"]*) min-h-\[\d+px\]([^"]*")/g, "$1$2");

    // 2. Convert p-4 rounded-2xl to p-3 rounded-xl
    content = content.replace(/className="group bg-white p-4 rounded-2xl border-2/g, 'className="group bg-white p-3 rounded-xl border-2');

    // 3. Ensure flex items-start at the end of the feature card class
    content = content.replace(/(className="group bg-white p-3 rounded-xl border-2[^"]*) cursor-pointer flex"/g, '$1 cursor-pointer flex items-start"');
    content = content.replace(/(className="group bg-white p-3 rounded-xl border-2[^"]*) cursor-pointer"/g, '$1 cursor-pointer flex items-start"');

    // 4. Update the inner div: <div className="flex gap-2 w-full"> -> <div className="flex gap-2 w-full items-start">
    // Only replacing the exact string to be safe. Since there are a few variations, I'll be exact.
    content = content.replace(/<div className="flex gap-2 w-full">/g, '<div className="flex gap-2 w-full items-start">');

    // 5. Flatten CheckCircle icon spans
    const spanPattern = /<span className="([^"]+)">(?:\s*)<CheckCircle className="([^"]+)" \/>(?:\s*)<\/span>/g;
    content = content.replace(spanPattern, (match, spanClass, checkClass) => {
        const checkClasses = checkClass.split(' ');
        const spanClasses = spanClass.split(' ').filter(c => !c.includes('text-xl'));
        const combined = new Set([...checkClasses, ...spanClasses]);
        return `<CheckCircle className="${Array.from(combined).join(' ')}" />`;
    });

    // 6. Ensure CheckCircle has `flex-shrink-0`
    content = content.replace(/(<CheckCircle className="[^"]+)(" \/>)/g, (match, prefix, suffix) => {
        if (!prefix.includes('flex-shrink-0')) {
            return prefix + " flex-shrink-0" + suffix;
        }
        return match;
    });

    // 7. Make text sizes text-sm and text-xs, matching SocialNetworkingIndustry
    content = content.replace(/<h4 className="text-base /g, '<h4 className="text-sm ');
    content = content.replace(/<p className="text-sm text-slate-500/g, '<p className="text-xs text-slate-500');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

for (const dir of dirs) {
    if (fs.existsSync(dir)) {
        processDirectory(dir);
    }
}

console.log("Done");

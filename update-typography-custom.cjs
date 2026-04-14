const fs = require('fs');
const path = require('path');

const targetDir = 'd:\\kryoss\\Kryoss-Work\\src\\pages\\solutions\\Custom Solutions';

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, filesList);
    } else {
      if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
        filesList.push(fullPath);
      }
    }
  }
  return filesList;
}

const allFiles = getFiles(targetDir);

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // Remove Syne font family style
  content = content.replace(/style=\{\{\s*fontFamily:\s*['"]'Syne',\s*sans-serif['"]\s*\}\}/g, '');
  content = content.replace(/style=\{\{\s*\}\}/g, '');

  const isHero = file.toLowerCase().includes('hero') || (!file.includes(path.sep + 'sections' + path.sep)); 

  function updateClasses(classNameString, type) {
    let nc = classNameString
      .replace(/(?:sm|md|lg|xl|2xl):text-\[\d+px\]/g, '')
      .replace(/text-\[\d+px\]/g, '')
      .replace(/(?:sm|md|lg|xl|2xl):text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\b/g, '')
      .replace(/\btext-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\b/g, '')
      .replace(/\bfont-(?:thin|extralight|light|normal|medium|semibold|bold|extrabold|black)\b/g, '')
      .replace(/(?:sm|md|lg|xl|2xl):leading-(?:none|tight|snug|normal|relaxed|loose|\[[\d\.]+\])\b/g, '')
      .replace(/\bleading-(?:none|tight|snug|normal|relaxed|loose|\[[\d\.]+\])\b/g, '')
      .replace(/(?:sm|md|lg|xl|2xl):tracking-(?:tighter|tight|normal|wide|wider|widest|\[[-\d\.]+em\]|\[[-\d\.]+px\])\b/g, '')
      .replace(/\btracking-(?:tighter|tight|normal|wide|wider|widest|\[[-\d\.]+em\]|\[[-\d\.]+px\])\b/g, '')
      .replace(/\buppercase|lowercase|capitalize|normal-case\b/g, '')
      .replace(/\bmax-w-(?:xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full|min|max|fit|prose|\[[^\]]+\])\b/g, '')
      .replace(/(?:sm|md|lg|xl|2xl):max-w-(?:xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full|min|max|fit|prose|\[[^\]]+\])\b/g, '');

    nc = nc.replace(/\s+/g, ' ').replace(/\] \]\]/g, '').trim();

    if (type === 'hero-h1') {
      nc += ' text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]';
    } else if (type === 'hero-p') {
      nc += ' text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]';
    } else if (type === 'hero-btn') {
      nc += ' text-[16px] font-semibold tracking-[0.01em] normal-case';
    } else if (type === 'other-h2') {
      nc += ' text-[30px] md:text-[36px] font-bold leading-[1.2]';
    } else if (type === 'other-p' || type === 'other-li') {
      nc += ' text-[14px] md:text-[16px] font-normal leading-[1.6]';
    } else if (type === 'other-badge') {
      nc += ' text-[12px] font-medium tracking-[0.05em] uppercase';
    }

    return nc.trim();
  }


  if (isHero) {
    // H1
    content = content.replace(/<h1([^>]*?)className=(["']?)(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
      if(!p2) return match; // skip if no quotes
      return `<h1${p1}className="${updateClasses(p3, 'hero-h1')}"${p4}>`;
    });
    // H1 Spans
    content = content.replace(/<h1[\s\S]*?<\/h1>/g, (h1Block) => {
      return h1Block.replace(/<span([^>]*?)className=(["'])(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
         return `<span${p1}className="${updateClasses(p3, 'hero-h1')}"${p4}>`;
      });
    });
    // Hero P
    content = content.replace(/<p([^>]*?)className=(["'])(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
      // Allow fallback if it looks like a secondary paragraph
      if (p3.includes('text-[14px]') || p3.includes('text-sm')) return match; 
      return `<p${p1}className="${updateClasses(p3, 'hero-p')}"${p4}>`;
    });
    // Buttons and Links
    content = content.replace(/<(Link|button)([^>]*?)className=(["'])(.*?)\3([^>]*)>/g, (match, tag, p1, p2, p3, p4) => {
      if (p3.includes('bg-') || p1.includes('to=') || p4.includes('to=')) { 
          return `<${tag}${p1}className="${updateClasses(p3, 'hero-btn')}"${p4}>`;
      }
      return match;
    });
  } 

  // Other Sections (H2, H2 spans, non-hero P, LI, Badge)
  content = content.replace(/<h2([^>]*?)className=(["'])(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
    return `<h2${p1}className="${updateClasses(p3, 'other-h2')}"${p4}>`;
  });

  content = content.replace(/<h2[\s\S]*?<\/h2>/g, (h2Block) => {
    return h2Block.replace(/<span([^>]*?)className=(["'])(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
        if (p3.includes('text-transparent') || p3.includes('bg-clip-text') || p3.includes('text-white') || p3.includes('bg-gradient')) {
          return `<span${p1}className="${updateClasses(p3, 'other-h2')}"${p4}>`;
        }
        return match;
    });
  });
  
  if(!isHero) {
      content = content.replace(/<p([^>]*?)className=(["'])(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
        return `<p${p1}className="${updateClasses(p3, 'other-p')}"${p4}>`;
      });
  } else {
      content = content.replace(/<p([^>]*?)className=(["'])(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
        // Only target newly generated hero tags or actual hero-h tags
        if(p3.includes('max-w-[29rem]')) return match; 
        return `<p${p1}className="${updateClasses(p3, 'other-p')}"${p4}>`;
      });
  }

  content = content.replace(/<li([^>]*?)className=(["'])(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
    return `<li${p1}className="${updateClasses(p3, 'other-li')}"${p4}>`;
  });
  
  content = content.replace(/<span([^>]*?)className=(["'])(.*?)\2([^>]*)>/g, (match, p1, p2, p3, p4) => {
    if (p3.match(/\b(inline-block|inline-flex)\b/) && p3.match(/\brounded-[a-zA-Z0-9-]+\b/) && (p3.match(/\bbg-[a-zA-Z0-9-]+\b/) || p3.match(/\bborder\b/))) {
        return `<span${p1}className="${updateClasses(p3, 'other-badge')}"${p4}>`;
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
});

console.log("Transformation complete.");

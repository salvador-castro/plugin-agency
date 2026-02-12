const fs = require('fs');

// Read the CSS file
const cssContent = fs.readFileSync('src/index.css', 'utf-8');

// Remove duplicate carousel sections (lines 1618-1836)
let cleaned = cssContent;

// Remove first duplicate of trusted-by-section elements (keep the one starting at line 1230)
const duplicateCarouselStart = cssContent.indexOf('.trusted-by-section::before {\r\n  content: \'\';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 1px;\r\n  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.3), transparent);\r\n}\r\n\r\n.trusted-by-section .section-header {', 1600);

if (duplicateCarouselStart > 0) {
    const duplicateCarouselEnd = cssContent.indexOf('}\r\n}\r\n\r\n/* Problem Section', duplicateCarouselStart);
    if (duplicateCarouselEnd > 0) {
        cleaned = cleaned.substring(0, duplicateCarouselStart) + cleaned.substring(duplicateCarouselEnd + 3);
        console.log('✓ Removed duplicate carousel section');
    }
}

// Remove unused hero-bullets (lines 2325-2344)
const heroBulletsStart = cleaned.indexOf('/* Hero Updates */\r\n.hero-bullets {');
if (heroBulletsStart > 0) {
    const heroBulletsEnd = cleaned.indexOf('/* About Intro */\r\n.about-intro {', heroBulletsStart);
    if (heroBulletsEnd > 0) {
        cleaned = cleaned.substring(0, heroBulletsStart) + cleaned.substring(heroBulletsEnd);
        console.log('✓ Removed unused hero-bullets');
    }
}

// Remove unused about-intro styles (lines 2347-2578)
const aboutIntroStart = cleaned.indexOf('/* About Intro */\r\n.about-intro {');
if (aboutIntroStart > 0) {
    const aboutIntroEnd = cleaned.indexOf('/* Refined Process Section (Zig-Zag Timeline) */\r\n.process-timeline {', aboutIntroStart);
    if (aboutIntroEnd > 0) {
        cleaned = cleaned.substring(0, aboutIntroStart) + cleaned.substring(aboutIntroEnd);
        console.log('✓ Removed unused about-intro styles');
    }
}

// Remove unused zigzag process timeline (lines 2581-2692)
const zigzagStart = cleaned.indexOf('/* Refined Process Section (Zig-Zag Timeline) */');
if (zigzagStart > 0) {
    const zigzagEnd = cleaned.indexOf('/* Refined Contact Section (2 Columns) */\r\n.contact-wrapper.two-column-layout {', zigzagStart);
    if (zigzagEnd > 0) {
        cleaned = cleaned.substring(0, zigzagStart) + cleaned.substring(zigzagEnd);
        console.log('✓ Removed unused zigzag process timeline');
    }
}

// Remove unused section dividers (keep only section-divider-dot)
const dividersStart = cleaned.indexOf('/* Opción 1: Línea horizontal sutil con degradado */');
if (dividersStart > 0) {
    const dividersEnd = cleaned.indexOf('/* Opción 6: Separador con punto central */\r\n.section-divider-dot {', dividersStart);
    if (dividersEnd > 0) {
        cleaned = cleaned.substring(0, dividersStart) + '\r\n/* Section Divider (Dot Style) */\r\n.section-divider-dot {' + cleaned.substring(dividersEnd + 63);
        console.log('✓ Removed unused section dividers, kept only dot style');
    }
}

// Write the cleaned CSS
fs.writeFileSync('src/index.cleaned.css', cleaned, 'utf-8');

// Calculate statistics
const originalLines = cssContent.split('\n').length;
const cleanedLines = cleaned.split('\n').length;
const originalSize = Buffer.byteLength(cssContent, 'utf-8');
const cleanedSize = Buffer.byteLength(cleaned, 'utf-8');

console.log('\n📊 Cleanup Statistics:');
console.log(`Lines: ${originalLines} → ${cleanedLines} (${((1 - cleanedLines / originalLines) * 100).toFixed(1)}% reduction)`);
console.log(`Size: ${(originalSize / 1024).toFixed(1)}KB → ${(cleanedSize / 1024).toFixed(1)}KB (${((1 - cleanedSize / originalSize) * 100).toFixed(1)}% reduction)`);
console.log('\n✅ Cleaned CSS saved to: src/index.cleaned.css');
console.log('📝 Review the cleaned file, then rename it to index.css to replace the original');

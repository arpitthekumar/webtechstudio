import { execSync } from 'child_process';
import fs from 'fs';

// Step 1: Generate both domain sitemaps
execSync('npx next-sitemap --config next-sitemap.config.site.js', { stdio: 'inherit' });
execSync('npx next-sitemap --config next-sitemap.config.in.js', { stdio: 'inherit' });

// Step 2: Find all generated sitemap XML files
const sitemapFiles = fs
  .readdirSync('./public')
  .filter((file) => file.startsWith('sitemap-') && file.endsWith('.xml'));

// Step 3: Build sitemapindex content for sitemap.xml
const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapFiles
  .map((file) => {
    const domain =
      file.startsWith('sitemap-0') ? 'https://webtechstudio.site' : 'https://webtechstudio.in';
    return `  <sitemap><loc>${domain}/${file}</loc></sitemap>`;
  })
  .join('\n')}
</sitemapindex>`;

// Step 4: Write sitemap.xml
fs.writeFileSync('./public/sitemap.xml', sitemapXmlContent);
console.log('✅ sitemap.xml created successfully!');

// Step 5: Write plain-text robots.txt (classic format)
const robotsTxtContent = `User-agent: *
Allow: /

Host: https://webtechstudio.in

Sitemap: https://webtechstudio.site/sitemap.xml
Sitemap: https://webtechstudio.in/sitemap.xml
`;

fs.writeFileSync('./public/robots.txt', robotsTxtContent);
console.log('✅ robots.txt (classic format) created successfully!');

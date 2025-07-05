import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Generate sitemaps for both domains
execSync('npx next-sitemap --config next-sitemap.config.site.js', { stdio: 'inherit' });
execSync('npx next-sitemap --config next-sitemap.config.in.js', { stdio: 'inherit' });

// Read the public directory to find all sitemap files
const sitemapFiles = fs
  .readdirSync('./public')
  .filter((file) => file.startsWith('sitemap-') && file.endsWith('.xml'));

// Build full sitemapindex XML
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapFiles
  .map((file) => {
    const domain =
      file.startsWith('sitemap-0') ? 'https://webtechstudio.site' : 'https://webtechstudio.in';
    return `  <sitemap><loc>${domain}/${file}</loc></sitemap>`;
  })
  .join('\n')}
</sitemapindex>`;

// Write it as robots.txt (as a sitemapindex)
fs.writeFileSync('./public/robots.txt', sitemapIndex);
console.log("✅ robots.txt with all sitemap files generated successfully!");
